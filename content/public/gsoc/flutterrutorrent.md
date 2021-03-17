# rutorrent mobile interface

 **Introduction**

rutorrent is the most popular web interface for rtorrent, which is
possibly the most used BitTorrent client in linux. It is mostly a web
application, but it has its own backend that connects to rtorrent. You
could connect to rtorrent directly as well, but by doing that you would
be missing lots of features that come with rutorrent, for example RSS
support.

Yes, there are two things with almost the same name. To summarize:

rtorrent =\> The BitTorrent client, a console-based tool that also has
an API to interact with it. rutorrent =\> A web interface for
rtorrent that uses that API. It also does other things, for example, it
can download torrents from an RSS feed. You configure RSS feeds in
rutorrent's web interface, but there's also a backend service (written
in PHP) that is part of rutorrent to do the actual download.

 **Your job**

The job is to write a Flutter based web interface that uses rutorrent's
backend service to provide a native interface.

The basic things (for example, torrent listing) are easy to do, but
rutorrent is extensible (it has good plugin support) and your tool needs
to support that, too.

The job is to write a native application that feels written for mobile.
It's not about cloning rutorrent's interface. So yes there needs to be
a torrent list but the columns may be different (definitely less),
colors, sorting, how you interact with the tool and so on.

rtorrent, by the way, runs in a server, and rutorrent is the web
interface that lets you interact with rtorrent. We don't want to add
BitTorrent capability to mobile or anything like that. This is a 100%
frontend job, using pre-existing work in rutorrent to control rtorrent
from the phone.

 **Notes**

In order to understand what to do you need to actually install rtorrent
and rutorrent and play with them.

You don't need to have previous experience (really, not important for
this - it's all about Flutter), but you won't be able to come up with
a good proposal if you don't know how things work.

Also, if you are unable to run rtorrent and rutorrent on your system,
please use [this
docker](https://hub.docker.com/r/crazymax/rtorrent-rutorrent)
image.

 **Qualification tasks**

Take a look at [this
page](/public/gsoc/takehome).
