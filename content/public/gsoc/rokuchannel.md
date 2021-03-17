# Roku reference channel

Roku is currently the most common media streamer. It's cheap and
neutral (it's not in any "fight"). Unfortunately, there aren't any
good open source channels, so if you want to start your own you have to
start from scratch. We want to fix that by creating the "reference"
source code for a generic channel. We will send a free Roku to our
student for development.

 **What makes a good Roku channel?**

For the playback itself Roku provides a basic system in which you have
the usual things such as play/store, fast-forward and so on. But
there's no default context menu, the progress bar is horrible and looks
really bad\...

Organization must be flexible and complete. Don't assume that things
belong in just one place. For example you may want to have a section of
Python tutorials, one of AI videos, one of videos in Spanish and so on.
Of course there's videos that belong in all three places.

The home page must be well designed and pleasant to the eye. It must be
easy to navigate.

Recommendations, last played, search, settings, etc, must be easy to
find and by themselves need to be good. Note that the recommendation
themselves belong in a backend and you don't need to implement the
actual backend: You need to implement the connection to such backend
though.

You also need to support "activation", which is the process in which
the user links his Roku to an account existing in the system, for
example to get access (case of a non-free channel) or custom
recomendations.

Your job is the Roku channel itself, but you must provide a backend
skeleton at the very least to support all the channel features.

 **Qualification tasks**

Take a look at [this
page](/public/gsoc/takehome).
