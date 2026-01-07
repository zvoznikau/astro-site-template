# Design Acceptance Checklist

**Purpose**: Use this checklist before accepting a landing page design.

**Related documents**:
- `.cursor/rules/design-vision-2026.md` - Design vision
- `.cursor/rules/images.md` - Image rules
- `.cursor/rules/colors.md` - Color system rules
- `.cursor/rules/layout-composition.md` - Layout composition rules

---

## 1. Design Vision Compliance

### Typography & Layout
- [ ] Typography is the primary UI element
- [ ] Large headings, short text
- [ ] One thought = one line
- [ ] Lots of whitespace
- [ ] Text reads as plain text (documentation style)

### Visual Elements
- [ ] No cards with shadows
- [ ] No colored section backgrounds
- [ ] No icons without explicit reason
- [ ] No "marketing" blocks (Trusted by, badges, gradients)
- [ ] No visual noise

### Color Usage
- [ ] One accent color (primary) used only for:
  - [ ] CTA buttons/links
  - [ ] Active links
- [ ] Accent color NOT used for section backgrounds
- [ ] UI is "dissolved" (buttons don't scream, menu unobtrusive)

---

## 2. Block Structure

### Header
- [ ] Very thin
- [ ] Minimal or no background fill
- [ ] Text logo (product name)
- [ ] 1 primary CTA
- [ ] No more than 3 menu items

### Hero
- [ ] One H1
- [ ] Short subtitle
- [ ] One CTA
- [ ] No lists, icons, cards, badges
- [ ] Image slot present (if needed)
- [ ] Text is primary, image doesn't break text

### Social Proof / Trust
- [ ] 3–4 short lines of plain text
- [ ] No heading
- [ ] No icons
- [ ] No cards

### Features
- [ ] Vertical list format
- [ ] "Name + 1 sentence" format
- [ ] Reads like documentation
- [ ] No grid of cards
- [ ] No icons per feature

### How It Works
- [ ] 3 steps
- [ ] No numbered circles
- [ ] No icons
- [ ] Simple text

### Pricing
- [ ] Maximally calm
- [ ] 2 plans: Monthly / Yearly
- [ ] Yearly highlighted by typography, not color
- [ ] No marketing decorations

### FAQ
- [ ] Looks like an article
- [ ] Simple list or accordion
- [ ] SEO-friendly
- [ ] No visual effects

### CTA (Final)
- [ ] Calm
- [ ] One CTA
- [ ] No pressure and "marketing" formulations

### Footer
- [ ] Minimal
- [ ] Text-only
- [ ] Privacy / Terms / Support links
- [ ] No visual design

---

## 3. Images and Visual Context

### Image Quality
- [ ] Images are context, not decoration
- [ ] Images don't explain product
- [ ] Images don't compete with text
- [ ] Images add depth and emotion

### Image Types
- [ ] Product screenshots (if applicable) - no device frames
- [ ] Abstract tech images - soft, neutral, no people
- [ ] Ambient backgrounds - used sparingly
- [ ] NO forbidden images:
  - [ ] No people in office
  - [ ] No "happy team"
  - [ ] No hand-shake, coffee, laptop stock photos
  - [ ] No 2015-style stock photos
  - [ ] No Notion 2020-style illustrations

### Image Placement
- [ ] Hero: One image (if present)
- [ ] Visual pauses between blocks (Hero → image → Features → image → Pricing)
- [ ] Features/How it works: 1–2 supporting images, very calm
- [ ] Images don't break text flow
- [ ] Text is always primary

### Image Processing
- [ ] Images not too contrasty
- [ ] Slightly muted or with overlay
- [ ] Images don't pull attention from text
- [ ] Work in both light and dark themes

---

## 4. Visual Balance

### Overall Feel
- [ ] Site "breathes" visually
- [ ] Not completely black and white
- [ ] Not sterile
- [ ] Looks modern and alive
- [ ] Reminds cursor.com / gitkraken.com, not Notion docs

### Not Documentation
- [ ] Doesn't look like open-source docs
- [ ] Doesn't look like "we didn't have time for design"
- [ ] Has visual context without noise

---

## 5. Responsive Design

### Mobile
- [ ] Mobile-first approach
- [ ] Text readable on mobile
- [ ] Images work on mobile (can go below text)
- [ ] CTA accessible on mobile

### Desktop
- [ ] Proper spacing on large screens
- [ ] Text doesn't stretch too wide
- [ ] Images scale appropriately

---

## 6. Theme Support

### Light Theme
- [ ] All elements visible
- [ ] Good contrast
- [ ] Images work well

### Dark Theme
- [ ] All elements visible
- [ ] Good contrast
- [ ] Images work well (may need different versions)

---

## 7. Technical

### Code Quality
- [ ] No inline styles
- [ ] Uses daisyUI tokens
- [ ] Responsive utilities
- [ ] No hardcoded colors
- [ ] Configuration in brand.ts

### Performance
- [ ] Images optimized
- [ ] Lazy loading where appropriate
- [ ] Fast page load

---

## 8. Final Check

### Definition of Done
- [ ] Design does NOT resemble SaaS 2015–2020
- [ ] Cards are NOT the main pattern
- [ ] Page looks product-focused, not marketing
- [ ] Site is visually self-sufficient without frames/cards
- [ ] Has visual context (images) without noise
- [ ] Typography is primary, UI is secondary

---

## Acceptance Decision

**Site is NOT accepted if:**
- ❌ Completely black and white
- ❌ Looks like documentation
- ❌ No visual context at all
- ❌ Uses forbidden design patterns
- ❌ Uses forbidden images
- ❌ Background is pure white or pure black
- ❌ Pricing highlighted with color
- ❌ Sections differ in background colors
- ❌ More than one accent color

**Site is accepted if:**
- ✅ Visually "breathes"
- ✅ Images don't interfere with text
- ✅ Site looks modern and alive
- ✅ Reminds cursor.com / gitkraken.com
- ✅ Typography is primary
- ✅ Minimal but not sterile
- ✅ ONE accent color, helps navigation
- ✅ Color helps, doesn't interfere
- ✅ Looks like product 2026

