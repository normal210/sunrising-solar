import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">旭日扬光光伏科技</h3>
            <p className="text-primary-200 text-lg leading-relaxed">
              专注于光伏发电系统的研发、设计、销售、安装和服务为一体的专业化企业
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "首页" },
                { path: "/about", label: "公司简介" },
                { path: "/products", label: "产品中心" },
                { path: "/cases", label: "工程案例" },
                { path: "/contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-accent-400 transition-colors text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-lg text-primary-200">
                <MapPin className="w-6 h-6 mt-1 shrink-0" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3 text-lg text-primary-200">
                <Phone className="w-6 h-6 shrink-0" />
                <span>{company.phone}</span>
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex items-center gap-3 text-lg text-primary-200">
                  <Mail className="w-6 h-6 shrink-0" />
                  <span>{email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-8 pt-6 text-center text-primary-300 text-lg">
          © {new Date().getFullYear()} {company.name} 版权所有
        </div>
      </div>
    </footer>
  );
}
