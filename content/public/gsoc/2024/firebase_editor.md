---
title: "Firebase editor."
---

### Mentor:

Carlos for functional questions, flutter mentors for well, flutter stuff :-)

### Time estimation

175 hours

### Project Repo

N/A (project from scratch)

### Project Brief

Firebase is a nice schemaless database, very popular for small projects.

I haven't seen a generic editor of firebase tables that is generic; of course it's easy to create a project that uses Firebase and has its own full UI for whatever the project is about, but this is not what we want to do.

Instead, let's build a relatively simple app that can edit any firebase table.

This is what it should look like:

- Allow doing the usual CRUD operations (create, update, delete) for a table, regardless of the structure. Of course, the structure needs to be defined somewhere. Since firebase is schemaless you will have to come up with a good way to define "schema inside schemaless".

- We'll have to be able to define string fields (one line), string fields (multi line), as well as selects, and checkboxes.

- When a record is inserted or edited in the database *externally* (of course we're creating an editor, but the point is that there will be other systems interacting with that DB), allow sending a notification to the user so he/she can then make changes to the new record.

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome). Any Flutter task will do.
