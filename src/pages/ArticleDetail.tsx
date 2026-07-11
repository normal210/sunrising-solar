import { useParams, Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import LangToggle from "@/components/LangToggle";
import { articleTranslations, categoryTranslations, silI18n } from "@/data/silI18n";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Calendar, User, Tag, ArrowLeft, Lightbulb, ChevronRight } from "lucide-react";

export default function ArticleDetail() {
  useScrollToTop();
  const { language } = useLanguageStore();
  const t = silI18n[language];
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));
  const translation = article ? articleTranslations[article.id] : undefined;

  if (!article) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-gray-500">{t.articleNotFound}</p>
        <Link to="/sil" className="btn-primary inline-block mt-6">
          {t.backToList}
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const title = language === "zh" ? article.title : translation?.title ?? article.title;
  const summary = language === "zh" ? article.summary : translation?.summary ?? article.summary;
  const content = language === "zh" ? article.content : translation?.content ?? article.content;
  const author = language === "zh" ? article.author : translation?.author ?? article.author;
  const category = language === "zh" ? article.category : categoryTranslations[article.category]?.en ?? article.category;
  const tags = language === "zh" ? article.tags : translation?.tags ?? article.tags;

  const parseContent = (content: string) => {
    const lines = content.split("\n").filter((l) => l.trim() !== "" || l === "");
    const blocks: { type: string; content: string; items?: string[] }[] = [];
    let currentList: string[] | null = null;

    const flushList = () => {
      if (currentList && currentList.length > 0) {
        blocks.push({ type: "ul", content: "", items: [...currentList] });
        currentList = null;
      }
    };

    for (const line of lines) {
      if (line.startsWith("## ")) {
        flushList();
        blocks.push({ type: "h2", content: line.replace("## ", "") });
      } else if (line.startsWith("### ")) {
        flushList();
        blocks.push({ type: "h3", content: line.replace("### ", "") });
      } else if (line.startsWith("- ")) {
        if (!currentList) currentList = [];
        currentList.push(line.replace("- ", ""));
      } else if (line.startsWith("**") && line.endsWith("**")) {
        flushList();
        blocks.push({ type: "bold", content: line.replace(/\*\*/g, "") });
      } else if (line.startsWith("|")) {
        // 跳过表格行
      } else if (line.trim() !== "") {
        flushList();
        blocks.push({ type: "p", content: line });
      }
    }
    flushList();
    return blocks;
  };

  const blocks = parseContent(content);

  return (
    <div>
      {/* Article Banner */}
      <div className="relative h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px] overflow-hidden">
        <img
          src={article.image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/60 to-primary-900/30" />
        <div className="absolute inset-0 flex items-end pb-6 sm:pb-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <Link
                  to="/sil"
                  className="inline-flex items-center gap-1 text-accent-300 hover:text-accent-400 text-sm sm:text-base transition-colors"
                >
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  {language === "zh" ? "SIL 研究院" : "SIL Research"}
                </Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                <span className="text-primary-300 text-sm sm:text-base">{category}</span>
              </div>
              <LangToggle variant="ghost" size="sm" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 line-clamp-3">
              {title}
            </h1>
            <p className="text-primary-200 text-sm sm:text-base md:text-lg italic line-clamp-2">
              {language === "zh" ? article.titleEn : article.title}
            </p>
          </div>
        </div>
      </div>

      {/* Article Meta */}
      <div className="py-4 sm:py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
              {t.publishedOn} {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
              {author}
            </span>
            <span className="bg-accent-50 text-accent-600 px-3 py-1 rounded-full text-sm sm:text-base font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
              {/* Summary */}
              <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 border-l-4 border-accent-500">
                <p className="text-sm sm:text-base text-accent-600 font-medium mb-2">📝 {t.summary}</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  {summary}
                </p>
              </div>

              {/* Article Body */}
              <div className="prose-content">
                {blocks.map((block, idx) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={idx}
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mt-8 sm:mt-10 mb-4 sm:mb-6 pb-2 border-b-2 border-accent-500/30"
                      >
                        {block.content}
                      </h2>
                    );
                  }
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={idx}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 mt-6 sm:mt-8 mb-3 sm:mb-4"
                      >
                        {block.content}
                      </h3>
                    );
                  }
                  if (block.type === "ul" && block.items) {
                    return (
                      <ul
                        key={idx}
                        className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-600"
                      >
                        {block.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-base sm:text-lg md:text-xl leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "bold") {
                    return (
                      <p
                        key={idx}
                        className="font-bold text-gray-700 text-base sm:text-lg md:text-xl mt-4 mb-2"
                      >
                        {block.content}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6"
                    >
                      {block.content}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-gray-600 font-medium text-sm sm:text-base flex items-center gap-1">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t.tags}：
                  </span>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-accent-100 hover:text-accent-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Back Button */}
            <div className="text-center mt-8 sm:mt-10">
              <Link to="/sil" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.backToList}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
              <div>
                <p className="section-subtitle">{language === "zh" ? "相关文章" : "Related Articles"}</p>
                <h2 className="section-title">{t.relatedArticles}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {relatedArticles.map((art) => (
                <ArticleCard key={art.id} article={art} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SIL Brand Footer */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-accent-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                Solar Intelligence Lab
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                {language === "zh" ? "SIL 研究院" : "SIL Research"}
              </p>
            </div>
          </div>
          <p className="text-primary-200 text-base sm:text-lg md:text-xl italic">
            {t.brandSlogan}
          </p>
        </div>
      </section>
    </div>
  );
}
