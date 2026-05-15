import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-gray-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-violet-600 rounded flex items-center justify-center text-white font-bold">
                                LB
                            </div>
                            <span className="font-semibold text-xl tracking-tight text-white">Launchbolt</span>
                        </div>
                        <p className="text-sm leading-6 text-gray-400">
                            One Page. 24 Hours. More Customers.
                        </p>
                        <p className="text-sm leading-6 text-gray-500 max-w-sm">
                            Fast, fixed-scope crisis landing pages for businesses that need a professional page live quickly.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Offer</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><span className="text-sm leading-6 text-gray-400">Crisis Page — $750</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Crisis Page + Form — $1,000</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Urgent 12H Delivery — +$300</span></li>
                                </ul>
                                
                                <h3 className="text-sm font-semibold leading-6 text-white mt-8">AI Launch Add-Ons</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><span className="text-sm leading-6 text-gray-400">Copy Boost — +$200</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Lead Capture Automation — +$500</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Social Launch Pack — +$300</span></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Workflow</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><span className="text-sm leading-6 text-gray-400">Pay Upfront</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Submit Intake</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Built in 24H</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Live URL + GitHub Repo</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Terms</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><span className="text-sm leading-6 text-gray-400">No Revision Rounds</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">No Calls</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">No Slack</span></li>
                                    <li><span className="text-sm leading-6 text-gray-400">Fixed-Scope Delivery</span></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        {/* TODO: Replace Gmail with domain email when available. */}
                                        <a href="mailto:launchbot@gmail.com" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                                            launchbot@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-1_kwjgp6cKjvtEkC_cCbgo-I_H_bgs9HmObUMylxdykiWg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-500 hover:text-gray-300 transition-colors">
                                            Already paid? <span className="underline decoration-gray-700 underline-offset-4">Complete Intake Form</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">
                        &copy; 2026 Launchbolt. All rights reserved.
                    </p>
                    <p className="text-xs leading-5 text-gray-500 mt-2">
                        This is a fixed-scope 24h crisis build. Timer starts after payment clears and intake is submitted.
                    </p>
                </div>
            </div>
        </footer>
    )
}
