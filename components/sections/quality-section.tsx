"use client"

export function QualitySection() {
  const qualityPoints = [
    {
      title: "Enfoque en el paciente y el profesional de la salud",
      description:
        "Cada solución se desarrolla considerando las necesidades clínicas, funcionales y de uso del paciente, así como los requerimientos del profesional de la salud. Nuestro enfoque se alinea con los principios de gestión de calidad definidos en la norma ISO 9001.",
      icon: "👥",
    },
    {
      title: "Trazabilidad de procesos, materiales y diseño",
      description:
        "Implementamos documentación técnica y trazabilidad de materiales, procesos de fabricación y versiones de diseño, permitiendo control, seguimiento y consistencia en todo el ciclo de vida de dispositivos médicos personalizados y soluciones de impresión 3D.",
      icon: "✓",
    },
    {
      title: "Mejora continua y gestión de riesgos",
      description:
        "Aplicamos prácticas de mejora continua mediante revisión de procesos, indicadores de desempeño y gestión de riesgos, siguiendo lineamientos de la norma ISO 9004 para fortalecer la confiabilidad y eficiencia de nuestros servicios.",
      icon: "📈",
    },
    {
      title: "Confidencialidad y protección de la información técnica",
      description:
        "Gestionamos de forma segura diseños, modelos 3D y propiedad intelectual de nuestros clientes, aplicando controles de acceso y buenas prácticas de confidencialidad en proyectos de impresión 3D médica y desarrollo biomédico.",
      icon: "🔒",
    },
  ]

  return (
    <section id="quality" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title">
            Calidad y control de procesos bajo estándares ISO
          </h2>
          <p className="section-subtitle">
            Nuestro sistema de trabajo se basa en los lineamientos de las normas{" "}
            <strong>ISO 9001:2015</strong>, <strong>ISO 9000:2015</strong> e{" "}
            <strong>ISO 9004:2018</strong>, aplicados al diseño y fabricación mediante{" "}
            <strong> impresión 3D médica</strong> para el sector salud.
          </p>

          {/* SEO extra */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Estos estándares guían nuestros procesos de calidad, trazabilidad,
            confidencialidad y mejora continua en el desarrollo de soluciones médicas
            personalizadas y dispositivos biomédicos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 flex items-start gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{point.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
