###### DVD Subtitles Technical Documentation

#### Overview

This project was done as a part of GSoC 2016. DVD subtitles extraction
works by filtering out the subtitle frames from the video stream and
obtaining the RLE encoded bitmap based subtitles, which are then
provided to Tesseract for OCR recognition.

#### Dependencies

` * Tesseract (OCR library by Google)`\
` * Leptonica (C Image processing library)`

The instructions for \*\*compilation\*\* along with the OCR can be found
in the CCExtractor docs at
[docs/OCR.txt](https://github.com/CCExtractor/ccextractor/blob/master/docs/OCR.txt).
General usage instructions can be found in the help screen of
CCExtractor.

#### Code Structure

The DVD subtitle decoder is contained in the *dvd\_subtitle\_decoder.c*
file and houses all required functions. The subtitles frames are
selected from rest of the video and audio frames in *general\_loop.c*
and the *process\_spu()* function receives only the subtitle packet in
the buffer.

The structure *DVD\_Ctx* has the context for the DVD subtitles while
*ctrl\_seq* has data of the control packet. The function
*process\_spu()* checks for and creates a usable packet as some data
might be spread over multiple packets.

Now we need the data in the control sequence which is handled by
*decode\_packet()*. Data from the control sequence including start and
stop time, size of the subtitle, color, alpha and address of bitmap are
extracted and stored in *ctrl\_seq*.

Now we need to obtain the bitmap (via *get\_bitmap()*). The bitmaps
however are Run-Length Encoded (RLE) and are interlaced such that
alternate lines follow each other. This is handled by providing first
one half of the bitmap, followed by the other to *rle\_decode* to
account for the interlacing as well. At the end we get a clean bitmap
which is then sent to the OCR invoked in *write\_dvd\_sub()*.
