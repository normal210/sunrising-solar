import { useParams, Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { CheckCircle } from "lucide-react";
import { products } from "@/data/products";

export default function ProductDetail() {
  useScrollToTop();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <p className="text-gray-400 text-base sm:text-lg md:text-2xl">产品未找到</p>
        <Link to="/products" className="btn-primary mt-4 inline-flex">
          返回产品中心
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b py-2 sm:py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500">
            <Link to="/" className="hover:text-primary-500">首页</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary-500">产品中心</Link>
            <span>/</span>
            <span className="text-primary-500 line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-50 text-accent-600 text-sm sm:text-base md:text-lg rounded-md font-medium mb-3 sm:mb-4">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">
                {product.name}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                {product.description}
              </p>
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">产品特点</h3>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-base sm:text-lg md:text-xl">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6 sm:mt-8">
                <Link to="/contact" className="btn-accent">
                  咨询详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
