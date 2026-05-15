# Product / Drop Chassis

**Best for:** Single-product ecommerce, limited drops, premium physical goods, D2C brands.
**Style:** High-converting, visual-heavy, urgency-driven layout.

## Sections Included
- Announcement Bar (urgency/shipping)
- Navbar (minimal)
- Split Hero (Image Gallery on Left, Buy Box on Right)
  - Review stars & count
  - Price & Original Price
  - Scarcity/Inventory Bar
  - Bullet benefits
  - Sticky/Prominent Add to Cart Button
- Trust Badges (Shipping, Returns, Secure)
- Details & Specs Table
- Customer Reviews List
- FAQ
- Footer

## Files to Edit
1. `config.ts` - All product details, pricing, reviews, and copy.
2. `index.tsx` - Layout and structural changes.

## Quick Customization Checklist
- [ ] Update `config.ts` with the specific product name, price, and benefits.
- [ ] Replace the `theme.primary` color to match the brand's main CTA color.
- [ ] Replace the generic placeholder images in the left column with high-quality product lifestyle shots.
- [ ] Update the trust badges (icons) if needed to match their specific guarantees.
- [ ] Ensure the "Add to Cart" button links to their checkout page (e.g., Shopify Buy Button link).

## Suggested V0 Prompt (for additional components)
*"Create a Next.js React component for a direct-to-consumer ecommerce page. I need a [COMPONENT_NAME] section. The style should be clean and premium with a white background and zinc-900 text. Include lucide-react icons."*

## Suggested Upsells for this Template
- **Post-Purchase Upsell Page:** An OTO (One Time Offer) page that appears right after checkout.
- **Product Bundles:** Modify the pricing section to offer a "Buy 2 Get 1 Free" option.
- **Reviews Import:** Connect a real review app (like Loox or Stamped) instead of static reviews.

## Phase 3: Zero-Revision Delivery Infrastructure

This chassis is connected to the centralized crisis-build workflow:

- Intake Form: ../../business-infrastructure/INTAKE_FORM.md
- Payment Flow: ../../business-infrastructure/PAYMENT_FLOW.md
- Zero-Revision Terms: ../../business-infrastructure/ZERO_REVISION_TERMS.md
- Delivery Workflow: ../../business-infrastructure/DELIVERY_WORKFLOW.md
- Loom Script: ../../business-infrastructure/LOOM_SCRIPT.md
- Client Delivery Email: ../../business-infrastructure/CLIENT_DELIVERY_EMAIL.md
- AI Fill Rules: ../../business-infrastructure/AI_FILL_RULES.md

Rules:
- 100% payment upfront.
- Timer starts only after payment clears.
- Client intake controls the build.
- Blank fields are filled with AI.
- Sloppy fields are used anyway.
- No revision rounds.
- No calls.
- One final delivery email closes the job.
