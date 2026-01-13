"use client"

import { useState } from "react"
import Image from "next/image"
import IconImage from "@/assets/Icon.png"
import { motion } from "motion/react"
import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
    const { t } = useLanguage()
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)

    const navLinks = [
        { label: t.nav.home, href: "#hero" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.product, href: "#product" },
        { label: t.nav.whyUs, href: "#why-us" },
        { label: t.nav.team, href: "#team" },
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubscribed(true)
        setIsSubmitting(false)
        setEmail("")
    }

    return (
        <footer
            id="contact"
            className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20"
            style={{
                background: "transparent",
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12"
                >
                    {/* Company Description + Newsletter */}
                    <div>
                        {/* Company Logo & Name */}
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src={IconImage}
                                alt="PT Sentra Muda Ekspor"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <span
                                className="text-xl font-serif tracking-wide"
                                style={{ color: "#E8D771" }}
                            >
                                Sentra Muda
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {t.footer.description}
                        </p>

                        {/* Newsletter Section */}
                        <div className="mt-6">
                            <h4
                                className="text-base sm:text-lg font-serif mb-3 sm:mb-4"
                                style={{ color: "#E8D771" }}
                            >
                                {t.footer.newsletter}
                            </h4>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t.footer.emailPlaceholder}
                                    className="w-full sm:flex-1 px-3 sm:px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border border-gray-600 text-xs sm:text-sm min-w-0"
                                    style={{
                                        backgroundColor: "rgba(42, 42, 42, 0.95)",
                                    }}
                                    disabled={isSubmitting}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg font-semibold text-black uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                    style={{
                                        backgroundColor: "#B8A855",
                                    }}
                                >
                                    {isSubmitting ? "..." : t.footer.subscribe}
                                </button>
                            </form>

                            {/* Success Message */}
                            {isSubscribed && (
                                <p
                                    className="mt-3 text-sm"
                                    style={{ color: "#E8D771" }}
                                >
                                    {t.footer.thankYou}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-lg font-serif mb-4"
                            style={{ color: "#E8D771" }}
                        >
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            className="text-lg font-serif mb-4"
                            style={{ color: "#E8D771" }}
                        >
                            {t.footer.contactInfo}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-gray-400 text-sm">
                                    {t.footer.location}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:pt.sentramudaekspor@gmail.com"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    pt.sentramudaekspor@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href="tel:+6282379823480"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    +62 823-7982-3480
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            {t.footer.copyright}
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.333a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/6282379823480"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
