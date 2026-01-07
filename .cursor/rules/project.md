# Project Rules

## Stack

- **Frontend**: Astro + Tailwind CSS + daisyUI
- **Backend**: Python (FastAPI) on AWS Lambda via Mangum
- **Infra**: Terraform
- **Local env**: docker-compose
- **Package managers**: pnpm (web), uv (python)

## Architecture

### Monorepo Structure

- **Web**: `apps/web/astro` - Frontend application
- **Backend**: `services/api-lambda` - Backend API service
- **Infra**: `infra/terraform` - Infrastructure as Code
- **Local**: `docker-compose.yml` in repo root

### Strict Rules

- **No Python code in repo root** - All Python code must be in `services/*`
- **No Node apps outside `apps/*`** - All Node applications must be in `apps/*`
- **Monorepo boundaries**: Respect package boundaries, no cross-contamination

## Code Quality

### Linting Requirements

**Обязательно запускать линтеры перед коммитом:**

#### Frontend (Astro)
```bash
cd apps/web/astro
pnpm lint
pnpm format
```

#### Backend (Python)
```bash
cd services/api-lambda
make lint  # PYTHONPATH=src uv run ruff check . --fix
make test  # PYTHONPATH=src uv run pytest -q
```

**Правила:**
- Все ошибки линтера должны быть исправлены перед коммитом
- Предупреждения (warnings) также должны быть устранены
- Не коммитить код с ошибками линтера
- Использовать автофикс где возможно: `pnpm format`, `make lint` (с --fix)
- **Ruff is the source of truth** for Python linting

### Code Style

#### TypeScript/JavaScript (Frontend)

- **Prettier**: Автоматическое форматирование
  - No semicolons
  - Single quotes
  - Trailing commas (ES5)
- **ESLint**: Строгие правила
  - Astro recommended config
  - Prettier integration
- **TypeScript**: Strict mode enabled
- Всегда использовать точные версии зависимостей в package.json

#### Python (Backend)

- **Ruff**: Линтинг и форматирование
  - Line length: 100 символов
  - Target version: Python 3.14
  - Rules: E (pycodestyle errors), F (pyflakes), I (isort)
- **Type hints**: Обязательны для всех функций
- **Docstrings**: Для публичных функций и классов
- Всегда использовать точные версии в pyproject.toml где возможно

### Version Pinning

**Строгое требование:**

1. **Frontend dependencies**: Использовать точные версии (без ^ или ~)
   ```json
   "astro": "5.16.6"  // не "^5.16.6"
   ```

2. **Backend dependencies**: Использовать точные версии где возможно
   ```toml
   requires-python = "==3.14.2"  // точная версия
   "fastapi==0.128.0"  // точная версия
   ```

3. **Обновление версий**: Только через отдельные коммиты с типом `chore(deps)`

## Frontend Rules (apps/web/astro)

### Stack

- Astro + Tailwind CSS + daisyUI
- TypeScript strict mode
- ESLint flat config + Prettier

### Goals

- Mobile-first layout always
- Responsive by default
- Static-first (S3 friendly)
- Minimal client-side JS

### Structure

- `src/config` - brand/theme/site config (single source of truth)
- `src/components/ui` - small reusable UI components (ThemeToggle, Button, etc)
- `src/components/sections` - page blocks (Hero, Features, CTA, etc)
- `src/pages` - compose sections only; avoid logic here
- `src/styles/global.css` - global Tailwind entry only

### UI Rules

- **Mobile-first**: Always design for mobile first, then scale up
- **Responsive utilities preferred**: Use `grid`, `flex`, `clamp`, breakpoints
- **No fixed widths** unless justified (use responsive utilities)
- **Dark/light theme**: Use daisyUI tokens (`bg-base-100`, `text-base-content`, etc)
- **No hardcoded colors**: Use semantic classes from daisyUI
- **No inline styles**: All styles via Tailwind classes
- **Layout base**: `max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`

### JS Rules

- **Prefer Astro-only components**: Avoid client JS when possible
- **Client JS only when required**: Keep it small and scoped
- **Avoid frameworks by default**: Use vanilla JS or minimal libraries
- **No business logic in pages**: Pages should only compose components

