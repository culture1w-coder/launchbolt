# TEMPLATE ARSENAL

Welcome to the Antigravity Template Arsenal. This repository contains 5 production-ready, highly-converting website chassis designed to be cloned and deployed for client orders in 1-2 hours.

## Included Chassis

1. **SaaS / Tool** (`/templates/saas-tool`)
   - **Best for:** AI tools, software products, micro-SaaS, B2B platforms.
   - **Style:** Dark mode, purple accents, modern tech feel.
   - **Upsells:** Onboarding flow, dashboard mockup, email capture, waitlist.

2. **Creator / Course** (`/templates/creator-course`)
   - **Best for:** Personal brands, course creators, coaches, digital products.
   - **Style:** Warm minimal, trustworthy, focus on personal brand.
   - **Upsells:** Checkout page, lead magnet, email sequence, webinar page.

3. **Local Service** (`/templates/local-service`)
   - **Best for:** Contractors, trades, home services, local businesses.
   - **Style:** Clean, professional, conversion-focused (calls/forms).
   - **Upsells:** Booking form, quote calculator, service area pages, review widget.

4. **Product / Drop** (`/templates/product-drop`)
   - **Best for:** Physical products, ecommerce drops, premium goods.
   - **Style:** High-converting, visual-heavy, urgency-driven.
   - **Upsells:** Upsell page, abandoned cart email, product bundles, reviews import.

5. **Agency / Consultant** (`/templates/agency-consultant`)
   - **Best for:** Marketing agencies, AI automation agencies, high-ticket consultants.
   - **Style:** Premium, authoritative, results-driven.
   - **Upsells:** Lead magnet, audit form, CRM integration, case study page.

---

## 🛠 How to Clone & Deploy a Chassis

### 1. Identify the Client Profile
Review the client requirements and select the chassis that most closely aligns with their business model.

### 2. Copy the Files
To use a template in a new project, simply copy the `index.tsx` and `config.ts` files from the respective `/templates/[chassis]/` directory.
If deploying within this mono-repo, route to the template via `/app/templates/[chassis]`.

### 3. What to Edit First
Always start with the **`config.ts`** file.
1. Open the template's `config.ts`.
2. Update the `theme`, `copy`, `contact`, and `pricing` objects.
3. Replace the placeholder values with actual client data.

### 4. Asset Replacement Checklist
- [ ] Replace `LOGO_URL` with client logo.
- [ ] Replace hero background/image placeholders.
- [ ] Replace UI/Dashboard mockups (for SaaS).
- [ ] Swap generic team/creator headshots with real photos.
- [ ] Add real client case study/portfolio images.

### 5. Copy Replacement Checklist
- [ ] Hero Headline (H1) and Subheadline (H2).
- [ ] All CTA button text (e.g., "Start Free Trial" vs "Book an Audit").
- [ ] Features/Benefits sections.
- [ ] Pricing tiers, names, and limits.
- [ ] Testimonials and Reviews.
- [ ] FAQ answers.
- [ ] Footer copyright and links.

### 6. Deployment Checklist
- [ ] Verify responsive views (Mobile, Tablet, Desktop).
- [ ] Test all CTA links to ensure they route correctly (e.g., to Stripe, Calendly, or Contact form).
- [ ] Ensure all generic placeholder copy (Lorem Ipsum/Draft text) is removed.
- [ ] Update SEO metadata (Title, Description, OpenGraph image) for the page.
- [ ] Run a final Lighthouse audit to ensure fast load times.
- [ ] Deploy!

---

*Built for rapid iteration and high conversion.*

---

## Phase 3: Zero-Revision Delivery Infrastructure

The template arsenal is now fully connected to the zero-revision operational infrastructure. 

Each chassis can be cloned for a client ONLY after payment clears and the intake form is submitted. The business infrastructure documents control the strict scope, payment, delivery, and client expectations. This system is designed to protect profit by completely preventing revision creep.

See the master infrastructure document for full details:
[PHASE_3_ZERO_REVISION_INFRASTRUCTURE.md](./business-infrastructure/PHASE_3_ZERO_REVISION_INFRASTRUCTURE.md)
