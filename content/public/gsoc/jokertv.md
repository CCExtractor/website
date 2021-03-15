\~\~META: title = Google Summer of Code 2018 - JokerTV integration \~\~

#### JokerTV integration

As you may know, our reference TV tuner has been for a long time the
amazing HDHomeRun from Silicon Dust. They (all models) are rock-solid
and they are really easy to integrate with. However, they don\'t support
DTMB (the Chinese standard).

[This](https://tv.jokersys.com/) small thing is JokerTV
(stand-alone version).

You can see in the [tech
specs](https://tv.jokersys.com/tech-specs/) that everything
we care about is supported, and that the list of chipsets is published,
and that [source code](https://tv.jokersys.com/downloads/)
for everything, including firmware, is available.

We are quite excited about the openness and potential of JokerTV and
want to be the first to integrate with it. What should be the result of
this integration?

\- CCExtractor would be able to communicate directly with JokerTV -
getting the streams directly from it, as we do with the HDHomeRun.\\\\ -
You don\'t need to decode DTMB (that\'s a different GSoC project,
possibly a summer worth of work) but your integration needs to be as
region agnostic as possible. If JokerTV works everywhere, then so must
JokerTV+CCExtractor.\\\\ - It\'s likely that JokerTV included support
tools are not up to par with HDHomeRun\'s yet. If this is the case (your
proposal should show that you\'ve done your homework and can tell us)
reserve some time to work on this.\\\\ - Another two major programs that
could use JokerTV integration are FFmpeg and Kodi (for their live TV and
DVR functionality). We love cross project ideas, including of course
sending patches to their maintainers. If you think you would have time
for this, give it some consideration.\\\\

About getting a JokerTV - we will buy one for the student that takes on
this task. We will also have a few more distributed in different regions
around the world so remote testing is possible.

\_\_\*\*Related GitHub Issues\*\*\_\_\\\\ [Extract subtitles in a
Chinese
newscast](https://github.com/CCExtractor/ccextractor/issues/918)

\_\_\*\*Mentor\*\*\_\_\\\\ Abylay Ospan, the genius behind JokerTV
himself.

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
