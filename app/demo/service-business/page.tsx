"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, MapPin, Wrench, Zap, Clock, 
  ShieldCheck, Car, Battery, Activity, 
  PhoneCall, ArrowRight, AlertTriangle, ChevronDown
} from "lucide-react";

export default function ServiceBusinessDemo() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-violet-500/30">
      
      {/* Floating Demo Badge */}
      <div className="fixed top-4 right-4 z-50 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-violet-400">
        Demo Example
      </div>

      {/* Top Bar */}
      <div className="bg-black border-b border-gray-900 py-2 px-6 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><PhoneCall className="w-3 h-3 text-violet-500" /> (555) 123-4567</span>
          <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-violet-500" /> 7AM - 8PM Daily</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-violet-400">
          Serving the Greater Metro Area
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-black text-xl tracking-tight leading-none">BoltFix</div>
              <div className="text-[10px] text-violet-400 font-bold uppercase tracking-widest">Mobile Auto Repair</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#request-service" className="hidden sm:flex bg-white text-black px-5 py-2.5 rounded-md font-bold text-sm hover:bg-gray-200 transition-colors">
            Get an Estimate
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-xs rounded-full mb-8 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Emergency Dispatch Available
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Mobile Auto Repair <br/>
              <span className="text-violet-500">That Comes To You</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Skip the shop. Get fast brake service, battery replacement, diagnostics, and basic repairs wherever your vehicle is parked.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#request-service" className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-violet-700 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                Request Mobile Service
              </a>
              <a href="tel:5551234567" className="bg-gray-900 border border-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg text-center flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <PhoneCall className="w-5 h-5 text-gray-400" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {[
                "Mobile service",
                "Same-day availability",
                "Brake & battery help",
                "Clear upfront estimate",
                "Local technician"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-violet-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2874&auto=format&fit=crop" 
              alt="Mechanic working on car" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/80 backdrop-blur-md border border-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800" />)}
                  </div>
                  <div className="flex text-yellow-500">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
                <p className="text-white font-bold text-sm">"Fixed my brakes in my driveway while I was working from home. Incredible service."</p>
                <p className="text-gray-500 text-xs mt-1">— Sarah M. (Verified Customer)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-black border-y border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Towing to a shop wastes your entire day.</h2>
          <p className="text-lg text-gray-400 mb-12">
            Why pay for a tow truck and wait in a dirty lobby for hours? 80% of common car problems can be fixed on the spot. We bring the tools, parts, and expertise directly to your driveway or office parking lot.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <div className="text-red-400 font-bold mb-2">The Old Way</div>
              <p className="text-gray-500 text-sm line-through">Pay $100+ for a tow</p>
              <p className="text-gray-500 text-sm line-through">Wait 3 hours in a lobby</p>
              <p className="text-gray-500 text-sm line-through">Get upsold on repairs</p>
            </div>
            <div className="bg-violet-900/20 p-6 rounded-2xl border border-violet-500/30 sm:col-span-2 text-left flex items-center gap-6">
              <Zap className="w-12 h-12 text-violet-400 hidden sm:block" />
              <div>
                <div className="text-violet-400 font-bold mb-2 text-lg">The BoltFix Way</div>
                <p className="text-white text-sm font-medium mb-1">✓ We drive to your location</p>
                <p className="text-white text-sm font-medium mb-1">✓ You relax inside while we work</p>
                <p className="text-white text-sm font-medium">✓ Upfront flat-rate pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Mobile Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Expert repairs performed safely and cleanly at your location.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Brake Pad Replacement", desc: "Squeaking or grinding? We'll replace pads and rotors on the spot." },
              { icon: Battery, title: "Battery Replacement", desc: "Car won't start? We test and install premium batteries instantly." },
              { icon: Car, title: "Check Engine Diagnostics", desc: "We plug into your car's computer to tell you exactly what's wrong." },
              { icon: Zap, title: "Alternator / Starter", desc: "Full electrical diagnosis and replacement to get you running again." },
              { icon: Wrench, title: "Roadside Repair Support", desc: "Broken down? We handle belts, hoses, and minor roadside fixes." },
              { icon: ShieldCheck, title: "Pre-Purchase Inspection", desc: "Buying a used car? We'll inspect it top-to-bottom before you buy." }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-gray-900/30 border border-gray-800 p-8 rounded-3xl hover:border-violet-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors">
                    <Icon className="w-6 h-6 text-violet-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-black border-y border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">How Mobile Repair Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-900/50 text-violet-400 border border-violet-500/30 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">1</div>
              <h3 className="font-bold text-xl mb-3">Request a Quote</h3>
              <p className="text-gray-400 text-sm">Tell us your car's year, make, model, and symptoms. We'll send a clear upfront estimate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-900/50 text-violet-400 border border-violet-500/30 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">2</div>
              <h3 className="font-bold text-xl mb-3">We Arrive</h3>
              <p className="text-gray-400 text-sm">Our fully equipped van arrives at your home, office, or roadside location.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-900/50 text-violet-400 border border-violet-500/30 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">3</div>
              <h3 className="font-bold text-xl mb-3">You Drive</h3>
              <p className="text-gray-400 text-sm">We complete the repair cleanly and safely. You pay only when the job is done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Trust BoltFix?</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-violet-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">ASE Certified</h4>
                <p className="text-sm text-gray-400">Our technicians hold industry-standard certifications.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-violet-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">12-Month Warranty</h4>
                <p className="text-sm text-gray-400">All parts and labor are backed by our guarantee.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Activity className="w-8 h-8 text-violet-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Clean Service</h4>
                <p className="text-sm text-gray-400">We use spill mats and leave your driveway spotless.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-violet-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">No Upselling</h4>
                <p className="text-sm text-gray-400">You approve every repair and price before we start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area & FAQ Split */}
      <section id="faq" className="py-24 px-6 bg-black border-y border-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-black mb-6">Service Area</h2>
            <p className="text-gray-400 mb-8">We dispatch mechanics across the entire metro region. If you're within 30 miles of downtown, we can reach you.</p>
            <div className="aspect-video bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center flex-col gap-3">
              <MapPin className="w-8 h-8 text-gray-600" />
              <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Interactive Map Placeholder</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-8">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Do you charge a trip fee?", a: "Yes, we charge a flat $50 diagnostic/trip fee to come to your location. This fee is waived if you proceed with the repair." },
                { q: "Can you fix cars on the side of the highway?", a: "For safety reasons, we cannot perform major repairs on busy highway shoulders. We can help with jump starts, or you may need a tow to a safer parking lot." },
                { q: "What if it rains?", a: "Our vans are equipped with heavy-duty pop-up canopies, allowing us to work in light to moderate rain." },
                { q: "Do I need to provide parts?", a: "No, we source and bring all necessary premium parts. If you have your own parts, we can install them but cannot offer a warranty on the part itself." }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-bold flex justify-between items-center"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-4 text-gray-400 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quote Request CTA */}
      <section id="request-service" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-4">Request Mobile Service</h2>
            <p className="text-gray-400">Fill out the form below or call <a href="tel:5551234567" className="text-violet-400 font-bold hover:underline">(555) 123-4567</a> for immediate assistance.</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                <input type="text" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="(555) 123-4567" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Vehicle (Year, Make, Model)</label>
                <input type="text" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="e.g. 2018 Toyota Camry" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Location (City or Zip)</label>
                <input type="text" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Your location" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">What do you need help with?</label>
              <textarea rows={4} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Describe the issue or service needed..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg py-4 rounded-xl transition-colors mt-4 flex items-center justify-center gap-2">
              Send Request <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">We usually respond within 15 minutes during business hours.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-gray-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
          <Wrench className="w-5 h-5" />
          <span className="font-bold text-xl tracking-tight">BoltFix</span>
        </div>
        <p className="text-xs text-gray-600 mb-2">© 2026 BoltFix Mobile Auto Repair. All rights reserved.</p>
        <p className="text-xs text-gray-600">This is a demo landing page designed by Launchbolt.</p>
      </footer>

    </div>
  );
}
