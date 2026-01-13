"use client"

import Image from "next/image";
import productImage from "@/assets/Product Picture.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useContactModal } from "@/context/ContactModalContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 50%, rgba(40, 40, 40, 0.8), transparent),
          linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)
        `,
        backgroundSize: "cover",
      }}
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl px-2 sm:pl-4 md:pl-6 lg:pl-8 text-center md:text-left">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#b8a855] tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase"
            >
              {t.hero.tagline}
              <br />
              {t.hero.taglineSecond}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#ebd771] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-4 sm:mb-6"
            >
              {t.hero.companyName}
              <br />
              {t.hero.companyNameSecond}
            </motion.h1>

            {/* Mobile Image - Shows only on mobile, between heading and description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center my-6 md:hidden"
            >
              <div className="relative w-full max-w-[200px] sm:max-w-[250px]">
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto md:mx-0"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="px-6 sm:px-8 py-3 bg-[#b8a855] hover:bg-[#ebd771] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2d6a4f]/30 cursor-pointer text-sm sm:text-base"
              >
                <a href="#about">{t.hero.learnMore}</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openModal}
                className="px-6 sm:px-8 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold border-gray-600 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                {t.hero.contactUs}
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Product Image (Desktop/Tablet only) */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex relative justify-center items-center"
          >
            <div className="relative w-full max-w-[450px] lg:origin-center">
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
