# Server Application Architecture

After installation, you\'ll have the following files in your file
system:

` * /usr/bin/ccr -- Server application executable`\
` * /usr/bin/ccr-watchdog -- Connection watchdog script (in case you installed it)`\
` * /etc/init.d/ccr -- Service script file`\
` * /etc/init.d/ccr-watchdog -- Connection watchdog service (in case you installed it)`\
` * /usr/bin/ccextractor -- CCExtractor executable`\
` * /etc/ccr/ccr.ini -- Server application configuration file`\
` * /etc/ccr/db.ini -- Database connection configuration file`\
` * /var/www/ -- Web scripts`\
` * /etc/httpd/conf.d/ccr.conf -- Apache configuration file`\
` * /var/tmp/cce-input/ -- CCExtractor input pipes`\
` * /var/tmp/cce-output/ -- CCExtractor output files`\
` * /srv/web/ -- Server app -- web scripts buffer file`\
` * /srv/archive -- Received captions`

When you execute //ccr// command it does the following things:

` - Binds to specified port and accepts new client connections`\
` - For each accepted connection it forks a new process that handles client's data`\
` - Then it checks if client has send required packets such as password, description and BIN header.`\
` - If it did, adds this client to //clients// and //active_clients// tables in the database, otherwise it closes connection. Now it's ready to receive other client's data.`\
` - Forks CCExtractor and redirects received BIN data as the input and the output goes to ///var/tmp/cce-output/// directory`\
` - When CCExtractor starts to output closed captions, they are stored in:`\
`   * ///srv/archive/// in TTXT, SRT and BIN formats. SRT is converted from TTXT by server application`\
`   * the //programs// database table in TXT format`\
`   * ///srv/web/// buffer files so that they can be viewed from web pages`\
` - Also server application is responsible for changing current program. It happens every 2 hours unless no EPG is supplied. In clients do sends EPG, then times when to change the current program is extracted from EPG events.`\
` - Every 3 seconds client and server sends each other keep-alive packets and close connection if they doesn't receive them for 20 sec. Server stores the timestamp of the last received keep-alive packet in //active_clients// table. It's for the case when magic happens and connection is not closed gracefully so that watchdog can remove it.`\
` - When connection is closed, the client is removed from //active_clients// table and its temporary files are removed form the file system`
