"use client";

import { useState, FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/navigation";

export default function HumansCotizarPage() {
  const t = useTranslations("Humans.form");
  const router = useRouter();
  const locale = useLocale();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [deviceType, setDeviceType] = useState("");
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
    if (field === "institution") isError = !value.trim();
    if (field === "deviceType") isError = !value;
    if (field === "message") isError = !value.trim() || value.trim().length < 10;

    setErrors((prev) => ({ ...prev, [field]: isError }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields (5 fields maximum)
    const newErrors: { [key: string]: boolean } = {
      name: !name.trim(),
      email: !email.trim() || !/\S+@\S+\.\S+/.test(email),
      institution: !institution.trim(),
      deviceType: !deviceType,
      message: !message.trim() || message.trim().length < 10
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      institution: true,
      deviceType: true,
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
          institution,
          deviceType,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit quote request");
      }

      router.push("/gracias");
    } catch (err) {
      console.error("Error submitting quote request:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f7f5f4] dark:bg-dark-900 transition-colors duration-300">
      
      {/* HERO / HEADER — Con cuadrícula e identidad clínica Burdeos */}
      <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-dark-900 py-12">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-700 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className="text-[clamp(5rem,15vw,12rem)] font-black leading-none tracking-tighter uppercase text-white/[0.015] whitespace-nowrap"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            HUMANS
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center flex flex-col items-center gap-3">
          <Link
            href="/humans"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors uppercase tracking-widest mb-2 group"
          >
            <svg className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{locale === "es" ? "Volver a División Humans" : "Back to Humans Division"}</span>
          </Link>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {t("title")}
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed mt-1">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <section className="max-w-2xl mx-auto px-6 py-12 lg:py-16 w-full flex-1 flex flex-col items-center justify-center">
        <div className="relative w-full overflow-hidden bg-white dark:bg-dark-800 border border-gray-200/80 dark:border-gray-700/60 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div aria-hidden="true" className="absolute -top-16 -left-16 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative flex flex-col gap-5 w-full">
            
            {/* Especialista Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex justify-between">
                <span>{t("fieldName")}</span>
                <span className="text-red-500 font-bold" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => handleBlur("name", e.target.value)}
                placeholder={t("placeholderName")}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-650 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                  touched.name && errors.name
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                }`}
              />
              {touched.name && errors.name && (
                <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                  ⚠️ {locale === "es" ? "El nombre del especialista es obligatorio." : "Specialist's full name is required."}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex justify-between">
                <span>{t("fieldEmail")}</span>
                <span className="text-red-500 font-bold" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                placeholder={t("placeholderEmail")}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-655 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                  touched.email && errors.email
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                }`}
              />
              {touched.email && errors.email && (
                <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                  ⚠️ {locale === "es" ? "Ingrese un correo profesional válido." : "Please enter a valid professional email."}
                </span>
              )}
            </div>

            {/* Clínica o Institución */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex justify-between">
                <span>{t("fieldInstitution")}</span>
                <span className="text-red-500 font-bold" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                aria-required="true"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                onBlur={(e) => handleBlur("institution", e.target.value)}
                placeholder={t("placeholderInstitution")}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-655 focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                  touched.institution && errors.institution
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                }`}
              />
              {touched.institution && errors.institution && (
                <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                  ⚠️ {locale === "es" ? "La institución médica es obligatoria." : "Clinic or institution is required."}
                </span>
              )}
            </div>

            {/* Tipo de Dispositivo Clínico */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex justify-between">
                <span>{t("fieldType")}</span>
                <span className="text-red-500 font-bold" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  aria-required="true"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  onBlur={(e) => handleBlur("deviceType", e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white appearance-none focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                    touched.deviceType && errors.deviceType
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                      : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                  }`}
                >
                  <option value="" className="dark:bg-dark-800">-- Seleccionar --</option>
                  <option value="guide" className="dark:bg-dark-800">{t("typeOptions.guide")}</option>
                  <option value="prosthesis" className="dark:bg-dark-800">{t("typeOptions.prosthesis")}</option>
                  <option value="orthosis" className="dark:bg-dark-800">{t("typeOptions.orthosis")}</option>
                  <option value="model" className="dark:bg-dark-800">{t("typeOptions.model")}</option>
                  <option value="other" className="dark:bg-dark-800">{t("typeOptions.other")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {touched.deviceType && errors.deviceType && (
                <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                  ⚠️ {locale === "es" ? "Seleccione un tipo de dispositivo clínico." : "Please select a clinical device type."}
                </span>
              )}
            </div>

            {/* Mensaje / Tolerancia */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex justify-between">
                <span>{t("fieldMessage")}</span>
                <span className="text-red-500 font-bold" aria-hidden="true">*</span>
              </label>
              <textarea
                aria-required="true"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={(e) => handleBlur("message", e.target.value)}
                placeholder={t("placeholderMessage")}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-900/40 border rounded-xl text-sm transition-all duration-300 text-dark-900 dark:text-white resize-none focus:outline-none focus:bg-white dark:focus:bg-dark-900 focus:ring-4 ${
                  touched.message && errors.message
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    : "border-gray-200 dark:border-gray-700/60 focus:border-primary-500 focus:ring-primary-500/10"
                }`}
              />
              {touched.message && errors.message && (
                <span className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                  ⚠️ {locale === "es" ? "Detalle el caso con al menos 10 caracteres." : "Provide case details (minimum 10 characters)."}
                </span>
              )}
            </div>

            {/* Submit */}
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
                  <span>{locale === "es" ? "Enviando solicitud..." : "Submitting request..."}</span>
                </>
              ) : (
                <>
                  <span>{t("submit")}</span>
                  <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}
