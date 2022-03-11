---
title: "Google Summer of Code (GSoC) 2022 ideas page"
weight: 1
---

Welcome to our ideas page. It's great you want to start early. Please
join us in our slack channel! (we'll leave as an exercise to you to
find it --- it's on our website).

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

#### CCExtractor Rust rewrite

GSOC 2021 was quite successful on this front. The 708 decoder was rewritten in Rust, and in the process we fixed all the known (then) issues with 708. The student who did all this work (Punit Lodha) is going to mentor in 2022. 

In 2022 we'd like to tackle these tasks. If you're interested, you can get some feeling of the system by fixing https://github.com/CCExtractor/ccextractor/issues/1407

Or, to generally show that you know some Rust, tackle something from these very popular Rust projects (they're not related to us, even though we use them and we've committed code from time to time) and send us links to the PRs:

https://github.com/greshake/i3status-rust  
https://starship.rs/



| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| [Rewrite 608 decoder in Rust](/public/gsoc/cc_rust_608/)  | CEA-608 is the American standard for analog subtitles. It also carries things like emergency alerts, basic TV guide, and content classification. We have a complete implementation in C that works OK (possibly with some bugs) but that is not really very well organized. We'd like to port it to rust. We will provide you with the official technical standards. | (Some) Rust, Some (C) | Analog subtitles, XDS Working with standards. | Medium | 350 hours |
| [Rewrite HardsubX subsystem in Rust](/public/gsoc/2022/hardsubx)  | Hardsubx is used to extract subtitles that are burned into videos using OCR. We have a implementation in C that works OK but has many bugs. We'd like to port it to rust. | (Some) Rust, Some (C), OCR | Tesseract Imaging OCR FFmpeg | Medium | 350 hours |
| [Rewrite the OCR subsystem in Rust.](/public/gsoc/cc_rust_ocr/) | We use tesseract to OCR bitmap based subtitles. It's a great library, but because its input is a bitmap that is preprocessed (so provide a reasonable input) there's lots of places in which there can be buffer overruns, underruns… many of the problems that Rust shines on are evidenced here. So a Rust rewrite of this would be a big win. | OCR Rust FFI | Tesseract Imaging OCR | Medium | 350 hours |
| [Add support for DTMB countries](/public/gsoc/dtmb) | DTMB is the standard for Chinese TV, also implemented by countries such as Cuba. What kind of student is ideal for this task? One with lots of analytic skills and patience. If you are one of those, don't disregard this task just because you don't speak (or maybe, even care) about Chinese. The experience on dealing with this will be extremely valuable in the future.We will use part of the organization funds to buy standard documents you might need, a capture device, and in general, anything required to make your life easier. | Rust | DTMB  Video standards Hardware Research | Unknown |  Discuss |
| [Add Japanese support](/public/gsoc/japanese) | Captions are used by people all over the world on a regular basis. Most of us are familiar with regular horizontal captions at the bottom of the screen, but did you know that in Japan a common position for captions is vertically on the right or left side of the screen? Come learn more about what Japanese audiences need out of captions as well as how captioning standard likes IMSC and WebVTT support these features.| Japanese (or be good with foreign languages), Rust | Depends | Suspected hard |  Discuss |

#### New subtitles tools

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ------ |
| [Subtitle quality quantification tool](/public/gsoc/2022/subtitle_quality/) | Writing a subtitle quality quantification tool | (Some) Rust, Some (C) | CCExtractor internals | Medium | 350 hours |

#### Support tools we and other orgs use as part of their development process

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
[The sample platform (/ continuous integration) project](/public/gsoc/sampleplatform) | The sample platform is a good way to help new contributors to check if their code doesn't introduce any regressions. It's pretty stable, but is often hard to interpret for new contributors, and still pretty slow if the queue builds up. We want to move the platform towards GCP (Google Cloud Platform) and run the tests on disposable instances rather than through KVM. **This project is guaranteed to be selected if the proposal is good.** | Git Python | Google Cloud API's GitHub Actions GitHub API's Continuous Integration (CI) Automated deployments GitHub integration | Medium/Hard | 350 hours |

#### Multimedia (misc)

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [Upgrade FFmpeg](/public/gsoc/2022/updateffmpeg) | FFmpeg is the premier open source video library. We use it to decode video to be able to process burned-in subtitles. They recently made breaking changes to their API (worth it) and the clients need to be updated. CCExtractor is one such client. | Some C | Video, subtitles, API integration, FFmpeg | Easy-Medium | 175 hours |

#### Flutter

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [ ruTorrent mobile interface (II) ](/public/gsoc/flutterrutorrent2) | ruTorrent is a popular web interface for rTorrent, which is possibly the most used BitTorrent client in linux. Last year we started a new project to write a Flutter based interface and was successful and it's gaining traction on its own. We want to work on that project and include new features. | Flutter | BitTorrent | Medium | Discuss |
| [ support more torrent clients ](/public/gsoc/flutter-more-clients) | We'd like to add support for other clients to our ruTorrent mobile interface (which of course will get a new name): [Flood](https://flood.js.org) and [Deluge](https://deluge-torrent.org). | Flutter | API, Teamwork | Medium |  Discuss |
| [ Flood Mobile ](/public/gsoc/2022/flood_mobile) | The project was a part of GSoC 21' and had a initial version which interacted with the [Flood](https://flood.js.org) backend. This year we hope to incorporate RSS feed, better file selection and increase the test coverage of the app. | Flutter | Scalability & Testing | Medium |  175 hours |
| [ Beacon (frontend) ](/public/gsoc/2022/beacon) | This project was started last year and it aims to ease the group travelling (or hiking). By using this, the group leader would be able to share his live location with the entire crew. We want to improve on past work, include new features, and release it. Note: This project has really gotten traction and there are a lot of contributors working on it now.  | Flutter | Scalability | Medium | 175 hours |
| [ TaskWarrior ](/public/gsoc/2022/taskwarrior) | Taskwarrior is a very nice command-line tool (yes, in 2022 — and I love it!) to manage task list. Let's use flutter to create a app for it!! | Flutter | Scalability | Medium | 175 hours |
| [ It's Urgent ](/public/gsoc/2022/itsurgent) | A notification tool that lets the sender decide if what he/she has to say is so important as to interrupt the receiver | Flutter | Scalability | Medium | 350 hours |

#### Systems
| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [ Beacon (backend) ](/public/gsoc/2022/beacon) | This project was started last year and it aims to ease the group travelling (or hiking). See the entire description on the Frontend part, above. The backend of course is the cloud part of it that lets us scale with easy. | Linux, cloud | Scalability | Medium | Probably 175 |
| [ Linux tuning for network throughput ](/public/gsoc/linuxtuning) | Come up with a system that tunes the linux kernel to maximize network throughput for a number of workloads, such as web server or BitTorrent. We will provide access to a server with a huge pipe (10 Gbit/s, SSD, lots of cores) and your job is to build a tool that maximizes the throughput (and prove it!) | Linux | Kernel internals, Networking | Medium | 175 hours |

#### rTorrent

We use [jesec/rtorrent](https://github.com/jesec/rtorrent). It provides a more modern base with Bazel/CMake and C++ 17 (instead of autotools and C++ 0x). Plus, your works are guaranteed to be incorporated if they match expectations.

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [ a modern RPC interface ](/public/gsoc/rtorrent-modern-rpc) | rTorrent currently uses an antique XMLRPC interface, which is limited in capability, not scalable, hard to use, insecure and low-performance. Community needs a modern RPC interface with full bidirectional, stream processing, incremental data loading and high concurrency capabilities, which allows real-time events for RPC users, reduced serialization/transfer overheads, potentially better security (with authentication and/or TLS), etc. | C++ | RPC, Event Loop | Medium/Hard | 175 hours |
| asynchronous name resolution | UDP tracker name resolution is not asynchronous at the moment, which causes blocking in the main thread and can block (timeout) other ongoing/incoming connections/transfers. c-ares or libwebsockets implementation is preferred, as c-ares is already used by curl, which rTorrent depends on, while libwebsockets may be used by a future WebSockets RPC interface. | C, C++ | Threading, Event Loop | Medium | 175 hours |
| improve scalability - on start | It takes 3 minutes to load 28890 entries from the session directory on start. Only 1 core is used. Deal with this situation, potentially by making the session functions thread safe and spawning more threads for the tasks. | C++ | Threading | Medium | 175 hours |
| improve scalability | rTorrent has a well-defined threading behaviour, which makes it stable and light on resources. There are 3 permanent threads only: main, disk and scgi. However, in the age of Gigabit/10G connections, 3 threads are often not sufficient. Implement a new threading model with better scalability. | C++ | Threading | Hard | 175 hours |
| scheduling/queuing | In some cases, users might want to download a series of torrents one-by-one without having to manually start the next when the previous is completed. Implement a scheduler along with a queue to allow users to limit the number of maximum simultaneous downloads. Enqueue if the user adds a download or decrease the limit. Dequeue when a download is completed or the user increases the limit. Keep the queue state across reboots. | C++ | Scheduling | Medium | 175 hours |

#### New things we're currently interested on

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- | ------ |
| [ Mouseless for Linux v2 - i3 edition ](/public/gsoc/2022/mouseless_i3) | Mouseless is a nice tool to practice keyboard shortcuts for a few popular apps. Unfortunately it's only available for Mac. Last year we created an open source one that runs on Linux. Using that work or not (this is your choice) we want to create one that helps use i3vm (the fantastic windows manager) using keys only. | Your choice | ?? | Unknown | 175 hours |
| [ BitTorrent over TLS ](/public/gsoc/bittorrent-tls) | BitTorrent protocol is not secure. Its encryption mechanism is outdated and weak. Even for obfuscation, it is ineffective. Nowadays, even an entry-level gateway has the capability to detect and block BitTorrent traffic at little to no risk. The BitTorrent community would benefit from a new standard encryption mechanism that allows strong encryption, forward secrecy and resistance to censorship. | Depends | Networking, Standardization | Hard | 350 hours |
| [ The next peer-to-peer protocol ](/public/gsoc/cloudtorrent) | BitTorrent is of course the world's most used peer to peer protocol. It's great, but it was designed before the cloud was ubiquitous and it doesn't make use of the places where you have the most storage or the most bandwidth. Can we design something for the next decade? | Depends | Peer-to-peer, cloud | Unknown | 175 hours |


#### Artificial Intelligence and clever algorithms

| Name | Description | Tech you need to know | Tech you will learn | Difficulty | Size |
| ----------- | ----------- | ----------- | ----------- | ----------- |  ------ |
| [Poor man's Rekognition (IV)](/public/gsoc/2022/poormanrekognition4) | Amazon Rekognition is a (paid) service that is capable of extracting information and insights from images and videos by identifying objects, text and activities, performing facial analysis, detecting inappropriate scenes, and much more using deep learning. In the last three years, we did some work towards creating a free and open source version of the same by training a bunch of models and creating easy to use APIs. This year we want to improve on the past work. | Python  Computer Vision | Django  Tensorflow | Medium |  175 hours |
| [Poor man's Textract](/public/gsoc/poormantextract) | Amazon Textract a (paid) service that "automatically extracts text and data from scanned documents. Amazon Textract goes beyond simple optical character recognition (OCR) to also identify the contents of fields in forms and information stored in tables". We want to build a free alternative that provides an output of similar quality. | Your choice | AI  Computer vision  OCR | Unknown | Discuss |

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
