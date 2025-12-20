"use client"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-background to-background"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              NOVAFORTE · Impresión 3D para el sector salud
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight text-balance">
              <span className="block">Ingeniería Biomédica</span>
              <span className="block bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                en 3D para Soluciones Reales
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Prótesis, órtesis, repuestos biomédicos y accesorios personalizados con precisión
              de ingeniería y compromiso con la calidad ISO 9001.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("quotes")}
                className="btn-primary"
              >
                Solicitar cotización
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="btn-secondary"
              >
                Ver lo que hacemos
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-muted rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10" />
              <img
                src="/3d-biomedical-prosthesis-model.jpg"
                alt="Modelo 3D biomédico NOVAFORTE"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
