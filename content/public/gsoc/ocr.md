\~\~META: title = Google Summer of Code 2018 - Complete our OCR
subsystem \~\~

# Complete our OCR subsystem

### Useful skills/interests: Image processing, Text Localization and Binarization, Tesseract API

Subtitles come in all shapes and colors. Some are text based (such as
American closed-captions, as specified in CEA-608 and CEA-708, or the
old European teletext). Others are bitmap based such as the European
DVB. When subtitles use bitmaps they are a lot more flexible, but also a
lot harder to transcribe.

For the Latin languages in DVB what we have works quite well. Note that
while DVB is bitmap based, as least those bitmaps are separate from the
main image, so you only need to OCR the bitmap to get the text.

However, there's variants and cases that make things a lot more harder
(and interesting):

\- Burned-in subtitles, in which they overlay the actual TV image. -
Non-latin languages, such as Chinese. - Moving subtitles, such as
the usual tickers on the screen that move from to side. - Subtitles
with different colors, for example to distinguish between different
speakers.

Believe it or not some of these cases are also supported already in
CCExtractor, at least for some "good" conditions. But the really hard
ones, are still a job in progress.

The heavy lifting (the OCR itself) is done by **tesseract**. But
selecting the area to process, prefilter it so tesseract gets an input
it likes and so on, it's done by our own code.

We need someone that likes challenges to make the whole thing work.

We will provide all the samples and access to a high speed server that
has them so the student can work on it (optional) if a fast internet
connection is not available to them.

\_\_**Related GitHub Issues**\_\_ [Extract cyrillic tickertape
text in Russian from
NTV](https://github.com/CCExtractor/ccextractor/issues/923)
[Extract subtitles in a Chinese
newscast](https://github.com/CCExtractor/ccextractor/issues/918)
[GUI, Burned-in Subtitle Extraction not
working](https://github.com/CCExtractor/ccextractor/issues/806)
[jumps based on uninitialised
values](https://github.com/CCExtractor/ccextractor/issues/662)
[Process closed captions and burned-in subtitles in one
pass](https://github.com/CCExtractor/ccextractor/issues/726)
[DVB subtitles from
China](https://github.com/CCExtractor/ccextractor/issues/224)
[Corrupt or empty
subtitles](https://github.com/CCExtractor/ccextractor/issues/243)
[Terrible OCR results with Channel 5
(UK)](https://github.com/CCExtractor/ccextractor/issues/929)

\_\_**Mentor**\_\_ Abhinav Shukla (\@abhinav95 on slack), which
is the former Summer of Code student that worked on it last year and
made an incredible job.

 **Qualification tasks**

[Terrible OCR results with Channel 5
(UK)](https://github.com/CCExtractor/ccextractor/issues/929)
This task is ideal to get started, because you only need to deal with
one function in one file:
[quantize\_map](https://github.com/CCExtractor/ccextractor/blob/930ca716ca0bdae629ddd170abbcc2ad75472422/src/lib_ccx/ocr.c)()
in src/lib\_ccx/ocr.c

In addition to the samples that we already have, we would also like the
creation of a dataset of a few hardsubbed (videos with burned-in
subtitles) videos with the accurate timed transcripts so that we can
evaluate the performance of our code on a wide variety of these real
world samples. For the qualification task, this does not have to be
huge. A good representative set will do fine.

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome) for more
issues.
