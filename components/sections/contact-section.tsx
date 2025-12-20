"use client"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">CONTÁCTANOS</h2>
          <p className="section-subtitle">Contacto NOVAFORTE para requerimientos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Correo</h3>
              <a
                href="mailto:novafortesas@gmail.com"
                className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                novafortesas@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Telefono/ WhatsApp</h3>
              <a
                href="tel:+573103294869-+573212226926"
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                +(57) 3103294869- +(57) 3212226926
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Location</h3>
              <p className="text-lg text-foreground">Bogotá, Colombia</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">Horario de Atención</h3>
              <div className="space-y-2 text-foreground">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sabados: 9:00 AM - 1:00 PM</p>
                <p>Domingos: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Dejanos tus datos y te contáctaremos.</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tucorreo@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Escribe tu consulta..."
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-3">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
