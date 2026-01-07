# Astro Site Template

Шаблон монорепозитория для быстрого создания промо-сайтов на базе Astro с бэкенд API на AWS Lambda.

## 🎯 Зачем этот проект?

Этот шаблон создан для **быстрого старта** новых промо-сайтов без необходимости настраивать инфраструктуру с нуля. Он включает:

- ✅ **Frontend**: Astro + Tailwind CSS + daisyUI (адаптивный дизайн, тёмная/светлая тема)
- ✅ **Backend**: FastAPI на AWS Lambda (serverless архитектура)
- ✅ **Infrastructure**: Terraform для деплоя в AWS
- ✅ **Development**: Docker Compose для локальной разработки
- ✅ **Code Quality**: ESLint, Prettier, Ruff, Pytest
- ✅ **CI/CD**: GitHub Actions готов к использованию

**Идеально подходит для:**
- Лендингов и промо-страниц
- Корпоративных сайтов
- Портфолио проектов
- Быстрых прототипов

## 🚀 Быстрое копирование шаблона

### Вариант 1: Клонирование и переименование

```bash
# Клонируем шаблон
git clone <repository-url> my-new-project
cd my-new-project

# Удаляем историю Git (опционально, если хотите начать с чистого листа)
rm -rf .git
git init
git add .
git commit -m "feat: initial commit from template"
```

### Вариант 2: Использование degit (без истории Git)

```bash
# Устанавливаем degit (если еще не установлен)
npm install -g degit

# Копируем шаблон без Git истории
degit <repository-url> my-new-project
cd my-new-project
```

### Вариант 3: Копирование директории

```bash
# Копируем директорию шаблона
cp -r /path/to/astro-site-template /path/to/my-new-project
cd /path/to/my-new-project

# Инициализируем новый Git репозиторий
rm -rf .git
git init
git add .
git commit -m "feat: initial commit from template"
```

## 🛠️ Начало работы

### 1. Настройка бренда

Отредактируйте файл `apps/web/astro/src/config/brand.ts`:

```typescript
export const brand = {
  name: 'Ваш проект',
  description: 'Описание вашего проекта',
  cta: 'Начать',
  theme: 'light', // или 'dark'
}
```

### 2. Установка зависимостей

```bash
# Установка pnpm (если еще не установлен)
npm install -g pnpm@10.27.0

# Установка всех зависимостей проекта
pnpm install
```

### 3. Настройка переменных окружения (если нужно)

Создайте файлы `.env` в соответствующих директориях при необходимости.

## 🏃 Локальный запуск

### Способ 1: Docker Compose (рекомендуется)

Самый простой способ запустить весь проект:

```bash
# Запуск всех сервисов
docker-compose up --build

# В фоновом режиме
docker-compose up -d --build

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

После запуска:
- **Frontend**: http://localhost:4321
- **Backend API**: http://localhost:8000

### Способ 2: Локальный запуск без Docker

#### Frontend (Astro)

```bash
cd apps/web/astro

# Установка зависимостей (если еще не установлены)
pnpm install

# Запуск dev сервера
pnpm dev

# Сборка для production
pnpm build

# Превью production сборки
pnpm preview
```

Frontend будет доступен на http://localhost:4321

#### Backend API (Lambda)

```bash
cd services/api-lambda

# Установка зависимостей через UV
pip install uv
uv sync

# Запуск FastAPI сервера (для разработки)
uv run uvicorn api_lambda.app:app --reload --port 8000

# Или через Python HTTP сервер (как в docker-compose)
uv run python -m http.server 8000
```

API будет доступен на http://localhost:8000

**Тестирование API:**
```bash
# Запуск тестов
make test

# Линтинг
make lint

# Локальный вызов Lambda handler
make invoke
```

## 📦 Структура проекта

```
astro-site-template/
├── apps/
│   └── web/
│       └── astro/              # Frontend приложение
│           ├── src/
│           │   ├── components/  # UI компоненты
│           │   ├── config/      # Конфигурация (brand.ts)
│           │   ├── pages/       # Страницы Astro
│           │   └── styles/      # Глобальные стили
│           └── package.json
├── services/
│   └── api-lambda/             # Backend API (FastAPI + Lambda)
│       ├── src/
│       │   └── api_lambda/
│       ├── tests/
│       └── pyproject.toml
├── infra/
│   └── terraform/              # Infrastructure as Code
├── docker/
├── docker-compose.yml          # Локальная разработка
└── pnpm-workspace.yaml         # Монорепозиторий конфигурация
```

## 🔄 Обновление шаблона

Если вы хотите получить обновления из оригинального шаблона:

### Метод 1: Добавление upstream remote

```bash
# Добавляем оригинальный шаблон как remote
git remote add upstream <original-template-repo-url>

# Получаем обновления
git fetch upstream

# Смотрим изменения
git log HEAD..upstream/main

# Мержим обновления (осторожно, могут быть конфликты!)
git merge upstream/main
```

### Метод 2: Ручное обновление

1. Клонируйте оригинальный шаблон в отдельную директорию
2. Сравните изменения с вашим проектом
3. Вручную перенесите нужные обновления

### Метод 3: Использование git subtree

```bash
# Добавляем шаблон как subtree
git subtree add --prefix=template upstream main --squash

# Обновляем subtree
git subtree pull --prefix=template upstream main --squash
```

**⚠️ Важно**: Перед обновлением сделайте коммит всех ваших изменений и создайте backup ветку:

```bash
git checkout -b backup-before-update
git add .
git commit -m "chore: backup before template update"
git checkout main
```

## 🧪 Разработка

### Frontend команды

```bash
cd apps/web/astro

pnpm dev          # Запуск dev сервера
pnpm build        # Production сборка
pnpm preview      # Превью production сборки
pnpm lint         # Проверка кода
pnpm format       # Форматирование кода
```

### Backend команды

```bash
cd services/api-lambda

make lint         # Проверка кода (Ruff)
make test         # Запуск тестов (Pytest)
make invoke       # Локальный вызов Lambda handler
```

## 🚢 Деплой

### Frontend (Astro)

Astro генерирует статические файлы, которые можно деплоить на:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

```bash
cd apps/web/astro
pnpm build
# Файлы будут в dist/
```

### Backend (Lambda)

Используйте Terraform из директории `infra/terraform/` для деплоя в AWS:

```bash
cd infra/terraform
terraform init
terraform plan
terraform apply
```

## 📚 Дополнительные ресурсы

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [daisyUI](https://daisyui.com)
- [FastAPI](https://fastapi.tiangolo.com)
- [Mangum (Lambda adapter)](https://mangum.io)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

## 📝 Лицензия

ISC

