# Commit Rules

**Связанные документы:**
- `.cursor/rules/git-workflow.md` - Подробный workflow с ветками
- `.cursor/rules/tasks.md` - Управление задачами
- `.cursor/rules/project.md` - Общие правила проекта

## Git Branch Strategy

### Branch Structure

- **`dev`**: Основная ветка разработки (development branch)
- **`main`**: Production-ready code (только через merge из dev)
- **`task-XXX`**: Ветки для задач из TODOS.md (где XXX - номер задачи) - **ОСНОВНОЙ ФОРМАТ**
- **`feature/<name>`**: Ветки для новых фич (legacy, использовать task-XXX)
- **`fix/<name>`**: Ветки для исправления багов
- **`docs/<name>`**: Ветки для документации
- **`refactor/<name>`**: Ветки для рефакторинга

### Task-Based Workflow

**Основной процесс работы с задачами:**

1. **Добавить задачу в TODOS.md** с порядковым номером (Task-XXX)
2. **Создать файл задачи** в `tasks/task-XXX.md` с подробным описанием
3. **Закоммитить задачу в dev**: `git commit -m "chore: add task-XXX to todos"`
4. **Создать ветку разработки**: `git checkout -b task-XXX`
5. **Разработка в ветке task-XXX**: Все коммиты идут в task ветку
6. **Перед merge в dev**: 
   - Убедиться что все линтеры пройдены
   - Все тесты проходят
   - CHANGELOG обновлен
   - Ветка синхронизирована с dev: `git checkout dev && git pull && git checkout task-XXX && git rebase dev`
7. **Merge в dev**: `git merge --no-ff task-XXX`
8. **После merge**: Обновить статус задачи (completed), удалить ветку

**Строгое правило**: Задача должна быть закоммичена в dev перед созданием ветки разработки.

### Legacy Feature Workflow

1. **Все фичи разрабатываются в отдельных ветках от `dev`**
2. **Ветка создается от `dev`**: `git checkout dev && git pull && git checkout -b feature/<name>`
3. **Разработка в feature ветке**: Все коммиты идут в feature ветку
4. **Перед merge в dev**: 
   - Убедиться что все линтеры пройдены
   - Все тесты проходят
   - CHANGELOG обновлен
   - Ветка синхронизирована с dev: `git checkout dev && git pull && git checkout feature/<name> && git rebase dev`
5. **Merge в dev**: Через Pull Request или `git merge --no-ff`
6. **После merge**: Удалить feature ветку

### Branch Naming Examples

```
feature/dark-theme-toggle
feature/api-user-endpoint
fix/button-hover-styles
fix/api-health-response
docs/update-readme
refactor/extract-utils
```

## Conventional Commits

Все коммиты должны следовать формату Conventional Commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type (обязательно)

- `feat`: Новая функциональность
- `fix`: Исправление бага
- `docs`: Изменения в документации
- `style`: Изменения форматирования (не влияющие на код)
- `refactor`: Рефакторинг кода
- `test`: Добавление или изменение тестов
- `chore`: Изменения в процессе сборки или вспомогательных инструментах
- `perf`: Улучшение производительности
- `ci`: Изменения в CI/CD конфигурации
- `build`: Изменения в системе сборки
- `revert`: Откат предыдущего коммита

### Scope (опционально)

Указывает область изменений:
- `web`: Frontend (Astro)
- `api`: Backend (Lambda)
- `infra`: Infrastructure (Terraform)
- `docker`: Docker конфигурация
- `deps`: Зависимости

### Subject (обязательно)

- **Краткое описание (до 72 символов)**
- **Начинается с маленькой буквы**
- **Без точки в конце**
- **В повелительном наклонении** ("add", не "added" или "adds")
- **Без эмоджи и смайликов**
- **Конкретное описание**: Что именно изменено, не общие слова

**Плохие примеры:**
```
feat(web): update code
fix: fix bug
chore: changes
```

