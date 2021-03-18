##### Amazon AWS deployment

=

This is a guide for deploying, configuring and administrating CC
Repository on Amazon Web Service.

##### Server Architecture

First, let's consider server architecture. I suggest to use the
approach based only on EC2, RDS and ELB services provided by Amazon.

Server architecture includes the following components:

 - **MySQL server.** This server is based on Amazon RDS instance and is used for storing MySQL database and accessing it from other servers
 - **NFS server.** This EC2 instance is used for sharing file system across other servers and also for running some supplementary programs.
 - **Web servers.** These are EC2 instances responsible only for running Apache i.e. only for web access. They  are joined in autoscaling group which can start/terminate instances depending on chosen policies.
 - **Repository servers.** These are EC2 instances responsible only for running repository application (ccr) and receiving traffic from ccextractor (i.e. tuners) clients. They are also joined in autoscaling group.
 - **Web severs load balancer.** This is Amazon ELB that receives connections on 80 port and distributing them across web servers. Its DNS name end-clients would use to access web site from their browsers.
 - **Repository servers load balancer.** This Amazon ELB is used for handling connections from ccextractor applications and distributing them across repository servers.

##### Installation

#### Creating Security Groups

We'll need to create following [security
groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
with specified inbound rules:

### cc-tuners-lb

Security group for repository servers load balancer. For each server
with tuners you'll need to create an inbound rule with its IP as a
source.

^ Type ^ Ports ^ Source ^ | Custom TCP | 3030 | <servers_IPs> |

### cc-web-lb

Security group for web servers load balancer. This group grants access
from any IP to web pages.

^ Type ^ Ports ^ Source ^ | HTTP | 80 | 0.0.0.0/0 |

### cc-slave

Security group for EC2 instances in both autoscaling groups. It opens
ports for load balancer and NFS server. SSH is added for administration
purposes and can be removed later. To create rules for NFS you will have
create cc-master group first.

^ Type ^ Ports ^ Source ^ | All TCP | 0-65535 |
<cc-load-balancer sg-id> | | Custom TCP | 111 | <cc-master sg-id> |
| Custom TCP | 2049 | <cc-master sg-id> | | Custom UDP | 111 |
<cc-master sg-id> | | Custom UDP | 32806 | <cc-master sg-id> | |
SSH | 22 | "My Ip" |

### cc-master

Security group for NFS server.

^ Type ^ Ports ^ Source ^ | Custom TCP | 111 | <cc-slave sg-id>
| | Custom TCP | 2049 | <cc-slave sg-id> | | Custom UDP | 111 |
<cc-slaver sg-id> | | Custom UDP | 32806 | <cc-slaver sg-id> | |
SSH | 22 | "My Ip" |

### cc-db

Security group for RDS MySQL database instance.

^ Type ^ Ports ^ Source ^ | MYSQL/Auror | 3306 | <cc-slave sg-id>
| | MYSQL/Aurora | 3306 | "My Ip" |

#### Creating Database

 - [Launch RDS MySQL instance](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html) with //cc-db// security group.
 - Now you need to create database tables by calling mysql --user=root --password=root-password --host=...rds.amazonaws.com cc < misc/tables.sql
 - Then edit the following lines in //misc/users.sql// to set passwords for two users //cc_ro// and //cc_rw// that will be used to connect form PHP scripts and from server application.SET @ro_passwd = 'read-only-user-password';
SET @rw_passwd = 'read-write-user-password';
 - Execute this SQL file by callingmysql --user=root --password=root-password --host=...rds.amazonaws.com cc < misc/users.sql

#### Configuring NFS server

 - [Launch EC2 Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance_linux.html) based on Amazon Linux AMI with //cc-master// security group and connect to it.
 - [Create empty volume](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance_linux.html) in the same region as this instance.
 - Attach this volume to the instance. Let's say it's ///dev/xvdf//
 - Create file system on this volume: sudo mkfs -t ext4 /dev/xvdf
 - Add following line to the end of ///etc/fstab// file. It make system mount //xvdf// volume to ///srv// directory at server startup. /dev/xvdf /srv ext4 defaults,nofail 0 0
 - Mount this volume sudo mount -a
 - Create repository directories for storing logs, temporary files and files with captions: sudo mkdir /srv/logs /srv/web /srv/archive
 - Install git and clone source files to your home directory:sudo yum install git
