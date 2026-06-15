import { useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Products() {
  useScrollToTop();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory)
    : products;

  return (
    <div>
      {/* Page Banner */}
      <div className="relative h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20product%20showroom%2C%20photovoltaic%20panels%20and%20equipment%20display%2C%20modern%20technology&image_size=landscape_16_9"
          alt="产品中心"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-accent-400 text-lg tracking-widest mb-3">PRODUCTS</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">产品中心</h1>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full text-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === null
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              全部产品
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-2xl">
              暂无该分类下的产品
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
