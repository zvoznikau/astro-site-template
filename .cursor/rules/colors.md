# Color System Rules

**Reference**: cursor.com + gitkraken.com (system approach, not brand colors)

**Status**: Mandatory for all landing pages

---

## Goals of Color

### Color MUST NOT:
- ❌ Decorate
- ❌ Distract
- ❌ "Make it beautiful"

### Color MUST:
- ✅ Provide hierarchy
- ✅ Help navigation
- ✅ Add modernity
- ✅ Work equally well in light / dark

---

## 1. Base Color System (MANDATORY)

### 1.1 Background

**Forbidden:**
- Pure white `#ffffff`
- Pure black `#000000`

**Required:**
- Soft neutral background

**Light:**
- Almost white
- Slightly warm or neutral

**Dark:**
- Dark gray
- Not "night", but "interface"

**Principle:**

Background must not feel like "paper sheet".

### 1.2 Primary Text
- Almost black in light
- Almost white in dark
- Not absolute values

**Task:**
- Text is readable for long periods
- Eyes don't get tired

### 1.3 Secondary Text

**Used for:**
- Subtitles
- Feature descriptions
- FAQ answers

**Important:**
- Noticeably weaker than primary
- But not gray "like disabled"

---

## 2. Accent Color (MOST IMPORTANT)

### Rule #1

**One accent color for the entire site.**

Not two. Not three. One.

### Where Accent is Used

**Allowed:**
- CTA buttons
- Links
- Active elements
- Hover / focus

**Forbidden:**
- Section backgrounds
- Large fills
- Decorative elements

### Which Accent for DemoAPPmax

Since product is:
- About monitoring
- About stability
- About technology

**Not suitable:**
- Acidic
- Neon
- "Startup" pink/purple

**Suitable:**
- Cold blue
- Calm cyan
- Muted teal

**Principle:**

Accent must look like a "tool", not an "emotion".

---

## 3. Colors and Blocks (by Section)

### 3.1 Header
- Background = transparent or same as body
- Text = secondary
- CTA = accent

Header must not stand out with color.

### 3.2 Hero
- Background = base
- H1 = primary text
- Subline = secondary
- CTA = accent

**Forbidden:**
- Colored Hero backgrounds
- Gradients under text

### 3.3 Trust / Why it works
- Text color = secondary
- Do not use accent

This is a "quiet argument".

### 3.4 Features
- Feature names = primary text
- Descriptions = secondary
- No colored markers

### 3.5 How it works
- Everything monochrome
- Thin line/divider allowed (very subtle)

### 3.6 Pricing (Important)

**NOT:**
- Highlight Yearly with color
- Make colored card

**YES:**
- Yearly highlighted by:
  - Text size
  - Spacing
  - Position

**Color:**
- Same for both plans
- CTA — accent

### 3.7 FAQ
- Questions = primary text
- Answers = secondary
- No colored accordions

### 3.8 CTA Band
- Background can be:
  - Slightly different from body
  - Very subtle

**Accent:**
- Only on button

### 3.9 Footer
- Weakest contrast
- Almost "utility"

---

## 4. Colors and Images (Critical)

**Rules:**
- Images must not compete with accent
- If image is colored:
  - Accent must be calmer
- Allowed:
  - Overlay
  - Slight desaturation

**Principle:**

Site color is more important than image color.

---

## 5. Light / Dark Modes (Mandatory)

### Light
- Feeling of "air"
- Lots of white space
- Accent reads immediately

### Dark
- Not "black version"
- Same site, but at night
- Accent doesn't become acidic

---

## 6. Strict Color Acceptance Checklist

**Site is NOT accepted if:**
- ❌ Want to add "one more color"
- ❌ Background is pure white or pure black
- ❌ Pricing highlighted with color
- ❌ Sections differ in background colors

**Site is ACCEPTED if:**
- ✅ Everything holds on one accent
- ✅ Color helps, doesn't interfere
- ✅ Site looks like product 2026
- ✅ Reminds cursor.com / gitkraken.com, not marketing landing

---

## Implementation Notes

- Use daisyUI theme tokens
- Configure in `tailwind.config.mjs`
- All colors in `brand.ts` should reference theme tokens
- No hardcoded colors in components
- Test in both light and dark modes

