# Database architecture

##### Tables

### Clients

Stores information about clients that have ever send any data. It
includes:

` * client IPv4 or IPv6`\
` * transmission description presented by the client (e.g. tv station name) using -tcpdesc flag.`

<code sql> CREATE TABLE IF NOT EXISTS \`clients\` (

``   `cli_id`     INT            NOT NULL AUTO_INCREMENT, ``\
``   `ip`         VARBINARY(16)  NOT NULL, ``\
``   `desc`       VARCHAR(300)   COLLATE utf8_bin DEFAULT NULL, ``\
``  PRIMARY KEY (`cli_id`) ``

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8\_bin AUTO\_INCREMENT=1
; ~~~

### Programs

Stores program information and its extracted CC data. It includes:

` * id of a client who send this program,`\
` * time-stamps of the beginning and the end of the program. May not match actual start and end time (in case user started transmission in the middle of the show),`\
` * title, description, category, language fetched from EPG,`\
` * closed captions in TXT format. The are used only for searching; CC in srt, ttxt, bin are stored in server's file system`

<code sql> CREATE TABLE IF NOT EXISTS \`programs\` (

``    `id`          INT           NOT NULL AUTO_INCREMENT, ``\
``    `cli_id`      INT           NOT NULL, ``\
``    `start`       TIMESTAMP     NULL DEFAULT NULL, ``\
``    `stop`        TIMESTAMP     NULL DEFAULT NULL, ``\
``    `title`       VARCHAR(150)  COLLATE utf8_bin DEFAULT NULL, ``\
``    `desc`        VARCHAR(150)  COLLATE utf8_bin DEFAULT NULL, ``\
``    `lang`        VARCHAR(5)    COLLATE utf8_bin DEFAULT NULL, ``\
``    `category`    VARCHAR(150)  COLLATE utf8_bin DEFAULT NULL, ``\
``    `cc_data`     MEDIUMTEXT    COLLATE utf8_bin, ``\
``  PRIMARY KEY (`id`), ``\
``  FOREIGN KEY (`cli_id`) REFERENCES clients(cli_id) ``

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8\_bin AUTO\_INCREMENT=1
; ~~~

### Active clients

Stores ids of connected clients at the moment and timestamps of the last
received keep-alive packet (watchdog use this values to clean up not
gracefully closed connections)

<code sql> CREATE TABLE IF NOT EXISTS \`active\_clients\` (

``    `cli_id`      INT           NOT NULL UNIQUE, ``\
``    `last_ping`   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP, ``\
``  FOREIGN KEY (`cli_id`) REFERENCES clients(cli_id) ``

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8\_bin ; ~~~

##### Initializing database

To create the tables above you can execute //misc/tables.sql// file by
calling something like`mysql -uroot < misc/tables.sql`

If you are setting up database for production environment I recommend
you to add users with minimal privileges for connecting from Web scrips
and from server application. To do that there is //misc/users.sql//
file. Before executing it edit passwords and subnet in the beginning. It
shall add users with the following privileges:

` - cc_rw`\
`   * SELECT,INSERT,UPDATE,DELETE ON active_clients`\
`   * SELECT,INSERT,UPDATE ON clients`\
`   * SELECT,INSERT,UPDATE ON programs`\
` - cc_ro`\
`   * SELECT ON active_clients`\
`   * SELECT ON clients`\
`   * SELECT ON programs`
