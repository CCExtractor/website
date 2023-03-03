---
title: "Beacon."
---

**Mentors**  
Primary mentor: Techno-Disaster (td on slack)  
Secondary mentor: Carlos (carlos.fernandez on slack)

Emergency Mentor for the Back-end: aadibajpai (who started the project as a student during GSoC 2021)  
Emergency Mentor for the Front-end:  Nishtha Bodani (who started the project as a student during GSoC 2021)  

aadibajpai and Nishtha expect to be busy during the summer (interships! our students do well!) but they are still around and can be contacted for emergencies. No promises on turn around time though.


**Time estimation**  
175 hours 


### Project Brief

Have you ever been to a city tour, or hike, or anything else in which a whole group is supposed to stay together by following a leader (who hopefully, knows where is going) but you don't know anyone else in the group and you can't really get distracted or you might lose the group?

Well, this is the first use case the beacon is supposed to solve!

### Your Job

This project was started in 2021 and a lot of work was also done in 2022.

During those 2 years we had a separate project for the backend and the frontend.

Because the backend is completed, this year the focus is on the frontend (i.e. flutter only). However, if the app requires backend changes, the contributor is expected to deal with them. So let's say this project is 85% Flutter, 15% the backend.

Read about the backend [here](https://ccextractor.org/public/gsoc/2022/beacon)

### Repos
[backend](https://github.com/CCExtractor/beacon-backend) (tech stack: NodeJS, MongoDB, GraphQL and AWS) 
[frontend](https://github.com/CCExtractor/beacon) (tech stack: flutter) repos. 

Your job is to write your proposal on any of the following based on your interest:

#### Frontend

  - *Feature:* Presently, one group can have one beacon only. This needs to be extended such that each group can have several beacons. *(Changes to be made in backend first, then frontend)*
  - *Feature:* Presently, beacons have a start and end time. This can be pre-scheduled and deactivated while they are active, or the beacon owner can just activate/deactivate on demand. *(Changes to be made in backend first, then frontend)*
  - *Feature:* A beacon needs to be transferred seamlessly from one device to another, typically because there's a change in whoever is leading the group.
  - As the foremost usecase of the application is to ease the travelling (or hiking) and the target users are travellers and hikers, so weak (or no) network connection is much expected. State needs to be maintained when network connectivity is lost and state of the Hike Screen shouldn't get affected when connectivity is lost.
  - *Architecture:* Maintain the MVVM architecture throughout the application
  - *Automatic Tests:* Write some unit tests for major classes and also widget testing for some components.
  - *Official Release:* Work on the android and ios release for the application, which will involve thorough testing along with signing the app and making a Github release for the same.
  - *Improve Documentation*
*Feel free to suggest any improvements or enhancements required apart from the above-mentioned ones.*

<br>

#### Backend
  
  The `serverless` framework is used for the Lambda deploys. The standalone version of the running API may be found at <https://beacon.aadibajpai.com> which is for development and testing, while the production Lambda is at <https://agw4au70ek.execute-api.us-east-1.amazonaws.com/dev/> and the ec2 instance is found at `shouldwealiastheiptosomething`.
  
  - We still need a proper install script for the backend that would help a developer to go from 0 to ready to use state without having to go into several places and do stuff manually.
  - Include tests
  - Implement required features (mentioned above)
  
<br>

### Very important

Deploy your own backend instance locally. You must be able to be self sufficient and understand both front-end and back-end. 

Test the Flutter app, fix whatever is broken (send PRs) if you find anything, and come up with work to do.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome).
