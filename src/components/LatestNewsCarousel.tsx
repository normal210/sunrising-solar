import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Zap, ArrowRight, TrendingUp, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { useLanguageStore } from "@/store/useLanguageStore";
import { articleTranslations, categoryTranslations, silI18n } from "@/data/silI18n";
import LangToggle from "@/components/LangToggle";

const techArticles = articles.filter((a) => a.category === "技术前沿").slice(0, 3);

export default function LatestNewsCarousel() {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguageStore();
  const t = silI18n[language];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % techArticles.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + techArticles.length) % techArticles.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  if (techArticles.length === 0) return null;

  const getArticleContent = (article: typeof articles[0]) => {
    const translation = articleTranslations[article.id];
    return {
      title: language === "zh" ? article.title : translation?.title ?? article.title,
      summary: language === "zh" ? article.summary : translation?.summary ?? article.summary,
      category: language === "zh" ? article.category : categoryTranslations[article.category]?.en ?? article.category,
      readMore: t.readMore,
    };
  };

  return (
    <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700 py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-primary-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/40">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-[8px] sm:text-[10px] font-bold">NEW</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent-400" />
                <p className="text-accent-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                  {t.latestUpdatesSub}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {t.latestUpdates}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LangToggle variant="ghost" size="sm" />
            <Link
              to="/sil"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm md:text-base lg:text-lg font-medium rounded-xl transition-all duration-200 border border-white/20"
            >
              {t.viewAllResearch} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary-950/30 group">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]">
            {techArticles.map((article, index) => {
              const content = getArticleContent(article);
              return (
                <Link
                  key={article.id}
                  to={`/sil/${article.id}`}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={article.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-900/30" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                          <span className="inline-block bg-accent-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-accent-500/30">
                            {content.category}
                          </span>
                          <span className="flex items-center gap-1 text-primary-200 text-xs sm:text-sm">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight line-clamp-2">
                          {content.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 line-clamp-2 mb-4 sm:mb-5 md:mb-6">
                          {content.summary}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-accent-500/30">
                            {t.readMore}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5">
            {techArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-accent-400 w-8 sm:w-10 md:w-12 shadow-lg shadow-accent-400/50"
                    : "bg-white/40 hover:bg-white/60 w-2 sm:w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile view more button */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/sil"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20"
          >
            {t.viewAllResearch} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
