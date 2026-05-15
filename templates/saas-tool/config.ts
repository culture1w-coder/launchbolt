export const saasConfig = {
  theme: {
    primary: "violet-600",
    primaryHover: "violet-500",
    background: "slate-950",
    cardBg: "slate-900",
    text: "slate-50",
    textMuted: "slate-400",
  },
  copy: {
    nav: {
      logo: "AutoAI",
      links: ["Features", "Pricing", "FAQ"],
      cta: "Get Started",
    },
    hero: {
      headline: "Automate Your Workflows with AI",
      subheadline: "The complete AI automation tool for small businesses. Save 20 hours a week by letting our agents handle your repetitive tasks.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "View Demo",
    },
    socialProof: "Trusted by 1,000+ forward-thinking teams",
    problemSolution: {
      headline: "Stop doing busywork.",
      problem: "You're spending too much time on manual data entry and repetitive tasks.",
      solution: "Let AI handle the heavy lifting so you can focus on growing your business.",
    },
    features: {
      headline: "Everything you need to scale",
      items: [
        {
          title: "Smart Automations",
          description: "Set up triggers and actions in seconds with our no-code builder.",
          icon: "Zap",
        },
        {
          title: "Data Sync",
          description: "Keep all your tools in sync automatically across 100+ integrations.",
          icon: "RefreshCw",
        },
        {
          title: "AI Analytics",
          description: "Get actionable insights from your data with natural language queries.",
          icon: "BarChart",
        },
      ]
    },
    pricing: {
      headline: "Simple, transparent pricing",
      tiers: [
        {
          name: "Starter",
          price: "$29",
          period: "/mo",
          features: ["5 Automations", "1,000 Tasks/mo", "Community Support"],
          cta: "Get Started",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "$99",
          period: "/mo",
          features: ["Unlimited Automations", "10,000 Tasks/mo", "Priority Support", "Custom API Access"],
          cta: "Start Free Trial",
          highlighted: true,
        },
        {
          name: "Scale",
          price: "$299",
          period: "/mo",
          features: ["Unlimited Everything", "Dedicated Success Manager", "SLA Guarantee", "White-glove Onboarding"],
          cta: "Contact Sales",
          highlighted: false,
        },
      ],
    },
    testimonials: {
      headline: "Loved by operators",
      items: [
        {
          quote: "This tool completely transformed how we handle customer support. We're saving thousands a month.",
          author: "Sarah Jenkins",
          role: "Operations Manager",
        },
        {
          quote: "The easiest automation platform I've ever used. Set up took literally minutes.",
          author: "Mike Thompson",
          role: "Founder",
        },
      ]
    },
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          question: "Do I need coding experience?",
          answer: "Not at all. Our platform is 100% no-code and drag-and-drop.",
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time.",
        },
        {
          question: "Do you offer custom integrations?",
          answer: "Yes, on our Scale plan we can build custom API integrations for your specific needs.",
        }
      ]
    },
    footer: {
      copyright: "© 2026 AutoAI Inc. All rights reserved.",
      links: ["Privacy Policy", "Terms of Service", "Contact Us"],
    }
  },
};
