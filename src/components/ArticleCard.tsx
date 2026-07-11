import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";
import type { Article } from "@/data/articles";
import { useLanguageStore } from "@/store/useLanguageStore";
import { articleTranslations, categoryTranslations } from "@/data/silI18n";

export default function ArticleCard({ article }: { article: Article }) {
  const { language } = useLanguageStore();
  const translation = articleTranslations[article.id];

  const title = language === "zh" ? article.title : translation?.title ?? article.title;
  const summary = language === "zh" ? article.summary : translation?.summary ?? article.summary;
  const author = language === "zh" ? article.author : translation?.author ?? article.author;
  const category = language === "zh" ? article.category : categoryTranslations[article.category]?.en ?? article.category;
  const tags = language === "zh" ? article.tags : translation?.tags ?? article.tags;

  return (
    <Link to={`/sil/${article.id}`} className="card group block">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={article.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-3 sm:mb-4 line-clamp-2">
          {summary}
        </p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            {author}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
