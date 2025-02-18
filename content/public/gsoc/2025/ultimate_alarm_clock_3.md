---
title: "Ultimate Alarm Clock III"
---
**Mentors:**
Rijuth Menon R (Slack handle: @Rijuth Menon R). Rijuth was the contributor for GSoC '23 for this project and is now going to mentor it during GSoC while he himself continues to work on it.
Nishant Singhal (Slack handle: @Nishant Singhal). Nishant Singhal is a GSoC'22 participant with CCExtractor Development. He made contributions to the TaskWarrior Project. He was the mentor for this project during 2023.

**Time estimation**  
350 hours

### Project Brief

There's plenty of alarm clocks for mobile, of course. But the most decent ones are expensive. Some even have subscriptions. Really, for a clock? They cost more than an actual physical clock.

Last year we decided to put an end to this nonsense :-) and we came up with a very different alarm clock. The [project](https://github.com/CCExtractor/ultimate_alarm_clock) took traction and some of us are already using it as our primary alarm clock. 

### Status

The app is already very usable. We recommend you give it a try to get an idea on why it's different. You will see shared alarms, conditional alarms, and more. 

This year we intend to add a few more features and then release it to the app store. If you're wondering why we haven't done it already - the reason is that an alarm clock is "mission critical". You can't really release a work in progress because free or not, if it doesn't wake people up they're going to be furious.

Here's some of the things we want to add:

- iPhone version. This is mostly a wish, because during development on Android we found several gotchas as a result of using flutter - things that native apps can do easily but that flutter apps can't do without help. We hope to find a smart person with an iPhone up to the challenge, but if you don't have one, keep reading anyway.
- Negative condition alarms. For example, we have the condition to cancel the alarm if you are not in a specific location (for example, don't ring if I'm not home), but not "only ring if I'm home". There's a few things like this that can be improved.
- "Shared alarm" notification -> When I send an alarm with someone, send an in-app notification so they can accept or not.
- Alarm history. Yes. No one has that. But our system is a bit more complicated, and for each alarm that trigger *or* didn't trigger, we need to have a good record of what was considered. Why didn't it ring? Was it raining maybe? Location? We need this to troubleshoot.
- Timezone support. This is in two variants: One, is of course to set the alarm to ring on specific timezones, for example 8:30 California time (regardless of the user time zone). This is useful obviously for meetings.
- Google calendar integration. Yes, Google calendar has its own notifications, but they're not designed to wake you up, and of course it misses the rest of the conditions. Example: Ring if I have an event of my "football calendar" only if I'm home.
-    
### Features we don't care about

We don't want a lot of bloat. There's lots of alarm clocks that do things like sleep tracking (which you can do much better with a dedicated app), lulabys...

There's 350 hours in this project, and the goal is to have a good alarm clock that stands out. 

We don't want a clone of anything that already exists.

### Your Task

Add most of all of the features listed, and come up with new ones in the proposal.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome). Any Flutter task will do.
