# Task-004: Create page builder system

**Статус**: done  
**Приоритет**: high  
**Тип**: feat  
**Область**: web  
**Создано**: 2026-01-07  
**Завершено**: 2026-01-07

## Описание

Create page builder system for dynamic block assembly from config. Update index.astro to dynamically render blocks based on config order.

## Требования

- Update `apps/web/astro/src/pages/index.astro` for dynamic block assembly
- Blocks order should be defined in brand.ts config
- Page should import and render blocks dynamically based on config
- Blocks can be reordered/removed by changing config without modifying block code

## Технические детали

- Read block order from `brand.pages.index.blocks`
- Dynamically import and render blocks in order
- Each block receives brand config as props
- Blocks are independent components
- Use blockMap to map block names to components

## Критерии приемки

- [x] index.astro dynamically renders blocks from config
- [x] Block order is controlled by brand.pages.index.blocks
- [x] Blocks can be reordered by changing config
- [x] Blocks can be removed by removing from config array
- [x] No hardcoded block rendering in index.astro
- [x] All blocks receive brand config as props
