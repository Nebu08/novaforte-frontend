"use client"

import { useEffect, useState } from "react"

type Model3D = {
  filename: string
  url: string
}

// Si luego cambias el backend a producción, aquí cambias la URL
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000"


export function TechnologySection() {
  const [isRotating, setIsRotating] = useState(false)
  const [models, setModels] = useState<Model3D[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const features = [
    "Aplicaciones clínicas y de entrenamiento: modelos anatómicos y guías quirúrgicas para planeación y simulación.",
    "Prótesis y órtesis personalizadas, adaptadas a la anatomía y necesidades funcionales de cada paciente.",
    "Componentes y adaptadores para equipamiento médico, diseñados a medida para optimizar el uso de la tecnología en clínica.",
  ]

  // 🔹 Cargar la lista de modelos desde el backend
  useEffect(() => {
    async function loadModels() {
      try {
        const res = await fetch(`${API_BASE}/api/models`)
        const data = await res.json()

        if (data.success && Array.isArray(data.models)) {
          setModels(data.models)
        } else {
          console.warn("No 3D models found in /api/models")
        }
      } catch (error) {
        console.error("Error loading 3D models:", error)
      }
    }

    loadModels()
  }, [])

  const currentModel = models[currentIndex]

  const goNext = () => {
    if (models.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % models.length)
  }

  const goPrev = () => {
    if (models.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length)
  }

  return (
    <section id="technology" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Nuestro trabajo en 3D para el sector salud</h2>
          <p className="section-subtitle">
            Mostramos ejemplos de modelos biomédicos personalizados desarrollados por NOVAFORTE mediante impresión 3D, combinando ingeniería biomédica, materiales certificados y diseño orientado al paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 3D Viewer */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              {/* 🔹 Si NO hay modelos en el backend, mostramos tu imagen de siempre */}
              {models.length === 0 && (
                <>
                  <div
                    className={`w-full h-full flex items-center justify-center ${isRotating ? "animate-spin" : ""}`}
                    style={{
                      animationDuration: isRotating ? "6s" : "0s",
                    }}
                  >
                    <img
                      src="/3d-prosthetic-model-biomedical.jpg"
                      alt="3D Biomedical Model Viewer"
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>

                  {/* Botón de rotación solo para el placeholder */}
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    {isRotating ? "Stop Rotation" : "Rotate Model"}
                  </button>

                  <p className="absolute top-4 left-4 text-xs md:text-sm bg-background/80 px-3 py-1 rounded-md border border-border">
                    No 3D models found. Add .glb files to the backend <code>/models</code> folder.
                  </p>
                </>
              )}

              {/* 🔹 Si SÍ hay modelos, usamos <model-viewer> */}
              {models.length > 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {/* Ignorar el tipo de model-viewer para TypeScript */}
                  {
                    // @ts-ignore
                    <model-viewer
                      src={currentModel.url}
                      alt={currentModel.filename}
                      camera-controls
                      auto-rotate
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#eeeeee",
                      }}
                    />
                  }

                  {/* Controles para cambiar de modelo si hay más de uno */}
                  {models.length > 1 && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-xs md:text-sm">
                      <button
                        onClick={goPrev}
                        className="bg-background/80 border border-border px-3 py-1 rounded-md hover:bg-background transition-colors"
                      >
                        ◀ Previous
                      </button>
                      <span className="px-3 py-1 rounded-md bg-background/80 border border-border truncate max-w-[60%] text-center">
                        {currentModel.filename}
                      </span>
                      <button
                        onClick={goNext}
                        className="bg-background/80 border border-border px-3 py-1 rounded-md hover:bg-background transition-colors"
                      >
                        Next ▶
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <p className="text-lg text-foreground">{feature}</p>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                Nota: los modelos 3D mostrados son ejemplos de trabajo desarrollados por NOVAFORTE. No contienen datos identificables de pacientes y se gestionan bajo criterios de confidencialidad y calidad conforme a nuestras normas internas e ISO 9001.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


