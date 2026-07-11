import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useTranslation } from "@/store/useLanguageStore";
import { productTranslations, categoryTranslations } from "@/data/contentI18n";

export default function ProductCard({ product }: { product: Product }) {
  const { language } = useTranslation();
  const translation = productTranslations[product.id];

  const name = language === "zh" ? product.name : translation?.name ?? product.name;
  const category = language === "zh" ? product.category : translation?.category ?? categoryTranslations[product.category] ?? product.category;
  const description = language === "zh" ? product.description : translation?.description ?? product.description;

  return (
    <Link to={`/products/${product.id}`} className="card group block">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6">
        <span className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 bg-accent-50 text-accent-600 text-sm sm:text-base md:text-lg rounded-md font-medium mb-2 sm:mb-3">
          {category}
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-2 sm:mb-3">
          {name}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