### Content Rules

- **No duplicated strings**: Pull from `src/config/*` or data files
- **Single source of truth**: All text content in config files

### File Naming

- **Components**: PascalCase (ThemeToggle.astro)
- **Utilities**: camelCase (brand.ts)
- **Config files**: kebab-case (astro.config.mjs)

## Backend Rules (services/api-lambda)

**Подробная документация**: См. `.cursor/rules/python-tdd.md` для TDD и декомпозиции

### Stack

- Python 3.14.2 (exact version)
- uv for environment + dependencies + lock
- FastAPI + Mangum
- Ruff + Pytest

### Structure

- `src/api_lambda/app.py` - FastAPI app (routes live here or in submodules)
- `src/api_lambda/handler.py` - only `handler = Mangum(app)` (no logic)
- `src/api_lambda/` - business logic modules (decomposed into separate files)
- `tests/` - unit tests (mirror structure of src/)
- `events/` - local invoke payloads (API Gateway v2 format)
- `Makefile` - `lint`, `test`, `invoke` must work with `PYTHONPATH=src`

### Code Decomposition Rules

**Строгое требование**: Декомпозиция кода на отдельные файлы.

- **Не создавать большие файлы**: Максимум 200-300 строк на файл
- **Разделение по ответственности**: Каждый модуль отвечает за одну область
- **Логическое разделение**: Routes, services, models, utils в отдельных файлах
- **Пример структуры**:
  ```
  src/api_lambda/
  ├── app.py              # FastAPI app, route definitions
  ├── handler.py          # Lambda handler (wrapper only)
  ├── routes/             # Route handlers
  │   ├── __init__.py
  │   ├── health.py
  │   └── users.py
  ├── services/           # Business logic
  │   ├── __init__.py
  │   └── user_service.py
  ├── models/             # Data models
  │   ├── __init__.py
  │   └── user.py
  └── utils/              # Utility functions
      ├── __init__.py
      └── validators.py
  ```

### Test-Driven Development (TDD)

**Строгое правило**: Test-First Development обязателен для Python.

1. **Сначала тест, потом код**: 
   - Написать тест для новой функциональности
   - Убедиться что тест падает (красный)
   - Написать минимальный код для прохождения теста (зеленый)
   - Рефакторить код (refactor)

2. **Без тестов функциональность не внедряется**:
   - Новая функция/эндпоинт/класс = сначала тест
   - Коммит без тестов для новой функциональности запрещен
   - Тесты должны быть написаны до реализации

3. **Структура тестов**:
   - Тесты должны зеркалить структуру `src/`
   - `tests/routes/` для тестов routes
   - `tests/services/` для тестов services
   - `tests/models/` для тестов models

4. **Пример TDD workflow**:
   ```python
   # Шаг 1: Написать тест (tests/routes/users.py)
   def test_create_user():
       response = client.post("/users", json={"name": "John"})
       assert response.status_code == 201
       assert response.json()["name"] == "John"
   
   # Шаг 2: Запустить тест (должен упасть)
   # pytest tests/routes/users.py
   
   # Шаг 3: Написать минимальный код (src/api_lambda/routes/users.py)
   @app.post("/users")
   def create_user(user_data: dict) -> dict:
       return {"id": 1, "name": user_data["name"]}
   
   # Шаг 4: Запустить тест (должен пройти)
   # Шаг 5: Рефакторить при необходимости
   ```

### Rules

- **No Python code outside `services/api-lambda`**
- **Handler is wrapper only**: No logic in handler.py, only `handler = Mangum(app)`
- **All imports via `src`**: Always use `PYTHONPATH=src` for imports
- **FastAPI app in app.py**: Route definitions in app.py, logic in submodules
- **Code decomposition**: Split code into logical modules, avoid large files
- **Prefer pure functions**: Small modules, pure functions where possible
- **Type hints**: Add types for public functions where useful
- **Ruff is source of truth**: Keep code formatted/linted by Ruff
- **TDD mandatory**: Write tests first, then implement functionality

### Testing

