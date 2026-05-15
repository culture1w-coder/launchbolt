# AI Fill Rules

When a client leaves a field blank on the intake form, you are required to use an LLM (ChatGPT, Claude, etc.) to generate the missing content. 

Do not ask the client for the missing information. The timer is running.

## Rules per Field

- **Missing Tagline:** Generate one based on the business name and their offer. Keep it under 10 words.
- **Missing Customer:** Infer the target audience from the business type. (e.g., if it's B2B SaaS, the customer is "Software founders and operators").
- **Missing Pain:** Infer the likely urgent pain. (e.g., if it's an HVAC company, the pain is "Unexpected breakdowns and uncomfortable home temperatures").
- **Missing CTA:** Use "Get Started", "Request Your Page", or "Book Now".
- **Missing Social Proof:** Create generic authority lines without fake specific claims. Do NOT invent fake names, star ratings, or specific numerical results.
  - *Generic Examples allowed:*
    - "Built for fast-moving businesses that need a professional page quickly."
    - "Designed to help visitors understand the offer and take action."
    - "Clear messaging, mobile-ready layout, and a focused call to action."
- **Missing Brand Colors:** Choose from the closest matching template palette (e.g., if SaaS, use the default violet).
- **Missing Images:** Use high-quality Unsplash placeholders or AI-generated generic placeholders.
- **Missing Domain:** Default to a free Vercel or Netlify subdomain (e.g., `clientname.vercel.app`).
- **Sloppy Grammar:** Clean it lightly to fix typos and capitalization, but do not change the client's original intent or tone. Use it as-is if the intent is unclear.
