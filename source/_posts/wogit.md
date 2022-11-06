---
title: wogit
date: 2021-03-29 01:47:04
categories: 工具
tags: [工具, git]
excerpt: 执行上下文
poster: https://avatars.githubusercontent.com/u/20430185?v=4
---

`wogit` 是一个 git clone 加速命令行工具，使用加速镜像解决从 `github` 克隆速度慢的问题，在很多情况下能够显著提升 clone 速度。

## 安装

```bash
npm i wogit -g
```

## 使用

`wogit` 的使用，除了支持几个指定特定源的选项之外，其他的与 `git` 一致，基本是把`git`替换成`wogit`即可

```bash
# from
git clone https://github.com/chalk/chalk.git

# ti
wogit clone https://github.com/chalk/chalk.git

# 其他参数不变，跟使用git一样，如
wogit clone https://github.com/chalk/chalk.git --depth=1
```

## 镜像切换

<!-- toc -->

`wogit` 默认使用 `cnpmjs` 镜像，使用 `wogit -h` 可以随时查看镜像切换的选项

```sh
➜ wogit -h
Usage: wogit [options]

Options:
  -V, --version   output the version number
  -cn --cnpm      cnpmjs镜像(默认)
  -fa --fastgit   fastgit镜像
  -ge --gitee     gitee镜像
  -gc --gitclone  gitclone镜像
  -gh --github    使用原始github镜像
  -h, --help      display help for command
```

比如

```bash
# fastgit镜像
wogit clone https://github.com/chalk/chalk.git -fa
wogit clone https://github.com/chalk/chalk.git --fastgit

# gitee镜像
wogit clone https://github.com/chalk/chalk.git -ge
wogit clone https://github.com/chalk/chalk.git -gitee

# 其他不一而足
```

说明：并非所有的仓库都有加速，请根据提示，确认是否需要使用`-gh`强制直接使用 `github` 。

##  最后

`wogit` 只会在 **操作为 clone 且远程为 github 仓库** 时才会使用加速的源，其他情况它是透传给`git`的，因此 clone 外的其他操作也是 OK 的。

可以是可以啦

但是

原汁原味的 `git` 它不香吗

只在 clone github 时用 wogit 就好啦

[图片](https://cdn.pixabay.com/photo/2022/10/28/18/12/lake-7553642_960_720.jpg)
