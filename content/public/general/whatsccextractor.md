+++
title = "What's CCExtractor"
weight = 1  
+++



A tool that analyzes video files and produces independent subtitle files
from the closed captions data. CCExtractor is portable, small, and very
fast. It works in Linux, Windows, and OSX.

#### What kind of closed captions does CCExtractor support?

Almost all of them:
- American TV captions (CEA-608 is well supported, and CEA-708 is starting to look good)
- European Teletext
- European DVB
- Brazilian ISBD
- DVD
- MXF

Missing:
- DTMB (Chinese)

#### How easy is it to use CCExtractor?

Very. Just tell it what file to process and it does everything for you.

#### CCExtractor integration with other tools

It is possible to integrate CCExtractor in a larger process. A couple of
tools already call CCExtractor as part their video process - this way
they get subtitle support for free. Starting in 0.52, CCExtractor is
very front-end friendly. Front-ends can easily get real-time status
information. The GUI source code is provided and can be used for
reference. Any tool, commercial or not, is specifically allowed to use
CCExtractor for any use the authors seem fit. So if your favourite video
tools still lacks captioning tool, feel free to send the authors here.

You can also use CCExtractor as a library (as opposed to just running
the binary), or take parts of the code. Keep in mind however that
CCExtractor is GPLv2 so if you take parts or all of the source code your
code must also be GPLv2.

#### What's the point of generating separate files for subtitles, if they are already in the source file?

There are several reasons to have subtitles separated from the video file, including:

- Closed captions never survive MPEG processing. If you take a MPEG file and encode it to any format (such as divx), your result file will not have closed captions. This means that if you want to keep the subtitles, you need to keep the original file. This is hardly practical if you are archiving HDTV shows for example.
- Subtitles files are small - so small (around 250 Kb for a movie) that you can quickly download them, or email them, etc, in case you have a recording without subtitles.
- Subtitles files are indexable: You can have a database with all your subtitles if you want (there are many available), so you can search the dialogs.
- Subtitles files are a de-facto standard: Almost every player can use them. In fact, many setbox players accept subtitles files in .srt format - so you can have subtitles in your .mp4/.mkv/.avi./etc movies and not just in your original DVDs.
- Closed captions are stored in many different formats by capture cards. Upgrading to a new card, if it comes with a new player, may mean that you can't use your previously recorded closed captions, even if the audio/video are fine.
- Closed captions require a closed caption decoder. All US TV have one (it's a legal requirement), but no European TV does, since there are not closed captions in Europe (teletext and DVB subtitles are used instead). Basically this means that if you buy a DVD in the US which has closed captions but no DVD subtitles, you are out of luck. This is a problem with many (most) old TV shows DVDs, which only come with closed captions. DVD producers don't bother doing DVD subs, since it's another way to segment the market, same as with DVD regions.

#### How I do use subtitles once they are in a separate file?

CCExtractor generates files in the two most common formats: .srt
(SubRip) and .smi (which is a Microsoft standard). Most players support
at least .srt natively. You just need to name the .srt file as the file
you want to play it with, for example sample.avi and sample.srt.

Other formats just as .txt (transcripts) are supported as well.

#### What kind of files can I extract closed captions from?

CCExtractor currently handles:

- Most HDTV captures (where you save the Transport Stream).
- Captures where captions are recorded in bttv format. The number of cards that use this card is huge. My test samples came from a Hauppage PVR-250. You can check the complete list here.
- DVR-MS (microsoft digital video recording).
- Tivo files
- ReplayTV files
- Dish Network files
- DVDs

Usually, if you record a TV show with your capture card and CCExtractor
produces the expected result, it will work for your all recordings. If
it doesn't, which means that your card uses a format CCExtractor can't
handle, please contact me and we'll try to make it work.

#### Can I edit the subtitles?

.srt files are just text files, with time information (when subtitles
are supposed to be shown and for how long) and some basic formatting
(use italics, bold, etc). So you can edit them with any text editor. If
you need to do serious editing (such as adjusting timing), you can use
subtitle editing tools - there are many available.

#### Can CCExtractor generate other subtitles formats?

At this time, CCExtractor can generate .srt, .smi and raw and bin files.

#### What's a raw file?

A raw file is a file that contains an exact dump of the closed captions
bytes, without any processing. This lets you use any tool of your choice
to process the data. For example,
[McPoodle's](http://www.theneitherworld.com/mcpoodle/SCC_TOOLS/DOCS/SCC_TOOLS.HTML)
excellent tools can generate subtitles files in several formats, adjust
timing, etc.

#### What's a bin file? How is it different from a raw file?

A bin file contains a dump of the closed captions bytes (same as a raw
file) but it also includes timing information. This is a format that we
made up for CCExtractor, i.e. it's not any kind of industry standard.
However, it's the most useful (to us) for debugging purposes, so if you
need to send us a sample please use this format. Also, a bin format can
hold several CC streams (several languages, even from both analog and
digital). A raw file cannot.

#### How long does it take to process a MPEG file?

Obviously, it depends on the computer and the length of the file. In my
(really old) computer it took around 90 seconds for a 45 minutes show in
HDTV, with CPU usage around 3% (I/O operations are what's holding it
back). Currently (2018) we're processing as many as 20 TV channels in
real time using a single computer with a i5 CPU.

#### What platforms does CCExtractor work on?

CCExtractor is developed and tested in Windows and Linux. It is also
known to compile and run fine in OSX (a build script is included in the
source .zip).

#### Where can I download it?

The source code is hosted on github. Check out our download page for
links to everything. Old versions were hosted on sourceforge. We're
keeping those there for statistical purposes. This is the [old download page](http://sourceforge.net/project/showfiles.php?group_id=190832)
and this is the [old project summary page](http://sourceforge.net/projects/ccextractor/).

#### How I can contact the author?

There's no longer one author. Carlos is still the official maintainer
but there's a lot of people contributing to the project. Best thing is
to check out our support page.

#### How do I use this tool (parameters, etc)?

Run it without parameters and you will get a help screen. Basically, you
just give it the input file name, like this:

```ccextractor the.sopranos.ts```

As for the lack of documentation: There is no lack of documentation!
It's just included in the program itself. Just run it without
parameters and you will get complete details.

#### How can I contribute to this project?

There are several ways:
- If you are a developer, since the source code is available, you can fix things or add features yourself and submit a patch.
- If you are an user and find any bug, or have good suggestions, let me know.
- If you are doing your own recordings and have any particular one that CCExtractor can't process correctly, I'd definitely like to take a look at it and try to fix it.
- If you really hate that there is not a lot of documentation, you can write it yourself. I'll answer any question you might have.

#### Does CCExtractor use code from other projects?

Yes. Lots of code came originally from McPoodle's tools (even though it
was ported from Perl to C). We've also taken code from MythTV (which in
turn took some from other places) and FFmpeg. The teletext code is 95%
Petr Kutalek's and was integrated with permission.

A good thing about Open Source is that you don't need to reinvent the
wheel unless you want to (or unless you think you can come up with a
'rounder' wheel).
