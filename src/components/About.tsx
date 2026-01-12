"use client"

import Image from "next/image"
import Logo from "@/assets/Company Logo.png"
import Background from "@/assets/Kemiri background.jpg"
import { motion } from "motion/react"

export default function About() {
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
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src={Logo}
                        alt="PT Sentra Muda Logo"
                        width={400}
                        height={400}
                        className="mb-6"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-3xl"
                >
                    PT Sentra Muda Ekspor adalah perusahaan yang bergerak di bidang pengolahan dan
                    ekspor minyak kemiri (candlenut oil) yang berlokasi di Aceh, salah satu daerah
                    penghasil kemiri terbesar di Indonesia. Perusahaan ini melayani pasar B2B internasional,
                    khususnya industri kosmetik, farmasi, dan kuliner. Dengan pabrik pengolahan milik
                    sendiri, perusahaan menawarkan kualitas terbaik, harga global yang kompetitif, serta
                    layanan konsultasi dan kustomisasi produk.
                </motion.p>
            </div>
        </section>
    )
}
