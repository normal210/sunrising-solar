export interface Product {
  id: number;
  name: string;
  category: string;
  categoryId: number;
  description: string;
  image: string;
  features: string[];
}

export const categories = [
  { id: 6, name: "工商业光伏" },
  { id: 10, name: "光伏建筑一体化（BIPV）" },
  { id: 5, name: "光伏光热一体化（PVT）" },
  { id: 7, name: "光伏车棚" },
  { id: 8, name: "光伏便携式移动电源" },
  { id: 13, name: "光伏应用" },
];

export const products: Product[] = [
  {
    id: 20,
    name: "露营光伏电源",
    category: "光伏便携式移动电源",
    categoryId: 8,
    description: "在户外露营时，电力供应往往是一大难题。而我们的户外露营光伏产品，正是为解决这一难题应运而生。它是利用太阳能光伏技术，将光能转换为电能的小型设备，能为露营生活带来便捷、环保的电力支持，让您在亲近自然的同时，也能享受现代科技带来的便利。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portable%20solar%20power%20station%20for%20camping%2C%20outdoor%20photovoltaic%20panel%20with%20battery%2C%20green%20nature%20background&image_size=landscape_16_9",
    features: ["便携轻巧", "太阳能充电", "多接口输出", "环保节能"]
  },
  {
    id: 19,
    name: "便携式储能系统",
    category: "光伏便携式移动电源",
    categoryId: 8,
    description: "便携式储能系统是一种便于携带的移动电源，它集成了控制电路、逆变电路及锂电池，能为多种设备提供电力支持。随着科技进步和人们生活方式的转变，其应用场景日益广泛，成为现代生活中不可或缺的电力助手。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portable%20energy%20storage%20system%2C%20compact%20battery%20pack%20with%20solar%20panel%2C%20modern%20design&image_size=landscape_16_9",
    features: ["大容量锂电池", "纯正弦波逆变", "多设备兼容", "智能管理"]
  },
  {
    id: 18,
    name: "光伏车棚",
    category: "光伏车棚",
    categoryId: 7,
    description: "光伏车棚是将光伏和车棚顶结合起来的一种设施，属于光伏与建筑相结合中最为简单的形式。它一般采用钢结构支架，造型简单、大方、时尚、美观，是清洁环保的新能源，能有效缓解社会的环境和能源压力。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20carport%20structure%20with%20photovoltaic%20panels%20on%20top%2C%20cars%20parked%20underneath%2C%20modern%20design&image_size=landscape_16_9",
    features: ["钢结构支架", "遮阳挡雨", "发电收益", "美观大方"]
  },
  {
    id: 17,
    name: "光伏建筑一体化（BIPV）",
    category: "光伏建筑一体化（BIPV）",
    categoryId: 10,
    description: "BIPV（Building Integrated Photovoltaic）即光伏建筑一体化，是将太阳能光伏发电方阵安装在建筑的围护结构外表面来提供电力的一种技术。光伏组件作为建筑的一部分，既具有发电功能，又具有建筑构件的功能，可与建筑完美融合。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=BIPV%20building%20integrated%20photovoltaic%2C%20modern%20office%20building%20with%20solar%20facade%2C%20glass%20solar%20panels&image_size=landscape_16_9",
    features: ["建筑一体化设计", "替代传统建材", "美观节能", "零碳排放"]
  },
  {
    id: 16,
    name: "阳台光伏 Balcony Solar",
    category: "光伏应用",
    categoryId: 13,
    description: "阳台光伏是一种安装在住宅或建筑阳台上的小型太阳能发电系统，主要用于将太阳能转化为电能供家庭使用。这类系统一般由光伏板、微逆、储能设备（可选）、监测系统构成。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=balcony%20solar%20panel%20system%20on%20apartment%2C%20residential%20solar%20installation%2C%20modern%20building&image_size=landscape_16_9",
    features: ["安装简便", "即插即用", "微型逆变器", "智能监测"]
  },
  {
    id: 15,
    name: "光伏+隔音屏",
    category: "光伏应用",
    categoryId: 13,
    description: '光伏+隔音屏通过"功能叠加"模式，解决了传统光伏电站占地问题，并为城市提供就近清洁电力。未来需进一步探索其与储能、电动汽车充电等场景的耦合，推动智慧交通与能源转型的深度融合。',
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20noise%20barrier%20along%20highway%2C%20photovoltaic%20sound%20insulation%20screen%2C%20urban%20infrastructure&image_size=landscape_16_9",
    features: ["功能叠加", "节约用地", "就近供电", "智慧交通"]
  },
  {
    id: 9,
    name: "工商业储能系统",
    category: "工商业光伏",
    categoryId: 6,
    description: '旨在打通能源互联网的"最后一公里"。合理利用峰谷价差，节约用电成本，还可以实现系统备电，保障负荷的正常运转。广泛应用于工商业企业、数据中心、园区储能、商业楼宇、大工业、移动储能等场景。',
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=commercial%20energy%20storage%20system%2C%20industrial%20battery%20cabinet%2C%20modern%20factory%20setting&image_size=landscape_16_9",
    features: ["峰谷套利", "备用电源", "智能调度", "多场景应用"]
  },
  {
    id: 8,
    name: "预装式集装箱储能系统",
    category: "工商业光伏",
    categoryId: 6,
    description: "将锂电池、PCS变流器、EMS能量管理系统、升压变压器、通讯设备、配电设备、消防系统等集成在集装箱内部。产品采用模块式架构，直流侧电压支持高达1500V，可根据客户需求配置。广泛应用于大型调峰调频、光伏和风力发电储能电站系统。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=containerized%20energy%20storage%20system%2C%20shipping%20container%20with%20solar%20equipment%2C%20industrial%20scale&image_size=landscape_16_9",
    features: ["模块化架构", "1500V直流侧", "集成消防系统", "灵活配置"]
  },
  {
    id: 7,
    name: "户用光储直柔系统",
    category: "工商业光伏",
    categoryId: 6,
    description: "采用零碳建筑模式，即建筑内负载优先消纳光伏系统发电，多余电量存入储能系统。如遇阴天或光伏及储能系统电量不足以支撑负载运行，可自动切换为交流供电模式。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=residential%20solar%20storage%20system%2C%20home%20with%20solar%20panels%20and%20battery%2C%20zero%20carbon%20building&image_size=landscape_16_9",
    features: ["零碳建筑模式", "优先消纳光伏", "自动切换供电", "智能能源管理"]
  },
  {
    id: 6,
    name: "光储充一体化系统",
    category: "工商业光伏",
    categoryId: 6,
    description: '即"光伏+储能+充电"模式，通过储能系统和电网协同供电，既能实现削峰填谷，又能有效解决光伏发电间歇性和不稳定问题。光储充一体化可建立起清洁能源"利用-储存-再利用"的良性循环，助力从"低碳"走向"零碳"。',
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20storage%20charging%20integrated%20system%2C%20EV%20charging%20station%20with%20solar%20canopy%2C%20green%20energy&image_size=landscape_16_9",
    features: ["光伏+储能+充电", "削峰填谷", "良性循环", "零碳目标"]
  },
  {
    id: 5,
    name: "光伏并网储能系统",
    category: "工商业光伏",
    categoryId: 6,
    description: "光伏并网储能系统将光伏发电与储能技术相结合，在光照充足时将多余电能存储，在用电高峰或光照不足时释放电能，实现自发自用、余电上网的运行模式，最大化提升光伏发电的自用率。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=grid-tied%20solar%20storage%20system%2C%20photovoltaic%20panels%20with%20battery%20bank%2C%20commercial%20rooftop&image_size=landscape_16_9",
    features: ["自发自用", "余电上网", "智能调度", "提升自用率"]
  },
  {
    id: 4,
    name: "光伏光热一体化（PV/T）",
    category: "光伏光热一体化（PVT）",
    categoryId: 5,
    description: "光伏光热一体化（PV/T）系统将光伏电池与太阳能集热器结合在一起，既能发电又能产热，实现太阳能的光电光热综合利用，显著提高太阳能的整体利用效率。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PVT%20photovoltaic%20thermal%20hybrid%20panel%2C%20solar%20water%20heating%20and%20electricity%2C%20modern%20technology&image_size=landscape_16_9",
    features: ["光电光热综合利用", "提高整体效率", "双重收益", "节能环保"]
  },
];
