"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
    { name: "Pricing", href: "/#pricing" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Intake", href: "https://docs.google.com/forms/d/e/1FAIpQLSd-1_kwjgp6cKjvtEkC_cCbgo-I_H_bgs9HmObUMylxdykiWg/viewform?usp=dialog" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
            <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Launchbolt</span>
                        <div className="h-8 w-8 bg-violet-600 rounded flex items-center justify-center text-white font-bold">
                            LB
                        </div>
                        <span className="font-semibold text-xl tracking-tight text-white">Launchbolt</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        item.name === "Intake" ? (
                            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                                {item.name}
                            </a>
                        ) : (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Button asChild size="sm" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold border-0">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-1_kwjgp6cKjvtEkC_cCbgo-I_H_bgs9HmObUMylxdykiWg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Start Your 24H Build</a>
                    </Button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a0a0a] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Launchbolt</span>
                            <div className="h-8 w-8 bg-violet-600 rounded flex items-center justify-center text-white font-bold">
                                LB
                            </div>
                            <span className="font-semibold text-xl tracking-tight text-white">Launchbolt</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-800">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    item.name === "Intake" ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-900 hover:text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-900 hover:text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                            <div className="py-6 flex flex-col gap-2">
                                <Button asChild className="w-full justify-center bg-violet-600 hover:bg-violet-700 text-white font-semibold border-0">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-1_kwjgp6cKjvtEkC_cCbgo-I_H_bgs9HmObUMylxdykiWg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Start Your 24H Build</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
