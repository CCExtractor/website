---
title: "Beacon."
---

Have you ever been to a city tour, or hike, or anything else in which a whole group is supposed to stay together by following a leader (who hopefully, knows where is going) but you don't know anyone else in the group and you can't really get distracted or you might lose the group?

Well, this is the first use case the beacon is supposed to solve!

The basic idea is this:

- Since we want this app to be global and take over the world :-) there can be many groups of people using it, each of the groups doing their own thing.
- Each group can have several beacons, at least potentially, but at first focus on one group = one beacon. Just keep the N beacon requirement in mind.
- The beacon indicates of course the location of the leader which anyone can follow.
- A beacon can be transferred from one device to another, typically because there's a change in whoever is leading the group.
- Beacons can be accessed anonymously (at least for now - maybe we'll add privacy options in the future). This is important, because as we said, it's possible that the user is just joining a city tour and has no way to get in touch with anyone.
- Each beacon has a short code (we can use short since beacons are short lived) and several convenient ways to access it (URL, QR, etc)
- Beacons have a start and end time during they are active. This can be prescheduled, or the beacon owner can just activate / deactivate on demand.
- Beacon followers ideally should just have the app installed, but since they might not the beacon URL should provide at least basic page with the current location.
- For an active beacon (only) the route is saved so the user can later share it.
- From the app we'll have an "Add landmark" feature to mark interesting points.

Notes:
- The app is of course open source as per GSoC regulations, including whatever backend is implemented. 
- We (CCExtractor) will use org funds to pay for the backend system during GSoC, and after that we'll see how much it costs to run the service :-)

