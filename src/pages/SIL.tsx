import { useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import ArticleCard from "@/components/ArticleCard";
import LangToggle from "@/components/LangToggle";
import { articles, silCategories } from "@/data/articles";
import { categoryTranslations, silI18n } from "@/data/silI18n";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Lightbulb, Globe2 } from "lucide-react";

export default function SIL() {
  useScrollToTop();
  const { language } = useLanguageStore();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const t = silI18n[language];

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  const getCatName = (catName: string) => {
    return categoryTranslations[catName]?.[language] ?? catName;
  };

  return (
    <div>
      {/* SIL Brand Banner */}
      <div className="relative h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-accent-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-primary-400 blur-3xl" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-5">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
                <Lightbulb className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-accent-300 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-medium">
                  Solar Intelligence Lab
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {language === "zh" ? "SIL 研究院" : "SIL Research"}
                </h1>
              </div>
            </div>
            <p className="text-primary-200 text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic mb-2">
              {t.brandSlogan}
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-300 text-sm sm:text-base md:text-lg">
              <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.brandTagline}</span>
            </div>
            <div className="mt-4 flex justify-center">
              <LangToggle variant="outline" size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-4 sm:py-6 md:py-8 bg-white border-b border-gray-100 sticky top-20 md:top-28 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-200 ${
                activeCategory === null
                  ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.allArticles}
            </button>
            {silCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-200 ${
                  activeCategory === cat.name
                    ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {getCatName(cat.name)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">{language === "zh" ? "专业文章" : "Research Articles"}</p>
              <h2 className="section-title">{t.researchArticles}</h2>
            </div>
            <span className="text-sm sm:text-base text-gray-500">
              {t.totalArticles} <span className="text-accent-500 font-bold">{filteredArticles.length}</span> {t.articlesUnit}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">{language === "zh" ? "暂无该分类的文章" : "No articles in this category"}</p>
            </div>
          )}
        </div>
      </section>

      {/* SIL Introduction */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full mb-4 sm:mb-6">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
              <span className="text-accent-600 text-sm sm:text-base font-medium">{t.aboutSIL}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-4 sm:mb-6">
              {t.aboutSILBottom}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
              {t.silIntro}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.silIntro2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
