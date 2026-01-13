"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import IconImage from "@/assets/Icon.png"
import { motion, AnimatePresence } from "motion/react"
import { useContactModal } from "@/context/ContactModalContext"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage()

    const navLinks = [
        { label: t.nav.home, href: "#hero" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.product, href: "#product" },
        { label: t.nav.whyUs, href: "#why-us" },
        { label: t.nav.team, href: "#team" },
    ]

    const [activeSection, setActiveSection] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isOpen: isModalOpen, openModal, closeModal } = useContactModal()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.replace("#", ""))
            const scrollPosition = window.scrollY + 150 // Offset for navbar height

            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId)
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sectionId)
                    return
                }
            }
            setActiveSection("")
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Check initial position

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isModalOpen])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        // Small delay to let menu close animation start, then scroll
        setTimeout(() => {
            const element = document.querySelector(href)
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                })
            }
        }, 100)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const mailtoLink = `mailto:pt.sentramudaekspor@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`

        window.location.href = mailtoLink

        // Simulate delay then show success
        await new Promise(resolve => setTimeout(resolve, 500))
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 2 seconds
        setTimeout(() => {
            closeModal()
            setIsSubmitted(false)
            setFormData({ name: "", email: "", subject: "", message: "" })
        }, 2000)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-20"
                style={{
                    background: "linear-gradient(180deg, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.8) 100%)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo / Company Icon */}
                    <a href="#" className="flex items-center gap-3 group">
                        <Image
                            src={IconImage}
                            alt="PT Sentra Muda Ekspor"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span
                            className="text-lg md:text-xl font-serif tracking-wide transition-colors duration-300 group-hover:opacity-80"
                            style={{ color: "#E8D771" }}
                        >
                            Sentra Muda
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.href.replace("#", "")
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-sm lg:text-base transition-colors duration-300 tracking-wide hover:text-[#E8D771]"
                                    style={{
                                        color: isActive ? "#b8a855" : "#d1d5db",
                                    }}
                                >
                                    {link.label}
                                </a>
                            )
                        })}
                        {/* Contact Us Button */}
                        <button
                            onClick={() => openModal()}
                            className="text-sm lg:text-base transition-colors duration-300 tracking-wide hover:text-[#E8D771]"
                            style={{ color: "#d1d5db" }}
                        >
                            {t.nav.contactUs}
                        </button>

                        {/* Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === "en" ? "id" : "en")}
                            className="flex items-center gap-1 px-2 py-1 rounded border border-gray-600 text-xs lg:text-sm transition-all duration-300 hover:border-[#E8D771] hover:text-[#E8D771]"
                            style={{ color: "#d1d5db" }}
                        >
                            <span className={language === "en" ? "text-[#E8D771] font-semibold" : ""}>EN</span>
                            <span>/</span>
                            <span className={language === "id" ? "text-[#E8D771] font-semibold" : ""}>ID</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-4 pt-4 pb-2">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.replace("#", "")
                                    return (
                                        <a
                                            key={index}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="text-base transition-colors duration-300 tracking-wide hover:text-[#E8D771] py-2"
                                            style={{
                                                color: isActive ? "#b8a855" : "#d1d5db",
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    )
                                })}
                                <button
                                    onClick={() => {
                                        openModal()
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="text-base transition-colors duration-300 tracking-wide hover:text-[#E8D771] py-2 text-left"
                                    style={{ color: "#d1d5db" }}
                                >
                                    {t.nav.contactUs}
                                </button>

                                {/* Mobile Language Toggle */}
                                <button
                                    onClick={() => setLanguage(language === "en" ? "id" : "en")}
                                    className="flex items-center gap-2 py-2 text-base transition-colors duration-300"
                                    style={{ color: "#d1d5db" }}
                                >
                                    <span className={language === "en" ? "text-[#E8D771] font-semibold" : ""}>EN</span>
                                    <span>/</span>
                                    <span className={language === "id" ? "text-[#E8D771] font-semibold" : ""}>ID</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Contact Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        onClick={() => closeModal()}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-lg rounded-2xl p-8"
                            style={{ backgroundColor: "rgba(42, 42, 42, 0.98)" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => closeModal()}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Header */}
                            <h2
                                className="text-2xl md:text-3xl font-serif mb-6"
                                style={{ color: "#E8D771" }}
                            >
                                {t.contact.title}
                            </h2>

                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-white text-lg">{t.contact.success}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">{t.contact.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b8a855] transition-all duration-300 border border-gray-600"
                                            style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
                                            placeholder={t.contact.name}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">{t.contact.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b8a855] transition-all duration-300 border border-gray-600"
                                            style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">{t.contact.subject}</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b8a855] transition-all duration-300 border border-gray-600"
                                            style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
                                            placeholder={t.contact.subject}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">{t.contact.message}</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b8a855] transition-all duration-300 border border-gray-600 resize-none"
                                            style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
                                            placeholder={t.contact.message}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 rounded-lg font-semibold text-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: "#B8A855" }}
                                    >
                                        {isSubmitting ? t.contact.sending : t.contact.send}
                                    </button>
                                </form>
                            )}

                            {/* Contact Info */}
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-gray-400 text-sm text-center">
                                    {t.contact.directEmail}{" "}
                                    <a
                                        href="mailto:pt.sentramudaekspor@gmail.com"
                                        className="hover:text-white transition-colors"
                                        style={{ color: "#E8D771" }}
                                    >
                                        pt.sentramudaekspor@gmail.com
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
