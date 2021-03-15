##### Extracting closed captions from a DVD step by step tutorial

// Note: This procedure may or may not be legal in your country,
depending on whether they consider it fair use. I own the DVD used in
the tutorial and I am not going to distribute anything from it, plus I
live in a country where this sounds reasonable, so I believe I am in the
safe side. But your mileage may vary.//

 **This tutorial was written years ago. Probably better tools exist
        already to do the same thing.\*\*

This tutorial will teach you how to go from a DVD in your shelf to a
transcript of its closed captions. Basically there are these steps:

Install DVDDecrypter (a program to extract the DVD data from the
physical DVD). You only need to do this once. Install CCExtractor (our
beloved program; it gets the data from the previous step and extracts
the closed caption track). You only need to do this once. Use
DVDDecrypter to extract the DVD data into your hard disk. Use
CCExtractor to extract the closed caption track from the DVD data.

As an example, I will be using the movie Merlin. Remember that DVD
subtitles and closed captions are two different things. Closed captions
come from the NTSC (USA and Canada) TV world, and they are usually
prevent in DVDs from TV shows, documentaries, old movies and so on. If
you buy a brand new DVD with a film from last year it\'s unlikely to
have closed captions - it will have DVD subtitles, which require
different tools to extract. Many tutorials exist on DVD subtitle
extraction.

#### 1 - Install DVDDecrypter

`As explained before, DVDDecrypter is the tool we will use to copy the DVD data from the physical DVD into the hard disk. DVDDecrypter reads the DVD, decrypts it (so other tools can actually use the data) and writes it to the hard disk. There are other tools that do the same thing, so you can use whichever you prefer. DVDDecrypter is free, use to use, and does a good job, so it's the one I use regularly.`

First, download DVDDecrypter, which is available from this page. You can
get the file directly here. Depending on your browser, it may ask you
whether you want to run the program, or save it, etc.

{{ :public/gsoc/dvd\_decrypter\_download\_1.jpg?nolink \|}}

Run it if possible directly, or save it somewhere and run it later if
your browser insists.

If you are using Internet Explorer it might warn you about the file not
being signed, and ask you again if you want to run it:

{{ :public/gsoc/dvddecrypter\_security\_warning\_1.jpg?nolink \|}}

Say yes. If you are running Vista it will show you yet another window to
reconfirm you haven\'t changed your mind. I couldn\'t get a snapshot but
it you are a Vista user you have seen that windows a billion times
anyway. The installation program starts. All defaults are correct, so
the only thing you need to do is say Next at every chance. A screenshot
of all screens follows:

{{ :public/gsoc/dvd\_decrypter\_setup1\_1.jpg?nolink \|}}

{{ :public/gsoc/dvd\_decrypter\_setup2\_1.jpg?nolink \|}}

{{ :public/gsoc/dvd\_decrypter\_setup3\_1.jpg?nolink \|}}

When asked about whether you want DVDDecrypter to check for new versions
say no. The program is no longer being maintained so it will never find
a new version anyway.

{{ :public/gsoc/dvd\_decrypter\_setup4\_1.jpg?nolink \|}}

The installation ends. In the last screen you have an option to start
DVDDecrypter inmediately. Since we are going to install CCExtractor now,
uncheck the box.

{{ :public/gsoc/dvd\_decrypter\_setup5\_1.jpg?nolink \|}}

#### 2 - Install CCExtractor

CCExtractor is the program that does the actual work of getting the
closed caption text from the data. It supports DVDs as well as many
other formats. This is its home page (you probably know that already).
Follow the link \"Download Windows installer\" (I don\'t link to the
installer directly because it\'s updated from time to time and the link
would be out of date soon). As before, run the installer if possible or
save and run later if needed.

{{ :public/gsoc/ccextractor\_setup\_1\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_2\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_3\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_4\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_5\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_6\_1.jpg?nolink \|}}

{{ :public/gsoc/ccextractor\_setup\_7\_1.jpg?nolink \|}}

#### 3 - Extract the data from the DVD using DVDDecrypter

