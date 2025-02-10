---
title: "Desktop Actions in Ilia"
---

**Mentor:**
Soumya Ranjan Patnaik

**Time estimation**
175 Hours

### Project Brief
Applications can define `.desktop` files which are configuration files that
provide metadata about an application, such as its name, icon, command to
execute, etc. These files are used by application launchers to render the list
of application.

Desktop Actions within .desktop files are additional actions that can be
performed on an application, such as opening a specific file or performing a
specific operation. These actions are typically made availabe to users via
application menus that appear on right clicking the application entry.

Ilia is an application launcher used by Regolith, but it lacks support for
Desktop Actions.

### Your Job
Add support for Desktop Actions to Ilia. You need to take into account that
Regolith is a keyboard oriented desktop environment, which means the desktop
actions should be accessible without having to click.

### Qualification tasks
Add a clipboard page to Ilia (should work in both X11 and Wayland)
