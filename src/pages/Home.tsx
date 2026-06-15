import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import CaseCard from "@/components/CaseCard";
import { products } from "@/data/products";
import { cases } from "@/data/cases";
import { company } from "@/data/company";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Category Navigation */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <CategoryNav />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">Products</p>
              <h2 className="section-title">产品中心</h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              MORE+ <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-center md:hidden">
            <Link to="/products" className="btn-primary">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">About Us</p>
              <h2 className="section-title">公司介绍</h2>
            </div>
            <Link
              to="/about"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              MORE+ <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20energy%20company%20office%20building%2C%20modern%20photovoltaic%20technology%20enterprise%2C%20professional%20team&image_size=landscape_16_9"
                alt="公司介绍"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">{company.name}</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-0 line-clamp-6">
                {company.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
            <div>
              <p className="section-subtitle">Engineering Case</p>
              <h2 className="section-title">工程案例</h2>
            </div>
            <Link
              to="/cases"
              className="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors"
            >
              MORE+ <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {cases.slice(0, 6).map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-center md:hidden">
            <Link to="/cases" className="btn-primary">
              查看全部案例
            </Link>
          </div>
        </div>
      </section>

      {/* News Banner */}
      <section className="py-4 sm:py-6 md:py-8 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="bg-accent-400 text-primary-900 px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base md:text-lg font-bold flex items-center gap-2 self-start">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> NEW
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-white text-sm sm:text-base md:text-xl font-medium">最新公告：</span>
              <span className="text-primary-200 text-sm sm:text-base md:text-lg lg:text-xl">
                50%覆盖率！光伏建筑一体化(BIPV)将迎万亿成长，下一风口谁是王者？
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
