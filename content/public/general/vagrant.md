# Using Vagrant

##### What is Vagrant?

Vagrant provides easy to configure, reproducible, and portable work
environments built on top of industry-standard technology and controlled
by a single consistent workflow to help maximize the productivity and
flexibility of you and your team. Vagrant will isolate dependencies and
their configuration within a single disposable, consistent environment,
without sacrificing any of the tools you are used to working with
(editors, browsers, debuggers, etc.). Once you or someone else creates a
single Vagrantfile, you just need to *%%vagrant up%%* and everything is
installed and configured for you to work. You can read more about the
advantages of Vagrant at <https://www.vagrantup.com/docs/why-vagrant/>

## Installation

 * Install vagrant for your OS [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html)
 * Install VirtualBox for your OS [https://www.virtualbox.org/wiki/Download_Old_Builds](https://www.virtualbox.org/wiki/Download_Old_Builds) **Warning:** Install VirtualBox **5.0** (Newer versions are not supported yet in vagrant). Version VirtualBox **5.0.30** at the top will be OK

## vagrant up

Download repository of CCExtractor from GitHub
<https://github.com/CCExtractor/ccextractor> (Or your fork of this repo)

The repository contains a file Vagrantfile that looks like this

```
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/xenial64"

  # Uncomment this line if you want to sync other folders
  # config.vm.synced_folder "/home/user/video", "/video"

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get install -y gcc
    sudo apt-get install -y libcurl4-gnutls-dev
    sudo apt-get install -y tesseract-ocr
    sudo apt-get install -y tesseract-ocr-dev
    sudo apt-get install -y libleptonica-dev
  SHELL

end
```
If you have not Vagrantfile, simply create it in project
folder and copy and paste in Vagrantfile all of the code from above.

Here it is clear that the system of the environment (or box, or virtual
machine) is Ubuntu 16.04. After 'vagrant up' vagrant installs
additional libraries in environment (not on host system!) for compiling
CCExtractor.

To start the environment, go to the folder with the project and run:
```vagrant up``` At first time it may take a while to create virtual machine
and install dependencies (about a minute or more), but in the next
launches it will take place much faster. This command launch the virtual
machine. For stop the virtual machine run: ```vagrant halt```

## vagrant ssh

To connect to the environment (environment must be launched), run in
project folder ```vagrant ssh```

If you want to return to your computer terminal, run ```logout```

By default, the project folder is synchronized with environment (that is
available in your computer, and in a virtual machine). The project
folder is located in /vagrant. 

Lets build the project

```
cd /vagrant
cd linux
./build
```

Now virtual environment and computer both have built CCExtractor in
folder linux. Even if your computer does not have curl, tesseract,
leptonica, gcc. Run in environment's linux folder `./ccextractor`
and you will see a description of the program. Run `./ccextractor [arguments]` to get subtitles.

##### Synced folders

Synced folders - those folders that are both available and in the
environment, and on the host computer. Initially synchronized folder is
only the project folder (where is Vagrantfile exists). You can
synchronize more folders - just uncomment this line in Vagrantfile
(delete the character '#' at the beginning of the line)

`config.vm.synced_folder "/home/user/video", "/video"` This means that
the folder with the path to "/home/user/video" will be available in
the envitonment with the path "/video". You can add any number of
folders, each folder on your line. Example changed Vagrantfile:

```
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.synced_folder "/home/MyName/video", "/video"
  config.vm.synced_folder "/home/MyName/Desktop", "/desk"
  config.vm.synced_folder "/home/MyName/Downloads/videofiles", "/stuff"

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get install -y gcc
    sudo apt-get install -y libcurl4-gnutls-dev
    sudo apt-get install -y tesseract-ocr
    sudo apt-get install -y tesseract-ocr-dev
    sudo apt-get install -y libleptonica-dev
  SHELL

end

```

Now, after changing Vagrantfile, if you have environment is launched,
you have to perform in the host computer terminal *%%vagrant reload
--provision %%*, or if stopped, run *%%vagrant up%%*

Example - subtitles will be created in synced folder /video

You can edit the code from both the host computer and the virtual
machine, and build it in virtual machine.
