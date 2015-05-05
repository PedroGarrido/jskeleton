---
layout: api
title:  "Application"
---

 Application class is a 'container' where to store your webapp logic and split it into small 'pieces' and 'components'.
 It initializes `regions, events, routes, channels and child applications` and provide a global channel to communicate with others apps and a private channel to communicate with it's components,
 A Jskeleton webapp can contain many Jskeleton.Applications and a `Jskeleton.Application` can define multiple child applications (`Jskeleton.ChildApplication`).

 