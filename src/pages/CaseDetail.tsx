import { useParams, Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { cases } from "@/data/cases";
import { useTranslation } from "@/store/useLanguageStore";
import { caseTranslations, caseCategoryTranslations } from "@/data/contentI18n";

export default function CaseDetail() {
  useScrollToTop();
  const { id } = useParams();
  const { t, language } = useTranslation();
  const caseItem = cases.find((c) => c.id === Number(id));

  if (!caseItem) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <p className="text-gray-400 text-base sm:text-lg md:text-2xl">{t.case.notFound}</p>
        <Link to="/cases" className="btn-primary mt-4 inline-flex">
          {t.case.backToList}
        </Link>
      </div>
    );
  }

  const translation = caseTranslations[caseItem.id];
  const title = language === "zh" ? caseItem.title : translation?.title ?? caseItem.title;
  const description = language === "zh" ? caseItem.description : translation?.description ?? caseItem.description;
  const category = language === "zh" ? caseItem.category : caseCategoryTranslations[caseItem.category] ?? caseItem.category;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b py-2 sm:py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500">
            <Link to="/" className="hover:text-primary-500">{t.nav.home}</Link>
            <span>/</span>
            <Link to="/cases" className="hover:text-primary-500">{t.nav.cases}</Link>
            <span>/</span>
            <span className="text-primary-500 line-clamp-1">{title}</span>
          </div>
        </div>
      </div>

      {/* Case Detail */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 sm:mb-8">
              <img
                src={caseItem.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4 sm:mb-6">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>{caseItem.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>{category}</span>
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                {description}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-500 hover:text-accent-500 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                {t.case.backToList}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
