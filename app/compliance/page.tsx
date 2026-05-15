import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale, CreditCard, ShieldCheck } from "lucide-react";

export default function CompliancePage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-16">
            <div className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Compliance & Purchasing</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Transparent, compliant, and ready for federal business.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">

                    {/* Micro-Purchase Definition */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Scale className="h-6 w-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Micro-Purchase Ready</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            As a small business vendor, we specialize in fulfilling **micro-purchases** (orders at or below $10,000) for federal agencies.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start">
                                <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-slate-700"><strong>Competitive bidding not required:</strong> Purchases under the micro-purchase threshold can be awarded without soliciting competitive quotations if the price is considered reasonable.</span>
                            </li>
                            <li className="flex items-start">
                                <CreditCard className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-slate-700"><strong>Government Purchase Card (GPC):</strong> We accept all major government purchase cards (SmartPay®) for streamlined procurement.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Official Pricing Statement - REQUIRED */}
                    <section className="mb-12 bg-slate-50 border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Fair & Reasonable Pricing Statement</h3>
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700 text-lg">
                            “Pricing reflects OEM products, delivery, and administrative handling and is considered fair and reasonable under federal micro-purchase guidelines.”
                        </blockquote>
                    </section>

                    {/* Delivery & Service Area */}
                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Delivery & Service</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We are based in the Houston / Deer Park, TX area. We offer expedited delivery (24–48 hours) for local federal offices. Shipping to other regions is available upon request with standard carrier rates.
                        </p>
                    </section>

                    <div className="text-center pt-8 border-t border-slate-100">
                        <p className="text-slate-500 mb-4">Have questions about a specific procurement requirement?</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild>
                                <Link href="/contact">Contact Support</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/quote">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
