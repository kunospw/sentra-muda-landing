"use client"

import Image from "next/image"
import Logo from "@/assets/Company Logo.png"
import Background from "@/assets/Kemiri background.jpg"
import { motion } from "motion/react"
import { useLanguage } from "@/context/LanguageContext"

export default function About() {
    const { t } = useLanguage()

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src={Background}
                alt="Kemiri Background"
                fill
                className="object-cover"
                priority
            />

            {/* White Overlay */}
            <div className="absolute inset-0 bg-[#1a1a1a]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="w-48 sm:w-64 md:w-80 lg:w-96"
                >
                    <Image
                        src={Logo}
                        alt="PT Sentra Muda Logo"
                        width={400}
                        height={400}
                        className="mb-4 sm:mb-6 w-full h-auto"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl"
                >
                    {t.about.description}
                </motion.p>
            </div>
        </section>
    )
}
