import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "首页" },
  { path: "/about", label: "公司简介" },
  { path: "/products", label: "产品中心" },
  { path: "/cases", label: "工程案例" },
  { path: "/contact", label: "联系我们" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="container mx-auto flex items-center justify-between h-28 md:h-32 px-4">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="./logo.png"
              alt="南京旭日扬光光伏科技有限公司"
              className="h-24 md:h-28 w-auto object-contain"
            />
            <div className="text-xl md:text-2xl font-bold text-primary-500 whitespace-nowrap">
              南京旭日扬光光伏科技有限公司
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-lg text-2xl font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
            <span className="text-lg font-bold text-primary-500">导航菜单</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
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
      <div className="h-28 md:h-32" />
    </>
  );
}
