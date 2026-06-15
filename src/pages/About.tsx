import { useScrollToTop } from "@/hooks/useScrollToTop";
import { company } from "@/data/company";
import { Sun, Building2, Battery, Headphones } from "lucide-react";

const businessItems = [
  { icon: Sun, label: "户用光伏并网发电系统" },
  { icon: Building2, label: "工商业光伏并网发电系统" },
  { icon: Battery, label: "离网光伏发电系统" },
  { icon: Headphones, label: "项目咨询、系统设计和技术支持等服务" },
];

export default function About() {
  useScrollToTop();

  return (
    <div>
      {/* Page Banner */}
      <div className="relative h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20panel%20array%20aerial%20view%2C%20photovoltaic%20farm%20panorama%2C%20blue%20sky%20and%20green%20field&image_size=landscape_16_9"
          alt="公司简介"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-accent-400 text-lg tracking-widest mb-3">INTRODUCTION</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">公司简介</h1>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-subtitle text-center">Introduction</p>
            <h2 className="section-title text-center mb-8">公司简介</h2>
            <div className="w-16 h-1 bg-accent-400 mx-auto mb-8" />
            <p className="text-gray-600 leading-loose text-xl md:text-2xl text-center">
              {company.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Business */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="section-subtitle text-center">Main Business</p>
          <h2 className="section-title text-center mb-8">主营业务</h2>
          <div className="w-16 h-1 bg-accent-400 mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-400 transition-colors duration-300">
                  <item.icon className="w-12 h-12 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-500">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-subtitle text-center">Vision</p>
            <h2 className="section-title text-center mb-8">企业愿景</h2>
            <div className="w-16 h-1 bg-accent-400 mx-auto mb-10" />
            <div className="relative bg-primary-500 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <blockquote className="relative text-primary-100 text-xl md:text-2xl leading-loose italic">
                "{company.vision}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
