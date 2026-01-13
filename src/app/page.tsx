"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Product from "@/components/Product"
import WhyUs from "@/components/WhyUs"
import Team from "@/components/Team"
import Footer from "@/components/Footer"
import { ContactModalProvider } from "@/context/ContactModalContext"
import { LanguageProvider } from "@/context/LanguageContext"

export default function Home() {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          <main className="bg-black text-white overflow-x-hidden">
            <Hero />
            <About />
            <Product />
            <WhyUs />
            <Team />
          </main>
          <Footer />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  )
}
