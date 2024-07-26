---
title: "CCExtractor 1.00 - AKA after 14 years we think we're ready to release."
---

**Mentors:**
Carlos (carlos.fernandez), Willem (canihavesomecoffee), punit (Punit Lodha)

Because this is a very large project, with a number of different areas, *all three* of us will be involved (i.e. there's no backup mentors, we're all primary mentors).

**Time estimation**  
350 hours

### Project Brief
A lot of work has been done to rewrite the most bug prone parts of CCExtractors from C to Rust. This has been mostly successful, even though there's some pending PRs that due to their size haven't yet been merged.

At the same time, we've normalized many things (such as command line args) that have been inconsistent for years.

The sample platform is working OK-ish now.

The goal of this project is to get all of that good stuff that is almost done and prepare a 1.00 bundle.

For historic reasons, we've just increased the version number 0.01 at a time, as we said "1.00 should be really good". Well, the time is now.

# Your job

- Integrate and test all the Rust work.
- Get all regression tests passing (this will require debugging skills for CCextractor code, but might also expose you to GitHub actions, Google Cloud, and more if the issue turns out to be a bug on the Sample Platform)
- Get the UI (written in Flutter) to work after all the changes. This is probably not a lot of work; some command line args have changed, and we need to keep things in sync.
- Prepare a Docker image that can build everything so new developers don't have to fight the environment setup. You can get ideas from the current GitHub actions that already build the software
- Update FFmpeg bindings from FFmpeg 5 to 6. We use rusty_ffmpeg which already supports 6.1, so this is relatively straightforward. 
- Prepare release files (automated) to our 1.00 version.
  
### Qualification tasks

As you can see, this project has everything: Rust, C, Flutter, Python, Google Cloud, Docker... 

We don't expect anyone to know everything already, of course. Work on a couple of issues on different repos (for example, one in Rust and one in Flutter, or any other combination) and send PRs.

Or, to generally show that you know some Rust, tackle something from these very popular Rust projects (they're not related to us, even though we use them and we've committed code from time to time) and send us links to the PRs:

https://github.com/greshake/i3status-rust  
https://starship.rs/
