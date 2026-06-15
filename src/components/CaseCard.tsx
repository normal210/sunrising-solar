import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { ProjectCase } from "@/data/cases";

export default function CaseCard({ caseItem }: { caseItem: ProjectCase }) {
  return (
    <Link to={`/cases/${caseItem.id}`} className="card group block">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-3 line-clamp-2">
          {caseItem.title}
        </h3>
        <div className="flex items-center gap-2 text-lg text-gray-400">
          <Calendar className="w-5 h-5" />
          <span>{caseItem.date}</span>
        </div>
      </div>
    </Link>
  );
}
