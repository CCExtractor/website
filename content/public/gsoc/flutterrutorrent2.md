---
title: "rutorrent mobile interface (II)"
---

 **Introduction**

rutorrent is the most popular web interface for rtorrent, which is
possibly the most used BitTorrent client in linux. It is mostly a web
application, but it has its own backend that connects to rtorrent. You
could connect to rtorrent directly as well, but by doing that you would
be missing lots of features that come with rutorrent, for example RSS
support.

Yes, there are two things with almost the same name. To summarize:

rtorrent => The BitTorrent client, a console-based tool that also has
an API to interact with it. rutorrent => A web interface for
rtorrent that uses that API. It also does other things, for example, it
can download torrents from an RSS feed. You configure RSS feeds in
rutorrent's web interface, but there's also a backend service (written
in PHP) that is part of rutorrent to do the actual download.

Last year we started this project, and it's gone quite well, with the
userbase growing and a number of contributions being made by other
developers.

 **Your job**

Your job is to write your proposal on any of the following:

* Improve current project
	1) Stacked architecture: Stacked architecture works great with Provider so we want to migrate the app to the stacked architecture.
	2) Organized Code/File Structure: According to the stacked architecture create services, views and view models for better organization.
	3) Production-type environment: The aim would be to create separate branches for master and dev and to regularly merge dev to master to create a new release. Furthermore, this can be automatic using CI/CD pipeline integration for the project.
	4) Improve Documentation: Document the basic structure and architecture used in the app, maybe use Wikis, so that the new contributors find easy to understand the setup and code.
	5) Suggest improvements or enhancements required apart from the above mentioned ones.

* Implement new features to the project
	1) Automatic Tests: Write some unit tests for major classes and also widget testing for some components.
	2) Media Player: Currently, VLC media player plugin is being used for streaming media files. But it lacks many of the features which a basic media player provides. So, the aim would be to add new features to it like fast forward, adding subtitles, changing volume and brightness etc.
	3) Autodl-IRSSI notifications: rutorrent has good IRSSI support. We want the same notifications that appear on IRSSI's tab in rutorrent to be available on our mobile app.
	4) IOS Release: Work on the ios release for rutorrent-mobile app, which will involve thorough testing on the ios device. Then signing the app and making a github release for the same.
	5) Suggest new features or any other plugin implementations of the web interface which are required on the mobile app.

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
