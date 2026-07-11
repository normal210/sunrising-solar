import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { ProjectCase } from "@/data/cases";
import { useTranslation } from "@/store/useLanguageStore";
import { caseTranslations } from "@/data/contentI18n";

export default function CaseCard({ caseItem }: { caseItem: ProjectCase }) {
  const { language } = useTranslation();
  const translation = caseTranslations[caseItem.id];

  const title = language === "zh" ? caseItem.title : translation?.title ?? caseItem.title;

  return (
    <Link to={`/cases/${caseItem.id}`} className="card group block">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={caseItem.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-400">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{caseItem.date}</span>
        </div>
      </div>
    </Link>
  );
}
