"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, BookOpen, Lock, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { creatorConfig } from "./config";

export default function CreatorCourseTemplate() {
  const { theme, copy } = creatorConfig;

  return (
    <div className={`min-h-screen bg-${theme.background} text-${theme.text} font-sans selection:bg-${theme.primary} selection:text-white`}>
      
      {/* Navbar */}
      <nav className={`py-6 px-4 md:px-8 border-b border-${theme.textMuted}/10 bg-white/80 backdrop-blur-md sticky top-0 z-50`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-2xl tracking-tighter">{copy.nav.brand}</span>
          <button className={`bg-${theme.text} text-white hover:bg-${theme.primary} px-6 py-2.5 rounded-full font-medium transition-colors`}>
            {copy.nav.cta}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-block px-4 py-1.5 rounded-full bg-${theme.primary}/10 text-${theme.primary} font-semibold text-sm mb-6`}>
              New Course Available Now
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            >
              {copy.hero.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-lg md:text-xl text-${theme.textMuted} mb-8`}
            >
              {copy.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-${theme.primary}/30 transition-all flex justify-center items-center gap-2 group`}>
                {copy.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <p className={`text-sm font-medium text-${theme.textMuted} flex items-center gap-2`}>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {copy.hero.socialProof}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={`aspect-video bg-${theme.text} rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl`}
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 text-white ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who is this for */}
      <section className={`py-24 bg-${theme.cardBg} border-y border-${theme.textMuted}/10`}>
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{copy.whoIsThisFor.headline}</h2>
          <div className="space-y-6">
            {copy.whoIsThisFor.points.map((point, i) => (
              <div key={i} className={`flex gap-4 p-6 rounded-2xl bg-${theme.background} border border-${theme.textMuted}/10`}>
                <CheckCircle2 className={`w-8 h-8 text-${theme.primary} flex-shrink-0`} />
                <p className="text-lg font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{copy.curriculum.headline}</h2>
            <p className={`text-lg text-${theme.textMuted}`}>A step-by-step blueprint with zero fluff.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {copy.curriculum.modules.map((mod, i) => (
              <div key={i} className={`bg-${theme.cardBg} p-8 rounded-2xl border border-${theme.textMuted}/10 shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`w-10 h-10 rounded-lg bg-${theme.primary}/10 flex items-center justify-center mb-6`}>
                  <BookOpen className={`w-5 h-5 text-${theme.primary}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                <p className={`text-${theme.textMuted} mb-4 min-h-[48px]`}>{mod.description}</p>
                <p className="text-sm font-semibold flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" /> {mod.lessons}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className={`py-20 bg-${theme.text} text-white px-4 md:px-8`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{copy.bonuses.headline}</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {copy.bonuses.items.map((bonus, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-2xl border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{bonus.title}</h3>
                  <span className={`bg-${theme.primary} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {bonus.value}
                  </span>
                </div>
                <p className="text-stone-300">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 bg-${theme.cardBg} px-4 md:px-8 border-b border-${theme.textMuted}/10`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{copy.testimonials.headline}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {copy.testimonials.items.map((testimonial, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-${theme.background} border border-${theme.textMuted}/10`}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-lg italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className={`text-sm font-semibold text-${theme.primary}`}>{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout / Pricing */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{copy.checkout.headline}</h2>
          
          <div className={`bg-${theme.cardBg} p-8 md:p-12 rounded-3xl border border-${theme.textMuted}/20 shadow-xl relative`}>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-${theme.text} text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2`}>
              <Lock className="w-4 h-4" /> Secure Checkout
            </div>
            
            <div className="mb-8">
              <p className={`text-xl text-${theme.textMuted} line-through mb-2`}>{copy.checkout.originalPrice}</p>
              <p className="text-6xl font-extrabold text-stone-900">{copy.checkout.price}</p>
              <p className={`text-sm text-${theme.textMuted} mt-2`}>One-time payment. Lifetime access.</p>
            </div>

            <button className={`w-full bg-${theme.primary} hover:bg-${theme.primaryHover} text-white py-5 rounded-xl font-bold text-xl mb-6 transition-colors shadow-lg shadow-${theme.primary}/30`}>
              {copy.checkout.cta}
            </button>

            <div className={`flex items-start gap-4 p-4 rounded-xl bg-${theme.background} text-left`}>
              <ShieldCheck className={`w-8 h-8 text-${theme.primary} flex-shrink-0`} />
              <p className={`text-sm text-${theme.textMuted}`}>{copy.checkout.guarantee}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-24 bg-${theme.cardBg} border-t border-${theme.textMuted}/10 px-4 md:px-8`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{copy.faq.headline}</h2>
          <div className="space-y-4">
            {copy.faq.items.map((item, i) => (
              <div key={i} className={`p-6 rounded-xl bg-${theme.background} border border-${theme.textMuted}/10`}>
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className={`text-${theme.textMuted}`}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-xl">{copy.nav.brand}</span>
          <p className={`text-sm text-${theme.textMuted}`}>{copy.footer.copyright}</p>
          <div className="flex gap-6">
            {copy.footer.links.map((link) => (
              <a key={link} href="#" className={`text-sm text-${theme.textMuted} hover:text-stone-900`}>{link}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
