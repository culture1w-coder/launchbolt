# Local Service Chassis

**Best for:** Contractors, trades (plumbers, HVAC, roofers), home services, local businesses.
**Style:** Trustworthy, clean, conversion-focused (driving phone calls and form fills).

## Sections Included
- Top Contact Bar (Phone, Email, Hours)
- Navbar (Logo + Free Quote CTA)
- Hero (Emergency badge, Trust badges, Click-to-call)
- Core Services
- Why Choose Us
- Reviews/Testimonials
- Service Area
- Contact Form & Map Placeholder
- Footer (with license info)

## Files to Edit
1. `config.ts` - All contact info, service lists, and copy.
2. `index.tsx` - Layout and structural changes.

## Quick Customization Checklist
- [ ] Update `config.ts` with the actual client's phone number everywhere (crucial for click-to-call).
- [ ] Update the `primary` theme color to match the client's trucks/uniforms.
- [ ] Replace the `<Map>` placeholder with a real Google Maps embed iframe of the client's business address.
- [ ] Add real photos of the client's team or trucks to the Hero section (replace the placeholder gray box).
- [ ] Update the License # in the footer if applicable to their trade.

## Suggested V0 Prompt (for additional components)
*"Create a Next.js React component for a local contractor website using Tailwind. I need a [COMPONENT_NAME] section. The style should be clean with a white background, slate-900 text, and blue-600 accents. Make it look highly trustworthy."*

## Suggested Upsells for this Template
- **Quote Calculator:** A multi-step form estimating service costs based on square footage.
- **Service Area Pages:** SEO-optimized subpages for each city/neighborhood they serve.
- **Review Widget:** Embed a live feed of their Google or Yelp reviews.

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
