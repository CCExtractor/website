###### Roku reference channel(II)

Roku is currently the most common media streamer. It\'s cheap and
neutral (it\'s not in any "fight"). Unfortunately, there aren\'t any
good open source channels. We started working on one last year, but we
didn\'t get to a status of \"awesomeness\". We\'d like to continue
working on that.

We will send a free Roku to our student for development.

Below is the description from last year. Some things weren\'t complete.
When you load the channel it doesn\'t have the polished view that other
channels have (for example Netflix has a fantastic layout in which no
screen is wasted).

An important thing is the progress bar. Roku\'s default is horrible, and
a channel that uses it screams \"my developers didn\'t care\". So a
mandatory thing this year is a custom progress bar.

 **2020 description\*\*

<!-- -->

 **What makes a good Roku channel?\*\*

For the playback itself Roku provides a basic system in which you have
the usual things such as play/store, fast-forward and so on. But
there\'s no default context menu, the progress bar is horrible and looks
really bad\...

Organization must be flexible and complete. Don\'t assume that things
belong in just one place. For example you may want to have a section of
Python tutorials, one of AI videos, one of videos in Spanish and so on.
Of course there\'s videos that belong in all three places.

The home page must be well designed and pleasant to the eye. It must be
easy to navigate.

Recommendations, last played, search, settings, etc, must be easy to
find and by themselves need to be good. Note that the recommendation
themselves belong in a backend and you don\'t need to implement the
actual backend: You need to implement the connection to such backend
though.

You also need to support \"activation\", which is the process in which
the user links his Roku to an account existing in the system, for
example to get access (case of a non-free channel) or custom
recomendations.

Your job is the Roku channel itself, but you must provide a backend
skeleton at the very least to support all the channel features.

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public:gsoc:takehome).
