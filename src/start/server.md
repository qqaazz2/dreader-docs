---
title: DReader服务端安装
shortTitle: 服务端安装
description: 本文将会指引用户安装DReader到不同的平台上，并且给出下载地址等重要的信息。
cover: /assets/images/cover1.jpg
icon: material-symbols:dns
isOriginal: true
order: 2
author: qqaazz2
date: 2025-12-15
category:
  - 快速开始
tag:
  - 快速开始
  - 服务端安装
sticky: true
star: true
pageview: true
head:
  - - meta
    - name: keywords
      content: 服务端安装, Docker部署, DReader-Server, docker-compose, 服务端配置, 安装教程, 服务端部署, MySQL配置, Redis配置
---
## 开始之前

> DReader 服务端采用 **Docker** 方式进行部署。  
> 在开始安装之前，请确保您的计算机已正确安装 Docker 环境。  
> 如果尚未安装 Docker，可前往 [Docker 官网](https://www.docker.com/get-started) 下载并安装与您操作系统对应的版本；  
> 也可以在 **哔哩哔哩** 搜索相关的 Docker 安装教程，或参考 **菜鸟教程** 中针对不同系统的 Docker 安装指南。

## DReader 服务端安装

在仓库的**Releases**中您可以看到一个用于下载的 **ZIP 压缩包**，其中已包含部署所需的全部文件。[点此下载ZIP压缩包](https://github.com/qqaazz2/DReader-Server/releases/tag/v1.1.0)
请将该压缩包下载后解压到您任意喜欢的目录中即可使用。  
下面为解压后的文件结构示意图：
![解压后的目录结构](/assets/image/server/1.png "解压后的目录结构")

您可以根据自身需求打开 `docker-compose.yaml` 文件进行自定义配置，例如修改 **Redis 端口**、**MySQL 密码**、**MinIO 服务地址** 等参数。  
在默认情况下，配置已适用于大多数使用场景，无需进行任何修改即可直接使用。  
**对于首次使用 Docker 的用户，不建议自行调整相关配置项，以免影响服务的正常启动与运行。**

***

接下来请进入解压后的文件所在目录，并在该目录下打开命令行工具。

> **Windows 用户**：  
> 可在文件资源管理器的地址栏中直接输入 `cmd` 并回车，即可在当前目录下打开命令行终端。
>![解压后的目录结构](/assets/image/server/2.png "解压后的目录结构")
> **Linux 用户**：  
> 可在文件管理器中右键选择「在终端中打开」，或手动打开终端并使用 `cd` 命令进入对应目录。  
> 部分 Linux 环境下可能需要使用 `sudo -i` 切换至 root（管理员）权限后再进行相关操作。

在命令行终端中依次执行以下命令以构建并启动服务：

```bash
docker-compose build
docker-compose up -d
```

> 若此前已部署并运行过该服务，请先执行 docker-compose down 停止并移除上一次运行的容器，再重新执行上述命令以启动服务。

当终端中输出类似如下的信息时，即表示服务已成功部署并正常启动。

```md
Creating container_redis ... done
Creating container_mysql ... done
Creating service_springboot ... done
```

## 服务端链接配置

首次使用 DReader 客户端时，需要正确配置服务端链接地址，以确保客户端能够正常连接到 DReaderServer。

### 链接填写规则

- **本地部署**：填写本机 IP 地址 + 端口号，例如 `127.0.0.1:8081` 或本地局域网 IP（如 `192.168.1.x:8081`）。默认端口为 **8081**。
- **外部服务器部署**：填写服务器公网 IP 或绑定的域名，例如 `example.com:8081` 或 `123.45.67.89:8081`。

> 推荐使用局域网 IP（如 `192.168.1.x:8081`）时，确保客户端与服务端处于同一网络环境下，可获得更快的响应速度。

配置完成后，客户端将与服务端建立连接，后续如需更换地址，可随时在系统功能中点击**编辑服务端链接**进行修改。

### 初次配置操作流程

1. 打开 DReader 客户端，进入登录页面。
2. 点击右上角或底部的 **设置服务端链接** 按钮。

   ![初次登录点击设置服务端链接按钮](/assets/image/server/3.png "初次登录点击设置服务端链接按钮")

3. 在弹出的配置窗口中输入正确的服务端地址（例如 `192.168.1.x:8081`），点击 **提交**。

   ![服务端链接配置弹窗](/assets/image/server/4.png "服务端链接配置弹窗")

4. 提交成功后，刷新页面即可加载验证码并继续登录。

> 配置成功后，客户端会自动保存该地址，下次启动无需重复设置（如需切换服务端，可通过系统设置重新编辑）。