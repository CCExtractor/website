# CCExtractor Web : A web application for subtitle extraction through CCExtractor.

//Developed under Google Summer of Code, 2018 with CCExtractor
Development By [Saurabh
Shrivastava](https://github.com/saurabhshri) //

//Blog entry for final submission :
(https://saurabhshri.github.io/gsoc-2018-final-submission) //

------------------------------------------------------------------------

{{
<https://github.com/saurabhshri/ccextractor-web/raw/development/docs/images/usage.gif?900>
| Using CCExtractor Web}} 

##### Introduction

The aim of the project is to create an easy to use web application that
can be hosted on a web-server for subtitle extraction using CCExtractor.
The idea is simple -- the users do not need to install CCExtractor on
their own machine, they can directly use the web application to process
their files anytime, anywhere. It would also serve as an easy interface
for first-time developers (notably GSoC and GCI students) to experience
the extraction process.

The high-level workflow for this project basically involves obtaining
files from the user along with suitable parameters, passing them to the
CCExtractor, processing the files, obtaining output file and making it
available for download. Other things include, but is not limited to,
user management, file management, record maintenance, multiple
CCExtractor binary options, and API.

##### Project Related Links

` * Project repository on Github: `[`https://github.com/saurabhshri/ccextractor-web`](https://github.com/saurabhshri/ccextractor-web)

` * Project readme : `[`https://github.com/saurabhshri/ccextractor-web/blob/development/README.adoc`](https://github.com/saurabhshri/ccextractor-web/blob/development/README.adoc)

` * Project documentation : `[`https://github.com/saurabhshri/ccextractor-web/blob/development/docs/`](https://github.com/saurabhshri/ccextractor-web/blob/development/docs/)

` * Project link on official GSoC web-app : `[`https://summerofcode.withgoogle.com/projects/#5789900830408704`](https://summerofcode.withgoogle.com/projects/#5789900830408704)

` * Mentors : `[` ``@canihavesomecoffee`](https://github.com/canihavesomecoffee)` and `[` ``@alexbrt`](https://github.com/alexbrt)

The project was built by me individually with the invaluable help from
my mentors. All the external libraries and code used are credited
wherever due.

##### Technical Documentation

All the technical details are commented in the codes and the
documentation is available in the readme of the repository (linked
above). Code is properly commented and the variables, classes and other
components are named properly in CamelCase for easier understanding of
the code. Find compiling, installing, usage instructions and docs here :
<https://github.com/saurabhshri/ccextractor-web>

##### Known Issues / Future Work Needed

The project is in its very early stage and is constantly evolving. The
available functions, usage instructions et cetera are expected to
refactor over time. Feel free to contribute and improve the project.
Currently, files could only be uploaded from a user's file system. In
future, I would like to add the capability to add files from cloud
storage like Google Drive and add batch processing. Feel free to raise
any issue in the repository's issue tracker :
<https://github.com/saurabhshri/ccextractor-web/issues>

##### Read More

More information and news related to the project could be found at the
links attached above and would be posted from time to time on my blog :
<https://saurabhshri.github.io>
