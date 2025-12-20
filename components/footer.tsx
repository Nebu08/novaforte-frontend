"use client"

import Link from "next/link"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg">NOVAFORTE</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Biomedical engineering solutions for healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "Technology", id: "technology" },
                { label: "Quality", id: "quality" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Data Processing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Ready to Start?</h4>
            <button
              onClick={() => scrollToSection("quotes")}
              className="w-full bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <p>&copy; 2025 NOVAFORTE. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
