# Connecting to the server

There main program that can be used to connect to repository server is
[CCExtractor](https://github.com/CCExtractor/ccextractor).
You'll need to use the following options to specify input stream,
server address and and some stream information:

` - Input options:`\
`   * **-** or **-stdin** to read video stream from standard input`\
`   * **-s** or **--stream** to read a file that continuously growing`\
`   * **-udp port** to read video stream from UDP port`\
` - Server connection:`\
`   * **-sendto host:port** server address and port`\
`   * **-tcpdesc description** description of what you are sending (e.g. tv station name or file name). If it isn't set, then repository will show your IP as description`\
`   * **-tcppassword password** the password to use when connecting to repository server`

For example,
`tail -f stream.ts | ccextractor -stdin -sendto example.com:3030 -tcpdesc "ABC"`

will tell CCExtractor to read from standard input and to send captions
to example.com at 3030 port with "ABC" description. Instead //tail -f
stream.ts//, of course, can be any program that output video stream to
standard output (stdout).

##### Sending a stream from HDHomeRun tuners

This chapter will describe how to use //hdhomerun\_config// tool to send
captions to the repository. Make sure that you have it installed and
working.

` - First, you'll need to pick a device ID by calling$ hdhomerun_config discover`
`hdhomerun device 131F1846 found at 10.0.1.197 So, the device we are going to use has 131F1846 id.`\
`  - Use the following command to scan for channels$ hdhomerun_config 131F1846 scan /tuner0 scan.log `\
`  - The output will be send to //scan.log// file, so you can grep it to find IDs of desired channel and program. Suppose, we you to send captions from "CNN" channel and you found the following lines in //scan.log//:SCANNING: 141000000 (us-irc:17, us-cable:17)`
`LOCK: qam256 (ss=100 snq=100 seq=100)` `TSID: 0x0000`
`PROGRAM 2101: 24 CSPAN (encrypted)`
`PROGRAM 2102: 109 CSPN2 (encrypted)`
`PROGRAM 2103: 51 APLw (encrypted)`
`PROGRAM 2104: 72 TRVL WEST (encrypted)`
`PROGRAM 2105: 483 TV One (encrypted)`
`PROGRAM 2106: 216 NICK2 (encrypted)` `PROGRAM 2107: 56 CNN (encrypted)`
`PROGRAM 2108: 80 GOLF (encrypted)` `PROGRAM 2109: 11 HSN (encrypted)`
`PROGRAM 2110: 23 QVC (encrypted)` `PROGRAM 2111: 36 FX-W (encrypted)`
`PROGRAM 2112: 57 HN (encrypted)` `PROGRAM 2113: 122 DISXD (encrypted)`
`PROGRAM 2114: 46 LIF-W (encrypted) The number 17 (after //us-cable://) is the channel ID and the program id of "CNN" is 2107`\
`  - Now you should tune tuner to this channel and filter CNN program:$ hdhomerun_config 131F1846 set /tuner0/channel 17`
`$ hdhomerun_config 131F1846 set /tuner0/program 2107`\
`  - Finally, call the following command to send caption to the repository server:$ hdhomerun_config 131F1846 save /tuner0 - | ccextractor -stdin -quiet -sendto example.com:3030 -tcpdesc CNNThe first clause of this command shall send video stream to standard output and the second shall read it  and send captions to example.com server with CNN description. //-quiet// option suppress CCExtractor output as it's sometimes messy, so all you'll see is dots printed every second by //hdhomerun_config// tool`

##### Working with ATSC Digital TV

This chapter describes how to send captions from ATSC transmission. Make
sure that you have azap, dvbstream installed and working. More on these
tools you can find at [Linux
TV](http://www.linuxtv.org/wiki/index.php)

Suppose the tuner is ///dev/dvb/adapter3/dvr0//, so its adapter number
is 3 and scan file is located at //\~/.azap/cahnnels.conf//.

` - Suppose you want to send captions from KOCE channel, and you found the following line in scan file:KOCE:129000000:QAM_256:512:0:2 It means that this channel is on 129000000 frequency and its program number in the stream is 2 (the last number in the line)`\
` - First, you should tune the tuner to this frequency by callingazap -a 3 -r KOCE There 3 is adapter number and KOCE is one of the channels on this freq.`\
` - The you should get a video stream from this channel and send to CCExtractordvbstream -f 129000000 -c 3 -o 8192 | ccextractor -stdin -pn 2 -quiet -sendto example.com:303 -tcpdesc KOCE The first clause will send video stream from 129000000 freq. from adapter #3 to the standart output without filtering (//-o 8192// option). Then CCExtractor will filter program #2 (//-pn 2// option) and send to example.com:3030 server.`

Note that in the guide above we didn't filter program using
//dvbstream//, although it is possible. The reason for this is to show
basic idea of scripts in //test/streaming// directory. These scripts
allow you get multiple video streams from a single tuner and send them
to the server. To do so, you have to:

` - Call //tunefreq.sh// script. It doesn't accept any arguments, so make sure that you set correct adapter, path to scan file variables inside it. This script will:`\
`   - prompt frequency value to tune to and save this value in //freq// file`\
`   - call //azap// to tune this frequency`\
`   - output whole stream to //stream.ts// file  in your working directory`\
`   - //stream.ts// file will be truncated every 3 hours, so it won't grow too big `\
` - Then, from another shell you can call //ccsend.sh// script to send captions to the server. Also make sure that you edited variables in the beginning of file and set server address and scan file. This script will`\
`   - prompt channel name to send to repository server`\
`   - and output new content from //stream.ts// file to ccextractor`\
` - To test if channel has some closed captions before connecting it to the server, you can call //cctest.sh//. It works the same way, but output captions to standard output.`
