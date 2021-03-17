# FFmpeg + Rust: Code builder

 **Why is this a CCExtractor project and not an FFmpeg
        project?**

Because the FFmpeg team doesn't need it :-) We do.

 **Introduction**

FFmpeg is, of course, everybody's go-to tool when it comes to video
manipulation: Resize, apply filters, convert to a different encoding or
container, etc, it does it all. They even participate in GSoC every
year!

If you read their documentation, you will see that FFmpeg, the
command-line tool, is mostly a "shell" that actually builds a graph
that then runs in their libraries.

For developers that need to use FFmpeg to do "something" specific with
video, the usual way to do it it just by executing FFmpeg with the right
parameters (using spawn, exec, or whatever it's called in their
language of choice), wait for it to finish, and then do something with
the result.

Often that's good enough, but many times it's not: You can't easily
get progress, you absolutely can't do anything in the middle of the
process and so on.

 **Your job**

Your job here is to build a "source code generator" that given a
FFmpeg command line is able to write the source code of a program,
preferably in Rust, that executes the graph using FFmpeg's libraries -
but this is not about spawning FFmpeg! For example, given a command line
like this:

`ffmpeg -i input.mkv -vf scale=320:240 output.mp4`

You can see that it's going to read the file "input.mkv", resize it
to 320x240, and write it as output.mp4, so there's a resize filter
there and also a container conversion.

What we want to get is a program that does that for exactly those files
and those tasks, and it needs to use FFmpeg's low level libraries so
it's possible to add code into the program that does whatever the
developer needs to do: For example, they might want to modify each frame
to add something that is not supported by an FFmpeg filter - may be
something that needs to be fetched for an external source.

Your output program needs to be compilable (of course) and do exactly
the same thing as FFmpeg would do if called with the specified
parameters.

Of course, you are expected to dig into how FFmpeg does it and build
from there.

We prefer Rust but C would also be OK. However, if you already know C or
C++ learning Rust is not too hard and it's totally worth it.

 **Qualification tasks**

Take a look at [this page](/public/gsoc/takehome).
