import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Lightbulb, TrendingUp, BookOpen, Zap } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import CaseCard from "@/components/CaseCard";
import ArticleCard from "@/components/ArticleCard";
import LatestNewsCarousel from "@/components/LatestNewsCarousel";
import LangToggle from "@/components/LangToggle";
import { products } from "@/data/products";
import { cases } from "@/data/cases";
import { articles } from "@/data/articles";
import { company } from "@/data/company";
import { silI18n } from "@/data/silI18n";
import { useTranslation } from "@/store/useLanguageStore";
import { companyTranslations } from "@/data/contentI18n";

export default function Home() {
  const { t, language } = useTranslation();
  const silT = silI18n[language];

  const companyName = language === "zh" ? company.name : companyTranslations.name;
  const companyIntro = language === "zh" ? company.introduction : companyTranslations.introduction;

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Category Navigation */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <CategoryNav />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">{t.home.productsSubtitle}</p>
              <h2 className="section-title">{t.home.productsTitle}</h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              {t.common.more} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-center md:hidden">
            <Link to="/products" className="btn-primary">
              {t.home.viewAllProducts}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">{t.home.aboutSubtitle}</p>
              <h2 className="section-title">{t.home.aboutTitle}</h2>
            </div>
            <Link
              to="/about"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              {t.common.more} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20energy%20company%20office%20building%2C%20modern%20photovoltaic%20technology%20enterprise%2C%20professional%20team&image_size=landscape_16_9"
                alt={companyName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">{companyName}</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-0 line-clamp-6">
                {companyIntro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIL Research Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-accent-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 sm:mb-8 md:mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <p className="text-accent-300 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-medium">
                    Solar Intelligence Lab
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {language === "zh" ? "SIL 研究院" : "SIL Research"}
                  </h2>
                </div>
              </div>
              <p className="text-primary-200 text-base sm:text-lg md:text-xl italic">
                {silT.brandSlogan} — {silT.brandTagline}
              </p>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
              <LangToggle variant="ghost" size="sm" />
              <Link
                to="/sil"
                className="inline-flex items-center gap-1 sm:gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base md:text-lg font-medium rounded-xl transition-all duration-200 border border-white/20"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                {silT.viewAllResearch} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* SIL Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {[
              { icon: TrendingUp, label: silT.industryInsight, desc: silT.industryInsightDesc },
              { icon: Zap, label: silT.techFrontier, desc: silT.techFrontierDesc },
              { icon: BookOpen, label: silT.policyAnalysis, desc: silT.policyAnalysisDesc },
              { icon: Lightbulb, label: silT.deepResearch, desc: silT.deepResearchDesc },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1">{item.label}</h3>
                <p className="text-primary-300 text-xs sm:text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Latest Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center md:hidden">
            <Link
              to="/sil"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20"
            >
              <BookOpen className="w-5 h-5" />
              {silT.viewAllResearch}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Carousel */}
      <LatestNewsCarousel />

      {/* Cases Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">{t.home.casesSubtitle}</p>
              <h2 className="section-title">{t.home.casesTitle}</h2>
            </div>
            <Link
              to="/cases"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              {t.common.more} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {cases.slice(0, 6).map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-center md:hidden">
            <Link to="/cases" className="btn-primary">
              {t.home.viewAllCases}
            </Link>
          </div>
        </div>
      </section>

      {/* News Banner */}
      <section className="py-4 sm:py-6 md:py-8 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="bg-accent-400 text-primary-900 px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base md:text-lg font-bold flex items-center gap-2 self-start">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> {t.home.newsLabel}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-white text-sm sm:text-base md:text-xl font-medium">{t.home.latestNotice}</span>
              <span className="text-primary-200 text-sm sm:text-base md:text-lg lg:text-xl">
                {t.home.noticeContent}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
