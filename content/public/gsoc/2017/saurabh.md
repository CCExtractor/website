# CCAligner : Word by Word Audio Subtitle Synchronisation

//Developed under Google Summer of Code, 2017 with CCExtractor
Development By [Saurabh
Shrivastava](https://github.com/saurabhshri) //

//Blog entry for final submission :
(https://saurabhshri.github.io/gsoc-final-submission/) //

------------------------------------------------------------------------

##### Introduction

The usual subtitle files (such as SubRips) have line by line
synchronisation in them i.e. the subtitles containing the dialogue
appear when the person starts talking and disappears when the dialogue
finishes. This continues for the whole video. For example :

`1274` `01:55:48,484 -> 01:55:50,860`
`The Force is strong with this one`

In the above example, the dialogue *\#1274* - *The Force is strong with
this one* appears at *1:55:48* remains in the screen for two seconds and
disappears at *1:55:50*.

The aim of my GSoC project was to build a tool for word by word
synchronisation of subtitles with audio present in the video by tagging
each individual word as it is spoken, similar to that in karaoke
systems. I have named my project CCAligner as it conveniently lays out
it's basic functionality.

E.g.

`The [6948484:6948500]` `Force [6948501:6948633]` `is [6948634:6948710]`
`strong [6948711:6949999]` `with [6949100:6949313]`

In the above example each word from subtitle is tagged with beginning
and ending timestamps based on audio.

{{ youtube\>38\_27E1PxXA?large }} \\\\

CCAligner makes use of automatic speech recognition to analyse audio and
recognise words to perform alignment. The project comprises of both user
friendly tool and developer friendly API.

##### Project Related Links

` * Project repository on Github: `[`https://github.com/saurabhshri/CCAligner`](https://github.com/saurabhshri/CCAligner)

` * Project readme : `[`https://github.com/saurabhshri/CCAligner/blob/master/README.adoc`](https://github.com/saurabhshri/CCAligner/blob/master/README.adoc)

` * Project documentation : `[`https://github.com/saurabhshri/CCAligner/blob/master/docs/`](https://github.com/saurabhshri/CCAligner/blob/master/docs/)

` * My blog (includes weekly GSoC posts) : `[`https://saurabhshri.github.io`](https://saurabhshri.github.io)

` * Milestones and deliverable checklist : `[`https://saurabhshri.github.io/gsoc/`](https://saurabhshri.github.io/gsoc/)

` * Project link on official GSoC web-app : `[`https://summerofcode.withgoogle.com/projects/#5589068587991040`](https://summerofcode.withgoogle.com/projects/#5589068587991040)

` * Project proposal : `[`https://github.com/saurabhshri/saurabhshri.github.io/blob/master/GSoC/`](https://github.com/saurabhshri/saurabhshri.github.io/blob/master/GSoC/)

` * Mentors : `[` ``@cfsmp3`](https://github.com/cfsmp3)` and `[` ``@AlexBratosin2001`](https://github.com/AlexBratosin2001)

The project was built by me individually. All the external libraries and
code used are credited wherever due.

##### Technical Documentation

All the technical details are commented in the codes and the
documentation is available in the readme of the repository (linked
above). Code is properly commented and the variables, classes and other
components are named properly in Camel Case for easier understanding of
the code. Find compiling, installing, usage instructions and docs here :

` * `[`https://github.com/saurabhshri/CCAligner`](https://github.com/saurabhshri/CCAligner)

##### Additional Work

In addition to my main project, I also worked on creating a single
header SubRip subtitle parser library in C++ and contributing to various
open source projects, including, but not limited to CCExtractor,
Sample-Platform, AutoEdit2, Rhubarb Lip Sync, CMUSphinx.

1\. Created a single header SubRip subtitle parser library in C++. This
served as a core in CCAligner subtitle handling. It has very huge number
of options available, and is very simple to use.

` * Project repository : `[`https://github.com/saurabhshri/simple-yet-powerful-srt-subtitle-parser-cpp`](https://github.com/saurabhshri/simple-yet-powerful-srt-subtitle-parser-cpp)

` * Documentation : `[`https://github.com/saurabhshri/CCAligner/tree/master/docs`](https://github.com/saurabhshri/CCAligner/tree/master/docs)

2\. Improving existing CCExtractor features, fixing issues and help in PR
and code reviews.

` * All my commits to CCExtractor repository : `[`https://github.com/CCExtractor/ccextractor/commits?author=saurabhshri`](https://github.com/CCExtractor/ccextractor/commits?author=saurabhshri)

3\. Improving CCExtractor\'s sample-platform, fixing and reporting
issues, and help in PR and code reviews.

` * All my commits to Sample-Platform repository : `[`https://github.com/canihavesomecoffee/sample-platform/commits?author=saurabhshri`](https://github.com/canihavesomecoffee/sample-platform/commits?author=saurabhshri)

4\. Link to my Github profile : <https://github.com/saurabhshri>

##### Some Demostrations

` * Karaoke Demo 2 [Ted Talk]  `

\\\\

` * Karaoke Demo 3 [Cartoon Show]  `

\\\\

` * Karaoke Demo 4 [Discussion Video]  `

\\\\

` * Transcription Demo [Reality Show]  `

\\\\

##### Third party libraries and dependencies

All the third party libraries are located in \`src/lib\_ext\` and along
with their individual licenses.

1\. PocketSphinx : PocketSphinx is a lightweight speech recognition
engine. It is portable and is used in ASR based alignment.
//(https://github.com/cmusphinx/pocketsphinx)//

2\. SphinxBase : Basic libraries as well as some common utilities for
manipulating acoustic feature and audio files. This is used by
PocketSphinx. //(https://github.com/cmusphinx/sphinxbase)//

3\. srtparser.h : srtparser.h is a single header, simple and powerful C++
srt subtitle parsing library that allows to easily handle, process and
manipulate srt subtitle files.
//(https://github.com/saurabhshri/simple-yet-powerful-srt-subtitle-parser-cpp)//

4\. webRTC : WebRTC is a free, open project that provides browsers and
mobile applications with Real-Time Communications (RTC) capabilities via
simple APIs. It is used to perform VAD in the project.
//(https://webrtc.org)//

##### Known Issues / Future Work Needed

The project is in it's very early stage and is constantly evolving. The
available functions, usage instructions et cetera are expected to
refactor over time. Feel free to contribute and improve the project.
Currently, officially only US English is supported. For other languages
and accents, a proper trained acoustic model could be supplied and
experimented with. Text tokenisation within the program needs
improvement. Feel free to raise any issue in the repository\'s issue
tracker : <https://github.com/saurabhshri/ccaligner/issues>

##### Read More

More information and news related to project could be found at the links
attached above and would be posted from time to time on my blog :
<https://saurabhshri.github.io>
