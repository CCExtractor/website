###### Logging

Repository server application can produce two log files for error and
debug messages. The first one is used for logging errors that caused
server to close connection or to terminate (such as \"out of memory\"
errors). The second one is used for logging client activities and
tracing system events. This log file is turned off by default.

You can logging behavior by changing these options:

` * **error-log** -- Path to error log file (default: /var/log/ccr-error.log)`\
` * **debug-log** -- Path to debug log file (default: /var/log/ccr-debug.log)`\
` * **verbose** -- If true, log messages will be printed to the file specified in *debug_log* (default: false).`\
` * **log-stderr** -- If true, all the log messages will be printed in standard output and no log files will be generated (default: false).`

##### Log levels

Log messages are separated into the following levels:

` - FATAL -- errors that caused server to terminate`\
` - ERROR -- errors that caused server to close connection, but it is still able to accept new ones`\
` - WARNING -- warning messages like unexpected behavior or not implemented functions`\
` - INFO -- information about who connected and disconnected`\
` - DEBUG -- messages that are useful for development (including trace and blather)`\
` - NET -- messages on socket activities`

Error log includes messages from FATAL, ERROR and WARNING levels. Debug
log includes messages from all levels.

##### Log format

Each log line is formatted as follows:
`[time][level][who][where] message`

` * **time** -- date and time when this line is being written to log file. Date format is specified by `[`RFC5424`](https://tools.ietf.org/html/rfc5424#section-6.2.3)` with the second precision`\
` * **level** -- message level described above`\
` * **who** -- identifies who caused this message`\
`   * **S** -- server app itself`\
`   * **id** -- client with specified id`\
`   * **-1** -- client with unknown id`\
` * **where** -- if the level other than NET it contains filename and line in source code. If the level is NET, then on of following:`\
`   * **S->N** meaning that server send this message to client (i.e network)`\
`   * **N<-S** meaning that server received this message from client`\
` * **message** -- the content of log line`
