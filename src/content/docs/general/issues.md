---
title: Issues & FAQ
description: Troubleshooting common issues and bugs.
---

If you are experiencing issues with the game, please check the following list of common issues and solutions. If you are unable to find a solution to your problem, please ask for help in the [Discord Server](https://discord.gg/ycZPRGRMUf) or [Telegram Group](https://t.me/KanadeDX).

## Known Issues

Below are some existing issues that are currently being worked on:

1. Importing assets other than A000 cause a black screen.
2. Some areas may cause the game to crash.

## Frequently Asked Questions

**Q: I'm using my own StreamingAssets, and the download fails saying `tree.csv` is missing.**

A: If you insist on using your own assets, you need to create the `tree.csv` by running [this Python script](/misc/scripts/tree.py) in the `StreamingAssets` folder.

**Q: The game says cannot find A000 even though I've already transferred the assets.**

A: If you manually transferred the assets instead of using the in-game downloader, you need to manually create a file named `FinishedDownload` in the `StreamingAssets` folder.