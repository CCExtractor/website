---
title: "It's Urgent."
---

**Mentor:**
Akshat Tripathi (Slack handle: @Akshat Tripathi). Akshat is a GSoC'22 participant with CCExtractor Development. He made contributions to the Flood-Mobile Project.

**Time estimation**  
350 hours (both frontend and backend)

### Project Brief
Have you ever had to get in touch with someone at all costs even if that meant disrupting whatever they were doing? Of course they can make you a priority contact that always rings, but then you would be disrupting every time. So that doesn't work.

We're going to build an application that lets the caller decide if they want to disrupt or not. We're (tentatively) calling it "It's urgent" and it works like this.

- Like in all messaging apps, you use your contacts to start the interaction
- In order to reach out to someone, they need to have the app too, which is also true for all messaging apps. So given a contact list, you see the ones that also have the app
- When reaching out to someone (user A to B), the flow is like this:

a) A sends a notification to B
b) If B is not in do-not-disturb mode, the alert will be triggered, as with any other app. If B is in do-not-disturb mode then A will get a notification and a challenge
c) The callenge is up to B to decide. It can be a password, a simple math operation, etc
d) A answers the challenge and sends it to B
e) If correct, then B will ring 

Note that this is not a messaging app or a phone app. It is only a notification app, with the twist that it allows the user trying to reach out decide how urgent it is.

### Your Job

Your job is to build an app in Flutter and a backend in anything you want. 

If you are a Flutter developer worried about the backend, don't be. This a very typical use case and you'll find lots of documentation and tools online.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome).
