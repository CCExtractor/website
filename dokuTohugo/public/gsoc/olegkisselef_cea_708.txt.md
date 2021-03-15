#### CEA-708

CEA-708 is the latest standart for ATSC DTV closed captioning. DTVCC
(DTV Closed Captions) decoding and output was improved by Oleg during
this summer. Along with major refactoring, more control commands support
was added. Now ccextractor can handle 16 bit encoded captions in DTVCC
streams, so lots of non-latin languages symbols could be extracted.
Output to popular subtitles formats such as SAMI, Transcript and Timed
transcript was added. Colored and styled captions will be extracted with
information about it (where applies). Rolling up DTVCC support was also
implemented.

### Technical Details

Work done is based on CEA-708-D specification.

Re-encoding characters is done using
[iconv](https://en.wikipedia.org/wiki/Iconv). To make it work
on Windows,
[win-iconv](https://github.com/win-iconv/win-iconv)
implementation is used.

To check what encodings/charsets are supported by iconv, visit [libiconv
website](http://www.gnu.org/software/libiconv)

### How to use

There is a \*\*-svc\*\* (or \*\*\--service\*\*) argument, that enables
processing of DTVCC. Arguments\' value is a comma delimited numbers of
streams, e.g. \"1,3,62\". If it is known that one of the services
contains 16-bit characters, then you can pass charset or encoding right
after service number, e.g. \"1\[EUC-KR\],3\[EUC-CN\],62\".

If you don\'t know what services source video file contains, or you
would like to extract all existing, you can pass \"all\" as an
arguments\' value. To specify charset or encoding pass
\"all\[CHARSET\]\".

So, for example, to extract DTVCC from [Korean
sample](ftp://37.59.63.18:64900/Korean708D/mbc.ts), run:

`$ ./ccextractor mbc.ts -svc 1[EUC-KR]`

### How to evaluate

Try to extract captions from files located in Korean708D, Cristiano708
and Cristiano708\_2 directories on ccextractors\' ftp server. Korean
samples store captions in EUC-KR encoding, so specify charset in
services argument: -svc 1\[EUC-KR\].
