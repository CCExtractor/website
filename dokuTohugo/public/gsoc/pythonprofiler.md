##### Program Flow Visualizer

#### Introduction

Read
[this](https://medium.com/@carlosfernandezsanz/generating-videos-of-algorithms-implementations-with-python-3422c4dd04f0)
and then come back here :-)

#### The Task

We want to build a complete profiler tool. During Google Code-in we
created several proofs of concept, so we know it\'s possible, and we
also know that it\'s a really good idea that got popular really fast.
For reference, as you can see in the article linked above, five high
school students created each their own implementation (by themselves) in
around one month with really impressive results.

You can take their existing work (it\'s open-source after all) and build
upon it, or you can do your own thing. But of course, your product must
demonstrate GSoC quality - you\'ll be working full-time for 3 months :-)

#### Ideas

` * Explore use-cases other than algorithms (`[`comment`` ``on`` ``Hacker`` ``News`](https://news.ycombinator.com/item?id=22179697)`)`\
` * Decorators to inform the debugger about the properties of user-defined data structures and classes`\
` * Visualizations for more data structures: trees, linked lists, etc.`\
` * Support for pausing, delays, and interactive messages, described via comments in the code`\
` * Interactive web version (or just an output format)`\
` * Flow control visualization, less of a focus on variables specifically (`[`comment`` ``on`` ``Hacker`` ``News`](https://news.ycombinator.com/item?id=22178451)`)`\
` * Support for large target programs (multi-file projects)`\
` * Integration with gdb and in general, support for other languages [if possible]`\
` * Manual control keys (Play, pause, speed)`\
` * Control flow chart (as an overview)`\
` * Support for //all// types of objects in saved sessions, even those that cannot be serialized directly`

This is another potential source of inspiration:
<https://github.com/hediet/vscode-debug-visualizer/tree/master/extension>

#### Qualification tasks

In order to qualify for our projects, you must complete a qualification
task or accrue sufficient qualification points from GitHub issues.

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome) for tasks
oriented for people who are working on new projects like this one.
Alternatively, you can go the traditional route of fixing GitHub issues
on the main CCExtractor project, which is written in C. You can find
more information about this
[here](https://ccextractor.org/public/gsoc/ideas_page_for_summer_of_code_2020#about_the_projects_and_getting_accepted).
