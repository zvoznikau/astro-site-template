# Git Workflow Guide

## Branch Strategy

### Основные ветки

- **`dev`**: Основная ветка разработки (development branch) - **ГЛАВНАЯ ВЕТКА ДЛЯ РАЗРАБОТКИ**
- **`main`**: Production-ready code (только через merge из dev, для релизов)

### Feature ветки

Все фичи разрабатываются в отдельных ветках от `dev`:

- `task-XXX` - задачи из TODOS.md (где XXX - порядковый номер задачи)
- `feature/<name>` - новые фичи (legacy, использовать task-XXX)
- `fix/<name>` - исправления багов
- `docs/<name>` - документация
- `refactor/<name>` - рефакторинг

## Переход на dev ветку

### Если dev ветка уже существует

```bash
# Переключиться на dev
git checkout dev

# Получить последние изменения
git pull origin dev

# Убедиться что вы на dev
git branch
```

### Если dev ветка не существует (создать от main)

```bash
# Убедиться что main актуальна
git checkout main
git pull origin main

# Создать dev ветку от main
git checkout -b dev

# Запушить dev ветку в remote
git push -u origin dev

# Установить dev как upstream
git branch --set-upstream-to=origin/dev dev
```

### Настройка dev как основной ветки разработки

После создания/переключения на dev:

```bash
# Убедиться что вы на dev
git checkout dev

# Установить dev как основную ветку для работы
git config branch.dev.remote origin
git config branch.dev.merge refs/heads/dev
```

## Task-Based Workflow (Основной процесс)

**Все задачи должны следовать этому процессу:**

### 1. Добавление задачи в TODOS.md

```bash
# Убедиться что вы на dev
git checkout dev
git pull origin dev

# Открыть TODOS.md и добавить новую задачу
# Формат: Task-XXX: Название задачи
# Где XXX - следующий порядковый номер
```

**Формат записи в TODOS.md:**
```markdown
## Task-002: Add user authentication

**Статус**: todo
**Приоритет**: high
**Тип**: feat
**Область**: api
**Создано**: 2026-01-15

Добавить систему аутентификации пользователей через JWT токены.

**Файл задачи**: `tasks/task-002.md`
**Ветка**: `task-002`
```

### 2. Создание файла задачи

```bash
# Создать файл задачи в директории tasks/
# Формат: tasks/task-XXX.md
```

**Структура файла задачи (tasks/task-XXX.md):**
```markdown
# Task-XXX: Название задачи

**Статус**: todo
**Приоритет**: high | medium | low
**Тип**: feat | fix | docs | refactor | test | chore
**Область**: web | api | infra | docker | deps
**Создано**: YYYY-MM-DD
**Завершено**: -

## Описание

Подробное описание задачи.

## Требования

- Требование 1
- Требование 2

## Технические детали

Детальное техническое описание реализации.

## Критерии приемки

- [ ] Критерий 1
- [ ] Критерий 2

## Заметки

Дополнительные заметки и комментарии.

## Связанные задачи

- Task-YYY: Связанная задача
```

### 3. Коммит задачи в dev

```bash
# Добавить TODOS.md и файл задачи
git add TODOS.md tasks/task-XXX.md

# Закоммитить в dev
git commit -m "chore: add task-XXX to todos"

# Запушить в dev
git push origin dev
```

**Важно**: Задача должна быть закоммичена в dev перед созданием ветки разработки.

### 4. Создание ветки разработки

```bash
# Убедиться что dev актуальна
git checkout dev
git pull origin dev

# Создать ветку с номером задачи
git checkout -b task-XXX

# Примеры:
# git checkout -b task-002
# git checkout -b task-015
```

### 5. Разработка в ветке task-XXX

```bash
# Работа над задачей
# ... вносите изменения ...

# Частые коммиты с четкими сообщениями
git add .
git commit -m "feat(api): implement JWT token generation"

# Продолжение работы
# ... еще изменения ...
git add .
git commit -m "test(api): add tests for authentication endpoint"

# Пуш в remote
git push -u origin task-XXX
```

### 6. Обновление статуса задачи (Kanban)

По мере работы обновлять статус в файле задачи согласно Kanban процессу:

**Статусы:**
- `todo` → `in_progress` (при начале работы)
- `in_progress` → `review` (когда код готов для проверки)
- `review` → `done` (после успешного merge в dev)

```bash
# В tasks/task-XXX.md изменить статус:
# **Статус**: in_progress  (начало работы)
# **Статус**: review       (готово для проверки)
# **Статус**: done         (завершено)
# **Завершено**: YYYY-MM-DD (для done)
```

### 7. Завершение задачи и merge в dev

См. раздел "Feature Branch Workflow" ниже для процесса merge.

## Feature Branch Workflow (Legacy)

**Примечание**: Предпочтительно использовать Task-Based Workflow выше.

### 1. Создание feature ветки

```bash
# Убедиться что dev актуальна
git checkout dev
git pull origin dev

# Создать feature ветку
git checkout -b feature/<feature-name>

# Примеры:
# git checkout -b feature/dark-theme-toggle
# git checkout -b feature/api-user-endpoint
# git checkout -b fix/button-hover-styles
```

### 2. Разработка в feature ветке

