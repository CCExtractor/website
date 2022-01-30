---
title: "Port and/or rewrite HardsubX to Rust"
---

HardsubX is a burned-in subtitle extractation subsystem for CCExtractor. It uses FFmpeg to parse the video frames, followed by an OCR recognition using Tesseract to detect the burned in subtiltes.

Your job is to port and/or rewrite the HardsubX subsystem to Rust, while also fixing existing bugs, improving the documentation and code quality.
This is a high value task and we'd love to have it done, but in order to qualify you need to fix some of the existing bugs.

**Resources**

- [Abhinav's Blog on the original implementation of HardsubX](https://abhinavshukla95.wordpress.com/2016/08/18/google-summer-of-code-work-product-submission/)
- [Extract hard-coded subtitles from video streams](https://ccextractor.org/public/gsoc/2016/abhinav/)
- [HardsubX docs](https://github.com/CCExtractor/ccextractor/blob/master/docs/HARDSUBX.txt)

**Related GitHub Issues:-** 

https://github.com/CCExtractor/ccextractor/issues?q=is%3Aopen+is%3Aissue+label%3AHardsubX

**Other Qualification tasks**

Take a look at [this page](/public/gsoc/takehome).