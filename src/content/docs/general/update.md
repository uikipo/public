---
title: Adding Updates
description: Adding OPT updates to the game data.
---

The game adds new content through OPT or option updates. These updates will be released periodically and will contain new songs, events, and other content.

Before release version 250228.1208, only the base game (A000) was supported. However, support for other option updates was added in this version.

Please note that only official updates are tested. They are: A000 (base game), A005, A011, A021.

## Adding Options

To add an option, you can follow these steps:

1. Download the option archive on your mobile device.
2. Unzip the archive and copy the Axxx folder to the `StreamingAssets` folder, next to A000. 
   * Android: `/sdcard/Android/data/app.KanadeDX/files/KanadeDX/StreamingAssets`.
   * iOS: Files app > On My iPad > KanadeDX > StreamingAssets.
3. Open KanadeDX version 250228.1208 or later.
4. Before entering, click on the settings icon in the top right corner.
5. Scroll down, click on "Manually reinitialize all AssetBundles," and start convert.

> If you are updating from an older version of KanadeDX, this process will recheck all asset bundles in A000 as well. However, this is a one-time process, future updates will no longer process files that have been processed before.