- **Test-First Development**: Tests must be written before implementation
- **Tests must not depend on AWS**: Mock AWS services if needed
- **Use API Gateway v2 event fixtures**: For handler tests, use fixtures from `events/`
- **Coverage**: Aim for > 80% coverage
- **Run tests**: `make test` or `PYTHONPATH=src uv run pytest -q`
- **Test structure**: Mirror `src/` structure in `tests/`

### File Naming

- **Python modules**: snake_case (api_lambda/)

## Documentation Standards

### Style Requirements

- **Строгий профессиональный стиль**
- **Без эмоджи и смайликов**
- **Четкая структура**
- **Примеры кода обязательны**
- **Актуальность**: Документация должна соответствовать коду

### README.md

- Описание проекта и назначения
- Инструкции по установке
- Команды для разработки
- Структура проекта
- Информация о деплое

### Code Comments

- **English only** для кода и комментариев
- Комментарии для сложной логики
- JSDoc/TypeDoc для публичных API
- Docstrings для Python функций

## Development Workflow

### Before Committing

1. Запустить линтеры:
   ```bash
   # Frontend
   cd apps/web/astro && pnpm lint && pnpm format
   
   # Backend
   cd services/api-lambda && make lint && make test
   ```

2. **Для Python**: Убедиться что все тесты написаны и проходят
   - Новая функциональность должна иметь тесты
   - Тесты должны быть написаны до реализации (TDD)

3. Проверить что все тесты проходят

4. Обновить CHANGELOG.md если нужно

5. Убедиться что версии зависимостей точные

### Docker Compose Usage

**Для локальной разработки:**

- Использовать `docker-compose.yml` для запуска всех сервисов
- Volumes для hot-reload
- Environment variables через docker-compose
- Порты: 4321 (web), 8000 (api)

**Правила:**
- Всегда использовать `--build` при первом запуске
- Проверять что volumes правильно настроены
- Не коммитить изменения в node_modules или .venv

## Testing

### Frontend

- Тесты должны быть добавлены при новой функциональности
- Использовать существующие инструменты тестирования Astro

### Backend (Python)

**Строгое правило TDD**: Test-First Development обязателен.

- **Сначала тест, потом код**: Новая функциональность = сначала тест
- **Без тестов функциональность не внедряется**: Коммит без тестов запрещен
- **Использовать pytest**: Стандартный инструмент тестирования
- **Coverage**: Должен быть > 80%
- **Запускать через**: `make test` или `PYTHONPATH=src uv run pytest -q`
- **Структура тестов**: Зеркалить структуру `src/` в `tests/`

## Dependencies Management

### Package Managers

- **Node**: pnpm workspace (root `pnpm-workspace.yaml`)
- **Python**: uv + `uv.lock` inside service only (`services/api-lambda/uv.lock`)
- **No global dependencies assumed**: All tools must be installable via package managers

### Adding Dependencies

1. **Frontend**: Добавлять через pnpm в `apps/web/astro/`
   ```bash
   cd apps/web/astro
   pnpm add <package>@<exact-version>
   ```

2. **Backend**: Добавлять через uv в `services/api-lambda/`
   ```bash
   cd services/api-lambda
   uv add <package>==<exact-version>
   ```

3. Коммитить с типом `chore(deps)`

### Updating Dependencies

1. Обновлять по одной зависимости за раз
2. Тестировать после каждого обновления
3. Коммитить с типом `chore(deps): update <package> to <version>`
4. Обновлять CHANGELOG.md

### Lockfiles

- **Keep lockfiles committed**: `pnpm-lock.yaml`, `services/*/uv.lock`
- **Never ignore lockfiles**: They ensure reproducible builds

## Task Management

**Подробная документация**: См. `.cursor/rules/tasks.md`

### Система задач

