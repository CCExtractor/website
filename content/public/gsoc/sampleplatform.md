\~\~META: title = Google Summer of Code 2020 - The sample platform /
Continuous integration revisited \~\~

# The sample platform / Continuous integration

The [sample
platform](https://sampleplatform.ccextractor.org/) was
developed during GSoC '15 and overhauled during GSoC '16. In GSoC '17
another student added support for the Windows part, as well as some
bugfixes. The student continued his work during GSoC '18, and will
mentor this year. Last year a new student did some improvements and
bugfixes.

This GCi edition we came to the conclusion that for new contributors,
there are a bunch of drawbacks in the current system that make it no
longer viable to continue to run the platform in it's current form.


The two main issues are: - Long runtime if a lot of commits/PR's
are opened. This is because there is only one instance per OS
available. - Unclear what the tests were being compared against. We
should be able to have multiple approved versions and tell the user if
the result deviates from those known ones.

With a lot of different cloud offerings available and the launch of
GitHub actions we want to iterate on the design of the Sample Platform,
moving the infrastructure from a single dedicated server to a scalable
service that can cope with the variations in load.

This will need an upfront survey of the existing functionality, followed
by discussions with the mentor on how to implement this.

Features that will need to be implemented for certain are: - A
coordinating platform that receives the call for actions, triggers the
machines, displays results, \... - Scalable Linux/Mac/Windows
machines that can execute the regression tests (currently 180GB of
samples!) - Deep integration with the GitHub Actions that should be
run first (creating Linux, Windows, Mac builds), so that no time is
wasted if there are compiler errors or no code changes. - Watch
[this video](https://www.youtube.com/watch?v=407nwX6_70).
Disregard that it's about the Rust community - it's the CD/CI part on
it that is important to us. That's what we want.

##### Getting started / Requirements

The Sample Platform is written in Python, so we expect good knowledge of
Python. The new project is not necessarily python-based, but the choice
should be made based on maintainability (unit testing) and availability
of third-party API's and libraries.

#### Qualification

If you are interested in taking up this project during GSoC, you will
need to satisfy these requirements (in order of importance, not all are
a necessity):  - A well researched, well written project proposal.
This should include a monthly cost prediction based on expected
runtime's, disk storage used, \... A comparison between multiple
providers (e.g. Azure, GCP, AWS, Packet) must be included. - Have
chatted with the mentor(s) at least once. - Fixed a bug, improved
installation documentation, \... (contributed something to the project).
There are some issues in the tracker labeled issues labeled
[GSoC-proposal-task](https://github.com/CCExtractor/sample-platform/issues?q=is%3Aissue+is%3Aopen+label%3AGSoC-proposal-task)
for this purpose. - Proof you've set up the Sample Platform
locally.

##### Additional information not necessarily well organized :-)

\- For each sample we currently have one "good" output. That's not
really correct. Changes in code might produce minor changes in the
output (in the order of a few milliseconds). For each sample we'll need
to have a set of correct outputs (possibly with a "correctness
score"). - When a pull-request is checked, our system now reports
the number of "broken" samples, meaning how many samples are producing
an incorrect output according to our "good output" list. This however
does not help much determining how the output changes for this specific
PR. Instead, the system needs to report the difference between the code
before and after the changes in the PR, which is much more useful. -
We'll also need a way for final users to send test their own files
against the current version so they don't need us to release a new
CCExtractor version that \_could\_ fix something that is broken for
them. - It should be possible for users to get a binary compiled by
the new system, particularly for Windows (in linux we don't have this
problem since the typical way to install CCExtractor is just to build
from source). Note that this build is already happening, so don't worry
much if you have zero interest on Windows :-) You can use what we
already have in order to build. - We currently run all the tests for
each PR. This is overkill. Instead, we should have different sets of
tests, for example "only MP4 files", or only "teletext", and so on,
and the developer should be able to decide which tests he needs to run
his PR on (or maybe none, for example if he just edited the help
screen). - One of the reasons we're "going cloud" (as opposed to
continue to run in one server) is the ability to scale and parallelize.
It must be possible to check several PRs at the same time, different
platforms, and so on. - We need to add a "regression finder"
feature that works (and possibly uses) like git bisect: Give a specific
sample find which specific commit changed the output.

##### Mentor(s)

\- Willem Van Iseghem (\@canihavesomecoffee on Slack) is a former GSoC
student (2014, 2015, 2016) and mentor (2017, 2018, 2019). He started the
project and is the official maintainer.
