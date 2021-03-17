---
title: "Server Application Structure"
---

#### Files and Directories

The most important directories and files in server application are:
```
./ server base path

   archive/                      extracted cc files 
       Year/Month/Day/
            *.srt, *.txt, *.bin   files' names match to ids in programs table in db 
   bin/                          executable files
       build/                    object files generated during compilation
       server                    server app executable
       ccextractor               
   config/                      
       db.ini                    database configuration (user, password etc)
       server.ini                server app configuration (port, logs etc)
       web.ini                   Web site configuration (not used)
   docs/                         doxygen docs, readme images
   io/                           files generated during runtime
       cce_input/                ccextractor input named pipes
       cce_output/               ccextractor output files
       web/                      Web site buffer
   logs/                         server app log files
   src/                          server app sources
   tests/                        test scripts and test client app
   web/                                        
       *.php                     Web site additional files
       public/                   application Web root, contains Web accessible files
           css/                                
           js/                                 
           *.php                               
   Makefile                      Makefile for compiling server app and generating docs

```
