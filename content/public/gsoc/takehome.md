##### Take-home qualification tasks

We know that working on existing codebases can be daunting, and you
might end up working on a new project anyway, so this year we have some
alternative qualification tasks (we'll add more soon, so come back).

You can still opt for the standard ones (such as fixing issues on
GitHub) --- these are just alternatives that are available.

#### Interprocess communication (low-level)

Language: **Modern C** (not C++). Must work in:
**Linux**

Create a program, in C, that utilizes queues and memory-based
interprocess communication.

We're writing a system that encodes video using hardware encoders,
specifically nVidia GPUs. These consumer-grade GPUs are limited to two
simultaneous encode sessions. However they can encode (really) fast,
easily at 300 frames per seconds.

We want to overcome this limitation by distributing the load in
software. Suppose you have 10 cameras each of them providing a never
ending stream of video at 30 frames per second. The job is to come up
with a good plan (and proof of concept) that maximizes GPU usage.

Here's a few things that will help you:

` * You will need to have a queuing system that take the frames. Let's assume on the assumption that there is one process that reads data from one specific camera, so if there's 10 camera there are 10 such processes. They are the producers. Let's call them CameraManagers.`\
` * Because of the way video encoding works (in which one frame can be compressed a lot by using information from the previous one), you can 't just merge data from all the cameras and them send to the GPU as they arrive. Instead, you will need to batch them and send a number of frames from one specific camera (maybe 2 seconds, so 60 frames) at a time. We'll call the program that manages the work queue and the GPU the GPU manager.`\
` * Remember that while you do this the frames will continue to arrive.`\
` * Frames are big, so you want to minimize copying data around. For this, you have shared memory between processes.`\
` * A possibility here is to have one GPUManager, that will take the frames from the the CameraManagers. The GPUManager will need to keep one list of pending frames per camera and a queue of cameras. When a camera has sent 60 frames its list of pending frames is ready to be encoded. The GPUManager then encodes those frames (that causes a file to be generated with the output, but that's not needed for this exercise) and clears the list. Remember that while encoding was in progress other frames may have arrived and you don't want to lose them.`\
` * As mentioned, there's 2 encode sessions. The GPUManager needs to support that and simultaneously encode two frame-queues at a time.`\
` * Cameras can be added, removed, and come down (for example, they can break, or their CameraMananger can crash). You system needs to be tolerant to this.`\
` * You need to create the mockup CameraManager and the Mockup GPUManager. Since you don't have cameras of course, for each frame read a block of 1280x800 bytes from /dev/urandom.\\`\
` * Demostrate that it works will by validating the output, for example using a checksum of each input frame and writing it to the output which can be a sample text file that contains the "camera number", "frame number", and "checksum" for that frame, in order.`

#### Meetup auto-RVSP

Language: Any Must work in: **Linux**

This task is relatively simple (in theory), but it will help us assess
your code organization abilities.

Write a program for meetup.com that sends an auto-RVSP to specific
groups. For example, suppose you are a member of 7 different Meetup
groups, some of which have very popular events that fill up quickly. You
want to sign up for them as fast as possible to ensure that you get a
spot.

Your program needs take care of authentication, searching for events in
configured groups (not all), and automatically signing up on the user's
behalf in a timely manner. Usage of existing Meetup client libraries is
permitted.

It's OK for your program to be a simple command-line tool that needs to
be run from cron once an hour or something like that.

#### Plan for migrating our DokuWiki website to fastpages

Language: Any Must work in: Linux (whatever migration system you
come up with)

Our website currently uses an easy-to-use wiki solution called
[DokuWiki](https://www.dokuwiki.org/dokuwiki), but the
aesthetics could be better.

There's a [new platform](https://fastpages.fast.ai/) that
uses GitHub Pages for hosting and pull requests for content management.
It seems to integrate well with things we care about, e.g. YouTube
embeds.

Can you devise a good plan for migrating from DokuWiki to fastpages?

#### Export data from MyFitnessPal to Grafana

Language: Any Must work in: Linux (anything server side)

MyFitnessPal is a mobile app used to track food & energy intake,
exercise, and more. It supports CSV data export (e.g. through email) to
facilitate archival, but this style is a bit antiquated for manual
viewing.

A simple website that accepts CSV exports and renders nice visual
representations using Grafana would be much better for users. This
should be feasible to complete in a few days since all of the major
components already exist.

#### VoxelSpace in Flutter

Language: Flutter Must work in: Android, iOS (OK if you can just
test in one, but we will test in both and if it doesn't work we'll
send you the debug info so you can fix it).

A couple decade ago a superfun helicopter game took the gamers by storm.
Well, that's a bit hyperbolic but it was really fun and a lot of people
spent thousands of hours flying that helicopter.

What made it revolutionary was the technique used to draw the terrain.
Of course that's obsolete by today's standards, but it still looks
quite good, considering it's age.

Your job is to write a simple Flutter program that does the same thing.
And no, you don't have to research VoxelSpace by yourself - there's
source code already, but not in Flutter.

Write a Flutter program that does
[this](https://s-macke.github.io/VoxelSpace/VoxelSpace.html).
And to make it more interesting, edit the terrain map so the text "GSoC
2020, CCExtractor Development" can be read when flying.

#### Beacon in Flutter

Language: Flutter Must work in: Android, iOS (OK if you can just
test in one, but we will test in both and if it doesn't work we'll
send you the debug info so you can fix it).

Write a Flutter app that is able to share your location with anyone who
has a specific passkey. For example, suppose you are going to start a
hike with friends and you want them to know your location but only for
the next 3 hours. You can do that in many ways, but let's say one is by
letting people look up a passkey somewhere (to simplify things consider
that it's OK to look up a list of passkeys in a static file hosted in
github, so you don't need to setup a database).

Your app then will have two modes of operation: Someone is sharing their
location (that means "carrying the beacon") and everybody else can see
that location (they are "following the beacon").

#### Camera with intelligent autozoom in Flutter

Language: Flutter Must work in: Android, iOS (OK if you can just
test in one, but we will test in both and if it doesn't work we'll
send you the debug info so you can fix it).

Write a Flutter app that lets you take pictures of anything and
autozooms to the right size to pick up an object that is in view. For
example: Take a collection of dogs, or cats (there are probably
pretrained models for this, it's up to you to look them up). If your
app is used to take a picture of a dog, then the zoom should be
automatically adjusted to take a picture of the dog in foreground, even
if the dog is a bit far.

It must be fast or the dog will move!
