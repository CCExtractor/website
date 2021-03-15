###### Season of Docs 2020

 **General mission statement\*\*: To generate useful documentation
        that allows new developers to be productive as quickly as their
        own skills allow and users to use our software without going to
        several different places to find how to do even the most basic
        of the tasks.

<!-- -->

 **Our commitment to technical writers\*\*: We will quickly provide
        any and all assistance you need and point you to the right
        people. We will trust you to make documentation decisions both
        in writing and in organization.

To make things as clear as possible we\'ve divided the task in blocks.

 **Compiling CCExtractor for the first time.\*\*

Audience: Developers of all levels.

\^\#\^Task\^Current status\^Where we want to go\^What you need to know\^
\| 1 \| Tutorial: How to compile CCExtractor on Windows using Visual
Studio \| Documentation does exist, but it\'s outdated. Also, the
procedure itself it\'s (possibly) more complicated than it should be. \|
This is an onboarding tutorial. It must be possible for a developer with
some experience on Visual Studio to build a working binary having only
VS itself, your tutorial, and internet access \| You don\'t need to know
much as the audience are beginners. \| \| 2 \| Tutorial: How to compile
CCExtractor on Windows using GCC \| Documentation exists for GCC on
Linux, which is a good starting point \| This is an onboarding tutorial.
It must be possible for a developer with some experience on GCC to build
a working binary having only gcc (the GNU compiler) itself, your
tutorial, and internet access \| You don\'t need to know much as the
audience are beginners. \| \| 3 \| Tutorial: How to compile CCExtractor
on Linux \| Documentation exists, but it\'s possibly not really well
organized \| This is an onboarding tutorial. It must be possible for a
developer with some experience compiling linux programs to build a
working binary having only your tutorial, and internet access \| You
don\'t need to know much as the audience are beginners. \| \| 4 \|
Tutorial: How to compile CCExtractor on OSX \| Nothing recent exists.
CCExtractor is known to build on OSX, but none of the core developers
uses a Mac. \| This is an onboarding tutorial. It must be possible for a
developer with some experience compiling OSX (Mac) programs to build a
working binary having only your tutorial, and internet access \| You
don\'t need to know much as the audience are beginners. \|

 **Updating CCExtractor dependencies.\*\*

CCExtractor has some dependencies to be built. Some of them are
\"vendored\", meaning we just took the source code and integrated it
into CCExtractor, which has the advantage that we don\'t need to deal
with those dependencies changing over time if we\'re happy with whatever
version we are using, but it also has the disadvantage that we\'re stuck
with those versions - and some times we do need to update them.

Some are easy to update, and some require a lot of work and/or magic.
The documentation is non-existent, and because we do it every N years
for some of the dependencies even the person that actually did it last
time doesn\'t remember the details.

We\'d like to prepare good documentation here that anyone can follow so
the next time we do this it\'s not so painful.

The external libraries which we don\'t vendor (i.e. we use the ones
found in the system) are a different problem; of course we don\'t want
to update those, but changes in those libraries often break CCExtractor
and we need to follow. We also need documentation for this.

The goal is to write a separate guide for each of the dependencies,
which currently are:

\^Library\^URL\^ \| Tesseract \| <https://tesseract-ocr.github.io/> \|
\| Leptonica \| <http://leptonica.org/> \| \| libGPAC \|
<https://gpac.wp.imt.fr/> \| \| zlib \| <https://zlib.net/> \| \|
utf8proc \| <https://juliastrings.github.io/utf8proc/> \| \| protobuf-c
\| <https://github.com/protobuf-c/protobuf-c> \| \| libpng \|
<http://www.libpng.org/pub/png/libpng.html> \| \| FreeType \|
<https://www.freetype.org/> \| \| libhash \|
<http://libhash.sourceforge.net/> \| \| nuklear \|
<https://github.com/Immediate-Mode-UI/Nuklear> \| \| libzvbi \|
<http://zapping.sourceforge.net/ZVBI/index.html> \| \| ffmpeg \|
<https://ffmpeg.org/> \|

 **documentation included with CCExtractor \*\*

This refers to the documentation that is shipped with CCExtractor, not
to online tutorials.

\| 1 \| Rework help screen \| When you run CCExtractor without
parameters it dumps a huge list or arguments. \| The output is too long,
disorganized, it has no examples\... this started when CCExtractor had 3
possible options, not 60. This needs to be be reorganized. \|
Cooperation abilities. This is needed because you will need to interact
a lot with a developer that adjusts the output to what you recommend. \|
\| 2 \| Organize existing documentation \| We currently have a docs
folder with various things. \| Your job is to classify what we have.
This means decide what to throw away (no longer relevant), what needs to
be updated but can be saved, what need to be rewritten, what needs to be
merged\... \| Patience \|

 **Website\*\*

\| 1 \| Reorganize \| The website is rather disorganized, and there\'s
duplicate information in several pages, as well as shared content (that
is sync\'ed manually) between the man pages and the website \| Decide
what goes where, rewrite pages, delete pages. \| - \|

 **GitHub\*\*

\| 1 \| Create a good template for new issues \| We have a boiler plate
template that is too long and doesn\'t allow to quickly see what the
issue is about \| We want to have a simple template and tells the user
exactly what to do, that doesn\'t feel like you are doing taxes, and
that has an output that allows to understand at a glance what a problem
is. \| - \|

 **Google Summer of Code\*\*

\| 1 \| Improve tasks descriptions \| We\'ve been doing our best every
year to improve our tasks description, and we think we\'ve done an
acceptable job, but there\'s room for improvement \| Starting with two
of three \"classic\" tasks (that are really important to us but no
student ever picks), come up with a good definition that is accurate,
complete, and points to the right resources. \| - \|

======= User documentation =======

\- Our user tutorials are hopelessly outdated. There\'s one to process a
DVD, and a basic how-to. We need to generate a number of interest use
cases.

\- Write scripts for youtube videos. We don\'t need you to actually
produce the videos (but that would be fantastic, of course). The
important thing is the script. We can get someone to read it.

======= Developer documentation =======

\- Tutorials on how to do a number of things: Write a new decoder, write
a new encoder, how to integrate CCExtractor with other tools,
compiling\...

\- Help us write an official \"onboarding\" tutorial to help new
developers join the team without feeling overwhelmed by our code base.

###### Sample Platform

\- Help with \"onboarding\" tutorials (e.g. submitting samples, linking
GitHub to the
[platform](https://github.com/CCExtractor/sample-platform) so
issues can be opened with the correct sample link). The Sample Platform
website can be found at <https://sampleplatform.ccextractor.org>.

###### Google Summer of Code documentation

\- Our current documentation for past GSoC projects is \"free style\",
and there\'s definitely a broad range of quality, possibly because of
that. While we don\'t want to limit great writers by enforcing a
specific style it\'s probably a good idea to have some \"baseline\" so
that less gifted writers can deliver a minimum of quality. It\'s a pity
when a good project gets less-than-stellar documentation.

###### Google Summer of Code Ideas pages

\- We can use help here. Really. We do our best to produce interesting
ideas and amazing projects to work on but we seem to be failing on
delivery. Given our ideas page for
[2020](public:gsoc:ideas_page_for_summer_of_code_2020) (some
of them will appear in 2021) - how can be reorganize the content so that
it\'s clearer, more interesting\...?
