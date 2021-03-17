# Project Nephos

//Developed under Google Summer of Code, 2018 with CCExtractor
Development By [Shivam Kumar
Jha](https://github.com/thealphadollar)//

------------------------------------------------------------------------

##### Introduction

Project Nephos aims at simplifying the process of moving samples from
local storage to cloud for Universities by automating, almost, all the
steps involved. It consists of three independent modules; recording
module, processing module, and uploading module.

The recording module is responsible for managing the addition of channel
lists, set up of recording jobs and saving the recorded streams. The
processing module parses saved samples, associates tags, extracts
subtitles and converts the video files to MP4 to reduce the file size.
The uploading module then uploads the processed stream files to FTP
server (if config is completed) and Google Drive, and also shares the
sample with other universities (whose email addresses must be provided)
if required.

Nephos has been developed, using Python and few other open source
projects, to accomplish all the above-mentioned tasks with cent-percent
reliability and zero failures (unless wrong data is input, which will
get logged). Testing and logging has been an integral part of Nephos
development and running cycle, respectively.

##### Project Related Links

` * Project Repository on GitHub `[`Nephos`](https://github.com/thealphadollar/Nephos)\
` * My blogs on the project `[`GSoC`` ``Blogs`](https://thealphadollar.github.io/tags/gsoc.html)

##### Installation

-   *git clone <https://github.com/thealphadollar/nephos.git>* && *cd
    nephos*

<!-- -->

-   On centOS 6 run the script, *sudo ./install.sh*

<!-- -->

-   Observe and modify configurations available in
    *\$HOME/Nephos/config* (especially maintenance and module
    configurations, and processing script)

<!-- -->

-   Add nephos\_start.sh as a cron job to be executed at startup in root
    crontab. *\@restart /path/to/nephos\_start.sh 2&\>
    \~/Nephos/boot\_start.log*

<!-- -->

-   Run nephos using *sudo ./nephos\_start.sh*. This command runs Nephos
    under a new screen session. Press *ctrl + a* and then *d* to detach
    from the session while it keeps running in the background.

<!-- -->

-   You can see the recordings in [ Google
    Drive](https://www.google.com/drive/) of your linked
    Google Account. **The logs of the program are uploaded to
    "Nephos\_Logs" folder for Redhen account.**

##### To Add Channels And Jobs

Please go to [Nephos
Config](https://www.github.com/thealphadollar/NephosConfig)
repository to modify the channels, jobs and share lists that Nephos
works on.

##### Developer's Documentation

Developers can view the documentation that is present for users since it
is detailed and one needs to read it in order to understand how Nephos
functions. Along with that, docstrings have been placed in HTML format
in docs/DevDocs and can be accessed in a systematic manner by opening
*docs/DevDocs/nephos.html* in a browser.

They can also be viewed
[here](https://thealphadollar.github.io/NephosDevDocs/).

##### More Info

For more information regarding using Nephos and how it works, [visit the
wiki](https://github.com/thealphadollar/Nephos/wiki)
