"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeaderProps {
  currentLocale: string;
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 dark:border-gray-800/80 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] lg:h-[80px] flex items-center justify-between gap-4">
        
        {/* Brand Logo — Proporcionado y perfectamente alineado */}
        <Link href="/" className="flex items-center focus:outline-none group flex-shrink-0">
          <div className="relative overflow-hidden transition-opacity duration-200 group-hover:opacity-90 w-[180px] h-[40px] sm:w-[210px] sm:h-[46px] lg:w-[240px] lg:h-[52px]">
            <Image
              src="/images/logo.svg"
              alt="Novaforte Biomedical Engineering"
              fill
              className="object-contain dark:invert"
              style={{ objectPosition: "left center" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links — 1 sola línea limpia, sin saltos de texto */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/60 dark:hover:bg-dark-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Language Selector Pill */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-full hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 shadow-2xs"
            aria-label={t("ariaLang")}
          >
            <span className="text-sm">🌐</span>
            <span>{currentLocale}</span>
            <span className="text-[10px] text-gray-400">▼</span>
          </button>

          {/* CTA Contact Button */}
          <Link
            href="/contacto"
            className="px-5 py-2 bg-primary-700 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden gap-2">
          {/* Language Toggle for Mobile */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold uppercase text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-full"
            aria-label={t("ariaLang")}
          >
            <span>🌐</span>
            <span>{currentLocale}</span>
          </button>

          {/* Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
            aria-label={t("ariaMenu")}
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
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-900 shadow-xl transition-all duration-300">
          <nav className="flex flex-col p-4 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