git clone [https://github.com/rkuchumov/ccextractor-server](https://github.com/rkuchumov/ccextractor-server)
 - From //misc// directory install //ccr-watchdog// – a service that closes connections if they are no longer alive. It's not really important, but sometimes magic happens and connections doesn't close gracefully.cd ccextractor-server/misc
sudo ./install-watchdog.sh
 - The command above will place watchdog script to ///etc/init.d/// and configuration files to ///etc/ccr///. You'll need to place your database host, user with read-write access (cc_rw) and its password in ///etc/ccr/db.ini//
 - Now you need to start this service and make it run at each system bootsudo service ccr-watchdog start
sudo chkconfig ccr-watchdog on 
 - Next steps will set up NFS server itself. First, you need to install //nfs-utils// and //rpcbind//yum install nfs-utils rpcbind
 - Now you need to specify which directories to share and options for them. Create ///etc/exports// file with the following content:/srv/archive *(rw,async,no_root_squash,no_acl)
/srv/web *(rw,sync,no_root_squash,no_acl)
/srv/logs *(rw,sync,no_root_squash,no_acl)
 - Now you need to load the changes by callingsudo exportfs -ar
 - The following commands will start NFS service and related services and make them run on each system startupsudo service rpcbind start
sudo service nfs start sudo service nfslock start
sudo chkconfig rpcbind on sudo chkconfig nfslock on
sduo chkconfig nfs on
 - It's probably a good idea to create an image of this instance in EC2 console and turn on termination protection.

#### Configuring repository servers

 - [Launch EC2 Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance_linux.html) based on Amazon Linux AMI with //cc-slave// and //cc-tuners// security groups and connect to it.
 - First, we'll set up NFS client. You'll need to install //nfs-utils// and //rpcbind// by callingsudo yum install nfs-utils rpcbind
 - Start and enable NFS services:sudo service rpcbind start
sudo service nfslock start sudo chkconfig rpcbind on
sudo chkconfig nfslock on
 - Add the following lines to the end of ///etc/fstab//. It'll make the system mount these directories at each system boot. //nfs_server// is public DNS of your NFS server. You can find in EC2 console. It's something like //ec2-52-26-9-221.us-west-2.compute.amazonaws.com//nfs_server:/srv/web /srv/web nfs rw,noac,noacl,nocto,nodiratime 0 0
nfs_server:/srv/logs /srv/logs nfs rw,noac,noacl,nocto,nodiratime 0 0
nfs_server:/srv/archive /srv/archive nfs rw,async,noacl,nocto,nodiratime 0 0
 - To mount directories listed above callsudo mount -a
 - Next, we'll install repository application. First, you'll need to install Git and addition packages for compilationsudo yum install git gcc mysql-devel
 - Download CCExtractor source code, compile and install it. The last command shall place //ccextractor// binary to ///usr/bin/// directory[https://github.com/CCExtractor/ccextractor](https://github.com/CCExtractor/ccextractor) ~
cd ~/ccextractor make sudo make install
 - Download repository application source, compile and install it.git clone [https://github.com/rkuchumov/ccextractor-server](https://github.com/rkuchumov/ccextractor-server)
cd ccextractor-server sudo make install
 - Now you need to specify database host, user with read-write access (cc_rw) and its password in ///etc/ccr/db.ini// configuration file.
 - Start and enable repository service by calling:sudo service ccr start
sudo chkconfig ccr on
 - Finally, create instance image from EC2 console

#### Configuring web servers

 - [Launch EC2 Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance_linux.html) based on Amazon Linux AMI with //cc-slave// and //cc-web// security groups and connect to it.
 - First, we'll set up NFS client. You'll need to install //nfs-utils// and //rpcbind// by callingsudo yum install nfs-utils rpcbind
 - Start and enable NFS services:sudo service rpcbind start
sudo service nfslock start sudo chkconfig rpcbind on
sudo chkconfig nfslock on
 - Add the following lines to the end of ///etc/fstab//. It'll make the system mount these directories at each system boot. //nfs_server// is public DNS of your NFS server. You can find in EC2 console. It's something like //ec2-52-26-9-221.us-west-2.compute.amazonaws.com//nfs_server:/srv/web /srv/web nfs ro,noac,noacl,nocto,nodiratime 0 0
nfs_server:/srv/logs /srv/logs nfs rw,noac,noacl,nocto,nodiratime 0 0
nfs_server:/srv/archive /srv/archive nfs ro,noac,noacl,nocto,nodiratime 0 0
 - To mount directories listed above callsudo mount -a
 - Next, we'll install repository application, Apache, PHP and MySQL client. sudo yum install git httpd24 php56 php56-mysqlnd
git clone [https://github.com/rkuchumov/ccextractor-server](https://github.com/rkuchumov/ccextractor-server)
cd ccextractor-server/web/ sudo ./install.sh
  - The last command will copy web pages to ///var/www///, configure php.ini, and copy Apache configuration file to ///etc/httpd/conf.d///. You'll need to edit this file and set database host, read-only user (cc_ro) and its password in environment variables:SetEnv CC_DB_HOST localhost
SetEnv CC_DB_NAME cc SetEnv CC_DB_USER cc_ro
SetEnv CC_DB_PASSWORD read-only-user-password
  - Uncomment //ErrorLog /srv/logs/apache.log// line to redirect Apache error messages in /srv/logs/
  - Set //DocumnetRoot// to ///var/www/public/// in ///etc/httpd/conf/httpd.conf//.
  - Start and enable Apache server by calling sudo service httpd start
sudo chkconfig httpd on
  - Create instance image from EC2 Console.

#### Creating Load Balancers

 - Follow [ this guide](http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-register-lbs-with-asg.html) to create launch configuration, load balancers and auto scaling groups for web servers.
     - Launch configuration should contain web server instance image and //cc-slave// and //cc-web// security groups.
     - Load balancer should accept connections on 80 TCP port and have //cc-web-lb// security group.
 - Repeat the same procedure for repository servers
     - Launch configuration should contain repository server instance image and //cc-slave// and //cc-tuners// security groups.
     - Load balancer should accept connections on 3030 TCP port and have //cc-tuners-lb// security group.

##### Administration Guidelines

 * One connected CCExtractor client takes about 250-300 Mb of RAM. Thus, if your repository instance has 1GB of RAM, it can successfully handle 3 connected tuners.
 * .....
 * ????
 * TODO 
