###### User Documentation for Subtitle Downloader

### Introduction

The project deals with downloading of subtitles from popular online TV
Services like Netflix, BBC,Hulu. The project aims to perform this task
without the need for the user to interact with the browser. The process
is automated completely. The user just needs to input the URL of the
video and the application will download the subtitles. \\\\ For services
like YouTube, CrunchyRoll which have subtitles in multiple languages,
the user gets an option to choose the preferred language. \\\\ For
Netflix, Amazon the user needs to have a valid login and subscription to
the videos, only then the subtitles will be downloaded.

#### INSTALLATION INSTRUCTIONS

Clone the repository -

` git clone `[`https://github.com/abhishek-vinjamoori/SubtitleExtractor.git`](https://github.com/abhishek-vinjamoori/SubtitleExtractor.git)

Ensure that \"python 3\" is installed on your computer.

` sudo apt-get install python3`

\[DEPENDENCIES\]

Dependencies to be installed -

` pip install requests`

If pip3 is not installed -

` sudo apt-get install python3-setuptools`\
` sudo easy_install3 pip`\
` sudo mv /usr/local/bin/pip /usr/local/bin/pip-3`\
` sudo pip3 install -U selenium`\
` pip install beautifulsoup4`

//\*\*Disclaimer: Use it at your own risk.\*\*// \\\\

//Note : \\\\ For Amazon,Netflix subtitle downloads - \"Stable release
of Google Chrome is required.\"//

 **For Amazon, Netflix\*\* :\\\\

Make sure you already have Google Chrome installed.\\\\ Then download
and extract the contents of -
<http://chromedriver.storage.googleapis.com/index.html?path=2.22/> \\\\
You will get a file named \"chromedriver\" \\\\ Then go to the directory
where \"chromedriver\" is present and execute the following command :
\\\\

` sudo mv -t /usr/local/bin/ chromedriver`\
` (Move the chromedriver file into /usr/local/bin)`

\\\\

#### HULU

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for Hulu\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL (from Hulu website) for which Subtitles have to extracted and press "ENTER".`\
` *If multiple languages are available you will be prompted to choose the desired language option.`\
` *Subtitles will be downloaded.`

\\\\

#### YouTube

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for YouTube\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired YouTube URL from which Subtitles have to extracted and press "ENTER".`\
` *If multiple languages are available you will be prompted to choose the desired language option.`\
` *Subtitles will be downloaded.`

\\\\

#### Amazon

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for Amazon\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

//Note \~ Amazon requires that you have a valid subscription for that
particular video to download the subtitles//

These instructions need to followed whenever you want to \"change login
details\". -

` *Ensure that SubtitleExtractor.py and "setup.py" are executable. `

(Command for making them executable - chmod +x SubtitleExtractor.py
setup.py)

` *Open the file "userconfig.ini".`\
` *Type in your new Amazon Username and Amazon Password in the respective fields.`\
` *Save the file and exit.`\
` *Now run the file setup.py -  ./setup.py`\
` *If the setup is successfully done, you will see no errors.`

These instructions need to be followed when you are done with the one
time setup file. From now on, you can just follow these instructions
unless you want to change your login details \~

` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired Amazon URL from which Subtitles have to be extracted and press "ENTER".`\
` *If it is a movie, Subtitles will be downloaded normally.`\
` *If it is a TV Series, all the episodes of that season will be downloaded in a new folder with the corresponding title.`

\\\\

#### BBC

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for BBC\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

//Note \~ Please check that you are able to stream the video without any
geo-location errors.//

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL (from BBC website) for which Subtitles have to extracted and press "ENTER".`\
` *Subtitles will be downloaded.`

\\\\

#### CrunchyRoll

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for CrunchyRoll\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL (from Crunchyroll website) for which Subtitles have to extracted and press "ENTER".`\
` *You will be asked to choose the language in which the subtitles have to be downloaded based on the availability. Enter the corresponding number. `\
` *Subtitles will be downloaded in the chosen language.`

\\\\

#### Netflix

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for Netflix\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

//Note \~ Please check that you are able to stream the video without any
geo-location errors.//

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Open the file "userconfig.ini".`\
` *Type in your new Netflix Username and Netflix Password in the respective fields.`\
` *Save and exit.`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL of the video (from Netflix website) for which Subtitles have to extracted and press "ENTER".`\
` *Subtitles will be downloaded.`

\\\\

#### FOX

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for FOX\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

//Note \~ Please check that you are able to stream the video without any
geo-location errors.//

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL (from FOX website) for which Subtitles have to extracted and press "ENTER".`\
` *Subtitles will be downloaded.`

\\\\

#### Crackle

### \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--Instructions for Crackle\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

//Note:

` *Please check that you are able to stream the video without any geo-location errors.`\
` *After clicking on a TV show ensure that the URL contains some integer ID in it. Or else, click again on the episode from the playlist below to obtain the desired URL.//`

` *Ensure that SubtitleExtractor.py executable. (Command for making it executable - chmod +x SubtitleExtractor.py)`\
` *Run the python file - ./SubtitleExtractor.py`\
` *Paste the desired URL (from Crackle website) for which Subtitles have to extracted and press "ENTER".`\
` *Subtitles will be downloaded.`

\\\\ \\\\

### Please report any errors on GitHub along with the error message for support.
