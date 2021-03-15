# Configuration options

This document describes repository application and website configuration
options

##### Repository application config

There are 3 ways to configure server application: config files,
environment variables and command line arguments. Options from config
files can be overwritten by environment variables which can be
overwritten by cmd arguments.

To get a list of options\' values that application will use in runtime,
you can call it with //-a// or //\--variables// argument.

Default location of config file is ///etc/ccr/ccr.ini//, but its
location can be overwritten. There is also separate config file
///etc/ccr/db.ini// that canbe used for storing database connection
parameters.

Syntax of config file is similar to INI format:

` * One key-value pair per line separated by equal sign`\
` * Semi-column is used for comments`\
` * String values should be double-quoted`\
` * Boolean values is //true/false/1/0//`

Bellow is a list of options supported by server application. Option name
is represented by its name in config files, environment variable and
command line argument.

 **daemon\*\*, env: \*\*CC\_DAEMON\*\*, cmd: \*\*\--daemon\*\*\\\\

Default: false\\\\ if true, server shall run as standalone daemon
process.\\\\

 **db-host\*\*, env: \*\*CC\_DB\_HOST\*\*, cmd:
        \*\*\--db-host\*\*\\\\

MySQL server host.\\\\

 **db-user\*\*, env: \*\*CC\_DB\_USER\*\*, cmd:
        \*\*\--db-user\*\*\\\\

MySQL user name when connecting to the server.\\\\

 **db-password\*\*, env: \*\*CC\_DB\_PASSWORD\*\*, cmd:
        \*\*\--db-password\*\*\\\\

MySQL user password to use when connecting to the server.\\\\

 **db-name\*\*, env: \*\*CC\_DB\_NAME\*\*, cmd:
        \*\*\--db-name\*\*\\\\

MySQL database name to use.\\\\

 **db-timezone\*\*, env: \*\*CC\_DB\_TIMEZONE\*\*, cmd:
        \*\*\--db-timezone\*\*\\\\

Default: +00:00\\\\ MySQL database time-zone varable value.\\\\

 **port\*\*, env: \*\*CC\_PORT\*\*, cmd: \*\*\--port\*\*\\\\

Default: 3030\\\\ TCP port for accepting CCExtractor connections.\\\\

 **password\*\*, env: \*\*CC\_PASSWORD\*\*, cmd:
        \*\*\--password\*\*\\\\

The password clinets must use for their captions to accepted. If it\'s
epmty, server doesn\'t require password.\\\\

 **ping-interval\*\*, env: \*\*CC\_PING\_INTERVAL\*\*, cmd:
        \*\*\--ping-interval\*\*\\\\

Default: 3\\\\ The interval (in seconds) between sending keep-alive
pakets to the clinet.\\\\

 **ping-timeout\*\*, env: \*\*CC\_PING\_TIMEOUT\*\*, cmd:
        \*\*\--ping-timeout\*\*\\\\

Default: 20\\\\ The number of seconds server waits for keep-alive
packets before closing connection.\\\\

 **pid-file\*\*, env: \*\*CC\_PID\_FILE\*\*, cmd:
        \*\*\--pid-file\*\*\\\\

Default: /var/run/ccr.pid\\\\ Path to PID file when running in daemon
mode.\\\\

 **config-file\*\*, env: \*\*CC\_CONFIG\_FILE\*\*, cmd:
        \*\*\--config-file\*\*\\\\

