---
title: "Create Python bindings for ectool."
---

**Mentors:**
Carlos (carlos.fernandez)

**Time estimation**
350 hours

### Project Brief
The Framework laptops are becoming popular among Linux enthusiasts. One problem they have is that the fan is not great, to the point that software exists now to fine tune when and how fast they spin :-)

[fw-fanctrl](https://github.com/TamtamHero/fw-fanctrl/tree/main?tab=readme-ov-file#installation) is the typical one.

Under the hood, they use [ectool](https://gitlab.howett.net/DHowett/ectool) , a command line tool that lets you change parameters in Framework's embedded controller (EC).

Of course, ideally you wouldn't be spawning a new process every second... which is what happens now. Instead, the functionality would be exposed as a library with python bindings.

## Your task

- Make the requirements changes in ectool so that the functionality is available as a library that can be called from different languages.
- Create, specifically, the Python bindings.
- Integrate your work with fw-fanctrl.

### Qualification tasks

- A proof of concept - create a basic dummy library that returns a constant value to Python (for any of the functions), and integrate it into fw-fanctrl.
