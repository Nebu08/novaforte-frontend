"use client"

export function QualitySection() {
  const qualityPoints = [
    {
      title: "Enfoque en el cliente y el paciente",
      description: "Cada solución se diseña considerando las necesidades del paciente y del profesional de la salud, en línea con el principio de enfoque al cliente de ISO 9001.",
    },
    {
      title: "Trazabilidad de procesos y materiales",
      description: "Documentación completa y trazabilidad de materiales, procesos de fabricación y cambios de diseño, asegurando control y seguridad en todo el ciclo de vida del producto.",
    },
    {
      title: "Mejora continua ",
      description: "Optimización permanente mediante gestión de riesgos, indicadores de desempeño y auditorías de calidad, siguiendo las directrices de mejora continua de ISO 9004.",
    },
    {
      title: "Confidencialidad y protección de la propiedad intelectual",
      description: "Gestión segura de diseños, modelos 3D y propiedad intelectual del cliente, bajo estrictos estándares de confidencialidad.",
    },
  ]

  return (
    <section id="quality" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Calidad certificada y normas ISO</h2>
          <p className="section-subtitle">
            Sistema de gestión basado en ISO 9001:2015, ISO 9000:2015 e ISO 9004:2018.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                {i === 0 && <span className="text-2xl">👥</span>}
                {i === 1 && <span className="text-2xl">✓</span>}
                {i === 2 && <span className="text-2xl">📈</span>}
                {i === 3 && <span className="text-2xl">🔒</span>}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
