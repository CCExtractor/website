###### Activity Extractor Technical Documentation

This page contains how the service modules were coded and also how to
add support for a new service.

##### Module Information

#### ActivityExtractor.py

This module is responsible for processing the parameters passed through
the command line and calling the appropriate streaming service.

It passes the streaming service a dictionary containing credentials
required to complete the process\\\\ The dictionary is formatted like
this:

` parameters = {`\
`   'url': self.url,`\
`   'email': self.email,`\
`   'password': self.password,`\
`   'user': self.user`\
` }`\
` `

url: The url the driver initially navigates to.\\\\ email: The email
required to log into the service.\\\\ password: The password associated
with the email.\\\\ user: //(Only required for Netflix)// The profile
name the user wishes to retrieve viewing activity from.\\\\

#### common.py

Contains modules common to all services.

\> output\_activity(SERVICE, activity\_list)
--------------------------------------------

Module to output activity into a .txt file.\\\\ \\\\ Accepts 2
parameters \'SERVICE\' and \'activity\_list\':\\\\ SERVICE: Name of the
service calling the function.\\\\ activity\_list: List of viewing
activity extracted from the streaming service.\\\\

#### hulu.py

Gets viewing activity from Hulu.

\> get\_activity()
------------------

Called from the Main Module. It\'s main purpose is to initialize the
process and call login\_hulu()

\> login\_hulu()
----------------

First this function creates an instance of Chrome and passes potential
arguments to the driver.\\\\ It then navigates to www.hulu.com and logs
in with the user credentials. Then calls navigate\_site()

\> navigate\_site()
-------------------

The main purpose of this function is to navigate to the \'History\' page
on Hulu.

\> navigate\_pages()
--------------------

Depending on the length of the user\'s viewing history there may be
multiple pages of viewing history.\\\\ This function calls
get\_page\_activity() for every page of viewing history. Then calls
common.output\_activity().\\\\

\> get\_page\_activity()
------------------------

Gets all the viewing activity on the current viewing history page. Also
displays a progress bar to the user.\\\\

#### amazon.py

Gets viewing activity from Amazon.

\> get\_activity()
------------------

Called from the Main Module. It\'s main purpose is to initialize the
process and call login\_amazon()

\> login\_amazon()
------------------

First this function creates an instance of Chrome and passes potential
arguments to the driver.\\\\ It then navigates to
<https://www.amazon.com/gp/sign-in.html> and logs in with the user
credentials. It then navigates to the viewing history page by passing a
url to the driver. Calls navigate\_pages()

\> navigate\_pages()
--------------------

Depending on the length of the user\'s viewing history there may be
multiple pages of viewing history.\\\\ This function calls
get\_page\_activity() for every page of viewing history. Then calls
common.output\_activity().\\\\

\> get\_page\_activity()
------------------------

Gets all the viewing activity on the current viewing history page.\\\\

#### netflix.py

Gets viewing activity from Netflix.

\> get\_activity()
------------------

Called from the Main Module. It\'s main purpose is to initialize the
process and call login\_netflix()

\> login\_amazon()
------------------

First this function creates an instance of Chrome and passes potential
arguments to the driver.\\\\ It then navigates to
<https://www.netflix.com/Login> and logs in with the user credentials.
It then calls get\_active\_profile()

\> get\_active\_profile()
-------------------------

Selects user profile based on profile name present in
parameters\[\'user\'\]. Calls navigate\_site()

\> navigate\_site()
-------------------

Calls hover\_click() then clicks the \'Viewing Activity\' link once
hover\_click() has navigated to the user\'s account page. Then calls
scroll\_to\_bottom()

\> hover\_click()
-----------------

Hovers on the profile icon in the top right corner of the Netflix
homepage. Then clicks on \'Your Account\' on the dropdown menu that
appears. Returns True or False depending on whether the process was
successful.

\> scroll\_to\_bottom()
-----------------------

Depending on the length of the user\'s viewing activity Netflix displays
only a portion of it. In order to have Netflix display the full list
this function is called.\\\\ Scrolls to the bottom of the page and waits
for Netflix to load the next dynamic page of activity. This may be
repeated multiple time until all of the activity is displayed. Calls
get\_page\_activity()

\> get\_page\_activity()
------------------------

Gets all viewing activity from the page. Displays a progress bar to the
user. Calls common.output\_activity()\\\\

##### New Service Instructions

In order to add a new service to the platform, follow these steps.

#### Instructions

 **1\. Add your service and it\'s parameters to the file
        \'userconfig.ini\'\*\*\\\\

Follow this format when adding your service:

` [SERVICE_NAME]`\
` url      = service_login_page_url`\
` email    = test@email.com`\
` password = test`\
` `

 **2\. Create a .py file for your service.\*\*\\\\

Take a look at hulu.py, amazon.py or netflix.py as a reference.\\\\ \\\\
Your file must have a class containing all of the functions required to
login and get viewing activity. The class should be named like
\'SERVICE\_NAMEActivityExtractor\'.\\\\ Example:
NetflixActivityExtractor\\\\ \\\\ Your class\'s init() function needs to
accept an argument that will contain the parameters which
ActivityExtractor.py will pass.\\\\ Here is the general format:

` def __init__(self, parameters):`\
`   self.parameters = parameters`\
`   self.driver = None`\
`   ...`\
`   `

The main things your function should accomplish:\\\\

`- Log into streaming service\\`\
`- Navigate to viewing activity page\\`\
`- Retrieve viewing activity\\`\
`- Display progress bar (if possible)\\`\
`- Call common.output_activity() to output viewing activity into a .txt file\\`

\\\\ common.output\_activity() accepts 2 parameters. The first is the
name of the viewing service, the second is a list containing all of the
viewing activity. Make user to \'import common\' to use the
function.\\\\ \\\\

 **3\. Add you service into ActivityExtractor.py.\*\*\\\\

In \'ActivityExtractor.py\', create an import statement to import your
service class from your service file.\\\\ It should be something like
this:

` from SERVICE_NAME import SERVICE_NAMEActivityExtractor`

Next you have to add your service into supported\_services.\\\\ In the
ActivityExtractor, the init() function has a dictionary named
\'self.supported\_services\'. Add your service into the dictionary
following the format of the other services.\\\\ It should look something
like this:\\\\

` self.supported_services = {`\
`   'amazon': AmazonActivityExtractor,`\
`   'hulu': HuluActivityExtractor,`\
`   'netflix': NetflixActivityExtractor,`\
`   'SERVICE_NAME': SERVICENAMEActivityExtractor`\
` }`\
` `

 **4\. Test the program with your service and report any errors.\*\*\\\\

If your service worked successfully create a pull request to the
repository and it\'ll be added. If any errors are thrown that you can\'t
solve yourself, create an issue in the repository and we\'ll try helping
you out.\\\\ \\\\

 **5\. Add your service to this documentation page.\*\*\\\\

Contact Carlos to get login credentials for this page and add your
service following the format of the other streaming services.\\\\ \\\\
\\\\

 **For bug fixes create an issue on the repository\*\*\\\\
    -   For any other inquiries contact me at m13basra\@gmail.com\*\*
