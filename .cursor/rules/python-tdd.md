# Python TDD and Code Decomposition Rules

## Test-Driven Development (TDD)

### Строгое правило

**Test-First Development обязателен для всех Python изменений.**

1. **Сначала тест, потом код**
2. **Без тестов функциональность не внедряется**
3. **Коммит без тестов для новой функциональности запрещен**

### TDD Workflow (Red-Green-Refactor)

#### 1. Red: Написать тест

```python
# tests/routes/users.py
from fastapi.testclient import TestClient
from api_lambda.app import app

client = TestClient(app)

def test_create_user():
    """Test creating a new user."""
    response = client.post(
        "/users",
        json={"name": "John Doe", "email": "john@example.com"}
    )
    assert response.status_code == 201
    assert response.json()["name"] == "John Doe"
    assert response.json()["email"] == "john@example.com"
    assert "id" in response.json()
```

#### 2. Red: Запустить тест (должен упасть)

```bash
cd services/api-lambda
PYTHONPATH=src uv run pytest tests/routes/users.py::test_create_user -v
# Expected: FAILED (endpoint doesn't exist yet)
```

#### 3. Green: Написать минимальный код

```python
# src/api_lambda/routes/users.py
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class UserCreate(BaseModel):
    name: str
    email: str

@router.post("/users")
def create_user(user: UserCreate) -> dict:
    """Create a new user."""
    return {
        "id": 1,
        "name": user.name,
        "email": user.email
    }
```

```python
# src/api_lambda/app.py
from fastapi import FastAPI
from api_lambda.routes import users

app = FastAPI()
app.include_router(users.router)
```

#### 4. Green: Запустить тест (должен пройти)

```bash
PYTHONPATH=src uv run pytest tests/routes/users.py::test_create_user -v
# Expected: PASSED
```

#### 5. Refactor: Улучшить код

```python
# src/api_lambda/services/user_service.py
from api_lambda.models.user import User

def create_user(name: str, email: str) -> User:
    """Create a new user."""
    # Business logic here
    return User(id=1, name=name, email=email)
```

### Правила написания тестов

1. **Тесты должны быть независимыми**: Каждый тест должен работать изолированно
2. **Использовать фикстуры**: Для повторяющихся данных
3. **Мокать внешние зависимости**: AWS services, databases, external APIs
4. **Покрывать edge cases**: Граничные случаи, ошибки
5. **Читаемые имена**: `test_create_user_with_valid_data`, `test_create_user_without_email_fails`

### Структура тестов

Тесты должны зеркалить структуру `src/`:

```
src/api_lambda/
├── routes/
│   └── users.py
├── services/
│   └── user_service.py
└── models/
    └── user.py

tests/
├── routes/
│   └── test_users.py
├── services/
│   └── test_user_service.py
└── models/
    └── test_user.py
```

## Code Decomposition

### Строгое правило

**Декомпозиция кода обязательна. Большие файлы запрещены.**

### Правила декомпозиции

1. **Максимальный размер файла**: 200-300 строк
2. **Одна ответственность**: Каждый модуль отвечает за одну область
3. **Логическое разделение**: Routes, services, models, utils в отдельных файлах

### Рекомендуемая структура

```
src/api_lambda/
├── app.py                 # FastAPI app, route registration
├── handler.py             # Lambda handler (wrapper only)
│
├── routes/                # Route handlers (HTTP endpoints)
│   ├── __init__.py
│   ├── health.py          # Health check routes
│   ├── users.py           # User routes
│   └── auth.py            # Authentication routes
│
├── services/              # Business logic
│   ├── __init__.py
│   ├── user_service.py    # User business logic
│   └── auth_service.py    # Authentication logic
│
├── models/                # Data models (Pydantic, dataclasses)
│   ├── __init__.py
│   ├── user.py            # User model
│   └── auth.py            # Auth models
│
├── repositories/          # Data access layer (if needed)
│   ├── __init__.py
│   └── user_repository.py
│
└── utils/                 # Utility functions
    ├── __init__.py
    ├── validators.py      # Validation utilities
    └── helpers.py         # Helper functions
```

### Пример декомпозиции

**Плохо (все в одном файле):**

```python
# src/api_lambda/app.py (500+ строк)
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

class UserCreate(BaseModel):
    name: str
    email: str

def validate_email(email: str) -> bool:
    # 50 строк валидации
    pass

def create_user_in_db(name: str, email: str) -> dict:
    # 100 строк логики
    pass

@app.post("/users")
def create_user(user: UserCreate) -> dict:
    # 50 строк обработки
    pass

# ... еще 300 строк кода
```

**Хорошо (декомпозиция):**

```python
# src/api_lambda/models/user.py
from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str

class UserCreate(BaseModel):
    name: str
    email: str
```

```python
# src/api_lambda/utils/validators.py
def validate_email(email: str) -> bool:
    # Валидация email
    pass
```

```python
# src/api_lambda/services/user_service.py
from api_lambda.models.user import User, UserCreate
from api_lambda.utils.validators import validate_email

def create_user(user_data: UserCreate) -> User:
    # Бизнес-логика создания пользователя
    if not validate_email(user_data.email):
        raise ValueError("Invalid email")
    # ... логика
    return User(id=1, name=user_data.name, email=user_data.email)
```

```python
# src/api_lambda/routes/users.py
from fastapi import APIRouter, HTTPException
from api_lambda.models.user import UserCreate
from api_lambda.services.user_service import create_user

router = APIRouter()

@router.post("/users", response_model=User)
def create_user_endpoint(user: UserCreate) -> dict:
    """Create a new user."""
    try:
        return create_user(user)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
```

```python
# src/api_lambda/app.py
from fastapi import FastAPI
from api_lambda.routes import users, health

app = FastAPI()
app.include_router(users.router, prefix="/api/v1")
app.include_router(health.router)
```

### Когда декомпозировать

- Файл превышает 200-300 строк
- Модуль имеет несколько ответственностей
- Код можно логически разделить на части
- Есть повторяющиеся паттерны

### Запрещено

- Создавать файлы больше 300 строк
- Смешивать routes, services, models в одном файле
- Дублировать код вместо вынесения в utils
- Игнорировать декомпозицию "потому что это маленькая фича"

## Комбинирование TDD и декомпозиции

### Workflow

1. **Написать тест** для новой функциональности
2. **Определить структуру модулей** (routes, services, models)
3. **Создать файлы** для каждого модуля
4. **Написать минимальный код** для прохождения теста
5. **Рефакторить** с учетом декомпозиции

### Пример

```bash
# 1. Написать тест
# tests/services/test_user_service.py
def test_create_user():
    user = create_user("John", "john@example.com")
    assert user.name == "John"

# 2. Создать структуру
mkdir -p src/api_lambda/{services,models}
touch src/api_lambda/services/user_service.py
touch src/api_lambda/models/user.py

# 3. Написать код
# src/api_lambda/models/user.py
class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

# src/api_lambda/services/user_service.py
from api_lambda.models.user import User

def create_user(name: str, email: str) -> User:
    return User(name=name, email=email)

# 4. Запустить тест
pytest tests/services/test_user_service.py
```

## Проверка перед коммитом

```bash
# 1. Линтинг
cd services/api-lambda
make lint

# 2. Тесты (все должны проходить)
make test

# 3. Проверить покрытие
PYTHONPATH=src uv run pytest --cov=src --cov-report=term-missing

# 4. Проверить размер файлов
find src -name "*.py" -exec wc -l {} + | sort -rn | head -10
# Убедиться что нет файлов > 300 строк
```

