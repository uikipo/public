---
title: 问题与常见问答 (FAQ)
description: 解决常见问题和错误的指南
---

如果您在游戏中遇到问题，请查看以下常见问题及其解决方案。如果仍无法解决您的问题，请在 [Discord 服务器](https://discord.gg/ycZPRGRMUf) 或 [Telegram 群组](https://t.me/KanadeDX) 中寻求帮助。

## 已知问题

以下是一些正在修复的已知问题：

1. 导入除 A000 以外的资源会导致黑屏。
2. 某些区域可能会导致游戏崩溃。

## 常见问题解答 (FAQ)

**Q: 我正在使用自定义的 StreamingAssets，但下载失败，并提示 `tree.csv` 文件丢失。**

A: 如果您坚持使用自己的资源文件，您需要在 `StreamingAssets` 文件夹内运行 [这个 Python 脚本](/misc/scripts/tree.py) 来生成 `tree.csv` 文件。

**Q: 游戏提示找不到 A000，但我已经传输了资源。**

A: 如果您是手动传输资源而不是使用游戏内置下载器，您需要在 `StreamingAssets` 文件夹内手动创建一个名为 `FinishedDownload` 的文件。