##### Introduction

Videos contain plethora of contextual information. For example, in a
movie there are fighting scenes, sentimental scenes, romantic scenes,
and many others. In a cricket match, there are wickets, sixes, fours et
cetera. With the advent of the data-driven age, amateurs, researchers,
and organisations alike require some specific part of this contextual
information for their needs; maybe for creating a highlights reel of a
sports match or mining data from movies for their machine learning
models. This makes parts of certain types of videos very useful. FabBits
tries to automate finding them.  Following are the things it will be
able to detect -

` * Action sequences in movies/shows - ✅\\`\
` * Summary of movies/shows - ✅\\`\
` * Actor-specific scenes in movies/shows - ✅\\`\
` * Jokes in sitcoms - ✅\\`\
` * Slo-mos in Sports - ❌\\`\
` * Goals in Soccer - ✅\\`\
` * Goal misses in Soccer - ⭕\\`\
` * Three pointers in Basketball - ✅\\`

##### Links

Project repo -
[github.com/achie27/FabBits](https://github.com/achie27/FabBits)
 Blog posts - [
medium.com/\@achie27](http://www.medium.com/@achie27) 
Samples - [ Drive
folder](https://drive.google.com/drive/folders/1lsrLW0c7Pq4FYpWZjrCqKs3RFTwL-1ub)

##### Requirements

You need the following things to run FabBits- 1. [
Python3](https://www.python.org/download/releases/3.0/) 
2. [ OpenCV ](https://opencv.org)- Used for image and video
processing  3. [ Moviepy
](https://zulko.github.io/moviepy/) - Used for video editing
and audio processing  4. [ PyQt5
](https://www.riverbankcomputing.com/software/pyqt/intro) -
Used to make the GUI  5. [ Scipy ](https://scipy.org) -
Used for audio processing  6. [
Tesserocr](https://github.com/sirfz/tesserocr) - Used for,
well, OCR  7. [ Pillow
](https://pillow.readthedocs.io/en/latest/) - Used to
preprocess images for OCR  The python dependencies can be installed
by running - 

` pip3 install scipy`\
` pip3 install opencv-python `\
` pip3 install moviepy`\
` pip3 install pyqt5`\
` pip3 install Pillow`\
` pip3 install tesserocr`

or if you are the Anaconda kind -

` conda install -c conda-forge scipy`\
` conda install -c conda-forge opencv `\
` conda install -c conda-forge moviepy `\
` conda install -c anaconda pyqt`\
` conda install -c conda-forge pillow`\
` conda install -c simonflueckiger tesserocr`\
` `

##### Usage

Run the main GUI by -

` python3 main.py`

To find your FabBit of choice -

` * Click `*`MOVIES`*` or `*`SPORTS`*` button for their respective use-cases`\
` * Select the use-case from the sidebar`\
`   * A pop-up dialog will ask for the actor if actor-specific scene was chosen`\
` * Click on `*`Choose`` ``File`*` to select the input video `\
` * Click on `*`Find`` ``FabBits`*\
` * Move the slider in the blue areas, which are the extracted FabBits, and play the video`\
` * Click on `*`Save`` ``FabBits`*` to save the extracted stuff into a video file`

You can also run the respective files of use-cases to get their FabBit,
like - `python3 goal_detector.py soccer_match.mp4`

##### References

All the references can be found listed in the repository's
[readme](https://github.com/achie27/FabBits#readme).
