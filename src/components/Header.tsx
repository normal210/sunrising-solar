import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lightbulb } from "lucide-react";
import LangToggle from "@/components/LangToggle";
import { useTranslation } from "@/store/useLanguageStore";

export default function Header() {
  const location = useLocation();
  const { t, language } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/products", label: t.nav.products },
    { path: "/cases", label: t.nav.cases },
    { path: "/sil", label: t.nav.sil },
    { path: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20 md:h-28 px-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img
              src="./logo.png"
              alt={t.company.logoAlt}
              className="h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
            />
            <div className={`font-bold text-primary-500 whitespace-nowrap ${
              language === "en"
                ? "text-sm sm:text-base md:text-lg lg:text-xl tracking-tight"
                : "text-base sm:text-lg md:text-xl lg:text-2xl"
            }`}>
              <span className="hidden lg:inline">{t.company.name}</span>
              <span className="lg:hidden">{t.company.shortName}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 lg:px-5 xl:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-200 ${
                  language === "en"
                    ? "text-base lg:text-lg xl:text-xl"
                    : "text-lg lg:text-xl xl:text-2xl"
                } ${
                  isActive(link.path)
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 lg:ml-4">
              <LangToggle variant="default" size="sm" />
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-primary-500">
              {language === "zh" ? "导航菜单" : "Navigation"}
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-6">
            <LangToggle variant="outline" size="md" />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(link.path)
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-28" />
    </>
  );
}
