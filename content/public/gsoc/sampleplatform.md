---
title: " Google Summer of Code 2020 - The sample platform / Continuous integration revisited"
---

The [sample platform](https://sampleplatform.ccextractor.org/) was
developed during GSoC '15 and got improved during every GSoC edition since.

During the last edition of GCi we noticed that new contributors find the current 
system confusing at first, which make it no longer viable to continue to run the 
platform in it's current form.

The two main issues are: 
- Long runtime if a lot of commits/PR's are opened. This is because 
there is only one instance per OS available. 
- Unclear what the tests were being compared against. We should be 
able to have multiple approved versions and tell the user if
the result deviates from those known ones.

The second issue has recently been (partially solved) by allowing multiple result
files to be set as an "correct" output.

During GSoC '20 a student attempted a full rewrite of the platform, but this
effort failed unfortunately. It gave us good insights though on the platform of choice,
which is Google's Cloud Platform (GCP). 

You can find the repository with the code here (for reference purposes): 
https://github.com/CCExtractor/sample-platform-v2

For this year, we want to focus on migrating the existing python codebase to GCP,
and getting a setup where we can launch disposable machines instead of the current
KVM setup. This will eliminate the queue that is sometimes built up.

Watch [this video](https://www.youtube.com/watch?v=407nwX6__70).
Disregard that it's about the Rust community - it's the CD/CI part on
it that is important to us. That's what we want.

Task list:
- Make a cost estimation of running the platform, the storage of the samples (180GB) and the test
runners
- Migrate the current website to a GCP running instance
- Update GH Actions to only trigger the platform if both builds on Linux & Windows succeed. This
will reduce wasting time when a build fails anyway.
- Update our mod_ci module to use the GCP API to start a disposable machine for both
Windows & Linux. It is **vital** that you look into the workings of Windows on GCP, because
we will have to fail you if you only setup Linux. Windows is an essential part of our testing
infrastructure.

### Getting started / Requirements

The Sample Platform is written in Python, so we expect good knowledge of
Python. Choices for libraries should be made based on maintainability 
(unit testing) and availability of third-party API's.

#### Qualification

If you are interested in taking up this project during GSoC, you will
need to satisfy these requirements (in order of importance, not all are
a necessity):
- A well researched, well written project proposal.
This should include a monthly cost prediction based on expected
runtime's, disk storage used, ... for GCP. 
- Have chatted with the mentor(s) at least once.
- Fixed a bug, improved installation documentation, ... (contributed something to the project).
There are some issues in the tracker labeled issues labeled
[GSoC-proposal-task](https://github.com/CCExtractor/sample-platform/issues?q=is%3Aissue+is%3Aopen+label%3AGSoC-proposal-task)
for this purpose.
- Proof you've set up the Sample Platform locally.

### Additional information not necessarily well organized :-)

- When a pull-request is checked, our system now reports the number of "broken" samples, 
meaning how many samples are producing an incorrect output according to our "good output" list. 
This however does not help much determining how the output changes for this specific
PR. Instead, the system needs to report the difference between the code
before and after the changes in the PR, which is much more useful. 
- One of the reasons we're "going cloud" (as opposed to
continue to run in one server) is the ability to scale and parallelize.
It must be possible to check several PRs at the same time, different
platforms, and so on. - We need to add a "regression finder"
feature that works (and possibly uses) like git bisect: Give a specific
sample find which specific commit changed the output.

### Mentor(s)

- Willem Van Iseghem (@canihavesomecoffee on Slack) is a former GSoC
student (2014, 2015, 2016) and mentor (2017, 2018, 2019). He started the
project and is the official maintainer.
- Shivam Jha (@thealphadollar on Slack) is a former GSoC student (2018, 2019), mentor (2020)
and is co-maintainer of the platform.
