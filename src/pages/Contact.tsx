import { useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function Contact() {
  useScrollToTop();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Page Banner */}
      <div className="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contact%20us%20business%20communication%2C%20modern%20office%20building%2C%20professional%20corporate&image_size=landscape_16_9"
          alt="联系我们"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-1 sm:mb-2 md:mb-3">CONTACT US</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">联系我们</h1>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div>
              <p className="section-subtitle">Contact Us</p>
              <h2 className="section-title mb-4 sm:mb-6">联系方式</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">公司地址</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">联系电话</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{company.phone}</p>
                  </div>
                </div>
                {company.emails.map((email) => (
                  <div key={email} className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">电子邮箱</h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg">{email}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">QQ</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{company.qq}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4 sm:mb-6 md:mb-8">在线留言</h2>
              {submitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 md:p-6 bg-green-50 text-green-700 rounded-xl text-sm sm:text-base md:text-xl">
                  感谢您的留言，我们会尽快与您联系！
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">
                    昵称
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all"
                    placeholder="请输入您的昵称"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">
                    电子邮件 *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">
                    内容
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all resize-none"
                    placeholder="请输入留言内容"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
