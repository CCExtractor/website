 **Rewrite the OCR subsystem in Rust.**

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
memory management happens. You know where this is going\...
