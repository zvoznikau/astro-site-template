# Design Vision 2026

**Reference**: cursor.com + gitkraken.com

**Related documents**: 
- See `.cursor/rules/images.md` for image and visual context rules
- See `.cursor/rules/layout-composition.md` for layout composition rules (ASCII schemas)
- See `.cursor/rules/colors.md` for color system rules

## Status
- **Type**: Mandatory update
- **Priority**: High
- **Applies to**: All current and future landings
- **Old design patterns**: Considered deprecated

---

## 1. Design Paradigm Shift

### Deprecated (Forbidden)
- ❌ SaaS cards with shadows
- ❌ Sections with colored backgrounds
- ❌ Icons for the sake of icons
- ❌ "Marketing" blocks (Trusted by, badges, gradients)
- ❌ Visual noise

### Required (New Standard)
- ✅ Product minimalism
- ✅ Typography as primary UI
- ✅ Lots of whitespace
- ✅ One visual accent per screen maximum
- ✅ Site looks like part of the product, not an agency landing

---

## 2. General Visual Rules (Mandatory)

### 2.1 Typography > UI
- Large headings
- Short text
- One thought = one line

### 2.2 Minimum Containers
- Blocks are not "framed"
- No cards by default
- Background is the same everywhere or with very light variation

### 2.3 One Accent Color
- Used only for:
  - CTA buttons
  - Active links
- NOT used for section backgrounds

### 2.4 UI Dissolved
- Buttons don't "scream"
- Menu is maximally unobtrusive
- Footer is almost text-only

---

## 3. Block Structure Corrections

### 3.1 Header
- Very thin
- No background fill or minimal blur
- Text logo (product name)
- 1 primary CTA
- No more than 3 menu items

### 3.2 Hero (Critical)

Hero is the center of the entire page, not just the first block.

**Required:**
- One H1
- Short subtitle
- One CTA

**Forbidden:**
- Lists
- Icons
- Cards
- Badges
- Secondary blocks inside Hero

**Visual (if present):**
- One
- Calm
- No frames and device mockups (unless strictly necessary)

### 3.3 Trust / Why it works (cursor.com style)

Separate "social proof" block is forbidden if there are no real logos.

Instead:
- 3–4 short lines of plain text
- No heading
- No icons

Example format (not text):
- Short statement
- Short statement
- Short statement

### 3.4 Features

**Forbidden:**
- Grid of cards with icons

**Allowed (and preferred):**
- Vertical list
- Format: "name + 1 sentence"
- Reads like documentation

### 3.5 How it works
- 3 steps
- No numbered circles
- No icons
- Simple text

### 3.6 Pricing
- Maximally calm
- 2 plans: Monthly / Yearly
- Yearly highlighted by typography, not color
- No marketing decorations

### 3.7 FAQ
- Looks like an article
- Simple accordions or list
- SEO-friendly
- No visual effects

### 3.8 CTA (Final)
- Calm
- One CTA
- No pressure and "marketing" formulations

### 3.9 Footer
- Minimal
- Text-only
- Privacy / Terms / Support
- No visual design

---

## 4. Block Requirements Update

**Rule added:**

❗ Each block must be visually self-sufficient without frames, cards, and background fills.

If a block looks bad without cards — the block is considered incorrectly designed.

---

## 5. Rules for Cursor Agents (Update)

**Cursor agents are forbidden to:**
- Generate cards with shadows
- Use icons without explicit reason
- Add colored sections
- "Decorate" blocks

**Cursor agents must:**
- Start with text
- Check if the block reads as plain text
- Use spacing and typography instead of UI

---

## 6. Definition of Done (Update)

MVP is considered not accepted if:
- Design resembles SaaS 2015–2020
- Cards are used as the main pattern
- Page looks "marketing", not product-focused

