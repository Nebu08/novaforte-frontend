import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  return (
    <footer className="w-full bg-dark-900 text-gray-300 border-t border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-space-sm">
          <Link href="/" className="inline-block focus:outline-none">
            <Image
              src="/images/logo.png"
              alt="Novaforte sas logo"
              width={140}
              height={36}
              className="object-contain h-9 w-auto invert"
            />
          </Link>
          <p className="text-text-sm max-w-sm text-gray-400 mt-space-2xs">
            {t("motto")}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-space-sm">
          <h3 className="text-text-md font-bold text-white tracking-wide">
            {t("linksTitle")}
          </h3>
          <nav className="flex flex-col gap-space-2xs text-text-sm">
            <Link href="/" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("home")}
            </Link>
            <Link href="/humans" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("humans")}
            </Link>
            <Link href="/biomedica" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("biomedical")}
            </Link>
            <Link href="/vet" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("vet")}
            </Link>
            <Link href="/academy" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("academy")}
            </Link>
            <Link href="/nosotros" className="hover:text-primary-500 transition-colors duration-200">
              {tHeader("about")}
            </Link>
          </nav>
        </div>

        {/* Contact Info Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-space-sm">
          <h3 className="text-text-md font-bold text-white tracking-wide">
            {t("contactTitle")}
          </h3>
          <div className="flex flex-col gap-space-2xs text-text-sm text-gray-400">
            <p className="text-white font-semibold">{t("colombia")}</p>
            <p>{t("address")}</p>
            <a
              href={`mailto:${t("email")}`}
              className="hover:text-primary-500 transition-colors duration-200 text-primary-500 font-medium"
            >
              {t("email")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black/40 py-space-md border-t border-gray-800/40">
        <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-text-xs text-gray-200">
          <p>{t("rights")}</p>
          <div className="flex items-center gap-space-md">
            <a
              href="#"
              className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
            >
              {t("legal")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
