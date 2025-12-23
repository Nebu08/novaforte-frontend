"use client"

export function ServicesSection() {
  const services = [
    {
      title: "Impresión 3D biomédica a medida",
      description: "Ofrecemos servicios de impresión 3D biomédica a medida para aplicaciones médicas y de rehabilitación, utilizando materiales técnicos y procesos controlados. Nuestra tecnología permite fabricar dispositivos personalizados con alta precisión dimensional, reduciendo tiempos de entrega y optimizando costos en comparación con métodos tradicionales.",
      badge: "Alta precisión",
    },
    {
      title: "Diseño de prótesis y órtesis",
      description: "Diseñamos prótesis y órtesis personalizadas, tanto estáticas como funcionales, adaptadas a la anatomía y necesidades de cada paciente. Nuestro enfoque combina diseño digital, criterios biomecánicos y fabricación mediante impresión 3D para lograr mayor confort, ajuste preciso y funcionalidad en el uso diario.",
      badge: "Enfoque en el paciente",
    },
    {
      title: "Fabricación de repuestos y accesorios",
      description: "Fabricación bajo demanda de repuestos difíciles de conseguir y accesorios personalizados para equipos médicos y de rehabilitación. Utilizamos impresión 3D para extender la vida útil de dispositivos, garantizar compatibilidad funcional y asegurar trazabilidad en cada componente fabricado.",
      badge: "Trazabilidad total",
    },
    {
      title: "Prototipado rápido y desarrollo",
      description: "Desarrollamos prototipos biomédicos mediante prototipado rápido en impresión 3D, facilitando procesos de validación clínica, pruebas de concepto y desarrollo de nuevas soluciones médicas. Este enfoque permite iteraciones ágiles, reducción de costos y aceleración del desarrollo tecnológico.",
      badge: "Entrega rápida",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Nuestros servicios combinan ingeniería biomédica, diseño personalizado e impresión 3D médica para ofrecer soluciones eficientes, accesibles y adaptadas a las necesidades del sector salud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {service.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
