======= GSOC 2015 Documentation =======

##### Technical Documentation

### Transport Stream

Data structure in Transport Stream made for Multiprogram.

### Decoder

In CCextractor we have single Decoder Initialization function,
`struct lib_cc_decode* init_cc_decode (struct ccx_decoders_common_settings_t *setting)`
where settings of decoder are passed in its parameter <code>

struct ccx\_decoders\_common\_settings\_t {

`       LLONG subs_delay; // ms to delay (or advance) subs`\
`       enum ccx_output_format output_format; // What kind of output format should be used?`\
`       int fix_padding; // Replace 0000 with 8080 in HDTV (needed for some cards)`\
`       struct ccx_boundary_time extraction_start, extraction_end; // Segment we actually process`\
`       int cc_to_stdout;`\
`       int extract; // Extract 1st, 2nd or both fields`\
`       int fullbin; // Disable pruning of padding cc blocks`\
`       struct ccx_decoder_608_settings *settings_608; //  Contains the settings for the 608 decoder.`\
`       ccx_decoder_dtvcc_settings_t *settings_dtvcc; //Same for cea 708 captions decoder (dtvcc)`\
`       int cc_channel; // Channel we want to dump in srt mode`\
`       unsigned send_to_srv;`\
`       unsigned int hauppauge_mode; // If 1, use PID=1003, process specially and so on`\
`       int program_number;`\
`       enum ccx_code_type codec;`\
`       void *private_data;`

};

~~~

In settings subs\_delay is deprecated and should not be used further,
subs\_delay parameter was added for transition period and need to be
removed. same thing for send\_to\_srv, output\_format.

If Demuxer has already initialized deocder like in case of teletext and
dvbsub at the time of demuxing then private\_data can be filled with
context of specific format decoder and initialize value enum
ccx\_code\_type codec.

### How to use multiprogram extraction using CCExtractor?

For Command line user its simply passing -multiprogram argument to
ccextractor `cextractor -multiprogram `<input ts filename>

### How to use OCR for extracting bitmap subtitle in text format?

For doing OCR on bitmap image of subtitles, compile code after enabling
OCR in source code. While compiling ccextractor, follow OCR.txt in doc
folder of ccextractor source code.

### Link list data structure in CCextractor

Background
----------

Link List implemented in CCextractor is taken from Linux Source Code.
Please note ccextractor Link list does not have same syntax as it is in
linux source code but its similar and only changes that you will in
CCextractor link list would be adaptation of Windows environment.

Implementation
--------------

For implementing link list you need head of link list using which you
can always traverse update or delete the complete link list. Keep head
of link List in safe location, most common mistake developer do is
keeping head inside node structure and do memory leakage if loosing Head
of link list.

for example we need multiple decoders to extract different Subtitles
from different programs. so as discussed above Head of link list should
not be kept in Decoder Context. It must be in its parent which cant die
or deleted before its child. We will keep head of decoder link list in
CCextractor library Context which contain all demuxer, decoder and
encoder. Following would be syntax for keeping decoder List in Library
Context.

<code> struct lib\_ccx\_ctx {

`   struct list_head dec_ctx_head;`

}; ~~~

now next thing to do is initialize the head of link list, for decoder
link list we would initialize it in initialization part of library
<code> void init\_libraries(void) {

`   INIT_LIST_HEAD(&ctx->dec_ctx_head);`

} ~~~

Now in your decoder context put connector of link list, which will
actually make your dec\_ctx as node `struct lib_cc_decode` `{`
`struct list_head list;` `};`

Put your decoder node back in link list, in below code I have assumed
that you allocated decoder Context and saved in variable dec\_ctx and
your library with head of your link list is saved in ctx variable.
`list_add_tail( &(dec_ctx->list), &(ctx->dec_ctx_head) );`

One of the reason that people prefer Array because traversing,
searching, updating and deleting them is very easy, now that excuse wont
work, Now only reason to use Array would be contiguous memory
allocation.

Traversing Link List for searching and updating some parameter <code>
list\_for\_each\_entry(dec\_ctx, &ctx-\>dec\_ctx\_head, list, struct
lib\_cc\_decode) {

`   //Access your parameter here`\
`   print(dec_ctx->program_number);`

} ~~~

there is different code for traversing link list when you might delete
complete node of link list while traversing. also mind that delete link
of node from link list first after then delete or free your memory
allocated for node <code> list\_for\_each\_entry\_safe(dec\_ctx,
dec\_ctx1, &lctx-\>dec\_ctx\_head, list, struct lib\_cc\_decode) {

`   list_del(&dec_ctx->list);`\
`   free(dec_ctx);`

} ~~~

##### How to evaluate?

Clone my repository from git hub in **any** directory of gsoc server
`git clone --depth `[`https://github.com/anshul1912/ccextractor.git`](https://github.com/anshul1912/ccextractor.git)

Run CCextractor with multiprogram in argument
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -multiprogram -o a.srt`

In file specified in above command there are 6 program with closed
caption. but ccextractor tries to extract Closed caption from all 8
programs therefore it makes 2 empty files. you would have following file
in directory where command was executed.
`[anshul@gsocdev linux]$ ls a_*`
`a_1.srt a_2.srt a_3.srt a_4.srt a_5.srt a_6.srt a_7.srt a_8.srt`

From same file extract subtitles individually using -pn argument. you
can use following command to extract each program.
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 1 -o pn_1.srt`
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 2 -o pn_2.srt`
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 3 -o pn_3.srt`
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 4 -o pn_4.srt`
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 5 -o pn_5.srt`
`ccextractor /repository/newRepository/TestFiles/General/Closedcaption_atsc_multiprog.ts -pn 6 -o pn_6.srt`

Now check the difference between files generated by ccextractor with
multiprogram and pn. for example you can use command line tool like
following. `diff a_1.srt pn_1.srt`

##### Contribution for blog

Now CCextractor have feature to extract Closed Caption from all channels
simultaneously. Its not just about extracting Closed caption from all
channel but also converting them to desirable format.

Now there is no need of multiple Capture Device to capture single live
closed caption. Use this wonderful openSource software and save your
hard earn money to donate in technology and make this software more
wonderful.

This Multiprogram Closed caption Extraction works for DVBSub, Teletext
and Closed Caption. which means whichever is your country Multi programs
Extraction would work.

If in some peoples country multiprogram subtitles extraction is still
not working, we would say invest here and help this newer

`generation to do more wonderful and innovative work instead of discovering or inventing Wheel`

##### Addendum

= My Graduation would be completed this year, so I would seek the
opportunity to be mentor or co-mentor in CCExtractor. CCExtractor is
great tool which can be used for various multimedia application, so my
development would continue in this project at least till C has its
charm. Since the part of work that I have done in CCextractor was done
with atmost care according to my knowledge, therefore I would try to
remove any bug in part of my code reported by someone else or
encountered by me.
