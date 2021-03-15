#### Getting started with CCExtractor\'s source code

This page is currently being written (a bit every day, actively) so new
developers that want to join us don\'t have to learn the basics from
scratch.

We often get questions about how to get started with our code. The most
important thing would be: Don\'t try to read and understand every file,
because it\'s pointless and there\'s no need. While it\'s definitely not
the linux kernel, CCExtractor\'s code is not trivial, and it\'s been
written by a number of people during a long time. Often, that people was
learning as they went, and it shows in parts of the code.

However, it\'s important to have a general idea of how things are
organized so you know where to look for things and how to add new
features.

This page tries to explain the most important concepts and introduces
the important files in the core CCExtractor tool. Note that we have
additional tools such as our regression test platform, or the real time
subtitle database. Those will be explained in their own pages.

CCExtractor is written in C. If you are a C++ developer that will have
pretty much zero impact in your ability to contribute, because the
really important differences are abstracted in functions anyway. Sure we
don\'t have classes and our I/O is different, but that\'s really not a
big deal here - you will need to understand file formats anyway, or how
to read specification documents. None of that depends on the language of
choice.

CCExtractor reads binary streams (a stream may be a file, but it can
also be data coming from network - so don\'t assume) and writes subtitle
files.

### Container formats

The usual audio/video streams come in a number of variants. You know how
in files you have .avi, .mkv, .mp4, .mpeg and so on? Those are container
formats, because they \"contain\" the parts of the media: Video, audio
and subtitles. Each of those have some limitations, but in general, the
contain format doesn\'t specify how each part of the media is encoded.
You have can a .mkv (Matroska) that contains the video encoded as
MPEG-2, or H264, etc, then the audio as MP3, or AAC and so on.

In TV broadcast, the typical container is the Transport Stream (.ts). A
Transport Stream can carry more than one TV program (for example, BBC
One, BBC Two and BBC News), each of them with its own video, audio, and
subtitles (and for each, maybe more than one language).

Streaming services such as iTunes uses .mp4.

The parts of CCExtractor that handle the containers are called
\*\*demuxers\*\*. A demuxer is capable of reading a specific container
and return parts of it.

### Subtitles

Our input streams are files that contain subtitles. These subtitles can
be encoded in a different ways depending on the country they come from
or the technology used to make the recording. Focusing on recordings
made from a TV broadcast, we have:

 **CEA-608\*\*, which is the \"old\" format used in North America.
        It comes from the analog days of NTSC, but while the
        transmission was analog, in the end you have 2 bytes (that\'s
        digital) of subtitle data in each frame, and that\'s the one
        thing that is important to keep in mind. You don\'t need to
        bother understanding the analog part of the transmission,
        because what we process is just those two bytes.

By the way, in North America those subtitles that you can turn on and
off are called \*\*closed captions\*\*.

 **CEA-708\*\*, is the \"new\" format used in North America. It\'s
        all digital, and because when it was designed the TVs were a lot
        better, they had much more bandwidth for subtitles, they have
        lots more capabilities.

<!-- -->

 **Teletext\*\*, is the old format in Europe. It\'s still around,
        but it\'s quickly being replaced with DVB.

<!-- -->

 **DVB\*\* is the current format in Europe. It\'s a bitmap based
        format, which means that instead of characters being transmitted
        it\'s images (for example, for \"CCExtractor\" you would have
        the representation of the letters in graphics format, not one
        byte for each letter as you could expect). This makes DVB more
        capable, but also a lot harder to transcript to text, since a
        OCR is required.

<!-- -->

 **ISDB\*\* is the format used in Brazil.

In CCExtractor, the parts of code responsible for handling the different
subtitle formats are called \*\*decoders\*\*.

### Combination of containers and subtitle formats

As explained, subtitles come in a number of encodings, and they can be
carried in different containers. So you can have subtitles encoded in
CEA-608 inside a .ts or a .mp4. And you can also have a .ts file or a
.mp4 that contains subtitles in CEA-608 and DVB.

Once you have the subtitle data it doesn\'t matter where it came from
(what the container type is). Similarly, when processing a container, it
doesn\'t matter what type of subtitles are there.

