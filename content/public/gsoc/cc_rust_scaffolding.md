\~\~META: title = Google Summer of Code 2021 - CCExtractor Rust
scaffolding \~\~

 **Initial Rust scaffolding**

We want to port/rewrite CCExtractor to Rust. There are a a few reasons
for it, some purely practical, and some philosophical:

\- Rust is exciting, and this work is quite motivating for the team that
has been working on it for a long time. - Contribute to improve the
situation of video support on the Rust ecosystem. - Our code has
grown from "I don't know what I'm doing" to "look ma, I support a
million things now" and it shows. We can use the rewrite anyway. -
We suspect we have some exploitable code around. - We want a new
generation of engineers to join us.

So with this project, everything starts. What we expect to get from it?
Well, it's 175 hours or so of work, which depending on the point of
view is a long or not so much. We think this is realistic:

\- Change the build system to use cargo (of course). - Command line
parsing. - Help. - I/O.

Note that we don't want a line-by-line port! Cleaning up and
refactoring is important as part as this work.

The C code you need to understand is easy to read (no magic) and you
don't need any video knowledge. You do need to know some Rust, but
nothing too esoteric, so if you have some Rust experience that's
probably enough to get started.

This project will be mentored by Carlos Fernandez who will work with you
closely.
