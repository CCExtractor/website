---
title: "Port and/or rewrite CEA-608 support to Rust"
---

708 is the standard for analog TV in the US and a few other countries.
Wait, don't go! It's upconverted so even if it's "old", it's the
minimum common denominator and present in all broadcasts.

Current status:

- Complete implementation in C. May have bugs, but it's been used in
production for ages. - Written early, meaning lots of things weren't
clear then and the code is messy. - Suspected to have some security
issues that Rust can help with.



Job:

- Replace the C code with Rust code.

We will provide hundreds of samples (for which you must complete
support, no exceptions) and access to a high speed linux server for you
to work with if needed. These samples are usually very large (hundreds
of megabytes each) so working locally may not be feasible for you if you
don't have a great internet connection.

For developers in India we have someone there with an external 2 TB
drive with a copy of all our samples. That drive goes from developer to
developer, so if needed we can get it shipped to you.

If you are not in India or in a country in which just downloading the
samples is the easy way, get in touch. We'll figure something out so
access to media is not a problem.

This is a high value task and we'd love to have it done, but in order
to qualify you need to fix some of the existing bugs.

Also part of this idea:

<https://github.com/CCExtractor/ccextractor/issues/733>

Which is about implementing .mcc support, which as the GitHub ticket
says complements 708 very well.

Getting started:

The wikipedia page on 608 This is quite good actually. It's not a
complete description of the standard, but it's quite useful to
understand what 608 is about.

How to get started Best thing you can do is download a few samples
(check our TV samples page) and try to solve some of the CEA-608 issues
we have listed on GitHub.

This is also the best way to get accepted into GSoC.

 **Qualification tasks**

Take a look at [this page](/public/gsoc/takehome).
    