# Language and Localization Rules

## Строгое правило: Только английский язык

**Все сайты строго на английском языке. Русский язык запрещен.**

### Основные правила

1. **Язык по умолчанию**: Английский деловой стиль с акцентом на USA
2. **Ориентация**: USA / UK / GE (Germany), но язык только английский
3. **Русский язык запрещен**: Ни в коде, ни на сайте, ни в комментариях
4. **Проверка на кириллицу**: Обязательная проверка кода на наличие кириллицы

## Язык контента

### Деловой английский (USA стиль)

- **Формальный тон**: Professional business English
- **USA акцент**: Использовать американские варианты написания
- **Примеры**:
  - "color" (не "colour")
  - "organization" (не "organisation")
  - "center" (не "centre")

### Целевые регионы

- **USA**: Основной рынок
- **UK**: Вторичный рынок
- **GE (Germany)**: Третичный рынок
- **Язык**: Только английский для всех регионов

## Google Translate интеграция

### Обязательная интеграция

**Все сайты должны иметь встроенный Google Translate.**

### Реализация

```html
<!-- Google Translate Widget -->
<div id="google_translate_element"></div>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,es,fr,de,it,pt,ru,zh,ja,ko',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}
</script>
<script type="text/javascript" 
  src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>
```

### Правила размещения

1. **Видимое место**: Переводчик должен быть доступен на всех страницах
2. **Обычно в header или footer**: Логичное место для пользователя
3. **Не навязчиво**: Не мешать основному контенту

### Поддерживаемые языки

- English (en) - основной
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)

**Примечание**: Переводчик добавляется для удобства пользователей, но основной язык сайта - английский.

## Проверка на кириллицу

### Строгое правило

**Обязательная проверка кода на наличие кириллицы перед коммитом.**

### Автоматическая проверка

#### Скрипт проверки

Скрипт находится в `scripts/check-cyrillic.sh` и проверяет:
- Исходный код Astro (`apps/web/astro/src`)
- Конфигурационные файлы (`apps/web/astro/src/config`)
- Python код (`services/api-lambda/src`)
- Документацию (README.md, CHANGELOG.md)

**Использование:**

```bash
# Из корня проекта
./scripts/check-cyrillic.sh

# Или через npm/pnpm из apps/web/astro
cd apps/web/astro
pnpm check:cyrillic
```

#### Интеграция в pre-commit hook

```bash
# .git/hooks/pre-commit
#!/bin/bash

# Проверка на кириллицу
./scripts/check-cyrillic.sh
if [ $? -ne 0 ]; then
  echo "Commit rejected: Cyrillic characters found"
  exit 1
fi
```

### Ручная проверка

Перед коммитом проверять:

```bash
# Поиск кириллицы в коде
grep -r '[А-Яа-яЁё]' apps/web/astro/src

# Поиск в конкретных файлах
grep '[А-Яа-яЁё]' apps/web/astro/src/config/brand.ts
grep '[А-Яа-яЁё]' apps/web/astro/src/pages/*.astro
```

### Где проверять

1. **Исходный код**: Все `.astro`, `.ts`, `.js`, `.tsx`, `.jsx` файлы
2. **Конфигурация**: `src/config/*.ts`
3. **Компоненты**: `src/components/**/*.astro`
4. **Страницы**: `src/pages/**/*.astro`
5. **Стили**: `src/styles/*.css` (комментарии)
6. **Документация**: README, CHANGELOG (только английский)

### Исключения

**НЕ проверять**:
- `node_modules/` - зависимости
- `.git/` - git метаданные
- `dist/` - скомпилированные файлы
- `.astro/` - кэш Astro

## Правила для кода

### Комментарии

- **Только английский**: Все комментарии на английском
- **Деловой стиль**: Профессиональные комментарии
- **Примеры**:
  ```typescript
  // Good
  // Initialize user authentication service
  
  // Bad
  // Инициализация сервиса аутентификации пользователей
  ```

### Имена переменных и функций

- **Только английский**: Все имена на английском
- **Примеры**:
  ```typescript
  // Good
  const userName = 'John'
  function getUserData() {}
  
  // Bad
  const имяПользователя = 'John'
  function получитьДанныеПользователя() {}
  ```

### Строки в коде

- **Только английский**: Все строки на английском
- **Примеры**:
  ```typescript
  // Good
  const message = 'Welcome to our website'
  
  // Bad
  const message = 'Добро пожаловать на наш сайт'
  ```

## Правила для контента сайта

### Текст на страницах

- **Только английский**: Весь контент на английском
- **Деловой стиль**: Professional business English
- **USA акцент**: Американские варианты написания

### Конфигурация (brand.ts)

```typescript
// src/config/brand.ts
export const brand = {
  name: 'Company Name', // English only
  description: 'Professional business description', // English only
  contact: {
    email: 'contact@example.com',
    phone: '+1 234 567 8900',
    address: '123 Street, City, State, USA', // English only
  },
  // ... все значения на английском
}
```

### SEO метаданные

```html
<!-- English only -->
<meta name="description" content="Professional business website">
<meta name="keywords" content="business, services, professional">
```

## Запрещено

- **Использовать русский язык**: Нигде в проекте
- **Кириллица в коде**: Строго запрещена
- **Русские комментарии**: Только английский
- **Русские строки**: Только английский
- **Русские имена переменных**: Только английский
- **Игнорировать проверку на кириллицу**: Обязательная проверка перед коммитом

## Best Practices

1. **Всегда проверять на кириллицу**: Перед каждым коммитом
2. **Использовать Google Translate**: Для удобства пользователей
3. **Деловой английский**: Профессиональный стиль
4. **USA акцент**: Американские варианты написания
5. **Консистентность**: Единый стиль по всему сайту
6. **Автоматизация**: Использовать скрипты для проверки

## Интеграция в CI/CD

### GitHub Actions проверка

```yaml
# .github/workflows/check-cyrillic.yml
name: Check Cyrillic

on: [push, pull_request]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check for Cyrillic
        run: |
          if grep -r -P '[А-Яа-яЁё]' apps/web/astro/src --exclude-dir=node_modules; then
            echo "ERROR: Found Cyrillic characters!"
            exit 1
          fi
```

