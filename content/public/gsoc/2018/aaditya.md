---
title: "Project Nephos"
---

**Developed under Google Summer of Code, 2018 with CCExtractorDevelopment By [Aaditya MNair](https://github.com/AadityaNair)**

------------------------------------------------------------------------

### Introduction

One of the function of the RedHen Organisation is to record and archive
Television streams they receive for future research. Project Nephos is
an effort by CCExtractor to automate the entire process. Archiving is
done by compressing and uploading to Google Drive. In addition to
downloading and archiving, Project Nephos provides the following
functionalities:

 - Tagging of videos.
 - Searching archived videos.
 - Sharing videos with other entities 

### Project Related Links

 * Project Repository on GitHub [Project Nephos](https://github.com/AadityaNair/ProjectNephos)
 * My blogs on the project [Blog Reports](https://aadityanair.ml/tags#GSoC)
 * Sample Recordings [here](https://drive.google.com/open?id=1elg_2owspB3qSFkG8AEuiKcEbLdIUNAX)

### Installation
```
 git clone [https://github.com/AadityaNair/ProjectNephos.git](https://github.com/AadityaNair/ProjectNephos.git)
 pip install ./ProjectNephos
```
### Usage Documentation

Below is how you would manually use Nephos to perform actions manually.
This requires the config file to be present. More information on the
config file in the *Configuration* section.

### Uploading files

 nephos upload <filename>

### Searching

`nephos search --name <name> --tags <tag1> <tag2> ... --do_and`

Search for files with *<name>* and/or tags *<tag1> <tag2> ...*. The
and/or part will be decided by the *do_and* parameter. If specified,
all parameters (name, tags) will be joined by an AND i.e it will search
for **"<name> AND <tag1> AND <tag2> ..."** If not, ANDs will be
replaced by ORs.

Atleast one of *--name* and *--tags* is required.

### Tagging

`nephos tag --for_name <name> --add_tags <tag1> <tag2> ...`

This searches for all instances that contain *<name>* and for each of
them, add the provided tags.

### Processing

`nephos process <input_file> <output_file>`

Converts the input file to output file. The formats are guessed by their
extensions.

### Permissions

Share uploaded videos with people based on the video tags.

`nephos permission add --for_tags <tag1> <tag2> --share_with <email>`

This command is persistent. This means that all future videos with the
tag will also be shared. To avoid this action pass *--not_persistent*
to the command.

Note, The tags provided follow the OR semantics. i.e. in the above
example, every file with the tag //tag1//

 **OR** `tag2` will be shared.

To view all permissions,

`nephos permission list`

More information can be found for each sub-command by using the
*--help* option after the sub-command

#### Automation

For the most part you want to just specify what to record and when leave
Nephos at it. For that:

### Add channels

Add channel to specify where to download stuff from

`nephos channel add --name 'CNN' --ip_string '1.2.3.4:5678'`

Note that the *name* should be unique for each channel.

To view added channels.
-----------------------

 nephos channel list

### Add job.

Specify when to download other post download options.

`nephos job add --name <jobname> --channel <channel> --start <starttime> --duration <length>  --upload --convert_to <format> --tag <tag1> <tag2>`

Following are mandatory arguments: *--name* is the name of the job.
This should be unique for each job. *--channel* is the name of the
associated channel. This channel should have already been added by the
*channel add* subcommand. *--start* is the start time of the job
written in the popular cron format. For more info on the format go
[here](http://www.nncron.ru/help/EN/working/cron-format.htm).
This was used as an reference. *--duration* is how long you want to
record. This is provided in minutes.

Rest are optional arguments: *--upload* instructs nephos to upload
the file to Google Drive. This will most likely be the default case in
the future versions. In such a case, this option will be removed.
*--convert_to* makes so that the downloaded file is converted to the
provided format before being uploaded. *--tag* tags the uploaded
file with the provided tags.

Note that *--tag* is dependent providing the *--upload* option. If it
not provided *--tag* is a NOOP.

### TV Listings

Nephos also has a crude API that supports TV listings.

`nephos schedule add --name <program_name> --channel <channel> --start <starttime> --duration <length> --tags <tag1> <tag2>`

This syntax is pretty much exactly the same as for the *job add* above.
The tags are associated with the program. This allows for a separate
syntax to add a job:

`nephos job add --name <jobname> --program_tags <tag1> <tag2> ..  --upload --convert_to <format> --tag <tag1> <tag2>`

This will find all programs with **any** of the provided tags and
add them as jobs.

### Initialise Server

This starts the orchestration server which is responsible for the record
-> process -> upload pipeline. This will also create all the relevant
directories and perform OAuth with google drive, if not done already.

`nephos init`

Currently, if a job is added after the server is started, it will not be
picked up by the server. So, make sure you add all the jobs before
starting the server. This will be fixed in a later version.

### Contributing and other information

Currently the project lives on the above provided github link.

The [wiki](https://github.com/AadityaNair/ProjectNephos/wiki)
contains more information about the internals of the project.

There is still a lot of stuff that can be improved here. Have a look at
the
[issues](https://github.com/AadityaNair/ProjectNephos/issues)
to know what can be done and don't hesitate to create a new one if you
find something new.
