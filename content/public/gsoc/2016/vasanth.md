---
title: "Commercial detection"
---

The commercial detection system identifies and reports the location of
commercials in a given segment of TV recording. Once a database of
commercials is created using the interface provided, it is able to
achieve a detection accuracy of 100%. There is a command line interface
which takes as input a video and outputs the location and contents of
each of the commercials. The person who is maintaining the system can
then seek through the video and classify parts of the video using a web
interface. Once this is done, another command is executed which updates
the database with the ads classified by the maintainer. Usually, with
good maintenance, the system is able to detect all the commercials on
TV.

### Formats

Input video
-----------

All formats accepted by ffmpeg. Popularly MPEG, MP4, AVI, MKV.

Output txt file
---------------

The program by default creates a file called output.txt. This can be
changed by editing src/constants.py. The format of the file is as
follows:

start - end = Name of content

Eg:

```
00:00:38 - 00:00:53 = ad by jeopardy
00:00:53 - 00:01:06 = ad by jerome's
```
### Working of the entire system

The system works based on the concept of audio fingerprinting. The main
logic is, fingerprint the audio of the regions initially hand picked and
marked by the user. Store these fingerprints in a database. To identify
commercials on an unknown stream of video, we obtain the audio for the
given video file. We scan through the audio to detect matching
fingerprints in the database. We store these matched segments as
commercials in the output and the undetected segments as
"Unclassified". A sample output from the system is as below.
```
00:01:39 - 00:02:09 = ad by honda
00:02:09 - 00:02:16 = ad by eye witness news
00:02:16 - 00:04:19 = unclassified
00:04:19 - 00:04:48 = ad by hbo
00:04:48 - 00:05:04 = ad by el polo loco
00:05:04 - 00:05:34 = ad by Northrop grumman
00:05:34 - 00:06:05 = ad by TobaccoFreeCa.com
```

Now, it is seen that section 2:16 till 4:19 is unclassified. If a human
could watch this segment of the video then the person can tag this
segment correctly. Such an option is provided by the web interface (to
seek to the required portion of the video and tag the content). Once all
such unclassified regions are viewed by the human another command has to
be executed, which updates the database with these new commercials.

#### Generating the database

To start the system, one has to create a file for a given video which
has the list of commercials which are present in the video. This file
has to be manually created by watching the video. The format of the
file, should match the format of the output file as shown above. Once
this is ready, the database is generated with the help of the following
command.

`python main.py -g labels.txt video.mpg`

Where labels.txt should contain the location and the content of the
commercials in video.mpg. The program updates the database **only
if** a commercial having the **same name is not** already present
in the database.

This part of the program, requires the directories data/, data/audio and
data/video to be present. The commercials found in those regions are
stored in data/video, their corresponding audio, for fingerprinting
purpose, stored in data/audio. The files are created in serial order of
the commercials found.

Another file called commercial.csv is also created. This file contains a
visual view of the database in excel form. It is best to **not
edit** this file, since the creation of the output file by the system
relies on the order of the contents in this file.

 **Note:When running generate for the first time, see to that there
        is no file called commercials.csv, the tables songs and
        fingerprints in dejavu detabase are empty and in db/audio and
        db/video, there is only file ".temp". If all of these
        conditions are not met, then it leads to errors**

#### Detection of commercials

The detection of commercials for a given video is done by first
obtaining the audio of the video. The audio by default is named
temp.wav. It is a single channel audio file. This file is automatically
deleted when the program finishes execution. The audio-fingerprinting
method obtains a 100% match with just 4 seconds of audio sample obtained
from any location of the commercial. VIDEO_GAP, VIDEO_SPAN are two
parameters which decide how this analysis should be done. VIDEO_SPAN,
how much of the audio is to be taken. VIDEO_SPAN, how much of the audio
to be skipped for analysis. The following command runs the detection on
the video

`python main.py -r video.mpg`

The command creates a file called output.txt in the same directory where
the command was executed. If such a file already exists, then it over
writes that file.

#### Manually classifying content

The most basic way to tag unclassified content would be to edit
output.txt and run the steps to populate the database again. But this is
a cumbersome procedure so there is an interface provided to make the
entire procedure easy. The interface can be seen using the following
commands.

`python main.py -l output.txt video.mpg`

By default this command searches for output.txt in the current working
directory of the terminal, it assumes that this file corresponds to
video.mpg and starts a local server where contents can easily be tagged.
To change the default setting of output.txt, change the variable name
OUTPUT in constants.py.

To start the web interface, we have to run gunicorn as a daemon, this is
done in start_server.sh present in src/web. Run the shell script as
follows **in src/web**:
```
   chmod +x start_server.sh
   ./start_server.sh
```
This makes gunicorn, run on port 127.0.0.1:8000.

