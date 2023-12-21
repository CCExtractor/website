---
title: "CCExtractor downloads"
---

You can find the latest releases of CCExtractor here: [GitHub releases page](https://github.com/CCExtractor/ccextractor/releases)

Release artifacts available are:
- Full source code
- Minimal source code (.git and windows directories excluded)
- MSI installer for Windows
- Portable Windows version (zipped)

The windows artifacts include the Flutter GUI, if you use another platform you can look [here](/public/general/flutter_gui)

**Windows XP**

The last version that is guaranteed to work on Windows XP is 0.89. You can download the compiled (portable) program with the (old) GUI on the [0.89 GitHub release page](https://github.com/CCExtractor/ccextractor/releases/tag/v0.89)

 **Mac**

[Homebrew package](https://github.com/Homebrew/homebrew-core/blob/master/Formula/c/ccextractor.rb)
(3rd party, not maintained by the CCExtractor team)

**Package managers**

As far as we know, CCExtractor is available on the next package managers (it might not be the most recent version though):
- [AUR GUI](https://aur.archlinux.org/packages/ccextractor-gui-bin/), [AUR CLI](https://aur.archlinux.org/packages/ccextractor/)
- [Debian](https://packages.debian.org/bullseye/ccextractor)
- [others](https://pkgs.org/download/ccextractor)

 **Additional software written by the team**

[ User Documentation for Subtitle Downloader ](http://www.ccextractor.org/doku.php?id=public/gsoc/repository_documentation)

[ User Documentation for Activity Extractor ](http://www.ccextractor.org/doku.php?id=public/codein/activity_extractor_user_docs)

[CCAligner - Word by Word Audio Subtitle Synchronisation Tool and API](/public/gsoc/2017/saurabh)

 **Dependencies**

[Visual C++ Redistributable Packages for Visual Studio 2013](https://www.microsoft.com/en-us/download/details.aspx?id=40784)
(this might be needed to run CCExtractor 0.70 and above in XP).

[Dependencies for the full CCExtractor version (with FFmpeg, OCR, etc)](https://sourceforge.net/projects/ccextractor/files/ccextractor/0.85-windows.dependencies/CCExtractorDLLs-32bits.zip/download)
(they are included in the distribution packages but we have them
separately for convenience).
