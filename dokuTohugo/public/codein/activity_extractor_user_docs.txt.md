###### User Documentation for Activity Extractor

Activity Extractor aims to extract and download viewing activity from
popular video streaming services including: Netflix, Hulu and Amazon.
This process is automated and needs very little user interaction. It can
be called from the command line with the streaming service as a
parameter, and it outputs the viewing activity into a simple .txt file.

The program requires the user to have a valid login and password for the
streaming service they wish to retrieve viewing activity from.

##### Installation Instructions

Clone the repository from GitHub:

` git clone `[`https://github.com/ManveerBasra/ActivityExtractor`](https://github.com/ManveerBasra/ActivityExtractor)

### Install pip

If pip3 is not installed run this in a command window:

` sudo apt-get install python3-setuptools`\
` sudo easy_install3 pip`\
` sudo mv /usr/local/bin/pip /usr/local/bin/pip-3`\
` `

### Install Selenium

Run this in a command window:

` sudo pip3 install -U selenium`

### Install PhantomJS

Make sure you have NodeJS installed (https://nodejs.org/)\\\\ Using
Node\'s package manager run this in a command window:

` npm -g install phantomjs-prebuilt`

//\*\*Disclaimer: Use it at your own risk.\*\*//

##### Usage Instructions

### If credentials are already in userconfig.ini

Open a command window in directory containing ActivityExtractor.py\\\\
Run this command:

` python activityextractor.py [service]`\
` `

\[service\]: Put your streaming service here

### If credentials are NOT already in userconfig.ini

Open a command window in directory containing ActivityExtractor.py\\\\
Run this command:

` python activityextractor.py [service] --email=[email] --password=[password]`\
` `

\[service\] : Put your streaming service here\\\\ \[email\] : Put your
email address for the streaming service here\\\\ \[password\]: Put your
password here\\\\

If you\'re getting activity from Netflix, you must include an additional
parameter:

` ... --user=[user]`

\[user\] : Put your Netflix username here

### Please report any errors on GitHub along with the error message for support.