Insert the DVD in the DVD player if you haven\'t done it already. Most
likely it will start making noise for a few seconds, until Windows is
done analyzing it. Wait for the noise to stop (so it\'s ready) and then
start DVDDecrypter, either by clicking on its icon (on your desktop) our
by selecting it in the program menu (Start -\> Programs -\> DVD
Decrypter -\> DVD Decrypter). Initially the screen looks like this
(assuming DVDDecrypter detects the DVD correctly - if not you may have
to select the correct drive from the combo box):

{{ :public/gsoc/dvd\_decrypter\_1\_1.jpg?nolink \|}}

The first time, go to the settings area (Tools -\> Settings). There are
a lot of things there but the default settings are fine, except for the
file splitting. We don\'t want the output video to be split in several
files (the only exception would be if your hard drive couldn\'t handle
large files). Having all the output in one file makes things easier
later.

So go to the settings area as explained, and the select the \"IFO mode\"
tab. In file splitting choose \"None\" from the combox box and then
press OK. Done with the settings.

{{ :public/gsoc/dvd\_decrypter\_2\_1.jpg?nolink \|}}

Back to the main screen, you can see that there\'s a \"Destination\"
that DVD Decrypter automatically sets. You may need to choose a
different folder. For me that directory is OK (F:\\MERLIN\\VIDEO\_TS).
Notice too that all the files in the DVD are selected. If were trying to
get the data from say, one specific episode of a TV show (where usually
there are 4 episodes or so in each DVD) we would have to guess which
file is correct. Since this is a complete movie, we\'re going to get all
the files, so we leave the selection as is.

OK, so we press the large \'Decrypt\' button (see below) and DVD
Decrypter does its magic.

{{ :public/gsoc/dvd\_decrypter\_3\_1.jpg?nolink \|}}

{{ :public/gsoc/dvd\_decrypter\_4\_1.jpg?nolink \|}}

{{ :public/gsoc/dvd\_decrypter\_5\_1.jpg?nolink \|}}

 **File selection\*\*

Take a look at the destination directory:

{{ :public/gsoc/explorer-1\_1.jpg?nolink \|}}

The VOB files are the actual video data. In DVDs, they usually have more
stuff that just the movie. For example, the chapter selection video is
there. In order to get a clean transcript, you need to tell CCExtractor
which files to use. Usually the right files are easy to spot. In this
example, you can see that the file VTS\_01\_0.VOB is 330 Mb long, while
VTS\_01\_1.VOB is 1 Gb, VTS\_02\_2.VOB is one Gb too, etc. This is a
clear indicator that it is not part of the same video stream. In order
to verify it, we just play the file with any DVD capable player:

{{ :public/gsoc/bscap0001\_1.jpg?nolink \|}}

This is indeed the chapter selection video, which we don\'t want. Just
to make sure, we start playing VTS\_01\_1.VOB, which should be the
actual start of the movie:

{{ :public/gsoc/merlin-1\_1.jpg?nolink \|}}

Indeed it is.

#### 4 - Extract the transcript with CCExtractor

Open CCExtractor, by click on its desktop icon or by selecting it from
the program menu (Start -\> Programs -\> CCExtractor -\>
CCExtractorGUI).

{{ :public/gsoc/ccextractor-1\_1.jpg?nolink }}

Now, open Windows Explorer if you didn\'t have it already, and choose
the files VTS\_01\_1.VOB up to VTS\_01\_01\_8.VOB (so all of them except
the one we already know not to be part of the movie):

{{ :public/gsoc/explorer-2\_1.jpg?nolink \|}}

Drag and drop the files from Windows Explorer to CCExtractor:

{{ :public/gsoc/drag\_drop\_1.jpg?nolink \|}}

Now you can see that CCExtractor has queued the files:

{{ :public/gsoc/ccextractor-2\_1.jpg?nolink \|}}

You can notice that CCExtractor has a lot of tabs with lots of options.
The good news is that the default settings are OK, so you don\'t need to
worry about them. The one thing you may want to change is the output
format in the Output tab. By default it exports to .srt, which is the
standard format that most players support. Suppose you want a plain
transcript with no timing information. Just check the .txt option
(transcript):

{{ :public/gsoc/ccextractor-3\_1.jpg?nolink \|}}

Finally, go to the Execution tab and press Start: screen-shot You can
see the progress:

{{ :public/gsoc/ccextractor-4\_1.jpg?nolink \|}}

Once CCExtractor finishes, a file with the same name as the first file
in the input is created in the same directory (this can all be changed
in the settings). In this case, the file is called VTS\_01\_1.txt (note
that it ends with .txt instead of .VOB). Here\'s the contents (the first
10 lines):

`ONCE UPON A TIME...` `NO, NO, THAT'S` `NOT THE WAY TO START.`
`YOU'LL THINK THIS IS` `A FAIRY TALE, AND IT ISN'T.` `IT HAS ELEMENTS`
`OF A FAIRY TALE--` `DRAGONS, ELVES` `GRIFFINS, FAIRIES AND SO ON--`
`AND IT HAS MAGIC.` `NOW, IN MY DAY,`

We\'re done.
