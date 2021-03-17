 **Replace CCExtractor's GUI with a modern, Flutter based one.**

We have a [very old
GUI](https://github.com/CCExtractor/CCExtractorWindowsGUI),
written in .NET no less, a very long time ago. When it was written,
CCExtractor was quite simple, and all the options fit in a 1024x768
single page.

Now we have a large number of tabs that don't look good, the UI won't
even adjust to screen size\... well, it's rather bad :-)

Since then, there's been a few attempts to come up with something
better (we have a simple UI integrated in CCExtractor itself, a Qt
version, and more), but nothing has really reached the point of being
better than the old one.

We think that with Flutter, it's now possible to write a UI that looks
good and is portable. We are targeting Windows, Linux, and OSX.

Things you have to do:

\- Come up with a good design. This means not copying the old one - this
is not a port, it's a new UI! - Your program will just run
CCExtractor. CCExtractor has an argument to "\--gui-reports" that will
output progress in an easy to parse format. So you don't need to figure
out esoteric ways of integration. Your work is 100% flutter. - Focus
on desktop. Mobile is not important, we don't expect anyone to run
CCExtractor on their phones.

We'll help you test on all platforms (assuming you only have access to
linux, for example).

The goal is to completely replace the old GUI, and archive the previous
attempts. So this is an important project to us!
