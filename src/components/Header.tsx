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
    { href: "/nosotros", label: t("about") },
    { href: "/contacto", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg h-[80px] flex items-center justify-between">
        {/* Brand Logo — cropped to show only artwork region from the square image */}
        <Link href="/" className="flex items-center focus:outline-none group">
          <div
            className="relative overflow-hidden transition-opacity duration-200 group-hover:opacity-80"
            style={{ width: 260, height: 60 }}
          >
            <Image
              src="/images/logo-transparent.png"
              alt="Novaforte Biomedical Engineering"
              fill
              className="object-cover"
              style={{ objectPosition: "center 48%" }}
              sizes="260px"
              priority
            />
          </div>
        </Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-text-sm font-semibold transition-colors duration-200 hover:text-primary-500 py-space-2xs border-b-2 ${
                pathname === link.href
                  ? "border-primary-500 text-primary-500"
                  : "border-transparent text-dark-800 dark:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-space-sm">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-space-3xs px-space-xs py-space-2xs text-text-sm font-bold uppercase text-dark-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200"
            aria-label={t("ariaLang")}
          >
            <span>{currentLocale}</span>
            <span className="text-text-2xs text-gray-400">▼</span>
          </button>

          {/* CTA Contact Button */}
          <Link
            href="/contacto"
            className="px-space-md py-space-2xs bg-primary-600 hover:bg-primary-500 text-white text-text-sm font-semibold rounded-md transition-colors duration-200 shadow-sm"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Actions Menu Trigger */}
        <div className="flex items-center lg:hidden gap-space-xs">
          {/* Language Toggle for Mobile */}
          <button
            onClick={toggleLocale}
            className="flex items-center px-space-2xs py-space-3xs text-text-xs font-bold uppercase text-dark-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md"
            aria-label={t("ariaLang")}
          >
            {currentLocale}
          </button>

          {/* Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-space-2xs text-dark-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md transition-colors"
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
        <div className="lg:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-dark-900 transition-all duration-300">
          <nav className="flex flex-col p-space-md gap-space-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-text-md font-semibold py-space-2xs px-space-xs rounded-md transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-500"
                    : "text-dark-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-space-xs w-full text-center py-space-xs bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm"
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
