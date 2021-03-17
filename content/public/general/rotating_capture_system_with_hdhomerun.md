---
title: "Rotating capture system with HDHomeRun"
---

This is Carlos' quick and dirty solution to have a grid with captions
from all stations using a few tuners, obviously by rotating them to
cover all channels.

#### File directories:

- /bin/ → Scripts
- /channels/ → Channels, each file being a channel. If name starts with a C then it's cable, if it's a B it's broadcast, anything else is ignored.
- /tuners/ → One file per tuner, with this naming
$devicetype-$tunertype-$masterorregular-$deviceid-$tunernumber
where
$devicetype is always HDR (for now only HDHomeRun is supported)
$tunertype is USC (US-cable) or USB (US-broadcast)
$masterorregular is M or R, if M then this tuner will be used to scan for channels by the chanscan script that populates the /channels/ directory
$deviceid is the device ID. For HDHomeRun is returned by hdhomerun_config
$tunernumber is the number within the device, so for a device with 3 tuners it's 0-2

#### Scripts:

- /bin/tuner_scan → Discover HDHomeRun devices and features, build contents of /tuners/
- /bin/channel_scan → Scan for channels, build contents of /channels/
- /bin/cc_boot → Starts one capture process per tuner
- /bin/cc_capture → Using one of the tuners, capture data from a channel in round-robin

The /channels/ directory contains one file per channel. When a channel
is being recorded its file must be renamed to \$name.inuse. When done,
touched, then renamed back to \$name.free. If a process attempts to
rename a channel file and fails it must assume that some other process
picked up that channel and must continue to the next one.

The cc_capture script always reads contents of /channels/ and picks the
oldest file that is free (meaning there isn't another process capturing
it).

#### Done:

- Create system user (captions), copy public key
- Edit sudoers

#### To-do:

- Create tuner_scan
- Create channel_scan
- Create cc_capture
- Create cc_boot
