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

Подробнее — на [главной странице организации](profile/README.ru.md).
Формальная спецификация — в репозитории
[`ktav-lang/spec`](https://github.com/ktav-lang/spec). Текущие
реализации: [`rust`](https://github.com/ktav-lang/rust),
[`csharp`](https://github.com/ktav-lang/csharp),
[`golang`](https://github.com/ktav-lang/golang),
[`java`](https://github.com/ktav-lang/java),
[`js`](https://github.com/ktav-lang/js),
[`php`](https://github.com/ktav-lang/php),
[`python`](https://github.com/ktav-lang/python).

## Про этот репозиторий

Общие настройки уровня организации для [`ktav-lang`](https://github.com/ktav-lang).
Файлы из этого репозитория применяются ко всем репозиториям
организации, у которых нет собственного эквивалента.

- [`profile/README.md`](profile/README.md) — главная страница,
  отображаемая по адресу [github.com/ktav-lang](https://github.com/ktav-lang).
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) — Contributor Covenant
  2.1, действует во всей организации.
- [`SECURITY.md`](SECURITY.md) — как сообщить о проблеме с безопасностью.

## Поддержите проект

У автора много идей, которые могут быть полезны IT во всём мире, — и
далеко не только для Ktav. Их реализация требует финансирования. Если
вы хотите помочь — пишите на **phpcraftdream@gmail.com**.

Руководства по вкладу для конкретного языка или проекта смотрите
в собственном `CONTRIBUTING.md` каждого репозитория.
