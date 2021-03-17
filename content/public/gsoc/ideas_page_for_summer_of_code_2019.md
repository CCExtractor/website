---
title: "Google Summer of Code (GSoC) 2019 ideas page"
---

Welcome to our ideas page. This is going to be an amazing year - lots of
new things to work on, including JokerTV, a totally open TV receiver,
plus several experimental/for fun projects. Projects in C, Node,
Python... you name it, we have it. Plus resources for students - we'll
give access to a high speed server, all our samples (we'll even ship a
portable drive with them anywhere in the world, so don't worry about
slow connections).

You are welcome to check out our ideas page (this is it - actual ideas
at the bottom of the page) and start early in the community bonding
process as well as learning a bit about our code. And of course, we'd
love you to stay around even if we are not invited to GSoC or if we
cannot invite you as a student.

**About us**

We are a small org, which means that your contribution will have a large
impact. It's not going to mean a 0.5% improvement on a big project -
it's going to be more than 10% on a medium size one. If you like
challenges and want a chance to shine this is your place.

We have -we think- statistically amazing continuity in the team: Most
GSoC students from all the past years are still involved, even if they
are no longer eligible as students. They still contribute code, and they
mentor both in GSoC and the sister program GCI. As mentors, they also
come to the Summer of Code summit which traditionally takes place in
October.

We have *mentors all over the world* (North America, Europe, Asia and
Australia), so time zones are never a problem. Our main channel of
communication is a [Slack channel](/public/general/support) to
which everyone is welcome. We expect all accepted students to be
available on Slack very often, even if you don't need to talk to your
mentor. This will help you ask questions when necessary, and you might
be able to help others out as well while working on your project.

**Exception**: If your country (such as **Russia**) has
        banned Slack please get in touch in we'll work out a solution
        with you. We absolutely want you to participate.

