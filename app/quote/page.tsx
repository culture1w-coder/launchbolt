"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, Send } from "lucide-react"

export default function QuotePage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received</h2>
                    <p className="text-slate-600 mb-6">
                        We respond to micro-purchase quote requests within one business day (often within hours).
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Submit Another Request
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-slate-200">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Request a Quote</h1>
                        <p className="text-slate-500">
                            Get a fast, compliant quote for your federal office needs.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" required placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="agency">Agency / Office</Label>
                                <Input id="agency" required placeholder="Dept of Veteran Affairs" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" required placeholder="john.doe@va.gov" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="item">Item Requested</Label>
                            <Input id="item" required placeholder="HP 58A Black Toner Cartridge (CF258A)" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input id="quantity" type="number" min="1" required placeholder="5" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="oem">OEM Required?</Label>
                                <select
                                    id="oem"
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    defaultValue="yes"
                                >
                                    <option value="yes">Yes (OEM Only)</option>
                                    <option value="no">No (Open to Compatible)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Textarea id="notes" placeholder="Any specific delivery instructions or deadlines?" />
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Submit Quote Request
                                </>
                            )}
                        </Button>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            By submitting this form, you acknowledge that this is a request for quotation and not a binding order.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
