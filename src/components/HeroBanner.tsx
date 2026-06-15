import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20panel%20installation%20on%20modern%20building%20rooftop%2C%20blue%20sky%2C%20professional%20photovoltaic%20system&image_size=landscape_16_9",
    title: "光伏建筑一体化 (BIPV)",
    subtitle: "50%覆盖率！光伏建筑一体化将迎万亿成长",
  },
  {
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20thermal%20photovoltaic%20hybrid%20system%2C%20PVT%20panel%20on%20roof%2C%20clean%20energy%20technology&image_size=landscape_16_9",
    title: "光伏光热一体化",
    subtitle: "光电光热综合利用，显著提高太阳能整体利用效率",
  },
  {
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portable%20solar%20energy%20storage%20system%2C%20outdoor%20camping%20power%20station%2C%20green%20energy&image_size=landscape_16_9",
    title: "便携式储能系统",
    subtitle: "随时随地的清洁能源，让绿色生活触手可及",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-primary-100 mb-0">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-accent-400 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
