 **Web interface for rclone\*\*

[rclone](https://rclone.org) is a fantastic cloud sync tool.
As good as it is though it lacks a web interface. This is of course not
a problem for geeks as rclone\'s popularity proves. However, it is a
problem for everyone else.

Your job is to create, possibly from scratch (feel free to look for
previous efforts), the ultimate rclone web interface that makes it
possible to do from it everything that should be doable of nothing that
shouldn\'t be doable.

What does that mean? It means that it should be possible to give access
to your web interface to a good faith operator (for example, your mom)
and not be possible for her to break anything unintentionally. This
implies that roles will be necessary, so it\'s possible to disable
certain operations to users even if we trust the users (\"as good
people\").

Of course, it also means that a bad actor shouldn\'t be able to use your
system as a way to break anything other than rclone\'s config, but
nothing else in the host system (for example, no exec, etc). So yes,
common sense :-)

GSoC is 3 months. This is quite a bit for time for a web interface to an
existing product with a healthy community, but we are quite ambitious
with the scope. It\'s not a \"basic\" web interface what we want to
contribute, but a complete one that becomes the reference one. Anything
and everything that rclone supports your web interface must support.

It must also work behind a reverse proxy, by accepting the standard
\--baseurl parameter. For example, suppose you use Flask or any stand
alone web framework that comes with its own web server and that your
interface is available at

<http://localhost:5000>

It must be possible to use a reverse proxy in a way that

<https://example.com/rclone>

can be mapped to <http://localhost:5000/rclone> and it works.

If you have experience with frameworks then you have probably seen it.
If not, do a bit of research. It\'s easy to implement, but you have to
implement it. This is an essential requirement - users often want to use
a separate web server to handle security, certificates and so on, and
they don\'t want to open a different port of each web interface.

###### Notes from Nick Craig-Wood

I have quite a few ideas on rclone web GUIs. I\'ve been gradually
fleshing out the API <https://rclone.org/rc/> so that it can control
rclone completely.

Rclone can also just run the remote control, serve files and open your
browser with

`   rclone rcd --rc-serve --rc-noauth --rc-files /path/to/files`

So that should be enough to build a remote control interface entirely
with web technologies. The \`\--rc-server\` means rclone can serve the
remote files too.

I made a very proof of concept react app (to show that the rc API was
usable by react), but that is as far as I got!

I stuck it on github here: <https://github.com/ncw/rcloneguiexperiment>

That is how I imagine development might go, but I could also imagine
bundling a version of rclone with the web GUI packaged in, so you could
just run \`rclone gui\` (or maybe even just double click) and get the
web interface.
