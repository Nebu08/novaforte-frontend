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
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg tracking-wide">
                NOVAFORTE SAS
              </span>
            </div>

            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Soluciones de <strong>ingeniería biomédica</strong> e{" "}
              <strong>impresión 3D médica</strong> para el sector salud en
              Colombia.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/novafortesas/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram NOVAFORTE"
                className="hover:text-accent transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/novaforte-sas/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn NOVAFORTE"
                className="hover:text-accent transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 8.98h3.96V21H3V8.98zM9.5 8.98H13v1.64h.05c.49-.93 1.68-1.9 3.46-1.9 3.7 0 4.38 2.43 4.38 5.6V21H17.9v-5.42c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.07 1.41-2.07 2.87V21H9.5V8.98z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:novafortesas@gmail.com"
                aria-label="Email NOVAFORTE"
                className="hover:text-accent transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", id: "home" },
                { label: "Servicios", id: "services" },
                { label: "Tecnología", id: "technology" },
                { label: "Calidad", id: "quality" },
                { label: "Contacto", id: "contact" },
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
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/data-processing" className="hover:text-accent transition-colors">
                  Tratamiento de datos
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Términos del servicio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">¿Listo para comenzar?</h4>
            <button
              onClick={() => scrollToSection("quotes")}
              className="w-full bg-accent text-white px-4 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
            >
              Solicitar cotización
            </button>
            <p className="text-xs text-secondary-foreground/70 mt-3">
              Atención en Bogotá · Soporte a nivel nacional
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <p>© 2025 NOVAFORTE SAS. Todos los derechos reservados.</p>
            <p className="text-xs">
              Ingeniería biomédica · Impresión 3D médica · Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
