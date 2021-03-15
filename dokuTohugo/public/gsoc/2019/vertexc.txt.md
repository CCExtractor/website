###### PiPot - Micro Honeypot for RPi

Mentor: Willem Van Iseghem
--------------------------

##### Introduction

PiPot is a honeypot server which pretends as a potential target for
attackers from network and collect the attack data. It also has the
ability to deploy more instances to make it harder to get information
from the real one. The goal of this GSOC project is to improve the
functionality and scalability of the current PiPot.

##### Links

Project repo - <https://github.com/PiPot>

##### Completed work(PR)

` - Server Development(Every new feature is covered with unit test)`\
`   - Create and run server inside python virtualenv`\
`     - `[`set`` ``up`` ``virtualenv`` ``for`` ``server`](https://github.com/PiPot/pipot-server/pull/11)\
`   - Run PiPot on non-Arm platform like RPi`\
`     - `[`allow`` ``user`` ``specific`` ``network`` ``interface`](https://github.com/PiPot/pipot-server/pull/22)\
`     - `[`suppot`` ``image`` ``deployment`` ``on`` ``non-Arm`` ``platform`](https://github.com/PiPot/pipot-server/pull/24)\
`   - Allow container-based service uploading`\
`     - `[`container`` ``based`` ``service`` ``upload`](https://github.com/PiPot/pipot-server/pull/25)\
`   - Allow dynamic data report update`\
`     - `[`dynamic`` ``report`` ``update`](https://github.com/PiPot/pipot-server/pull/29)\
`   - Allow service version update`\
`     - `[`fix`` ``service`` ``cannot`` ``upload`` ``properly`](https://github.com/PiPot/pipot-server/pull/19)\
`     - `[`add`` ``service`` ``manager`` ``interface,`` ``upgrade`` ``from`` ``old`` ``to`` ``newer`` ``models`` ``from`` ``updated`` ``service`](https://github.com/PiPot/pipot-server/pull/33)\
`     - `[`add`` ``test`` ``on`` ``invalid`` ``test`` ``update`](https://github.com/PiPot/pipot-server/pull/36)\
` - Continuous Integration`\
`   - `[`travis`` ``setup,`` ``add`` ``test`` ``database`` ``setup`` ``and`` ``with`` ``some`` ``basic`` ``tests`](https://github.com/PiPot/pipot-server/pull/27)\
`   - `[`notification`` ``management`` ``test`](https://github.com/PiPot/pipot-server/pull/37#partial-pull-merging)\
`   - `[`add`` ``codecov`](https://github.com/PiPot/pipot-server/pull/28)\
`   - `[`start`` ``sql`` ``service`` ``explicity`` ``on`` ``travis`](https://github.com/PiPot/pipot-server/pull/32)\
` - Python2 to Python3 migration`\
`   - `[`update`` ``enum`` ``attribute`` ``for`` ``sqlalchemy`` ``table`](https://github.com/PiPot/pipot-server/pull/30)\
`   - `[`fix`` ``enum`` ``attribute`` ``iteration`` ``issue`` ``due`` ``to`` ``python3`` ``update`](https://github.com/PiPot/pipot-server/pull/34)

##### Usage

To install pipot, please follow the installation section. When install
sever, answer each question carefully to set up the right config. If you
want to run the pipot server locally for test, you can simply run python
run.py under server. (Assume you don\'t use localhost as IP address in
installation, otherwise you need to close nginx by service nginx stop to
free the address)

##### Future work

` -     have container based notification uploading, ideally check the requirement before actually applied to pip install`\
` -     develop tests to improve the test coverage`\
` -     update the image deployment to support the latest Raspberry Pi model`\
` -     set up a mailing notification service to report the collected data`\
` -     password change/get back user name using mail verification`
