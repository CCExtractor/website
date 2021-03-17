---
title: "Python Extension Module (bindings) for CCExtractor"
---

*Developed under Google Summer of Code, 2017 with CCExtractor Development By [Diptanshu Jamgade](https://github.com/Diptanshu8)*

------------------------------------------------------------------------

### Introduction

CCExtractor is a software written in C language. The main aim of this
project was to generate the python extension module for CCExtractor
which would then help Python developers to extend the applications of
CCExtractor in Python.

The main ideology of the module was to extract the captions using
CCExtractor and parse the extracted captions to Python for processing
them. The module was desired to be structured in such a way that the
captions arrive in Python as soon as they are extracted by CCExtractor.
Thus, the captions could be processed in real-time via Python rather
than waiting for the extraction to finish. Also, the extension module is
expected to be silent, i.e. not outputting any STDOUT information.

The module was needed to be silent in terms of all the output generated
by CCExtractor. The output files were to be generated via Python and not
via CCExtractor as the module's prime duty was to extract the captions
in CCExtractor and parse the extracted captions to Python for
processing.

------------------------------------------------------------------------

### Project Related Links

 * Project Repository on GitHub [CCExtractor](https://github.com/CCExtractor/ccextractor)
 * Project Documentation [Documentation](/public/gsoc/python_extension_module_technical_documentation_gsoc_17)
 * Project Proposal for GSOC 2017 [here](https://old.ccextractor.org/_media/gsoc:gsoc2017:media:gsoc_2017_proposal_ccextractor_modified.pdf)
 * Official GSOC Project link [Project](https://summerofcode.withgoogle.com/projects/#6123526338641920)
 * My blog [Blog](https://diptanshujamgade.wordpress.com/)
 * Mentor [@cfsmp3](https://github.com/cfsmp3)

------------------------------------------------------------------------

### Installation

For installing the Python extension module, the user needs to make sure
that the user has compiled/installed all the dependencies for
CCExtractor ([mentioned here](https://github.com/CCExtractor/ccextractor#debianubuntu)).

After the user has compiled/installed all the dependencies for
CCExtractor, for installing Python extension module, the user needs to
install two dependencies:

 - SWIG [swig](http://www.swig.org/download.html)
 - Python-dev package [ubuntu](https://packages.ubuntu.com/trusty/python-dev)
   For other operating systems, the user has to install //python-dev package// as mentioned in the corresponding  system's documentation.
   

After the user has compiled/installed the additional dependencies for
Python Extension module, the user can install the extension module by

```
 sudo pip install ccextractor
             OR
 pip install ccextractor --user
```

(the above method has been successfully tested on unbuntu16.04 - Xenial)

In case of virtual environments, the user can install the Python
Extension module by

`pip install ccextractor`
 

After the user has successfully installed the extension module, the user
can test the module as per the [test script](https://github.com/CCExtractor/ccextractor/blob/master/api/api_testing.py)
which is used for processing a single sample. However, if the user
desires to process all the samples in a particular directory then the
user can use this [test script](https://github.com/CCExtractor/ccextractor/blob/master/api/recursive_tester.py).

NOTE: *In case the installation fails, make sure you have updated setuptools, pip and also installed/compiled all the dependencies mentioned in this section.*

------------------------------------------------------------------------

### Technical Documentation

#### Architectural Documentation

The overall documentation for the extension module as to how has the
module architecture designed and how the further contributors can
continue development has been done in this
[documentation](/public/gsoc/python_extension_module_technical_documentation_gsoc_17).

#### Dependency Documentation

For the contributors who want to either just install the dependencies
for the extension module
[documentation](/public/gsoc/python_extension_module_compilation_documentation_gsoc_17)
would help them understand the dependency compilation.

#### Contributor Documentation

For contributors who wish to understand how exactly is the CCExtractor
Extension module compiled and installed on a system, this
[documentaion](/public/gsoc/python_extension_module_compilation_documentation_gsoc_17)
contains relevant information.

------------------------------------------------------------------------

### Contributions [PRs/Commits]

All the **commits made by me to the CCExtractor repository** could
be found
[here](https://github.com/CCExtractor/ccextractor/commits/master?author=Diptanshu8).

All the **pull requests by me to the CCExtractor repository** could
be found
[here](https://github.com/CCExtractor/ccextractor/pulls?q=is%3Apr+author%3ADiptanshu8+is%3Aclosed).

------------------------------------------------------------------------

### Bugs Tracked

 * I have worked on solving [issue #705](https://github.com/CCExtractor/ccextractor/issues/705) and submitted a [PR(merged)](https://github.com/CCExtractor/ccextractor/pull/721), thus solving the issue.
 * I have also worked on [issue #304](https://github.com/CCExtractor/ccextractor/issues/304). I analyzed the issue's sample and found some errors in the way the sample information was encoded. A detailed discussion is present at our [Slack](https://rhccgsoc15.slack.com) under channel [bug304](https://rhccgsoc15.slack.com/messages/C5QJXUSDU).

------------------------------------------------------------------------

### GSOC 2017 Experience

The overall GSOC experience was really wonderful and the entire team
here at CCExtractor was really helpful. The project was really
challenging and helped me learn a great deal of basic as well as
advanced concepts for software development.

The project included additions in CCExtractor source code as well as
additions in Python extension module part to continue the processing of
captions via Python. Thus, the project was really helpful in exploring
concepts of C as well as Python. In addition to these, I also learnt a
number of technologies such as SWIG, Python C-API, GCC- compiler basics
as well as advanced topics, GDB, etc.

Moreover, this project helped me get a much deeper knowledge of Open
Source Software Development.

------------------------------------------------------------------------

# About me

I am final year student studying at IIT Kharagpur, India. I would
definitely be an active contributor not only for CCExtractor extension
module but also the Sample-Platform as well as CCExtractor.

*Email address* :
[diptanshuj@gmail.com](diptanshuj@gmail.com)

*Blog* : <https://diptanshujamgade.wordpress.com>

*GitHub profile*: <https://github.com/Diptanshu8>

*Slack* :
[skrill](https://rhccgsoc15.slack.com/team/skrill)

------------------------------------------------------------------------

### Thank you.
