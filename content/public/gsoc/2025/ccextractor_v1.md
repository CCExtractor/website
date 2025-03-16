---
title: "CCExtractor 1.00 - AKA after 15 years we think we're ready to release."
---

**Mentors:**
Carlos (carlos.fernandez), Willem (canihavesomecoffee), Prateek (prateekmedia)

Because this is a very large project, with a number of different areas, *all three* of us will be involved (i.e. there's no backup mentors, we're all primary mentors).

**Time estimation**  
350 hours

### Project Brief
A lot of work has been done to rewrite the most bug prone parts of CCExtractors from C to Rust. This has been mostly successful, even though there's some pending PRs that due to their size haven't yet been merged.

At the same time, we've normalized many things (such as command line args) that have been inconsistent for years.

The sample platform is working OK-ish now.

The goal of this project is to get all of that good stuff that is almost done and prepare a 1.00 bundle.

For historic reasons, we've just increased the version number 0.01 at a time, as we said "1.00 should be really good". Well, the time is now.

# Your task

- Integrate and test all the Rust work. We have a bunch of open PR's that should be good (thanks to excellent contributors in the past years), but never got merged.
- *Get all regression tests passing* (this will require debugging skills for CCextractor code, but might also expose you to GitHub actions, Google Cloud, and more if the issue turns out to be a bug on the Sample Platform)
- Sync the changes or if there is any need of bug fixes and release CCExtractor GUI (Flutter).
- Prepare release files (automated) to our 1.00 version.

The most important part is to get the number of open PR's to 0 and make sure all known regressions are fixed.
  
### Qualification tasks

As you can see, this project has everything: Rust, C, Flutter, Python, Google Cloud, Docker... 

We don't expect anyone to know everything already, of course. Work on a couple of issues on different repos (for example, one in Rust and one of the Sample Platform, or any other combination) and send PRs.

If you can show debugging skills by fixing a known regression on an open PR you'll be a step ahead of other potential contributors.
