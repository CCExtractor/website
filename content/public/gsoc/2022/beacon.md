---
title: "Beacon."
---

**Mentors**  
Mentor for the Back-end: aadibajpai (who started the project as a student during GSoC 2021)  
Mentor for the Front-end:  Nishtha Bodani (who started the project as a student during GSoC 2021)  

**Time estimation**  
175 hours for the backend  
350 hours for the frontend, which could become 2 separate 175 hours projects since there's a number of parallelizable tasks.  

### Project Brief

Have you ever been to a city tour, or hike, or anything else in which a whole group is supposed to stay together by following a leader (who hopefully, knows where is going) but you don't know anyone else in the group and you can't really get distracted or you might lose the group?

Well, this is the first use case the beacon is supposed to solve!

### Your Job

This project was started last year and we have separate [backend](https://github.com/CCExtractor/beacon-backend) (tech stack: NodeJS, MongoDB, GraphQL and AWS) and [frontend](https://github.com/CCExtractor/beacon) (tech stack: flutter) repos. 

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

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome).
