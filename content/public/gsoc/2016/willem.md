---
title: "Improving GitHub CI"
---

This year of GSoC focused on improving the existing tools I wrote the
previous years (2014 & 2015) to achieve **full** GitHub integration.

This was achieved through:

 * A full rewrite of the existing sample platform for compatibility reasons
 * Migrating the VirtualBox VM environment to a KVM enviroment to ensure that tests run in a decent amount of time, while staying secure.
 * Running tests under the Windows platform.
 * Integrating the platform with GitHub using webhooks

### Rewrite of the sample platform

Last year's sample platform was written using PHP
(https://github.com/canihavesomecoffee/ccx_submissionplatform/), and
that choice induced some problems regarding the ease of operating when
combining the platform with the bot.

To get rid of these issues, a rewrite of the platform was required. A
switch to python (in which the previous github bot was written already)
was made.

The platform is currently running live at
<https://sampleplatform.ccextractor.org/>, and the source code for the
entire platform & GitHub integration can be found on
[https://github.com/canihavesomecoffee/sample-platform.](https://github.com/canihavesomecoffee/sample-platform.)

The platform isn't fully finished yet, though it is usable; These
things still need to be done:

 * Re-enable FTP upload
 * Finish the management of regression tests
 * Let users schedule tests from forks

### Migration from VirtualBox to KVM

As the VirtualBox solution from last year proved to be terribly slow,
this year, a migration to KVM was done.

This involved the following steps:

 * Installing KVM
 * Getting the API bindings
 * Create a Linux VM, and configure it
 * Program the platform to revert to a snapshot and run the test suite

The code for this is fully integrated into the Sample Platform, and as
such can be found there.

### Windows testing

This part is unfinished. A windows VM needs to be created & configured,
a startup service needs to be written (that can handle the automated
compilation of CCExtractor under Windows), and the lines of code in the
platform that handle the VM need to be uncommented.

### Integration with GitHub

Using the
[webhooks](https://developer.github.com/v3/repos/hooks/)
GitHub provides, a full integration with their platform could be
made.

GitHub informs us of new pushes and pull requests, and the platform
subsequently queues and executes the tests for given commit or PR. This
code is also fully integrated into the platform, but mod_ci is the
place where all the magic happens.

### Other work

Besides the work detailed above, some patches for CCExtractor were
contributed:

<https://github.com/CCExtractor/ccextractor/pull/363> 
<https://github.com/CCExtractor/ccextractor/pull/365> 
<https://github.com/CCExtractor/ccextractor/pull/382> 
<https://github.com/CCExtractor/ccextractor/pull/383> 
<https://github.com/CCExtractor/ccextractor/pull/386> 
<https://github.com/CCExtractor/ccextractor/pull/399> 
<https://github.com/CCExtractor/ccextractor/pull/403> 

Next to that, some fixes to the test suite also were made:

<https://github.com/canihavesomecoffee/ccx_testsuite/commits/master>
