+++
title = "CCExtractor's home page"
+++

<!-- +++

title = "Compose"
# define chart data here
[data]
  fileLink = "content/projects.csv" # path to where csv is stored
  colors = ["#627c62", "#11819b", "#ef7f1a", "#4e1154"] # chart colors
  columnTitles = ["Section", "Status", "Author"] # optional if no table will be displayed from dataset
  baseChartOn = 3 # number of column the chart(s) and graph should be drawn from # can be overridden directly via shortcode parameter # it's therefore optional
  title = "Projects"
    
+++ -->

{{< column >}}
# Welcome to CCExtractor

CCExtractor Development is an informal (meaning we're not incorporated anywhere) organization that exists to coordinate the development efforts of the volunteers that contribute to the software and to manage our participation in specific events such as Google Summer of Code and Code-In.
    

{{< tip "warning" >}}
This website is still in beta, you might come across formatting errors or pages not found. Please report them on slack.    
{{< /tip >}}

{{< tip >}}
To get in touch with us, join our slack channel. Most CCExtractor developers hang out in a slack team. You're welcome to request an invitation [here](/public//general/support/)

{{< /tip >}}

{{< button "docs/cchome/" "Read the Docs" >}}{{< button "docs/ideas_page_for_summer_of_code_2021/" "Here for GSoC'21?" >}}
{{< /column >}}


<!-- \~\~META: title = CCExtractor's home page \~\~ -->

<!-- 
#### [Here for Google Summer of Code 2021?](docs/ideas_page_for_summer_of_code_2021)

# User documentation and files

#### [How to chat with the team (for support, to join us, for GSoC, or anything else)](public/general/support)

[What's CCExtractor? (the software, not the organization)](public/general/whatsccextractor)

[About CCExtractor Development (the organization, not the software)](public/general/about_the_org)

[Downloads](public/general/downloads)

[Changelog](https://github.com/CCExtractor/ccextractor/blob/master/docs/CHANGES.TXT)

[Using the command line tool](public/general/command_line_usage)

[Using the Windows GUI](public/general/win_gui_usage)

[Real time demo](http://realtimedemo.ccextractor.org:8080/)
- Currently down, our primary source of data is moving to a new office
and their infrastructure is not yet available.

[Extracting burned-in subtitles](https://abhinavshukla95.wordpress.com/2016/08/18/google-summer-of-code-work-product-submission/)

[Extracting CEA-708 subtitles](public/gsoc/olegkisselef_cea_708)

[Translating subtitles in real time](public/gsoc/translating_captions)

[Using the cross-platform GUI](public/gsoc/olegkisselef_qt_gui)

[Extracting closed captions from a DVD step by step tutorial](public/gsoc/extract_from_DVD)

[Working with HDHomeRun](public/general/Working_with_HDHomeRun)

[Using SPUPNG](public/general/Using_SPUPNG)

[TV samples](public/general/TVSamples)

[Donate](public/general/http://sourceforge.net/donate/index.php?group_id=190832)

[Cool external projects that use subtitles](public/general/coollinkswithsubfs)

# Technical documentation

Most of these pages are the result of Summer of Code work.

[Getting started with our code](public/general/gettingstartedwithourcode)

[Rotating capture system with HDHomeRun](public/general/Rotating_capture_system_with_HDHomeRun)

[Subtitle standards around the world](public/general/Subtitle_standards_around_the_world)

[Regression system](public/gsoc/ccextractor_regression_testing)

[Online real time repository](public/gsoc/2016/abishek/subtitle_downloader)

[Subtitle Downloader (user)](public/gsoc/2016/abishek/subtitle_downloader)

[Subtitle Downloader (technical)](public/gsoc/Subtitle_Extractor_technical_docs)

[DVD Subtitles Technical Documentation GSoC'16](public/gsoc/DVD_Subtitles_Technical_Documentation_GSoC'16)

[Python Extension Module Technical Documentation GSoC'17](public/gsoc/Python_Extension_Module_Technical_Documentation_GSoC'17)

[Python Extension Module Compilation Documentation GSoC'17](public/gsoc/Python_Extension_Module_Compilation_Documentation_GSoC'17)

[Building CCExtractor inside a Vagrant box](public/general/vagrant)

[Activity Extractor (user)](public/codein/activity_extractor_user_docs)

[Activity Extractor (technical)](public/codein/activity_extractor_technical_docs)

# Google Code-in public/ pages

[Google Code-in 2016 task list](public/codein/Google_Code-in_2016_task_list)

[Google Code-in 2017 code-in for designers](public/codein/Google_Code-in_2017_code-in_for_designers)

[Google Code-in 2018](public/codein/google_code-in_2018)

[Google Code-in 2019 Welcome and introduction (start here)](https://gci2019.ccextractor.org)

[Google Code-in 2019 Rust](public/codein/google_code-in_2019/rust)

[Google Code-in 2019 Flutter](public/codein/google_code-in_2019/flutter)

[Google Code-in 2019/
FFmpeg](public/codein/google_code-in_2019/ffmpeg)

[Google Code-in 2019 Mastermind](public/codein/google_code-in_2019/mastermind)

# Summer of Code public/ pages

[Ideas page for Summer of Code 2021](public/gsoc/ideas_page_for_summer_of_code_2021)

[Ideas page for Summer of Code 2020](public/gsoc/ideas_page_for_summer_of_code_2020)

[Ideas page for Summer of Code 2019](public/gsoc/ideas_page_for_summer_of_code_2019)

[Ideas page for Summer of Code 2018](public/gsoc/ideas_page_for_summer_of_code_2018)

[Welcome to Summer of Code 2016](public/gsoc/welcome_to_summer_of_code_2016)

[Welcome to Summer of Code 2015](public/gsoc/welcome_to_summer_of_code_2015)

[Ccextractor Bug Hunt](public/gsoc/ccextractor_Bug_Hunt)

[Ccextractor Tasks](public/gsoc/ccextractor_Tasks)

[CCExtractor unassigned tasks (pick what you like)](public/gsoc/ccextractor_unassigned_tasks_pick_what_like)

[Blog Posts from our Students](public/blog_posts_our_students)

# Season of docs public/ pages

[Ideas page for Season of Docs 2019](public/gsoc/ideas_page_for_season_of_docs_2019)

[Ideas page for Season of Docs 2020](public/gsoc/ideas_page_for_season_of_docs_2020)

#### GSoC Students Project Report

 **2019**

[Amit - Poor Man's Rekognition](public/gsoc/2019/pymit)

[Bowen - PiPot](public/gsoc/2019/vertexc)

[Faiz - Poor Man's Rekognition ](public/gsoc/2019/faizkhan)

[Sarfaraz - Poor Man's Rekognition](public/gsoc/2019/sziraqui)

[Shivam Kumar Jha - Sample Platform](https://github.com/CCExtractor/sample-platform/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Athealphadollar)

 **2018**

[Archit - FabBits](public/gsoc/2018/achie27)

[Aaditya - Project Nephos](public/gsoc/2018/aaditya)

[Shivam Kumar Jha - Project Nephos](public/gsoc/2018/thealphadollar)

[Saurabh Shrivastava - CCExtractor Web - A web application for subtitle extraction through CCExtractor.](public/gsoc/2018/saurabh)

[Satyam Mittal - The sample platform / Continuous integration](public/gsoc/2018/satyam)

 **2017**

[Diptanshu - Python Extension Module (bindings) for CCExtractor](public/gsoc/2017/diptanshu)

[Saurabh - CCAligner - Word by Word Audio Subtitle Synchronisation](public/gsoc/2017/saurabh)

[Satyam - Sample platform improvements (Windows testing)](public/gsoc/2017/satyam)

 **2016**

[Willem - Sample platform iteration 2](public/gsoc/2016/willem)

[Abishek - Subtitle Extractor and CCExtractor improvements](public/gsoc/2016/abhishek/projects)

[Abhinav - Extract hard-coded subtitles from video streams](public/gsoc/2016/abhinav)

[Shruti - News shot classification](public/gsoc/2016/shruti)

[Rishabh - DVD Subtitle Extraction](public/gsoc/2016/rishabh)

[Ruslan - Real-time Repository and website](public/gsoc/2016/ruslan)

[Vasanth - Commercial detection](public/gsoc/2016/vasanth)

 **2015**

[Willem - Sample submission platform / CCExtractor improvements](public/gsoc/2015/willem)

[Nurendra - Sentiment Analysis / Realtime Translation with Google Translate/Apertium](public/gsoc/2015/nurendra)

# Summer of Code private pages

[People](docs/privategsoc/People)

[Technical Resources](docs/privategsoc/technical_resources)

[Planned absences](docs/privategsoc/Planned_absences)

# Contract work

[How to hire CCExtractor developers](public/general/how_to_hire_us)

# Miscellaneous resources about things that interest us

[Rust](public/general/rust_resources/rust)

[Flutter](public/general/flutter_resources/flutter)

[Preparing for interviews (Silicon Valley style )](public/general/misc/interview_preparation)

[Useful linux tools](public/general/misc/Useful_linux_tools)

[Articles about vim (the editor)](public/general/misc/vim) -->
