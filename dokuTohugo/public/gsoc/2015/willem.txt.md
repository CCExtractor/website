======= GSOC 2015 Documentation =======

##### Technical Documentation

All technical documentation has been posted to the GitHub repositories,
either in the form of the README, or in form of comments.

The repositories are located here:

<https://github.com/canihavesomecoffee/ccx_testsuite> (Project from GSoC
2014, not that much changes this year, except for some fixes and
improvements)\\\\ <https://github.com/canihavesomecoffee/ccx_gitbot>\\\\
<https://github.com/canihavesomecoffee/ccx_submissionplatform>\\\\

##### How to use?

#### Test Suite

No changes from last year, still as described in the first section of
[CCExtractor regresssion testing / GitHub
bot](gsocpublic:ccextractor_regression_testing).\\\\

#### GitHub bot

Refer to the bot section in the [CCExtractor regresssion testing /
GitHub bot](gsocpublic:ccextractor_regression_testing)
page.\\\\

#### Submission platform

To view samples, test results and download samples there is no need for
an account. To upload samples, registration is required. Samples (\<1GB)
can be uploaded through HTTP; FTP allows all sizes. Special care has
been taken to keep all samples anonymous (except to the user itself and
the admin), and if required, a user can anonymize his/her account.\\\\

##### How to evaluate?

The bot can be evaluated (user-side) by issuing commands to it on GitHub
(see [CCExtractor regresssion testing / GitHub
bot](gsocpublic:ccextractor_regression_testing) for
instructions). It\'s been used already by Anshul, Kisselef and Ruslan
for the last PR they made.\\\\

The sample submission platform can be tested (user-side) by either
browsing around on the site and/or creating an account (the latter is
required to upload samples). At this moment, a limited section of
regression samples was already added, and this will be expanded very
soon.\\\\

To test the admin parts of both the bot & the sample platform I refer to
the mail I wrote to Carlos.\\\\

##### Contribution for blog

The submission of new samples has been quite chaotic in the past of
CCExtractor, with users submitting samples through FTP, GitHub, Google
Drive, upload websites, email, \... The sample submission platform aims
to create a single place to retrieve and upload new samples, as well as
showing the current state (fixed, broken, \...) for those samples.
Besides that, a GitHub bot was introduced to allow other contributors
run the regression tests without having to download all the samples.
This should improve the stability of CCExtractor and hopefully lower the
barrier for new contributions.
