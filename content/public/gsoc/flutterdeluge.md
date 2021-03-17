---
title: "Write an flutter interface for Deluge"
---

[Deluge](https://deluge-torrent.org/) is a popular BitTorrent
client. It's popular because it's quite efficient and performs really
well compared to alternatives, but its web interface is terrible and the
desktop UI is not great.

However it does have a good plugin system and writing proper
alternatives with Flutter is possible and not painful, so let's go for
it.

The goal is to write a flutter-based interface (web and mobile).

Start by installing deluge and its current web UI so get a feeling of
how it looks like, and come up with a good replacement UI.

Read the documentation to find out which part of Deluge don't yet have
a UI counterpart at all.

Take a look at our rutorrent flutter interface. It would be great it the
deluge interface was a part of it (allow selecting the client) rather a
completely separate program.
