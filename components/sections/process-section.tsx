"use client"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Análisis de necesidades clínicas",
      description:
        "Analizamos los requerimientos biomédicos, funcionales y clínicos del proyecto, considerando las necesidades del paciente y del profesional de la salud para definir el alcance técnico del dispositivo.",
    },
    {
      number: "02",
      title: "Diseño 3D personalizado",
      description:
        "Desarrollamos y validamos el modelo 3D mediante diseño digital, asegurando ajuste anatómico, funcionalidad y seguridad, conforme a criterios de ingeniería biomédica e impresión 3D médica.",
    },
    {
      number: "03",
      title: "Fabricación mediante impresión 3D",
      description:
        "Fabricamos el dispositivo utilizando impresión 3D con materiales técnicos, aplicando controles de calidad, trazabilidad de procesos y verificación dimensional durante la producción.",
    },
    {
      number: "04",
      title: "Entrega documentada y seguimiento",
      description:
        "Entregamos el dispositivo con documentación técnica y realizamos seguimiento posterior para ajustes, mejora continua y soporte clínico cuando es requerido.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <h2 className="section-title">Nuestro proceso de trabajo</h2>
          <p className="section-subtitle">
            Desde el análisis inicial hasta la entrega documentada de soluciones médicas personalizadas mediante impresión 3D.
          </p>

          {/* SEO extra */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Nuestro proceso integra diseño biomédico, impresión 3D médica y control de calidad para garantizar soluciones seguras,
            funcionales y adaptadas al sector salud.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-border transform -translate-x-1/2 translate-x-1/2" />
              )}

              <div className="relative z-10 bg-card border border-border rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
