---
title: "Poor Man's Rekognition (IV)"
---

### Project Brief

[Amazon Rekognition](https://aws.amazon.com/rekognition/) is a (paid) service that is capable of extracting information and insights from images and videos
by identifying objects, text and activities, performing facial analysis, detecting inappropriate scenes, and much more using deep learning. In the last three
years, we did some work towards creating a free and open source version of the same by training a bunch of models and creating easy to use APIs.
This year we want to improve on the past work.

Domain: Artificial Intelligence, Deep Learning, Computer Vision

### Ideas for PMR-IV:

These are some of the things we wish to work on this year. All of these offer some rough starting points and you can pick one or more of them. You can also
come up with a completely different set of ideas of your own (but if you do so, please inform us about the same well in advance). 

- When compared to features offered by Rekognition, PMR lacks the ability to generate captions from images. This year we are planning to add to PMR this
ability which has been long due. For this, you will need to check [paperswithcode](https://paperswithcode.com/task/image-captioning) for some recent implementations of image captioning models, try a bunch
of them and ultimately select one on the basis of accuracy and inference time efficiency. The end goal for this task is to have a REST API capable of 
generating captions with the model served using Tensorflow serving like all other models.

- While a lot of work has gone into training deep learning models and creating easy to consume REST APIs, work on the frontend hasn't progresses since 2019 which 
you can find [here](https://github.com/npbit/RekoUI). It would be great if PMR, much like Rekognition can have a nice clean UI making it easier for end users 
to use. You can check the previous implementation and build upon it or take inspiration from Amazon's Rekognition and start afresh. The only point worth noting
is that we are not looking for anything fancy, the UI should be be simple and easy to use.

- Migrate CI from Travis to Github Actions : One less external service to worry about is almost always a great idea [This](https://docs.github.com/en/actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions) could be a great starting point.

- Deploy the service for remote use: Once the above two issues have been resolved

### Mentors

- Mentor : [Pulkit Mishra](https://github.com/PulkitMishra), @pulkit on slack

### Time estimation  
- 175 hours

### Relevant links

- [Source Code](https://github.com/CCExtractor/Rekognition/)

- [Changelog for 2020](https://github.com/CCExtractor/Rekognition/wiki/GSoC-2020---Work-Product-Submission)

- [Changelog for 2021](https://yashbhambhu.medium.com/gsoc21-poor-man-s-rekognition-end-log-c2359e9b270d)

