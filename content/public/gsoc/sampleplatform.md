---
title: " Google Summer of Code 2023 - The sample platform / Continuous integration - The final countdown"
---

The [sample platform](https://sampleplatform.ccextractor.org) was developed during GSoC '15 and got improved during (almost) every GSoC edition since.

Last summer we got the platform ported to Google's Cloud Platform in order to have full scalability for tests being ran. We think that with this move we have the platform almost as we'd like it, and thus this year's project should focus on polishing the platform and squashing the last bugs present.

Some bugs that are still open and should be tackled:
- The GitHub comment that's being posted by our bot should always reflect the correct state (see https://github.com/CCExtractor/sample-platform/issues/535)
- Tests getting stuck when releasing CCExtractor (see https://github.com/CCExtractor/sample-platform/issues/574)
- Find a solution to work around artifact download (see https://github.com/CCExtractor/sample-platform/issues/683)
- We need to make sure that whenever we update our code on master, the changes get pulled. Currently it's not working as intended. The updater should probably run separately from the main app.

### Links / references
- the live sample platform: https://sampleplatform.ccextractor.org
- it's source code: https://github.com/CCExtractor/sample-platform
- CCExtractor's GitHub workflows: https://github.com/CCExtractor/ccextractor/tree/master/.github/workflows

### Getting started / Requirements

The Sample Platform is written in Python, so we expect good knowledge of Python. Choices for libraries should be made based on maintainability (unit testing) and availability of third-party API's.

#### Qualification

If you are interested in taking up this project during GSoC, you will need to satisfy these requirements (in order of importance, not all are a necessity):
- Have chatted with the mentor(s) at least once.
- A well researched, well written project proposal.
- Fixed a bug, improved installation documentation, ... (contributed something to the project). There are some issues in the tracker labeled issues labeled [GSoC-proposal-task](https://github.com/CCExtractor/sample-platform/issues?q=is%3Aissue+is%3Aopen+label%3AGSoC-proposal-task) for this purpose.
- Proof you've set up (part of) the platform on GCP (this could go hand-in-hand with the task above if the current documentation is insufficient ;) )

### Additional information not necessarily well organized :-)

- When a pull-request is checked, our system now reports the number of "broken" samples, meaning how many samples are producing an incorrect output according to our "good output" list. This however does not help much determining how the output changes for this specific PR. Instead, the system needs to report the difference between the code before and after the changes in the PR, which is much more useful. 
- We need to add a "regression finder" feature that works (and possibly uses) like git bisect: Give a specific sample find which specific commit changed the output.

### Mentor(s)

- Willem Van Iseghem (@canihavesomecoffee on Slack) is a former GSoC student (2014-2016) and mentor (2017-2022). He started the project and is the official maintainer.
- Shivam Jha (@thealphadollar on Slack) is a former GSoC student (2018-2019), mentor (2020-2022) and is co-maintainer of the platform.
