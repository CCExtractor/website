
---
title: "Google Summer of Code (GSoC) 2024 ideas page"
weight: 1
---

YES! 

We're selected for GSoC 2024!


### This is work in progress! New projects are being added as we confirm mentors.

{{< tip >}}
NEW: Office Hours.

Each Sunday (depending on your timezone) we will hold office hours. You can show up and ask your questions. At least one org admin and/or mentor will be around, maybe more. No need to be formal, or even have the camera on if you're shy (but you can). 

To connect, go to this [google meet link](https://meet.google.com/swu-vmra-tyh).

Start date (tentative): 
2024-01-28

Hours:
Sundays at 8:30 AM PDT -7:00 hours (Pacific Daylight Time)
which is 17:30 in Central Europe (until the clock changes there) and 10 PM in India.  
- 3:30 AM (Monday - the next day) in Sydney, Australia.
- or use [this link](https://dateful.com/convert/pst-pdt-pacific-time?t=0830) to automatically convert the meeting time to your local timezone.

(use San francisco Time for "official clock" - 8:30 AM in San Francisco is what matters, if you want to add your local time here send a pull request).

There's no agenda to these meetings. Someone from the team will be around, everyone is welcome, you can ask about GSoC, the org, your project, etc. If there's some other participants asking questions you can stay around and listen. 

We will start at 8:30 and stay around for at least for 30 minutes, so you can show up at any time. At 9:00 if there's a conversation going on we will continue so it might last longer than 30 minutes (as long as needed).

{{< /tip >}} 

Welcome to our ideas page. It's great you want to start early. Please
join us in our slack channel! (we'll leave this as an exercise for you to
find --- it's on our website).

As you will see, this year has a lot of Rust. The reason is simple:
Security. Our C code base has known (and we suspect, a lot of unknown)
security issues caused by the usual memory management in C. Lots of
people have touched the code over the years, and it shows.

There's also Flutter, which we love, and more.

We will provide resources for students --- we'll give access to a
high-speed server, all our samples (we'll even ship a portable drive
with them anywhere in the world, so don't worry about slow connections)
and various other perks.

You are welcome to check out the page (actual ideas at the bottom of the
page, with each project having it's own separate page as well) and
start early in the community bonding process as well as learning a bit
about our code ethics and practices. And of course, we'd love you to
stay around even if we are not invited to GSoC or if we cannot invite
you as a student.

#### The ideas we currently have

Important: If you have something else in mind that relates to subtitles
and accessibility please get in touch. We prefer that you do something
that you are passionate about even if it's something we hadn't
considered.

After you check out our ideas please continue reading to the bottom of
the page to get information about who we are, how we collaborate, what
resources we will provide to you, etc.

{{< tip >}}
Some tasks descriptions are still vague. We know that. Feel free to
get in touch for questions, or just check their page from time to time.
We will update the descriptions often. 
{{< /tip >}}

#### Niche ideas

We've moved the less mainstream ideas to their [own page](https://ccextractor.org/docs/classic_ideas/)
These ideas are not less important, but because they require more specialized skills (or mindsets) we've decided to give them a place of their own :-) Please take a look after you are done with this page; maybe something there will pick your interest.

#### CCExtractor Core

Since we are now feature complete, and the subtitles work have changed a lot (We won! Almost everything is subtitled now!) it's time to settle down, prepare a really good, stable, battery included release so we can rest on our laurels for a bit after a fantastic run on our core tool. 

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| [CCExtractor Release 1.00](/public/gsoc/2024/ccextractor_v1)  | This is our ambitious project for the summer - work directly with the core team to prepare 1.00 - our first major version bump ever, by doing a huge integration/testing/fixing work | Some of these: Rust, C, Flutter, Docker, GitHub actions | The rest from the previous list. | Hard | 350 hours |

#### Virtual Reality
| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| [VirtualDesktop](/public/gsoc/2023/quest_virtual_desktop) | Some VR headsets such as Meta's Quest 2 come with a Virtual Desktop tool that lets you connect your computer to the headset and get virtual desktops. There's lots of YouTube videos on this topic, here's [one.](https://www.youtube.com/watch?v=51IBgkw3GJI) . There's a headset component and a computer component. The computer component exists for Windows and Mac, but not for Linux. That's what we want to build. | A system language such as C, C++ or Rust | Linux desktop internals, VR internals | Medium-Hard | 350 hours |

#### Flutter

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [ Ultimate Alarm Clock II ](/public/gsoc/2024/ultimate_alarm_clock_2) | The ultimate alarm clock, with features no other one has. And free! | Flutter | Good application design | Medium | 350 hours |
| [ support more torrent clients ](/public/gsoc/flutter-more-clients) | We'd like to add support for other clients to our ruTorrent mobile interface (which of course will get a new name): [Flood](https://flood.js.org) and [Deluge](https://deluge-torrent.org). | Flutter | API, Teamwork | Medium |  Discuss |
| [ Beacon ](/public/gsoc/2024/beacon) | This project was started in 2021 and it got a great push also during 2022. It aims to ease the group travelling (or hiking). By using this, the group leader would be able to share his live location with the entire crew. We want to improve on past work, include new features, and release it. Note: This project has really gotten traction and there are a lot of contributors working on it now.  | Flutter | Scalability | Medium | 175 hours |
| [ Beacon Watch Companion](/public/gsoc/2024/beacon_watch_companion) | Beacon was started in 2021 and it got a great push also during 2022. It aims to ease the group travelling (or hiking). This project is intended to be a companion for the beacon project for smart watches. | Flutter | Scalability | Medium | 175 hours |
| [ TaskWarrior ](/public/gsoc/2023/taskwarrior) | Taskwarrior is a very nice command-line tool (yes, in 2022 — and I love it!) to manage task list. This year our target is to making our own Taskserver(or finding alternative to freeinc). And also a functionality to make our own Taskserver like we do in CLI. We want to improve on past work, include new features. | Flutter | Scalability | Medium | 175 hours |
| [ It's Urgent ](/public/gsoc/2024/itsurgent) | A notification tool that lets the sender decide if what he/she has to say is so important as to interrupt the receiver | Flutter | Scalability | Medium | 350 hours |


#### Systems
| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [URL shortener, with a twist](/public/gsoc/2022/urlshortener) | A URL shortener converts a long URL into a shorter one. There are many use cases. Some times it's just the shortening itself we want, for example to share it on twitter. Other times it's about obfuscation. We want to create our own, but with some unique features. | Any language you want | Internet infrastructure | Medium | 175 hours |
| [Add complex layouts to sway](/public/gsoc/2024/sway_complex) | Sway is a drop-in replacement for i3, a popular windows manager for Linux that finally gets rid of the ancient X11 protocol. It's fantastic, but it's still missing support for complex scenarios. We'd like you to work on that support. | C | Sway | Hard | 350 hours |
| [Create Nix derivations for Regolith Linux](/public/gsoc/2024/nix_regolith) | Nix is a special Linux distribution with interesting properties such as near perfect reproducibility. Regolith Linux is a collection of packages (for Debian) to deliver a preconfigured i3. We want to get the best of both worlds. | Nix | Nix, regolith | Hard | 350 hours |

#### New things we're currently interested on

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- | ------ |
| [ Mouseless for Linux v2 - i3 edition ](/public/gsoc/2023/mouseless_i3) | Mouseless is a nice tool to practice keyboard shortcuts for a few popular apps. Unfortunately it's only available for Mac. Last year we created an open source one that runs on Linux. Using that work or not (this is your choice) we want to create one that helps use i3vm (the fantastic windows manager) using keys only. | Your choice | ?? | Unknown | 175 hours |


#### About us

We are a small org, which means that your contribution will have a large
impact. It's not going to mean a 0.5% improvement on a big project ---
it's going to be more than 10% on a medium size one. If you like
challenges and want a chance to shine this is your place.

We have *we think* statistically amazing continuity in the team: Most
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

Exception: If your country (such as **Russia**) has banned Slack please get in touch in we'll work out a solution with you. We absolutely want you to participate.

A [mailing list](https://groups.google.com/forum/#!forum/ccextractor-dev)
is also available for those that prefer email over Slack. Note that getting replies might be faster on Slack though.

**All our top committers will be mentoring**. Many of them are former GSoC students or winners of GCI.

#### Perks

All accepted students get a programming book immediately after being
accepted, with the hope that they read them before the coding
starts. We want to see if this increases the quality of the work. So far
we have selected these three books (pick one), but we're open to
suggestions: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882),
[Elements of Programming Interviews in Python](https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949),
[Cracking the code interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850).

We will also provide to all accepted students: - 6 months of access
(from the acceptance date) to all courses in
[educative.io](https://www.educative.io/) - 12 months of
access (from the acceptance date) to
[backtobackswe](https://backtobackswe.com), which is a
fantastic resource to learn algorithms, prepare for coding interviews,
and in general learn fundamentals.

#### About what we use

This is what we use **today**. It doesn't mean this is what we want
to continue using. Probably not --- we're really open to change. We're
just describing the status quo so you know what you are getting into :-)

The core tool that names the organization (CCExtractor) is a
command-line program written in **C** (not C++), and new core parts are being written in **Rust**.

The current GUI is written in **flutter**.

The testing tool we use to run regression tests is mainly written in
**Python**, but it also used Javascript, CSS and some shell
scripting. The Test suite is written in C\#. One of the projects this
year is to move it from a dedicated server to GSoC and improving the scalability of test runs.

The prototype real time subtitle website is written in
**NodeJS**.

We also have a number of support tools that do a number of different
things, from downloading subtitles from streaming services to
translating them with Google Translate or DeepL. Most of them are
written in **Python**, but since they are small tools that do their
job you don't need to worry much about them.

For totally new things you can use whatever tool you feel is best for
the job.

#### About sample media and other resources

We work with huge files. Not all of them are huge, but many are. We know
that many students don't have access to high speed internet. To those
students we will ship (as soon as they are selected) a portable hard
drive with all our samples. So if your internet connection is not good,
don't worry --- as long as you can plug a USB drive to your development
computer you can participate with us.

We also have a shared Linux development server with lots of storage and
a Gigabit uplink. Students get an account on it and they are welcome to
use it. There's nothing there except our own work, so it's a trusted
environment (for a server that is connected to internet of course).

The sample platform also hosts a bunch of samples, both which are small
or decently sized.

Some projects have specific requirements, and we'll make sure that you get
the resources you need: i.e. if your project requires some cloud resources
(Google Compute Engine, for example), we'll make sure you get access to the
resources.

In general, you are not expected to pay for anything (other than your
own development computer and internet, of course) related to any
project.

If you need anything not mentioned (such as a book) let us know. Within
reason, we'll help you.

#### About the projects and getting accepted

Qualification: Our selection system is based on several factors. Of
course no student ranks in all criteria, so don't worry when you read
the list below.

 **Work on our core tool**: Even if you are going to be working
        on something totally different. This might seen counter
        intuitive, but the thing is if you prove you can dig into our
        (messy) code base, find yourself your way around it, and fix a
        few bugs, you are just the kind of person we can trust to
        "figure things out". GSoC is among other things, a learning
        experience. No matter what project you decide to work on,
        there's going to be roadblocks, things you don't know how to
        do, etc. So we really like it when students embrace those
        situations.

<!-- -->

 **Qualification tasks specific to the project**: The detail page
        for some projects contains specific qualification tasks that
        apply to them.

<!-- -->

 **Contributions to existing open source projects**: This can be
        anything. From a good GitHub profile to pull-requests sent to
        any other existing project, participation in hackathons, Google
        Code-In, past GSoCs and so on.

<!-- -->

 **A good proposal**: This is the one criteria that is
        non-negotiable. Your proposal has to be good, period.

<!-- -->

 **Project popularity**: Some ideas just have more competition,
        so if participating in GSoC is a top priority for you (over
        working on a specific project), consider applying to one of the
        "niche" ideas. After all, that's a great way to get your foot
        in the door :-)

<!-- -->

 **Best core tool tasks**

We're added a difficulty level to most of our [open issues on GitHub](https://github.com/CCExtractor/ccextractor/issues).
Best thing you can do is head there and see if you are able to fix some
of the easy ones and work your way up. We don't expect you to be able
to do the hard ones but we'd be impressed if you did :-)

For some of the easy ones you don't even need to know C. Just being
able to compile CCExtractor and dig around a bit will be enough.

The sample platform's issues are tagged with "gsoc-proposal-task", so
you can easily see what you can work on.

### Take home qualification tasks

If instead of working on existing code you'd prefer to show us your
skills working on something new, you can pick one of [these projects](/public/gsoc/takehome).

#### Community etiquette

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

#### Cross project proposals

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

#### Your proposal

You can propose to do any of the following ideas, or you can bring your
own. In any case, make sure you run them by us before you actually
submit your proposal.

At the very least your proposal needs to:

- Explain what you want to do, why it is important to you (don't make up a story here — the reason can be that you need it, that you just think it's cool, that you have an itch to work on it, etc), and why it could be important or useful to us.
- Explain how you intend to accomplish the goal, in enough detail that makes it clear that you have done your homework. For example, “I will modify the CCExtractor binary so that it's able to convert audio to text with perfect accuracy” is the same thing as sending your proposal to the trash. You need to have a plan.
- Detail the timeline explaining what the expected progress is for each week or every two weeks (pay special attention to the milestones within the GSoC timeline itself, of course) and how we should validate the results.
- Detail what kind of support you will need from us. For example, if you are going to need test streams, hardware, access to a server, etc, let us know, so we can prepare everything for you as soon as possible.
- Detail your expected working hours in UTC. We're used to weird working schedules, so don't worry about working in the middle of the night, or weekends instead of other days, etc. Knowing your hours may help us to match you better with a mentor.
- Mention your planned absences. We don't need you to detail what you will be doing when you are not working of course, but if you are going away for any reason we need to know so we don't think you've abandoned.
- Link to your GitHub (or any other repository) profile, if you have one, so we can take a look at your previous work.
- GSoC is a coding program: This means that ideas that are about testing (unless it involves coding something to test our programs ;) ), website design, etc, are out.
- However, we want to have good documentation: Make sure you have time to write a good technical article explaining your work.
- Be realistic and honest with the timeline. Consider each week you should work around 30 hours. If your timeline reserves a lot of time for minor things we'll think that you are not going to be working full-time in GSoC. On the other hand if you promise to do things in a lot less than that it seems realistic to us it will seem that you don't really know how much work things take.
- If you are going to be using 3rd party libraries (that's OK), make sure to validate that their license is compatible with GPLv2 (which is ours). List the libraries in your proposal. Check that they are cross-platform. If you will need to extend those libraries in any way please explain. In this case, your proposal should include time to get that extension submitted to the maintainers (we love to contribute to other projects).

Something else: Mentors often have their fingers in several pies. If you send the same proposal to several orgs everyone will know. So do yourself a favor and don't do that. You can apply to several organizations and that's totally fine, but each organization will want to see that you have put the time to write a great proposal that is focused on them.

#### Useful resources

[A great resource for GSoC](https://dev.to/realabbas/google-summer-of-code-5ao6).

