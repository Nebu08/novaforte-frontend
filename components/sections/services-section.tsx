"use client"

export function ServicesSection() {
  const services = [
    {
      title: "Impresión 3D biomédica a medida",
      description: "Soluciones de impresión 3D de alta precisión para aplicaciones médicas, utilizando materiales certificados y procesos validados.",
      badge: "Alta precisión",
    },
    {
      title: "Diseño de prótesis y órtesis",
      description: "Diseño especializado de prótesis y órtesis estáticas y funcionales, optimizadas para el confort, el ajuste anatómico y el uso diario del paciente.",
      badge: "Enfoque en el paciente",
    },
    {
      title: "Fabricación de repuestos y accesorios",
      description: "abricación bajo demanda de repuestos difíciles de conseguir y accesorios personalizados para equipos médicos y de rehabilitación, con trazabilidad completa.",
      badge: "Trazabilidad total",
    },
    {
      title: "Prototipado rápido y desarrollo",
      description: "Desarrollo ágil de prototipos biomédicos y soluciones experimentales para validación clínica y pruebas de concepto.",
      badge: "Entrega rápida",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones integrales de ingeniería biomédica e impresión 3D para el sector salud.</p>
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
