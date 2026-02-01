---
title: "Sample Platform NG"
---

**Mentors:**
Carlos (carlos.fernandez), Willem (canihavesomecoffee)

**Time estimation**
350 hours

### Project Brief
The Sample Platform was one of the original projects in GSoC for us. It's served us very well over the years, but it could use a modernization. This includes a new UI, backend improvements, repository update and more.

### Current Issues and Goals

**UI and Frontend:**
- We can probably do a UI refresh very quickly with AI now and modernize it.
- There's no frontend (of any kind) to define the tests, it's all queries (SQL) direct to the DB.

**AI-Friendly Testing:**
- Make it AI friendly; this means that we always compile with debug info and for each test we make the full output (not just the result) available for download as well as the sample (directly). Basically, we want to be able to give an AI one URL with a run and from there it should be able to access everything - binaries, coredumps (if there's one), input (i.e. samples), arguments, outputs (real and expected).

**Test Infrastructure:**
- We need a way to bisect.
- Estimation of test duration can give negative results.
- Current state of tests are either Pass or Fail. We don't have a state of "Never worked" to reflect a situation in which we have samples but they have some problem and there's never been a version of CCExtractor that worked with those samples.

**Build Improvements:**
- We don't have a way to run tests on Mac. We want to add Mac testing support.
- We're not validating the Docker build.

**Test Suite Expansion:**
- Our test suite is limited. Many samples that have been shared in issues have never been added, even if we used them to fix bugs. We need to recover as many of those as we can and add them.
- Some videos are really long; we don't need one hour recording, or even 10 minutes. Usually if there's a problem, you can see it in the first minute.
- We are not testing every possible argument. When I say testing I don't mean against a sample file but by itself - even if the parsing works. We broke some things on the rust migration that apparently flew under the radar.
- We need to update our samples, also importing reference corpus such as the one from VLC: http://streams.videolan.org/streams/ts/
- We need to sort the streams better. Possibly using mediainfo, ffprobe, etc, to tag each of the samples we have.

**Comparison and Cross-Platform:**
- We need to add functionality to test Linux vs Windows results so we can see, for a given PR, whether the output is identical or not.
- The comparison system is very dumb, comparing frame by frame - so if a frame (subtitle frame) is missing, then from that point everything is a mismatch.

# Your task

Work on the above issues to modernize and improve the Sample Platform. This includes:

- Implement a modern UI refresh
- Create a frontend for test definition (replacing direct SQL queries)
- Make the platform AI-friendly with comprehensive output access
- Implement bisect functionality
- Add "Never worked" test state
- Add Mac testing support
- Expand the test suite with samples from issues and external sources
- Implement cross-platform result comparison
- Improve the comparison algorithm to handle frame offsets

### Qualification tasks

Take a look at the [Sample Platform repository](https://github.com/CCExtractor/sample-platform) and work on one or more of the issues listed above. Even small improvements or bug fixes are valuable.
