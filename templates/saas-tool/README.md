# SaaS / Tool Chassis

**Best for:** AI tools, software products, micro-SaaS, B2B platforms.
**Style:** Dark mode, purple accents, modern tech feel.

## Sections Included
- Navbar
- Hero with two CTAs
- Social proof bar
- Problem & Solution narrative
- 3-Column Features
- Dashboard mockup placeholder
- Testimonials (2-column)
- Pricing Cards (3 tiers)
- FAQ
- Footer

## Files to Edit
1. `config.ts` - All text, pricing, and links are managed here.
2. `index.tsx` - If you need to add new sections or change structural layout.

## Quick Customization Checklist
- [ ] Open `config.ts` and replace "AutoAI" with the client's app name.
- [ ] Update the hero headline and subheadline to match their value prop.
- [ ] Define the 3 core features in the config.
- [ ] Adjust pricing tiers, prices, and features to match their model.
- [ ] Replace the placeholder `<svg>` dashboard mockup with an actual screenshot or image of the client's software.
- [ ] Change the `primary` color in `config.ts` to match the client's brand.

## Suggested V0 Prompt (for additional components)
*"Create a dark-mode Next.js React component using Tailwind. It should be a [COMPONENT_NAME] section that fits a modern SaaS aesthetic with a slate-950 background and violet accents. Make sure it uses lucide-react icons."*

## Suggested Upsells for this Template
- **Onboarding Flow:** Add a multi-step user onboarding wizard.
- **Dashboard Mockup:** Build out a functional dashboard shell.
- **Email Capture/Waitlist:** Convert the primary CTA to an email capture form for pre-launch products.

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
