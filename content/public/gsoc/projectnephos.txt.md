\~\~META: title = Google Summer of Code 2018 - Project Nephos: Cloud
based storage for a massive collection of TV recordings \~\~

 **Project Nephos: Cloud based storage for a massive collection of
        TV recordings\*\*

There\'s a lot of documentation on our close friend organization Red Hen
(just Google them, or check out their ideas page), but for our purposes
these are the basic ideas:

\- Red Hen is an informal (as in they\'re tied by collaboration, not
contracts) group of entities, most of them large universities, from many
places around the world that share resources. These resources are
hardware, software, media, knowledge, source code, people, and access to
people.\\\\ - Everything is open, there\'s no NDAs in place, or
proprietary software or anything like that. The one thing is that
limited (to researchers and other people that can benefit from it) is
access to the media repository due to concerns on copyright.\\\\ - One
of the things some universities do (and most want to do) is record as
many local (to them) TV channels as they can and archive them. They are
used for a long list of research and analysis topics, from language
trends to body language analysis, to catch politics on lies and almost
anything you can think of.\\\\ - They use CCExtractor to generate
transcripts of the media files. This is the original link between Red
Hen and us, but since we met we have been collaborating on other
overlapping interests.\\\\

As mentioned, some universities record a large number of TV channels
available locally to them, so UCLA records what they can get in Los
Angeles, UNav what they can get in Navarra, Spain, and so on. Currently
storage is either handled in-house, or it is uploaded to UCLA, where it
is stored. As pointed out, this is all done on good will, not contract,
but this is a bit besides the point.

We\'ve reached a point in which storing these files locally is making
less and less sense. Google offers unlimited storage for organizations
that use Google Apps (their professional cloud suite, with GMail, Drive,
and so on) which some universities such as UNav have.

The project during this summer is migrate to cloud storage, which will
require creating a number of tools, modifying others, figuring out the
best way to handle access permissions to the files in the cloud, general
organization and so on.

Some of the must-have features are easy, for example when a recording is
complete (and exists as a local file) it needs to be moved to Cloud.

Other things will need more work. Specifically:

\- Indexing. This is not a \"index by date\" or other trivial thing, we
index by content.\\\\ - Sharing, which needs to be as flexible as
possible. In general everything needs to be automatic. For example
config such as \"share all Spanish TV content with these American
universities\", etc.\\\\ - Duplication, which means that content shared
with us from another instance of Nephos can be copied to our own
instance of Cloud storage.\\\\ - Pre and post processes, for example to
convert the original format to smaller versions, or to extract
subtitles.\\\\

[Current source
code](https://github.com/CCExtractor/ProjectNephos).
