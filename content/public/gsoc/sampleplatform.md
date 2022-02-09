---
title: " Google Summer of Code 2020 - The sample platform / Continuous integration revisited"
---

The [sample platform](https://sampleplatform.ccextractor.org) was developed during GSoC '15 and got improved during every GSoC edition since.

During the last edition of GCi we noticed that new contributors find the current system confusing at first, which make it less interesting/useful to continue to run the platform in it's current form.

The two main issues we face: 
- Long runtime if a lot of commits/PR's are opened. This is because only one instance per OS is available, limiting the concurrency to one or two tests at best.
- Unclear what the tests were being compared against. We should be able to have multiple approved versions and tell the user if the result deviates from those known ones.

The second issue has been (partially) solved by allowing multiple result files to be set as an "correct" output.

For this year, we want to focus on migrating the existing python codebase to GCP,
and getting a setup where we can launch disposable machines instead of the current
KVM setup. This will eliminate the queue that is sometimes built up.

Watch [this video](https://www.youtube.com/watch?v=407nwX6__70). Disregard that it's about the Rust community - it's the CD/CI part on it that is important to us. That's what we want.

List of things that should be done during your project:
- Migrate the current website to a GCP running instance
- Update our mod_ci module to use the GCP API to start a disposable machine for both Windows & Linux. It is **vital** that you look into the workings of Windows on GCP, because we will have to fail you if you only setup Linux. **Windows is an essential part of our testing infrastructure**.
- Update GH Actions to only trigger the platform if both builds on Linux & Windows succeed. This will reduce wasting time when a build fails anyway.

### Links / references
- the live sample platform: https://sampleplatform.ccextractor.org
- it's source code: https://github.com/CCExtractor/sample-platform
- archived v2* (**for reference only**): https://github.com/CCExtractor/sample-platform-v2
- CCExtractor's GitHub workflows: https://github.com/CCExtractor/ccextractor/tree/master/.github/workflows

* We have no plans to continue with this version due to it being a total rewrite. It might contain useful information on how GCP's platform works though.

### Getting started / Requirements

The Sample Platform is written in Python, so we expect good knowledge of Python. Choices for libraries should be made based on maintainability (unit testing) and availability of third-party API's.

#### Qualification

If you are interested in taking up this project during GSoC, you will need to satisfy these requirements (in order of importance, not all are a necessity):
- Have chatted with the mentor(s) at least once.
- A well researched, well written project proposal.
- Fixed a bug, improved installation documentation, ... (contributed something to the project). There are some issues in the tracker labeled issues labeled [GSoC-proposal-task](https://github.com/CCExtractor/sample-platform/issues?q=is%3Aissue+is%3Aopen+label%3AGSoC-proposal-task) for this purpose.
- Proof you've set up the Sample Platform locally (you can skip the KVM part though, as we want to tear that part out, but bonus if you manage to set it up)
- Make a cost estimation of running the platform, the storage of the samples (180GB) and the test runners

### Additional information not necessarily well organized :-)

- When a pull-request is checked, our system now reports the number of "broken" samples, meaning how many samples are producing an incorrect output according to our "good output" list. This however does not help much determining how the output changes for this specific PR. Instead, the system needs to report the difference between the code before and after the changes in the PR, which is much more useful. 
- One of the reasons we're "going cloud" (as opposed to continue to run in one server) is the ability to scale and parallelize. It must be possible to check several PRs at the same time, different platforms, and so on. 
- We need to add a "regression finder" feature that works (and possibly uses) like git bisect: Give a specific sample find which specific commit changed the output.

### Mentor(s)

- Willem Van Iseghem (@canihavesomecoffee on Slack) is a former GSoC student (2014-2016) and mentor (2017-2021). He started the project and is the official maintainer.
- Shivam Jha (@thealphadollar on Slack) is a former GSoC student (2018-2019), mentor (2020-2021) and is co-maintainer of the platform.
