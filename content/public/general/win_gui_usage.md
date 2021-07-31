---
title: "Windows GUI usage"
---

{{< tip "warning" >}}
This GUI is now archived, use the flutter one from  [here](/public/general/flutter_gui)
{{< /tip >}}


The new interface is all you need, as it includes all the options. After
installing CCExtractor you will have a shortcut in your desktop and a
new entry in the Program Files folder (CCExtractor → CCExtractorGUI).

From the GUI you have a lot of options. Usually, you will never need to
use them (and if you do, you can save them as default) for regular
usage.

There are several tabs. These are two that you will definitely need to
use: The 'input files' tab, where you drag and drop (from Windows
Explorer for example) the files you want to process, and the
'Execution' tab from where you launch the extraction process and see
the progress.

 **This is the 'input files' tab**:

{{< picture "gui/gui_input_files.jpg" "gui/gui_input_files.jpg" "GUI Input" >}}

 **This is the 'execution' tab**:

{{< picture "gui/gui_execution.jpg" "gui/gui_execution.jpg" "GUI Input" >}}

As you can see, when a extraction is in progress you can see a preview
of the subtitles (as they are being produced), the actual output Windows
from the extraction process, progress, and more.

By default, CCExtractor produces .srt (SubRip) subtitles, as they are
universally supported by all players, and they are easy to edit. There
are however other formats that CCExtractor can generate.

 **This is the 'output' tab**:

{{< picture "gui/gui_output.jpg" "gui/gui_output.jpg" "GUI Output" >}}

 **Modifying how subtitles look like**

By default, CCExtractor does it best to produce subtitles that look as
they do on the TV. Depending on personal tastes, this is a good thing or
it can be extremely annoying. In particular, there are two things that
you may want to change: Position: Real closed captions are displayed on
32 columns by 15 rows grid. The person producing the captions can
position them anywhere in the screen. For deaf people this is useful to
know who's talking or where the sound is coming from. In the produces
files, it might look like this:

`SG. FERNANDEZ` `VOLKER.`

If this is annoying for you, you can select the 'center text' option
in the decoder tab. Capitalization: Many stations broadcast their
captions IN ALL CAPS, which is usually harder to read. I believe the
reason is that the very first decoders (from decades ago) didn't
support lowercase, and some stations or captions producers really really
want to be on the safe side. Anyway, CCExtractor can apply the standard
(English) capitalization rules and fix this. There is a small list of
words that CCExtractor knows that must be capitalized, and you can also
supply a file with a more complete list.

 **This is the 'decoder' tab from where you can change these and other things**:

{{< picture "gui/gui_decoder.jpg" "gui/gui_decoder.jpg" "GUI Input" >}}

 **Installation details (i.e. what are you installing on my computer?)**

Starting with version 0.64, the installer registers a DLL in your
computer. This is a DirectShow filter that allows extraction of CC data
from wtv files. If you don't want or can't (because you don't have
administrator privileges) register this DLL, everything will still work
except wtv support. Other than this the installer just copies the same
files included in the .zip file with the windows binaries. No other
changes are made.

The GUI needs the .NET runtime (it comes with Vista and 7, and most
likely you already have it for other programs). If it is not installed
it will download it from Microsoft's website.

You can uninstall everything from the Add & Remove programs option in
the control panel and nothing is left behind (I think, because the
Windows installer creator in Visual Studio is a bit of a black box\...).
