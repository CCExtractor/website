\~\~META: title = Google Summer of Code 2017 - A web-site to view
captions in real-time \~\~

 **A web-site to view captions in real-time\*\*

There is a a web-site which allows viewing caption stream in real-time
from web-browser. To fetch CC stream from TV tuner and send it to the
server it uses separate application that parses CCExtractor\'s output.
This project just has passed prove-of-concept stage, so at least you
have to implement the following:

` - Administration dashboard`\
` - A service that would parse external database to fetch TV channels metadata and TV guides`\
` - A service for analyzing CC stream (extracting keywords or key phrases from a stream)`\
` - A service for notifying users (via email) about their specified keywords being mentioned in CC stream  `\
` - Web site pages (based on supplied wireframes)`

<https://github.com/rkuchumov/ccr/>
