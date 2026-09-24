>>>>> lang=en
# .github

**Languages:** **English** · [Русский](README.ru.md) · [简体中文](README.zh.md)

## What Ktav is

**Ktav** (Hebrew **כְּתָב**, "writing") is a plain configuration format.
JSON-shape (Null, Bool, Integer, Float, String, Array, Object), but
**no quotes, no commas**, dotted keys for nesting, native multi-line
strings. Every line either stands on its own or depends only on
explicit, visible brackets above it. The whole rule set fits on one
screen; no indentation pitfalls.

```text
port: 20082
log_level: info

upstreams: [
    {
        host: a.example
        port: 1080
    }
]
```

>>>>> lang=ru
# .github

**Languages:** [English](README.md) · **Русский** · [简体中文](README.zh.md)

## Что такое Ktav

**Ktav** (ивр. **כְּתָב**, «письмо») — простой формат конфигурации.
Форма JSON (Null, Bool, Integer, Float, String, Array, Object), но
**без кавычек, без запятых**, вложенность через точку в ключах,
многострочные строки «из коробки». Каждая строка либо самодостаточна,
либо зависит только от явных видимых скобок выше. Правила умещаются
на одном экране; никаких ловушек с отступами.

```text
port: 20082
log_level: info

upstreams: [
    {
        host: a.example
        port: 1080
    }
]
```

>>>>> lang=zh
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
        port: 1080
    }
]
```

