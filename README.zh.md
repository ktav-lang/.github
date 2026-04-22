# .github

**Languages:** [English](README.md) · [Русский](README.ru.md) · **简体中文**

## Ktav 是什么

**Ktav**(希伯来文 **כְּתָב**,「书写」)是一种朴素的配置格式。
形如 JSON(Null、Bool、Integer、Float、String、Array、Object),
但**无引号、无逗号**,以点号串联嵌套键,多行字符串原生支持。每一行
要么自成一体,要么仅依赖其上方可见的显式括号。全部规则可以装进一
屏;没有缩进陷阱。

```text
port: 20082
log_level: info

upstreams: [
    {
        host: a.example
        port:i 1080
    }
]
```

完整介绍见[组织主页](profile/README.zh.md)。正式规范位于
[`ktav-lang/spec`](https://github.com/ktav-lang/spec)。现有实现:
[`rust`](https://github.com/ktav-lang/rust)、
[`python`](https://github.com/ktav-lang/python)。

## 关于本仓库

[`ktav-lang`](https://github.com/ktav-lang) 组织范围内的默认配置文件。
此处的文件会作为回退默认值应用于组织下所有未自行定义对应文件的仓库。

- [`profile/README.md`](profile/README.md) —— 在
  [github.com/ktav-lang](https://github.com/ktav-lang) 展示的组织主页。
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) —— Contributor Covenant
  2.1,适用于整个组织。
- [`SECURITY.md`](SECURITY.md) —— 如何报告安全问题。

## 支持本项目

作者有许多构想,可能对全球 IT 广泛有益——不局限于 Ktav。实现这些
构想需要资金支持。如果您愿意提供帮助,请联系
**phpcraftdream@gmail.com**。

各语言实现或具体项目的贡献指南请参阅各仓库自身的
`CONTRIBUTING.md`。
