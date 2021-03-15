###### GSOC 2015 Evaluation

You can find it working at
<http://web-1567166165.us-west-2.elb.amazonaws.com/view>. Ask me
personally for DNS name to connect the tuners.

It\'s working with 5 web server instances and 5 repository server app
instances. It\'s been working for 4 days straight and 2 tuners
reconnected 1 time. It\'s 24.08 now :)

I\'ve added 2 deployment guides for Amazon AWS and a guide on how to
connect a client application. You call walk them thought to evaluate my
project.

My plans regarding repository project:

` - Amazon AWS:`\
`   - Figure out proper scaling policies. Right now scaling groups are static.`\
`   - Although the tuners have reconnected only one time in the last 4 days, they shouldn't do it. Debugging this problems requires a lot of time`\
`   - As load balancer creates two socket connections: client-LB and LB-instance, getnameinfo() always returns private IP which is useless.`\
` - Web pages:`\
`   - Index page redesign. Most tuners doesn't have EPG, so there are a lot of empty space in the table. Probably, it'll be better to display the last CC last instead and update it dynamically.`\
`   - PHP scripts refactoring: right now MVC pattern implementation is too general and routing stuff is messy.`\
`   - JavaScript at the "view" page is also can be improved. Sometimes two columns overlapping each other when you remove horizontal split, it should be fixed.`\
`   - Search should be case-insensitive. Also, it's better to add sorting and to display matches when searching by CC content.`\
`   - Write proper docs when I finish web pages.`\
` - Server application:`\
`   - Test client is a complete mess, I didn't change it from the last summer. Also I should add it to docs`\
`   - Display function trace in error log. Although I'm not sure if it's possible :)`\
`   - Log files rearranging. It will be convenient to displace instance IP in logs and to have separate log file for connected/disconnected clients.`\
`   - Config files are not exactly in INI format although they have ".ini" extension. So I should change the way I parse them so that it fits INI specification`

##### Contribution to blog

I\'ve been working on closed closed captions online repository. It
consists of two main parts. The first one is a server application that
is used for connecting CCExtractor instances which in their turn
extracts closed captions from a video stream. The second part is a web
site, that allows you to view captions in real-time i.e. as soon as they
appear on TV screen. My task for this and a previous GSoC included
everything from defining socket connection protocol to implementing web
pages and deploying repository on a cluster.