A [mailing list](https://groups.google.com/forum/#!forum/ccextractor-dev)
is also available for those that prefer email over slack. It's a new
mailing list (the old one hasn't been used in a long time) but it's
read by everyone involved in GSoC.

**All our top committers will be mentoring**. Many of them are former GSoC students or winners of GCI.

**Books / other references**

This year we're going to try something new. All accepted students
will get a programming book immediately after being accepted, with
the hope that they read them before the coding starts. We want to see if
this increases the quality of the work. So far we have selected these
three books (pick one), but we're open to suggestions: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882),
[Elements of Programming Interviews in Python](https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949),
[Cracking the code interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850).

The student working on CEA-708 will also receive a copy of the latest
CEA-708 specification document.

**About what we use**

The core tool that names the organization (CCExtractor) is a
command-line program written in **C** (not C++). The current
Windows GUI is written in **C\#**, and we have another GUI for Linux
that's written with Qt, and a small GUI that's integrated into the
main program (C). The testing tool we use to run regression tests is
mainly written in **Python**, but it also used Javascript, CSS and
some shell scripting. The Test suite is written in C\#. The
prototype real time subtitle website is written in **NodeJS**.
We also have a number of support tools that do a number of different
things, from downloading subtitles from streaming services to
translating them with Google Translate or DeepL. Most of them are
written in **Python**, but since they are small tools that do their
job you don't need to worry much about them. For totally new things
you can use whatever tool you feel is best for the job.

**Support tool**

If for any reason you want to show us your desktop or we want you to
take a look at one of the mentors we'll use
[getsee](https://getsee.co/) (no account needed and free).
Feel free to take a look at it in advance.

**About sample media and other resources**

We work with huge files. Not all of them are huge, but many are. We know
that many students don't have access to high speed internet. To those
students we will ship (as soon as they are selected) a portable hard
drive with all our samples. So if your internet connection is not good,
don't worry - as long as you can plug a USB drive to your development
computer you can participate with us.

We also have a shared Linux development server with lots of storage and
a Gigabit uplink. Students get an account on it and they are welcome to
use it. There's nothing there except our own work, so it's a trusted
environment (for a server that is connected to internet of course).

The sample platform also hosts a bunch of samples, both which are small
or decently sized.

Some projects have specific requirements: For example to add support for
JokerTV you will need a physical JokerTV device. We will send one to the
student that takes this project well before GSoC starts. The LiveTV
project requires a subscription to YouTube with LiveTV (whatever it's
called this week) and Hulu. We will pay for those. If your project
requires some cloud resources (Google Compute Engine, for example), we
will pay for that, too.

In general, you are not expected to pay for anything (other than your
own development computer and internet, of course) related to any
project.

If you need anything not mentioned (such as a book) let us know. Within
reason, we'll help you.

**About the projects and getting accepted**

Qualification: On top of -of course- the quality of the proposal, we
will be ranking students with a points system (we introduced this two
years ago, and it worked pretty well).

We don't have a minimum number of required points, but you definitely
will need some (with equally good proposals we will rank based on
acquired points). This means, the more points you get the more likely
you are to be invited to join us during the summer, assuming that your
proposal is good.

You can get points by doing one (or more) of the next options:

1\) By solving issues in our [GitHub issue tracker
(CCExtractor)](https://github.com/CCExtractor/ccextractor/issues),
[Sample platform
issues](https://github.com/canihavesomecoffee/sample-platform/issues)
(default 1 points per issue unless specified somewhere in the issue
page). Most issues have an explicit number of points that you can find
in a comment. 

2) By joining the community in Slack. You can invite
yourself [here](public/general/support). (1 point) 

3) If
you are a former [Code-in
finalist](https://developers.google.com/open-source/gci/) you
start with 1 point. If you were a winner, you start with 2 points. Note
that there are just a few developers that meet this, so don't be
discouraged if you aren't one of them. Almost no one is, but we'd love
to hear from those that are. 

4) By sending us a TV sample that has
something we don't support. It doesn't have to be from your own
country (since hopefully, we already support it), but if it is, so much
the better. This is probably hard to get, since we already got all the
low hanging fruit. But if your local TV has subtitles you can turn on
and off, we'd love a recording.

**Best qualification tasks**

If you don't don't know which issues in GitHub to do, here's a list
of the ones that are approachable (you don't need to dig too deep or
learn many parts of the code) and useful:

[Terrible OCR results with Channel 5 (UK)](https://github.com/CCExtractor/ccextractor/issues/929)

[CCExtractor won't extract subtitles from TS with no PAT/PMT](https://github.com/CCExtractor/ccextractor/issues/805)

[Automatically switch to correct encoding for 708 subtitles based on PMT data](https://github.com/CCExtractor/ccextractor/issues/690)

[Request: Allow to extract several teletext pages in one pass](https://github.com/CCExtractor/ccextractor/issues/665)

['live' raw data problem](https://github.com/CCExtractor/ccextractor/issues/684)

[Extract telemetry data (which is stored in a subtitle track) from a Drone recording](https://github.com/CCExtractor/ccextractor/issues/961)

[Extract EIA-608 subtitles from Matroska (.mkv)](https://github.com/CCExtractor/ccextractor/issues/1068)

The sample platform's issues are tagged with "gsoc-proposal-task", so
you can easily see what you can work on.

**Community etiquette**

It goes without saying that everyone in the community has to be polite
and respectful, and consider everyone else a member of a team and not a
competitor.

All developers are part of the team, by the way. Our Slack channel has
mentors, code-in participants, other students, or developers and users
that are none of the above but they all play some kind of role in
CCExtractor's community.

Part of being respectful is giving consideration to everyone else's
time. Most of us have day jobs, and as such are limited in the time we
can use to guide you. We'd like to spend it on quality discussions, and
not on things that are for example written on this website, things that
you can easily retrieve by reading documentation on used libraries or on
the software's help screen. Asking this kind of questions in the Slack
channel shows little respect for our time. This doesn't mean you can't
ask questions, but remember that being a clueless user and a lazy
developer are two very different things. If you ask those questions you
will probably get an answer as if you were a clueless user (polite no
matter what), but if you apply to GSoC you will be considered a lazy
developer. Google is your friend ;)

Tell things as you see them. Politely -you're not Linus-, but don't
sugar-coat it. We know some parts of our code is poorly written, poorly
documented, etc. It stands out, so you will know when you dig in. No one
is going to be offended by having that code rewritten or refactored.
Peer review applies to everybody's work and is done by everybody.

**Cross project proposals**

Because we use a number of libraries and in fact "are a library"
ourselves (meaning other programs can link CCExtractor as a library, or
invoke the binary) we interact with other communities and their
software. From time to time there's a chance to do something
interesting that affects CCExtractor and something else (FFmpeg comes to
mind, but also Kodi, VLC, libGPAC, Red Hen, to mention just a few of our
friends that typically participate in Summer of Code). So how does this
work? As long as the work benefits CCExtractor and it's part of your
summer project, we're OK with you spending some time on the other
project. For example if you are improving our MP4 support, for which we
use libGPAC, and need to fix or improve something on libGPAC you are
welcome to do so. If you do, make sure you submit your changes to their
maintainers and follow through with their merge process.

**Your proposal**

You can propose to do any of the following ideas, or you can bring your
own. In any case, make sure you run them by us before you actually
submit your proposal.

At the very least your proposal needs to

- Explain what you do want to do, why it is important to you (don't
make up a story here - the reason can be that you need it, that you just
think it's cool, that you have an itch to work on it, etc), and why it
could be important or useful to us. - Explain how you intend to
accomplish the goal, in enough detail that makes it clear that you have
done your homework. For example, "I will modify the CCExtractor binary
so that it's able to convert audio to text with perfect accuracy" is
the same thing as sending your proposal to the trash. You need to have a
plan. - Detail the timeline explaining what the expected progress is
for each week or every two weeks (pay special attention to the
milestones within the GSoC timeline itself, of course) and how we should
validate the results. - Detail what kind of support you will need
from us. For example, if you are going to need test streams, hardware,
access to a server, etc, let us know, so we can prepare everything for
you as soon as possible. - Detail your expected working hours in
UTC. We're used to weird working schedules, so don't worry about
working in the middle of the night, or weekends instead of other days,
etc. Knowing your hours may help us to match you better with a mentor.
 - Mention your planned absences. We don't need you to detail what
you will be doing when you are not working of course, but if you are
going away for any reason we need to know so we don't think you've
abandoned. - Link to your GitHub (or any other repository) profile,
if you have one, so we can take a look at your previous work. - GSoC
is a coding program: This means that ideas that are about testing
(unless it involves coding something to test our programs ;) ), website
design, etc, are out. - However, we want to have good documentation:
Make sure you have time to write a good technical article explaining
your work. - Be realistic and honest with the timeline. Consider
each week you should work around 30 hours. If your timeline reserves a
lot of time for minor things we'll think that you are not going to be
working full-time in GSoC. On the other hand if you promise to do things
in a lot less than that it seems realistic to us it will seem that you
don't really know how much work things take. - If you are going to
be using 3rd party libraries (that's OK), make sure to validate that
their license is compatible with GPLv2 (which is ours). List the
libraries in your proposal. Check that they are cross-platform. If you
will need to extend those libraries in any way please explain. In this
case, your proposal should include time to get that extension submitted
to the maintainers (we love to contribute to other projects).

Something else: Mentors often have their fingers in several pies. If you
send the same proposal to several orgs everyone will know. So do
yourself a favor and don't do that. You can apply to several
organizations and that's totally fine, but each organization will want
to see that you have put the time to write a great proposal that is
focused on them.

 **The ideas we currently have**

Important: If you have something else in mind that relates to subtitles
and accessibility please get in touch. We prefer that you do something
that you are passionate about even if it's something we hadn't
considered.

 **Core subtitle tool (CCExtractor itself)**

| Name | Description | Tech you need to know | Tech you will learn | Difficulty |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [Add support for streaming Live TV](/public/gsoc/livetvooverinternet) | A number of streaming platforms now offer support for internet based live TV, which is great: It lets you watch TV on the go, it lets you get rid of cable, satellite and areal antennas\... unfortunately, this live TV is not standardized at all. Your job is to do the work to add suport for Hulu and Youtube. We will pay for the subscription costs as well as any required infrastructure. | Any | Video standards Subtitle standards Live streaming platforms | Unknown | 
| [Complete 708 support](/public/gsoc/complete708support) | This is one of the big ones. Why? Because it's been on our wish list for some time and until now no one has decided to really go for it; after the initial work it's always been incremental improvements, but no one has raised their hand and said "I'm going to complete this". It's possible the code base it's not really friendly. Who knows. If this is the case we're OK with a total rewrite if that's what it takes to get this done. The details page has some more information if this picked your interest. **This project is guaranteed to be selected if the proposal is good.** | C | Video standards Subtitle standards CCExtractor internals Internationalization | Hard | 
| [ Work on JokerTV integration](/public/gsoc/jokertv) | JokerTV is an excellent open hardware and software platform (think Arduino, but for TV). It's still early days, and we really want to be among the first supporting this amazing new platform. JokerTV can receive signals from all TV standards around the world (finally!, no more European or American models, etc). We will buy one device for the student (or students, if their ideas are different) that works on this. Abylay Ospan, the genius behind JokerTV has agreed to mentor. |C|Hardware Video standards Joker (the platform) | Unknown | 
| [Write Python bindings for CCExtractor](/public/gsoc/pythonbindings) | This was partially done during GSoC 2017, but it's not complete. You may choose to continue the work already done, or you can come up with a more robust / fast / etc approach. What we currently have "sort of works" but we've seen leaks, crashes\... so it's definitely not production ready. | C Python | Obscure C+Python topics CCExtractor internals | Medium | 
| [Write high speed subtitle synchronization tools](/public/gsoc/highspeedsync) | This one must be hard - it's the one project that unfortunately failed during 2017, even though it's a really interesting one that touches many areas (math, sound analysis\...). We can provide you all the work done last year (including the winner's proposal and current code) or you can start over. | Your choice | Audio Video formats Optimization Algorithms | Hard | 
| [Add support for DTMB countries](/public/gsoc/DTMB) | DTMB is the standard for Chinese TV, also implemented by countries such as Cuba. What kind of student is ideal for this task? One with lots of analytic skills and patience. If you are one of those, don't disregard this task just because you don't speak (or maybe, even care) about Chinese. The experience on dealing with this will be extremely valuable in the future. We will use part of the organization funds to buy standard documents you might need, a capture device, and in general, anything required to make your life easier. | C | DTMB Video standards Hardware Research | Unknown | 
| [Improve our OCR subsystem ](/public/gsoc/ocr) | We use tesseract to OCR bitmap based subtitles. In theory this is straight forward, but when you take into consideration all variants (color, languages, subtitles burned-in image, even moving text such as tickers) the complexity grows fast. Still, the work done by PhD students in the past is great, and we're confident this year we can complete the work on this area if someone of the same caliber decides to join the effort. | C | Tesseract Imaging OCR | Suspected hard |

**Artificial Intelligence and clever algorithms**

| Name | Description | Tech you need to know | Tech you will learn | Difficulty |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [Poor's man Rekognition](/public/gsoc/poormanrekognition) | Amazon Rekognition is a (paid) service that is able to identify celebrity faces in a picture. We want to produce a free alternative. | Your choice | AI  Computer vision | Unknown |

**Support tools we and other orgs use as part of their development process**

| Name | Description | Tech you need to know | Tech you will learn | Difficulty |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [The sample platform (/ continuous integration) project](/public/gsoc/sampleplatform) | The sample platform is a good way to help new contributors to check if their code doesn't introduce any regressions. It's pretty stable, but has some downsides that have been known for a while and that should finally be solved. Most of the items that are on the issue list (see the [issues page](https://github.com/CCExtractor/sample-platform/issues)) should all be solvable in less than a summer\... The main focus this year should be on improving the comparison mechanism to determine regressions. | Python (majority) C\# | Continuous Integration (CI) Automated deployments GitHub integration | Medium |

**Cool things that use CCExtractor**

| Name | Description | Tech you need to know | Tech you will learn | Difficulty |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [The Real time subtitles project](/public/gsoc/realtimesubtitles) | We have a great [proof of concept](http://realtimedemo.ccextractor.org:8080/) on real time subtitles. It's rock solid (except when we're working on it), and we're really proud of it. The part of sending the subtitles to the website is completed as you can see, but of course we need more functionality added to it. Which functionality? We'd like to hear proposals. Obvious things such as adding everything to a searchable database come to mind, but that's not really a summer worth of work. So come up with 3 months worth of improvements you can think of. | NodeJS Web | Depends on your idea | Medium | 

**New things we're currently interested on**

| Name | Description | Tech you need to know | Tech you will learn | Difficulty |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| [ Improve PiPot ](/public/gsoc/pipot) | PiPot (Micro Honeypot for RPi) is a flexible honeypot for (industrial) environments that runs on a Raspberry Pi. We want to reduce the amount of open issues, which include new features | Python (majority) Bash | Security concepts | Medium to Hard | 
| [ Create a web interface for rclone (mentored by Nick Craig-Wood, rclone's developer) ](/public/gsoc/rcloneweb) | rclone is a fantastic tool to synchronize cloud storage. It's rsync for the cloud. Amazing as it is it lacks a web interface. Your job is to create a great one. Really great. Not just a wrapper around the command line tool. | Cloud (lots) Web (different tech) | - | Medium | 
| [ SwagLyrics for Spotify](/public/gsoc/swaglyrics) | Fetches the currently playing song from Spotify on Windows, Linux and macOS and displays the lyrics in the command-line or in a browser tab. Refreshes automatically when song changes. The lyrics are fetched from Genius. Mainly built on Python and Flask but also uses HTML, CSS, JS, AppleScript and SQL under the hood. Of course we need more functionality added to it. Which functionality? We'd like to hear proposals. Things such as syncing lyrics to the song come to mind, but we want to hear what you can come up with. So come up with 3 months worth of improvements you can think of. | Python (mainly) Flask | Depends on your idea, some Web (different tech) | Medium to Unknown |