**Хорошие примеры:**
```
feat(web): add dark theme toggle component
fix(api): correct health endpoint status code
chore(deps): update astro to 5.16.6
```

### Body (опционально, но рекомендуется для значимых изменений)

- **Подробное описание изменений**
- **Объяснение "что" и "зачем"**, а не "как"
- **Отделяется от subject пустой строкой**
- **Каждая строка до 72 символов** (wrap long lines)
- **Для breaking changes**: Обязательно указать что сломалось и как мигрировать

**Когда body обязателен:**
- Breaking changes
- Сложные изменения требующие контекста
- Изменения затрагивающие несколько компонентов
- Изменения в API контрактах

### Footer (опционально)

- Ссылки на issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: описание`

### Полные примеры коммитов

#### Простой коммит (без body)

```
feat(web): add theme toggle button
```

#### Коммит с body

```
feat(web): add dark theme toggle component

Implement theme switching functionality using daisyUI theme system.
Adds ThemeToggle component with localStorage persistence for user preference.

Component located in src/components/ui/ThemeToggle.astro.
Uses data-theme attribute on html element for theme switching.

Closes #42
```

#### Исправление бага

```
fix(api): correct health endpoint response format

The health endpoint was returning 500 status code instead of 200.
Now returns proper 200 OK with JSON body containing status field.

Response format: {"status": "ok"}

Fixes #15
```

#### Документация

```
docs: update README with docker-compose instructions

Add detailed instructions for local development using Docker Compose.
Include port mappings (4321 for web, 8000 for api) and environment variables.
Add troubleshooting section for common issues.
```

#### Обновление зависимостей

```
chore(deps): update astro to 5.16.6

Update Astro dependency from 5.16.5 to 5.16.6.
No breaking changes expected. All tests pass.
```

#### Breaking change

```
feat(api): change user endpoint response format

BREAKING CHANGE: User endpoint now returns nested user object instead of flat structure.

Old format: {"id": 1, "name": "John", "email": "john@example.com"}
New format: {"user": {"id": 1, "name": "John", "email": "john@example.com"}}

Migration: Update all clients to access user data via .user property.

Closes #78
```

#### Рефакторинг

```
refactor(web): extract theme logic to separate utility

Move theme switching logic from ThemeToggle component to src/utils/theme.ts.
This allows reuse of theme logic in other components.

No functional changes, only code organization improvement.
```

#### Тесты

```
test(api): add tests for health endpoint

Add unit tests for health endpoint covering success and error cases.
Use FastAPI TestClient for testing.

Test coverage increased from 75% to 85%.
```

## CHANGELOG.md Rules

### Формат

CHANGELOG должен следовать формату Keep a Changelog:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New feature description

### Changed
- Change description

### Deprecated
- Deprecated feature description

### Removed
- Removed feature description

### Fixed
- Bug fix description

### Security
- Security fix description

## [1.0.0] - 2024-01-15

### Added
- Initial release
```

### Правила обновления CHANGELOG

1. Все изменения добавляются в секцию `[Unreleased]` перед коммитом
2. Каждая запись должна быть понятной без контекста коммита
3. Группировать по типу: Added, Changed, Deprecated, Removed, Fixed, Security
4. Использовать простой язык, без эмоджи
5. Указывать scope в скобках, если применимо: `Added (web): dark theme support`
6. При релизе версии перемещать `[Unreleased]` в новую версию с датой

### Примеры записей

```markdown
### Added
- Theme toggle component with localStorage persistence
- Docker Compose configuration for local development
- Health check endpoint in API

### Changed
- Update Astro to version 5.16.6
- Improve error handling in Lambda handler

### Fixed
- Correct health endpoint response format
- Resolve Tailwind CSS build warnings

### Removed
- Deprecated legacy API endpoints
```

## Автоматическое обновление CHANGELOG

При создании коммита:

1. Определить тип изменения из commit message
2. Добавить соответствующую запись в секцию `[Unreleased]`
3. Использовать subject из commit message как основу
4. При необходимости расширить описанием из body
5. Сохранить CHANGELOG.md перед коммитом

