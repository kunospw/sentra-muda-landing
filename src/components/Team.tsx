"use client"

import { useState } from "react"
import Image from "next/image"
import KemiriLeafImage from "@/assets/kemiri with leaf.png"
import { motion } from "motion/react"

export default function Team() {
  const teamPages = [
    [
      {
        name: "Kanaya Naomi Manik",
        role: "Co-Founder / Business Development",
        description: "Bertanggung jawab atas pengembangan bisnis, strategi pasar, dan relasi dengan mitra ekspor internasional"
      },
      {
        name: "Iban Shalih Al Khalili",
        role: "Co-Founder / Operations & Production",
        description: "Mengelola proses produksi, kontrol kualitas, dan kesiapan produk sesuai standar ekspor global"
      }
    ],
    [
      {
        name: "Team Member 3",
        role: "Marketing Manager",
        description: "Mengelola strategi pemasaran dan branding untuk pasar domestik dan internasional"
      },
      {
        name: "Team Member 4",
        role: "Quality Assurance",
        description: "Memastikan standar kualitas produk sesuai dengan regulasi internasional"
      }
    ],
    [
      {
        name: "Team Member 5",
        role: "Logistics Coordinator",
        description: "Mengkoordinasikan pengiriman dan distribusi produk ke berbagai negara tujuan ekspor"
      },
      {
        name: "Team Member 6",
        role: "Finance Manager",
        description: "Mengelola keuangan perusahaan dan transaksi perdagangan internasional"
      }
    ],
  ]

  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section
      id="team"
      className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)",
      }}
    >
      {/* Kemiri with Leaf Image - Right side overflow */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 xl:translate-x-1/5 2xl:translate-x-1/6 z-10"
      >
        <Image
          src={KemiriLeafImage}
          alt="Kemiri with Leaf"
          width={800}
          height={800}
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide"
            style={{ color: "#E8D771" }}
          >
            <span className="text-3xl md:text-4xl lg:text-5xl">Team</span>
            <span className="text-3xl md:text-4xl lg:text-5xl"> Kami</span>
          </span>
        </motion.h2>

        {/* Team Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {teamPages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {page.map((member, index) => (
                    <div
                      key={index}
                      className="rounded-xl p-6 text-center transition-transform duration-300 hover:scale-[1.02]"
                      style={{ backgroundColor: "#B8A855" }}
                    >
                      {/* User Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/30 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white/80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>

                      {/* Name */}
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                        {member.name}
                      </h4>

                      {/* Role */}
                      <p className="text-sm md:text-base font-semibold text-white/90 mb-3">
                        {member.role}
                      </p>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {teamPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                  ? "scale-125"
                  : "hover:scale-110"
                  }`}
                style={{
                  backgroundColor: currentPage === index ? "#E8D771" : "rgba(255, 255, 255, 0.3)",
                }}
                aria-label={`Go to team page ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
