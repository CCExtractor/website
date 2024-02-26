---
title: "TaskServer"
---

### Mentor:

Mabud Alam (Slack handle: @mabud). Mabud was the contributor for GSoC '23 for TaskWarrior project and is now going to mentor this during GSoC .

### Time estimation

350 hours

### Project Brief

[TaskWarrior](https://taskwarrior.org/) is a powerful command-line tool for managing task lists. With local and server support, TaskWarrior facilitates task synchronization across multiple devices, enables script integration due to its command-line interface, offers robust filtering capabilities, and more.

[TaskServer](https://github.com/GothenburgBitFactory/taskserver) is a daemon or service that will allow you to share tasks among different client applications, primarily Taskwarrior.

This project aims to develop a platform for syncing tasks with TaskServer, providing an alternative to now defunct services like inthe.am and freecinc.

### Your Job

The platform should have:

1. **Authentication System**
   - Allow sign up/login with Google, Email or Password credentials
   - Securely store user passwords and tokens
   - Issue JWT tokens on successful login for authentication
2. **User Sessions**
   - Associate credentials and tokens with user sessions
   - Allow users to generate TaskServer API keys and sync tokens per session
   - Manage concurrent sessions - update tasks across sessions
3. **Data Models**
   - Define data models for tasks, projects, tags etc. that are compatible with TaskWarrior
   - Enable bidirectional sync with TaskServer using similar data structures
4. **Web UI**
   - Develop a frontend in React/Vue/Angular with components for authentication, task listings, editing etc.
   - Use Tailwind/Bootstrap for styling and layout
   - Should be responsive for mobile and desktop access
   - Include dashboards and views for task statuses and statistics
5. **Task Listings**
   - Display paginated list of user's synced tasks
   - Support sorting, filtering and search on tasks
   - Surface key details in list view for quick scanning
6. **API Layer**
   - GraphQL/REST APIs for create, read, update, delete on tasks
   - Additional APIs for authentication, user sessions etc.
   - Error handling, input validation and rate limiting
7. **Testing**
   - Unit, integration and e2e tests for critical components
   - CI/CD pipeline with automated testing on commits and deployments
8. **Cross-Device Sync**
   - Changes to tasks, projects, tags on one device should sync automatically to user's other registered devices
   - Enable push notifications for sync updates if possible
9. **Infrastructure**
   - Containerize application with Docker for simplified deployments
   - Configure logging with tools like Sentry
   - Follow security best practices
10. **Documentation**
    - End user docs & setup guides for set up.
    - Technical docs covering architecture, APIs, testing guidelines etc.

Extended Work (optional) :

1. RSS feeds : You can enable or disable the RSS feed showing your upcoming tasks by sending a POST request.
2. Email integration : You can configure which e-mail addresses are allowed to send new tasks to taskserver.
3. Jira Integration.

### Tech Stack

You are free to use any backend and frontend techstacks.
Like : Go,Flask,Django,FastApi,React,Nextjs,Tailwind,SQL.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome). Any Flutter task will do.

### Useful Resources

- [inthe.am](https://github.com/coddingtonbear/inthe.am) - Free sync server
- [Freecinc fork](https://gitlab.com/wt0f/taskd) - Self-hosted open source server
- [Golang TaskServer](https://github.com/szaffarano/gotas)
- [Wingtask Stack](https://orangesodium.cc/wingtask/2022/06/02/wingtask-2022-tech-stack.html)
- [Wingtask](https://wingtask.com/)
