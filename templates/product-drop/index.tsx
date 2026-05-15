"use client";

import React from "react";
import { Star, Truck, RefreshCcw, Lock, CheckCircle2, ChevronDown } from "lucide-react";
import { productConfig } from "./config";

const IconMap: Record<string, React.ElementType> = {
  Truck,
  RefreshCcw,
  Lock,
};

export default function ProductDropTemplate() {
  const { theme, copy } = productConfig;
  const [activeImage, setActiveImage] = React.useState(0);
  
  // Placeholder images
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop", // main
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop", // detail
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2940&auto=format&fit=crop", // lifestyle
  ];

  return (
    <div className={`min-h-screen bg-${theme.background} text-${theme.text} font-sans selection:bg-${theme.primary} selection:text-white`}>
      
      {/* Announcement Bar */}
      <div className={`bg-${theme.primary} text-white text-center py-2 text-sm font-bold tracking-wide`}>
        {copy.announcementBar}
      </div>

      {/* Navbar */}
      <nav className="py-6 px-4 md:px-8 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-black text-2xl tracking-widest uppercase">{copy.nav.brand}</span>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative">
              <img src={images[activeImage]} alt={copy.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? `border-${theme.primary}` : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Buy Box */}
          <div className="flex flex-col pt-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-bold">{copy.product.rating}</span>
              <span className={`text-sm text-${theme.textMuted} underline cursor-pointer`}>({copy.product.reviewCount} reviews)</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">{copy.product.name}</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-black">{copy.product.price}</span>
              <span className={`text-lg text-${theme.textMuted} line-through mb-1`}>{copy.product.originalPrice}</span>
              <span className={`bg-${theme.primary}/10 text-${theme.primary} px-2 py-1 rounded text-xs font-bold mb-1`}>
                Save {(
                  (parseFloat(copy.product.originalPrice.replace('$', '')) - parseFloat(copy.product.price.replace('$', ''))) / 
                  parseFloat(copy.product.originalPrice.replace('$', '')) * 100
                ).toFixed(0)}%
              </span>
            </div>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              {copy.product.description}
            </p>

            <ul className="space-y-3 mb-8">
              {copy.product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                  <CheckCircle2 className={`w-5 h-5 text-${theme.primary}`} />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-red-600 font-bold text-sm">
                 <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                 {copy.product.scarcityText}
              </div>
              <div className="w-full bg-red-200 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full w-[8.4%]" />
              </div>
            </div>

            <button className={`w-full bg-${theme.primary} hover:bg-${theme.primaryHover} text-white py-5 rounded-xl font-black text-xl mb-4 transition-all shadow-lg shadow-${theme.primary}/30 flex justify-center items-center gap-2 hover:-translate-y-1`}>
              {copy.product.cta}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-6 border-t border-zinc-200">
              {copy.trust.items.map((item, i) => {
                const Icon = IconMap[item.icon] || Lock;
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <Icon className="w-6 h-6 text-zinc-400 mb-2" />
                    <span className="text-xs font-bold text-zinc-800">{item.title}</span>
                    <span className="text-[10px] text-zinc-500 mt-0.5">{item.description}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Details/Specs */}
      <section className="bg-zinc-50 py-16 px-4 md:px-8 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">{copy.details.headline}</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
            {copy.details.specs.map((spec, i) => (
              <div key={i} className={`flex p-4 ${i !== copy.details.specs.length - 1 ? 'border-b border-zinc-200' : ''}`}>
                <div className="w-1/3 font-bold text-zinc-800">{spec.label}</div>
                <div className="w-2/3 text-zinc-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
             <h2 className="text-3xl font-bold">{copy.reviews.headline}</h2>
             <div className="text-right">
                <div className="flex text-yellow-400 justify-end mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-sm font-bold">{copy.product.rating} out of 5</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {copy.reviews.items.map((review, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 bg-white">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                <p className="text-zinc-600 mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold flex items-center gap-1">
                    {review.author} <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </span>
                  <span className="text-zinc-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{copy.faq.headline}</h2>
          <div className="space-y-4">
            {copy.faq.items.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-zinc-200">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="text-zinc-600 px-6 pb-6 pt-0">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-zinc-200 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-black tracking-widest uppercase mb-6">{copy.nav.brand}</p>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            {copy.footer.links.map((link, i) => (
              <a key={i} href="#" className="text-sm text-zinc-500 hover:text-zinc-900">{link}</a>
            ))}
          </div>
          <p className="text-xs text-zinc-400">{copy.footer.copyright}</p>
        </div>
      </footer>

    </div>
  );
}
