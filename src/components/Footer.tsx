import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { useTranslation } from "@/store/useLanguageStore";
import { companyTranslations } from "@/data/contentI18n";

export default function Footer() {
  const { t, language } = useTranslation();

  const quickLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/products", label: t.nav.products },
    { path: "/cases", label: t.nav.cases },
    { path: "/contact", label: t.nav.contact },
  ];

  const address = language === "zh" ? company.address : companyTranslations.address;
  const copyright = language === "zh"
    ? `© ${new Date().getFullYear()} ${t.company.name} ${t.footer.copyright}`
    : `© ${new Date().getFullYear()} ${t.company.name}. ${t.footer.copyright}`;

  return (
    <footer className="bg-primary-500 text-white">
      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{t.footer.companyName}</h3>
            <p className="text-primary-200 text-sm md:text-lg leading-relaxed">
              {t.footer.companySlogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-accent-400 transition-colors text-sm md:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3 text-sm md:text-lg text-primary-200">
                <MapPin className="w-4 h-4 md:w-6 md:h-6 mt-1 shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg text-primary-200">
                <Phone className="w-4 h-4 md:w-6 md:h-6 shrink-0" />
                <span>{company.phone}</span>
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex items-center gap-2 md:gap-3 text-sm md:text-lg text-primary-200">
                  <Mail className="w-4 h-4 md:w-6 md:h-6 shrink-0" />
                  <span>{email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-primary-300 text-xs sm:text-sm md:text-lg">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
