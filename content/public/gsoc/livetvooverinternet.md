\~\~META: title = Google Summer of Code 2018 - Add support for Live TV
over the internet (such as YouTube TV) \~\~

#### Add support for Live TV over the internet (such as YouTube TV)

A number of platforms are appearing these days to distribute local TV
content over the internet. For example, YouTube now has a live TV. Hulu
does, too.

It\'s still early days for these platforms - they\'re trying to grab the
business from the cable-cutters, while (possibly, for now) providing the
same functionality, which is a live TV with DVR. It\'s possible of
course that they will offer lots of new features and they manage to
replace over the air broadcasts, cable\...

Anyway, we don\'t know how they are implementing subtitles, and the task
this summer is to

a\) Do the research\\\\ b) Write code that is able to create transcripts
in the usual formats such as .srt

This code might be integrated with the current CCExtractor core or it
could be a new tool. What\'s best depends mostly on how the subtitles
are distributed. If they are embedded in transport streams then
integrating with CCExtractor would be the natural option. It\'s part of
the job to figure this out.

We\'re going to target the two major platforms that have a live TV over
the internet: YouTube and Hulu.

 **We will pay for the subscriptions for both services during the
        coding period, and if you are currently outside the geographical
        areas in which these services are available, we\'ll provide a
        VPN as well\*\*.

Features that we expect:

\- The system must be completely scriptable. For example, a solution
that requires human intervention to start a capture session, or a
browser open on a desktop is not going to work. Suppose we want the
system running 24x7 on a Linux server, which might not even have a
monitor.\\\\ - Youtube TV supports a maximum of 6 simultaneous streams
per subscription. We don\'t know about Hulu, but the point is that your
solution must be able to maximize what we get from the subscription - if
the service allows 6 streams, your solution must too.\\\\ - Allow
several subscriptions to be used as well, for example, if we want 12
streams, then 6x2 should work.\\\\ - It goes without saying, login
information should be configurable and you must be careful not to push
any real information to GitHub.\\\\ - Documentation must be good - we
want other projects to build on this one instead of having to figure out
everything from scratch.\\\\

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
