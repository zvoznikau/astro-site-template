# Task-002: Extend brand.ts configuration

**Статус**: todo  
**Приоритет**: high  
**Тип**: feat  
**Область**: web  
**Создано**: 2026-01-07  
**Завершено**: 2026-01-07

## Описание

Extend brand.ts configuration with DemoAPPmax data: product info, pricing (concrete sums), FAQ data, SEO, analytics placeholders, App Store links. All data in English, USA style.

## Требования

- Extend `apps/web/astro/src/config/brand.ts` with DemoAPPmax configuration
- Add product information (name, category, platform, value proposition)
- Add pricing data with concrete sums (monthly and yearly)
- Add FAQ data (minimum 5 questions)
- Add SEO configuration (title, description, keywords, OG tags)
- Add analytics placeholders (Google, Bing verification codes)
- Add App Store links
- Add contact/support email
- All text in English, USA business style
- No Cyrillic characters

## Технические детали

Configuration structure should include:
- `product`: name, category, platform, valueProposition, secondaryLine
- `pricing`: monthly and yearly with concrete prices, bestValue flag
- `cta`: primary and secondary CTAs
- `faq`: array of question/answer objects
- `seo`: title, description, keywords, ogImage, canonical
- `analytics`: Google Analytics ID, Bing verification code (placeholders)
- `urls`: website, appStore, support, privacy, terms
- `contact`: email, support email
- `theme`: default theme setting
- `pages`: page configuration with block order

## Критерии приемки

- [ ] brand.ts contains all DemoAPPmax data
- [ ] All text is in English, USA style
- [ ] No Cyrillic characters in configuration
- [ ] Pricing has concrete sums ($9.99/month, $99.99/year)
- [ ] FAQ has at least 5 questions
- [ ] SEO configuration is complete
- [ ] Analytics placeholders are included
- [ ] TypeScript types are correct
- [ ] Linters pass

## Заметки

This is the foundation for all other tasks. All blocks will use data from this configuration file.

