###### Quick Installation Guide

This is a guide for deploying repository on a single instance. For that
we\'ll use Amazon EC2 Instance with Linux AMI 2015.03. Make sure that
you opened 80, 22 and 3030 TCP ports, they will be used for Web access,
SSH and to connect tv tuners.

` - First, you'll need to install packets required for compilation, Apache and MySQL servers:sudo yum localinstall -y `[`http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm`](http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm)
`sudo yum install -y mysql-community-server`
`sudo yum install -y git gcc mysql-devel httpd24 php56 php56-mysqlndFirst two command will install MySQL server of 5.6 version as current Amazon repo has 5.1 or something which won't work with this repository`\
` - Run MySQL server and run //mysql_secure_installation// to set root password and to remove the insecure features. Then make it run at each system bootsudo service mysqld start`
`sudo mysql_secure_installation` `sudo chkconfig mysqld on`\
` - Download CCExtractor source code, compile and install it. The last command shall place ccextractor binary to /usr/bin/ directorygit clone `[`https://github.com/CCExtractor/ccextractor`](https://github.com/CCExtractor/ccextractor)
`cd ~/ccextractor/linux` `make` `sudo make install`\
` - Then clone git repository, compile and install itcd`
`git clone `[`https://github.com/rkuchumov/ccextractor-server`](https://github.com/rkuchumov/ccextractor-server)
`cd ccextractor-server/` `sudo make install`\
` - Create repository database and add tables:mysql -uroot <<< "CREATE DATABASE cc";`
`mysql -uroot cc < misc/tables.sqlIf you set root password for your database, make sure to set it using //--password="pass"// argument`\
` - Install web pages by executing //web/install.sh// script:cd web/`
`sudo ./install.sh`\
` - Edit ///etc/ccr/db.ini// config file to set data base user, and password. This setting will be used by server applicationdb-user = "root"`
`db-password = "pass" If you didn't set root password, leave //db-password// empty.`\
` - Edit the following lines in ///etc/httpd/conf.d/ccr.conf// to set database user and password for web pages:SetEnv CC_DB_USER cc_ro`
`SetEnv CC_DB_PASSWORD cc-read-only-user-passwordSet CC_DB_USER variable to your db user name, i.e. //root// and set password in CC_DB_PASSWORD. If your db user doesn't have any password, just remove this line.`\
` - Edit ///etc/httpd/conf/httpd.conf// and set //DocumentRoot// variable to "/var/www/public". In two places in the file.  I'll fix it later :)`\
` - Start and enable Apache server:sudo service httpd start`
`sudo chkconfig httpd on`\
` - Start and enable repository server application:sudo service ccr start`
`sudo chkconfig ccr on`\
` - That's it. You can access CC Repository from web browser. To connect the tuner to it use CCExtractor with //-sendto// option. Servers will listen for connections on 3030 port. Received closed captions will be stored in ///srv/archive/// directory.`
