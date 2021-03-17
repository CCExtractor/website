# Vote counter and reporter

 **Introduction**

Yes, we've just seen it again in Iowa, but it's not really a new thing
or a new need: Use of electronic voting, counting and reporting is
becoming the norm, and so are the problems and lack of trust in the
process.

We need to do something.

 **Your job**

Your job is to design and implement an universal tool that can be
trusted by everybody to help with voting, counting and reporting in any
election.

Universal means that it be made to work (with configuration of course)
for any kind of voting or election, be it for a party candidate for a
major election to a simple class delegate at your university.

Trust will come from its open source nature which makes the code
auditable.

 **Voting** means that your system can be used by the voters to
        well, vote. This is probably the hardest part to get right as
        you need to somehow verify the voters identity.

<!-- -->

 **Counting** means that for those elections (which are probably
        all the political ones) in which the votes are counted after
        everybody has votes it must be possible for the people that are
        doing the counting to update their counts in real time and most
        importantly compare their counts in real time: The way it works,
        at least in some countries, is that after the electoral place
        closes, the ballot box is opened and the counting starts. That
        counting is done by several people (possibly selected randomly
        from the registered voters) but there are interested parties
        (such as party representatives) verifying that everything is
        done correctly. Those representatives of course are also keeping
        their own tallies, and at the end of the counting they must
        match the official count.

It goes in the interest of the process that everybody involved can see
the official tally and everybody's else.

 **Reporting** means that after the counting is over the results
        can be reported to different places: Depending on who is doing
        the counting (meaning the user of you application) that
        reporting will go to their party, to the press, to an
        "upstream" counting place, or several or those at the same
        time.

Your system will have a mobile frontend that must be written in Flutter
(which generates Android and iOS native aps).

It will also have a backend that can be written in anything, but it must
be scalable. For example, a PHP backend is a non-starter. Think of using
a massively scalable cloud service as the core of your backend. Remember
that your application will have an extremely high usage during a short
period of time and then it's over.

[Interesting
read](https://www.theatlantic.com/technology/archive/2020/02/bad-app-not-russians-plunged-iowa-into-chaos/606052/).

Finally, this system is not supposed to replace paper. We need the paper
trail. It's essential.

 **Qualification tasks**

Take a look at [this
page](/public/gsoc/takehome).

Your proposal should also include reports regarding scalability and
fault tolerance of your chosen tech stack. A list of stacks and their
performance comparison for the same application can be made from
[RealWorld.io](https://github.com/gothinkster/realworld)
