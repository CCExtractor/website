---
title: "Build a COSMIC based wayland session for Regolith"
---

**Mentor:** Soumya Ranjan Patnaik

**Time Estimation** 350 hours

### Project Brief
Regolith is a keyboard first desktop environment with i3/sway at its core. However, unlike
other sway / i3 based distributions that mostly deal with configuration files and panels,
regolith integrates tightly with components from the GNOME ecosystem for things like managing
system settings, which is usually the painful part.

However, maintaining the GNOME integration has been a major pain point, since GNOME makes
unannounced changes, is not modular and doesn't use standard wayland protocols for configurations.
There's a lot of "glue" code that brings the both ecosystems together, that has to be updated 
everytime GNOME breaks its APIs. However until now, we were pretty limited in terms of GNOME 
alternatives that can be integrated with Regolith. That's where COSMIC comes into picture.

[COSMIC Desktop Environment](https://system76.com/cosmic/) is the new desktop Environment
built from scratch by system76 (the team behind Pop!_OS). Quoting the official website:

>  Its modular architecture is specifically designed to facilitate the creation of unique, 
branded user experiences with ease.

The best part of COSMIC is most of its components use wayland native protocols, which allow for 
better integration with wayland compositors. This will significantly reduce the amount of glue code 
that has to be maintained. It is also very promising in terms of API stability (meaning fewer breaking API changes).

This is why we want to experiment with a variant based on COSMIC. 

### Your Job

We've had some initial success getting COSMIC components to work well with sway and Regolith.
Your job is to make sure the COSMIC integration as seamless as possible. The goal for the project 
is to have a working COSMIC based session that is on par or better in terms of integration with GNOME.

Since COSMIC is wayland native, we're only concerned with the wayland session of regolith.

Here's the subset of functionality/behaviour that may be relevant to the project:

- Keep the base system as lean as possible, keeping only necessary COSMIC components.
- Remove all GNOME dependencies and replace them with COSMIC dependencies.
- Display Settings and Input Settings in particular should be controllable from cosmic-settings.
- Settings Pages that are not relevant to Regolith should be disabled.
- OSDs / overlays should be working, i.e. indicators for brightness and volume
- Settings should be persistent, i.e. resistant to reboots.
- Remove glue code wherever possible. Develop custom settings pages if required.
- Good integration with [`trawl`](https://github.com/regolith-linux/trawl) - the configuration management system inspired by `Xresources`
- Implement settings panels for non-COSMIC / non-GNOME functionality provided by regolith (good to have).
- Ability to choose between cosmic-panel and default bar with i3status-rs (optional).
- Regolith Look based themes should be integrate with COSMIC components (optional).

Note that this list is neither complete, nor does it represent the actual list of priorities.
The exact set of features / functionality should be discussed with the mentor.


### Qualification tasks

- Install Regolith on your system and update regolith components to use `cosmic-session`. Settings, OSDs and idle settings should work.
- Identify thte list of things that work out of the box, the things that might require glue code, etc.
- Come up with a plan and prove that you can execute on it by implementing its initial
  steps.

### Resources

- Find the repo containing all the COSMIC components
  [here](https://github.com/pop-os/cosmic-epoch).

- There is an excellent [talk](https://www.youtube.com/watch?v=bwrBKccfYws) that 
  goes over the choices the architecture, design and ideology of COSMIC. Watching this
  is pretty much a requirement for qualifying.

- [Official COSMIC website](https://system76.com/cosmic/)
