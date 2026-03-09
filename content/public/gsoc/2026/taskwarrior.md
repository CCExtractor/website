# **TaskWarrior Mobile App**
# GSoC 2026 Goals

**Mentors:** 
- [Shubham Ingale](https://ccextractor.zulipchat.com/#user/862906)
- [Mabud Alam](https://ccextractor.zulipchat.com/#user/856060)

---

### 1. Remove CCSync API related code and make components usable to only Taskchampion Integration
As We are no longer using CCSync backend APIs we need to clean code to remove those API calls and other related code to it.

### 2. Rust Library: Rust library that we are using to manipulate Replica of taskchampion.
It may include following sub goals:
- a. Modularize it
- b. Remove binaries from Repository (also from commit history) and make library compile automatically on every build
- c. Add support for missing variables in application

### 3. Modularize Application to arrange files of Taskchampion and v2
Structure may look like:
```
.
└── app/
    ├── models
    ├── modules
    ├── routes
    ├── services
    ├── tour
    ├── v3 (rename)
    └── taskchampion
```

### 4. Static website for taskwarrior project of CCExtractor on branch fdroid-repo
- a. Static website about CCExtractor's Taskwarrior project
- b. Renaming branch `fdroid-repo` to `public-site`
- c. Have a log of Nightly and Commit that produced it

### 5. Implementation of reports
- Refer: [CCExtractor/taskwarrior-flutter#418](https://github.com/CCExtractor/taskwarrior-flutter/issues/418)

### 6. UI and UX Improvements
Some of the following interfaces are to be implemented as in given mockups
- Issue 1: https://github.com/CCExtractor/taskwarrior-flutter/issues/421
- Issue 2: https://github.com/CCExtractor/taskwarrior-flutter/issues/385

#### References
1. https://github.com/CCExtractor/taskwarrior-flutter/issues/382
2. https://github.com/CCExtractor/taskwarrior-flutter/issues/378
3. https://github.com/CCExtractor/taskwarrior-flutter/issues/385
4. https://github.com/CCExtractor/taskwarrior-flutter/issues/421