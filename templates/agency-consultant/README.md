# Agency / Consultant Chassis

**Best for:** Marketing agencies, AI automation agencies, high-ticket consultants, B2B services.
**Style:** Premium, authoritative, results-driven, highly professional.

## Sections Included
- Navbar (minimal + CTA)
- Hero (Authority positioning, 3 stats, 2 CTAs)
- Client Logo Strip
- Case Studies (Large cards with images and metrics)
- 3-Step Process
- Team Members
- Calendly Embed Placeholder
- FAQ
- Footer

## Files to Edit
1. `config.ts` - All agency details, case studies, team members, and copy.
2. `index.tsx` - Layout and structural changes.

## Quick Customization Checklist
- [ ] Update `config.ts` with the agency's name, niche, and actual case study results.
- [ ] Replace the `theme.primary` color to match the agency's branding.
- [ ] Swap the placeholder case study images with real charts, dashboards, or client photos.
- [ ] Add real team member headshots to the team section.
- [ ] **Crucial:** Replace the placeholder `<div id="calendly-placeholder">` with their actual Calendly embed code (`<iframe src="https://calendly.com/...` or the Calendly widget script).

## Suggested V0 Prompt (for additional components)
*"Create a Next.js React component for a B2B consulting agency. I need a [COMPONENT_NAME] section. The style should be highly premium and authoritative with a slate-50 background and emerald-600 accents."*

## Suggested Upsells for this Template
- **Lead Magnet / Audit Form:** Instead of directly booking a call, capture emails by offering a free PDF guide or automated site audit.
- **Dedicated Case Study Pages:** Build individual, long-form pages detailing exactly how they got results for specific clients.
- **CRM Integration:** Use server actions to pipe contact form submissions directly into their HubSpot or GoHighLevel.

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
