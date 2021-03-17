---
title: "Working with HDHomeRun"
---

Starting in version 0.65, CCExtractor can process a stream being
delivered via UDP, so there's no need to capture video to a file in
order to get the subtitles.

 **What devices are supported?**

While it should work with any device that is able to send the stream via
UDP, at this time it's only been tested with HDHomeRun (both European
and American models).

 **Will other devices be supported?**

HDHomeRun works so well that it's unlikely I'll bother with any other
device unless it finds its way to me for free and development is
sponsored.

 **How do I use it?**

Make sure you have HDHomeRun's software installed. You will need the
command line tool "hdhomerun\_config" (it's available for Linux and
Windows, possibly OSX too). GUI frontends are available, too, but the
following instructions use just the command line tool.

Because you can have more than one HDHomeRun in the network, the first
thing is to look for the IDs of each of them:

```
./hdhomerun\_config discover
hdhomerun device 12206E95 found at 192.168.20.117
```


I only have one, and its ID is 12206E95. When I want to do anything with
that tuner, I need to pass the ID to hdhomerun\_config (note: since I
only have one I could just pass FFFFFFFF which is accepted in this
scenario).

 **Then, have HDHomeRun scan for channels:**

`./hdhomerun_config 12206E95 scan /tuner0`

The first parameter is of course the ID of my HDHomeRun. I also need to
pass /tuner0 because the device is dual-tuner, so I specify which one I
want to use. The output is rather large - only a part of it is shown:

```
SCANNING: 778000000 (eu-bcast:59)
LOCK: t8qam64 (ss=90 snq=66 seq=100)
TSID: 0x000F
PROGRAM 184: 0 Boing
PROGRAM 185: 0 Telecinco HD
PROGRAM 304: 0 MTV
PROGRAM 305: 0 Paramount Chann
SCANNING: 770000000 (eu-bcast:58)
LOCK: t8qam64 (ss=97 snq=28 seq=100)
TSID: 0x03F4
PROGRAM 530: 0 La 1
PROGRAM 531: 0 La 2
PROGRAM 532: 0 24h
PROGRAM 533: 0 Clan
PROGRAM 535: 0 Radio Nacional
PROGRAM 536: 0 Radio 5 Todo No
```

In this output, the number after eu-bcast is the channel. A channel is a
bundle of several programs (a program being a station) that are
broadcast together. For example you can see that channel 58 contains 6
programs.

Suppose we want the subtitles from "La 1". First, tune to the channel
that carries it: <code>

`./hdhomerun\_config 12206E95 set /tuner0/channel 58`

```
ccextractor -srt -udp 1235 -stdout
CCExtractor 0.65, Carlos Fernandez Sanz, Volker Quetschke.
Teletext portions taken from Petr Kutalek's telxcc

Input: Network, UDP/1235
[Raw Mode: Broadcast] [Extract: 1] [Stream mode: Autodetect]
[Program : Auto ] [Hauppage mode: No] [Use MythTV code: Auto]
[Timing mode: Auto] [Debug: No] [Buffer input: Yes]
[Use pic_order_cnt_lsb for H.264: No] [Print CC decoder traces: No]
[Target format: .srt] [Encoding: Latin-1] [Delay: 0] [Trim lines: No]
[Add font color data: Yes] [Add font typesetting: Yes]
[Convert case: No] [Video-edit join: No]
[Extraction start time: not set (from start)]
[Extraction end time: not set (to end)]
[Live stream: No] [Clock frequency: 90000]
Teletext page: Autodetect]
Start credits text: [None]
Sending captions to stdout.

Reading from UDP socket 1235
File seems to be a transport stream, enabling TS mode
Analyzing data in general mode
[...] Program Master Table for program 530, PMT PID: 100
101 | MPEG-2 video
922 | MPEG-2 video
102 | MPEG-2 private data
2675 | Unknown
115 | Unknown
2051 | MPEG-4 video
1546 | Unknown
256 | Unknown
4102 | Unknown
353 | Unknown
2544 | Unknown
4976 | MPEG-2 audio
111 | MPEG-2 private data
2163 | Unknown
1 | MPEG-4 video
3301 | Unknown
768 | Unknown
VBI/teletext stream ID 102 (0x66) for SID 530 (0x212)

Skip forward to the next TS header mark.

    Programme Identification Data = La 1
    Universal Time Co-ordinated = Mon Mar 11 21:36:23 2013

1
00:00:00,240 --> 00:00:02,560
Su voz suena en los altavoces.

[...]
```

As expected, in this example CCExtractor would run forever. You can
control this with the time related parameters, in case you want
CCExtractor to exit after a given number of seconds.