In the web interface, there is are seek and edit buttons. "seek" seeks
the video to the required starting point of the block and edit allows
the user to edit the tag given to that block. Once done tagging the
content, one may chose to click on "Save changes". This saves the
changes made and stores it in output.txt. After the changes have been
saved, to make the update in the database, run the following command.

`python main.py -g output.txt video.mpg`

This concludes all the features of the system.

When tagging unclassified content, if it is a commercial, it should
start with "ad", this helps the system detect it is a commercial so
that it can fingerprint it in the database.

 **Note:** The ads currently present in the database at any time can be viewed by navigating to the folder db/video.

### Common unnoticeable bugs

Check if all the versions of the software comply with the system
requirements mentioned on the github page. Even if it does not comply,
the program will run, but the output will be erroneous. One example is,
most ubuntu 12.04 distributions come with ffmpeg installed, but it is
version 1.8. This version of ffmpeg has a different way of decoding the
video, so even though no errors pop up, the output will be wrong.

### Note about the proposal

The GSOC proposal I wrote stated that I would incorporate both audio
based and video based methods into the system , theoretically this
should give better user interface since the entire video is divided into
blocks, which is more easy for the user to deal with.

I implemented the entire thing as per the proposal and it turned out
that it became more work for the user since the video+audio based
classification method of dividing the video into blocks gave an accuracy
of only 94%. Even though this accuracy is great, that 6% of blocks this
misses adds a lot more work to the user. Which is why I decided to
create a new branch for this part of the code and keep the neat part in
the master branch. The master branch hence has code which is more user
friendly.

# Web interface of the system

The web interface appears as follows, the interface is made as similar
to the current interface for tagging content in Red Hen Labs.
<http://www.redhenlab.org/home/tutorials-and-educational-resources/how-to-use-the-online-tagging-interface>.

The figure below, shows the first screen when the interface is opened.

We can go to each of the labels and edit in place, changes will be made
immediately through AJAX. '+' button is used to split a label into two
parts. When we click on that button, we get an image, that looks similar
to this.

# Deploying the system on your local machine

### Installing dependencies

This is done by running dependencies.sh file. Please edit the file for
the corresponding architecture of your machine(x86 or amd64).

### General configurations

All configuration can be done by editing the file constants.py. There is
no need in general to edit this file, however, when you are running the
system for the first time, you will have to do the following.

 - Create a mysql database named dejavu(preferably)
 - Edit the variable "CONFIG" in constants.py to reflect the username, password of the database, also the name of the database too. An example of the config variable is as follows:
```
   CONFIG = {
       "database": {
           "host": "127.0.0.1", #The default mysql IP
           "user": "root", #Username of mysql
           "passwd": "pass", #Password of mysql
           "db": "dejavu" #Name of the database just created
       }
   }
```
### Configuring the web server

I found that deploying the django app on Nginx + Gunicorn is the
easiest, Apache gave rise to too many bugs and lighttpd gave some
fastcgi bugs which I could not resolve. The following are the steps to
follow to deploy your own server.

`sudo nano /etc/nginx/sites-enabled/nginx.conf`

Now, in the config file type the following:
```
   server {
       listen 89; #Can be changed accordingly
       access_log /new/path/to/access.log;
       error_log /new/path/to/error.log;
       location /static {
           root /path/to/CommercialDetection/src/web/output/;
       }
       location / {
           proxy_pass [http://127.0.0.1:8000](http://127.0.0.1:8000); #Communicate with gunicorn.
       }
   }
```
Once this is done, we restart the server.

`sudo service nginx restart`

 **Note:The above config file cannot be copied as is, the paths have to be specified. It is best to keep CommercialDetection in /var/www/ where it is accessible to nginx **

# Evaluating the system

The system contains a manually tagged database of 60 commercials. The
database can be built by running generate on data/filename.txt with the
corresponding filename.mpg in RawFilesWithCommercials. It detects all
the commercials for
2015-04-28_0100_US_KABC_Eyewitness_News_6PM.mpg, since this was
the video that was tested on innumerable number of times during
development you can expect the best result from this.

The channels KABC and CBC have been used for generating ads. The
remaining channels serve as a good ground for testing the system.

The system can be thoroughly evaluated by doing the following:

 - First clone the system from git
 - Run dependencies.sh (If not done already)
 - Run 'generate' on the videos using the labels provided in data/ = This will build a database, which can be verified by looking at the database dejavu.
 - Run 'recognize' on any video.
 - Run 'Manually tagging ads' on the same video, with the output file obtained.
 - Label at least one new commercial, to test the web interface. Also, verify the working of the buttons.
 - Now, the button "save changes" will save the changes in labels.txt
 - Run generate on labels.txt to get new commercials into the db.
 - The content of the db can be viewed through commercials.csv.

### Blog report

A commercial detection system was built, which obtained 100% detection
of commercials. The system detects the location and the content of ads
in any stream of video, regardless of the content being being broadcast
and other transmission noise in the video. An online interface was built
along with the system to allow regular maintenance.
