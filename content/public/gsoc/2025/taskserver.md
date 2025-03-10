---
title: "TaskServer"
---

# **TaskServer (CCSync) - Making Task Synchronization Effortless**

## **Mentor**

**Mabud Alam**

- Slack Handle: [@mabud]
- Zulip Handle: [https://ccextractor.zulipchat.com/#user/856060](https://ccextractor.zulipchat.com/#user/856060)

## **Time Estimation**

**175 hours**

## **Project Overview**

[TaskWarrior](https://taskwarrior.org/) is a powerful command-line task management tool that enables users to manage tasks locally or sync them across multiple devices. It offers robust filtering, script integrations, and advanced task tracking via CLI.

[TaskServer](https://github.com/CCExtractor/ccsync) (also known as **CCSync**) is the core daemon that facilitates task synchronization between different TaskWarrior clients. **Last year**, we laid the foundation for **CCSync**, allowing it to work as a TaskServer with basic functionality.

✅ **This year, our primary focus is to make TaskServer production-ready** — ensuring that users can self-host it, use it as a public service, and integrate it smoothly with the existing TaskWarrior mobile app. We also want to significantly **improve performance, efficiency, and usability** based on the learnings from last year.

**We will stick to Golang as the base language** for the backend, but contributors are free to use any modern JavaScript framework/library (React.js, Vue.js, Next.js, etc.) for the frontend. Additionally, if needed, contributors can use any other language to build supporting services or tooling.

⚠ **A major part of your work will also involve helping us integrate CCSync (TaskServer) with our TaskWarrior mobile app**. This will ensure seamless cross-device sync and a rich user experience.

[ TaskWarrior](/public/gsoc/2025/taskwarrior)

---

## **Your Task**

Your task will be to **finalize TaskServer for production** by implementing key features such as:

- Authentication System
- Secure API Layer
- Self-hosting support
- Data synchronization across devices
- Integration with TaskWarrior mobile app
- Enhancing the Web UI

Additionally, **a lot of the groundwork was already done last year**. However, we believe there’s still **a lot of room for improvement** in terms of performance, architecture, and scalability. This year, we aim to:

- ✅ Improve the API architecture
- ✅ Build a production-grade Web UI
- ✅ Enhance sync stability across devices
- ✅ Optimize server performance and resource utilization
- ✅ Seamlessly integrate CCSync with our mobile app

Your role will be crucial in taking **CCSync from “experimental” to “production-ready”**.

---

## **Key Deliverables**

### **1. Authentication System (High Priority)**

- Implement a secure authentication system using:
  - **Google OAuth**
  - **Email & Password Login**
  - **JWT (JSON Web Tokens)** for session management.
- Ensure all TaskServer API endpoints are secured using the JWT token.
- Align authentication with TaskWarrior’s existing protocol for seamless integration.
- Encrypt user passwords and tokens using encryption.

---

### **2. Session Management**

- Implement user sessions with the ability to:
  - Generate TaskServer API Keys per session.
  - Sync Tokens that allow TaskWarrior clients to sync tasks.
  - Concurrent session management across multiple devices.
- Ensure session expiration and token refresh mechanisms.
- Prevent unauthorized access and implement rate-limiting on APIs.

---

### **3. Data Models (Task Data Structure)**

- Define robust data models for:
  - **Tasks** (ID, description, due date, priority, etc.)
  - **Projects** (Project-specific task lists)
  - **Tags** (Task categorization)
- Ensure complete compatibility with TaskWarrior’s current schema.
- Enable bi-directional sync between TaskWarrior clients and TaskServer.

---

### **4. Integration with TaskWarrior Mobile App (High Priority)**

✅ **This is one of the most critical aspects of the project.**

- Your role will also include ensuring TaskServer can sync with our TaskWarrior mobile app.
- Tasks created/modified on mobile should instantly sync with TaskServer.
- Changes made via CLI (TaskWarrior) should reflect in the app.
- Push notifications should be triggered for task updates.
- Implement background sync to ensure offline tasks sync automatically.

We expect contributors to have a clear understanding of the TaskWarrior mobile app's architecture and work towards **a seamless sync experience**.

---

### **5. Self-Hosting Capability (Public & Private Hosting)**

- Provide easy self-hosting options using **Docker**.
- Allow users to host their own TaskServer using a one-click setup.
- Ensure that CCExtractor can also host **CCSync** as a public service.
- Include environment variables and config files to customize deployment.
- Provide instructions to deploy on:
  - **Docker Compose**
  - **Kubernetes (Optional)**

---

### **6. Web UI for Task Management**

We also expect you to build a full-featured web UI for task management using:

- **React.js / Vue.js / Next.js** (your choice)
- **Tailwind CSS / Bootstrap** for styling.

The Web UI should include:

- ✅ **Dashboard** for task overview.
- ✅ **Bulk task editing**, filtering, and sorting.
- ✅ **Data Export/Import** options.
- ✅ **Session Management UI** (API Key, Tokens).
- ✅ Light/Dark Theme Support.
- ✅ Ability to close accounts or reset data.

---

### **7. API Layer (Production Ready)**

- Expose a clean and secure API layer using **GraphQL / REST**.
- Endpoints should cover:
  - User Authentication (Login, Signup, Session)
  - Task Management (CRUD Operations)
  - Task Sync Token Management
  - Account Management
- Implement proper error handling, input validation, and rate limiting.
- Provide detailed API documentation using **Swagger/OpenAPI**.

---

### **8. Testing and Quality Assurance**

- Write comprehensive **unit, integration, and end-to-end tests**.
- Implement a **CI/CD Pipeline** using GitHub Actions or Jenkins.
- Ensure 90%+ test coverage for the API layer.
- Add health-check endpoints and monitoring.

---

### **9. Cross-Device Sync (Critical)**

- Implement auto-sync across devices using sync tokens.
- Provide a retry mechanism for failed sync attempts.
- Sync tasks from:
  - ✅ TaskWarrior CLI
  - ✅ TaskWarrior Mobile App
  - ✅ TaskWarrior Web UI
- Ensure low-latency sync with minimal conflicts.

---

### **10. Infrastructure Setup**

- Containerize everything using **Docker**.
- Provide an easy-to-use deployment script.
- Integrate error logging using **Sentry** or similar.
- Include infrastructure as code (Terraform, Docker Compose, etc.).

---

### **11. Documentation (Must-Have)**

- Write clear documentation for:
  - ✅ API Endpoints
  - ✅ Deployment Setup (Docker/Self-hosted)
  - ✅ Web UI Usage
  - ✅ Mobile App Integration Guide
- Provide a simple “Getting Started” guide.

---

### **12. Bonus Features (Optional)**

- ✅ Enable **RSS Feeds** for upcoming tasks.
- ✅ Allow push notifications for task reminders.
- ✅ Provide Task Archive and History functionality.
- ✅ Support for legacy TaskWarrior 2.0.

---

## ✅ **Tech Stack (Preferred)**

We highly recommend sticking to the following stack:

**Backend:**

- ✅ **Golang (Mandatory)** – We have already built most of TaskServer in Go, so continuing with it is preferred.

**Frontend:**

- ✅ **React.js / Next.js / Vue.js** – Any modern JS framework for the Web UI.

**Styling:**

- ✅ **Tailwind CSS / Bootstrap**.

**Database:**

- ✅ **PostgreSQL / SQLite / Any ** (SQL is preferred , goal is to make it cost effective cause some users will have 100k tasks in their system).

**Infrastructure:**

- ✅ **Docker, Docker Compose** for deployment.
- ✅ Sentry for error tracking.

---

## 🚀 **Why Is This Project Important?**

We strongly believe that **CCSync (TaskServer)** can become the go-to solution for task synchronization across devices. By making it **production-ready**, we are empowering all the TaskWarrior users with:

- ✅ Seamless cross-device sync.
- ✅ Easy self-hosting.
- ✅ Web-based task management.
- ✅ Rich mobile app integration.

Your contribution will leave a lasting impact on the open-source productivity space.

---

## 📜 **Ready to Contribute?**

👉 **[Start the Qualification Task](https://ccextractor.org/gsoc/takehome)**

💬 **Questions?**  
Put your questions in Zulip.

**We’re super excited to see how you improve TaskServer. Let’s build something amazing together! 🚀**
