# ktav-lang

**Languages:** **English** · [Русский](README.ru.md) · [简体中文](README.zh.md)

> **Ktav** (כְּתָב, *"writing"*) — a plain configuration format.
> JSON-shape, no quotes, dotted keys, native multi-line strings.
> One screen of rules; zero indentation traps.

## A taste

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

## Repositories

| Repo                                                           | What                                                                          |
|----------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`spec`](https://github.com/ktav-lang/spec)                    | Canonical specification and language-agnostic conformance test suite.         |
| [`rust`](https://github.com/ktav-lang/rust)                    | Rust implementation.                                                          |
| [`python`](https://github.com/ktav-lang/python)                | Python implementation.                                                        |

## Specification

Current stable: **[Ktav 0.1.0](https://github.com/ktav-lang/spec/blob/main/versions/0.1/spec.md)**.

The format dog-foods itself: [`versions.ktav`](https://github.com/ktav-lang/spec/blob/main/versions.ktav)
is the machine-readable index of all versions, written in Ktav.

## Motto

> **Be the config's friend, not its examiner. The config isn't
> perfect — but it's the best one.**

## Support the project

The author has many ideas that could be broadly useful to IT worldwide —
not limited to Ktav. Realizing them requires funding. If you'd like to
help, please reach out at **phpcraftdream@gmail.com**.

## License

All `ktav-lang` repositories are MIT-licensed.
