\~\~META: title = Google Summer of Code 2018 - Add support for DTMB
countries \~\~

 **Add support for DTMB countries**

DTMB is the Chinese TV standard, adopted by other countries such as
Cuba. We still don't know much about it. Due to this, your proposal
must include:

a\) A link to the relevant standard documents. We don't know if they
exist in English. If they don't but you speak the language they are in,
that's fine. If you locate the documents but they require payment (as
is often the case for technical specifications) send us a link to buy
and we'll allocate organization funds to purchase them. b) Some TV
samples. Or, if you cannot get them directly, an explanation of how you
will get them, for example by purchasing a capture card that is known to
be compatible (send us an exact link), plugging it to an antenna or
dish, etc, that you have access to (detail), etc.

In short, this is an "adventure" task. We'll go all the way with the
student that tries it, but we want to make sure the chances of success
are reasonable.

This is what we (think we) know so far: DTMB regulates the physical
transmission standard (signals, frequencies, etc). It seems to be
available (for purchase)
[here](http://www.chinesestandard.net/default.aspx?PDF-English-ID=GB%2020600-2006).

Cuba follows it:
[http://www.globaltimes.cn/content/955479.shtml](http://www.globaltimes.cn/content/955479.shtml\\)
[http://advanced-television.com/2013/03/22/cuba-adopts-chinese-tv-standard/](http://advanced-television.com/2013/03/22/cuba-adopts-chinese-tv-standard/\\)

The reason Cuba is interesting is that their subtitles will have Latin
characters, which will make life a lot easier for most team members.
Also, the Cuban government has a [good
website](http://www.lacetel.cu/television-digital/normas-de-television-digital.html)
about their TV regulations.

Apparently the subtitles themselves follow the European DVB standard. We
can see that [in this
document](http://www.ofca.gov.hk/filemanager/ofca/common/Industry/broadcasting/standards/lists/hkca1108.pdf)
from the Hong Kong regulatory body which says:

Subtitles: Receivers shall include provisions to decode and display
subtitles conforming to ETSI EN 300 743.

The Cuban government [says the same
thing](http://www.lacetel.cu/20160414_Verification_Test_Procedure_Res47.pdf):

That document (in English) says: The Brand and Model TV Set is intended
for the reception of DTMB Digital Terrestrial Television in 6MHz
bandwidth, according to the specifications GB 20600-2006.

-   and\*

DVB subtitles (ETSI EN 300 743) -- The DUT must support DVB subtitles
(ETSI EN 300 743).

Important: Since Chinese is by far the most extended language among DTMB
countries, its support is essential. We have some preliminary support
for it, but whatever is missing you will need to add. This applies in
particular to the .srt writer. Since .srt is text based, you need to OCR
the bitmaps. This is already done but almost untested for Chinese.
Don't assume it's going to work. Probably not. Give yourself time in
your proposal for this.

\_\_**Related GitHub Issues**\_\_ [Extract subtitles in a
Chinese
newscast](https://github.com/CCExtractor/ccextractor/issues/918)

 **Qualification tasks**

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