```bash
# Работа над фичей
# ... вносите изменения ...

# Частые коммиты с четкими сообщениями
git add .
git commit -m "feat(web): add theme toggle component"

# Продолжение работы
# ... еще изменения ...
git add .
git commit -m "feat(web): add theme persistence to localStorage"

# Пуш в remote (для backup и collaboration)
git push -u origin feature/<feature-name>
```

### 3. Синхронизация с dev (перед merge)

**Важно**: Регулярно синхронизировать feature ветку с dev

```bash
# Переключиться на dev и получить обновления
git checkout dev
git pull origin dev

# Вернуться на feature ветку
git checkout feature/<feature-name>

# Rebase на актуальную dev (предпочтительно)
git rebase dev

# Или merge (если rebase не подходит)
# git merge dev
```

**При конфликтах при rebase:**

```bash
# Решить конфликты в файлах
# ... исправить конфликты ...

# Продолжить rebase
git add .
git rebase --continue

# Или отменить rebase если нужно
# git rebase --abort
```

### 4. Подготовка к merge в dev

Перед merge убедиться:

```bash
# 1. Все изменения закоммичены
git status

# 2. Ветка синхронизирована с dev
git checkout dev
git pull origin dev
git checkout feature/<feature-name>
git rebase dev

# 3. Линтеры пройдены
cd apps/web/astro && pnpm lint && pnpm format
cd ../../..
cd services/api-lambda && make lint && make test
cd ../..

# 4. CHANGELOG.md обновлен (если нужно)
# ... обновить CHANGELOG.md ...

# 5. Все тесты проходят
# (уже проверено через make test)
```

### 5. Merge в dev

```bash
# Переключиться на dev
git checkout dev

# Убедиться что dev актуальна
git pull origin dev

# Merge feature ветки (--no-ff для сохранения истории)
git merge --no-ff feature/<feature-name>
# или для task ветки:
git merge --no-ff task-XXX

# Добавить описание merge (откроется редактор)
# Или сразу:
git merge --no-ff -m "Merge task-XXX into dev" task-XXX

# Запушить изменения
git push origin dev
```

**Для task веток**: После merge обновить статус задачи на `done`:

```bash
# Обновить в tasks/task-XXX.md:
# **Статус**: done
# **Завершено**: YYYY-MM-DD

# Обновить в TODOS.md:
# **Статус**: done
# **Завершено**: YYYY-MM-DD

# Закоммитить обновления статуса
git add TODOS.md tasks/task-XXX.md
git commit -m "chore: mark task-XXX as done"
git push origin dev
```

### 6. Очистка после merge

```bash
# Удалить локальную feature ветку
git branch -d feature/<feature-name>
# или для task ветки:
git branch -d task-XXX

# Удалить remote feature ветку
git push origin --delete feature/<feature-name>
# или для task ветки:
git push origin --delete task-XXX
```

## Multi-Agent Workflow

### Когда несколько агентов работают над одной фичей

```bash
# Агент 1: Создает feature ветку и делает первую часть
git checkout dev
git pull origin dev
git checkout -b feature/dark-theme
# ... изменения ...
git add .
git commit -m "feat(web): add theme toggle component"
git push -u origin feature/dark-theme

# Агент 2: Подключается к той же ветке
git fetch origin
git checkout feature/dark-theme
git pull origin feature/dark-theme
# ... свои изменения ...
git add .
git commit -m "feat(web): add theme persistence to localStorage"
git push origin feature/dark-theme

# Агент 1: Синхронизируется перед продолжением
git pull origin feature/dark-theme
# ... продолжает работу ...
git add .
git commit -m "feat(web): add theme transition animations"
git push origin feature/dark-theme
```

### Правила для multi-agent

1. **Всегда начинать с pull**: `git pull` перед началом работы
2. **Коммитить часто**: После каждой логически завершенной задачи
3. **Не перезаписывать историю**: Никогда `git push --force` в общих ветках
4. **Четкие commit messages**: Помогают другим агентам понять изменения
5. **Один коммит = одна задача**: Не смешивать несколько задач

## Запрещенные действия

- **НЕ делать `git push --force`** в общие ветки (dev, main)
- **НЕ коммитить в dev напрямую**: Всегда через feature/task ветки
- **НЕ merge без проверки**: Всегда проверять линтеры и тесты
- **НЕ игнорировать конфликты**: Решать сразу, не откладывать
- **НЕ оставлять старые feature/task ветки**: Удалять после merge
- **НЕ создавать ветку без задачи**: Всегда сначала создать задачу в TODOS.md и tasks/
- **НЕ пропускать коммит задачи в dev**: Задача должна быть закоммичена в dev перед созданием ветки

## Полезные команды

```bash
# Посмотреть все ветки
git branch -a

# Посмотреть какие ветки merged
git branch --merged

# Посмотреть какие ветки не merged
git branch --no-merged

# Удалить все merged ветки (осторожно!)
git branch --merged | grep -v "\*\|main\|dev" | xargs -n 1 git branch -d

# Посмотреть историю коммитов
git log --oneline --graph --all

# Посмотреть изменения в ветке относительно dev
git log dev..feature/<feature-name>

# Посмотреть какие файлы изменены
git diff dev...feature/<feature-name> --name-only
```

