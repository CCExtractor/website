# Extend rclone\'s webui

rclone webui currently supports basic plugins like a video player and a
music player. This functionality could be extended to incorporate new
plugins which could be added by a user on the go, and developers could
develop these plugins for rclone.

The functionality will be something similar to Google Drive. Ex. If you
want to edit a doc file, rclone webui will have a plugin for it, once
you enable the plugin, you would be able to edit documents using rclone.

 **Deliverables:\*\*\\\\

1\. A plugin dashboard, where you can install, remove and update plugins.
\\\\ 2. A plugins repository from where the plugins could be fetched
into the local rclone instance. \\\\ 2. The plugins should work in an
isolated environment so that they cannot interfere with the system data.
\\\\ 3. Develop at least 3 demo plugins for demonstration. This could be
a word processor, a photo editor, etc. \\\\ 4. We could allow the
developer to communicate with their own server and fetch data from
there. \\\\

 **Current Stack:\*\*\\\\

rclone backend: GoLang\\\\ rclone webui: Reactjs \\\\

 **URLs:\*\*\\\\

rclone GitHub:
[https://github.com/rclone/rclone\\\\](https://github.com/rclone/rclone\\)
react frontend:
[https://github.com/rclone/rclone-webui-react\\\\](https://github.com/rclone/rclone-webui-react\\)
rclone forum:
[https://forum.rclone.org/\\\\](https://forum.rclone.org/\\) webui
discussion thread:
[https://forum.rclone.org/t/beta-testing-webgui-for-rclone/11156\\\\](https://forum.rclone.org/t/beta-testing-webgui-for-rclone/11156\\)

 **Qualification tasks\*\*\\\\

Take a look at [this
page](https://ccextractor.org/public/gsoc/takehome).
