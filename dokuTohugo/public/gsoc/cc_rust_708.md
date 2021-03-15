\~\~META: title = Google Summer of Code 2021 - Complete 708 support \~\~

 **Port and/or rewrite CEA-708 support to Rust\*\*

708 is the standard for digital TV in the US and a few other countries.
We have preliminary support in C. We\'d like to port it to Rust, and
while we are at it complete the known missing bits.

This means:

a\) Perfect timing.\\\\ b) Perfect rendering, limited only by the output
format.\\\\ c) Full support to all languages for which samples are
available.\\\\

We will provide hundreds of samples (for which you must complete
support, no exceptions) and access to a high speed linux server for you
to work with if needed. These samples are usually very large (hundreds
of megabytes each) so working locally may not be feasible for you if you
don\'t have a great internet connection.

For developers in India we have someone there with an external 2 TB
drive with a copy of all our samples. That drive goes from developer to
developer, so if needed we can get it shipped to you.

If you are not in India or in a country in which just downloading the
samples is the easy way, get in touch. We\'ll figure something out so
access to media is not a problem.

This is a high value task and we\'d love to have it done, but in order
to qualify you need to fix some of the existing bugs.

Also part of this idea:\\\\

<https://github.com/CCExtractor/ccextractor/issues/733>

Which is about implementing .mcc support, which as the GitHub ticket
says complements 708 very well.

Getting started:

[The wikipedia page on
708](https://en.wikipedia.org/wiki/CEA-708) This is quite
good actually. It\'s not a complete description of the standard, but
it\'s quite useful to understand what 708 is about.\\\\

\_\_\*\*Related GitHub Issues\*\*\_\_\\\\ [Ver 0.85 CEA-708: 16 bit
charset (Korean) Not
support](https://github.com/CCExtractor/ccextractor/issues/690)\\\\
[(problem extract Korean
subtitles](https://github.com/CCExtractor/ccextractor/issues/677)\\\\
\[\[<https://github.com/CCExtractor/ccextractor/issues/646>\|\[CEA-708\]
Missing the last subtitle\]\]\\\\
\[\[<https://github.com/CCExtractor/ccextractor/issues/641>\|\[CEA-708\]
\[Timing\] Catchable bug with timing\]\]\\\\ [Finish CEA-708
support](https://github.com/CCExtractor/ccextractor/issues/3)

\_\_\*\*Mentors\*\*\_\_\\\\ Carlos Fernandez Sanz (\@carlos.fernandez on
slack). Carlos wrote the original CEA-708 code.\\\\ Evgeny Shulgin
(\@izaron on slack). Evgeny is a 2016 Code-In Winner with CCExtractor,
and worked a lot on CEA-708.\\\\

\_\_\*\*How to get started\*\*\_\_\\\\ Best thing you can do is download
a few samples ([check our TV samples
page](public/general/tvsamples)) and try to solve some of the
CEA-708 issues we have listed on GitHub.

This is also the best way to get accepted into GSoC.

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
