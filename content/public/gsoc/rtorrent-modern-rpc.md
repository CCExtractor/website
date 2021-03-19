---
title: "Implement a modern RPC interface for rTorrent"
---

 **Introduction**

rTorrent currently uses an antique XMLRPC interface, which is limited in
capability, not scalable, hard to use, insecure and low-performance.
Community needs a modern RPC interface with full bidirectional, stream
processing, incremental data loading and high concurrency capabilities,
which allows real-time events for RPC users, reduced serialization/transfer
overheads, potentially better security (with authentication and/or TLS), etc.

jesec implemented feature-complete JSON-RPC over SCGI support for rTorrent [[1]].
Preliminary tests showed that, when compared with XMLRPC, JSON-RPC yields 2x
performance, 15% lower total CPU time in rTorrent process, 33% lower total
CPU time in RPC user’s process. Flood supports it from v4.5, which allows
it to halve the response time of 28890-torrent list from 2.5 seconds to
1.2 seconds [[2]].

 **Your job**

The goal here is to implement a modern RPC interface that allows the users to
receive events like `download.completed`.

The logical step is to implement JSON-RPC over WebSockets support on top
of the existing JSON-RPC over SCGI (raw socket) implementation, hook event
emitting function and send event to WebSocket subscribers.

Other modern RPC protocols such as gRPC are also accepted. However, note that
it is probably more difficult to start from scratch.

The interface should support at least two simultaneous subscribers.

Some C++ libraries:
- uNetworking/uWebSockets
- warmcat/libwebsockets

[1]: https://github.com/jesec/rtorrent
[2]: https://github.com/jesec/flood/discussions/218#discussioncomment-415435
