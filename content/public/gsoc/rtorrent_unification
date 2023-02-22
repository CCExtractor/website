---
title: "Unify Flood and ruTorrent rtorrent versions"
---

 **Introduction**

rTorrent is the most popular BitTorrent client. Its primary author, Jari Sundell, hasn't maintained it for some time [official version](https://github.com/rakshasa/rtorrent) so the creators of the most important frontends decided to fork it and add their own improvements.

There's two forks that are really important:

- One is from Novik, who is the creator of ruTorrent, the most used front-end. You can find his fork [here](https://github.com/Novik/rtorrent)
- One is from Jesec, who is the creator of Flood - a modern ruTorrent placement with a strong focus on security. You can find it [here](https://github.com/jesec/rtorrent)

Unfortunately, these forks add different features, some of them conflicting. This is bad for the BitTorrent ecosystem in general, and also bad for the users since they need to have a specific version of the backend to run their preferred frontend.

Let's fix this.

 **Your job**

Your job is to create a rTorrent version that works with both frontends. You can start by taking one of them and integrating the changes from the other (up to you to choose the strategy).

This might sound simple, but you will find that not so much. For example, jesec disables spawning processes from rtorrent iself, which ruTorrent does all the time. This will probably need to be a switch.

jesec also introduces a sane build system based on Docker that provides a predictable binary with all the libraries included. This is something that we absolutely want to keep. 

Other improvements from jesec include performance optimizations. You will be able to find those in its commits.

novik's flavor on the other hand includes black and white list of commands that are allowed to run, somehow reducing the risk of spawning processes from rtorrent (which jesec solves by just disabling that option completely).

**We will provide a server for you to work and test in.**
