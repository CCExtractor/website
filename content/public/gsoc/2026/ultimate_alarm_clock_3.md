---
title: "Ultimate Alarm Clock III"
---
**Mentors:**
Rijuth Menon R (Zulip handle: @Rijuth Menon R). Rijuth was the contributor for GSoC '23 for this project and is now going to mentor it during GSoC while he himself continues to work on it.

**Time estimation**  
350 hours

### Project Brief

There's plenty of alarm clocks for mobile, of course. But the most decent ones are expensive. Some even have subscriptions. Really, for a clock? They cost more than an actual physical clock.

Last year we decided to put an end to this nonsense :-) and we came up with a very different alarm clock. The [project](https://github.com/CCExtractor/ultimate_alarm_clock) took traction and some of us are already using it as our primary alarm clock. 

### Status

The app is already very usable. We recommend you give it a try to get an idea on why it's different. You will see shared alarms, conditional alarms, and more. If you do encounter any bugs, feel free to raise the PR after fixing them!

A big part of your work will be making sure everything actually works the way it should - polishing features, testing thoroughly, and getting the app truly ready for real-world use. 
An alarm clock isn’t something people forgive easily if it fails, so reliability is key. Our goal this year is to confidently ship UAC to the Play Store, and that means focusing just as much on stability and refinement as on adding new features.

Here's some of the things we want to add:

- iPhone version. This is mostly a wish, because during development on Android we found several gotchas as a result of using flutter - things that native apps can do easily but that flutter apps can't do without help. We hope to find a smart person with an iPhone up to the challenge, but if you don't have one, keep reading anyway.

- "Shared alarm" notification -> When I send an alarm with someone, send an in-app notification so they can accept or not. We have this already built and working, but we need to update it to support all the features we currently have.

- Alarm history. This was brought in GSoC'25, we already have a good system in place. But we need to extend it. Make a more sophisticated dev view to make it easier to debug as to why it did not ring on some devices, by logging the error.

- Google calendar integration. Yes, Google calendar has its own notifications, but they're not designed to wake you up, and of course it misses the rest of the conditions. Example: Ring if I have an event of my "football calendar" only if I'm home. We should be able to tie these alarms to our alarm profiles to support the unique features we have.

- Integration with Google Assistant. Allowing voice commands to set, modify, or check alarms via Google Assistant.

- Task list per alarm. A small, customizable to-do list linked to each alarm, so the user is reminded of important tasks/goals right at wake-up.

- Integration with our UAC companion app -> Last year, we built the companion version of UAC. We'd like to ensure both the apps can work in sync.

- Set up the CI / CD required to publish the different rele to app store. The target this year is to ensure we ship it to play store and keep the codebase updated.

#### Some tasks that we'd like to complete this year
These are not high priority, but these tasks will help us make a much more maintainable application.

- Centralizing UI components so we can have consistent behaviour throughout the application 

- Smart device/IoT integration. Using APIs like SmartThings or ThingSpeak to trigger actions with alarms—like turning on the lights when the alarm rings.

- Work on removing too much dependency on third party packages (we use them for more sensor related tasks, can make our own implementation, so we won't be in trouble when they deprecate these packages)

- Bring about a better state management for the application. We currently use GetX and while it works very well, the codebase has grown in size with many features added in every year by contributors. It would make it more maintainable to switch to something else, but this is a big task to take up and not on top of the list.
### Features we don't care about

We don't want a lot of bloat. There's lots of alarm clocks that do things like sleep tracking (which you can do much better with a dedicated app), lulabys...

There's 350 hours in this project, and the goal is to have a good alarm clock that stands out. 

We don't want a clone of anything that already exists.

### Your Task

Add most of all of the features listed, and come up with new ones in the proposal.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome). Any Flutter task will do.
