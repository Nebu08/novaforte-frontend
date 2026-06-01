"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const t = useTranslations("Humans.modal");
  const router = useRouter();
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  
  // Validation error states
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields
    const newErrors: { [key: string]: boolean } = {
      name: !name.trim(),
      email: !email.trim() || !/\S+@\S+\.\S+/.test(email),
      institution: !institution.trim(),
      role: !role.trim(),
      phone: !phone.trim()
    };

    setErrors(newErrors);

    // If any errors exist, cancel submit
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
          role,
          phone,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to register lead");
      }

      // Trigger physical download of PDF
      const link = document.createElement("a");
      link.href = "/docs/portafolio-novaforte.pdf";
      link.setAttribute("download", "portafolio-novaforte.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal and redirect to thank you page
      onClose();
      router.push("/gracias");
    } catch (err) {
      console.error("Error submitting lead:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-space-md border-b border-gray-100 dark:border-gray-850">
          <h3 className="text-heading-xs text-dark-900 dark:text-white font-bold leading-tight">
            {t("title")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-space-3xs rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-space-lg flex flex-col gap-space-sm">
          <p className="text-text-sm text-gray-500 dark:text-gray-400 mb-space-3xs leading-relaxed">
            {t("subtitle")}
          </p>

          {/* Field 1: Name */}
          <div className="flex flex-col gap-space-3xs">
            <label className="text-text-xs font-semibold text-dark-800 dark:text-gray-300">
              {t("fieldName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("placeholderName")}
              className={`w-full px-space-xs py-space-2xs text-text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-white dark:bg-dark-800 text-dark-900 dark:text-white ${
                errors.name ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 dark:border-gray-700"
              }`}
            />
          </div>

          {/* Field 2: Email */}
          <div className="flex flex-col gap-space-3xs">
            <label className="text-text-xs font-semibold text-dark-800 dark:text-gray-300">
              {t("fieldEmail")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholderEmail")}
              className={`w-full px-space-xs py-space-2xs text-text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-white dark:bg-dark-800 text-dark-900 dark:text-white ${
                errors.email ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 dark:border-gray-700"
              }`}
            />
          </div>

          {/* Field 3: Institution */}
          <div className="flex flex-col gap-space-3xs">
            <label className="text-text-xs font-semibold text-dark-800 dark:text-gray-300">
              {t("fieldInstitution")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder={t("placeholderInstitution")}
              className={`w-full px-space-xs py-space-2xs text-text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-white dark:bg-dark-800 text-dark-900 dark:text-white ${
                errors.institution ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 dark:border-gray-700"
              }`}
            />
          </div>

          {/* Field 4: Role */}
          <div className="flex flex-col gap-space-3xs">
            <label className="text-text-xs font-semibold text-dark-800 dark:text-gray-300">
              {t("fieldRole")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder={t("placeholderRole")}
              className={`w-full px-space-xs py-space-2xs text-text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-white dark:bg-dark-800 text-dark-900 dark:text-white ${
                errors.role ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 dark:border-gray-700"
              }`}
            />
          </div>

          {/* Field 5: Phone */}
          <div className="flex flex-col gap-space-3xs">
            <label className="text-text-xs font-semibold text-dark-800 dark:text-gray-300">
              {t("fieldPhone")} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t("placeholderPhone")}
              className={`w-full px-space-xs py-space-2xs text-text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-white dark:bg-dark-800 text-dark-900 dark:text-white ${
                errors.phone ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 dark:border-gray-700"
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-space-md py-space-sm bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-md shadow-md transition-colors duration-200 flex items-center justify-center gap-space-2xs disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Cargando...</span>
              </>
            ) : (
              <span>{t("submit")}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
