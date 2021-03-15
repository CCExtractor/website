This seems interesting. Here\'s the original request email:

Does CCExtractor have support for extracting captions contained in the
VAUX area on DV streams, and I just can\'t figure out how to use it?

If not, are there any plans to integrate this into CCExtractor? It seems
to me that the only software available to do this is MacCaption, which
costs many hundreds of dollars.

Here are some links to specifications I have run across:
<https://dvswitch.alioth.debian.org/wiki/DV_format/>
<http://ffmpeg.sourcearchive.com/documentation/0.6/dvdata_8h-source.html>

This page contains links to two DV-stream-containing files that
supposedly contain captions in their streams, meant for testing one\'s
equipment chain: <http://www.cpcweb.com/dv/dv-hardware.htm>
<http://www.cpcweb.com/samples/CPCDemo_DV_720x480_CC.mov>
<http://www.cpcweb.com/samples/CPCDemo_DV_720x480_CC.avi>

To extract the DV stream from those containers while retaining the VAUX
stream, apparently one can use
<http://www.kinodv.org/article/view/182/1/11/> according to
<https://lists.libav.org/pipermail/ffmpeg-user/2010-March/024594.html>

Here is a discussion where someone wants to transcribe a VHS via a DV
camera while preserving closed captions. It seems they gave up and used
(bought?) a DVD/VHS combo machine to dump directly to MPEG2, preserving
Line 21 at the cost of quality and edit-ability:
<https://discussions.apple.com/thread/764469?start=0&tstart=0>

If one wants to transcribe an NTSC source with captions and already owns
a good analog source (LaserDisc, SVHS) and DV-based digitizer, it would
be nice to have this capability in CCExtractor\'s arsenal of features.

Thanks for your time and consideration.
