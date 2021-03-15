# Enable automated testing on windows and other general sample platform improvements

//Developed under Google Summer of Code, 2017 with CCExtractor
Development By [Satyam
Mittal](https://github.com/satyammittal) //

------------------------------------------------------------------------

##### Introduction

The CCExtractor Sample Platform manages a test suite bot, sample upload
and more. This platform allows for a unified place to report errors,
submit samples, view existing samples and more. The sample platform has
been a good way to test regression tests, but still lacks windows
support. It needs some improvements that are listed on issue tracker.

The main aim of the project is to extend the support of sample platform
to windows. The focus of the project would be to add some add-on
features to sample platform such as FTP upload support, improved error
detection and github integration that helps user to have a single place
to upload,view samples and associated test results.

------------------------------------------------------------------------

##### Detailed Description/Timeline

` * Windows Support`\
` * FTP Upload Support`\
` * Github Integration`\
` * Improved error detection`\
` * Other small listed improvements on the issue tracker`

------------------------------------------------------------------------

##### Original​ ​ Vs​ ​ Achieved​ ​ Goals

` * **Windows CI Testing**: Now Windows Testing Support has been added and it is done in parallel to linux testing. After addition of Windows Support, It will help to report errors of running ccextractor on windows and to check samples supported on windows of various PRs.`\
` * **FTP support**: It has been added and working properly. Using FTP, a user can perform a mass upload to a server, not having to worry about repeatedly having to re browse for files and re-upload them using one form. User can easily upload large files using FTP.`\
` * **Github integration**: Now Users can connect their github account to sample platform that enables them to report issue regarding a sample. They can see the list of issues and their status (active/closed) through sample platform.`\
` * **Waiting time feature**: Users will see the estimated waiting for each test on sample platform while test is in queue. They don't have to sit on the platform for whole time. They could take a leap and come after estimated time.`\
` * **Media info**: Now Platform will hide the sample info that has no media info or just partial media info.`\
` * **Improved Error Detection**:`\
`    * **Improved mimetype checks**: I have added a back-end check for file upload through mimetype prediction. However It will not be 100% accurate. But safer than just frontend check.`\
`    * **Cmake, builddebug, autoconf scripts**: Now I have added different build checks whether they are successful or not.`\
` * **Auto-update of test progress**: While the test runs, it automatically updates the page on transition from preparation->building->testing->completed.`\
` * **Maintenance Mode**: Added maintenance mode such that admin can easily make put virtual machines under maintenance mode and can make changes in it without taking care of future tests.`\
` * **Documentation**: All changed set has been properly documented. I have added pydocs from methods and inline comments. I have followed pep8 while adding pull request.`\
` * **Unittesting**: This needs to be done.`

------------------------------------------------------------------------

##### Project Related Links

` * Github Project repository: `[`https://github.com/canihavesomecoffee/sample-platform`](https://github.com/canihavesomecoffee/sample-platform)\
` * Project documentation : `[`https://github.com/canihavesomecoffee/sample-platform/blob/master/README.md`](https://github.com/canihavesomecoffee/sample-platform/blob/master/README.md)\
` * Project Proposal: `[`https://docs.google.com/document/d/1BEE4wh7wSyGYLQPU3f5jUotSHqfDQ__za1xMt6NNvNs/edit?usp=sharing`](https://docs.google.com/document/d/1BEE4wh7wSyGYLQPU3f5jUotSHqfDQ__za1xMt6NNvNs/edit?usp=sharing)\
` * Official GSoC Project Link: `[`https://summerofcode.withgoogle.com/projects/#5205435270299648`](https://summerofcode.withgoogle.com/projects/#5205435270299648)\
` * Mentor: `[`Willem`` ``Van`` ``Iseghem`](https://github.com/canihavesomecoffee)\
` * My blog (updates on weekly basis): `[`https://satyammittal.wordpress.com/`](https://satyammittal.wordpress.com/)\
` * Hosted Project Server Link: `[`https://sampleplatform.ccextractor.org/`](https://sampleplatform.ccextractor.org/)

------------------------------------------------------------------------

##### Contributions\[Commits/PRs\]

 **All my commits to the repository can be found here\*\*:
        [Commits](https://github.com/canihavesomecoffee/sample-platform/commits/master?author=satyammittal)

<!-- -->

 **All my pull requests to the repository can be found here\*\*:
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

` - I have been contributing in CCextractor testing platform from last 5-6 months and the journey has been great, I have learned a lot from working in different modules and also got an opportunity to discover many concepts behind some modules. The project help me how to work in a team and in systematic way.`\
` - Putting​ your​ doubts​ in​ front​ ​of​ ​others​ ​as​ ​during​ ​this​ ​period​ ​a number​ of​ errors​ ​will​ ​come and​ ​you​ ​should​ ​have​ ​to​ ​ convey​ ​what​ ​you​ ​want​ ​to​ ​say​ ​to​ ​others,​ ​seems​ ​easy​ ​but​ ​not​ ​that for​ ​me​ ​atleast.`\
` - Importance​ ​of​ ​indentation​ ​and​ ​documentation​ ​as​ ​during​ ​this​ ​period​`

------------------------------------------------------------------------

##### Known Issues/ Future Work

` * There are still some issues listed in issue tracker. I ​ have a good understanding of how the current CCextractor’s Testing platform works. I could track down the cause of the bugs quickly. I would like to fix them.`\
` * Since the part of work that I have done in CCextractor's Sample Platform was done with altmost care according to my knowledge, therefore I would try to remove any bug in part of my code reported by someone else or encountered by me.`

------------------------------------------------------------------------

##### Addendum

I am doing my 3rd year of graduation. I will keep contributing to the
sample platform. Apart from that, I will try to become active
contributor of main repository. I would like to seek the opportunity to
do 2nd time GSoC with the CCextractor.

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
