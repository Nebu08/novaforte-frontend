"use client"

import React, { useMemo, useState } from "react"

export function QuotesSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clientType: "",
    serviceType: [] as string[],
    projectDescription: "",
    deliveryDate: "",
    privacyAccepted: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // ✅ Mensaje SEO extra (sin afectar el diseño)
  const seoExtra = useMemo(() => {
    return "Solicita una cotización de impresión 3D médica, prótesis u órtesis personalizadas y desarrollo de dispositivos a medida para el sector salud en Colombia."
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleServiceTypeChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter((s) => s !== service)
        : [...prev.serviceType, service],
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")
    setSubmitted(false)

    try {
      const body = new FormData()

      // 🔹 Mapeo a lo que espera el backend
      body.append("name", formData.fullName)
      body.append("email", formData.email)
      body.append("phone", formData.phone)
      body.append("clientType", formData.clientType)
      body.append("serviceType", formData.serviceType.join(","))
      body.append("description", formData.projectDescription)
      body.append("urgency", formData.deliveryDate)
      body.append("privacyAccepted", String(formData.privacyAccepted))

      // 🔹 Adjuntamos archivos
      selectedFiles.forEach((file) => {
        body.append("files", file)
      })

      const res = await fetch("https://novaforte-backend-1.onrender.com/api/quote", {
        method: "POST",
        body,
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitted(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          clientType: "",
          serviceType: [],
          projectDescription: "",
          deliveryDate: "",
          privacyAccepted: false,
        })
        setSelectedFiles([])
      } else {
        setErrorMessage(data.message || "Hubo un problema enviando tu solicitud. Intenta de nuevo.")
      }
    } catch (error) {
      console.error(error)
      setErrorMessage("Error del servidor. Por favor intenta más tarde.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="quotes" className="py-20 md:py-28 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¡Solicitud de cotización recibida!
            </h2>
            <p className="text-lg text-muted-foreground">
              Gracias por tu envío. Revisaremos tu proyecto y te contactaremos lo antes posible con los siguientes pasos.
            </p>

            {/* Refuerzo confianza */}
            <p className="mt-4 text-sm text-muted-foreground">
              Nota: La información y archivos compartidos se gestionan bajo criterios de confidencialidad y control de calidad.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="quotes" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Solicitar cotización</h2>
          <p className="section-subtitle">
            Describe tu proyecto y, si tienes, sube tus archivos 3D. Te enviaremos una cotización personalizada para{" "}
            <strong>impresión 3D médica</strong>, <strong>prótesis y órtesis a medida</strong> o desarrollo de soluciones
            biomédicas. Si no tienes archivo, tranquilo: te ayudamos con el diseño.
          </p>

          {/* ✅ SEO extra */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            {seoExtra}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  placeholder="Ej: correo@empresa.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Phone and Client Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="tel"
                  placeholder="Ej: +57 300 000 0000"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Recomendado para responder más rápido.
                </p>
              </div>

              <div>
                <label htmlFor="clientType" className="block text-sm font-medium text-foreground mb-2">
                  Tipo de cliente <span className="text-red-500">*</span>
                </label>
                <select
                  id="clientType"
                  name="clientType"
                  value={formData.clientType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona…</option>
                  <option value="healthcare-professional">Profesional de la salud</option>
                  <option value="clinic-hospital">Clínica / Hospital</option>
                  <option value="company">Compañía</option>
                  <option value="individual">Particular</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Tipo de servicio
              </label>
              <div className="space-y-2">
                {[
                  { value: "3d-printing", label: "Impresión 3D (biomédica / técnica)" },
                  { value: "prostheses-orthoses", label: "Prótesis / Órtesis personalizadas" },
                  { value: "spare-parts", label: "Repuesto o accesorio específico" },
                  { value: "custom-development", label: "Desarrollo personalizado (dispositivo / prototipo)" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.serviceType.includes(option.value)}
                      onChange={() => handleServiceTypeChange(option.value)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Puedes seleccionar más de una opción.
              </p>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-2">
                Descripción del proyecto <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Incluye: objetivo, medidas aproximadas, material deseado, uso (clínico/rehabilitación), y cualquier referencia."
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Entre más detalles, más precisa será la cotización.
              </p>
            </div>

            {/* Delivery Date */}
            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-foreground mb-2">
                Fecha límite / urgencia (opcional)
              </label>
              <input
                id="deliveryDate"
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Sube tus archivos 3D (opcional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  name="files"
                  multiple
                  accept=".obj,.stl,.glb,.gltf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <p className="text-sm text-muted-foreground mb-1">
                    Haz clic para subir o arrastra y suelta tus archivos aquí
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Formatos: .obj, .stl, .glb, .gltf (tamaño máximo recomendado: 50MB por archivo)
                  </p>
                </label>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Archivos seleccionados:
                  </p>
                  <ul className="space-y-1">
                    {selectedFiles.map((file, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                required
                className="w-4 h-4 rounded border-border mt-1"
              />
              <label className="text-sm text-muted-foreground">
                Acepto la política de privacidad y el tratamiento de datos{" "}
                <span className="text-red-500">*</span>
                <span className="block mt-1 text-xs">
                  La información enviada se usa únicamente para responder tu solicitud y gestionar la cotización.
                </span>
              </label>
            </div>

            {/* Error message */}
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.privacyAccepted || loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-4"
            >
              {loading ? "Enviando..." : "Solicitar cotización"}
            </button>

            {/* Confianza / ética */}
            <p className="text-xs text-muted-foreground text-center">
              Nota: No envíes información sensible o identificable de pacientes a través de este formulario.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
