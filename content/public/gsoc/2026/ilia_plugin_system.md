---
title: "Pluggable Architecture for Ilia"
---

**Mentor:**
Soumya Ranjan Patnaik

**Time estimation**
350 Hours

### Project Brief

Ilia is a highly responsive, GTK-based desktop executor and application launcher used by Regolith. Currently, many of Ilia’s "pages" (such as keybindings, tracker search, and notifications) are hardcoded and tightly coupled to the Regolith Linux ecosystem.

This monolithic design makes it difficult to use Ilia as a standalone launcher outside of Regolith, and extending it with new pages requires direct upstream contributions to the core repository. While a plugin system is necessary to decouple these pages, previous attempts to implement dynamic loading have hit architectural dead ends. Because Ilia is a launcher, performance is absolutely critical—it must appear on screen almost instantly. Loading plugins at runtime cannot introduce a significant runtime cost, latency, or block the main thread.

### Your task

Design and implement a robust, high-performance plugin system for Ilia. Your architecture must bypass the performance bottlenecks of standard dynamic loading and guarantee sub-millisecond overhead during Ilia's initial launch sequence.

You will need to explore and implement alternative architectures—such as lazy loading via lightweight manifests, an out-of-process client-daemon model, or asynchronous initialization. Once the stable plugin interface is established, you will decouple existing Regolith-specific pages out of the core binary and into independent plugins, ensuring no regressions in startup time or memory footprint.

### Qualification tasks

- Come up with a minimal proof of concept (PoC) in Vala/C for the plugin system architecture that you plan to use. It should demonstrate how the core host will interact with a dummy plugin while maintaining instant startup performance.
- Identify key technical challenges and find ways to work around them.

**Note: The code should be short, concise, and easy for the maintainers to review. Please avoid submitting large, AI-generated codebases that obscure the core architectural concept.**