Default: /etc/ccr/ccr.ini\\\\ Path to server\'s configuration file.
(Note that this cmd argument doesn\'t work now)\\\\

 **db-config-file\*\*, env: \*\*CC\_DB\_CONFIG\_FILE\*\*, cmd:
        \*\*\--db-config-file\*\*\\\\

Default: /etc/ccr/db.ini\\\\ Path to database connection configuration
file. (Note that this cmd argument doesn\'t work now)\\\\

 **error-log\*\*, env: \*\*CC\_ERROR\_LOG\*\*, cmd:
        \*\*\--error-log\*\*\\\\

Default: /var/log/ccr-error.log\\\\ Path to the log file with
errors.\\\\

 **debug-log\*\*, env: \*\*CC\_DEBUG\_LOG\*\*, cmd:
        \*\*\--debug-log\*\*\\\\

Default: /var/log/ccr-debug.log\\\\ Path to the log file with debug
messages. To create this file you should set \--verbose option to
true.\\\\

 **log-stderr\*\*, env: \*\*CC\_LOG\_STDERR\*\*, cmd:
        \*\*\--log-stderr\*\*\\\\

Default: false\\\\ If true log messages will be outputed to standart
output (stdout) and no log files will be created. You can\'t use this
option in daemon mode\\\\

 **verbose\*\*, env: \*\*CC\_VERBOSE\*\*, cmd:
        \*\*\--verbose\*\*\\\\

Default: false\\\\ If true debug log messages will be printed in log
file\\\\

 **web-buffer-dir\*\*, env: \*\*CC\_WEB\_BUFFER\_DIR\*\*, cmd:
        \*\*\--web-buffer-dir\*\*\\\\

Default: /srv/web\\\\ Path to the directory shall contain website buffer
files.\\\\

 **buffer-file-max-lines\*\*, env:
        \*\*CC\_BUFFER\_FILE\_MAX\_LINES\*\*, cmd:
        \*\*\--buffer-file-max-lines\*\*\\\\

Default: 200\\\\ The max number of lines in website buffer file. When
number of lines reaches thisvalue, several first lines is removed so
that the file contains \'buffer-file-min-lines\' lines.\\\\

 **buffer-file-min-lines\*\*, env:
        \*\*CC\_BUFFER\_FILE\_MIN\_LINES\*\*, cmd:
        \*\*\--buffer-file-min-lines\*\*\\\\

Default: 100\\\\ The number of lines website buffer file will be cropped
to when it reaches \'buffer-file-max-lines.\'\\\\

 **archive-dir\*\*, env: \*\*CC\_ARCHIVE\_DIR\*\*, cmd:
        \*\*\--archive-dir\*\*\\\\

Default: /srv/archive\\\\ Path to the directory that shall contain files
with closed captions (.srt, .txt, .bin)\\\\

 **program-change-timeout\*\*, env:
        \*\*CC\_PROGRAM\_CHANGE\_TIMEOUT\*\*, cmd:
        \*\*\--program-change-timeout\*\*\\\\

Default: 7200\\\\ The number of seconds untill current program is
changed to unknown, (if no EPG is reported)\\\\

 **program-change-eps\*\*, env: \*\*CC\_PROGRAM\_CHANGE\_EPS\*\*,
        cmd: \*\*\--program-change-eps\*\*\\\\

Default: 120\\\\ The maximum gap in seconds between adjacent EPG enevts.
If the gap is large, current program is changed to undefined.\\\\

 **store-cc\*\*, env: \*\*CC\_STORE\_CC\*\*, cmd:
        \*\*\--store-cc\*\*\\\\

Default: true\\\\ If true, closed catptions will be stored in filesystem
and in database. If it\'s false, database is still required for storing
info about active connections.\\\\

 **ccextractor-path\*\*, env: \*\*CC\_CCEXTRACTOR\_PATH\*\*, cmd:
        \*\*\--ccextractor-path\*\*\\\\

Default: /usr/bin/ccextractor\\\\ Path to CCExtractor executable.\\\\

 **ccextractor-output-dir\*\*, env:
        \*\*CC\_CCEXTRACTOR\_OUTPUT\_DIR\*\*, cmd:
        \*\*\--ccextractor-output-dir\*\*\\\\

Default: /tmp/cce-output\\\\ Path to the directory that shall contain
CCExtractor output files.\\\\

 **ccextractor-input-dir\*\*, env:
        \*\*CC\_CCEXTRACTOR\_INPUT\_DIR\*\*, cmd:
        \*\*\--ccextractor-input-dir\*\*\\\\

Default: /tmp/cce-input\\\\ Path to the directory that shall contain
CCExtractor intput files.\\\\

##### Web pages config

Web pages a configured using Apache environment variables. These
variables can be set in //web/ccr.conf// file or in
///etc/httpd/conf.d/ccr.conf// after installation.

Supported variables are:

` * **CC_DB_HOST** --- MySQL server host.`\
` * **CC_DB_NAME** --- MySQL database name to use.`\
` * **CC_DB_USER** --- MySQL user name when connecting to the server.`\
` * **CC_DB_PASSWORD** --- MySQL user password to use when connecting to the server. If it is not set, then empty password is used`
