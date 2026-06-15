import { useScrollToTop } from "@/hooks/useScrollToTop";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";

export default function Cases() {
  useScrollToTop();

  return (
    <div>
      {/* Page Banner */}
      <div className="relative h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20engineering%20project%20showcase%2C%20completed%20photovoltaic%20installations%2C%20professional%20engineering&image_size=landscape_16_9"
          alt="工程案例"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-accent-400 text-lg tracking-widest mb-3">ENGINEERING CASES</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">工程案例</h1>
          </div>
        </div>
      </div>

      {/* Cases Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
