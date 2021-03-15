###### GSOC 2016 Documentation

##### Projects

` - Subtitle Extractor`

##### Details

All the technical details are commented in the codes and the
documentation is available in the Readme\'s of their directories. The
variables, classes and other components of the code are named properly
in Camel Case for easier understanding of the code. \\\\ \\\\

 **Repositories:\*\*

` * `[`https://github.com/abhishek-vinjamoori/SubtitleExtractor`](https://github.com/abhishek-vinjamoori/SubtitleExtractor)` - Subtitle Extractor`

I am the only contributor to this repository. Started it from scratch.

##### How to use?

The usage is listed in the README file of the GitHub repository and also
in the [ USER DOCUMENTATION WIKI
PAGE](public:gsoc:2016:abishek:subtitle_downloader)

##### Technical Documentation

The technical documentation about the code architecture and how to add
support for new services has been written in the [ Technical
Documentation
Wiki](http://www.ccextractor.org/doku.php?id=public:gsoc:subtitle_extractor_technical_docs)

##### About the Project

The project deals with downloading of subtitles from popular online TV
Services like Netflix, BBC,Hulu. The project aims to perform this task
without the need for the user to interact with the browser. The process
is automated completely. The user just needs to input the URL of the
video and the application will download the subtitles.\\\\ For services
like YouTube, CrunchyRoll which have subtitles in multiple languages,
the user gets an option to choose the preferred language. \\\\ For
Netflix, Amazon the user needs to have a valid login and subscription to
the videos, only then the subtitles will be downloaded. \\\\

The whole application was written from scratch. It was coded in Python 3
and it uses a few external libraries like BeautifulSoup, selenium for
Python.

The commits to this project repository can be found in the link - \\\\

[ Subtitle Extractor
Commits](https://github.com/abhishek-vinjamoori/SubtitleExtractor/commits/master)

### Future Work

In the future support for new services like ComedyCentral, Channel5 will
be added. As the application depends on the individual services
websites, the repository will be checked regularly for errors.
Accordingly the bugs would be tackled. I also plan upon adding features
like -

` *Batch Downloading of Subtitles. (Currently on Amazon supports this feature)`\
` *Choice of episode selection.`\
` *Preference for file naming.`

##### Other work

Besides the work mentioned above, also contributed a few patches for
bugs and features for CCExtractor:

` *`[`https://github.com/CCExtractor/ccextractor/pull/387`](https://github.com/CCExtractor/ccextractor/pull/387)` \\`\
` *`[`https://github.com/CCExtractor/ccextractor/pull/379`](https://github.com/CCExtractor/ccextractor/pull/379)` \\`\
` *`[`https://github.com/CCExtractor/ccextractor/pull/367`](https://github.com/CCExtractor/ccextractor/pull/367)` \\`\
` *`[`https://github.com/CCExtractor/ccextractor/pull/351`](https://github.com/CCExtractor/ccextractor/pull/351)` \\`\
` *`[`https://github.com/CCExtractor/ccextractor/pull/329`](https://github.com/CCExtractor/ccextractor/pull/329)` \\`

The detailed list of commits can be found here on this page - \\\\ [ My
commits to the main
repository](https://github.com/abhishek-vinjamoori/ccextractor/commits/master?author=abhishek-vinjamoori)
