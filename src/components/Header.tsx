"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeaderProps {
  currentLocale: string;
}

// Ícono de globo (reemplaza emoji 🌐 — trazo 1.75 coherente con el sistema SVG)
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
    </svg>
  );
}

export default function Header({ currentLocale }: HeaderProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    const nextLocale = currentLocale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/humans", label: t("humans") },
    { href: "/biomedica", label: t("biomedical") },
    { href: "/vet", label: t("vet") },
    { href: "/academy", label: t("academy") },
    { href: "/portafolio", label: t("portfolio") },
    { href: "/nosotros", label: t("about") },
    { href: "/contacto", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[80px] lg:h-[88px] flex items-center justify-between gap-4">

        {/* Brand Logo — versión recortada al contenido (logo-header.svg, 1379×306)
            para que el logo ocupe toda la altura disponible sin margen vacío */}
        <Link href="/" className="flex items-center group flex-shrink-0 rounded-sm focus-ring">
          <Image
            src="/images/logo-header.svg"
            alt="Novaforte Biomedical Engineering"
            width={1379}
            height={306}
            className="w-auto h-11 sm:h-12 lg:h-[52px] xl:h-16 transition-opacity duration-150 ease-out-precise group-hover:opacity-85 dark:invert"
            priority
          />
        </Link>

        {/* Desktop Navigation Links — 1 sola línea limpia, sin saltos de texto */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md whitespace-nowrap transition-colors duration-150 ease-out-precise focus-ring ${
                  isActive
                    ? "bg-primary-50 text-primary-500"
                    : "text-gray-700 hover:text-dark-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-space-sm flex-shrink-0">
          {/* Language Selector Pill */}
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 h-9 px-3 text-xs font-bold uppercase text-gray-700 border border-gray-300 rounded-full hover:border-dark-800 hover:text-dark-900 btn-press focus-ring"
            aria-label={t("ariaLang")}
          >
            <GlobeIcon className="h-4 w-4" />
            <span>{currentLocale}</span>
            <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h11l-3-3M17 17H6l3 3" />
            </svg>
          </button>

          {/* CTA Contact Button — desde xl; entre 1024 y 1279px no cabe junto
              al menú y el enlace "Contacto" cumple la misma función */}
          <Link
            href="/contacto"
            className="hidden xl:inline-flex items-center h-10 px-5 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-[0.08em] rounded-full shadow-crisp hover:shadow-lift btn-press focus-ring whitespace-nowrap"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden gap-space-xs">
          {/* Language Toggle for Mobile */}
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 h-10 px-3 text-xs font-bold uppercase text-gray-700 border border-gray-300 rounded-full btn-press focus-ring"
            aria-label={t("ariaLang")}
          >
            <GlobeIcon className="h-4 w-4" />
            <span>{currentLocale}</span>
          </button>

          {/* Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center h-11 w-11 text-gray-700 hover:bg-gray-100 rounded-md btn-press focus-ring"
            aria-label={t("ariaMenu")}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lift menu-enter">
          <nav className="flex flex-col p-4 gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center h-11 px-3 text-sm font-semibold rounded-md transition-colors duration-150 ease-out-precise focus-ring ${
                    isActive
                      ? "bg-primary-50 text-primary-500"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-space-sm w-full inline-flex items-center justify-center h-12 bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-[0.08em] rounded-full shadow-crisp btn-press focus-ring"
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
