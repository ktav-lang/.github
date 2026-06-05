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

A full introduction lives on the [organisation landing page](profile/README.md).
The formal specification is in
[`ktav-lang/spec`](https://github.com/ktav-lang/spec). Current
implementations: [`rust`](https://github.com/ktav-lang/rust),
[`csharp`](https://github.com/ktav-lang/csharp),
[`golang`](https://github.com/ktav-lang/golang),
[`java`](https://github.com/ktav-lang/java),
[`js`](https://github.com/ktav-lang/js),
[`php`](https://github.com/ktav-lang/php),
[`python`](https://github.com/ktav-lang/python).

## About this repository

Org-wide defaults for [`ktav-lang`](https://github.com/ktav-lang).
Files here fall back to every repository in the organisation that
doesn't define its own equivalent.

- [`profile/README.md`](profile/README.md) — the landing page shown
  at [github.com/ktav-lang](https://github.com/ktav-lang).
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) — Contributor Covenant
  2.1, applies org-wide.
- [`SECURITY.md`](SECURITY.md) — how to report a security issue.

## Support the project

The author has many ideas that could be broadly useful to IT worldwide —
not limited to Ktav. Realizing them requires funding. If you'd like to
help, please reach out at **phpcraftdream@gmail.com**.

For per-language or per-project contribution guides, see each repo's
own `CONTRIBUTING.md`.
