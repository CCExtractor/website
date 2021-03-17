##### Poor's man Rekognition

[Amazon Rekognition](https://aws.amazon.com/rekognition/) is
a (paid) service that is able to identify objects, people, text, scenes,
and activities in a picture. We want to produce a free alternative.

While being able to do everything Rekognition does over the course of a
summer is unrealistic, we think we should be able to kickstart the
effort and get to a point where the project will be usable and attract
more developers to the effort.

Let's start with faces, and this is the actual goal: Given a set of
properly tagged people (suppose for example, a number of celebrities),
create an API that can be used to identify such people in other images.

 **At a minimum**

\- Your code must be able to run either locally or in a cloud
service - The API needs to be callable from any language (so REST,
or something similar) - You need to provide a native binding to a
language of your choice - You will need to provide the sample images
yourself (can be taken from the internet) - For any picture, it will
identify the faces there, and for each face give a list of the most
likely people from the known set in order of likeness - Must be able
to learn from user feedback

 **Video processing**

Building on the previous work, figure out a way to analyze a video and
determine who is in each scene. For example if you detect a known actor
in let's say, 3:05, and the scene runs until 3:17, then that actor is
there from 3:05 to 3:17. Generate a text file (any format) that lists
who is in each scene. If possible, don't brute force.

 **Notes**

\- You can use any open source library to help with the project as long
as it doesn't prevent from meeting the full scope

 **How to get started**

Since this is a new project we don't have issues open on it. A good way
to start, and what other students are doing, is to write a working proof
of concept that shows you are capable to doing the full thing. And then
come up with ideas and a plan to implement them during the summer.

 **Mentor**

Johannes Von Lochter \<johannes.lochter at facens d-o-t br\> (look
him up)
