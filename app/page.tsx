import React from "react";
import { Zap, Target, Smartphone, TrendingUp, Clock, Globe, Code2, Rocket, CheckCircle2, MessageCircle } from "lucide-react";

export default function CrisisLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-violet-600 selection:text-white pb-20 -mt-24 pt-24">
      
      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        
        {/* Header / Brand */}
        <div className="flex items-center gap-2 mb-12">
          <Zap className="w-5 h-5 text-violet-500 fill-violet-500" />
          <span className="font-bold tracking-widest text-sm text-gray-300 uppercase">Crisis Landing Pages</span>
        </div>

        {/* Hero Area */}
        <div className="grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1.2fr,1fr] gap-12 lg:gap-8 items-start mb-24">
          
          {/* Left Column: Copy & List */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black leading-[0.95] tracking-tight mb-8">
              ONE PAGE.<br />
              <span className="text-violet-500">24 HOURS.</span><br />
              MORE CUSTOMERS.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-xl">
              High-converting, mobile-responsive landing pages built in 24 hours for urgent businesses that need <span className="text-violet-400 font-medium">results—fast</span>.
            </p>

            <div className="mb-8">
              <h3 className="text-violet-500 font-bold uppercase tracking-widest text-lg mb-6">
                The Single Crisis Landing Page
              </h3>
              
              <ul className="space-y-5">
                {[
                  { icon: Target, text: "1 Scroll. 1 Goal. More Customers." },
                  { icon: Smartphone, text: "Mobile Responsive" },
                  { icon: TrendingUp, text: "High-Converting Structure" },
                  { icon: Clock, text: "Fast 24h Delivery" },
                  { icon: Globe, text: "Live on Your Domain" },
                  { icon: Code2, text: "Delivered as Live URL + GitHub Repo" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl text-gray-200">
                    <div className="w-8 flex justify-center">
                       <item.icon className="w-6 h-6 text-violet-500 flex-shrink-0" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Floating Badge & Mockups */}
          <div className="relative flex flex-col items-end">
            
            {/* Floating Badge */}
            <div className="mb-12 w-full max-w-sm border border-violet-500/30 bg-violet-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden self-end lg:-mt-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/20 blur-xl"></div>
              <div className="flex items-start gap-4">
                <div className="bg-violet-600 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 border-4 border-black shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-2">DELIVERED <br/>IN 24 HOURS</h3>
                  <p className="text-sm text-gray-400 leading-tight">
                    *Same-day (12h) available<br/>with urgent fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockups Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              {/* Laptop Mockup */}
              <div className="absolute right-0 bottom-0 w-[90%] md:w-[80%] rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl bg-black">
                {/* Browser Top Bar */}
                <div className="h-6 bg-gray-900 border-b border-gray-800 flex items-center px-2 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                {/* Screen Content */}
                <div className="relative aspect-[16/10]">
                   <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop" 
                      alt="Website Mockup" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                   />
                   <div className="absolute inset-0 p-8 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold mb-2">We Solve Your <br/><span className="text-violet-400">Biggest Problem</span></h2>
                      <p className="text-xs text-gray-300 mb-4 max-w-[200px]">A short, powerful statement that shows how you help and why it matters.</p>
                      <button className="bg-violet-600 text-white text-xs py-2 px-4 rounded w-fit mb-6">Get My Free Quote</button>
                      <div className="flex gap-1 text-[8px]">
                        Trusted by businesses like yours
                      </div>
                   </div>
                   <div className="absolute bottom-0 w-full h-4 bg-gradient-to-b from-gray-300 to-gray-400 border-t border-gray-500 rounded-b-xl flex justify-center items-center">
                      <div className="w-12 h-1 bg-gray-500 rounded-full"></div>
                   </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="absolute left-0 bottom-10 w-[35%] rounded-[2rem] border-4 border-gray-800 bg-black shadow-2xl overflow-hidden shadow-black/50 z-10">
                <div className="absolute top-0 w-full h-4 flex justify-center">
                  <div className="w-1/3 h-full bg-gray-800 rounded-b-xl"></div>
                </div>
                <div className="relative aspect-[9/19] bg-gray-950 overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                      alt="Mobile Website Mockup" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                   />
                   <div className="relative z-10 p-4 pt-8">
                     <h2 className="text-sm font-bold mb-1 mt-2">We Solve Your <br/><span className="text-violet-400">Biggest Problem</span></h2>
                     <p className="text-[8px] text-gray-300 mb-3">A short, powerful statement that shows how you help and why it matters.</p>
                     <button className="bg-violet-600 text-white text-[8px] py-1.5 px-3 rounded w-fit mb-3">Get My Free Quote</button>
                     <div className="text-[6px] text-gray-400">Trusted by businesses</div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-violet-900 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-violet-500">What You Get</h2>
          <div className="h-px bg-violet-900 flex-1"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-24">
          <div className="flex flex-col items-center">
            <Zap className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">SPEED</h3>
            <p className="text-sm text-gray-400">Delivered in 24 hours (or 12h with urgent fee).</p>
          </div>
          <div className="flex flex-col items-center">
            <Target className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">FOCUS</h3>
            <p className="text-sm text-gray-400">One high-converting page built for your specific offer.</p>
          </div>
          <div className="flex flex-col items-center">
            <Rocket className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">RESULTS</h3>
            <p className="text-sm text-gray-400">Designed to get leads, bookings, and sales.</p>
          </div>
          <div className="flex flex-col items-center">
            <Code2 className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">OWNERSHIP</h3>
            <p className="text-sm text-gray-400">You own the code. Full GitHub repo included.</p>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <CheckCircle2 className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">NO HASSLE</h3>
            <p className="text-sm text-gray-400">Fixed scope. No calls. No endless revisions.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-violet-900 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-violet-500">Pricing</h2>
          <div className="h-px bg-violet-900 flex-1"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          
          {/* Card 1 */}
          <div className="bg-black border border-violet-500/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="text-violet-400 font-bold tracking-widest text-sm mb-4">CRISIS PAGE</div>
            <div className="text-5xl font-black mb-2">$750</div>
            <div className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-8">24H DELIVERY</div>
            
            <ul className="space-y-4 mb-8">
              {[
                "1 Single Scroll Landing Page",
                "Headline + Body Copy",
                "1 CTA Block",
                "Mobile Responsive",
                "Deployed to Vercel/Netlify or Your Domain",
                "Live URL + GitHub Repo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://buy.stripe.com/eVq5kF0K6aNjbYQcZf48001" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl font-bold text-center bg-white text-black hover:bg-gray-200 transition-colors mt-auto">
              Pay $750
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-black border-2 border-violet-500 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-2xl"></div>
            <div className="text-violet-400 font-bold tracking-widest text-sm mb-4">CRISIS PAGE + FORM</div>
            <div className="text-5xl font-black mb-2">$1,000</div>
            <div className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">24H DELIVERY</div>
            
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border border-gray-800 rounded px-2 py-1 w-fit bg-gray-900/50">
              Includes everything in Crisis Page +
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Email Capture Form (Typeform or Custom)",
                "Lead Notifications to Email"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://buy.stripe.com/5kQ28tfF04oV4wo5wN48000" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl font-bold text-center bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] mt-auto">
              Pay $1,000
            </a>
          </div>

          {/* Card 3 (Urgent) */}
          <div className="bg-black border border-gray-800 rounded-3xl relative overflow-hidden">
            <div className="bg-amber-400 text-black text-center font-bold py-3 text-sm uppercase tracking-widest">
              Need It Faster?
            </div>
            <div className="p-8 text-center flex flex-col items-center">
              <div className="text-amber-400 font-bold tracking-widest text-sm mb-4">URGENT FEE</div>
              <div className="text-5xl font-black mb-2">+$300</div>
              <div className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-8">12H DELIVERY</div>
              
              <p className="text-gray-400 text-sm mb-8 max-w-[200px]">
                Upgrade any package to same-day delivery.
              </p>

              <Zap className="w-12 h-12 text-amber-400 fill-amber-400 mb-8" />
              
              <a href="https://buy.stripe.com/28EeVfboK3kR7IAaR748002" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl font-bold text-center bg-amber-400 text-black hover:bg-amber-500 transition-colors mt-auto">
                Add Urgent Delivery
              </a>
            </div>
          </div>

        </div>

        {/* AI Launch Add-Ons Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-violet-900 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-violet-500 text-center">AI Launch Add-Ons</h2>
          <div className="h-px bg-violet-900 flex-1"></div>
        </div>

        <div className="text-center mb-16">
          <p className="text-gray-400 md:text-lg">Optional upgrades that help your page convert, capture, and promote faster.</p>
        </div>

        {/* Add-Ons Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          
          {/* Add-On 1 */}
          <div className="bg-black border border-violet-500/30 rounded-3xl p-8 relative flex flex-col shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="text-violet-400 font-bold tracking-widest text-sm mb-4 uppercase">Copy Boost</div>
            <div className="text-4xl font-black mb-4">+$200</div>
            <p className="text-sm text-gray-300 mb-6">Stronger AI-assisted headline, offer copy, CTA, FAQ, and trust section so your page communicates faster and feels sharper.</p>
            
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border border-gray-800 rounded px-2 py-1 w-fit bg-gray-900/50">Includes</div>
            <ul className="space-y-3 mb-8">
              {["Headline rewrite", "Offer positioning", "CTA copy", "FAQ copy", "Trust/authority section copy"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-8 border-t border-gray-800/50">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">Best For</div>
              <p className="text-xs text-gray-500 mb-6">Businesses with rough intake answers or weak messaging.</p>
              
              <a href="https://buy.stripe.com/cNifZj8cycVrbYQ3oF48003" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl font-bold text-sm text-center bg-violet-600/10 text-violet-400 hover:bg-violet-600 hover:text-white border border-violet-500/30 hover:border-violet-600 transition-colors">
                Add Copy Boost
              </a>
            </div>
          </div>

          {/* Add-On 2 */}
          <div className="bg-black border border-violet-500/30 rounded-3xl p-8 relative flex flex-col shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="text-violet-400 font-bold tracking-widest text-sm mb-4 uppercase">Lead Capture Automation</div>
            <div className="text-4xl font-black mb-4">+$500</div>
            <p className="text-sm text-gray-300 mb-6">Turn your landing page into a simple lead machine. I connect your form so new leads go to your inbox, get logged, and receive an instant auto-reply.</p>
            
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border border-gray-800 rounded px-2 py-1 w-fit bg-gray-900/50">Includes</div>
            <ul className="space-y-3 mb-8">
              {["Lead/contact form setup", "Inbox notification", "Google Sheet lead log", "Auto-reply message", "Test submission before delivery"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-8 border-t border-gray-800/50">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">Best For</div>
              <p className="text-xs text-gray-500 mb-6">Quote requests, bookings, applications, and service inquiries.</p>
              
              <a href="https://buy.stripe.com/7sY8wR0K69Jf5AscZf48005" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl font-bold text-sm text-center bg-violet-600/10 text-violet-400 hover:bg-violet-600 hover:text-white border border-violet-500/30 hover:border-violet-600 transition-colors">
                Add Lead Capture
              </a>
            </div>
          </div>

          {/* Add-On 3 */}
          <div className="bg-black border border-violet-500/30 rounded-3xl p-8 relative flex flex-col shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="text-violet-400 font-bold tracking-widest text-sm mb-4 uppercase">Social Launch Pack</div>
            <div className="text-4xl font-black mb-4">+$300</div>
            <p className="text-sm text-gray-300 mb-6">Get ready-to-post content that helps you announce and promote your new page without writing from scratch.</p>
            
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border border-gray-800 rounded px-2 py-1 w-fit bg-gray-900/50">Includes</div>
            <ul className="space-y-3 mb-8">
              {["10 social post captions", "5 short hooks", "3 CTA variations", "Platform-ready copy for Instagram, Facebook, LinkedIn, X", "Launch announcement message"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-8 border-t border-gray-800/50">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">Best For</div>
              <p className="text-xs text-gray-500 mb-6">Creators, service businesses, events, offers, and product drops.</p>
              
              <a href="https://buy.stripe.com/bJe28t2Se1cJd2U7EV48004" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl font-bold text-sm text-center bg-violet-600/10 text-violet-400 hover:bg-violet-600 hover:text-white border border-violet-500/30 hover:border-violet-600 transition-colors">
                Add Social Pack
              </a>
            </div>
          </div>

        </div>

        <div className="text-center text-xs text-gray-500 mb-24 max-w-2xl mx-auto">
          Add-ons are optional and must be selected before the build starts. No post-delivery scope changes are included.
        </div>

        {/* Footer Area */}
        <div className="flex flex-col md:flex-row items-center justify-between border border-violet-500/20 bg-violet-950/20 rounded-3xl p-8 mb-16 gap-8">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
               <Rocket className="w-8 h-8 text-violet-500" />
               <h3 className="font-bold text-xl text-violet-400 uppercase tracking-widest">Perfect For:</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
              {[
                "Launches", "Local Businesses", "Paid Ads",
                "Offers", "Event Promotions", "Lead Generation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-1_kwjgp6cKjvtEkC_cCbgo-I_H_bgs9HmObUMylxdykiWg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 transition-colors text-black rounded-full p-2 pr-6 flex items-center gap-4 cursor-pointer group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               <div className="bg-violet-600 w-12 h-12 rounded-full flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
               </div>
               <div className="flex flex-col">
                 <span className="font-black text-lg md:text-xl leading-none">GET YOUR PAGE STARTED</span>
                 <span className="text-violet-600 font-bold text-xs tracking-wider">SECURE INTAKE FORM</span>
               </div>
            </a>
          </div>

        </div>

        {/* Very Bottom Bar */}
        <div className="text-center pb-8 border-t border-gray-800 pt-8">
          <p className="font-bold tracking-widest text-sm md:text-base text-gray-400 flex items-center justify-center gap-4 flex-wrap">
            <span>ONE PAGE. 24 HOURS. MORE CUSTOMERS.</span>
            <Zap className="w-4 h-4 text-violet-500 fill-violet-500" />
            <span className="text-white">LET&apos;S GET YOU LIVE.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
