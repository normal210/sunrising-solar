import { useScrollToTop } from "@/hooks/useScrollToTop";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { useTranslation } from "@/store/useLanguageStore";
import { companyTranslations } from "@/data/contentI18n";

export default function Contact() {
  useScrollToTop();
  const { t, language } = useTranslation();

  const address = language === "zh" ? company.address : companyTranslations.address;

  return (
    <div>
      {/* Page Banner */}
      <div className="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contact%20us%20business%20communication%2C%20modern%20office%20building%2C%20professional%20corporate&image_size=landscape_16_9"
          alt={t.contact.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-1 sm:mb-2 md:mb-3">{t.contact.subtitle}</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">{t.contact.title}</h1>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div>
              <p className="section-subtitle">{t.contact.subtitle}</p>
              <h2 className="section-title mb-4 sm:mb-6">{t.contact.getInTouch}</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">{t.contact.companyAddress}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">{t.contact.serviceHotline}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{company.phone}</p>
                  </div>
                </div>
                {company.emails.map((email) => (
                  <div key={email} className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">{t.contact.businessEmail}</h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg">{email}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">{t.common.qq}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{company.qq}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Note */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4 sm:mb-6 md:mb-8">{t.contact.contactUs}</h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                {t.contact.contactNote}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={`mailto:${company.emails[0]}`} className="btn-primary text-center">
                  {t.contact.sendEmail}
                </a>
                <a href={`tel:${company.phone}`} className="btn-secondary text-center">
                  {t.contact.callUs}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
