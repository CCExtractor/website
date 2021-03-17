\~\~META: title = Google Summer of Code 2017 ideas page \~\~

# Google Summer of Code 2017

\_\_** About us **\_\_

We are a small org, which means that your contribution is expected to
have a very large impact. It's not going to mean a 0.5% improvement on
a big project - it's supposed to be like 10% on a medium size one. So
please come only if you like the challenge and feel like that you are
ready to have a serious responsibility.

We have -we think- statistically amazing continuity in the team: Most
GSoC students from all the past years are still involved, even if they
are no longer eligible as students. They still contribute code, and they
mentor both in GSoC and code-in. So while you don't have to do it, we
really prefer students that consider their GSoC participation as a
starting point of joining a developer community, not a summer gig.

We have mentors in North America, Europe, Asia and Australia. Time zones
are never a problem. We hang out in a [slack
channel](http://www.ccextractor.org/doku.php?id=private/gsoc/slack_a_communications_tools)
to which everyone is welcome. If you get accepted we expect to see you
there often. Even if you don't need to talk to your mentor, please try
to be around when working.

\_\_** About what we use **\_\_

The core tool that names the organization (CCExtractor) is a
command-line program written in **C** (not C++). The current
Windows GUI is written in **C\#** but one of the ideas is about
replacing it. The testing tool we use to run regression tests is
written in **Python**. The prototype real time subtitle website
is written in **NodeJS**. For totally new things you can use
whatever tool you feel is best for the job.

\_\_** About the projects and getting accepted **\_\_

Qualification: In order to qualify you need to achieve a minimum of 7
points. You get points:

1\) By solving issues in our [GitHub issue tracker
(CCExtractor)](https://github.com/CCExtractor/ccextractor/issues),
[Sample platform
issues](https://github.com/canihavesomecoffee/sample-platform/issues)
(default 1 points per issue unless specified somewhere in the issue
page). Most issues have an explicit number of points that you can find
in a comment. 2) By joining the community in slack. You can invite
yourself [here](public/general/support). (1 point) 3) If
you are a former [Code-in
finalist](https://developers.google.com/open-source/gci/) you
start with 1 point. If you were a winner, you start with 2 points. Note
that there are just a few developers that meet this, so don't be
discouraged if you aren't one of them. Almost no one is, but we'd love
to hear from those that are. 4) By sending us a TV sample that has
something we don't support. It doesn't have to be from your own
country (since hopefully, we already support it), but if it is, so much
the better. This is probably hard to get, since we already got all the
low hanging fruit. But if your local TV has subtitles you can turn on
and off, we'd love a recording.

Getting 7 points doesn't guarantee that you will be accepted as that
depends on the quality of your proposal (which also needs to be good)
and the amount of slots Google allocates to us. Students without 7
points will not be accepted no matter what. If we have more slots than
students with the minimum score we will just give those slots back to
the pool so other orgs can use them.

 **You have until April 20th to get the points. You can work in
        your proposal first if needed so you can submit it and then work
        on the points. **

\_\_** Community etiquette **\_\_

It goes without saying that everyone in the community has to be polite
and respectful, and consider everyone else a member of a team and not a
competitor.

All developers are part of the team, by the way. Our slack channel has
mentors, code-in participants, other students, are developers and users
that are none of the above but that play some kind of role in
CCExtractor.

Part of being respectful is giving consideration to everyone else's
time. For example asking things that are written in the website or in
the software help screen shows little respect. We don't want to seem
unfriendly, but asking in the slack channel something like "isn't
there a GUI?", "how do I run this", etc, is not a great way to start.
This doesn't mean you can't ask questions, but remember than being a
clueless user and a lazy developer are two very different things. If you
ask those questions you will probably get an answer as if you were a
clueless user (polite no matter what), but if you apply to GSoC you will
be considered a lazy developer.

\_\_** Your proposal **\_\_

You can propose to do any of the following ideas, or you can bring your
own. In any case, make sure you run them by us before you actually
submit your proposal.

Important: \_\_The first two weeks must be allocated to solve bugs
listed in GitHub\_\_. Yes, we know it's a chore and that you would
rather work immediately on the new great thing. But experience has
proven that these two weeks are extremely useful to bond with the rest
of the community, get you introduced to the existing code base, and of
course the bonus that bugs will actually be fixed. If you really don't
want to spend any time on this \_\_we will waive this requirement for
students with 15 qualification points\_\_ (see above).

At the very least your proposal needs to

\- Explain what you do want to do, why it is important to you, and why
it is important or useful to us. - Explain how you intend to
accomplish the goal, in enough detail that makes it clear that you know
what you are talking about. For example, "I will modify the CCExtractor
binary so that it's able to convert audio to text with perfect
accuracy" is the same thing as sending your proposal to the trash. You
need to have a plan. - Detail the timeline, week by week, explaining
the deliverables for each week (pay special attention to the milestones
within the GSoC timeline itself, of course) and how we should validate
the results. - Detail what kind of support you will need for us. For
example, if you are going to need test streams, hardware, access to a
server, etc, let us know, so we can plan ahead. - Detail your
expected working hours in UTC. - Detail your planned absences. We
don't need you to detail what you will be doing when you are not
working of course, but if you are going away for any reason we need to
know so we don't think you've abandoned. - Link to your GitHub
profile, if you have one, so we can take a look at your previous
work. - GSoC is a coding program: This means that ideas that are
about testing, website design, etc, are out. - However, we want to
have good documentation: Make sure you have time to write a good
technical article explaining your work. - Be realistic and honest
with the timeline. Consider each week you should work around 40 hours.
If your timeline reserves a lot of time for minor things we'll think
that you are not going to be working full-time in GSoC. On the other
hand if you promise to do things in a lot less than that it seems
realistic to us it will seem that you don't really know how much work
things take. - If you are going to be using 3rd party libraries
(that's OK), make sure to validate that their license is compatible
with GPLv2 (which is ours). List the libraries in your proposal. Check
that they are multiplatform. If you will need to extend those libraries
in any way please explain. In this case, your proposal should include
time to get that extension submitted to the maintainers (we love to
contribute to other projects).

Something else: Mentors often have their fingers in several pies. If you
send the same proposal to several orgs everyone will know. So do
yourself a favor and don't do that. You can apply to several
organizations and that's totally fine, but each organization will want
to see that you have put the time to write a great proposal that is
focused on them.

 **\_\_The ideas we currently have\_\_**

Important: If you have something else in mind that relates to subtitles
and accessibility please get in touch. We prefer that you do something
that you are passionate about even if it's something we hadn't
considered.

[Write high speed subtitle synchronization
tools](public/gsoc/highspeedsync)

[Add support for DTMB countries](public/gsoc/DTMB)

[Detect Automatically the most interesting bits of sample
videos](public/gsoc/interestingbits)

[Do word by word subtitle-audio
sync](public/gsoc/wordbywordsync)

[Write Python bindings for
CCExtractor](public/gsoc/pythonbindings)

[Create a integrated GUI, replacing what we
have](public/gsoc/integratedgui)

[Complete 708 support](public/gsoc/complete708support)

[A web-site to view captions in
real-time](public/gsoc/realtimecaptionswebsite)

[Project Nephos: Cloud based storage for a massive collection of TV
recordings](public/gsoc/projectnephos)

[ Enable automated testing on windows and other general sample platform
improvements ](public/gsoc/windowstesting)