## One Concern Per Commit

**Строгое правило**: Один коммит = одна логическая задача.

**Запрещено:**
- Смешивать несколько несвязанных изменений в одном коммите
- Коммитить исправления багов вместе с новой функциональностью
- Объединять изменения документации с изменениями кода (если это не связано)
- Коммитить рефакторинг вместе с новой функциональностью

**Примеры неправильных коммитов:**
```
feat(web): add dark theme and fix button styles
fix(api): correct health endpoint and update dependencies
```

**Правильные коммиты:**
```
feat(web): add dark theme toggle component
fix(web): correct button hover styles
fix(api): correct health endpoint response format
chore(deps): update fastapi to 0.128.0
```

## Multi-Agent Workflow

### Правила работы с несколькими агентами

При работе нескольких агентов (или разработчиков) над одной фичей:

1. **Один агент = одна задача**: Каждый агент работает над отдельной задачей в рамках фичи
2. **Частые коммиты**: Коммитить часто, небольшими логическими блоками
3. **Синхронизация**: Регулярно делать `git pull` из feature ветки перед началом работы
4. **Конфликты**: При конфликтах решать их сразу, не откладывать
5. **Коммуникация через коммиты**: Четкие commit messages помогают понять что делает другой агент

### Пример workflow для multi-agent

```bash
# Агент 1: Создает feature ветку
git checkout dev
git pull origin dev
git checkout -b feature/dark-theme

# Агент 1: Делает первую часть работы
# ... изменения ...
git add .
git commit -m "feat(web): add theme toggle component"
git push origin feature/dark-theme

# Агент 2: Подключается к той же ветке
git fetch origin
git checkout feature/dark-theme
git pull origin feature/dark-theme

# Агент 2: Делает свою часть
# ... изменения ...
git add .
git commit -m "feat(web): add theme persistence to localStorage"
git push origin feature/dark-theme

# Агент 1: Синхронизируется перед продолжением
git pull origin feature/dark-theme
# ... продолжает работу ...
```

### Правила для агентов

- **Всегда начинать с pull**: `git pull` перед началом работы
- **Коммитить часто**: После каждой логически завершенной задачи
- **Не перезаписывать историю**: Не делать `git push --force` в общих ветках
- **Четкие commit messages**: Помогают другим агентам понять изменения
- **Один коммит = одна задача**: Не смешивать несколько задач

## Строгие правила коммитов

### Обязательные требования

1. **Формат**: Строго следовать Conventional Commits
2. **Язык**: Только английский, без исключений
3. **Эмоджи**: Запрещены полностью
4. **Один concern**: Один коммит = одна логическая задача
5. **Длина subject**: Максимум 72 символа
6. **Повелительное наклонение**: "add", не "added" или "adds"
7. **Scope**: Указывать когда применимо (web, api, infra, docker, deps)
8. **CHANGELOG**: Обновлять перед коммитом значимых изменений

### Структура коммита (строгий формат)

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Где:**
- `<type>`: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert
- `<scope>`: web, api, infra, docker, deps (опционально)
- `<subject>`: до 72 символов, lowercase, без точки, повелительное наклонение
- `<body>`: подробное описание (опционально, но рекомендуется)
- `<footer>`: Closes #123, BREAKING CHANGE (опционально)

## Запрещено

- Использовать эмоджи и смайлики в commit messages и CHANGELOG
- Писать commit messages на русском языке (только английский)
- Оставлять CHANGELOG без обновлений при значимых изменениях
- Использовать общие формулировки типа "update code" или "fix stuff"
- **Смешивать несколько concerns в одном коммите**
- **Делать `git push --force` в общие ветки (dev, main)**
- **Коммитить без запуска линтеров**
- **Коммитить WIP (work in progress) без явной необходимости**
- **Использовать merge коммиты вместо rebase при синхронизации с dev**

