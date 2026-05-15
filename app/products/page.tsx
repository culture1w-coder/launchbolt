import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen pb-16">
            <div className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Products & Capabilities</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Comprehensive office supply solutions tailored for federal micro-purchases.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* OEM Toner Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">OEM Toner Cartridges</h2>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-200">
                            Primary Focus
                        </span>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-md">
                        <div className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-bold text-amber-800">Compliance Notice</h3>
                                <p className="text-sm text-amber-700 mt-1">
                                    All toner listed is OEM (Original Equipment Manufacturer) original. We do not substitute with compatibles or remanufactured cartridges without explicit written approval from the contracting officer or purchase card holder.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['HP Original Toner (CF Series)', 'Brother Genuine Toner', 'Lexmark Corporate Cartridges', 'Canon Genuine Supplies', 'Dell OEM Toner', 'Xerox Genuine Supplies'].map((item) => (
                            <div key={item} className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-semibold text-slate-900">{item}</h3>
                                    <Check className="h-5 w-5 text-green-500" />
                                </div>
                                <p className="text-sm text-slate-500 mt-2">Available for immediate quote</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Office Supplies Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">General Office Supplies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Paper & Media</h3>
                            <ul className="space-y-2">
                                {['Copy Paper (8.5x11, 8.5x14, 11x17)', 'Cardstock & Specialty Paper', 'Envelopes (All Sizes)', 'Labels & Tags'].map(item => (
                                    <li key={item} className="flex items-center text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Admin Essentials</h3>
                            <ul className="space-y-2">
                                {['Pens, Pencils & Markers', 'Folders, Binders & Organizers', 'Staplers & Hole Punches', 'Tape, Glue & Adhesives'].map(item => (
                                    <li key={item} className="flex items-center text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6 font-medium">Need a specific item or bulk quote?</p>
                    <Button asChild size="lg">
                        <Link href="/quote">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
