---
title: "The sample platform / Continuous integration"
---

*Developed under Google Summer of Code, 2018 with CCExtractor Development By [Satyam Mittal](https://github.com/satyammittal)*

------------------------------------------------------------------------

##### Introduction

The CCExtractor Sample Platform manages a test suite bot, sample upload
and more. This platform allows for a unified place to report errors,
submit samples, view existing samples and more. The sample platform has
been a good way to test regression tests, but still lacks some features
such as running customized tests.

The main aim of the project is to make sample platform fully finalized
and be as stable as possible. It will include adding some new features
and some fixes which will increase the stability of the platform. The
features and fixes are given below.

------------------------------------------------------------------------

##### Detailed Description/Timeline

 * Comment on the opened PR if a test fails
 * Add support for running the bot in forks
 * Add support for single test runs or smaller sample sets
 * Foundation upgrade broke lay-out
 * Migration to Python-3
 * Adding Restart / Stop for admin and user

------------------------------------------------------------------------

##### Original​ ​ Vs​ ​ Achieved​ ​ Goals

 * **Comment on the opened PR if a test fails**: Now users can easily see the textual overview of what is failing. It is always better to comment the all failing tests on the Pull Request. It will save the time of user by summarizing the error on the same pr and easily check the status of pull request. Template shown below:
 * **Add support for running the bot in forks**: It has been added and working properly. Now Users can enter commit or select the commit from their fork repository that are not more than 30 days old. They can select the platforms (linux, platform) they want to run their tests. List of tests started by user are displayed on same page.
 * **Add support for single test runs or smaller sample sets**: Now Users can customize tests based on selected regression tests and platforms. They can run their test on subset of regression tests. Test Progress will be displayed according to selected regression tests. Active Status has been added to Regression tests. Regression test status will tell whether it will run on test of main repository or not. Combined with previous feature, Customized Test would give the contributors full freedom to experiment with fixes on their forks.
 * **Foundation upgrade broke lay-out**: After Foundation upgrade, there were some UI fixes left. All the pages are mobile responsive. I fixed broken layout, fixed design of some pages and made tables mobile-responsive.
 * **Python-3.6 Migration**: Platform Python version has been migrated from 2.7 to 3+.
 * **Adding Restart / Stop for admin and user**: A button has been added in the admin test panel to make it easy for admin to stop or restart the test. After adding single test, corresponding user can stop the test or restart if he thinks somewhere he went wrong before test completes to decrease the load in the platform.
 * **Documentation**: All changed set has been properly documented. I have added pydocs from methods and inline comments. I have followed pep8 while adding pull request. [User documentation](http://ccextractor.com/public/gsoc/ccextractor_regression_testing) has been updated.
 * **Unittesting**: I have increase the test coverage to around 60%. It is still in progress.

------------------------------------------------------------------------

##### Project Related Links

 * Github Project repository: [https://github.com/canihavesomecoffee/sample-platform](https://github.com/canihavesomecoffee/sample-platform)
 * Project documentation : [https://github.com/canihavesomecoffee/sample-platform/blob/master/README.md](https://github.com/canihavesomecoffee/sample-platform/blob/master/README.md)
 * Project Proposal: [https://docs.google.com/document/d/1sOwdF_924WUYEGDB6IM-caZzepp0-tutLpjfUI-xT88/edit?usp=sharing](https://docs.google.com/document/d/1sOwdF_924WUYEGDB6IM-caZzepp0-tutLpjfUI-xT88/edit?usp=sharing)
 * Official GSoC Project Link: [https://summerofcode.withgoogle.com/projects/#4548101499518976](https://summerofcode.withgoogle.com/projects/#4548101499518976)
 * Mentor: [Willem Van Iseghem](https://github.com/canihavesomecoffee)
 * Hosted Project Server Link: [https://sampleplatform.ccextractor.org/](https://sampleplatform.ccextractor.org/)

------------------------------------------------------------------------

##### Contributions[Commits/PRs]

 **All my commits to the repository can be found here**:
        [Commits](https://github.com/canihavesomecoffee/sample-platform/commits/master?author=satyammittal)

<!-- -->

 **All my pull requests to the repository can be found here**:
        [Pull
        Requests](https://github.com/canihavesomecoffee/sample-platform/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Asatyammittal)

------------------------------------------------------------------------

##### Other Works

I keep on fixing new bugs/issues raised in issue tracker time to time. I
will try my best to have smooth functioning of the sample platform.

------------------------------------------------------------------------

##### What I have learned

Doing​ ​this​ ​project​ ​is​ ​a ​lot​ ​fun​ ​with​ ​a lot​ ​of​ ​things​
​to​ ​learn.​ ​The​ ​number​ ​of​ ​such​ ​things​ ​is​ ​more than​ ​I
​​can​ ​even​ ​write​ ​but​ ​summing​ ​up​ ​all​ ​this​ ​the​ ​major​
​things​ ​which​ ​I ​learn​ ​includes​ ​ :

 - I have been contributing in CCExtractor CI platform from last 1.5 years and the journey has been great, I have learned a lot from working in different modules and also got an opportunity to discover many concepts behind some modules. The project help me how to work in a team and in systematic way.
 - Putting​ your​ doubts​ in​ front​ ​of​ ​others​ ​as​ ​during​ ​this​ ​period​ ​a number​ of​ errors​ ​will​ ​come and​ ​you​ ​should​ ​have​ ​to​ ​ convey​ ​what​ ​you​ ​want​ ​to​ ​say​ ​to​ ​others,​ ​seems​ ​easy​ ​but​ ​not​ ​that for​ ​me​ ​atleast.
 - Importance​ ​of​ unit-testing, ​indentation​, ​documentation​ ​as​ ​during​ ​this​ ​period​

------------------------------------------------------------------------

##### Known Issues/ Future Work

 * Since the part of work that I have done in CCextractor's Sample Platform was done with altmost care according to my knowledge, therefore I would try to remove any bug in part of my code reported by someone else or encountered by me.
 * Apart from CI platform, I will try my best to contribute in other ongoing projects in CCExtractor organization.

------------------------------------------------------------------------

##### Addendum

I am doing my 4rth year of graduation. I will keep contributing to the
sample platform. Apart from that, I will continue to do my best and
contribute to the organization.

------------------------------------------------------------------------

##### Contact Details

If you have any doubts or suggestions you can contact me anytime you
want. Here are the details :

Email address : <satyammittalid@gmail.com>

Github : [satyammittal](https://github.com/satyammittal)

Blog: [Wordpress](https://satyammittal.wordpress.com/)

Slack :
[bashtech](https://rhccgsoc15.slack.com/team/bashtech)

------------------------------------------------------------------------

#### Thanks
