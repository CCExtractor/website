---
title: "Standardize BitTorrent over TLS (SSL)"
---

 **Introduction**

BitTorrent protocol is not secure. Its RC4 encryption mechanism (MSE/PE)
is outdated and weak. It provides no anonymity. It is (at best) an
obfuscation, by current standards. Even for obfuscation, it is ineffective.
As early as 2010, there are efficient, reliable and highly accurate methods
to unmask and classify encrypted/obfuscated BitTorrent traffic [[1]][[2]].
Nowadays, even an entry-level gateway has the capability [[3]] to detect and
block BitTorrent traffic at little to no risk. The BitTorrent community
would benefit from a new standard encryption mechanism that allows strong
encryption, forward secrecy and resistance to censorship. 

TLS (SSL) is the ideal solution. It is well-established, secure, extensible,
tested and optimized. There is no need to reinvent the wheel this time. TLS
also gives the BitTorrent protocol the strongest resistance to censorship.
HTTPS and, by extension, almost all websites/apps/games, uses TLS for
transport security. Given TLS's battle-tested secrecy, BitTorrent over TLS
traffic can not be distinguished from other traffic, and, as a result, the
risk will be immense for anyone who wants to block it. Modern devices also
have special optimizations for TLS and its cryptography algorithms, so the
performance penalty of strong encryption is no longer significant. 

libtorrent-rasterbar (used by qBittorrent, Deluge, etc.) has support for
some form of BitTorrent over SSL from 2012 [[4]]. However, the mechanisms
are never standardized and the current design has critical flaws that
severely limit its usefulness. In the current implementation, a tracker
must be present to sign/approve the peers, and there must be a certificate
inside the .torrent file. This basically limits the feature to
corporation/commercial uses only. 

 **Your job**

The goal here is to design an alternative mechanism that allows all existing
torrents to enjoy the benefits of TLS. For instance, there might be three
security levels: Basic (only use existing data like infohash for TLS handshake,
compatible with all existing torrents without modification), Strict (require
match of a new certificate/data/passphrase inside .torrent file, defeat infohash
leak) and Full Strict (require a secure tracker to sign off each peer, similar
to the current implementation). However, ultimately, it is up to you to decide
the specifics.

You are expected to write a BitTorrent Extension Proposal (BEP), and, with
the help of your mentor, submit it to [bittorrent.org](http://bittorrent.org), which
is the first step towards standardization.

You should also implement a proof of concept, which is evolved along with
the standard. This allows you to avoid unworkable/unrealistic parts. It
also makes it easier to convince the community to accept your standard.

It is preferred to implement the PoC on top of an established BitTorrent
implementation (libtorrent-rasterbar, libtorrent-rakshasa or libtransmission).
They are the most widely-used open source BitTorrent implementations, and
their developers and users have significant stakes in the community.

Alternatively, if you are not a fan of C/C++, you may choose one of the
emerging BitTorrent implementations, including but not limited to:

- anacrolix/torrent (Go)
- Luminarys/synapse (Rust)
- webtorrent (JavaScript)

[1]: https://internetstiftelsen.se/docs/hjelmvik_breaking.pdf
[2]: https://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1249&context=etd_projects
[3]: https://img.community.ui.com/3c0bed7b-729e-4123-a60e-3d5881dd8a70/comments/0fa9b756-ae61-4ffc-ba82-1e3058fbaa59/370e4681-9903-4e59-ac2c-8088623ca487
[4]: https://blog.libtorrent.org/2012/01/bittorrent-over-ssl
