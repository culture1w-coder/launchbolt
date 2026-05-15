"use client";

import React from "react";
import { Phone, Mail, Clock, ShieldCheck, MapPin, Wrench, Thermometer, Zap, CheckCircle } from "lucide-react";
import { localConfig } from "./config";

const IconMap: Record<string, React.ElementType> = {
  Wrench,
  Thermometer,
  Zap,
};

export default function LocalServiceTemplate() {
  const { theme, copy } = localConfig;

  return (
    <div className={`min-h-screen bg-${theme.background} text-${theme.text} font-sans selection:bg-${theme.primary} selection:text-white`}>
      
      {/* Top Bar */}
      <div className={`bg-slate-900 text-slate-300 py-2 text-xs md:text-sm px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${copy.topBar.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> {copy.topBar.phone}
            </a>
            <a href={`mailto:${copy.topBar.email}`} className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> {copy.topBar.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {copy.topBar.hours}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="py-4 px-4 md:px-8 border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className={`w-8 h-8 text-${theme.primary}`} />
            <span className="font-bold text-2xl tracking-tight">{copy.nav.brand}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            {copy.nav.links.map((link) => (
              <a key={link} href="#" className={`text-${theme.text} hover:text-${theme.primary} transition-colors`}>
                {link}
              </a>
            ))}
          </div>

          <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg shadow-${theme.primary}/20 hidden sm:block`}>
            {copy.nav.cta}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`bg-${theme.cardBg} py-16 md:py-24 px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 font-bold text-sm rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {copy.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              {copy.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              {copy.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={`tel:${copy.hero.ctaPrimary.replace(/[^0-9]/g, '')}`}
                className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-md font-bold text-lg text-center flex items-center justify-center gap-2 shadow-xl shadow-${theme.primary}/20 transition-all`}
              >
                <Phone className="w-5 h-5" />
                {copy.hero.ctaPrimary}
              </a>
              <button className={`bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-8 py-4 rounded-md font-bold text-lg transition-all`}>
                {copy.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
              {copy.hero.trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                  <ShieldCheck className={`w-4 h-4 text-${theme.primary}`} />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2787&auto=format&fit=crop" 
              alt="Service Professional" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white" />)}
               </div>
               <div>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <p className="text-sm font-bold text-slate-900">Over 500 5-star reviews</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">{copy.services.headline}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {copy.services.items.map((service, i) => {
              const Icon = IconMap[service.icon] || Wrench;
              return (
                <div key={i} className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-shadow group">
                  <div className={`w-14 h-14 rounded-full bg-${theme.primary}/10 flex items-center justify-center mb-6 group-hover:bg-${theme.primary} transition-colors`}>
                    <Icon className={`w-7 h-7 text-${theme.primary} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <a href="#" className={`text-${theme.primary} font-bold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                    Learn more <span className="text-lg">→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Service Area */}
      <section className={`bg-${theme.cardBg} py-24 px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10">{copy.whyChooseUs.headline}</h2>
            <div className="space-y-8">
              {copy.whyChooseUs.points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`mt-1 bg-${theme.primary}/10 p-2 rounded-full h-fit`}>
                    <CheckCircle className={`w-6 h-6 text-${theme.primary}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className={`text-${theme.primary}`} /> {copy.serviceArea.headline}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {copy.serviceArea.areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className={`w-2 h-2 rounded-full bg-${theme.primary}`} />
                  {area}
                </div>
              ))}
            </div>
            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
               <p className="text-slate-500 font-medium flex flex-col items-center gap-2">
                  <MapPin className="w-8 h-8 text-slate-400" />
                  Google Maps Embed Placeholder
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{copy.contact.headline}</h2>
            <p className="text-slate-400 text-lg mb-10">{copy.contact.subheadline}</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-${theme.primary}/20 flex items-center justify-center flex-shrink-0`}>
                  <Phone className={`text-${theme.primary}`} />
                </div>
                <div>
                  <p className="text-slate-400 font-medium mb-1">Call us directly</p>
                  <p className="text-2xl font-bold">{copy.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-${theme.primary}/20 flex items-center justify-center flex-shrink-0`}>
                  <MapPin className={`text-${theme.primary}`} />
                </div>
                <div>
                  <p className="text-slate-400 font-medium mb-1">Visit our office</p>
                  <p className="text-lg font-medium whitespace-pre-line">{copy.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request Service</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your issue..."></textarea>
              </div>
              <button type="submit" className={`w-full bg-${theme.primary} hover:bg-${theme.primaryHover} text-white font-bold text-lg py-4 rounded-md transition-colors`}>
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 md:px-8 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className={`w-6 h-6 text-${theme.primary}`} />
            <span className="font-bold text-xl">{copy.nav.brand}</span>
          </div>
          <p className="text-sm">{copy.footer.copyright} | {copy.footer.license}</p>
        </div>
      </footer>

    </div>
  );
}
