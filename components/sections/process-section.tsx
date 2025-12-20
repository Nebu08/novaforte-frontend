"use client"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Análisis de necesidades",
      description: "Comprendemos tus requerimientos biomédicos y especificaciones clínicas para definir el alcance del proyecto.",
    },
    {
      number: "02",
      title: "Diseño 3D",
      description: "Desarrollamos y validamos el modelo 3D para asegurar ajuste, funcionalidad y seguridad del dispositivo.",
    },
    {
      number: "03",
      title: "Impresión",
      description: "Fabricamos con materiales certificados y aplicamos controles de calidad y trazabilidad",
    },
    { 
      number: "04",
      title: "Entrega y seguimiento",
      description: "Entregamos el dispositivo con documentación técnica y ofrecemos seguimiento continuo para mejora y soporte clínico.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          <p className="section-subtitle">Desde el concepto inicial hasta la entrega final certificada</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-border transform -translate-x-1/2 translate-x-1/2" />
              )}

              <div className="relative z-10 bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
