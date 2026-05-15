"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, BookOpen, Video, User, Star, ArrowRight, 
  Clock, Target, Rocket, Download, ChevronDown, 
  Zap, PlayCircle, Lock, MonitorPlay, MessageCircle,
  FileText
} from "lucide-react";

export default function CreatorOfferDemo() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-fuchsia-500/30">
      
      {/* Floating Demo Badge */}
      <div className="fixed top-4 right-4 z-50 bg-fuchsia-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-fuchsia-400">
        Demo Example
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-900 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="font-black text-xl tracking-tight leading-none text-white">SkillSprint</div>
              <div className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest">Academy</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#instructor" className="hover:text-white transition-colors">Instructor</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#join-workshop" className="hidden sm:flex bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Join the Workshop
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-fuchsia-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-bold text-xs rounded-full mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            Next Cohort Starts Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            Learn A Practical Skill <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
              In 14 Days
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            A focused online workshop for beginners who want structure, accountability, and a real project finished by the end.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#join-workshop" className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:from-fuchsia-500 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:scale-105">
              Join the 14-Day Workshop
            </a>
            <a href="#curriculum" className="w-full sm:w-auto bg-gray-900 border border-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-gray-400" />
              View Curriculum
            </a>
          </div>

          {/* Hero Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-gray-800/50 pt-8">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              ].map((src, i) => (
                <img key={i} src={src} alt="Student" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 text-sm mb-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-xs text-gray-400 font-medium tracking-wide">Rated 4.9/5 by 500+ students</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Stop watching random tutorials.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            You've spent hours jumping from one YouTube video to another, but you still feel like you haven't actually <span className="text-white font-bold border-b border-fuchsia-500">built</span> anything real.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-red-950/20 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h3 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" /> Tutorial Hell
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-gray-400"><CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0" /> Learning random, disconnected concepts</li>
                <li className="flex gap-2 text-gray-400"><CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0" /> Zero accountability to finish</li>
                <li className="flex gap-2 text-gray-400"><CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0" /> No end project to show for your time</li>
              </ul>
            </div>

            <div className="bg-fuchsia-900/10 border border-fuchsia-500/30 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.05)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-purple-600"></div>
              <h3 className="text-fuchsia-400 font-bold text-xl mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" /> The SkillSprint Way
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" /> A guided, step-by-step 14 day plan</li>
                <li className="flex gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" /> Build a real, portfolio-ready project</li>
                <li className="flex gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" /> Get unstuck with our private community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Is This Workshop For You?</h2>
            <p className="text-gray-400">If any of these sound familiar, you're in the right place.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Beginner", desc: "You need a clear, structured path from zero to one." },
              { title: "The Creator", desc: "You want to add a new practical skill to your creative arsenal." },
              { title: "The Professional", desc: "You want to upskill quickly without going back to school." },
              { title: "The Frustrated Learner", desc: "You're tired of scattered, outdated online tutorials." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-fuchsia-500/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="text-fuchsia-400 font-bold text-sm tracking-widest uppercase mb-4">The End Goal</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">What You'll Build</h2>
              <p className="text-gray-400 mb-8 text-lg">
                By Day 14, you won't just have theoretical knowledge. You will have a fully functioning, polished project that you built with your own hands.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500" /> Real-world application</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500" /> Portfolio-ready design</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-fuchsia-500" /> Complete source files included</li>
              </ul>
              <a href="#join-workshop" className="text-fuchsia-400 font-bold hover:text-fuchsia-300 flex items-center gap-2 group w-fit">
                Start Building Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="bg-black border-l border-gray-800 relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-900/20 to-transparent"></div>
              <div className="w-full aspect-video bg-gray-900 border border-gray-700 rounded-xl shadow-2xl relative z-10 flex flex-col overflow-hidden">
                <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="h-6 w-1/3 bg-gray-700 rounded-md"></div>
                  <div className="h-32 w-full bg-fuchsia-900/20 border border-fuchsia-500/20 rounded-lg"></div>
                  <div className="flex gap-4">
                    <div className="h-10 w-24 bg-gray-700 rounded-md"></div>
                    <div className="h-10 w-24 bg-fuchsia-600/50 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 px-6 bg-black border-y border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">The 14-Day Blueprint</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A no-fluff, step-by-step curriculum designed to get you from zero to finished project in two weeks.</p>
          </div>

          <div className="space-y-6">
            {[
              { phase: "Phase 1: The Foundation (Days 1-4)", title: "Setting up your environment & basics", desc: "We skip the boring theory and jump straight into setting up your workspace and understanding the core concepts you actually need to know." },
              { phase: "Phase 2: Building Blocks (Days 5-9)", title: "Creating the core structure", desc: "You'll start building the actual project. We cover layout, logic, and connecting the main pieces together step-by-step." },
              { phase: "Phase 3: Polish & Launch (Days 10-14)", title: "Refining and publishing your project", desc: "We add the final touches, fix edge cases, and show you exactly how to publish your finished project to the world." }
            ].map((module, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden group hover:border-gray-700 transition-colors">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-800 group-hover:bg-fuchsia-500 transition-colors"></div>
                <div className="pl-4">
                  <span className="text-fuchsia-400 font-bold text-sm tracking-widest uppercase mb-2 block">{module.phase}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">{module.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Everything You Get</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MonitorPlay, title: "Project-Based Lessons", desc: "Short, actionable HD video lessons." },
              { icon: BookOpen, title: "14-Day Guided Plan", desc: "A day-by-day checklist so you never get lost." },
              { icon: FileText, title: "Source Files", desc: "Downloadable templates and cheat sheets." },
              { icon: MessageCircle, title: "Private Resource Hub", desc: "Access to community Q&A and updates." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800 flex-shrink-0 relative">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop" 
              alt="Instructor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-fuchsia-500/50 rounded-full"></div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-fuchsia-400 font-bold text-sm tracking-widest uppercase mb-2">Your Instructor</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Meet Alex</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Hey, I'm Alex. After spending years learning the hard way, I realized most courses teach you *too much* theory and not enough execution.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I built SkillSprint to give you the exact roadmap I wish I had—focused, practical, and designed to get you results in just 14 days.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="text-center px-4 border-r border-gray-800">
                <div className="font-black text-2xl text-white">50k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Followers</div>
              </div>
              <div className="text-center px-4">
                <div className="font-black text-2xl text-white">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this really for absolute beginners?", a: "Yes. We start from absolute scratch. No prior experience is required, and we explain every concept clearly without jargon." },
              { q: "What if I fall behind the 14-day schedule?", a: "You get lifetime access to the materials. The 14-day schedule is designed to keep you accountable, but you can go at your own pace if life gets busy." },
              { q: "Do I need to buy expensive software?", a: "No. Everything we use in this workshop is either free or has a generous free tier perfect for learning." },
              { q: "Is there a refund policy?", a: "Yes, we offer a 14-day money-back guarantee. If you do the work and don't feel like you've learned anything, we'll refund you." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left font-bold flex justify-between items-center text-lg"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-fuchsia-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join-workshop" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-fuchsia-900/10 blur-[100px] rounded-t-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to stop watching and start building?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of students who have already transformed their skills in just two weeks.
          </p>
          
          <div className="bg-black border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-8 max-w-2xl mx-auto text-left">
            <div>
              <div className="text-fuchsia-400 font-bold mb-2">14-Day Workshop Access</div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black">$149</span>
                <span className="text-gray-500 line-through mb-1">$299</span>
              </div>
              <p className="text-sm text-gray-400">One-time payment. Lifetime access.</p>
            </div>
            
            <button className="w-full md:w-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-fuchsia-500 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:scale-105 flex items-center justify-center gap-2">
              <Lock className="w-5 h-5" />
              Enroll Now
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600" /> Secure Checkout</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600" /> 14-Day Guarantee</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-600" /> Instant Access</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-12 px-6 border-t border-gray-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
          <Zap className="w-5 h-5 text-fuchsia-500" />
          <span className="font-bold text-xl tracking-tight text-white">SkillSprint</span>
        </div>
        <p className="text-xs text-gray-600 mb-2">© 2026 SkillSprint Academy. All rights reserved.</p>
        <p className="text-xs text-gray-600">This is a demo course landing page designed by Launchbolt.</p>
      </footer>

    </div>
  );
}
