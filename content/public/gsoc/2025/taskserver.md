---
title: "TaskServer"
---

## Mentor
**Mabud Alam** (Slack handle: @mabud)(Zulip Handle : https://ccextractor.zulipchat.com/#user/856060)

## Time Estimation
**175 hours**

## Project Brief
[TaskWarrior](https://taskwarrior.org/) is a powerful command-line tool for task management. It offers task synchronization across devices, script integration via CLI, and robust filtering capabilities.

[TaskServer](https://github.com/CCExtractor/ccsync) is a daemon that facilitates task sharing across different client applications, primarily TaskWarrior.

Last year, we worked on CCSync (TaskServer), and this year, our goal is to make it production-ready and ship it to users.

## Your task
### Platform Requirements
1. **Authentication System**
   - Sign up/login via Google, Email, or Password
   - Secure storage for user passwords and tokens
   - JWT-based authentication
   - Compliance with the original TaskWarrior protocol for TaskServer connection
   - Support for all existing TaskWarrior clients, including our app (Priority)

2. **User Sessions**
   - Credential and token association with sessions
   - TaskServer API key and sync token generation per session
   - Concurrent session management for task updates
   - Full compatibility with existing TaskWarrior clients

3. **Data Models**
   - Define models for tasks, projects, and tags compatible with TaskWarrior
   - Enable bidirectional sync with TaskServer
   - Include all missing data fields

4. **Self-Hosting Capability**
   - Enable self-hosting options
   - Ensure CCExtractor can host CCSync as a public service

5. **Web UI**
   - Develop a frontend using React/Vue/Angular
   - Use Tailwind/Bootstrap for styling
   - Responsive design for mobile and desktop
   - Include dashboards for task statuses and statistics
   - Features:
     - Bulk task editing
     - Undo/Redo
     - Filtering, sorting, and pagination for large datasets
     - Data reset and export options
     - Account closure feature
     - Theme customization

6. **Task Listings**
   - Paginated display of synced tasks
   - Sorting, filtering, and search functionality
   - Quick task overview

7. **API Layer**
   - GraphQL/REST APIs for CRUD operations
   - Authentication and session management APIs
   - Error handling, input validation, and rate limiting
   - Caching
   - Public API with documentation

8. **Testing**
   - Unit, integration, and end-to-end testing
   - CI/CD pipeline with automated testing

9. **Cross-Device Sync**
   - Auto-sync changes across user devices
   - Push notifications for updates (TaskWarrior Flutter App)

10. **Infrastructure**
    - Docker containerization
    - Logging with tools like Sentry
    - Security best practices

11. **Documentation**
    - End-user setup guides
    - Technical documentation (architecture, APIs, testing, etc.)

12. **RSS Feeds**
    - Enable/disable RSS feed via POST request
    - Public RSS URL for upcoming tasks

13. **Ease of Development**
    - Simplify setup with automated scripts for environment configuration
    - Provide scripts to pull necessary Docker containers and create env files

### Extended Task
- Support for legacy TaskWarrior 2.0 and TaskServer 2.0


## Tech Stack
You are free to choose any backend and frontend technologies, such as:
- Backend: Go, Flask, Django, FastAPI
- Frontend: React, Next.js, Vue
- Styling: Tailwind, Bootstrap
- Database: SQL-based solutions

## Qualification Tasks
Refer to [this page](/public/gsoc/takehome) for details.

## Useful Resources
- [inthe.am](https://github.com/coddingtonbear/inthe.am) - Free sync server
- [Freecinc fork](https://gitlab.com/wt0f/taskd) - Self-hosted open-source server
- [Golang TaskServer](https://github.com/szaffarano/gotas)
- [Wingtask Stack](https://orangesodium.cc/wingtask/2022/06/02/wingtask-2022-tech-stack.html)
- [Wingtask](https://wingtask.com/)

