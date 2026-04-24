# 安全策略

**Languages:** [English](SECURITY.md) · [Русский](SECURITY.ru.md) · **简体中文**

## 漏洞上报

请**私下**将安全问题发送至
**phpcraftdream@gmail.com**。

请勿为安全问题创建公开的 GitHub issue —— 公开上报会在修复就绪
之前给攻击者争取到先机。

我们会:

- 在 **7 天**内确认收到您的上报。
- 在调查过程中保持与您同步。
- 争取在问题得到确认后的 **30 天**内发布修复或缓解措施;若问题
  较深则可能更久。
- 在发布说明中署名致谢(除非您另有要求)。

## 适用范围

适用于 [`ktav-lang`](https://github.com/ktav-lang)
组织下的所有仓库。

范围涵盖规范及其实现:

- [`ktav-lang/spec`](https://github.com/ktav-lang/spec)
- [`ktav-lang/rust`](https://github.com/ktav-lang/rust)
- [`ktav-lang/python`](https://github.com/ktav-lang/python)
- [`ktav-lang/js`](https://github.com/ktav-lang/js)
- [`ktav-lang/golang`](https://github.com/ktav-lang/golang)

上述每个仓库也各自附带了 `SECURITY.md`，范围收窄到对应绑定 ——
若问题显然属于某个仓库，优先使用该仓库的本地策略。

*使用* Ktav 的软件中出现的应用层漏洞不在本仓库的范围内 —— 请
向相应项目上报。

## 受支持的版本

| 版本    | 状态        |
|---------|-------------|
| 0.1.x   | 受支持      |

更早的 minor 版本不会追溯打补丁;请升级到同一 major 下最新的
`0.x` 发布。
