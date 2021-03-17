---
title: "Poor Man's Rekognition (III)"
---

[Amazon Rekognition](https://aws.amazon.com/rekognition/) is
a (paid) service that is able to identify objects, people, text, scenes,
and activities in a picture. We want to produce a free alternative.

Description: Rekognition is Amazon's (paid) service capable of
identifying objects, text and activities, performing facial analysis and
recognition, detecting the frequency of objects or an inappropriate
scene, and much more using deep learning. Poor Man's Rekognition is an
open-source version of the commercial service and is currently able to
do almost everything that Amazon Rekognition does.

Ideas for PMR-III:

Fix issues with docker and make it run seamlessly on all platforms: The
project as of now runs specifically on Unix based distros. The docker
image is broken and needs to be fixed. The end goal is to have a
containerized version of the project that can run on all platforms.

Decrease latency of API response by reducing the size of some of the
large models (or by some other means): Some of the models used in PMR
are extremely large in size and thus take a lot of time to get loaded
and give predictions. The memory consumption is also extremely high. We
need to decrease both the response time as well as memory consumption.
One way of doing this can be using models with smaller size. Other
methods can be explored.

Deploy the service for remote use: Once the above two issues have been
resolved

Domain: Artificial Intelligence, Deep Learning, Computer Vision

 **Relevant links**

[Source Code](https://github.com/npbit/Rekognition)

[Setting Up the Project and Brief Overview](https://github.com/npbit/Rekognition/wiki/GSoC-2020---Work-Product-Submission)

 **In detail blogs**

- [GSoC Chronicles --- Only Time will Tell](https://medium.com/@pulkitmishra/gsoc-chronicles-only-time-will-tell-51966e55fa27)
- [<https://medium.com/@pulkitmishra/gsoc-chronicles-best-kept-code-4893823d0f12>](https://medium.com/@pulkitmishra/gsoc-chronicles-best-kept-code-4893823d0f12)
- [GSoC Chronicles --- commit the CRNN cometh the Text](https://medium.com/@pulkitmishra/gsoc-chronicles-commit-the-crnn-cometh-the-text-3eade47cf0c6)
- [<https://medium.com/@pulkitmishra/gsoc-chronicles-mightier-than-ssd-b89be236d852> ](https://medium.com/@pulkitmishra/gsoc-chronicles-mightier-than-ssd-b89be236d852)
