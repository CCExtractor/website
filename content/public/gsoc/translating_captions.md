##### Translating captions

You can use the
[cctranslate](https://github.com/kisselef/cctranslate) tool
(implemented by Oleg) to translate extracted captions in realtime and in
SubRip formatted files. We use the [ Google Translate
API](https://cloud.google.com/translate) for translation, but
the tool is built so developers can easily add other translation
engines.

#### How realtime translation works?

` - //ccextractor// starts with sharing service on`\
` - //ccextractor// launches //cctranslate// process`\
` - launched instance of //cctranslate// subscribes to //ccextractor//s' messages`\
` - //ccextractor// publishes extracted subtitles to all subscribers`\
` - //cctranslate// requests translation from translation service and saves translated captions to an output file`

### Ok, and what is a \"sharing service\"?

Sharing service is a [Publisher-Subscriber IPC
Pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
publisher implementation. It uses
[nanomsg](http://nanomsg.org) as a cross-platform socket
library, that provides simple interface to implement pub-sub model and
supports lots of transport mechanisms. To serialize messages
[protobuf-c](https://github.com/protobuf-c/protobuf-c)
implementation of [Google Protocol
Buffers](https://developers.google.com/protocol-buffers) is
used. Both of used solutions are language-independent, so sharing
service could be easily used by third-party developers to create new
solutions based on ccextractor.

### What about the cctranslate tool?

Cctranslate tool was designed to be cross-platform and is implemented in
C language. It uses:

` * `[`libcurl`](http://curl.haxx.se/libcurl)` to perform http/https requests`\
` * `[`nanomsg`](http://nanomsg.org)` as a socket library`\
` * `[`protobuf-c`](https://github.com/protobuf-c/protobuf-c)` to parse serialized messages`\
` * `[`CJSON`](http://sourceforge.net/projects/cjson/)` to parse responses from `[`Google`` ``Translate`` ``API`](https://cloud.google.com/translate/)

Standalone SubRip-formatted files could also be translated using this
tool along with realtime translation.

### Sharing service messaging format

Coming soon in a separate document

#### How to use it?

First, you have to compile it. It uses cmake build automation system, so
make sure you have it installed. For Linux/MacOSX/UNIX use:

`$ mkdir build && cd build` `$ cmake ../` `$ make`

Make sure nanomsg and libcurl dev packages are downloaded. If your
distribution doesn\'t have a package system or these packages are not
supported by maintainer, you can download tarballs and compile it by
yourself.

Then, create a [Google Cloud
Platform](https://cloud.google.com) account (or use your
existing) and generate an API key.

Using cctranslate as a standalone text file captions translator
---------------------------------------------------------------

Check what languages are available at the moment:
`$./cctranslate --list-langs --key=YOUR_API_KEY` Pick up languages you
want your subs be translated to, and run:
`$./cctranslate --input=subs.srt --langs=fr,it,th --key=YOUR_API_KEY`

Using cctranslate for realtime translation
------------------------------------------

Copy cctranslate tool to ccextractors\' binary directory. There are two
ways to translate realtime: launch ccextractor with translating mode on
and launch cctranslate tool to connect to already running instance of
ccextractor.

To launch ccextractor with translating mode on, run:

`$ ./ccextractor INPUT_OPTIONS -translate LANGUAGE_LIST -translate-auth YOUR_API_KEY`

To connect cctranslate tool to already running instance of ccextractor:

`$ ./cctranslate --source=extractor --key=YOUR_API_KEY`

In the second case, ccextractor has to be started with sharing service
on. To do that add \*\*-enable-sharing\*\* option to arguments. By
default, it starts TCP sharing service on localhost:3269. You can set
other nanomsg-supported transport type to share captions using
\*\*-sharing-url\*\* arg in format transport:address.
