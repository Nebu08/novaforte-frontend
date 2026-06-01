"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { COMPANY_INFO, MAP_CONFIG } from "@/lib/site-config";

export default function ContactoPage() {
  const t = useTranslations("Contact");
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Validation & UI states
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let isError = false;
    
    if (field === "name") isError = !value.trim();
    if (field === "email") isError = !value.trim() || !/\S+@\S+\.\S+/.test(value);
    if (field === "phone") isError = !value.trim() || value.trim().length < 7;
    if (field === "subject") isError = !value;
    if (field === "message") isError = !value.trim() || value.trim().length < 10;

    setErrors((prev) => ({ ...prev, [field]: isError }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields
    const newErrors: { [key: string]: boolean } = {
      name: !name.trim(),
      email: !email.trim() || !/\S+@\S+\.\S+/.test(email),
      phone: !phone.trim() || phone.trim().length < 7,
      subject: !subject,
      message: !message.trim() || message.trim().length < 10
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    // If there are errors, stop submit
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "https://novaforte-backend-1.onrender.com";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit contact request");
      }

      router.push("/gracias");
    } catch (err) {
      console.error("Error submitting contact request:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f7f5f4] dark:bg-dark-900 transition-colors duration-300">
      
      {/* ══════════════════════════════════════════════════
          HERO — Sección Asimétrica y Técnica
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-dark-900 py-16 sm:py-24">
        {/* Cuadrícula técnica de fondo */}
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Barra superior de acento Burdeos */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-700 to-transparent" />
        
        {/* Texto gigante de marca traslúcido */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className="text-[clamp(6rem,18vw,16rem)] font-black leading-none tracking-tighter uppercase text-white/[0.015] whitespace-nowrap"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            CONTACTO
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full text-center flex flex-col items-center gap-4">
          {/* Indicador de localización sutil */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
              {t("supportLocal")}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mt-2"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {t("title")}
          </h1>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed mt-1">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTENIDO — Layout en 2 Columnas de Alta Gama
          ══════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA 1: Tarjetas de Canales y Consola de Mapa */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                ─── {t("info.title")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                Canales de Atención
              </h2>
            </div>

            {/* Lista de Tarjetas Estilizadas */}
            <div className="flex flex-col gap-4">
              
              {/* Tarjeta Dirección */}
              <div className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200/60 dark:border-gray-700/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-500/30">
                <div className="h-12 w-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dirección Física</span>
                  <p className="text-sm font-semibold text-dark-800 dark:text-gray-200 leading-snug">
                    {COMPANY_INFO.fullAddress}
                  </p>
                </div>
              </div>

              {/* Tarjeta Email */}
              <div className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200/60 dark:border-gray-700/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-500/30">
                <div className="h-12 w-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo Electrónico</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-dark-800 dark:text-gray-200 hover:text-primary-500 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Tarjeta Teléfono */}
              <div className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200/60 dark:border-gray-700/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-500/30">
                <div className="h-12 w-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Atención Telefónica</span>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="text-sm font-semibold text-dark-800 dark:text-gray-200 hover:text-primary-500 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, "")}`} className="text-sm font-semibold text-dark-800 dark:text-gray-200 hover:text-primary-500 transition-colors">
                      {COMPANY_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* WhatsApp Premium CTA */}
            <div className="rounded-2xl p-5 bg-green-500/5 border border-green-500/20 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest">
                  Soporte Inmediato Activo
                </span>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20tengo%20una%20consulta%20general%20sobre%20Novaforte`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/25 transition-all duration-300 text-center flex items-center justify-center gap-3 text-sm tracking-wide"
              >
                {/* WhatsApp Icon */}
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846l.385.23c1.562.93 3.451 1.42 5.378 1.422 5.735 0 10.4-4.664 10.404-10.399.002-2.778-1.077-5.39-3.038-7.353C17.756 1.09 15.147.01 12.007.01 6.269.01 1.608 4.67 1.604 10.4c-.001 1.942.506 3.841 1.47 5.514l.256.442-.998 3.645 3.732-.98z"/>
                </svg>
                <span>{t("info.whatsapp")}</span>
              </a>
            </div>

            {/* Consola de Ubicación en Google Maps */}
            <div className="flex flex-col">
              {/* Encabezado Técnico del Mapa */}
              <div className="bg-white dark:bg-dark-950 px-4 py-3 border border-b-0 border-gray-200 dark:border-gray-800 rounded-t-2xl flex items-center justify-between text-[10px] font-mono tracking-wider text-gray-500 dark:text-gray-400 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span>GPS SYSTEM: ACTIVE</span>
                </div>
                <div className="hidden sm:block">COORD: {MAP_CONFIG.lat}°N, {Math.abs(MAP_CONFIG.lng)}°W</div>
                <div>ZOOM: {MAP_CONFIG.zoom}X</div>
              </div>
              
              {/* Mapa Iframe */}
              <div className="relative w-full rounded-b-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-dark-900" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src={MAP_CONFIG.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", filter: "contrast(1.1) grayscale(0.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ubicación — ${COMPANY_INFO.name}`}
                />
              </div>
            </div>

          </div>

          {/* COLUMNA 2: Formulario Premium (Glassmorphism + Bordes Retroiluminados) */}
          <div className="relative overflow-hidden bg-white dark:bg-dark-800 border border-gray-200/80 dark:border-gray-700/60 rounded-3xl p-6 sm:p-10 shadow-xl">
            {/* Brillo de ambiente decorativo interno */}
            <div aria-hidden="true" className="absolute -top-16 -left-16 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative flex flex-col gap-8 w-full">
              
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                  ─── {t("form.title")}
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Enviar Consulta Corporativa
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                
                {/* Nombre Completo */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{t("form.fieldName")}</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    placeholder={t("form.placeholderName")}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                      touched.name && errors.name
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                        : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      ⚠️ {t("form.errors.nameRequired")}
                    </span>
                  )}
                </div>

                {/* Fila Doble: Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Correo Electrónico */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                      <span>{t("form.fieldEmail")}</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      placeholder={t("form.placeholderEmail")}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                        touched.email && errors.email
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                        ⚠️ {t("form.errors.emailInvalid")}
                      </span>
                    )}
                  </div>

                  {/* Número de Contacto */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                      <span>{t("form.fieldPhone")}</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={(e) => handleBlur("phone", e.target.value)}
                      placeholder={t("form.placeholderPhone")}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                        touched.phone && errors.phone
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                        ⚠️ {t("form.errors.phoneInvalid")}
                      </span>
                    )}
                  </div>

                </div>

                {/* Asunto de la Consulta */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{t("form.fieldSubject")}</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onBlur={(e) => handleBlur("subject", e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white appearance-none focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                        touched.subject && errors.subject
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                      }`}
                    >
                      <option value="" className="dark:bg-dark-800">{t("form.placeholderSubject")}</option>
                      <option value="support" className="dark:bg-dark-800">{t("form.subjectOptions.support")}</option>
                      <option value="sales" className="dark:bg-dark-800">{t("form.subjectOptions.sales")}</option>
                      <option value="admin" className="dark:bg-dark-800">{t("form.subjectOptions.admin")}</option>
                      <option value="other" className="dark:bg-dark-800">{t("form.subjectOptions.other")}</option>
                    </select>
                    {/* Select custom arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {touched.subject && errors.subject && (
                    <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      ⚠️ {t("form.errors.subjectRequired")}
                    </span>
                  )}
                </div>

                {/* Mensaje / Descripción */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{t("form.fieldMessage")}</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    placeholder={t("form.placeholderMessage")}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white resize-none focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                      touched.message && errors.message
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                        : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      ⚠️ {t("form.errors.messageInvalid")}
                    </span>
                  )}
                </div>

                {/* Botón de Envío Premium */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/15 hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:from-gray-400 disabled:to-gray-500 disabled:shadow-none disabled:cursor-not-allowed group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{t("form.errors.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("form.submit")}</span>
                      <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
