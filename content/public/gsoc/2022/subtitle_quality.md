---
title: "Writing a subtitle quality quantification tool"
---

Following an interesting conversation I had with someone from Netflix, I’ve been thinking for a bit about one specific project that’s really interesting to me (interested in subtitles and accessibility as I am): A subtitle quality quantification tool.

While for video quality there’s VMAF, PSNR and more, audio has PEAQ, there’s nothing that I know of that does the same thing for subtitles. In fact, how would such a tool look like? What does it take into consideration, how do you make all of it automatic…?

A few things are more or less clear; in fact the fan scene and different sites even have some rules that you have to follow:

- Max number of characters per line
- Characters per second
- Number or lines in screen
- Minimum amount of time a subtitle frame is visible

That’s mostly very low hanging fruit. What else can we do? I can think of many things, but these are the ones that I would say instantly break a good subtitle experience if they are not correct:

- Positioning. Subtitles should never be on top of anything important. For example, subtitles over rolling text (this happens all the time with news) is a no go.
- Good selection of foreground and background colors relative to what they are appearing on top of.
- Sync with audio, of course. There’s really no excuse anymore. A specific offender is Last Week Tonight with John Oliver which is taped and uses the same subtitles as live news (that don’t have a decent workflow).
- Coloring between different speakers. Yes, a tricky one. Not so easy to do, at least automatically, but there’s been some work by our friends at Red Hen.
- Multiple language support. All languages are important. If users are watching, say, a French movie with English subtitles on and there’s a short part in English, it needs to be subtitled too! And we’re while at it — the language of each sentence should be annotated as well (which would allow for very interesting cases).
- Music lyrics. When possible, music needs to be subtitled. It sets the mood! For a deaf person just the name of the song is not going to be enough.
- Integration between burned-in and closed captions. A good example is The Americans. When they talk in Russian there’s burned-in subtitles in English. Why this assumption?
- No missing words. A serious offender is Netflix. YouTube, too. Seriously, don’t do that. If the characters curse, they curse. Don’t remove that. Don’t change the rating of content.
- Translation quality. This is a tough one for which I don’t have a good way to come with an objective score. I’m definitely interested in ideas.
- Correct representation of the native charset. In Europe, DVB allows bitmaps, which gives some flexibility (at a price). Other systems are more limited.
- Usage of case rules.

So what’s the plan here? My idea is to work on this on the context of Google Summer of Code 2022, which today seems far away but it’s really just around the corner when you consider all the preparation it takes.

Interested students, get in touch.

Notes:

- Since it’s a new project, we’re flexible with the language, but because we need it to be fast and we’ll need to decode video and audio I’d expect integration with FFmpeg or GStreamer will be necessary. This already points to C/C++ or Rust.
- I intend to be one of the mentors.