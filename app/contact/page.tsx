"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Loader2, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const object = Object.fromEntries(formData.entries())
        
        // Add Web3Forms access key
        object.access_key = "09bbb593-9fcf-419a-87c0-8e383c376591"
        const json = JSON.stringify(object)

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            })
            
            const result = await res.json()
            if (result.success) {
                setIsSubmitted(true)
            } else {
                console.error(result)
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        We are here to help fast-moving businesses get their pages live.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                    <a href="mailto:CULTURE1W@GMAIL.COM" className="text-blue-600 hover:underline">CULTURE1W@GMAIL.COM</a>
                                    <p className="text-sm text-slate-500 mt-1">Intake & General Inquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                                    <p className="text-slate-600">Available 24/7</p>
                                    <p className="text-slate-500 text-sm mt-1">For urgent crisis builds.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
                                <p className="text-slate-600 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Send us a Message</h2>

                                <div className="space-y-2">
                                    <Label htmlFor="contact-name">Name</Label>
                                    <Input id="contact-name" name="name" required placeholder="Your Name" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact-email">Email</Label>
                                    <Input id="contact-email" name="email" type="email" required placeholder="you@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact-message">Message</Label>
                                    <Textarea id="contact-message" name="message" required placeholder="How can we help you?" className="min-h-[120px]" />
                                </div>

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}
