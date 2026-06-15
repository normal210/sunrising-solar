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
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-400 text-2xl">产品未找到</p>
        <Link to="/products" className="btn-primary mt-4 inline-flex">
          返回产品中心
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
            <Link to="/products" className="hover:text-primary-500">产品中心</Link>
            <span>/</span>
            <span className="text-primary-500">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-2 bg-accent-50 text-accent-600 text-lg rounded-md font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-500 mb-6">
                {product.name}
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                {product.description}
              </p>
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-primary-500 mb-6">产品特点</h3>
                  <ul className="space-y-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600 text-xl">
                        <CheckCircle className="w-8 h-8 text-accent-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-8">
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
