# Project Todos

Список задач проекта с порядковыми номерами.

## Формат задачи

```
## Task-XXX: Название задачи

**Статус**: todo | in_progress | review | done | cancelled
**Приоритет**: high | medium | low
**Тип**: feat | fix | docs | refactor | test | chore
**Область**: web | api | infra | docker | deps
**Создано**: YYYY-MM-DD
**Завершено**: YYYY-MM-DD (если done)

Описание задачи.

**Файл задачи**: `tasks/task-XXX.md`
**Ветка**: `task-XXX`
```

## Kanban статусы

- **todo**: Задача в очереди, еще не начата
- **in_progress**: Задача в процессе разработки
- **review**: Задача на проверке (code review, тестирование)
- **done**: Задача завершена и замержена в dev
- **cancelled**: Задача отменена

## Задачи

### Task-001: Example task

**Статус**: todo
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2024-01-15

Пример задачи для демонстрации формата.

**Файл задачи**: `tasks/task-001.md`
**Ветка**: `task-001`

---

### Task-002: Extend brand.ts configuration

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Extend brand.ts configuration with DemoAPPmax data: product info, pricing (concrete sums), FAQ data, SEO, analytics placeholders, App Store links. All data in English, USA style.

**Файл задачи**: `tasks/task-002.md`
**Ветка**: `task-002`

---

### Task-003: Create sections directory structure

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create sections directory structure for block components in apps/web/astro/src/components/sections/.

**Файл задачи**: `tasks/task-003.md`
**Ветка**: `task-003`

---

### Task-004: Create page builder system

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create page builder system for dynamic block assembly from config. Update index.astro to dynamically render blocks based on config order.

**Файл задачи**: `tasks/task-004.md`
**Ветка**: `task-004`

---

### Task-005: Header block (sticky nav)

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Header block with sticky navigation, logo, menu (Features, How it works, Pricing, FAQ), Download CTA, theme toggle. Mobile-responsive.

**Файл задачи**: `tasks/task-005.md`
**Ветка**: `task-005`

---

### Task-006: Hero block

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Hero block with H1, value proposition, CTA buttons, real mockup/screenshot placeholder. Mobile-first layout.

**Файл задачи**: `tasks/task-006.md`
**Ветка**: `task-006`

---

### Task-007: Social proof block

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Social proof block with 2-3 value proof cards (Privacy-first, Fast setup, Clear dashboards). Grid layout, responsive.

**Файл задачи**: `tasks/task-007.md`
**Ветка**: `task-007`

---

### Task-008: Features block

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Features block with H2, grid of 6 feature cards (CPU, RAM, Disk, Network, Alerts, History). Responsive grid (1 col mobile, 2-3 cols desktop).

**Файл задачи**: `tasks/task-008.md`
**Ветка**: `task-008`

---

### Task-009: How it works block

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create How it works block with H2, 3 steps: Connect → Monitor → Get alerts. Step-by-step layout, mobile-friendly.

**Файл задачи**: `tasks/task-009.md`
**Ветка**: `task-009`

---

### Task-010: Pricing block

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Pricing block with H2, 2 cards: Monthly/Yearly with concrete prices. Yearly marked as "Best value", Subscribe CTA in each. Responsive cards.

**Файл задачи**: `tasks/task-010.md`
**Ветка**: `task-010`

---

### Task-011: FAQ block

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create FAQ block with H2, accordion with 5+ questions from config. Use daisyUI accordion component.

**Файл задачи**: `tasks/task-011.md`
**Ветка**: `task-011`

---

### Task-012: CTA band block

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create CTA band block with repeat Download CTA, short value promise. Full-width band, centered content.

**Файл задачи**: `tasks/task-012.md`
**Ветка**: `task-012`

---

### Task-013: Footer block

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Create Footer block with links: Privacy, Terms, Support. Brand repeat, copyright year.

**Файл задачи**: `tasks/task-013.md`
**Ветка**: `task-013`

---

### Task-014: SEO meta tags and JSON-LD

**Статус**: done
**Приоритет**: high
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Add SEO meta tags and JSON-LD (WebSite, Organization, FAQPage if FAQ present) to index.astro. Canonical URL, OG/Twitter tags from config.

**Файл задачи**: `tasks/task-014.md`
**Ветка**: `task-014`

---

### Task-015: Google Translate integration

**Статус**: done
**Приоритет**: medium
**Тип**: feat
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Integrate Google Translate widget in Header or Footer according to language.md rules. Visible place, not intrusive.

**Файл задачи**: `tasks/task-015.md`
**Ветка**: `task-015`

---

### Task-016: Final testing and validation

**Статус**: done
**Приоритет**: high
**Тип**: test
**Область**: web
**Создано**: 2026-01-07
**Завершено**: 2026-01-07

Final testing: check responsive design (mobile/desktop), Lighthouse check (semantics, H1/H2, meta viewport), Cyrillic check (pnpm check:cyrillic), linters check.

**Файл задачи**: `tasks/task-016.md`
**Ветка**: `task-016`

---

