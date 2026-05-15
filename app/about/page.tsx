import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-slate-50 border-b border-slate-200 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">About Us</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A dedicated small business partner for federal agencies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="prose prose-slate lg:prose-lg mx-auto">
                        <p className="lead text-xl text-slate-700">
                            We are a local Texas-based small business focused exclusively on serving the needs of federal customers. Unlike big-box retailers, we understand the specific compliance, documentation, and reliability requirements of government procurement.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h3>
                        <p className="text-slate-600">
                            To provide federal offices with high-quality OEM supplies and toner with speed, accuracy, and full compliance documentation. We aim to be the most reliable micro-purchase vendor in the Greater Houston area.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us?</h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Reliability:</strong> We track every order from quote to delivery.</li>
                            <li><strong>Accuracy:</strong> We double-check part numbers to ensure you get exactly what you need.</li>
                            <li><strong>Compliance:</strong> We are SAM registered and understand FAR guidelines for micro-purchases.</li>
                            <li><strong>Local:</strong> Based in Deer Park, TX, supporting the local economy.</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-xl text-center mt-12">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to work with us?</h3>
                        <p className="text-blue-700 mb-6">Get a quote for your next supply order today.</p>
                        <Button asChild size="lg">
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
