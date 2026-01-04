---
title: "Don't spoil the surprise."
---

**Time estimation**
175 hours

### Project Brief
This project is about a URL shortener with a twist. Yes, there's lots of those already. What is going to make ours special?

Well, this is not about creating URLs with billions of accesses. Instead, it's about writing URLs that are targeted to a small amount of users (say, your friends or family) but that don't give away what they are about based on the URL itself.

These are the features we want to add:

- URLs might require to sign-in with email. We don't want to have a complex auth system though, so if a URL requires sign-in, just send a confirmation link to that email so they can open it from there.
- URLs might have an expiration date (and a start date).
- URLs, when opened, might send a confirmation email to the creator (something like "wife opened your URL xxxx").

### Your Task

Implement the system. We want it to scale, but this is GSoC, so it's OK if you rely on some external system to do the heavy litfing for that. For example, you might use Firebase, or maybe a Cloudflare worker, etc.

Note that there needs to be some kind of UI to create and maintain URLs. So there is a frontend and a backend.

You can use any language you want.

*Important note! The project must be implemented from scratch. You can use libraries (if available and the license allows it), but you cannot fork existing tools and just make small modifications.*

### Qualification tasks

Take a look at [this page](/public/gsoc/takehome).
