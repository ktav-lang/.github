# ktav-lang

**Languages:** [English](README.md) · [Русский](README.ru.md) · **简体中文**

> **Ktav**(כְּתָב,*「书写」*)—— 一种朴素的配置格式。
> JSON 的形状,不用引号,点号分层的键,原生支持多行字符串。
> 规则一屏讲完;没有缩进陷阱。

## 尝一口

```text
port: 20082

banned_patterns: [
    .*\.onion:\d+
]

upstreams: [
    {
        host: a.example
        port: 1080
        timeouts: {
            read: 30
            write: 10
        }
    }
]

motd: (
    Welcome to the node.
    Please behave.
)
```

## 仓库

| 仓库                                                | 实现                            | 安装                                                  |
|-----------------------------------------------------|---------------------------------|-------------------------------------------------------|
| [`spec`](https://github.com/ktav-lang/spec)         | 规范 + 一致性测试套件           | —                                                     |
| [`rust`](https://github.com/ktav-lang/rust)         | 参考 Rust crate                 | `cargo add ktav`                                      |
| [`csharp`](https://github.com/ktav-lang/csharp)     | C# / .NET                       | `dotnet add package Ktav`                             |
| [`golang`](https://github.com/ktav-lang/golang)     | Go                              | `go get github.com/ktav-lang/golang`                  |
| [`java`](https://github.com/ktav-lang/java)         | Java / JVM                      | `io.github.ktav-lang:ktav`(Maven Central)             |
| [`js`](https://github.com/ktav-lang/js)             | JS / TS(Node、Deno、Bun、浏览器)| `npm install @ktav-lang/ktav`                         |
| [`php`](https://github.com/ktav-lang/php)           | PHP                             | `composer require ktav-lang/ktav`                     |
| [`python`](https://github.com/ktav-lang/python)     | Python                          | `pip install ktav`                                    |

## 规范

当前稳定版本:**[Ktav 0.1.0](https://github.com/ktav-lang/spec/blob/main/versions/0.1/spec.md)**。

此格式自己吃自己的狗粮:[`versions.ktav`](https://github.com/ktav-lang/spec/blob/main/versions.ktav)
是所有版本的机读索引,正是用 Ktav 写成的。

## 座右铭

> **做配置的朋友,别做它的审问者。配置并不完美 —— 但它已是最好的那一份。**

## 支持本项目

作者有许多构想,可能对全球 IT 广泛有益——不局限于 Ktav。实现这些
构想需要资金支持。如果您愿意提供帮助,请联系
**phpcraftdream@gmail.com**。

## 许可证

所有 `ktav-lang` 下的仓库均采用 MIT 许可证。
