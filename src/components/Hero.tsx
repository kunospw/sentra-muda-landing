"use client"

import Image from "next/image";
import productImage from "@/assets/Product Picture.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 50%, rgba(40, 40, 40, 0.8), transparent),
          linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)
        `,
        backgroundSize: "cover",
      }}
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl pl-8 lg:pl-8">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#b8a855] tracking-[0.3em] text-sm font-medium mb-4 uppercase"
            >
              High Quality Candlenut Oil
              <br />
              for Global Markets
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#ebd771] text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6"
            >
              PT Sentra Muda
              <br />
              Ekspor
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md"
            >
              Export-grade candlenut oil from Aceh
              <br />
              for cosmetics, pharmaceuticals, and culinary
              <br />
              industries.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-3 bg-[#b8a855] hover:bg-[#ebd771] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2d6a4f]/30 cursor-pointer"
              >
                <a href="#about">LEARN MORE</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openModal}
                className="px-8 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold border-gray-600 transition-all duration-300 cursor-pointer"
              >
                CONTACT US
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-3xl xl:max-w-4xl scale-150 origin-center -translate-x-24">
              <Image
                src={productImage}
                alt="Premium Candlenut Oil from PT Sentra Muda Ekspor"
                className="object-contain drop-shadow-2xl"
                priority
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
