###### rutorrent mobile interface (II)

 **Introduction\*\*\\\\

rutorrent is the most popular web interface for rtorrent, which is
possibly the most used BitTorrent client in linux. It is mostly a web
application, but it has its own backend that connects to rtorrent. You
could connect to rtorrent directly as well, but by doing that you would
be missing lots of features that come with rutorrent, for example RSS
support.

Yes, there are two things with almost the same name. To summarize:

rtorrent =\> The BitTorrent client, a console-based tool that also has
an API to interact with it.\\\\ rutorrent =\> A web interface for
rtorrent that uses that API. It also does other things, for example, it
can download torrents from an RSS feed. You configure RSS feeds in
rutorrent\'s web interface, but there\'s also a backend service (written
in PHP) that is part of rutorrent to do the actual download.

Last year we started this project, and it\'s gone quite well, with the
userbase growing and a number of contributions being made by other
developers.

 **Your job\*\*\\\\

Your job is add a number of features to this project.

`1) View Models: Generate a state model which holds the current state of the torrent lists even when the internet connection is not available. Currently, the torrent list vanishes as soon as internet connection is disconnected, with this state model, the user experience will improve.\\`

2\) Automatic Tests: Write some unit tests for major classes and also
widget testing for some components.\\\\ 3) Media Player: Currently, VLC
media player plugin is a heavy integration and also it lacks many of the
basic media player functionalities. The aim would be to find an
alternative way to stream videos such that the app size gets reduced or
enhance the functionalities of it.\\\\ 4) Production-type environment:
The aim would be to create separate branches for master and dev and to
regularly merge dev to master to create a new release. Furthermore, this
can be automatic using CI/C pipeline integration for the project.\\\\ 5)
Improve Documentation: Document the basic structure and architecture
used in the app, maybe use Wikis, so that the new contributors find easy
to understand the setup and code.

 **Notes\*\*\\\\

In order to understand what to do you need to actually install rtorrent
and rutorrent and play with them.\\\\

You don\'t need to have previous experience (really, not important for
this - it\'s all about Flutter), but you won\'t be able to come up with
a good proposal if you don\'t know how things work.

Also, if you are unable to run rtorrent and rutorrent on your system,
please use [this
docker](https://hub.docker.com/r/crazymax/rtorrent-rutorrent)
image.

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public:gsoc:takehome).
