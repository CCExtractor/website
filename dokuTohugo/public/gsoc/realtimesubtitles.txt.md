\~\~META: title = Google Summer of Code 2018 - Real time subtitles
system \~\~ [This](http://realtimedemo.ccextractor.org:8080/)
is our proof of concept demo for real time subtitles.

It\'s fed in real time by a number of HDHomeRun tuners that are
connected to CCExtractor, which in turn decodes the subtitles and
uploads them to this system, which uses NodeJS among other things.

Right now, only monitoring web page is implemented (the one you see in
demo), which is not intended to be used by end-users. During this summer
you\'ll have to design and implement a complete system, which should
include:

` - Web pages, for displaying channels and real-time captions. UI sketches in the repository will give you ideas of which features are required. Additional features, listed below are also desired:`\
`   * Multilanguage support (for example, if the program comes with both English and Spanish subtitles we should allow to display both)`\
`   *  Sharing URL`\
`   * Support for all display sizes and devices ("responsiveness")`\
` - Administrator dashboard which allows to mange channels, captions, monitor the states of infrastructure components. The page you see in the demo should be a part of administrator dashboard.`\
` - Create a subsystem for analyzing a stream of cations in real-time and presenting its current topic and/or keywords. (Check `[`https://github.com/rkuchumov/ccr/issues/13`](https://github.com/rkuchumov/ccr/issues/13)` for more details)`

What should I do?

` * Check repository issues page. Submitting pull requests will definitely make you stand above other students. Note that for "enhancement" tasks you can submit PR, event if there're already PRs by other students.  `\
` * Highlight all aforementioned tasks as well as tasks from GitHub in your proposal with as much details as possible. Do not forget that we select students with the best understanding and a vision of a project.`\
` * Discuss the project with mentor and suggest new ideas. `\
` * **Don't ask questions regarding installation and usage (it works fine).** It only shows that you are incapable of reading the code and solving problems, we don't need such developers. If you think there's a bug in deployment stage, fix it and submit a pull request.`

\_\_\*\*Mentor\*\*\_\_\\\\ Ruslan Kuchumov (\@kuchumovri on slack) is a
former GSoC student (2014, 2015, 2016) and mentor (2017). He has done
all the work so far so he\'s the best possible mentor.

Repository Link :
[<https://github.com/rkuchumov/ccr>](https://github.com/rkuchumov/ccr/)
