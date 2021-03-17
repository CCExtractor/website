\~\~META: title = Google Summer of Code 2018 - Write high speed subtitle
synchronization tools \~\~

 **Write high speed subtitle synchronization tools **

`Tool A - sync between two versions of the same footage: This is a very common use case: Suppose you have raw recording of a TV show, with commercials, etc, then use CCExtractor get the subtitles from it. Then you remove the commercials, and have a really clean recording, but the subtitles are out of sync since the timing changed the video.`

The project is to write a tool that takes: a) The original video
b) The edited video c) The subtitles for the original video

and produces

d\) The subtitles for the edited video

We recommend you use FFmpeg to do the heavy lifting for the video
processing and DejaVu as a reference to do the audio fingerprinting
which you will need for the synchronization.

A really important requirement is that this is a fast tool. This means
that writing a script that first calls FFmpeg to generate a .wav file
and then calls DejaVu to locate each segment will definitely not work
(and also, it's not a Summer of Code task). You need to write a C
program that uses FFmpeg libraries and reimplement the audio
fingerprinting in C. This should be "easy" since for DejaVu you have the
source code, an amazing explanation of how everything works, and FFmpeg
libraries have FFT functions so luckily you don't need to implement
them yourself.

You can also come up with a totally different solution that doesn't
follow our suggestion as long as it achieves the goal.

Tool B - Suppose you don't have the original video, but you do have the
original subtitles from it, so what you have is: a) The subtitles for
the original video, which contains subtitles for commercials and
possible a few minutes from the previous and following program. b) The
edited version.

Doing the sync now is more difficult as you don't have the original
audio or video to compare. But you do have the audio for the edited
version from which you can obtain timing for voice. For example if the
subtitles for the original video contain three consecutive frames that
last 3.45 seconds, 1.54 seconds and 2.34 seconds respectively, and doing
audio analysis in the edited video you find 3 segments with voices with
similar duration it's likely that they are a match.

Requirements: 1) You cannot use any non open source dependency. For
example, Mathlab is out, even if the run time is free. 2) Your
program needs to be usable from a script, so it should be command line
based. If there's time, you can definitely provide a GUI, but that's
secondary to the main program. 3) High speed is really a priority.
Prepare to spend time coming up with a good algorithm. 4) While GSoC
is about coding, you will have to prepare really good documentation. As
an example, check out DejaVu's explanation on how everything works
(even if you don't use it at all, use it as a baseline of really good
technical documentation). 5) Must be as portable as the libraries
you use. For example FFmpeg builds in linux, windows, etc, so if you use
FFmpeg then your program must also build on those platforms.

We will provide a fast speed server in which you can work. You don't
have to use it, but keep in mind that in general video files are very
large. You will need to deal with files that are several gigabytes long.
If you have the bandwidth, great. Otherwise you can just work remotely
on our development server. 
