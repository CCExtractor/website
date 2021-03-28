---
title: "Command line usage"
---

CCExtractor's main program is console based. There's a GUI for
Windows, as well as provisions so other programs can easily interface
with CCExtractor, but the heavy lefting is done by a command line
program (that can be called by scripts so integration with larger
processes is straightforward).

Running CCExtractor without any parameter will display a help screen
with all the options. As of version 0.88 the help screen is as follows:

```
CCExtractor 0.88, Carlos Fernandez Sanz, Volker Quetschke.
Teletext portions taken from Petr Kutalek's telxcc
--------------------------------------------------------------------------
Originally based on McPoodle's tools. Check his page for lots of information
on closed captions technical details.
(http://www.theneitherworld.com/mcpoodle/SCC_TOOLS/DOCS/SCC_TOOLS.HTML)

This tool home page:
http://www.ccextractor.org
  Extracts closed captions and teletext subtitles from video streams.
    (DVB, .TS, ReplayTV 4000 and 5000, dvr-ms, bttv, Tivo, Dish Network,
     .mp4, HDHomeRun are known to work).

  Syntax:
  ccextractor [options] inputfile1 [inputfile2...] [-o outputfilename]

To see This Help Message: -h or --help

File name related options:
            inputfile: file(s) to process
    -o outputfilename: Use -o parameters to define output filename if you don't
                       like the default ones (same as infile plus _1 or _2 when
                       needed and file extension, e.g. .srt).
         -cf filename: Write 'clean' data to a file. Cleans means the ES
                       without TS or PES headers.
              -stdout: Write output to stdout (console) instead of file. If
                       stdout is used, then -o can't be used. Also
                       -stdout will redirect all messages to stderr (error).
           -pesheader: Dump the PES Header to stdout (console). This is
                       used for debugging purposes to see the contents
                       of each PES packet header.
         -debugdvbsub: Write the DVB subtitle debug traces to console.
      -ignoreptsjumps: Ignore PTS jumps (default).
         -fixptsjumps: fix pts jumps. Use this parameter if you
                       experience timeline resets/jumps in the output.
               -stdin: Reads input from stdin (console) instead of file.
You can pass as many input files as you need. They will be processed in order.
If a file name is suffixed by +, ccextractor will try to follow a numerical
sequence. For example, DVD001.VOB+ means DVD001.VOB, DVD002.VOB and so on
until there are no more files.
Output will be one single file (either raw or srt). Use this if you made your
recording in several cuts (to skip commercials for example) but you want one
subtitle file with contiguous timing.

Output file segmentation:
    -outinterval x output in interval of x seconds
   --segmentonkeyonly -key: When segmenting files, do it only after a I frame
                            trying to behave like FFmpeg

Network support:
            -udp port: Read the input via UDP (listening in the specified port)
                       instead of reading a file.

            -udp [host:]port: Read the input via UDP (listening in the specified
                              port) instead of reading a file. Host can be a
                              hostname or IPv4 address. If host is not specified
                              then listens on the local host.

            -udp [src@host:]port: Read the input via UDP (listening in the specified
                              port) instead of reading a file. Host and src can be a
                              hostname or IPv4 address. If host is not specified
                              then listens on the local host.

            -sendto host[:port]: Sends data in BIN format to the server
                                 according to the CCExtractor's protocol over
                                 TCP. For IPv6 use [address]:port
            -tcp port: Reads the input data in BIN format according to
                        CCExtractor's protocol, listening specified port on the
                        local host
            -tcppassword password: Sets server password for new connections to
                                   tcp server
            -tcpdesc description: Sends to the server short description about
                                  captions e.g. channel name or file name
Options that affect what will be processed:
          -1, -2, -12: Output Field 1 data, Field 2 data, or both
                       (DEFAULT is -1)
Use --append to prevent overwriting of existing files. The output will be
      appended instead.
                 -cc2: When in srt/sami mode, process captions in channel 2
                       instead of channel 1.
-svc --service N1[cs1],N2[cs2]...:
                       Enable CEA-708 (DTVCC) captions processing for the listed
                       services. The parameter is a comma delimited list
                       of services numbers, such as "1,2" to process the
                       primary and secondary language services.
                       Pass "all" to process all services found.

                       If captions in a service are stored in 16-bit encoding,
                       you can specify what charset or encoding was used. Pass
                       its name after service number (e.g. "1[EUC-KR],3" or
                       "all[EUC-KR]") and it will encode specified charset to
                       UTF-8 using iconv. See iconv documentation to check if
                       required encoding/charset is supported.

In general, if you want English subtitles you don't need to use these options
as they are broadcast in field 1, channel 1. If you want the second language
(usually Spanish) you may need to try -2, or -cc2, or both.

Input formats:
       With the exception of McPoodle's raw format, which is just the closed
       caption data with no other info, CCExtractor can usually detect the
       input format correctly. To force a specific format:

                  -in=format

       where format is one of these:
                       ts   -> For Transport Streams.
                       ps   -> For Program Streams.
                       es   -> For Elementary Streams.
                       asf  -> ASF container (such as DVR-MS).
                       wtv  -> Windows Television (WTV)
                       bin  -> CCExtractor's own binary format.
                       raw  -> For McPoodle's raw files.
                       mp4  -> MP4/MOV/M4V and similar.
                       m2ts -> BDAV MPEG-2 Transport Stream
                       mkv  -> Matroska container and WebM.
                       mxf  -> Material Exchange Format (MXF).
       -ts, -ps, -es, -mp4, -wtv, -mkv and -asf/--dvr-ms can be used as shorts.

Output formats:

                 -out=format

       where format is one of these:
                      srt     -> SubRip (default, so not actually needed).
                      ass/ssa -> SubStation Alpha.
                      ccd     -> Scenarist Closed Caption Disassembly format
                      scc     -> Scenarist Closed Caption format
                      webvtt  -> WebVTT format
                      webvtt-full -> WebVTT format with styling
                      sami    -> MS Synchronized Accesible Media Interface.
                      bin     -> CC data in CCExtractor's own binary format.
                      raw     -> CC data in McPoodle's Broadcast format.
                      dvdraw  -> CC data in McPoodle's DVD format.
                      mcc     -> CC data compressed using MacCaption Format.
                      txt     -> Transcript (no time codes, no roll-up
                                 captions, just the plain transcription.
                      ttxt    -> Timed Transcript (transcription with time
                                 info)
                      g608    -> Grid 608 format.
                      smptett -> SMPTE Timed Text (W3C TTML) format.
                      spupng  -> Set of .xml and .png files for use with
                                 dvdauthor's spumux.
                                 See "Notes on spupng output format"
                      null    -> Don't produce any file output
                      report  -> Prints to stdout information about captions
                                 in specified input. Don't produce any file
                                 output

       -srt, -dvdraw, -sami, -webvtt, -txt, -ttxt and -null can be used as shorts.

Options that affect how input files will be processed.
        -gt --goptime: Use GOP for timing instead of PTS. This only applies
                       to Program or Transport Streams with MPEG2 data and
                       overrides the default PTS timing.
                       GOP timing is always used for Elementary Streams.
    -nogt --nogoptime: Never use GOP timing (use PTS), even if ccextractor
                       detects GOP timing is the reasonable choice.
     -fp --fixpadding: Fix padding - some cards (or providers, or whatever)
                       seem to send 0000 as CC padding instead of 8080. If you
                       get bad timing, this might solve it.
               -90090: Use 90090 (instead of 90000) as MPEG clock frequency.
                       (reported to be needed at least by Panasonic DMR-ES15
                       DVD Recorder)
    -ve --videoedited: By default, ccextractor will process input files in
                       sequence as if they were all one large file (i.e.
                       split by a generic, non video-aware tool. If you
                       are processing video hat was split with a editing
                       tool, use -ve so ccextractor doesn't try to rebuild
                       the original timing.
   -s --stream [secs]: Consider the file as a continuous stream that is
                       growing as ccextractor processes it, so don't try
                       to figure out its size and don't terminate processing
                       when reaching the current end (i.e. wait for more
                       data to arrive). If the optional parameter secs is
                       present, it means the number of seconds without any
                       new data after which ccextractor should exit. Use
                       this parameter if you want to process a live stream
                       but not kill ccextractor externally.
                       Note: If -s is used then only one input file is
                       allowed.
  -poc  --usepicorder: Use the pic_order_cnt_lsb in AVC/H.264 data streams
                       to order the CC information.  The default way is to
                       use the PTS information.  Use this switch only when
                       needed.
                -myth: Force MythTV code branch.
              -nomyth: Disable MythTV code branch.
                       The MythTV branch is needed for analog captures where
                       the closed caption data is stored in the VBI, such as
                       those with bttv cards (Hauppage 250 for example). This
                       is detected automatically so you don't need to worry
                       about this unless autodetection doesn't work for you.
       -wtvconvertfix: This switch works around a bug in Windows 7's built in
                       software to convert *.wtv to *.dvr-ms. For analog NTSC
                       recordings the CC information is marked as digital
                       captions. Use this switch only when needed.
            -wtvmpeg2: Read the captions from the MPEG2 video stream rather
                       than the captions stream in WTV files
 -pn --program-number: In TS mode, specifically select a program to process.
                       Not needed if the TS only has one. If this parameter
                       is not specified and CCExtractor detects more than one
                       program in the input, it will list the programs found
                       and terminate without doing anything, unless
                       -autoprogram (see below) is used.
         -autoprogram: If there's more than one program in the stream, just use
                       the first one we find that contains a suitable stream.
        -multiprogram: Uses multiple programs from the same input stream.
             -datapid: Don't try to find out the stream for caption/teletext
                       data, just use this one instead.
      -datastreamtype: Instead of selecting the stream by its PID, select it
                       by its type (pick the stream that has this type in
                       the PMT)
          -streamtype: Assume the data is of this type, don't autodetect. This
                       parameter may be needed if -datapid or -datastreamtype
                       is used and CCExtractor cannot determine how to process
                       the stream. The value will usually be 2 (MPEG video) or
                       6 (MPEG private data).
    -haup --hauppauge: If the video was recorder using a Hauppauge card, it
                       might need special processing. This parameter will
                       force the special treatment.
         -mp4vidtrack: In MP4 files the closed caption data can be embedded in
                       the video track or in a dedicated CC track. If a
                       dedicated track is detected it will be processed instead
                       of the video track. If you need to force the video track
                       to be processed instead use this option.
       -noautotimeref: Some streams come with broadcast date information. When
                       such data is available, CCExtractor will set its time
                       reference to the received data. Use this parameter if
                       you prefer your own reference. Note: Current this only
                       affects Teletext in timed transcript with -datets.
           --noscte20: Ignore SCTE-20 data if present.
  --webvtt-create-css: Create a separate file for CSS instead of inline.
              -deblev: Enable debug so the calculated distance for each two
                       strings is displayed. The output includes both strings,
                       the calculated distance, the maximum allowed distance,
                       and whether the strings are ultimately considered  
                       equivalent or not, i.e. the calculated distance is 
                       less or equal than the max allowed..
-anvid --analyzevideo  Analyze the video stream even if it's not used for
                       subtitles. This allows to provide video information.
  --no-timestamp-map   Use this flag to disable the X-TIMESTAMP-MAP header for WebVTT
Levenshtein distance:

  When processing teletext files CCExtractor tries to correct typos by
  comparing consecutive lines. If line N+1 is almost identical to line N except
  for minor changes (plus next characters) then it assumes that line N that a
  typo that was corrected in N+1. This is currently implemented in teletext
  because it's where samples files that could benefit from this were available.
  You can adjust, or disable, the algorithm settings with the following
  parameters.

           -nolevdist: Don't attempt to correct typos with Levenshtein distance.
 -levdistmincnt value: Minimum distance we always allow regardless
                       of the length of the strings.Default 2. 
                       This means that if the calculated distance 
                       is 0,1 or 2, we consider the strings to be equivalent.
 -levdistmaxpct value: Maximum distance we allow, as a percentage of
                       the shortest string length. Default 10%.0
                       For example, consider a comparison of one string of 
	                    30 characters and one of 60 characters. We want to 
                       determine whether the first 30 characters of the longer
                       string are more or less the same as the shortest string,
	                    i.e. whether the longest string  is the shortest one
                       plus new characters and maybe some corrections. Since
                       the shortest string is 30 characters and  the default
                       percentage is 10%, we would allow a distance of up 
                       to 3 between the first 30 characters.

Options that affect what kind of output will be produced:
            -chapters: (Experimental) Produces a chapter file from MP4 files.
                       Note that this must only be used with MP4 files,
                       for other files it will simply generate subtitles file.
                 -bom: Append a BOM (Byte Order Mark) to output files.
                       Note that most text processing tools in linux will not
                       like BOM.
                       This is the default in Windows builds.
                       -nobom: Do not append a BOM (Byte Order Mark) to output
                       files. Note that this may break files when using
                       Windows. This is the default in non-Windows builds.
             -unicode: Encode subtitles in Unicode instead of Latin-1.
                -utf8: Encode subtitles in UTF-8 (no longer needed.
                       because UTF-8 is now the default).
              -latin1: Encode subtitles in Latin-1
  -nofc --nofontcolor: For .srt/.sami/.vtt, don't add font color tags.
  --nohtmlescape: For .srt/.sami/.vtt, don't covert html unsafe character
-nots --notypesetting: For .srt/.sami/.vtt, don't add typesetting tags.
                -trim: Trim lines.
   -dc --defaultcolor: Select a different default color (instead of
                       white). This causes all output in .srt/.smi/.vtt
                       files to have a font tag, which makes the files
                       larger. Add the color you want in RGB, such as
                       -dc #FF0000 for red.
    -sc --sentencecap: Sentence capitalization. Use if you hate
                       ALL CAPS in subtitles.
  --capfile -caf file: Add the contents of 'file' to the list of words
                       that must be capitalized. For example, if file
                       is a plain text file that contains

                       Tony
                       Alan

                       Whenever those words are found they will be written
                       exactly as they appear in the file.
                       Use one line per word. Lines starting with # are
                       considered comments and discarded.

                 --kf: Censors profane words from subtitles.
--profanity-file <file>: Add the contents of <file> to the list of words that.
                         must be censored. The content of <file>, follows the
                         same syntax as for the capitalization file
-sbs --splitbysentence: Split output text so each frame contains a complete
                       sentence. Timings are adjusted based on number of
                       characters
.          -unixts REF: For timed transcripts that have an absolute date
                       instead of a timestamp relative to the file start), use
                       this time reference (UNIX timestamp). 0 => Use current
                       system time.
                       ccextractor will automatically switch to transport
                       stream UTC timestamps when available.
              -datets: In transcripts, write time as YYYYMMDDHHMMss,ms.
               -sects: In transcripts, write time as ss,ms
                -UCLA: Transcripts are generated with a specific format
                       that is convenient for a specific project, feel
                       free to play with it but be aware that this format
                       is really live - don't rely on its output format
                       not changing between versions.
            -latrusmap Map Latin symbols to Cyrillic ones in special cases
                       of Russian Teletext files (issue #1086)
                 -xds: In timed transcripts, all XDS information will be saved
                       to the output file.
                  -lf: Use LF (UNIX) instead of CRLF (DOS, Windows) as line
                       terminator.
                  -df: For MCC Files, force dropframe frame count.
            -autodash: Based on position on screen, attempt to determine
                       the different speakers and a dash (-) when each
                       of them talks (.srt/.vtt only, -trim required).
          -xmltv mode: produce an XMLTV file containing the EPG data from
                       the source TS file. Mode: 1 = full output
                       2 = live output. 3 = both
 -xmltvliveinterval x: interval of x seconds between writing live mode xmltv output.
-xmltvoutputinterval x: interval of x seconds between writing full file xmltv output.
    -xmltvonlycurrent: Only print current events for xmltv output.
                 -sem: Create a .sem file for each output file that is open
                       and delete it on file close.
             -dvblang: For DVB subtitles, select which language's caption
                       stream will be processed. e.g. 'eng' for English.
                       If there are multiple languages, only this specified
                       language stream will be processed (default).
             -ocrlang: Manually select the name of the Tesseract .traineddata
                       file. Helpful if you want to OCR a caption stream of
                       one language with the data of another language.
                       e.g. '-dvblang chs -ocrlang chi_tra' will decode the
                       Chinese (Simplified) caption stream but perform OCR
                       using the Chinese (Traditional) trained data
                       This option is also helpful when the traineddata file
                       has non standard names that don't follow ISO specs
          -quant mode: How to quantize the bitmap before passing it to tesseract
                       for OCR'ing.
                       0: Don't quantize at all.
                       1: Use CCExtractor's internal function (default).
                       2: Reduce distinct color count in image for faster results.
                 -oem: Select the OEM mode for Tesseract.
                       Available modes :
                       0: OEM_TESSERACT_ONLY - the fastest mode.
                       1: OEM_LSTM_ONLY - use LSTM algorithm for recognition.
                       2: OEM_TESSERACT_LSTM_COMBINED - both algorithms.
                       Default value depends on the tesseract version linked :
                       Tesseract v3 : default mode is 0,
                       Tesseract v4 : default mode is 1.
             -mkvlang: For MKV subtitles, select which language's caption
                       stream will be processed. e.g. 'eng' for English.
                       Language codes can be either the 3 letters bibliographic
                       ISO-639-2 form (like "fre" for french) or a language
                       code followed by a dash and a country code for specialities
                       in languages (like "fre-ca" for Canadian French).
          -nospupngocr When processing DVB don't use the OCR to write the text as
                       comments in the XML file.
                -font: Specify the full path of the font that is to be used when
                       generating SPUPNG files. If not specified, you need to
                       have the default font installed (Helvetica for macOS, Calibri
                       for Windows, and Noto for other operating systems at their
)                       default location
)                -italics: Specify the full path of the italics font that is to be used when
                       generating SPUPNG files. If not specified, you need to
                       have the default font installed (Helvetica Oblique for macOS, Calibri Italic
                       for Windows, and NotoSans Italic for other operating systems at their
)                       default location
)
Options that affect how ccextractor reads and writes (buffering):
    -bi --bufferinput: Forces input buffering.
 -nobi -nobufferinput: Disables input buffering.
 -bs --buffersize val: Specify a size for reading, in bytes (suffix with K or
                       or M for kilobytes and megabytes). Default is 16M.
                 -koc: keep-output-close. If used then CCExtractor will close
                       the output file after writing each subtitle frame and
                       attempt to create it again when needed.
     -ff --forceflush: Flush the file buffer whenever content is written.

Options that affect the built-in 608 closed caption decoder:
                 -dru: Direct Roll-Up. When in roll-up mode, write character by
                       character instead of line by line. Note that this
                       produces (much) larger files.
     -noru --norollup: If you hate the repeated lines caused by the roll-up
                       emulation, you can have ccextractor write only one
                       line at a time, getting rid of these repeated lines.
     -ru1 / ru2 / ru3: roll-up captions can consist of 2, 3 or 4 visible
                       lines at any time (the number of lines is part of
                       the transmission). If having 3 or 4 lines annoys
                       you you can use -ru to force the decoder to always
                       use 1, 2 or 3 lines. Note that 1 line is not
                       a real mode rollup mode, so CCExtractor does what
                       it can.
                       In -ru1 the start timestamp is actually the timestamp
                       of the first character received which is possibly more
                       accurate.

Options that affect timing:
            -delay ms: For srt/sami/webvtt, add this number of milliseconds to
                       all times. For example, -delay 400 makes subtitles
                       appear 400ms late. You can also use negative numbers
                       to make subs appear early.
Notes on times: -startat and -endat times are used first, then -delay.
So if you use -srt -startat 3:00 -endat 5:00 -delay 120000, ccextractor will
generate a .srt file, with only data from 3:00 to 5:00 in the input file(s)
and then add that (huge) delay, which would make the final file start at
5:00 and end at 7:00.

Options that affect what segment of the input file(s) to process:
        -startat time: Only write caption information that starts after the
                       given time.
                       Time can be seconds, MM:SS or HH:MM:SS.
                       For example, -startat 3:00 means 'start writing from
                       minute 3.
          -endat time: Stop processing after the given time (same format as
                       -startat).
                       The -startat and -endat options are honored in all
                       output formats.  In all formats with timing information
                       the times are unchanged.
-scr --screenfuls num: Write 'num' screenfuls and terminate processing.

Options that affect which codec is to be used have to be searched in input
  If codec type is not selected then first elementary stream suitable for 
  subtitle is selected, please consider -teletext -noteletext override this
  option.
      -codec dvbsub    select the dvb subtitle from all elementary stream,
                        if stream of dvb subtitle type is not found then 
                        nothing is selected and no subtitle is generated
      -nocodec dvbsub   ignore dvb subtitle and follow default behaviour
      -codec teletext   select the teletext subtitle from elementary stream
      -nocodec teletext ignore teletext subtitle
  NOTE: option given in form -foo=bar ,-foo = bar and --foo=bar are invalid
        valid option are only in form -foo bar
        nocodec and codec parameter must not be same if found to be same 
        then parameter of nocodec is ignored, this flag should be passed 
        once, more then one are not supported yet and last parameter would 
        taken in consideration
Adding start and end credits:
  CCExtractor can _try_ to add a custom message (for credits for example) at
  the start and end of the file, looking for a window where there are no
  captions. If there is no such window, then no text will be added.
  The start window must be between the times given and must have enough time
  to display the message for at least the specified time.
        --startcreditstext txt: Write this text as start credits. If there are
                                several lines, separate them with the
                                characters \n, for example Line1\nLine 2.
  --startcreditsnotbefore time: Don't display the start credits before this
                                time (S, or MM:SS). Default: 0
   --startcreditsnotafter time: Don't display the start credits after this
                                time (S, or MM:SS). Default: 5:00
 --startcreditsforatleast time: Start credits need to be displayed for at least
                                this time (S, or MM:SS). Default: 2
  --startcreditsforatmost time: Start credits should be displayed for at most
                                this time (S, or MM:SS). Default: 5
          --endcreditstext txt: Write this text as end credits. If there are
                                several lines, separate them with the
                                characters \n, for example Line1\nLine 2.
   --endcreditsforatleast time: End credits need to be displayed for at least
                                this time (S, or MM:SS). Default: 2
    --endcreditsforatmost time: End credits should be displayed for at most
                                this time (S, or MM:SS). Default: 5

Options that affect debug data:
               -debug: Show lots of debugging output.
                 -608: Print debug traces from the EIA-608 decoder.
                       If you need to submit a bug report, please send
                       the output from this option.
                 -708: Print debug information from the (currently
                       in development) EIA-708 (DTV) decoder.
              -goppts: Enable lots of time stamp output.
            -xdsdebug: Enable XDS debug data (lots of it).
               -vides: Print debug info about the analysed elementary
                       video stream.
               -cbraw: Print debug trace with the raw 608/708 data with
                       time stamps.
              -nosync: Disable the syncing code.  Only useful for debugging
                       purposes.
             -fullbin: Disable the removal of trailing padding blocks
                       when exporting to bin format.  Only useful for
                       for debugging purposes.
          -parsedebug: Print debug info about the parsed container
                       file. (Only for TS/ASF files at the moment.)
            -parsePAT: Print Program Association Table dump.
            -parsePMT: Print Program Map Table dump.
              -dumpdef: Hex-dump defective TS packets.
 -investigate_packets: If no CC packets are detected based on the PMT, try
                       to find data in all packets by scanning.

Teletext related options:
          -tpage page: Use this page for subtitles (if this parameter
                       is not used, try to autodetect). In Spain the
                       page is always 888, may vary in other countries.
            -tverbose: Enable verbose mode in the teletext decoder.

            -teletext: Force teletext mode even if teletext is not detected.
                       If used, you should also pass -datapid to specify
                       the stream ID you want to process.
          -noteletext: Disable teletext processing. This might be needed
                       for video streams that have both teletext packets
                       and CEA-608/708 packets (if teletext is processed
                       then CEA-608/708 processing is disabled).

Transcript customizing options:
    -customtxt format: Use the passed format to customize the (Timed) Transcript
                       output. The format must be like this: 1100100 (7 digits).
                       These indicate whether the next things should be
                       displayed or not in the (timed) transcript. They
                       represent (in order): 
                           - Display start time
                           - Display end time
                           - Display caption mode
                           - Display caption channel
                           - Use a relative timestamp ( relative to the sample)
                           - Display XDS info
                           - Use colors
                       Examples:
                       0000101 is the default setting for transcripts
                       1110101 is the default for timed transcripts
                       1111001 is the default setting for -ucla
                       Make sure you use this parameter after others that might
                       affect these settings (-out, -ucla, -xds, -txt, 
                       -ttxt ...)

Communication with other programs and console output:
   --gui_mode_reports: Report progress and interesting events to stderr
                       in a easy to parse format. This is intended to be
                       used by other programs. See docs directory for.
                       details.
    --no_progress_bar: Suppress the output of the progress bar
               -quiet: Don't write any message.

Notes on the CEA-708 decoder: While it is starting to be useful, it's
a work in progress. A number of things don't work yet in the decoder
itself, and many of the auxiliary tools (case conversion to name one)
won't do anything yet. Feel free to submit samples that cause problems
and feature requests.

Notes on spupng output format:
One .xml file is created per output field. A set of .png files are created in
a directory with the same base name as the corresponding .xml file(s), but with
a .d extension. Each .png file will contain an image representing one caption
and named subNNNN.png, starting with sub0000.png.
For example, the command:
    ccextractor -out=spupng input.mpg
will create the files:
    input.xml
    input.d/sub0000.png
    input.d/sub0001.png
    ...
The command:
    ccextractor -out=spupng -o /tmp/output -12 input.mpg
will create the files:
    /tmp/output_1.xml
    /tmp/output_1.d/sub0000.png
    /tmp/output_1.d/sub0001.png
    ...
    /tmp/output_2.xml
    /tmp/output_2.d/sub0000.png
    /tmp/output_2.d/sub0001.png
    ...

Burned-in subtitle extraction:
         -hardsubx : Enable the burned-in subtitle extraction subsystem.

         NOTE: The following options will work only if -hardsubx is 
                specified before them:-

       -tickertext : Search for burned-in ticker text at the bottom of
                     the screen.

         -ocr_mode : Set the OCR mode to either frame-wise, word-wise
                     or letter wise.
                     e.g. -ocr_mode frame (default), -ocr_mode word, 
                     -ocr_mode letter

         -subcolor : Specify the color of the subtitles
                     Possible values are in the set 
                     {white,yellow,green,cyan,blue,magenta,red}.
                     Alternatively, a custom hue value between 1 and 360 
                     may also be specified.
                     e.g. -subcolor white or -subcolor 270 (for violet).
                     Refer to an HSV color chart for values.

 -min_sub_duration : Specify the minimum duration that a subtitle line 
                     must exist on the screen.
                     The value is specified in seconds.
                     A lower value gives better results, but takes more 
                     processing time.
                     The recommended value is 0.5 (default).
                     e.g. -min_sub_duration 1.0 (for a duration of 1 second)

   -detect_italics : Specify whether italics are to be detected from the 
                     OCR text.
                     Italic detection automatically enforces the OCR mode 
                     to be word-wise
      -conf_thresh : Specify the classifier confidence threshold between
                      1 and 100.
                     Try and use a threshold which works for you if you get 
                     a lot of garbage text.
                     e.g. -conf_thresh 50

 -whiteness_thresh : For white subtitles only, specify the luminance 
                     threshold between 1 and 100
                     This threshold is content dependent, and adjusting
                     values may give you better results
                     Recommended values are in the range 80 to 100.
                     The default value is 95

            An example command for burned-in subtitle extraction is as follows:
               ccextractor video.mp4 -hardsubx -subcolor white -detect_italics 
                   -whiteness_thresh 90 -conf_thresh 60


         --version : Display current CCExtractor version and detailed information.
Error: (This help screen was shown because there were no input files)

Issues? Open a ticket here
https://github.com/CCExtractor/ccextractor/issues

```
