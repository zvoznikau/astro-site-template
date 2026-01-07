# Design Rules Summary

**Quick reference for Cursor agents working on landing pages**

---

## Core Documents

1. **`.cursor/rules/design-vision-2026.md`** - Main design vision (cursor.com + gitkraken.com style)
2. **`.cursor/rules/images.md`** - Image and visual context rules
3. **`.cursor/rules/design-checklist.md`** - Acceptance checklist before release

---

## Key Principles

### Design Philosophy
- ✅ Product minimalism
- ✅ Typography as primary UI
- ✅ Lots of whitespace
- ✅ One visual accent per screen maximum
- ✅ Site looks like part of the product, not an agency landing

### Forbidden
- ❌ SaaS cards with shadows
- ❌ Sections with colored backgrounds
- ❌ Icons for the sake of icons
- ❌ "Marketing" blocks (Trusted by, badges, gradients)
- ❌ Visual noise
- ❌ People in office stock photos
- ❌ 2015-style stock photos

### Required
- ✅ Start with text
- ✅ Check if block reads as plain text
- ✅ Use spacing and typography instead of UI
- ✅ Images are context, not decoration
- ✅ Visual "breathing" between blocks

---

## Image Rules (Quick)

### Allowed
- Product screenshots (no device frames)
- Abstract tech images (soft, neutral, no people)
- Ambient backgrounds (sparingly)

### Forbidden
- People in office
- "Happy team" photos
- Hand-shake, coffee, laptop stock photos
- Notion 2020-style illustrations

### Placement
- Hero: One image (if present)
- Between blocks: Visual pauses (Hero → image → Features → image → Pricing)
- Features/How it works: 1-2 supporting images, very calm

---

## Block Structure

### Header
- Very thin, minimal blur
- Text logo
- 1 primary CTA
- Max 3 menu items

### Hero
- One H1
- Short subtitle
- One CTA
- Image slot (optional)

### Social Proof
- 3-4 short lines of plain text
- No heading, no icons

### Features
- Vertical list
- "Name + 1 sentence" format
- Reads like documentation

### How It Works
- 3 steps
- Simple text
- No numbered circles, no icons

### Pricing
- Maximally calm
- Typography highlights "best value", not color

### FAQ
- Looks like an article
- Simple list

### CTA / Footer
- Calm, minimal, text-only

---

## Configuration

All content in `apps/web/astro/src/config/brand.ts`:
- Text content
- Image configuration (`brand.images`)
- Block order
- SEO settings

---

## Acceptance Criteria

**Site is NOT accepted if:**
- Completely black and white
- Looks like documentation
- No visual context
- Uses forbidden patterns

**Site is accepted if:**
- Visually "breathes"
- Images don't interfere with text
- Looks modern and alive
- Reminds cursor.com / gitkraken.com

---

## Quick Checklist

Before accepting design:
1. Check `.cursor/rules/design-checklist.md`
2. Verify typography is primary
3. Verify images are context, not decoration
4. Verify no forbidden patterns
5. Verify visual "breathing"

