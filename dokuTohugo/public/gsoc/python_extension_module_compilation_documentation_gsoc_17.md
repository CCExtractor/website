##### Compiling the Python Extension module for CCExtractor

#### Dependencies

` * The Python extension module for Python module has additional dependencies in comparison to the dependencies of CCExtractor. The documentation about the dependencies of CCExtractor can be accessed `[`here`](https://github.com/CCExtractor/ccextractor#compiling)`. `\
` * However, for compiling of the Python extension module for CCExtractor, the user needs to compile the following two dependencies:`

SWIG
----

` * SWIG is used for generating the wrappers for C code in CCExtractor as well as for generating the module. The user needs to install SWIG or else the compilation of Python extension module will fail. For, compiling the source, the user can find useful resources `[`here`](http://www.swig.org/download.html)`.`\
` * For standard installation, for Ubuntu, the user can do `

`sudo apt-get install swig` //(This has been tested on ubuntu-16.04
(xenial)).//

Python-dev package
------------------

` * The Python-dev package is used by Python Extension module for accessing the functions and definitions made in C-API for accessing Python functions and other functionality.`\
` * The user needs to install this package in addition to SWIG. The installation procedure is highly OS dependent and hence left at the user-end for exploration. `

##### Installing the extension module

//(This section is for contributors who want to compile the extension
module without installing)//

` * After the user has successfully installed the dependencies as stated in the above section, then the user can proceed to install the extension module via PyPI with the command:`

`sudo pip install ccextractor or pip install ccextractor --user`

` * For installation in virtual environment however, the user may use `

`pip install ccextractor`

##### Compiling the extension module

//(This section is for contributors who want to compile the extension
module without installing)//

` * For compiling the Python extension module, the user is needed to get a clone of the main repository for `[`CCExtractor`](https://github.com/CCExtractor/ccextractor)`.`\
` * The following are the exact steps to be followed after the clone of the main repository has been obtained by the user.`\
`      * //cd api// (changing the current working directory to api directory)`\
`      * //./build_library// (running the build_library script)`

The entire compilation procedure is taken care of by the
[build\_library](https://github.com/CCExtractor/ccextractor/blob/master/api/build_library)
script.

` * After the compilation is successful, then the user would have ccextractor.py module along with _ccextractor.so in the api directory. Then the user can import this module.`\
` * However, the point to be noted here is that the extension module has not been installed on the user system. It has just been compiled. So the user needs to import this module only from the api directory. `

##### PyPI module

//(This section is for contributors who want to upload the package to
PyPI)//

` * The PyPI module that has been uploaded has many things added to the CCExtractor code tree and all of this can be found `[`here`](https://github.com/Diptanshu8/ccextractor/tree/manifest_file)` (branch - manifest_file).`\
` * The contributor is advised to use the documentation at `[`//‘An`` ``Introduction`` ``to`` ``Distutils’//`](https://docs.python.org/2/distutils/introduction.html)` and its subsequent parts to understand this section.`\
` * The overall strategy or steps that have been followed to generate the distribution for being uploaded to PyPI is as follows:`

### Adding files to distribution and generating the distribution

` * All the files that are needed to be included in the package distribution are to be added the MANIFEST file as done `[`here`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/MANIFEST.in)`. For understanding the syntax used in MANIFEST file the user can check this `[`documentation`](https://docs.python.org/2/distutils/sourcedist.html#specifying-the-files-to-distribute)`.`\
` * After the MANIFEST file has been written properly, the user can generate the distribution package by the command`

`python setup.py sdist`

` * This command would generate the distribution on the basis of MANIFEST file and place in the dist/ directory as a .tar.gz file until specified otherwise by the user.`\
` * One thing to mention about the MANIFEST file is that it can only include files/folders from the folder it is defined within. It cannot include directories/files from parent directory or any other child directory. However, in the MANIFEST file I used, I have added the symlink to `[`src`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/src)` main `[`src`` ``directory`](https://github.com/Diptanshu8/ccextractor/tree/manifest_file/src)` so that the source code can be added to the package distribution via the MANIFEST file.`

### An analysis of the setup.py file used

` * The `[`setup.py`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/setup.py)` has been used to install the Python module on the user system. To understand what all the parameters mean in `[`setup`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/setup.py#L22)` the user must refer to `[`this`` ``documentation`](https://docs.python.org/2/distutils/setupscript.html)`.`\
` * The cmdclass defined at `[`line`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/setup.py#L33)` is a very important part of the script as it internally makes call to the scripts included in `[`package_build_scripts`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/package_build_scripts)`. A point to note is that this directory is used to include the scripts into the package distribution via the MANIFEST file.`\
` * The scripts in package_build_scripts are the scripts which do the actual compilation of the source code to required python module and shared object. The user is advised to refer to `[`build_library_package`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/package_build_scripts/build_library_package)` and `[`build_api_package`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/package_build_scripts/build_api_package)` to understand how to compilation process takes place. The user may also refer to this `[`documentation`](public/gsoc/python_extension_module_technical_documentation_gsoc_17)` for understanding how the build scripts work.`\
` * For any modifications made to the build scripts, viz, `[`build_library`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/build_library)` and `[`build_api`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/build_api)` corresponding modifications are to be made to the scripts included in package_build_scripts so that the compilation does not fail while installing the Python extension module.`\
` * The `[`ccextractor.i`](https://github.com/Diptanshu8/ccextractor/blob/manifest_file/api/package_build_scripts/ccextractor.i)` used in the package_build_scripts is an interface file used by SWIG to generate the wrapper codes. This is an essential part and should always be present with the distribution.`

##### Uploading to PyPI

` * For uploading the extension module to Python, I have followed the exact steps mentioned at `[`here`](http://peterdowns.com/posts/first-time-with-pypi.html)`.`\
` * The GitHub repository which I used to host the tar as mentioned in the above link could be found `[`here`](https://github.com/Diptanshu8/CCExtractor-extension-module)`.`\
` * However, there is no mandatory rule to continue hosting the source distribution from the same repository. If a user feels that a newer version for CCExtractor’s extension module is ready to be shipped, then he can follow the same steps from the link mentioned in first point of this section. In those steps, he can create a self-owned public repository and upload the module to PyPI.`
