# GSoC'16 Project Documentation

##### Commits

All my work done during GSoC commited to the mainstream master branch
can be found
[here](https://github.com/CCExtractor/ccextractor/commits/master?author=bigharshrag).

##### Technical Documentation

The technical documentation on how the code is structured as well as
installation is available [
here](http://www.ccextractor.org/doku.php?id=public/gsoc/dvd_subtitles_technical_documentation_gsoc_16).

##### About the Project

DVD Subtitle Extraction
-----------------------

My project was to add support for DVD subtitles. CCExtractor had support
for DVD Closed Caption however new DVDs contain DVD subtitles instead of
the older DVD Closed Captions. I have added support such that supplying
a VOB file normally to CCExtractor works to extract the DVD Subtitles.
DVD subtitles extraction works by filtering out the subtitle frames from
the video stream and obtaining the RLE encoded bitmap based subtitles,
which are then provided to Tesseract for OCR recognition.

A part of my project was to support CEA-708 subtitles. It is a closed
captioning standard used in the US and Canada. CCExtractor has support
for CEA-708 but it is not complete.

##### Other Work

In addition to the project, I worked on bug fixes and other features.
All my merged pull requests can be found
[here](https://github.com/CCExtractor/ccextractor/pulls?q=is%3Apr+author%3Abigharshrag+is%3Aclosed).

Initially, Vob files were new to me and to understand their data
arrangement I wrote a program which is in another
[repository](https://github.com/bigharshrag/DVDSub).

##### Known Issues and Future Work

I hope to continue to add improvements to DVD subtitles extraction as
well as CCExtractor.

` * There is no support for IFO files at the moment. IFO files contain information regarding the data in the DVD. I hope to add support for IFO files pretty soon.`\
` * Episode selection is not supported. To be added with IFO files.`
