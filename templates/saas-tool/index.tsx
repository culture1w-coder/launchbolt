"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, Zap, RefreshCw, BarChart, Menu, X } from "lucide-react";
import { saasConfig } from "./config";

const IconMap: Record<string, React.ElementType> = {
  Zap,
  RefreshCw,
  BarChart,
};

export default function SaaSToolTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, copy } = saasConfig;

  return (
    <div className={`min-h-screen bg-${theme.background} text-${theme.text} font-sans selection:bg-${theme.primary} selection:text-white`}>
      
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 border-b border-white/10 bg-${theme.background}/80 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded bg-${theme.primary} flex items-center justify-center`}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">{copy.nav.logo}</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {copy.nav.links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className={`text-${theme.textMuted} hover:text-white transition-colors text-sm font-medium`}>
                  {link}
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all`}>
                {copy.nav.cta}
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden bg-${theme.cardBg} border-b border-white/10 px-4 pt-2 pb-4 space-y-1`}>
          {copy.nav.links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block px-3 py-2 text-base font-medium text-white">
              {link}
            </a>
          ))}
          <button className={`w-full mt-4 bg-${theme.primary} text-white px-5 py-3 rounded-xl font-medium`}>
            {copy.nav.cta}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-b from-${theme.primary}/40 to-transparent blur-[100px]`} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            {copy.hero.headline.split(' ').map((word, i, arr) => (
              i === arr.length - 1 ? <span key={i} className={`text-${theme.primary}`}>{word}</span> : word + ' '
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`mt-4 max-w-2xl mx-auto text-xl text-${theme.textMuted}`}
          >
            {copy.hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group`}>
              {copy.hero.ctaPrimary}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all`}>
              {copy.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Dashboard Mockup Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`aspect-video rounded-xl bg-${theme.cardBg} border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden relative`}>
             <div className="absolute top-0 w-full h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
             </div>
             <p className={`text-${theme.textMuted} font-mono mt-8`}>Dashboard Mockup Area</p>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-sm font-medium text-${theme.textMuted} uppercase tracking-wider mb-6`}>{copy.socialProof}</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Generic placeholder logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-white/20 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{copy.problemSolution.headline}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 blur-3xl -mr-16 -mt-16 rounded-full" />
               <h3 className="text-red-400 font-semibold mb-2">The Problem</h3>
               <p className={`text-${theme.textMuted} text-lg`}>{copy.problemSolution.problem}</p>
            </div>
            <div className={`p-8 rounded-2xl bg-${theme.primary}/10 border border-${theme.primary}/20 relative overflow-hidden`}>
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${theme.primary}/20 blur-3xl -mr-16 -mt-16 rounded-full`} />
               <h3 className={`text-${theme.primary} font-semibold mb-2`}>The Solution</h3>
               <p className={`text-${theme.textMuted} text-lg`}>{copy.problemSolution.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={`py-24 bg-${theme.cardBg}/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{copy.features.headline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.features.items.map((feature, i) => {
              const Icon = IconMap[feature.icon] || Zap;
              return (
                <div key={i} className={`p-8 rounded-2xl bg-${theme.cardBg} border border-white/5 hover:border-${theme.primary}/50 transition-colors`}>
                  <div className={`w-12 h-12 rounded-xl bg-${theme.primary}/20 flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 text-${theme.primary}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className={`text-${theme.textMuted}`}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{copy.testimonials.headline}</h2>
            <div className="grid md:grid-cols-2 gap-8">
               {copy.testimonials.items.map((testimonial, i) => (
                  <div key={i} className={`p-8 rounded-2xl bg-${theme.cardBg} border border-white/5`}>
                     <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => <div key={star} className="w-5 h-5 bg-yellow-500 rounded-sm clip-star" />)}
                        <span className="text-yellow-500 ml-1">★★★★★</span>
                     </div>
                     <p className="text-lg italic mb-6">&quot;{testimonial.quote}&quot;</p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full" />
                        <div>
                           <p className="font-bold">{testimonial.author}</p>
                           <p className={`text-sm text-${theme.textMuted}`}>{testimonial.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{copy.pricing.headline}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {copy.pricing.tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-8 flex flex-col relative ${
                  tier.highlighted 
                    ? `bg-${theme.primary}/10 border-2 border-${theme.primary}` 
                    : `bg-${theme.cardBg} border border-white/10`
                }`}
              >
                {tier.highlighted && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-${theme.primary} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className={`text-${theme.textMuted}`}>{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 text-${theme.primary}`} />
                      <span className={`text-${theme.textMuted}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-colors ${
                    tier.highlighted 
                      ? `bg-${theme.primary} hover:bg-${theme.primaryHover} text-white` 
                      : `bg-white/5 hover:bg-white/10 text-white border border-white/10`
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`py-24 bg-${theme.cardBg}/50`}>
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{copy.faq.headline}</h2>
            <div className="space-y-6">
               {copy.faq.items.map((item, i) => (
                  <div key={i} className={`p-6 rounded-xl bg-${theme.cardBg} border border-white/5`}>
                     <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                     <p className={`text-${theme.textMuted}`}>{item.answer}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Footer */}
      <section className={`py-24 bg-${theme.primary} relative overflow-hidden`}>
         <div className="absolute inset-0 bg-black/20" />
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to automate your business?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join 1,000+ teams who are saving 20 hours a week with our platform.</p>
            <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
               {copy.hero.ctaPrimary}
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className={`bg-${theme.background} py-12 border-t border-white/10`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
               <Zap className={`w-5 h-5 text-${theme.primary}`} />
               <span className="font-bold">{copy.nav.logo}</span>
            </div>
            <p className={`text-${theme.textMuted} text-sm`}>{copy.footer.copyright}</p>
            <div className="flex gap-6">
               {copy.footer.links.map((link) => (
                  <a key={link} href="#" className={`text-${theme.textMuted} hover:text-white text-sm`}>{link}</a>
               ))}
            </div>
         </div>
      </footer>

    </div>
  );
}