Все задачи управляются через:
- **TODOS.md** - список всех задач с порядковыми номерами
- **tasks/** - директория с подробными описаниями задач
- **Ветки**: `task-XXX` где XXX - номер задачи

### Процесс работы с задачей

1. **Добавить задачу в TODOS.md** с порядковым номером
2. **Создать файл задачи** в `tasks/task-XXX.md` с подробным описанием
3. **Закоммитить задачу в dev**: `git commit -m "chore: add task-XXX to todos"`
4. **Создать ветку разработки**: `git checkout -b task-XXX`
5. **Разрабатывать в ветке task-XXX**

**Строгое правило**: Задача должна быть закоммичена в dev перед созданием ветки разработки.

## Git Workflow

**Подробная документация**: 
- `.cursor/rules/git-workflow.md` - Git workflow
- `.cursor/rules/tasks.md` - Управление задачами

### Branch Strategy

**Основная ветка разработки: `dev`**

- **`dev`**: Основная ветка разработки (development branch) - **ГЛАВНАЯ ВЕТКА**
- **`main`**: Production-ready code (только через merge из dev)
- **`task-XXX`**: Ветки для задач из TODOS.md (где XXX - номер задачи) - **ОСНОВНОЙ ФОРМАТ**
- **`feature/<name>`**: Ветки для новых фич (legacy, использовать task-XXX)
- **`fix/<name>`**: Ветки для исправления багов
- **`docs/<name>`**: Ветки для документации
- **`refactor/<name>`**: Ветки для рефакторинга

### Основные правила

1. **Все задачи в TODOS.md** с порядковыми номерами
2. **Все фичи в отдельных ветках от `dev`** (предпочтительно task-XXX)
3. **Никогда не коммитить напрямую в `dev`** (только через merge из feature/task веток)
4. **Задача коммитится в dev перед созданием ветки**: Сначала задача, потом ветка
5. **Перед merge**: Линтеры, тесты, CHANGELOG, синхронизация с dev
6. **После merge**: Обновить статус задачи, удалить ветку

### Commit Messages

См. `.cursor/rules/commits.md` для детальных правил.

**Key rules:**
- Conventional Commits format (строго)
- One concern per commit (no mixed concerns)
- English only, no emojis
- Subject до 72 символов
- Body для значимых изменений

### Pull Requests

- Описание изменений
- Ссылки на issues
- Чеклист проверки:
  - [ ] Линтеры пройдены
  - [ ] Тесты проходят
  - [ ] CHANGELOG обновлен
  - [ ] Документация обновлена
  - [ ] Версии зависимостей точные
  - [ ] Lockfiles обновлены и закоммичены

## CI/CD Rules

### CI Commands

**Web (Frontend):**
```bash
cd apps/web/astro
pnpm lint
pnpm build
```

**API (Backend):**
```bash
cd services/api-lambda
PYTHONPATH=src uv run ruff check .
PYTHONPATH=src uv run pytest -q
```

### CI Requirements

- All lint checks must pass
- All tests must pass
- Build must succeed
- No warnings should be ignored

## Prohibited Practices

- Коммитить код с ошибками линтера
- Использовать диапазоны версий без необходимости (^, ~)
- Пропускать тесты перед коммитом
- Оставлять TODO комментарии без issue номеров
- Использовать эмоджи в коде, коммитах, документации
- Писать комментарии на русском языке в коде
- Коммитить секреты или credentials
- Игнорировать предупреждения линтера
- **Размещать Python код в корне репозитория**
- **Размещать Node приложения вне `apps/*`**
- **Добавлять логику в handler.py (только обертка)**
- **Использовать inline styles в компонентах**
- **Дублировать строки вместо использования config**
- **Игнорировать lockfiles в .gitignore**
- **Коммитить Python код без тестов**: Тесты обязательны для новой функциональности
- **Создавать большие Python файлы**: Максимум 200-300 строк, использовать декомпозицию
- **Реализовывать функциональность без тестов**: Сначала тест, потом код (TDD)

## Best Practices

1. **Small commits**: Один коммит = одно логическое изменение
2. **Atomic changes**: Коммит должен быть самодостаточным
3. **Test coverage**: Покрывать новую функциональность тестами
4. **Documentation**: Обновлять документацию вместе с кодом
5. **Version control**: Использовать точные версии зависимостей
6. **Code review**: Все изменения через PR с review
7. **CI/CD**: Все проверки должны проходить в CI
8. **Mobile-first**: Всегда начинать с мобильной версии
9. **Static-first**: Предпочитать статическую генерацию
10. **Pure functions**: Использовать чистые функции где возможно
11. **Single source of truth**: Конфигурация в одном месте
12. **No assumptions**: Не предполагать наличие глобальных зависимостей

