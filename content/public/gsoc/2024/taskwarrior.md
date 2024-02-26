---
title: "TaskWarrior."
---

### Mentor:

Mabud Alam (Slack handle: @mabud). Mabud was the contributor for GSoC '23 for this project and is now going to mentor it during GSoC . He made contributions to the TaskWarrior Project.

### Time estimation

175 hours

### Project Repo

[TaskWarrior](https://github.com/CCExtractor/taskwarrior-flutter)

### Project Brief

[TaskWarrior](https://taskwarrior.org/) is a powerful command-line tool for managing task lists. With local and server support, TaskWarrior facilitates task synchronization across multiple devices, enables script integration due to its command-line interface, offers robust filtering capabilities, and more.

This project aims to develop a comprehensive application for TaskWarrior, providing seamless task management across all platforms, tailored to individual workflow preferences. Familiarity with TaskWarrior is essential before embarking on this project, as its usage typically evolves from a quick installation and configuration to becoming an indispensable tool.

### TaskServer Proposal

This year we want to develop our own taskserver platform similar to inthe. am , freecinc and wingtask. If you want to work on that then check [this page](/public/gsoc/2024/taskserver)

### Status

Last year taskserver , home widget and alot of UI was implemented This year we want to improve it and add new features.The first version of the app was launched last year in PlayStore : https://play.google.com/store/apps/details?id=com.ccextractor.taskwarriorflutter .

This year we intend to add a few more features and then release it to the app store and Playstore.

Here's some of the things we want to add:

Sure, here's an expanded and refined version of the project objectives:

1. Develop an iOS home widget for TaskWarrior, providing users with quick access to their tasks directly from the iOS home screen.
2. Conduct comprehensive unit testing and widget testing to ensure the functionality and stability of the application across various scenarios and devices.
3. Optimize the application for desktop support, leveraging recent macOS compatibility updates to provide a seamless user experience on desktop platforms.
4. Migrate the codebase to a more robust state management system such as Bloc, Riverpod, Provider, or GetX, enhancing code maintainability and scalability.
5. Further optimize the application for desktop devices, ensuring that the user interface adapts smoothly to different screen sizes and resolutions.
6. Ensure that the application remains responsive and performs well on all devices, including mobile phones, tablets, and desktop computers.
7. Release early builds for macOS, Windows, and Linux platforms, allowing users to test and provide feedback on different operating systems.
8. Implement multiple language support to make the application accessible to users worldwide, enhancing usability and inclusivity.
9. Include a comprehensive feature tour covering all aspects of the application, beyond the home and drawer sections, to guide users through its functionality and features.
10. Incorporate support for TaskServer features, enabling seamless integration with third-party services such as JIRA, DOCS, and others, to enhance productivity and workflow management.We are going to develop our own TaskServer that can be integrated.
11. Conduct thorough testing of the application on iOS devices and prepare it for release on the App Store, ensuring compliance with Apple's guidelines and standards.
12. Implement continuous integration and continuous deployment (CI/CD) pipelines for Windows, Linux, and macOS platforms, automating the build, testing, and deployment processes to streamline development workflows.
13. Optionally, integrate Fastlane to further automate and simplify the deployment process, providing developers with tools to manage and deploy releases efficiently.

### Features we don't care about

We don't want a lot of bloat. There are alot of task manager apps for different platforms so we want the original taskwarrior to have a GUI that works on all devices

### Your Job

Add most of all of the features listed, and come up with new ones in the proposal.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome). Any Flutter task will do.

### Useful resources

[inthe.am - A free server you can use](https://github.com/coddingtonbear/inthe.am)  
[A fork of freeinc, a free server that no longer exists but you can run this fork locally](https://gitlab.com/wt0f/taskd)