### Reading the containers

The first thing that we do is identify (unless the user specified it
manually) the type of container we\'re going to process. This is done by
reading the first bytes and figuring it out for ourselves.

This happens in the function\\\\

`void detect_stream_type (struct ccx_demuxer *ctx)`

which is in the file stream\_functions.c

That function (please check the code) sets the type format (best guess;
identifying without fault is a lot harder than you\'d think, but that\'s
not important for an introduction) for the \*\*context\*\* (more on
contexts later).

Once we know what type of stream we\'re processing we know which demuxer
to use to read it.

We have demuxers for Transport Streams (in ts\_functions.c), mp4 (in
mp4.c) and more. The block that, after knowing the type of container,
decides what to do, is in the main file, ccextractor.c,

<code>

`       /* -----------------------------------------------------------------`\
`       MAIN LOOP`\
`       ----------------------------------------------------------------- */`\
`       switch (stream_mode)`\
`       {`

\...

`       }`

~~~

### User options, contexts, and in general where stuff is saved

When adding a new user option (that can be selected via command line
argument) the steps are always the same:

1\) Add the corresponding variable in the structure <code> struct
ccx\_s\_options // Options from user parameters {

`   int extract;                                               // Extract 1st, 2nd or both fields`\
`   int no_rollup;`\
`   int noscte20;`\
`   int webvtt_create_css;`

\... } ~~~ which is defined in src/lib\_ccx/ccx\_common\_option.h

2\) Initialize it to the correct default value in this function: <code>
void init\_options (struct ccx\_s\_options \*options) {

1.  ifdef \_WIN32

`   options->buffer_input = 1; // In Windows buffering seems to help`

1.  else

`   options->buffer_input = 0; // In linux, not so much.`

1.  endif

`   options->nofontcolor=0; // 1 = don't put `<font color>` tags`\
`   options->notypesetting=0; // 1 = Don't put `<i>`, `<u>`, etc typesetting tags`

~~~

which is defined src/lib\_ccx/ccx\_common\_option.c

3\) Add the corresponding parsing code in the function

<code> int parse\_parameters (struct ccx\_s\_options \*opt, int argc,
char \*argv\[\]) {

`   // Parse parameters`\
`   for (int i=1; i<argc; i++)`\
`   {`\
`       if (!strcmp (argv[i],"--help") || !strcmp(argv[i], "-h"))`

\... }

~~~ which is defined on src/lib\_ccx/params.c

4\) Add usage instruction on the function

<code> void print\_usage (void) {

`   mprint ("Originally based on McPoodle's tools. Check his page for lots of information\n");`\
`   mprint ("on closed captions technical details.\n");`

\... } ~~~

which is also defined on src/lib\_ccx/params.c

5\) Depending on what part of the code is going to actually be using that
parameter you will need to copy it on the right place. The \"place\", in
general, is a context. A context is a structure that contain status
values relevant to a group of functions, such as a decoder or an
encoder. For example, if the new parameter applied to a decoder, we
could copy it in the function that initializes the decoder contexts with
user options:

<code> static struct ccx\_decoders\_common\_settings\_t
\*init\_decoder\_setting(

`       struct ccx_s_options *opt)`

{

`   struct ccx_decoders_common_settings_t *setting;`

`   setting = malloc(sizeof(struct ccx_decoders_common_settings_t));`

\... ~~~

Note that the function receives the same structure used in steps 2 and
3, and is going to return a struct ccx\_decoders\_common\_settings\_t\*
.

Finally, there\'s the function that really initializes the decoder
context from the decoder settings:

<code> struct lib\_cc\_decode\* init\_cc\_decode (struct
ccx\_decoders\_common\_settings\_t \*setting) {

`   struct lib_cc_decode *ctx = NULL;`

~~~

That struct lib\_cc\_decode\* is what the decoders will have with all
the options plus all the values they need to store as flow progresses.

6\) Use the variable.

A [sample
commit](https://github.com/CCExtractor/ccextractor/commit/150d2e7404843491baaf94b33ca7416279d55bb8)
that does all the steps and adds a new option.
