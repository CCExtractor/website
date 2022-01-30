---
title: "Rewrite the OCR subsystem in Rust."
---

This is NOT about rewriting the OCR library (tesseract) of course, but
rather, the use with do of it.

Some subtitles (for example, DVB which is an European format) uses
bitmaps rather than text to show subtitles. This is great in the sense
that each TV channel can define its own font, style, use special
characters and so on. But of course, it makes it impossible to directly
generate a .srt file.

To solve this problem, we take the bitmap and pass it through an OCR to
make the conversion.

This process has a bit of proprocessing to help the OCR, which has lots
of moving bits around. There's a number of places in which wild-west
memory management happens. You know where this is going...

Your job is to port and/or rewrite the OCR subsystem to Rust, while also 
fixing existing bugs, improving the documentation and code quality. 
This is a high value task and we'd love to have it done, but in order to 
qualify you need to fix some of the existing bugs.

**Related GitHub Issues:-** 

[OCR Github Issues](https://github.com/CCExtractor/ccextractor/issues?q=is%3Aopen+is%3Aissue+label%3AOCR+)

 **Qualification tasks**

[Terrible OCR results with Channel 5
(UK)](https://github.com/CCExtractor/ccextractor/issues/929)

This task is ideal to get started, because you only need to deal with
one function in one file:
[quantize\_map](https://github.com/CCExtractor/ccextractor/blob/master/src/lib_ccx/ocr.c)()
in src/lib\_ccx/ocr.c

**Other Qualification tasks**

Take a look at [this page](/public/gsoc/takehome).
