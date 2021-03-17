---
title: "Poor Man's Rekognition"
---

Developed under Google Summer of Code 2019 by [Sarfaraz Iraqui](https://www.linkedin.com/in/sziraqui)

Mentor: Johannes Von Lochter

##### Introduction

Poor Man's Rekognition (PMR) aims to provide a free and open source
alternative to Amazon Rekognition.

Amazon Rekognition is a fairly complex system.

During GSoC, the project focused on face detection and recognition only.

There are many libraries especially in Python that provide these
functionality but they require a lot of expensive hardware for practical
use.

This project is aimed to make everything run on CPU but still provide
reasonable performance for a REST API.

##### Project Structure

The project is divided into three sub-projects:

- **Nodoface**: A Nodejs C++ addon (binding) to C++ libraries that
helped attain high performance on CPU for ML algorithms.

- **PMR-Core**: Nodejs library (with TypeScript support) that
combines Nodoface and ML libraries that are not available in C++.

For eg. there is no ArcFace model on C++ or Nodejs. This provides completely everything that is needed to build Amazon Rekognition like API.

- **PMR-Server**: The REST API for PMR-Core. This provides
endpoints similar to Amazon Rekognition. Any API call generates response
which is more or less identical to Rekognition.

##### Project links

1. Proposal -
<https://github.com/sziraqui/pmr-gsoc-tracker/blob/master/Proposal-PMR-CCExtractor.pdf>

2. Nodoface repository - <https://github.com/sziraqui/nodoface>

3. PMR-Core repository - <https://github.com/sziraqui/pmr-core>

4. PMR-Server repository - <https://github.com/sziraqui/pmr-server>

##### Installation

Only Nodoface requires a tough installation because it depends on some
C++ libraries.

PMR-Core and Server require just one command for setup.

Part 1: Install dependencies
----------------------------

Nodoface depends on-

- OpenFace >= 2.1.0

- OpenCV >= 3.4.0

- dlib >= 19.13

 All above libs must be compiled as a **shared library**
 

- node-addon-api >= 1.6.3

Step 1:
[Install](https://docs.opencv.org/3.4.0/d7/d9f/tutorial_linux_install.html)
OpenCV 3.4.x.

If opencv is already installed, ensure it is recognised by pkg-config by
executing:

**$ pkg-config --modversion opencv**

Step 2: [Install](http://dlib.net/compile.html) dlib 19.13 or
greater as a shared library (default is static).

Check [this](https://stackoverflow.com/a/33997825/6699069)
answer by DavisKing for compiling it as shared library.

Ensure it is recognised by pkg-config:

**$ pkg-config --modversion dlib**

Step 3: Install OpenFace. The original repo can only compile as static
library.

So use my OpenFace fork instead. I have modified CMakelists.txt to
compile OpenFace as shared lib.
```
$ git clone [https://github.com/sziraqui/OpenFace.git](https://github.com/sziraqui/OpenFace.git) && cd OpenFace
$ git checkout dynamic-compile
$ ./download_models.sh
$ mkdir build && cd build
$ cmake -D CMAKE_BUILD_TYPE=RELEASE CMAKE_CXX_FLAGS="-std=c++11" -D CMAKE_EXE_LINKER_FLAGS="-std=c++11" 
$ make -j2
$ sudo make install
```
After this, Nodoface can be installed in any Node project with npm
install nodoface

Part 2: Setup server
--------------------

The server depends on PMR-Core and knn-classifier.

Step 1: Create a project folder. Let's name it "pmr".

**mkdir pmr**

Step 2: Clone dependent repositories in project folder.
```
cd pmr
git clone [https://github.com/sziraqui/nodoface](https://github.com/sziraqui/nodoface)
git clone [https://github.com/sziraqui/pmr-core](https://github.com/sziraqui/pmr-core)
git clone [https://github.com/sziraqui/pmr-server](https://github.com/sziraqui/pmr-server)
git clone [https://github.com/tensorflow/tfjs-models/tree/master/knn-classifier](https://github.com/tensorflow/tfjs-models/tree/master/knn-classifier)
```
Step 3: Install packages in PMR-Core
```
cd pmr-core
npm install
cd ../
```
Step 4: Setup KNN-classifier
```
cp -r tfjs-models/knn-classifier knn-classifier
cd knn-classifier
npm install
cd ../
```
Step 5: Setup server
```
cd pmr-server
npm install
cd ../
```
Part 3: Setup database
----------------------

The project uses PostgreSQL database. Face embeddings and PMR-Server
data is stored in a database. Follow below instructions to setup a local
database for the PMR-Server.

Step 1: Create DB schema

Install PostgreSQL and create a schema as per this [ER
diagram](https://cdn-images-1.medium.com/max/800/1*n9cL9QNsDTspoFLWJlNHhw.png)

Step 2:

Download LFW dataset from
<http://vis-www.cs.umass.edu/lfw/lfw-deepfunneled.tgz>

Extract it somewhere (say pmr/lfw-deepfunneled)

Step 3: Populate face embedding data in DB
```
cd pmr-server
./bin/add_faces_to_db.ts pmr/lfw-deepfunneled LFW DEEPFUNNELED
```
For more info on script usage, pass it **--help** flag with no
arguments.

Any other dataset can be used as long as the directory structure is same
as that if LFW.

Start server
------------

Run start-server script to start the server on localhost
```
./bin/start-server
```
##### Usage docs

Nodoface:
---------

Nodoface can be used without PMR-Core and Server. See nodoface/examples
directory and nodoface/tests directory to learn the usage.

PMR-Core:
---------

PMR-Core can be used without the Server but depends on Nodoface. Look
for files ending with *test.ts in pmr-core/src to learn usage. Scripts
provided in pmr-server/bin directory are also good place to explore.

PMR-Server:
-----------

See the endpoints in pmr-server/src/api/vX/*.ts.

Request/Response syntax can be understood by going through
pmr-server/src/amzn-dtypes and pmr-server/src/pmr-dtypes.

At the time of writing, there is no UI for this server. I use Postman to
test the endpoints.

### Making requests to server

1. POST */api/v0/detect-faces*

  Request body:
  
   {
       "Image": {
           "Bytes": "base64-string-of-image"
       }
   }
   
   

"Bytes" is the base64 string representation of input image. This is
same as DataURL after removing the first intial characters
"<data:image/jpeg;base64>," (for jpeg image). I use
<https://www.base64-image.de> to get base64 string while testing.

2. POST */api/v0/recognize-celebrities*

   Request body:
    Same as that for detect-faces endpoint above. 

3. POST */api/v0/celebrity-in-video*

  Request body:
   
   {
       "Video": {
           "Url": "direct-downloadable-video-url"
       }
   }
   

### Handling response from server

The server follows a "Dispatch and Poll" method. Everytime a request
is received, the server dispatches a "Job" and sends response
immediately with the Job status. Sample response:

    {
       "JobId": "string",
       "JobStatus": "PENDING",
       "ResultUrl": "url"
     }

One can poll on the ResultUrl until JobStatus becomes "COMPLETED".
When that happens, the response will include output such as BoundingBox,
Celebrity name, etc depending on the request. Also the RequestUrl of a
COMPLETED job will point to output file with visualisations drawn
(bonding boxes, labels, etc on image/video). Read this
[blog](https://link.medium.com/qlbGEnFdyZ)to learn more.

##### Useful links

1. My GSoC notes -
<https://github.com/sziraqui/pmr-gsoc-tracker/tree/master/notes>

2. Blog (GSoC final evaluation) - <https://link.medium.com/qlbGEnFdyZ>

##### Contact details

Slack - @sziraqui

Email/Hangouts - `sarfarazghlm@gmail.com`

LinkedIn - <https://www.linkedin.com/in/sziraqui>
