# Layout Composition Rules

**Reference**: cursor.com + gitkraken.com

**Status**: Mandatory for all landing pages

---

## 0. General Rules for All Layouts

### Notation
- `TEXT` — text block
- `IMG` — image (stock / screenshot)
- `CTA` — button/link
- `———` — visual pause
- `|` — semantic zone boundary, not a real frame

### Rule #1 (Critical)
**Not everything is centered. Not everything has the same width.**

The page must be visually diverse. If the ASCII representation looks like a single text column — the design has failed.

---

## 1. HERO — First Screen (Critical)

### ❌ Current (WRONG)

```
           TEXT
           TEXT
           CTA
```

### ✅ Correct (DESKTOP)

```
| TEXT ZONE (45–50%)        |  IMG ZONE (50–55%)        |
|                           |                           |
| H1 (2 lines max)          |  BIG IMAGE                |
|                           |  (dashboard / abstract)   |
| Subline                   |  no frames                |
|                           |  can overflow              |
| CTA                       |  container                 |
```

**Key requirements:**
- Hero = two zones
- Image is LARGE
- Image is not "under text"
- Text is visually heavy, image is large-scale

### 📱 Mobile

```
TEXT
CTA

IMG (wide)
```

---

## 2. Visual Pause After Hero (MANDATORY)

```
----------------------------------
|                                  |
|          FULL-WIDTH IMG          |
|                                  |
----------------------------------
```

**Rules:**
- No text
- This is a "breath"
- Creates sense of scale
- Can use stock / abstract

**If this block is missing — the site looks like documentation.**

---

## 3. TRUST / WHY IT WORKS (After Hero)

### ❌ NOT in a column

### ✅ DESKTOP

```
| Privacy-first | Fast setup | Clear dashboards |
```

### 📱 Mobile

```
Privacy-first
Fast setup
Clear dashboards
```

**Rules:**
- One line on desktop
- No heading
- No icons
- Looks like a calm statement

---

## 4. FEATURES — Main Content

### ❌ Current (WRONG)

```
Feature
description

Feature
description
```

### ✅ Correct (DESKTOP)

```
| FEATURE NAME        | DESCRIPTION                        |
|                     |                                    |
| FEATURE NAME        | DESCRIPTION                        |
|                     |                                    |
| FEATURE NAME        | DESCRIPTION                        |
```

**Example rhythm:**
- Left column — visually stronger
- Right — calm
- Lots of space between rows

**Can add one supporting image on the side or between groups:**

```
FEATURES BLOCK
-----------------
IMG (subtle)
-----------------
FEATURES BLOCK
```

---

## 5. HOW IT WORKS — Steps

### ❌ NOT vertical list on desktop

### ✅ DESKTOP

```
| Connect        | Monitor        | Get alerts     |
| short text     | short text     | short text    |
```

### 📱 Mobile

```
Connect
text

Monitor
text

Get alerts
text
```

**Rules:**
- 3 blocks in a row on desktop
- No numbers
- No icons
- Each block is independent

---

## 6. PRICING — Decision Anchor

### ❌ Current

```
Monthly $9.99
Yearly  $99.99
```

### ✅ Correct (DESKTOP)

```
| Monthly               | Yearly                       |
| $9.99                 | $99.99                       |
| per month             | per year                     |
| CTA                   | CTA (slightly larger text)   |
```

**Key:**
- Yearly visually dominates
- Not by color
- By size / spacing / position

### 📱 Mobile

```
Yearly (best value)
price
CTA

Monthly
price
CTA
```

---

## 7. FAQ — Readability

**DESKTOP / MOBILE same**

```
Q
A

Q
A

Q
A
```

**Rules:**
- Each Q = mini-block
- Lots of vertical space
- Looks like an article, not a form

---

## 8. FINAL CTA — Page End

```
----------------------------------
| TEXT (1 line)                 |
| CTA                           |
----------------------------------
```

- Very calm
- No extra elements
- Logical conclusion

---

## 9. Footer (Utility)

```
Product name        Privacy  Terms  Support      © Year
```

---

## Final Rule (Most Important)

**If you convert the page to ASCII — it must be diverse.**

**If ASCII looks like a single text column — the design has failed.**

---

## Implementation Checklist

- [ ] Hero: Two zones (text 45-50%, image 50-55%)
- [ ] Visual pause after Hero (mandatory)
- [ ] Trust: One line on desktop
- [ ] Features: Two columns (name | description)
- [ ] How it works: 3 blocks in a row on desktop
- [ ] Pricing: Two columns, Yearly dominates
- [ ] FAQ: Vertical list with space
- [ ] CTA: Simple block
- [ ] Footer: One line
- [ ] Overall: Visual diversity, not single column

