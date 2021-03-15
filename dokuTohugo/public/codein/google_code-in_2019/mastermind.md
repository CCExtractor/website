# Mastermind \#3: Write the backend (in any language you want) for a competition between student submissions

We already had two tasks about this superfun yet easy to understand game
(links below). Many students have worked on creating mastermind players,
so it\'s time to make them compete against each other! Let\'s see who\'s
algorithm is better.

In order to do this, we need a servers for the players to connect to and
play. Your job is to implement such a server.

We have come up with a simple protocol between player and server. Your
job here is to implement the server side. The protocol is like this:

When the player wants to start a game, it will request (via HTTP GET)

/himastermind/newgame/\$name\_of\_player

The \"name\_of\_player\" can be anything (alphanumeric only) but it
shouldn\'t change - so if a player plays 100 times, it should use the
same name in all of 100, so the server can keep track of results for
each player.

A player here is the AI, not the name of the developer. In fact, don\'t
use your own name (that goes against GCI rules).

When that URL is called, the server will generate a random number (for
the player to guess) and a \"game ID\" which it will return. The \"game
ID\" (equivalent to \"session ID\", if you are used to that term when
taking about websites) is a 8 characters random string (alphanumeric).
The game ID is returned to the player so he can pass it to play.

Then the game actually starts. The player will make requests like this:

/himastermind/play/\$game\_id/\$guess

And the server will return:

\$digits\_in\_the\_right\_position \$digits\_in\_the\_wrong\_position
\$number\_of\_guesses\_in\_this\_game \$time\_since\_the\_game\_started

A possible interaction would be like this:

<code>

 **CLIENT REQUESTS\*\*: /himastermind/newgame/MazingerZ/1235678
    -   SERVER REPLIES\*\*: AHVEDJ34
    -   CLIENT REQUESTS\*\*: /himastermind/play/AHVEDJ34/123456
    -   SERVERS REPLIES\*\*: 2 1 3
    -   CLIENT REQUESTS\*\*: /himastermind/play/AHVEDJ34/126544
    -   SERVERS REPLIES\*\*: 4 0 4
    -   CLIENT REQUESTS\*\*: /himastermind/play/AHVEDJ34/126588
    -   SERVERS REPLIES\*\*: 6 0 6

~~~

Of course the game ends when the player guesses the number correctly, so
the reply is 6 0.

Things the server needs to do: - If the game ID doesn\'t exist, return
an error - If the guess string is not correct (exactly 6 digits) return
an error - Be able to handle the same player playing more than one game
simultaneously, which is why we have the \"game ID\". Each time the
player calls \"newgame\" a new game is created, but it doesn\'t destroy
the previous one the server might have. - Keep track of everything in a
database. That means for each player, the games its played, the guesses,
elapsed time, and so on.

You can deploy your work in any cloud service that as a free tier (most
do).

In a separate task we\'ll create a new dashboard to see who\'s the best
player.

There will be rewards for the students that create the best players and
the best server.

Useful links:

 **Previous mastermind tasks\*\*:\\\\

[https://codein.withgoogle.com/dashboard/tasks/6684006435782656/\\\\](https://codein.withgoogle.com/dashboard/tasks/6684006435782656/\\)
[https://codein.withgoogle.com/dashboard/tasks/6022435409756160/\\\\](https://codein.withgoogle.com/dashboard/tasks/6022435409756160/\\)

 **Mastermind rules\*\*:\\\\

[https://www.wikihow.com/Play-Mastermind\\\\](https://www.wikihow.com/Play-Mastermind\\)
