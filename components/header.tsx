"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img
            src="/novaforte-logo.png"
            alt="NOVAFORTE Ingeniería Biomédica"
            className="h-36 md:h-48 w-auto object-contain" // Hicimos el logo 4 veces más grande
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Inicio", id: "home" },
            { label: "Servicios", id: "servicios" },
            { label: "Tecnología", id: "technology" },
            { label: "Calidad", id: "quality" },
            { label: "Cotizaciones", id: "quotes" },
            { label: "Contacto", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("quotes")}
          className="btn-primary text-sm"
        >
          ¡Cotiza!
        </button>
      </div>
    </header>
  )
}
