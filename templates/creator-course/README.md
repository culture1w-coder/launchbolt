# Creator / Course Chassis

**Best for:** Personal brands, course creators, coaches, digital products.
**Style:** Warm minimal, trustworthy, focus on personal brand authority.

## Sections Included
- Navbar (minimal brand + CTA)
- Creator hero with Video embed placeholder
- "Who this is for" checkmarks
- Course Curriculum (Modules)
- Bonus stack
- Testimonials & Results
- Stripe Checkout CTA & Pricing
- Guarantee Section
- FAQ
- Footer

## Files to Edit
1. `config.ts` - Contains all course details, pricing, testimonials, and copy.
2. `index.tsx` - Layout and structural changes.

## Quick Customization Checklist
- [ ] Update `config.ts` with the creator's name and brand colors (e.g., change `amber-600` to their brand color).
- [ ] Replace the Hero placeholder with a real YouTube/Vimeo embed or a high-quality creator photo.
- [ ] Update the modules to reflect the actual course curriculum.
- [ ] Add the actual Stripe checkout link to the "Enroll Now" buttons.
- [ ] Swap the placeholder student testimonials with real screenshots or text reviews.

## Suggested V0 Prompt (for additional components)
*"Create a Next.js React component for a personal brand landing page. Use a warm minimal aesthetic with a stone-50 background and amber-600 accents. I need a [COMPONENT_NAME] section. Make it feel highly premium and trustworthy."*

## Suggested Upsells for this Template
- **Stripe Checkout Page:** Build a custom checkout page instead of linking directly to Stripe.
- **Lead Magnet / Opt-in:** A simple squeeze page to collect emails before selling the course.
- **Email Sequence:** Set up the automated welcome and sales email flows.

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
