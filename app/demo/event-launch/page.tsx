"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, MapPin, Calendar, Clock, Ticket, 
  Utensils, Music, ShoppingBag, Store, Users, 
  ArrowRight, Sparkles, ChevronDown, Flame
} from "lucide-react";

export default function EventLaunchDemo() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-pink-500/30">
      
      {/* Floating Demo Badge */}
      <div className="fixed top-4 right-4 z-50 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] border border-pink-400">
        Demo Example
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-900 bg-[#050505]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Flame className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="font-black text-xl tracking-tight leading-none text-white">Momentum</div>
              <div className="text-[10px] text-pink-400 font-bold uppercase tracking-widest">Night Market</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-gray-300 uppercase tracking-wider">
            <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#vendor-application" className="hover:text-pink-400 transition-colors">Vendors</a>
          </div>
          <a href="#rsvp" className="bg-white text-black px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            RSVP Free
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-pink-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold text-xs rounded-full mb-8 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Saturday, July 20 • Downtown Market Hall
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            One Night. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Local Brands.
            </span> <br />
            Real Energy.
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Join a high-energy night market featuring food, music, creators, and local businesses in one easy-to-find event.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#rsvp" className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-violet-600 text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-wider text-center hover:from-pink-500 hover:to-violet-500 transition-all shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:scale-105 flex items-center justify-center gap-3">
              <Ticket className="w-6 h-6" />
              Reserve Free Ticket
            </a>
            <a href="#vendor-application" className="w-full sm:w-auto bg-gray-900 border border-gray-800 text-white px-10 py-5 rounded-full font-black text-lg uppercase tracking-wider text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              Apply As Vendor
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-y border-gray-900 py-8">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-pink-500" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Date</div>
                <div className="font-bold text-lg">Sat, July 20</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-violet-500" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Time</div>
                <div className="font-bold text-lg">6 PM - 10 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-indigo-500" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Location</div>
                <div className="font-bold text-lg">Downtown Market Hall</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-24 px-6 bg-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Why You Need To Be Here</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Store, title: "Local Brands", desc: "Discover exclusive drops" },
              { icon: Utensils, title: "Food Vendors", desc: "Taste the best local bites" },
              { icon: Sparkles, title: "Meet Creators", desc: "Connect with the community" },
              { icon: ShoppingBag, title: "Shop Small", desc: "Support local business" },
              { icon: Users, title: "Bring Friends", desc: "All ages welcome" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl text-center hover:border-pink-500/30 transition-colors group">
                <div className="w-14 h-14 bg-black border border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/10 transition-colors">
                  <item.icon className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-black text-lg mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section id="experiences" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Featured Experiences</h2>
              <p className="text-xl text-gray-400">Over 40+ vendors, live DJ sets, and interactive installations.</p>
            </div>
            <a href="#vendor-application" className="text-pink-400 font-bold uppercase tracking-wider hover:text-pink-300 flex items-center gap-2">
              See All Vendors <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" alt="Food Vendor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">Street Food Alley</h3>
                <p className="text-gray-300 font-medium">10+ curated local food pop-ups serving exclusive event menus.</p>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" alt="Clothing Brand" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">Creator Market</h3>
                <p className="text-gray-300 font-medium">Vintage clothing, handmade jewelry, and local streetwear brands.</p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" alt="DJ playing music" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">Live DJ Sets</h3>
                <p className="text-gray-300 font-medium">Music curated by local DJs setting the vibe from 6 PM to close.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Callout */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-pink-900/40 to-violet-900/40 border border-pink-500/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-violet-500"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Are You A Local Vendor?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are currently accepting applications for food, clothing, art, and lifestyle brands. Tap into our audience of 2,000+ expected attendees.
          </p>
          <a href="#vendor-application" className="inline-block bg-white text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Submit Application
          </a>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 px-6 bg-black border-y border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">The Schedule</h2>
          </div>

          <div className="relative border-l border-gray-800 ml-4 md:ml-8 space-y-12 pb-8">
            {[
              { time: "4:00 PM", title: "Vendor Load-in", desc: "Early access for vendors to set up their booths." },
              { time: "6:00 PM", title: "Doors Open", desc: "Market officially opens to the public. Food vendors and DJ start." },
              { time: "8:00 PM", title: "Peak Energy", desc: "Main crowd arrives. Special guest DJ performance begins." },
              { time: "10:00 PM", title: "Market Closes", desc: "Last call for food and shopping. Vendor load-out begins." }
            ].map((event, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
                <div className="text-pink-400 font-black text-xl mb-1 tracking-wider">{event.time}</div>
                <h3 className="text-2xl font-bold mb-2 uppercase">{event.title}</h3>
                <p className="text-gray-400 font-medium">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & FAQ Split */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Getting There</h2>
            <div className="flex items-center gap-4 mb-8 text-gray-300 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <MapPin className="w-8 h-8 text-pink-500 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg text-white">Downtown Market Hall</div>
                <div>123 Commerce St, Metro City, 90210</div>
              </div>
            </div>
            <div className="aspect-square md:aspect-video bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center flex-col gap-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black opacity-50"></div>
              <MapPin className="w-12 h-12 text-gray-600 relative z-10" />
              <span className="text-gray-500 text-sm font-black uppercase tracking-widest relative z-10">Google Maps Integration</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Need To Know</h2>
            <div className="space-y-4">
              {[
                { q: "Is the event free to attend?", a: "Yes! Entrance is 100% free. Just RSVP so we can keep track of capacity." },
                { q: "Is there parking available?", a: "Yes, there is a paid parking garage directly across the street, as well as ample street parking in the surrounding blocks." },
                { q: "Are dogs allowed?", a: "Yes, well-behaved, leashed dogs are welcome in all outdoor and semi-indoor market areas." },
                { q: "Will there be alcohol?", a: "There will be a designated 21+ beer garden area. ID is required for entry to that section." }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                  <button 
                    className="w-full px-8 py-6 text-left font-bold flex justify-between items-center text-lg uppercase tracking-wide"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown className={`w-6 h-6 text-pink-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-8 pb-6 text-gray-400 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Final Dual CTA Section */}
      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Shopper RSVP */}
          <div id="rsvp" className="bg-gray-900 border border-gray-800 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-pink-500"></div>
            <Ticket className="w-12 h-12 text-pink-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">I Want To Attend</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto font-medium">Reserve your free ticket now to skip the line at the door.</p>
            
            <form className="space-y-4 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 font-medium" />
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 font-medium" />
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white px-8 py-5 rounded-xl font-black text-lg uppercase tracking-wider transition-colors mt-2">
                Get Free Ticket
              </button>
            </form>
          </div>

          {/* Vendor Application */}
          <div id="vendor-application" className="bg-gray-900 border border-gray-800 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-violet-500"></div>
            <Store className="w-12 h-12 text-violet-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">I Want To Sell</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto font-medium">Apply for a 10x10 booth space. Spots are extremely limited.</p>
            
            <form className="space-y-4 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Brand Name" className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 font-medium" />
              <input type="text" placeholder="Instagram Handle" className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 font-medium" />
              <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white px-8 py-5 rounded-xl font-black text-lg uppercase tracking-wider transition-colors mt-2">
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-16 px-6 text-center border-t border-gray-900">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-40">
          <Flame className="w-6 h-6 text-pink-500" />
          <span className="font-black text-2xl tracking-tighter text-white uppercase">Momentum</span>
        </div>
        <p className="text-sm font-bold text-gray-600 mb-2 uppercase tracking-widest">© 2026 Momentum Night Market.</p>
        <p className="text-xs font-bold text-gray-700 uppercase tracking-widest">This is a demo event page designed by Launchbolt.</p>
      </footer>

    </div>
  );
}
