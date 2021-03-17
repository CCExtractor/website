# The next peer-to-peer protocol

 **Introduction**

BitTorrent is, of course, the world's most used peer to peer protocol.
It's great, but it was designed before the cloud was ubiquitous and it
doesn't make use of the places where you have the most storage or the
most bandwidth. Can we design something for the next decade?

BitTorrent is based on the concept of peers, which are BitTorrent
clients, usually running on computers at home, that share data is a
super-efficient manner. It works well, of course, but

\- It requires users to have their computers on for a long time - It
requires users to expose their IP address - It requires users to use
their home internet connection, making it hard to do other things at the
same time such as streaming

There are of course alternatives (you can rent servers in data centers
for example), but they are not cheap, they're not easy to set up, and
they come with their own sets of problems, in general.

These days most people have lots of their data in the cloud: Dropbox,
Google Drive and so on.

 **Your job**

The goal here is to come up (and implement the first version) with a
system that let those personal storage systems exchange data

\- Securely - As cheap as possible - As fast as possible -
As easily as possible

A possible idea (one of many possibilities) would be to introduce the
concept for "agent". An agent would be a process that runs in the
cloud on behalf of the user and that has access to his personal storage
accounts. The agents can run anywhere, but their ideal place is the
cloud, for example, AWS or Google Cloud. They can be managed by the
final user or by a 3rd party that provides the service.

Agents find each other, and learn to trust each other, with the help of
repositories, the equivalent of today's trackers.

Agents that trust each other can vouch for other agents.

The chain of trust must always be preserved so agents can prune trees if
the trust is broken.

 **Qualification tasks**

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
