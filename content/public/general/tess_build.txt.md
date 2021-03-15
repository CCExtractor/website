##### Building Tesseract in Windows

 **Warning - the development of the current version of Tesseract
        and cppan is very active, and this tutorial may be obsolete.
        This documentation is working at 21.12.2016\*\*

Tesseract is an optical character recognition engine for various
operating systems. This library is currently used in CCExtractor. At the
moment, the alpha version 4.0.0 is available from current master
<https://github.com/tesseract-ocr/tesseract>

Historically, build it for Windows is complex and unclear. Now in
projects with tesseract is advised to use cppan
(<https://github.com/cppan/cppan>) that can be used in CMake projects
and automatically downloads all dependencies. This program is used for
the compilation of the current master of tesseract (because of the
dependencies), too.

You must install Git, CMake, cppan and put in to PATH variable
<https://github.com/tesseract-ocr/tesseract/wiki/Compiling#windows> And
it is recommended to install Visual Studio 2015

Open cmd.exe (I think better as administrator) and run
`git clone `[`https://github.com/tesseract-ocr/tesseract`](https://github.com/tesseract-ocr/tesseract)` tesseract`
`cd tesseract` `cppan --self-upgrade` `cppan` `mkdir build && cd build`
`cmake ..` First problem - process can hangs at:
`-- Performing 71 checks using 4 thread(s)`
`-- This process may take up to 5 minutes depending on your hardware`
Follow this hack -
<https://github.com/tesseract-ocr/tesseract/issues/464#issuecomment-264166445>

Try to build it: `cmake --build . --config Release` You can get errors:
{{
<https://cloud.githubusercontent.com/assets/5406399/21389984/7e4508ee-c795-11e6-85ef-67489154fa24.png>
}}

This problem is related to the bad files from libtiff.

How to fix it - during the commands you have new files at
C:/Users/user/.cppan. In folder .cppan/storage/lnk in one of folders you
can find tiff-4.0.7.sln, try to open it in Visual Studio and compile

{{
<https://cloud.githubusercontent.com/assets/5406399/21390188/9dffcdee-c796-11e6-8c67-02f541d85ade.png>
}}

Open the file tif\_config.h and edit 189 line <code>

1.  define SIZEOF\_UNSIGNED\_LONG 4

~~~ Open the file tiffconf.h and edit 29 line <code>

1.  define TIFF\_UINT64\_T unsigned long int

~~~

Build it again. All should be OK.

Try to run it in console again: `cmake --build . --config Release`

All should be OK {{
<https://cloud.githubusercontent.com/assets/5406399/21390504/54b285e4-c798-11e6-9c74-f70a9a1d8e12.png>
}}

Now you have deps dll (in tesseract/build/bin/Release), tesseract lib
(in tesseract/build/Release). Deps libs you can find in
C:\\Users\\user\\.cppan\\storage\\lib\\511d09b6\\Release (instead of
511d09b6 you can have other value)

You can also build debug version

`cmake --build . --config Debug`

##### If you want to update Tesseract in ccextractor.sln

Note - if you just add a built libraries to ccextractor.sln without
updating ccextractor OCR code, there may be errors due to legacy code.

Open tesseract/build/tesseract.sln and explore it. To find out where the
header files and .lib files, open Properties of \"tesseract\" project.
You must look at C/C++-\>General-\>Additional Include Directories and
Linker-\>Input-\>Additional Dependencies. DLL files are in
tesseract/build/bin folder. Copy all files in ccextractor\\windows\\libs
and update settings in ccextractor\\windows\\ccextractor.sln

{{
<https://cloud.githubusercontent.com/assets/5406399/21391982/e7f4783e-c79e-11e6-8ca6-58e772a6521c.png>
}}
