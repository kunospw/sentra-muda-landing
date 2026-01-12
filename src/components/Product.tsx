"use client"

import Image from "next/image"
import KemiriImage from "@/assets/kemiri.png"
import OilImage from "@/assets/oil.png"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function Product() {
  return (
    <section
      id="product"
      className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 overflow-visible"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Title + Oil Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Product Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2" style={{ color: "#E8D771" }}>
              <span className="text-4xl md:text-5xl">C</span>ANDLENUT{" "}
              <span className="text-4xl md:text-5xl">O</span>IL{" "}
              <span className="text-2xl md:text-3xl">(</span>
              <span className="text-4xl md:text-5xl">M</span>INYAK{" "}
              <span className="text-4xl md:text-5xl">K</span>EMIRI
              <span className="text-2xl md:text-3xl">)</span>
            </h2>
            <h3 className="text-lg md:text-xl font-sans tracking-widest mb-6" style={{ color: "#E8D771" }}>
              <span className="text-xl md:text-2xl">N</span>ATURAL{" "}
              <span className="text-xl md:text-2xl">O</span>IL /{" "}
              <span className="text-xl md:text-2xl">E</span>XPORT{" "}
              <span className="text-xl md:text-2xl">C</span>OMMODITY
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic max-w-lg">
              Minyak kemiri berkualitas tinggi yang diolah dari biji
              kemiri pilihan asal Aceh. Produk ini digunakan sebagai
              bahan baku industri kosmetik, farmasi, dan pengobatan
              tradisional, dengan nilai tambah tinggi dibandingkan
              ekspor biji kemiri mentah.
            </p>
          </motion.div>

          {/* Right - Oil Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <Image
              src={OilImage}
              alt="Candlenut Oil Bottles"
              width={650}
              height={550}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Section - Kemiri Image + Specs */}
        <div className="relative min-h-[500px]">
          {/* Left - Kemiri Image (absolute, doesn't affect layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block absolute -left-8 top-[65%] -translate-y-1/2 -translate-x-1/4 xl:-translate-x-1/3 2xl:-translate-x-1/3 z-30"
          >
            <Image
              src={KemiriImage}
              alt="Kemiri Nuts"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </motion.div>

          {/* Mobile - Kemiri Image (normal flow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:hidden flex items-center justify-center mb-8"
          >
            <Image
              src={KemiriImage}
              alt="Kemiri Nuts"
              width={650}
              height={650}
              className="object-contain"
            />
          </motion.div>

          {/* Right - Specification Cards */}
          <div className="flex flex-col gap-6 lg:ml-auto lg:w-1/2">
            {/* Spesifikasi Produk Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(91, 91, 91, 0.3)" }}
            >
              <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-wide mb-4" style={{ color: "#E8D771" }}>
                <span className="text-2xl md:text-5xl">S</span>PESIFIKASI{" "}
                <span className="text-2xl md:text-5xl">P</span>RODUK
              </h4>
              <div className="text-gray-300 text-lg md:text-xl space-y-1">
                <p>Komposisi: 100% minyak kemiri</p>
                <p>Metode Produksi: Cold-pressed / sesuai permintaan</p>
                <p>Standar: Disesuaikan dengan kebutuhan dan regulasi</p>
                <p>pasar internasional</p>
              </div>
            </motion.div>

            {/* Keunggulan Produk Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(91, 91, 91, 0.3)" }}
            >
              <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-wide mb-4" style={{ color: "#E8D771" }}>
                <span className="text-2xl md:text-5xl">K</span>EUNGGULAN{" "}
                <span className="text-2xl md:text-5xl">P</span>RODUK
              </h4>
              <div className="text-gray-300 text-lg md:text-xl space-y-1">
                <p>Sumber bahan baku dari Aceh</p>
                <p>Spesifikasi fleksibel sesuai kebutuhan buyer</p>
                <p>Kualitas terkontrol dengan proses produksi</p>
                <p>terstandar</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-end"
        >
          <Button
            size="lg"
            className="px-8 py-3 bg-[#b8a855] hover:bg-[#ebd771] text-white font-semibold text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#2d6a4f]/30"
          >
            Availability: Pre-order & Bulk order
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
