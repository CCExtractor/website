---
title: "Real time repository and website" 
---

The main goal of this year was to bring real-time repository to more
stable, less resource demanding and usable version. A lot of decisions
made in GSoC 2014 and 2015 turned out to be wrong. So this year I had to
start everything almost from scratch. The things that were achieved to
this date are:

 - Completely changed architecture:
   - All captions extraction (BIN -> CC) is done on "tuners side" instead of sending BIN to special servers for extracting 
   - CCExtractor itself doesn't connect to repository servers, instead a client program [ccr](https://github.com/rkuchumov/ccr-client) should be used. ccr sends both extracted captions and BIN data
   - My own socket connection protocol between "tuners side" and servers was replaced by long running HTTP connection. It handles connection losses easily, as they happens quiet often and also allows to define an API.
   - Communication between web browser and servers is done now via WebSockets. Compared to previous implementations with polling, long polling and server-side events (yes, I tried all of them :( ) it doesn't overload servers's CPUs as much. 
   - Repository servers are now handling HTTP and WebSockets requests only. All the received data is stored in Redis cache and backed up to persistent database every few minutes. (In previous versions there were no cache)
 - [ Created client program ccr](https://github.com/rkuchumov/ccr-client)
 - [ Changed web servers](https://github.com/rkuchumov/ccr-server)
   - My own implementation of MVC pattern and routing was replaced by FatFree framework, then it turned out that it doesn't have required features and then was changed by Laravel
   - The same happened to JavaScript client. At the end it was done with Backbone framework. Also now it allows to view multiple channels at the same time
   - WebSocket servers were created using Node.js (check broadcasting/ in repo)
 - [ Defined an RESTful API](https://github.com/rkuchumov/ccr-server)
 - Deployed it in Kubernetes in Google Container Engine with working autoscaling

Besides that:

 - I fixed [this issue](https://github.com/CCExtractor/ccextractor/issues/259) (which is not actually CCExtractor fault:) )
 - And figured out [issue #136](https://github.com/CCExtractor/ccextractor/issues/136) (which is not CCExtractor fault as well)

The first half of the summer went as planned but then some problems
arouse. The first version used Google Datastore and App Engine. Turned
out hosting it cost $300 per two week which was very expensive. So we
decided to use Amazon AWS. I changed the code for their services and
then I wasted a lot of time trying to deploy it, but I couldn't and I
still don't know why (although I used it in the previous year). Then I
switched to Google Container Engine, it worked, but my app used a lot of
CPU %, so I had to redesign it again and reconsider a lot of decisions
(in panic). Because of this the following features were not done:

 - E-mail notifications
 - Creating .deb and .rpm packets for CCExtractor 
 - Searching and downloading feature (in API and web site) is not completed
