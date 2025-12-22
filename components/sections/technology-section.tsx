"use client"

import { useEffect, useMemo, useState } from "react"

type Model3D = {
  filename: string
  url: string
}

export function TechnologySection() {
  const [models, setModels] = useState<Model3D[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // ✅ Usa variable de entorno (Vercel) y fallback
  const API_BASE = useMemo(() => {
    return (
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://novaforte-backend-1.onrender.com" ||
      "http://localhost:4000"
    )
  }, [])

  const features = [
    "Aplicaciones clínicas y de entrenamiento: modelos anatómicos y guías quirúrgicas para planeación y simulación.",
    "Prótesis y órtesis personalizadas, adaptadas a la anatomía y necesidades funcionales de cada paciente.",
    "Componentes y adaptadores para equipamiento médico, diseñados a medida para optimizar el uso de la tecnología en clínica.",
  ]

  // ✅ Cargar model-viewer (si tu layout no lo está cargando)
  useEffect(() => {
    if (customElements.get("model-viewer")) return

    const id = "model-viewer-script"
    if (document.getElementById(id)) return

    const script = document.createElement("script")
    script.id = id
    script.type = "module"
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    document.head.appendChild(script)
  }, [])

  // ✅ Cargar modelos desde el backend
  useEffect(() => {
    let cancelled = false

    async function loadModels() {
      try {
        setIsLoading(true)

        const res = await fetch(`${API_BASE}/api/models`, {
          cache: "no-store",
        })

        if (!res.ok) {
          throw new Error(`API /api/models respondió ${res.status}`)
        }

        const data = await res.json()

        if (!cancelled) {
          if (data?.success && Array.isArray(data.models)) {
            setModels(data.models)
            setCurrentIndex(0)
          } else {
            console.warn("No se encontraron modelos 3D en /api/models:", data)
            setModels([])
          }
        }
      } catch (error) {
        console.error("Error cargando modelos 3D:", error)
        if (!cancelled) setModels([])
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadModels()

    return () => {
      cancelled = true
    }
  }, [API_BASE])

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
            Mostramos ejemplos de modelos biomédicos personalizados desarrollados por NOVAFORTE mediante impresión 3D,
            combinando ingeniería biomédica, materiales certificados y diseño orientado al paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 3D Viewer */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-card border border-border rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none z-0" />

              <div className="relative z-10 w-full h-full">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                    Cargando modelos 3D…
                  </div>
                )}

                {!isLoading && models.length === 0 && (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center text-sm text-muted-foreground">
                    No se encontraron modelos 3D. Agrega archivos <strong>.glb</strong> o <strong>.gltf</strong> a la
                    carpeta <code>/models</code> del backend.
                  </div>
                )}

                {!isLoading && models.length > 0 && currentModel && (
                  <>
                    <div className="w-full h-full">
                      {
                        // @ts-ignore
                        <model-viewer
                          key={currentModel.url} // ✅ fuerza recarga cuando cambia
                          src={currentModel.url}
                          alt={currentModel.filename}
                          camera-controls
                          auto-rotate
                          crossorigin="anonymous"
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#eeeeee",
                          }}
                        />
                      }
                    </div>

                    {models.length > 1 && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-xs md:text-sm">
                        <button
                          onClick={goPrev}
                          className="bg-background/90 border border-border px-3 py-1 rounded-md hover:bg-background transition-colors"
                        >
                          ◀ Anterior
                        </button>

                        <span className="px-3 py-1 rounded-md bg-background/90 border border-border truncate max-w-[60%] text-center">
                          {currentModel.filename}
                        </span>

                        <button
                          onClick={goNext}
                          className="bg-background/90 border border-border px-3 py-1 rounded-md hover:bg-background transition-colors"
                        >
                          Siguiente ▶
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
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
                Nota: los modelos 3D mostrados son ejemplos de trabajo desarrollados por NOVAFORTE. No contienen datos
                identificables de pacientes y se gestionan bajo criterios de confidencialidad y calidad conforme a
                nuestras normas internas e ISO 9001.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
