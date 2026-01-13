"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { useLanguage } from "@/context/LanguageContext"

export default function WhyUs() {
    const { t } = useLanguage()

    const stats = [
        { value: "100%", label: t.whyUs.stats.organic },
        { value: "95%", label: t.whyUs.stats.satisfied },
        { value: "1M+", label: t.whyUs.stats.sales },
    ]

    const testimonials = [
        [
            {
                name: "Budi Santoso",
                image: "/testimonials/person1.jpg",
                quote: "Kualitas minyak kemiri dari PT Sentra Muda Ekspor sangat luar biasa. Produk mereka konsisten dan selalu memenuhi standar ekspor internasional. Sangat direkomendasikan untuk kebutuhan industri kosmetik."
            },
            {
                name: "Siti Rahayu",
                image: "/testimonials/person2.jpg",
                quote: "Pelayanan yang sangat profesional dan responsif. Pengiriman tepat waktu dan kualitas produk selalu terjaga. Kami sudah bermitra selama 3 tahun dan sangat puas dengan hasilnya."
            }
        ],
        [
            {
                name: "Ahmad Wijaya",
                image: "/testimonials/person3.jpg",
                quote: "Sebagai distributor produk kosmetik, kami sangat terbantu dengan ketersediaan minyak kemiri berkualitas tinggi. Harga kompetitif dengan kualitas premium."
            },
            {
                name: "Maria Chen",
                image: "/testimonials/person4.jpg",
                quote: "Proses pemesanan sangat mudah dan tim mereka sangat membantu dalam menyesuaikan spesifikasi produk sesuai kebutuhan kami. Partner bisnis yang sangat reliable."
            }
        ],
        [
            {
                name: "Rudi Hermawan",
                image: "/testimonials/person5.jpg",
                quote: "Minyak kemiri terbaik yang pernah kami gunakan untuk produk perawatan rambut. Hasil ekstraksi cold-pressed membuat kualitasnya sangat premium."
            },
            {
                name: "Linda Kusuma",
                image: "/testimonials/person6.jpg",
                quote: "Sudah lama mencari supplier minyak kemiri yang konsisten. PT Sentra Muda Ekspor adalah jawabannya. Kualitas dan pelayanan mereka tidak pernah mengecewakan."
            }
        ],
    ]

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <section
            id="why-us"
            className="relative py-16 px-6 md:px-12 lg:px-20"
            style={{
                background: "transparent",
            }}
        >

            <div className="max-w-5xl mx-auto relative z-20">
                {/* Progress Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16"
                    style={{ backgroundColor: "rgba(42, 42, 42, 0.95)" }}
                >
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                    >
                        <span
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif"
                            style={{ color: "#E8D771" }}
                        >
                            {t.whyUs.progressTitle}
                        </span>
                    </motion.h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-30px" }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            >
                                {/* Value */}
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-2 sm:mb-3">
                                    {stat.value}
                                </p>
                                {/* Golden underline */}
                                <div
                                    className="w-12 sm:w-16 h-1 mx-auto mb-2 sm:mb-3"
                                    style={{ backgroundColor: "#E8D771" }}
                                />
                                {/* Label */}
                                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <div className="mt-10 sm:mt-12 md:mt-16">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                    >
                        <span
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif"
                            style={{ color: "#E8D771" }}
                        >
                            {t.whyUs.testimonialTitle}
                        </span>
                    </motion.h2>

                    {/* Testimonial Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative overflow-hidden"
                    >
                        <div
                            className="flex"
                            style={{
                                transform: `translateX(-${currentPage * 100}%)`,
                                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                        >
                            {testimonials.map((page, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-1"
                                    style={{
                                        opacity: currentPage === pageIndex ? 1 : 0.3,
                                        transform: currentPage === pageIndex ? "scale(1)" : "scale(0.95)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease"
                                    }}
                                >
                                    {page.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl p-6 md:p-8 text-center"
                                            style={{ backgroundColor: "rgba(42, 42, 42, 0.95)" }}
                                        >
                                            {/* Profile Image */}
                                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-600">
                                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                                    <span className="text-3xl text-gray-400">
                                                        {testimonial.name.charAt(0)}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Name */}
                                            <h4
                                                className="text-xl md:text-2xl font-serif mb-4"
                                                style={{ color: "#E8D771" }}
                                            >
                                                {testimonial.name}
                                            </h4>
                                            {/* Quote */}
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                {testimonial.quote}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Page Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
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
                                aria-label={`Go to testimonial page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
