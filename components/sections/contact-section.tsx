"use client"

export function ContactSection() {
  const email = "novafortesas@gmail.com"
  const phone1 = "+573103294869"
  const phone2 = "+573212226926"

  const addressLine = "Cra. 16A #78-75"
  const cityLine = "Bogotá, Colombia"

  // WhatsApp links (con mensaje sugerido)
  const waText =
    "Hola NOVAFORTE, quiero una cotización / asesoría en impresión 3D médica, prótesis u órtesis personalizadas."
  const wa1 = `https://wa.me/${phone1.replace("+", "")}?text=${encodeURIComponent(waText)}`
  const wa2 = `https://wa.me/${phone2.replace("+", "")}?text=${encodeURIComponent(waText)}`

  // ✅ Google Maps embed (sin API key)
  const mapsQuery = encodeURIComponent(`${addressLine}, ${cityLine}`)
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            Atención en <strong>Bogotá, Colombia</strong> para <strong>impresión 3D médica</strong>,{" "}
            <strong>prótesis y órtesis a medida</strong> y desarrollo de soluciones biomédicas.
          </p>

          {/* SEO extra */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Visítanos o escríbenos para cotizaciones, requerimientos técnicos y colaboración con clínicas, hospitales y
            profesionales de la salud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Correo
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {email}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Ideal para enviar especificaciones, referencias y requerimientos del proyecto.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Teléfono / WhatsApp
              </h3>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={`tel:${phone1}`}
                    className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +57 310 329 4869
                  </a>
                  <a
                    href={wa1}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-full border border-border hover:border-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={`tel:${phone2}`}
                    className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +57 321 222 6926
                  </a>
                  <a
                    href={wa2}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-full border border-border hover:border-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Respuesta más rápida vía WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Ubicación
              </h3>
              <p className="text-lg text-foreground">{addressLine}</p>
              <p className="text-lg text-foreground">{cityLine}</p>

              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded-md border border-border hover:border-primary transition-colors"
                >
                  Ver en Google Maps
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded-md border border-border hover:border-primary transition-colors"
                >
                  Cómo llegar
                </a>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Ubicación en Bogotá para atención y coordinación de proyectos del sector salud.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                Horario de atención
              </h3>
              <div className="space-y-2 text-foreground">
                <p>Lunes a viernes: 8:00 a. m. – 6:00 p. m.</p>
                <p>Sábados: 9:00 a. m. – 1:00 p. m.</p>
                <p>Domingos y festivos: Cerrado</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Nota: Por favor no envíes información sensible o identificable de pacientes por este medio.
              </p>
            </div>
          </div>

          {/* Map + Quick Contact Form */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Encuéntranos</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {addressLine}, {cityLine}
                </p>
              </div>

              <div className="w-full aspect-video border-t border-border">
                <iframe
                  title="Mapa - NOVAFORTE SAS"
                  src={mapsEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Quick Contact Form (UI) */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Déjanos tus datos y te contactaremos
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Cuéntanos tu necesidad (impresión 3D, prótesis/órtesis o desarrollo personalizado) y te responderemos con
                los siguientes pasos.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-name">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-email">
                    Correo
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="tucorreo@email.com"
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-message">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Escribe tu consulta…"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Incluye si aplica: medidas aproximadas, material deseado y fecha límite.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full py-3">
                  Enviar mensaje
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar aceptas el tratamiento de datos para responder tu solicitud.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
