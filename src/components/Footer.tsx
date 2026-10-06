import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FOOTER_LINK =
  "w-fit py-1 rounded-sm hover:text-primary-500 transition-colors duration-150 ease-out-precise focus-ring";

export default function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg py-space-2xl lg:py-space-3xl grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-space-sm">
          <Link href="/" className="inline-block w-fit rounded-sm focus-ring">
            <div className="relative overflow-hidden w-[260px] h-[69px] sm:w-[340px] sm:h-[90px]">
              <Image
                src="/images/logo.svg"
                alt="Novaforte sas logo"
                fill
                className="object-cover dark:invert"
                style={{ objectPosition: "center 48%" }}
                sizes="(min-width: 640px) 340px, 260px"
              />
            </div>
          </Link>
          <p className="text-text-sm leading-relaxed max-w-sm text-gray-600 mt-space-2xs text-pretty">
            {t("motto")}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-space-sm">
          <h3 className="text-text-2xs font-bold uppercase tracking-[0.14em] text-dark-900">
            {t("linksTitle")}
          </h3>
          <nav className="flex flex-col text-text-sm text-gray-600">
            <Link href="/" className={FOOTER_LINK}>
              {tHeader("home")}
            </Link>
            <Link href="/humans" className={FOOTER_LINK}>
              {tHeader("humans")}
            </Link>
            <Link href="/biomedica" className={FOOTER_LINK}>
              {tHeader("biomedical")}
            </Link>
            <Link href="/vet" className={FOOTER_LINK}>
              {tHeader("vet")}
            </Link>
            <Link href="/academy" className={FOOTER_LINK}>
              {tHeader("academy")}
            </Link>
            <Link href="/nosotros" className={FOOTER_LINK}>
              {tHeader("about")}
            </Link>
          </nav>
        </div>

        {/* Contact Info Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-space-sm">
          <h3 className="text-text-2xs font-bold uppercase tracking-[0.14em] text-dark-900">
            {t("contactTitle")}
          </h3>
          <div className="flex flex-col gap-space-2xs text-text-sm leading-relaxed text-gray-600">
            <p className="text-dark-800 font-semibold">{t("colombia")}</p>
            <p>{t("address")}</p>
            <a
              href="https://wa.me/573238698295?text=%C2%A1Hola!%20Me%20interesan%20los%20servicios%20de%20Novaforte"
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOOTER_LINK} text-dark-800 font-medium inline-flex items-center gap-1.5 tabular-nums`}
            >
              <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 01-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 012.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.32 11.32 0 0012.04.64C5.76.64.65 5.75.65 12.03c0 2 .52 3.96 1.52 5.69L.55 23.64l6.05-1.59a11.36 11.36 0 005.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.33-8.05z" />
              </svg>
              WhatsApp: +57 323 869 8295
            </a>
            <a
              href={`mailto:${t("email")}`}
              className={`${FOOTER_LINK} text-primary-500 hover:text-primary-600 font-medium underline-offset-4 decoration-1 hover:underline`}
            >
              {t("email")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-gray-50 py-space-md border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-text-xs text-gray-600">
          <p>{t("rights")}</p>
          <div className="flex items-center gap-space-md">
            <a
              href="#"
              className="rounded-sm text-gray-600 hover:text-primary-500 transition-colors duration-150 ease-out-precise focus-ring"
            >
              {t("legal")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
