"use client"

import React, { useState } from "react"

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

      // 🔹 Aquí mapeamos los nombres del front a los nombres que espera el backend
      body.append("name", formData.fullName)
      body.append("email", formData.email)
      body.append("phone", formData.phone)
      body.append("clientType", formData.clientType)
      body.append("serviceType", formData.serviceType.join(","))
      body.append("description", formData.projectDescription)
      body.append("urgency", formData.deliveryDate)
      body.append("privacyAccepted", String(formData.privacyAccepted))

      // 🔹 Adjuntamos los archivos .obj / .stl
      selectedFiles.forEach((file) => {
        body.append("files", file)
      })

      const res = await fetch("http://localhost:4000/api/quote", {
        method: "POST",
        body,
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitted(true)
        // limpiamos formulario
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
        setErrorMessage(data.message || "There was a problem sending your request.")
      }
    } catch (error) {
      console.error(error)
      setErrorMessage("Server error. Please try again later.")
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
              ¡Cotización Recibida!
            </h2>
            <p className="text-lg text-muted-foreground">
              Gracias por tu envío. Nuestro equipo revisará tu proyecto y se pondrá en contacto contigo lo antes posible.
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
            Describe tu proyecto y sube tus archivos 3D. Te enviaremos una cotización personalizada de impresión 3D.
            Si no tienes archivo, tranquilo. Te ayudaremos a crear el diseño que necesitas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Correo *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Phone and Client Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Cliente *
                </label>
                <select
                  name="clientType"
                  value={formData.clientType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select...</option>
                  <option value="healthcare-professional">Profesional de la salud</option>
                  <option value="clinic-hospital">Clinica / Hospital</option>
                  <option value="company">Compañia</option>
                  <option value="individual">Independiente</option>
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
                  { value: "3d-printing", label: "Impresión 3D" },
                  { value: "prostheses-orthoses", label: "Prostesis / Ortesis" },
                  { value: "spare-parts", label: "Pieza de repuesto o accesorio específico" },
                  { value: "custom-development", label: "Desarrollo personalizado" },
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
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Descripción del producto *
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Delivery Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Fecha
              </label>
              <input
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
                Sube tus archivos (.obj, .stl) (opcional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  name="files"                // 🔹 importante para Multer
                  multiple
                  accept=".obj,.stl"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <p className="text-sm text-muted-foreground mb-1">
                    Click para subrir o arrastra y suelta tus archivos aquí
                  </p>
                  <p className="text-xs text-muted-foreground">
                    .obj, .stl files (Tamaño maximo del archivo: 50MB)
                  </p>
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Seleciona Archivos:
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
                I accept the privacy policy and data processing terms *
              </label>
            </div>

            {/* Error message */}
            {errorMessage && (
              <p className="text-sm text-red-500">
                {errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.privacyAccepted || loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-4"
            >
              {loading ? "Enviando..." : "Solicitar cotización"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
