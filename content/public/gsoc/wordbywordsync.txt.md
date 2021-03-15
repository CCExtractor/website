\~\~META: title = Google Summer of Code 2017 - Do word by word
subtitle-audio sync \~\~

 **Do word by word subtitle-audio sync\*\*

The usual subtitles files, such as .srt, do a line by line sync -
meaning the subtitles appear when the person starts talking, says a few
words, then the line disappears and a new one appears, etc.

1 00:02:17,440 \--\> 00:02:20,375\\\\ Senator, we\'re making\\\\ our
final approach into Coruscant.\\\\

In this .srt example, at minute 2, second 17 those two lines of text
appear and then they disappear at 2:20.

The task is to tag each individual word as is being spoken. This implies
audio analysis. While in principle it doesn\'t seem terrible hard (since
you just need to distinguish between individual words for which you at
least have an ordered list) keep in mind that some times subtitles
don\'t match audio 100%. For those words that do match, you need to
provide a perfect audio-subtitle sync. For those words in the subtitle
files that don\'t appear in the audio (this is a corner, yet possible,
case) add some indicator. Finally for those words in the audio that
don\'t appear in the subtitles, add a different indicator.

Focus on the challenging parts of the project, which is the sync itself.
You can assume that the subtitle format is always .srt and don\'t deal
with additional formats, since conversion tools exists. Similarly, you
can assume that the audio is a .wav file and forget about dealing with
video formats. FFmpeg can deliver a raw wav from almost any stream which
is more than enough.

The solution needs to work in real time, meaning that it must be
possible to pipe the subtitles and audio data into your program and get
the word-by-word sync\'ed version has it happens. So things like double
pass are out of the question.

As a suggestion, take a look at
[this](https://github.com/RedHenLab/gentle/commits/separate_punctuation).
You don\'t have to use it (you can if you want), but it\'s worth
checking out for ideas and concepts.
