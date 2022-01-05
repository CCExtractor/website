---
title: "TaskWarrior."
---

[TaskWarrior](https://taskwarrior.org/) is a very nice command-line tool (yes, in 2022 — and I love it!) to manage task list.

It lets you keep your to-do locally but there’s also server support so you can sync between different computers, you can build scripts around it (since it’s command line based), it has a powerful filtering system, and more.

The one thing that it’s missing is a really good mobile app (there’s something, but it’s not really great, and it seems unmaintained).

So let’s fix that and leverage flutter to build a great interface for everybody.

How would a great TaskWarrior mobile app look like? Well, since it’s mobile, most likely the phone is not the primary or only device in which we will be using TaskWarrior, so [TaskServer](https://taskwarrior.org/docs/taskserver/why.html) support is essential. You don’t need to roll out your own (unless you want to). I use [this](https://freecinc.com/) one (which is free).

On top of that, we’d expect to be able to: 

- Add/edit/delete new tasks (of course) — Check the “[best practices](https://taskwarrior.org/docs/best-practices.html)” for what a task needs to have.
- Mark as started / completed / etc
- List existing tasks with [filters](https://taskwarrior.org/docs/filter.html)
- Move tasks between projects
- [Reports](https://taskwarrior.org/docs/report.html)

Because each person has his/her own workflow whoever tackles this project should be familiar with TaskWarrior before actually starting to work on it. It takes just a few minutes to install and configure, and a couple of days to actually love it if you use it :-)