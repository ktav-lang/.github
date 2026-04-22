# Security Policy

**Languages:** **English** · [Русский](SECURITY.ru.md) · [简体中文](SECURITY.zh.md)

## Reporting a vulnerability

Please report security issues **privately** to
**phpcraftdream@gmail.com**.

Do NOT open a public GitHub issue for security reports — a public
report gives an attacker a head start before a fix is available.

We will:

- Acknowledge your report within **7 days**.
- Keep you informed as we investigate.
- Aim to ship a fix or mitigation within **30 days** of
  confirmation; longer if the issue is deep.
- Credit you in the release notes (unless you ask otherwise).

## Scope

Applies to every repository under the
[`ktav-lang`](https://github.com/ktav-lang) organisation.

The spec and its implementations are in scope:

- [`ktav-lang/rust`](https://github.com/ktav-lang/rust)
- [`ktav-lang/python`](https://github.com/ktav-lang/python)

Application-layer vulnerabilities in software that *uses* Ktav are
out of scope for this repo — report them to the relevant project.

## Supported versions

| Version | Status        |
|---------|---------------|
| 0.1.x   | Supported     |

Older minor versions are not patched retroactively; upgrade to the
latest `0.x` release within the same major.
