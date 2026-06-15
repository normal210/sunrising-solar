import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.id}`} className="card group block">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1.5 bg-accent-50 text-accent-600 text-lg rounded-md font-medium mb-3">
          {product.category}
        </span>
        <h3 className="text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors mb-3">
          {product.name}
        </h3>
        <p className="text-lg text-gray-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </Link>
  );
}
