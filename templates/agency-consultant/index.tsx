"use client";

import React from "react";
import { ArrowRight, BarChart3, CheckCircle, Calendar } from "lucide-react";
import { agencyConfig } from "./config";

export default function AgencyConsultantTemplate() {
  const { theme, copy } = agencyConfig;

  return (
    <div className={`min-h-screen bg-${theme.background} text-${theme.text} font-sans selection:bg-${theme.primary} selection:text-white`}>
      
      {/* Navbar */}
      <nav className="py-6 px-4 md:px-8 bg-transparent absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart3 className={`w-6 h-6 text-${theme.primary}`} />
            <span className="font-bold text-xl tracking-tight">{copy.nav.brand}</span>
          </div>
          <button className={`bg-slate-900 text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-${theme.primary} transition-colors`}>
            {copy.nav.cta}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
              {copy.hero.headline}
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              {copy.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 group`}>
                {copy.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-8 py-4 rounded-md font-bold text-lg transition-colors">
                {copy.hero.ctaSecondary}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {copy.hero.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop" 
                  alt="Consulting Meeting"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
             </div>
             {/* Floating Badge */}
             <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                   <div className={`w-12 h-12 rounded-full bg-${theme.primary}/10 flex items-center justify-center`}>
                      <BarChart3 className={`w-6 h-6 text-${theme.primary}`} />
                   </div>
                   <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Quarterly Growth</p>
                      <p className="text-2xl font-black text-slate-900">+124%</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{copy.logos.headline}</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-slate-400 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 md:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">{copy.caseStudies.headline}</h2>
            <a href="#" className={`hidden md:flex items-center gap-2 text-${theme.primary} font-bold hover:text-white transition-colors`}>
              View all work <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {copy.caseStudies.items.map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                  <img src={study.image} alt={study.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                    <p className="text-slate-400 mb-4">{study.description}</p>
                  </div>
                  <div className={`bg-${theme.primary}/20 border border-${theme.primary}/30 text-${theme.primary} px-4 py-2 rounded-lg font-bold whitespace-nowrap`}>
                    {study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">{copy.process.headline}</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0" />
            
            {copy.process.items.map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-xl font-black text-slate-300 mb-6 group-hover:border-${theme.primary} transition-colors`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`py-24 px-4 md:px-8 bg-${theme.background}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{copy.team.headline}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {copy.team.items.map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 flex gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className={`text-sm font-bold text-${theme.primary} mb-2`}>{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly / CTA */}
      <section className="py-24 px-4 md:px-8 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className={`w-12 h-12 text-${theme.primary} mx-auto mb-6`} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.calendly.headline}</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">{copy.calendly.subheadline}</p>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-white rounded-2xl p-4 md:p-8 h-[600px] flex items-center justify-center border border-slate-700 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-slate-400">
                <Calendar className="w-16 h-16 mb-4 opacity-50" />
                <p className="font-bold text-lg text-slate-600">Calendly Widget Embed Area</p>
                <p className="text-sm mt-2">Replace this div with your actual iframe embed code.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{copy.faq.headline}</h2>
          <div className="space-y-6">
            {copy.faq.items.map((item, i) => (
              <div key={i} className="border-b border-slate-200 pb-6">
                <h3 className="font-bold text-lg mb-2 text-slate-900 flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 text-${theme.primary}`} /> {item.question}
                </h3>
                <p className="text-slate-600 pl-7">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 md:px-8 text-center md:text-left text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <BarChart3 className={`w-5 h-5 text-${theme.primary}`} />
            <span className="font-bold text-lg tracking-tight">{copy.nav.brand}</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            {copy.footer.links.map((link, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-xs">{copy.footer.copyright}</p>
        </div>
      </footer>

    </div>
  );
}
