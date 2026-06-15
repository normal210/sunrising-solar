export interface ProjectCase {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  category: string;
}

export const cases: ProjectCase[] = [
  {
    id: 68,
    title: "南京新庄六角广场60kw光伏",
    date: "2022-05-21",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=60kw%20solar%20photovoltaic%20installation%20on%20commercial%20building%2C%20hexagonal%20plaza%2C%20Nanjing&image_size=landscape_16_9",
    description: "南京新庄六角广场60kw光伏发电项目，采用高效单晶硅组件，为商业综合体提供清洁电力，年发电量约6万度，年减排二氧化碳超60吨。",
    category: "工商业光伏"
  },
  {
    id: 67,
    title: "南京河西生态公园6KW光伏项目并网 年减排二氧化碳超6.5吨",
    date: "2018-05-06",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=6kw%20solar%20PV%20system%20at%20ecological%20park%2C%20green%20building%20with%20solar%20panels%2C%20park%20landscape&image_size=landscape_16_9",
    description: "南京河西生态公园6KW光伏项目成功并网，年减排二氧化碳超6.5吨，为城市生态公园提供绿色清洁能源示范。",
    category: "政府工程"
  },
  {
    id: 64,
    title: "安徽滁州5KW居民屋顶光伏项目并网 年减排二氧化碳超5.5吨",
    date: "2014-12-28",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=5kw%20residential%20rooftop%20solar%20system%2C%20suburban%20house%20with%20photovoltaic%20panels%2C%20Chuzhou&image_size=landscape_16_9",
    description: "安徽滁州5KW居民屋顶光伏项目成功并网，年减排二氧化碳超5.5吨，为居民用户带来稳定的发电收益。",
    category: "户用光伏"
  },
  {
    id: 63,
    title: "安徽滁州广电大厦11kW工商业光伏发电系统并网，年减排二氧化碳超12吨",
    date: "2014-10-12",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=11kw%20commercial%20solar%20system%20on%20broadcasting%20building%2C%20office%20building%20with%20solar%20panels&image_size=landscape_16_9",
    description: "安徽滁州广电大厦11kW工商业光伏发电系统成功并网，年减排二氧化碳超12吨，为公共建筑提供清洁能源解决方案。",
    category: "工商业光伏"
  },
  {
    id: 62,
    title: "政府验收工程：南京体育中心7KW光伏发电系统",
    date: "2016-06-25",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=7kw%20solar%20PV%20system%20at%20sports%20center%2C%20stadium%20building%20with%20solar%20installation&image_size=landscape_16_9",
    description: "南京体育中心7KW光伏发电系统通过政府验收，为体育场馆提供绿色电力，展示清洁能源在公共设施中的应用。",
    category: "政府工程"
  },
  {
    id: 61,
    title: "政府验收工程：南京文化中心15KW光伏发电系统",
    date: "2016-11-12",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=15kw%20solar%20power%20system%20at%20cultural%20center%2C%20modern%20building%20with%20photovoltaic%20panels&image_size=landscape_16_9",
    description: "南京文化中心15KW光伏发电系统通过政府验收，为文化设施提供清洁电力，年减排二氧化碳超16吨。",
    category: "政府工程"
  },
  {
    id: 60,
    title: "政府验收工程：南京爱涛尚逸华府幼儿园12KW离网光伏发电项目",
    date: "2016-11-27",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=12kw%20off-grid%20solar%20system%20at%20kindergarten%2C%20school%20building%20with%20solar%20panels%2C%20educational&image_size=landscape_16_9",
    description: "南京爱涛尚逸华府幼儿园12KW离网光伏发电项目通过政府验收，为幼儿园提供独立清洁电力，兼具科普教育功能。",
    category: "政府工程"
  },
  {
    id: 59,
    title: "市评优工程：南京圣和药业（二期）国际交流中心5KW光伏发电系统",
    date: "2017-09-01",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=5kw%20solar%20power%20system%20at%20pharmaceutical%20company%2C%20modern%20office%20building%20with%20solar%20installation&image_size=landscape_16_9",
    description: "南京圣和药业（二期）国际交流中心5KW光伏发电系统获市评优工程，为企业提供绿色能源解决方案。",
    category: "工商业光伏"
  },
  {
    id: 58,
    title: "政府零碳绿色示范工程【光伏组件+空气能】：南京市城市生态公园",
    date: "2018-06-21",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zero%20carbon%20green%20demonstration%20project%2C%20solar%20panels%20and%20air%20source%20heat%20pump%2C%20ecological%20park&image_size=landscape_16_9",
    description: "南京市城市生态公园零碳绿色示范工程，采用光伏组件+空气能组合方案，实现零碳排放目标，为城市绿色建筑树立标杆。",
    category: "政府工程"
  },
  {
    id: 57,
    title: "南京市麒麟数据中心13kw光伏发电系统",
    date: "2024-06-24",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=13kw%20solar%20power%20system%20at%20data%20center%2C%20modern%20tech%20building%20with%20photovoltaic%20panels&image_size=landscape_16_9",
    description: "南京市麒麟数据中心13kw光伏发电系统，为数据中心提供清洁电力，降低运营成本，年减排二氧化碳超14吨。",
    category: "工商业光伏"
  },
];
