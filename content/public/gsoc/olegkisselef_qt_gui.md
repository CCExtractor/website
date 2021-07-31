---
title: "Cross-platform Qt GUI"
---

{{< tip "warning" >}}
This GUI is now archived, use the flutter one from  [here](/public/general/flutter_gui)
{{< /tip >}}

CCExtractor Cross-platform Qt GUI lets users not familiar with CLI to
extract subtitles. Oleg
[implemented](https://github.com/kisselef/ccextractor-gui-qt)
the application using [ Qt framework](https://www.qt.io/),
what makes possible to run it on Linux/Unix/MacOSX/Windows desktop
platforms. Design of the application is based on previous windows-only
version, but it was a bit redesigned to follow "Extracting subtitles
has never been so easy" concept and be as user-friendly as possible.
Some options were also added according to latest ccextractors'
features.

{{< gallery "images/qt-gui/ccextractor-qt-gui-input.png,images/qt-gui/ccextractor-qt-gui-main.png,images/qt-gui/ccextractor-qt-gui-output.png" "Qt input::Qt main::Qt output" >}}


### How to build and run

Qt version \>= 5.0 is required to build the application. There are two
ways to build it: Using Qt Creator IDE and qmake automation build
system. Download and install [Qt Creator
IDE](https://www.qt.io/download) for your platform. Open the
project file and click "run". This will build and run application. If
you want to build it from console, run: 
```
qmake
make
```
After the application build process finishes, move the ccextractor binary file
(named "ccextractor" on Unix/Linux/Mac, "ccextractor.exe" on
Windows) into the directory that contains the GUI's binary.

### How to use GUI


{{< picture "qt-gui/ccextractor-qt-gui-main-explained.png" "qt-gui/ccextractor-qt-gui-main-explained.png" "Qt explained" >}}


Main window has 5 areas:

1. Main menu. Exit an application or check the about box.
2. Source selection area. Pick up input files or set stream url using one of tabs: Files (add/remove files to/from a list), Filesystem (browse filesystem and select one or more files) and Network (set url and port for UDP streams).
3. Summary area. Nothing could be edited by user in this area. Just a brief summary of options selected. It is impossible to show all options selected, so the most critical could be seen here.
4. Quick options area. If ccextractor supports any options, that GUI doesn't support, you can type these options in Additional options field and they will be passed to ccextractor.
5. Execution area. Click Extract button to launch extraction process, Options button to edit options in Options window. After extraction process is finished, Log button becames enabled, so you can view the log in a default text file viewer.
