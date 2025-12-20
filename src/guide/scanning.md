---
title: 文件扫描
description: 本文详细介绍 DReaderServer 的书籍文件组织方式、多层级系列结构支持，以及文件扫描与图片扫描功能的使用方法，帮助您高效管理本地 EPUB 小说库。
cover: /assets/images/cover1.jpg
icon: material-symbols:document-scanner
isOriginal: true
order: 2
author: qqaazz2
date: 2025-12-18
category:
  - 食用指南
tag:
  - 食用指南
  - 文件扫描
sticky: true
star: true
pageview: true
head:
  - - meta
    - name: keywords
      content: 文件扫描, 书籍扫描, EPUB扫描, 图片扫描, 文件结构, 系列管理, 自动入库, Bangumi刮削
---

本文详细介绍 DReaderServer 的书籍文件组织方式、多层级系列结构支持，以及文件扫描与图片扫描功能的使用方法，帮助您高效管理本地 EPUB 小说库。

<!-- more -->

## 文件结构

部署 DReaderServer 服务端后，ZIP 包中已预创建用于存放小说 EPUB 文件的文件夹，路径为 `/files/books`。您可以将所有书籍文件放置在此文件夹中，支持多层级目录结构，例如：

```text
books
├── SeriesA # 系列 A
│ ├── book1.epub
│ └── book2.epub
│
├── SeriesB # 系列 B
│ ├── book3.epub
│ └── book4.epub
│
└── SeriesC # 系列 C
  └── SeriesD # 系列 D
  ├── book7.epub
  └── book8.epub
├── book5.epub
└── book6.epub
```

### 结构说明

- **主目录下直接放置的 EPUB 文件**（如 `book5.epub`、`book6.epub`）：会在客户端首页的系列列表中作为独立书籍显示，与系列文件夹并列。
- 客户端会根据类型在卡片**右上角**显示不同图标：
  - 单本小说：显示小说图标，点击直接进入阅读页面。
  - 系列文件夹：显示系列图标，点击进入系列详情页面。

系列详情页面（如 SeriesC）内的逻辑与首页一致：

- 点击小说 → 进入阅读页面
- 点击子系列 → 进入下一级系列详情页面

支持任意层级的嵌套结构，提供灵活的书籍组织方式。

![卡片右上角图标示意](/assets/image/scanning/1.png "卡片右上角图标示意")

## 文件扫描

在首页或系列页面中，您可以随时点击扫描按钮，触发服务端对 `/files/books` 文件夹进行扫描。

### 扫描功能

- 自动检测并导入尚未录入的新书籍。
- 解析 EPUB 文件，提取内置封面、元数据等信息。
- 初次部署后会进行完整扫描，请耐心等待解析完成。

扫描完成后，系统会自动为**新增书籍**通过 [Bangumi](https://bgm.tv/) 进行信息刮削，包括：

- 原作名称
- 作者
- 简介
- 其他相关元数据

> **注意**：信息刮削过程在后台异步运行，无需等待即可继续使用程序。

### 扫描按钮位置

![桌面端首页扫描按钮](/assets/image/scanning/2.png "桌面端首页扫描按钮")  
![桌面端系列列表页扫描按钮](/assets/image/scanning/3.png "桌面端系列列表页扫描按钮")  
![移动端系列列表页扫描按钮](/assets/image/scanning/4.png "移动端系列列表页扫描按钮")

## 图片扫描

当您切换文件适配器或怀疑封面显示异常时，可使用**图片扫描**功能。

### 功能说明

- 重新从 EPUB 文件中提取并更新封面图片。
- 清理数据库中已不再使用的废弃图片资源，释放存储空间。
- 确保所有书籍封面显示正确且最新。

建议在修改书籍文件或更换存储路径后执行此操作。

![桌面端首页扫描图片按钮](/assets/image/scanning/5.png "桌面端首页扫描图片按钮")  
![桌面端系列列表页扫描图片按钮](/assets/image/scanning/6.png "桌面端系列列表页扫描图片按钮")  
