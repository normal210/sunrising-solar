import { useParams, Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { cases } from "@/data/cases";

export default function CaseDetail() {
  useScrollToTop();
  const { id } = useParams();
  const caseItem = cases.find((c) => c.id === Number(id));

  if (!caseItem) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-400 text-2xl">案例未找到</p>
        <Link to="/cases" className="btn-primary mt-4 inline-flex">
          返回工程案例
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 text-lg text-gray-500">
            <Link to="/" className="hover:text-primary-500">首页</Link>
            <span>/</span>
            <Link to="/cases" className="hover:text-primary-500">工程案例</Link>
            <span>/</span>
            <span className="text-primary-500 line-clamp-1">{caseItem.title}</span>
          </div>
        </div>
      </div>

      {/* Case Detail */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-500 mb-6">
              {caseItem.title}
            </h1>
            <div className="flex items-center gap-6 mb-8 text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span>{caseItem.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-6 h-6" />
                <span>{caseItem.category}</span>
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                {caseItem.description}
              </p>
            </div>
            <div className="mt-8 pt-8 border-t">
              <Link
                to="/cases"
                className="inline-flex items-center gap-3 text-xl text-primary-500 hover:text-accent-500 transition-colors font-medium"
              >
                <ArrowLeft className="w-6 h-6" />
                返回工程案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
