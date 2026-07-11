export const silI18n = {
  zh: {
    brandName: "SIL 研究院",
    brandSlogan: "China Solar · Global Insight",
    brandTagline: "洞察中国光伏 · 链接全球视野",
    aboutSIL: "关于 SIL 研究院",
    silIntro: "Solar Intelligence Lab (SIL) 是南京旭日扬光光伏科技有限公司旗下的专业研究平台，致力于光伏行业深度研究与技术洞察。我们以\"China Solar · Global Insight\"为理念，聚焦光伏技术前沿、产业发展趋势、政策解读与市场分析。",
    silIntro2: "SIL 研究院汇聚行业资深专家与技术骨干，持续输出高质量的研究文章与行业洞察，为光伏从业者、投资者及相关人士提供专业参考，助力中国光伏产业高质量发展。",
    researchArticles: "专业文章",
    totalArticles: "共",
    articlesUnit: "篇",
    allArticles: "全部文章",
    latestUpdates: "最新动态",
    latestUpdatesSub: "Latest Updates · SIL Research",
    viewAllResearch: "查看全部研究",
    readMore: "阅读全文",
    publishedOn: "发布于",
    author: "作者",
    tags: "标签",
    summary: "文章摘要",
    relatedArticles: "相关文章",
    backToList: "返回文章列表",
    articleNotFound: "文章不存在",
    aboutSILBottom: "关于 Solar Intelligence Lab",
    industryInsight: "产业洞察",
    industryInsightDesc: "深度市场分析",
    techFrontier: "技术前沿",
    techFrontierDesc: "最新技术追踪",
    policyAnalysis: "政策解读",
    policyAnalysisDesc: "权威政策剖析",
    deepResearch: "深度研究",
    deepResearchDesc: "专业研究报告",
  },
  en: {
    brandName: "SIL Research",
    brandSlogan: "China Solar · Global Insight",
    brandTagline: "Insights from China, Vision for the World",
    aboutSIL: "About SIL",
    silIntro: "Solar Intelligence Lab (SIL) is a professional research platform under Nanjing Solarising Technology Co., Ltd. Dedicated to in-depth research and technical insights in the photovoltaic industry, we focus on PV technology frontiers, industry development trends, policy analysis, and market research with the philosophy of \"China Solar · Global Insight\".",
    silIntro2: "SIL Research brings together senior industry experts and technical talents, continuously delivering high-quality research articles and industry insights. We provide professional references for PV practitioners, investors, and stakeholders, supporting the high-quality development of China's photovoltaic industry.",
    researchArticles: "Research Articles",
    totalArticles: "Total",
    articlesUnit: "articles",
    allArticles: "All Articles",
    latestUpdates: "Latest Updates",
    latestUpdatesSub: "Latest Updates · SIL Research",
    viewAllResearch: "View All Research",
    readMore: "Read More",
    publishedOn: "Published on",
    author: "Author",
    tags: "Tags",
    summary: "Summary",
    relatedArticles: "Related Articles",
    backToList: "Back to Articles",
    articleNotFound: "Article not found",
    aboutSILBottom: "About Solar Intelligence Lab",
    industryInsight: "Industry Insight",
    industryInsightDesc: "In-depth Market Analysis",
    techFrontier: "Frontier Tech",
    techFrontierDesc: "Latest Tech Tracking",
    policyAnalysis: "Policy Analysis",
    policyAnalysisDesc: "Authoritative Policy Review",
    deepResearch: "Deep Research",
    deepResearchDesc: "Professional Research Reports",
  },
};

export const categoryTranslations: Record<string, { zh: string; en: string }> = {
  "技术前沿": { zh: "技术前沿", en: "Frontier Tech" },
  "产业洞察": { zh: "产业洞察", en: "Industry Insight" },
  "政策解读": { zh: "政策解读", en: "Policy Analysis" },
  "深度研究": { zh: "深度研究", en: "Deep Research" },
};

export const articleTranslations: Record<number, {
  title: string;
  summary: string;
  content: string;
  author: string;
  tags: string[];
}> = {
  1: {
    title: "BC Cell Technology Roadmap: Evolution from PERC to TOPCon to BC",
    summary: "Back Contact (BC) cell technology, with its aesthetic advantage of no frontside busbars and higher conversion efficiency, is emerging as the mainstream direction of next-generation PV cells. This article systematically reviews the development history, technical branches, and industrialization progress of BC technology.",
    author: "Solar Intelligence Lab",
    tags: ["BC Cell", "IBC", "HBC", "PV Technology", "Efficiency Improvement"],
    content: `## 1. Overview of BC Cell Technology

Back Contact (BC) solar cells are a type of cell structure where all metal electrodes are placed on the back side of the cell. Compared to traditional cells with frontside metal grid lines, BC cells have no grid line shading on the front side, resulting in a larger light-receiving area, more aesthetic appearance, and higher conversion efficiency.

The concept of BC cells was first proposed by Lammert and Schwartz in 1975. However, due to complex manufacturing processes and high costs, they have long been used only in special fields with extremely high efficiency and reliability requirements, such as aerospace. In recent years, with the rapid development of the PV industry and technological progress, the manufacturing cost of BC cells has been decreasing, and the industrialization process has accelerated significantly.

## 2. Technology Evolution Path

### 2.1 The PERC Era: Efficiency Bottleneck Emerges

PERC (Passivated Emitter and Rear Cell) cells have dominated the PV market over the past decade due to their relatively simple process and high cost-effectiveness. However, the theoretical efficiency limit of PERC cells is approximately 24.5%, and current mass production efficiency is already close to 23.5%, leaving limited room for improvement.

### 2.2 The Rise of TOPCon: Transition or Endgame?

TOPCon (Tunnel Oxide Passivated Contact) cells achieve excellent rear-side passivation by introducing a tunnel oxide layer and a doped polysilicon layer on the back side of the cell, with conversion efficiencies exceeding 26%. TOPCon technology has good compatibility with PERC production lines and relatively low renovation costs, making it a popular choice for current industry upgrading.

However, TOPCon cells still have the problem of frontside grid line shading, and silver paste consumption is high. In the long run, BC technology may be the ultimate solution with greater potential.

### 2.3 BC Technology: Perfect Combination of Aesthetics and Efficiency

BC cells move all electrodes to the back side, completely solving the problem of frontside grid line shading, with the following advantages:

- Higher conversion efficiency: No frontside grid line shading increases light-receiving area by approximately 2-3%, and with excellent passivation structures, efficiency can exceed 27%
- More aesthetic appearance: All-black or all-blue front surface with no grid line interference, especially suitable for BIPV applications
- Lower temperature coefficient: Better heat dissipation on the back side, superior temperature coefficient
- Better reliability: No metal electrodes on the front side, reducing corrosion and aging risks

## 3. Main Branches of BC Technology

### 3.1 IBC (Interdigitated Back Contact)

IBC is the classic form of BC technology, characterized by interdigitated P-regions and N-regions on the back side of the cell, corresponding to the emitter and back surface field respectively. The manufacturing process of IBC cells is relatively complex, requiring precise doping and alignment processes.

Representative companies: SunPower (Maxeon), Trina Solar

### 3.2 HBC (Heterojunction Back Contact)

HBC is a new cell technology that combines heterojunction (HJT) technology with BC structure. It combines the high efficiency and low temperature coefficient of HJT with the grid-free aesthetic advantages of BC. With a theoretical efficiency of over 28%, it is currently one of the most efficient crystalline silicon solar cell technologies.

Representative companies: LONGi Green Energy (HPBC), Risen Energy

### 3.3 P-type BC

Traditional BC cells mostly use N-type silicon wafers as substrates, but in recent years, significant progress has also been made in P-type BC technology. P-type BC cells can leverage the existing P-type wafer supply chain and are more cost-competitive.

## 4. Industrialization Progress and Challenges

### 4.1 Current Status of Industrialization

In recent years, with the improvement of technological maturity and the advancement of equipment localization, the investment cost and manufacturing cost of BC cells have decreased significantly, and the industrialization process has accelerated markedly. Major PV companies are all laying out BC technology routes, and production capacity continues to expand.

### 4.2 Main Challenges

Although BC cells have many advantages, their industrialization still faces some challenges:

1. High process complexity: BC cells require multiple photolithography or laser slotting processes, the process flow is long, and yield control is difficult
2. Large equipment investment: Specialized equipment investment is relatively high, especially for new entrants
3. Metallization cost: Backside electrode silver paste consumption is relatively high, requiring further cost reduction
4. Low degree of standardization: Diverse technology routes, and industry standards are not yet perfect

## 5. Future Outlook

With continuous technological progress and maturing industry chains, BC cells are expected to become one of the mainstream PV technologies in the next 3-5 years. Especially in market segments with high requirements for appearance and efficiency, such as BIPV and residential PV, BC cells will demonstrate strong competitiveness.

Meanwhile, the combination of BC technology and perovskite tandem cells is also attracting much attention. BC cells, as bottom cells paired with perovskite top cells, are expected to achieve conversion efficiencies above 30%, opening up new space for the continuous advancement of PV technology.`,
  },
  2: {
    title: "BIPV Market Deep Dive: Opportunities and Challenges in a Trillion-Dollar Market",
    summary: "BIPV perfectly integrates photovoltaic power generation with building envelopes, serving both as building materials and power generation facilities. With the advancement of dual-carbon goals and the introduction of relevant policies, the BIPV market is experiencing explosive growth. This article conducts in-depth analysis from dimensions such as market size, technology routes, and policy environment.",
    author: "Solar Intelligence Lab",
    tags: ["BIPV", "Building Integrated PV", "Market Analysis", "Dual Carbon", "Green Buildings"],
    content: `## 1. BIPV Overview

Building Integrated Photovoltaic (BIPV) is a technology that integrates PV products into buildings. BIPV is part of the building envelope structure, providing functions such as weather protection, thermal insulation, daylighting, and ventilation while also generating electricity.

Unlike traditional BAPV (Building Attached Photovoltaic), BIPV products themselves are part of the building materials, replacing traditional roof tiles, curtain wall glass, sunshades, and other building components, achieving the "photovoltaic transformation of building materials."

## 2. Market Size and Growth Potential

### 2.1 Global Market

According to the International Energy Agency (IEA), building energy consumption accounts for approximately 30-40% of total energy consumption globally, and carbon reduction in the building sector is crucial for achieving carbon neutrality goals. As a green building technology that meets both building functional requirements and generates electricity, BIPV has enormous market potential.

It is predicted that by 2030, the global BIPV market size will exceed 100 billion USD, with a compound annual growth rate of over 20%.

### 2.2 China Market

China is the world's largest producer and application market for PV products, as well as the world's largest construction market. With the proposal of the "dual carbon" goals and the advancement of new urbanization, China's BIPV market is entering a period of rapid development.

According to industry research institutions, by 2025, China's BIPV market size is expected to reach 100 billion RMB, and will exceed 500 billion by 2030.

## 3. Technology Routes and Product Forms

### 3.1 BIPV Roof Systems

- Photovoltaic tiles: Replace traditional tiles with aesthetic designs that integrate perfectly with buildings
- Photovoltaic roofs: Using standardized modules, suitable for large-span roofs of industrial plants and commercial buildings
- Photovoltaic daylighting roofs: Combining daylighting and power generation, suitable for public buildings such as atriums, stations, and airports

### 3.2 BIPV Curtain Wall Systems

- Photovoltaic glass curtain walls: Using cadmium telluride or crystalline silicon thin film cells with adjustable light transmittance
- Photovoltaic sunshades: Installed on building facades, combining shading and power generation functions
- Photovoltaic blocks: Modular design for convenient construction

### 3.3 Other BIPV Applications

- Photovoltaic skylights
- Photovoltaic noise barriers
- Photovoltaic walkways
- Photovoltaic carports

## 4. Policy Environment Analysis

### 4.1 National-level Policies

In recent years, the state has issued a series of policies supporting BIPV development:

- Opinions on Promoting Green Development of Urban and Rural Construction
- 14th Five-Year Plan for Building Energy Efficiency and Green Building Development
- Notice on Pilot Program for County-level Rooftop Distributed PV Development

### 4.2 Local Policies

Local governments have also introduced supporting policies, supporting BIPV development from multiple dimensions such as subsidies, floor area ratio incentives, and green building ratings. Developed regions such as Beijing, Shanghai, Shenzhen, Jiangsu, and Zhejiang are leading the way.

## 5. Industry Chain Analysis

### 5.1 Upstream: PV Modules and Building Materials

The upstream of BIPV mainly includes PV cells, PV glass, packaging materials, aluminum alloy profiles, sealants, etc. Among them, PV cells are the core components, and their efficiency and cost directly affect the competitiveness of BIPV products.

### 5.2 Midstream: BIPV Product Manufacturing

The midstream of BIPV is mainly the production and manufacturing of BIPV components and systems. Currently, PV companies, building materials companies, and curtain wall companies are all entering the BIPV field across borders, forming a diversified market competition pattern.

### 5.3 Downstream: Engineering Applications and Services

The downstream of BIPV mainly includes architectural design, engineering installation, operation and maintenance services, etc. BIPV projects involve multiple professional fields such as architecture, electrical engineering, and structural engineering, placing high demands on the comprehensive capabilities of system integrators.

## 6. Challenges Faced

### 6.1 Imperfect Standard System

BIPV serves both as building materials and power generation equipment, needing to meet both building and PV standards. Currently, the relevant standard system is still imperfect, and product quality varies.

### 6.2 High Cost

Compared with traditional building materials, the initial investment of BIPV products is still relatively high, and economic efficiency is an important factor restricting its large-scale promotion.

### 6.3 Technical Barriers

BIPV involves multiple disciplines such as photovoltaics, architecture, materials, and electrical engineering, with high technical thresholds. Especially in terms of building safety performance such as waterproofing, fire protection, lightning protection, and wind resistance, long-term technical accumulation is required.

### 6.4 Low Market Awareness

Currently, market awareness of BIPV is still relatively low. Many owners and designers do not have sufficient understanding of BIPV products and have a wait-and-see attitude.

## 7. Development Trends and Outlook

### 7.1 Technology Trends

- High efficiency: With the advancement of cell technology, the conversion efficiency of BIPV modules will continue to improve
- Aesthetic design: Product design pays more attention to integration with buildings, with more diverse appearances
- Intelligence: Combining IoT, big data and other technologies to achieve intelligent monitoring and operation
- Functional integration: Integrating multiple functions such as power generation, thermal insulation, sound insulation, and daylighting

### 7.2 Market Trends

- Expanding from public buildings to residential buildings
- Extending from cities to rural areas
- Penetrating from new buildings to existing building renovation

Overall, BIPV, as a green, low-carbon, and multi-functional building technology, has broad market prospects. With technological progress, cost reduction, and policy improvement, BIPV is expected to usher in a golden development period in the next decade.`,
  },
  3: {
    title: "Perovskite Solar Cells: Key Challenges from Lab to Mass Production",
    summary: "Perovskite solar cells, with their outstanding advantages such as high efficiency, low cost, and solution processability, are considered the most promising new generation of PV technology. However, from laboratory efficiency breakthroughs to large-scale industrialization, they still face multiple challenges such as stability, large-area fabrication, and lead toxicity.",
    author: "Solar Intelligence Lab",
    tags: ["Perovskite", "New PV Technology", "Stability", "Industrialization", "Tandem Cells"],
    content: `## 1. Overview of Perovskite Cells

Perovskite Solar Cells (PSC) are a new type of solar cell that uses organic-metal halide semiconductor materials with perovskite structure as the light-absorbing layer.

Since the first reported efficiency of 3.8% in 2009, the efficiency of perovskite cells has rapidly increased to over 26% in just over a decade, making it the fastest-improving technology route in the history of PV technology development.

## 2. Advantages of Perovskite Cells

### 2.1 High Efficiency Potential

Perovskite materials have excellent optoelectronic properties:
- High absorption coefficient: More than an order of magnitude higher than traditional silicon materials
- Tunable band gap: Adjustable between 1.2-2.3 eV through composition engineering
- Long carrier lifetime and diffusion length
- Low exciton binding energy

The theoretical efficiency limit of single-junction perovskite cells is approximately 31%, much higher than the 29.4% of crystalline silicon cells.

### 2.2 Low Cost

- Abundant and inexpensive raw materials
- Can be prepared by solution methods with simple processes
- Low energy consumption and short production cycle
- Thin film thickness of only a few hundred nanometers, low material consumption

### 2.3 Rich Application Scenarios

- Flexible cells: Can be fabricated on flexible substrates for wearable devices, portable power supplies, etc.
- Semi-transparent cells: Can be used for BIPV, automotive sunroofs, etc.
- Tandem cells: Stacked with silicon cells, CIGS, etc. to further improve efficiency

## 3. Main Technology Routes

### 3.1 By Device Structure

- Formal structure (n-i-p): Light incident from the electron transport layer side
- Inverted structure (p-i-n): Light incident from the hole transport layer side

### 3.2 By Preparation Process

- Solution methods: Spin coating, spray coating, blade coating, inkjet printing, etc.
- Vacuum methods: Thermal evaporation, sputtering, etc.
- Hybrid methods: Some layers by solution, some by vacuum

### 3.3 By Substrate

- Rigid substrates: Glass
- Flexible substrates: PET, PI, metal foils, etc.

## 4. Key Challenges for Industrialization

### 4.1 Stability Issues

Stability is the biggest challenge facing perovskite cell industrialization. Perovskite materials are sensitive to factors such as moisture, oxygen, temperature, light, and bias voltage, and are prone to degradation, leading to device performance degradation.

**Main degradation mechanisms:**
- Device degradation due to ion migration
- Chemical decomposition caused by moisture
- Structural phase transition caused by thermal stress
- Photo-induced degradation under illumination

**Coping strategies:**
- Composition engineering: Improving stability through mixed multi-cation and halogen compositions
- Interface engineering: Optimizing interface layer materials and structures to inhibit ion migration
- Encapsulation technology: Developing high-performance encapsulation materials and processes
- Device structure optimization: Designing more stable device structures

### 4.2 Large-Area Fabrication

The efficiency of small-area (<1 cm²) perovskite cells in laboratories has exceeded 26%, but the efficiency of large-area (>100 cm²) modules is still relatively low, usually between 18-22%.

**Main reasons for large-area efficiency loss:**
- Poor thin film uniformity
- Series and parallel connection losses
- Packaging losses
- Increased defect density

**Large-area preparation technologies:**
- Blade/slot-die coating
- Spray coating
- Inkjet printing
- Vacuum evaporation

### 4.3 Lead Toxicity

Perovskite materials contain lead, a toxic heavy metal that poses potential risks to the environment and human health.

**Solutions:**
- Lead-free perovskite: Developing tin-based, bismuth-based and other lead-free perovskite materials, but efficiency and stability still need improvement
- Lead immobilization: Preventing lead leakage through encapsulation and adsorption materials
- Recycling: Establishing perovskite cell recycling systems

### 4.4 Encapsulation Technology

Perovskite cells have higher requirements for encapsulation than silicon cells, needing to simultaneously block water and oxygen, inhibit ion migration, withstand temperature cycling, etc.

**Encapsulation materials and technologies:**
- Glass-glass encapsulation
- Polymer encapsulation
- Thin film encapsulation (ALD, PVD, etc.)
- Edge sealing technology

### 4.5 Imperfect Industry Chain

Currently, the perovskite cell industry chain is still imperfect, and the localization degree of key materials and equipment needs to be improved:

- High-end electron transport layer materials (such as Spiro-OMeTAD)
- Specialized packaging materials
- Large-area preparation equipment
- Testing equipment and standards

## 5. Industrialization Progress

### 5.1 Global Layout

Globally, numerous companies and research institutions are laying out perovskite cell industrialization:

- Oxford PV: Perovskite/silicon tandem cell efficiency exceeding 28%
- Microquanta: A pioneer in commercialization of perovskite modules in China
- GCL Nano: Focusing on perovskite module mass production
- Fiber New Energy: Perovskite module efficiency records constantly刷新

### 5.2 Efficiency Progress

In recent years, the efficiency of perovskite cells has been constantly刷新 records:

- Small-area single-junction: 26.1%
- Perovskite/silicon tandem: 33.2%
- Large-area modules: >20% (over 1000 cm²)

### 5.3 Capacity Construction

Multiple 100MW-level perovskite module production lines have been built or are under construction, and GW-level production capacity is expected to be put into operation within the next 2-3 years.

## 6. Development Trends and Outlook

### 6.1 Short Term (1-3 years): Efficiency Improvement and Stability Breakthroughs

- Module efficiency exceeding 25%
- Stability passing IEC 61215 and other reliability tests
- Stable mass production of 100MW-scale production lines

### 6.2 Medium Term (3-5 years): Cost Reduction and Market Expansion

- Manufacturing costs dropping below 0.5 RMB/W
- Commercial applications in niche markets such as BIPV and consumer electronics
- GW-scale capacity formation

### 6.3 Long Term (5-10 years): Tandem Technology Leading a New Revolution

- Perovskite/silicon tandem cell efficiency exceeding 30%
- Large-scale application in mainstream markets such as centralized power stations and distributed PV
- Reshaping the global PV industry landscape

Perovskite solar cells are at a critical stage from laboratory to industrialization. Although still facing many challenges, with rapid technological progress and continuous capital investment, perovskite technology is expected to achieve commercial breakthroughs within the next decade, bringing new revolutionary changes to the PV industry.`,
  },
  6: {
    title: "TOPCon Cell Industrialization Deep Report: Technology, Cost and Competition",
    summary: "With advantages of high efficiency, low degradation, and good compatibility with PERC production lines, TOPCon cells have become the mainstream choice for current PV technology upgrades. This article provides a comprehensive analysis of TOPCon cells from dimensions including technical principles, cost composition, industry chain progress, and competitive landscape.",
    author: "Solar Intelligence Lab",
    tags: ["TOPCon", "N-type Cell", "PV Technology", "Industrialization", "Cost Analysis"],
    content: `## 1. Overview of TOPCon Technology

TOPCon (Tunnel Oxide Passivated Contact) is a new high-efficiency solar cell technology. Its core is the introduction of an ultra-thin tunnel oxide layer (SiO₂) and a doped polysilicon layer on the back side of the cell, forming an excellent back-side passivated contact structure.

TOPCon technology was first proposed by the Fraunhofer Institute in Germany. After years of technical accumulation and industrial exploration, it has achieved rapid development in recent years, becoming one of the most promising N-type cell technologies after PERC.

## 2. Technical Principles and Structure

### 2.1 Basic Structure

The typical structure of TOPCon cells is:
- Front side: N-type emitter + anti-reflective coating + metal electrode
- Substrate: N-type silicon wafer
- Back side: Tunnel oxide layer (~1.5 nm SiO₂) + doped polysilicon layer + anti-reflective coating + metal electrode

### 2.2 Passivation Principle

The excellent passivation effect of TOPCon cells mainly comes from the following mechanisms:

**Chemical passivation:** The tunnel oxide layer effectively reduces the defect state density on the silicon wafer surface and reduces surface recombination.

**Field effect passivation:** The energy band bending formed between the doped polysilicon layer and the silicon substrate creates a potential barrier for minority carriers, suppressing interface recombination.

**Selective contact:** The tunnel oxide layer allows majority carriers to tunnel through while blocking minority carriers, achieving selective carrier collection.

### 2.3 TOPCon vs PERC vs HJT Technology Comparison

| Indicator | PERC | TOPCon | HJT |
|-----------|------|--------|-----|
| Mass production efficiency | 23-23.5% | 24.5-25.5% | 25-26% |
| Laboratory efficiency | 25% | 26.81% | 27.5% |
| Temperature coefficient | -0.35%/°C | -0.29%/°C | -0.24%/°C |
| Bifaciality | 70-80% | 85-90% | 90-95% |
| Light-induced degradation | <2% | <1% | <0.5% |
| Initial investment | Low | Medium | High |
| Process steps | 8-10 steps | 12-14 steps | 6-8 steps |
| PERC compatibility | 100% | ~70% | ~30% |

## 3. Technology Route Selection

### 3.1 Doping Methods

**In-situ Doping:**
- Doping gas (B₂H₆ or PH₃) is introduced simultaneously during polysilicon deposition
- Simple process, completed in one step
- Good doping uniformity
- Mainstream technology route

**Diffusion Doping:**
- First deposit intrinsic polysilicon, then dope through diffusion process
- Higher doping concentration, can form better ohmic contact
- More process steps, higher cost
- Adopted by some manufacturers

### 3.2 Polysilicon Deposition Methods

**LPCVD (Low Pressure Chemical Vapor Deposition):**
- Good film quality and uniformity
- Relatively low capacity
- Higher equipment investment
- Current mainstream process

**PECVD (Plasma Enhanced Chemical Vapor Deposition):**
- Fast deposition rate, high capacity
- Film quality slightly inferior to LPCVD
- Relatively low equipment cost
- Rapid progress in domestic equipment

## 4. Cost Analysis

### 4.1 Initial Investment

The initial investment in TOPCon production lines mainly includes:
- Wafers: Diffusion furnaces, LPCVD, PECVD, screen printers, sintering furnaces, etc.
- Cells: Approximately 150-200 million RMB/GW (new production lines)
- Modules: Approximately 50-80 million RMB/GW

Compared with PERC production lines, TOPCon lines require additional LPCVD/PECVD equipment, increasing initial investment by approximately 30-40%.

### 4.2 Production Cost Composition

The production cost of TOPCon cells mainly includes:

| Cost Item | Proportion | Remarks |
|-----------|-----------|---------|
| Wafer cost | ~55% | N-type wafers slightly more expensive than P-type |
| Non-silicon cost | ~45% | |
| - Silver paste | ~15% | Double-sided silver paste, high consumption |
| - Chemicals | ~5% | Cleaning, texturing, diffusion, etc. |
| - Targets | ~3% | Transparent conductive films |
| - Utilities | ~3% | |
| - Depreciation | ~5% | |
| - Labor | ~3% | |
| - Others | ~11% | |

### 4.3 Cost Reduction Paths

**Wafer side:**
- Narrowing price gap between N-type and P-type wafers
- Thinning: From 150μm to 120μm and even thinner
- Large size: Promotion of 182/210mm large-size wafers

**Cell side:**
- Reduced silver paste consumption: 0BB, laser transfer printing and other technologies
- Domestic equipment substitution
- Process optimization: Reducing process steps, improving yield
- Scale effects

**Module side:**
- Non-destructive cutting, half-cell, shingled and other technologies
- Material cost optimization

## 5. Industry Chain Progress

### 5.1 Wafer Segment

N-type wafers are the foundation of TOPCon cells. In recent years, N-type wafer production capacity has expanded rapidly, with major wafer companies increasing their N-type wafer layout.

- LONGi Green Energy: N-type wafer shipment volume continues to increase
- TCL Zhonghuan: Leading N-type wafer technology
- JinkoSolar: Vertically integrated N-type layout
- Shangji Automation, Shuangliang Eco-Energy, etc.: Rapidly following up

The price gap between N-type and P-type wafers has narrowed from the initial 0.2-0.3 RMB/piece to less than 0.1 RMB/piece, laying the foundation for TOPCon cell cost reduction.

### 5.2 Cell Equipment Segment

The localization rate of TOPCon cell equipment continues to increase:

**Diffusion furnaces:** Jiejia Weichuang, NAURA, ASM, etc.

**LPCVD:**
- Foreign: Centrotherm, Tempress
- Domestic: Jiejia Weichuang, NAURA, Max Well, etc.

**PECVD:**
- Jiejia Weichuang, Max Well, Wuxi Jingsheng, etc.
- Rapid technological progress of domestic PECVD equipment

### 5.3 Materials Segment

**Silver paste:** Front-side silver paste, back-side silver paste, Shenzhen Solarnovo, Poly & Materials, Dkele, etc.

**Targets:** ITO targets, AZO targets, Jiangfeng Electronics, Astar, etc.

**Chemicals:** Supporting chemicals for cleaning, texturing, diffusion, etc.

**Packaging materials:** EVA/POE films adapted for TOPCon modules

## 6. Market Competition Landscape

### 6.1 Major Company Layouts

**First Tier:**
- **JinkoSolar:** TOPCon technology pioneer, largest production capacity, leading efficiency
- **JA Solar:** Comprehensive N-type layout, TOPCon capacity expanding rapidly
- **Trina Solar:** Dual layout of TOPCon and IBC
- **LONGi Green Energy:** HPBC technology route, differentiated competition

**Second Tier:**
- **Junda Co., Ltd.:** Focused on cell manufacturing, TOPCon capacity rapidly releasing
- **Tongwei Co., Ltd.:** Cell leader, actively laying out TOPCon
- **Risen Energy:** Module company extending upstream
- **Zhonglai Co., Ltd.:** Deep TOPCon technology accumulation

### 6.2 Capacity Expansion

In recent years, TOPCon cell production capacity has expanded rapidly. According to incomplete statistics:
- 2023: Approximately 500 GW
- 2024: Approximately 800-1000 GW
- 2025: Expected to exceed 1500 GW

The speed of capacity expansion exceeds market expectations, and industry competition is becoming increasingly fierce.

## 7. Challenges Faced

### 7.1 High Silver Paste Consumption

TOPCon cells require metal electrodes on both sides, with silver paste consumption about 30-50% higher than PERC, increasing costs.

**Solutions:**
- 0BB (Zero Busbar) technology
- Multi-busbar (MBB) technology
- Copper plating technology
- Silver-clad copper technology

### 7.2 Complex Process, Difficult Yield Control

TOPCon cell has more process steps than PERC, placing higher demands on equipment and process control, and yield improvement takes time to accumulate.

### 7.3 Overcapacity Risk

TOPCon production capacity is expanding rapidly, and may face phased overcapacity and price wars.

### 7.4 Technology Iteration Pressure

BC cells, HJT, perovskite and other technologies are also developing rapidly, and TOPCon needs continuous progress to maintain competitiveness.

## 8. Development Trends and Outlook

### 8.1 Continuous Efficiency Improvement

- Mass production efficiency advancing toward 26%
- Laboratory efficiency targeting 27%
- Tandem with perovskite, efficiency exceeding 30%

### 8.2 Continuous Cost Reduction

- Reduced silver paste consumption
- Advancing thinning
- Domestic equipment substitution
- Scale effects

### 8.3 Technology Integration Innovation

- TOPCon + perovskite tandem
- TOPCon + 0BB
- TOPCon + heterojunction

### 8.4 Application Scenario Expansion

- Distributed PV: Higher power generation revenue
- Ground-mounted power stations: Lower levelized cost of electricity
- BIPV: Higher bifaciality
- Special scenarios: Low temperature coefficient advantage

## 9. Conclusion

TOPCon cells, with their comprehensive advantages of high efficiency, low degradation, and good compatibility with PERC production lines, have become the mainstream choice for current PV technology upgrades and are in an accelerated industrialization period.

With continuous technological progress and maturing industry chains, the cost of TOPCon cells will further decrease, and market share will continue to increase. Meanwhile, TOPCon technology also faces competition from BC cells, HJT, perovskite and other technologies, requiring continuous innovation to maintain its leading position.

In the medium to long term, TOPCon, as an important technological transition after PERC, will dominate the market for the next 3-5 years and lay the foundation for the development of next-generation PV technology.`,
  },
  4: {
    title: "China 2026 PV Industry Policy Overview: From Subsidy-Driven to Market-Driven",
    summary: "With the arrival of the grid parity era, China's PV industry is transitioning from subsidy-driven to market-driven. This article comprehensively reviews the main policy framework of the PV industry in 2026, covering key areas such as renewable energy consumption, distributed PV, wind-solar large-scale bases, and green certificates/green electricity.",
    author: "Solar Intelligence Lab",
    tags: ["Policy Analysis", "PV Policy", "Dual Carbon", "Green Certificates", "Renewable Energy Consumption"],
    content: `## 1. Background of Policy Evolution

China's PV industry has achieved leapfrog development from scratch, from small to large, from weak to strong over the past two decades, with policies playing a crucial guiding and promoting role.

### 1.1 Three Stages of Policy Development

**Stage 1: Demonstration and Guidance Period (2009-2013)**
- Golden Sun Demonstration Project
- PV Building Application Demonstration
- Initial establishment of feed-in tariff subsidy policies

**Stage 2: Scale Expansion Period (2013-2020)**
- Benchmark feed-in tariff policy
- Leader Program
- PV poverty alleviation
- Distributed PV generation subsidies

**Stage 3: Parity Transition Period (2021-present)**
- Full realization of grid parity
- Gradual phase-out of subsidies
- Establishment of market-oriented trading mechanisms
- New power system construction

### 1.2 Current Overall Policy Direction

The overall direction of current PV industry policies can be summarized as:
- From subsidy-driven to market-driven: Establishing market-oriented and diversified consumption mechanisms
- From scale expansion to quality improvement: Greater emphasis on technological progress and industrial upgrading
- From single policy to systemic coordination: Energy, power, carbon market and other policies working in synergy
- From domestic orientation to international vision: Promoting global layout of industrial and supply chains

## 2. Main Policy Framework

### 2.1 Renewable Energy Consumption Guarantee Mechanism

**Key Policy Points:**
- Establishing a renewable energy power consumption responsibility weight system
- Each province (autonomous region, municipality) formulates annual consumption responsibility weight targets
- Provinces exceeding targets can obtain green certificate rewards
- Provinces failing to meet targets need to complete them by purchasing green certificates or cross-provincial trading

**Impact on PV Industry:**
- Providing institutional guarantee for PV power consumption
- Promoting local governments to actively develop distributed PV
- Facilitating the development and improvement of the green certificate market

### 2.2 Distributed PV Policies

**County-level Rooftop Distributed PV Development Pilot**
- 676 counties (cities, districts) nationwide included in the pilot
- No less than 50% installable area of party and government building rooftops
- No less than 40% for public buildings such as schools and hospitals
- No less than 30% for industrial and commercial factory rooftops
- No less than 20% for rural residential rooftops

**Distributed PV Market-oriented Trading**
- Adjacent wall electricity sales pilots
- Virtual power plants participating in electricity markets
- Source-grid-load-storage integration

### 2.3 Wind-Solar Large-Scale Base Construction

**First Batch of Large Wind and PV Bases**
- Total scale approximately 100 GW
- Mainly distributed in northwest, north, and northeast regions
- Focused on desert, Gobi, and desert areas

**Second Batch of Large Wind and PV Bases**
- Total scale approximately 455 GW
- Construction starting during the 14th Five-Year Plan period
- Balancing centralized and distributed

**Third Batch of Large Wind and PV Bases**
- In planning and layout
- Greater emphasis on consumption and transmission

### 2.4 Technology Progress Policies

**PV Manufacturing Industry Standard Conditions**
- Raising industry entry barriers
- Promoting industrial structure adjustment
- Promoting technological progress and transformation upgrading

**Smart PV Industry Development Action Plan**
- Promoting integration of PV with 5G, big data, artificial intelligence and other technologies
- Developing smart PV modules, smart inverters, smart O&M

**PV Leader Program**
- Promoting application of advanced technology products
- Promoting technology iteration and cost reduction

### 2.5 Green Certificate and Green Electricity Trading

**Green Power Certificate System**
- One green certificate corresponding to 1MWh of renewable energy generation
- Enterprises and individuals can voluntarily purchase green certificates
- Green certificates are an important way to fulfill consumption responsibility weights

**Green Electricity Trading**
- Establishing separate green electricity trading category in medium- and long-term electricity trading
- Green electricity prices formed through market-oriented methods by market participants
- Green electricity trading volume corresponds to equal green certificates, no duplicate issuance

**Carbon Market and Green Electricity Synergy**
- Studying linkage mechanism between green certificates and carbon emission trading
- Avoiding double counting and double emission reduction

### 2.6 Rural Revitalization and PV Poverty Alleviation

**PV Poverty Alleviation**
- PV poverty alleviation projects for registered poor villages
- Village-level PV power station construction
- Sustained poverty alleviation benefits

**Rural Energy Revolution**
- Rural distributed PV development
- Consolidation and upgrading of rural power grids
- Coordinated development of rural revitalization and clean energy

## 3. Highlights of Local Policies

### 3.1 Beijing

- Municipal subsidy of 0.05 RMB/kWh for distributed PV, subsidized continuously for 5 years
- Priority development of rooftop PV in public institutions
- Promoting BIPV applications

### 3.2 Shanghai

- Advancing "PV+" development model
- Full coverage of industrial park rooftop PV
- Encouraging building-integrated photovoltaics

### 3.3 Guangdong

- Vigorously developing distributed PV
- Promoting integrated development of offshore wind power and PV
- Establishing market-oriented consumption mechanisms

### 3.4 Zhejiang

- Million household rooftop PV project
- PV 14th Five-Year Development Plan
- County-level promotion of distributed PV

## 4. Policy Challenges Facing the Industry

### 4.1 Consumption Pressure

With the rapid growth of PV installed capacity, consumption pressure is increasing in some regions, and curtailment rates have rebounded to some extent. Further strengthening grid construction, improving power market mechanisms, and promoting energy storage development are needed.

### 4.2 Land Constraints

Land demand for centralized PV power stations is large, and land resources are becoming increasingly tight. Need to explore integrated development models of PV with agriculture, fisheries, animal husbandry, etc.

### 4.3 Standard System

The PV industry standard system still needs improvement, especially in emerging fields such as BIPV, energy storage, and smart PV.

### 4.4 International Trade Environment

Increasing international trade frictions, "double anti" investigations, Carbon Border Adjustment Mechanism (CBAM), etc., exert certain pressure on exports.

## 5. Policy Outlook

### 5.1 Deepening Market-oriented Reform

Power system reform will further deepen, with spot markets, auxiliary service markets, capacity markets, etc. gradually established and improved, providing a more market-oriented environment for PV development.

### 5.2 Accelerating New Power System Construction

With the continuous expansion of new energy installed capacity, new power system construction will accelerate, with coordinated development of source-grid-load-storage, and vigorous development of new business forms such as virtual power plants and demand response.

### 5.3 Carbon Neutrality Goal Leadership

The "dual carbon" goals will continue to lead PV industry development, and decarbonization needs in various industries and sectors will provide broad market space for PV.

### 5.4 Increased Support for Technological Innovation

Support for cutting-edge technologies such as perovskite, tandem cells, and BC cells will increase, promoting continuous progress in PV technology.

## 6. Corporate Coping Strategies

### 6.1 Closely Following Policy Dynamics

Timely tracking of national and local policy changes, advance layout, seizing opportunities.

### 6.2 Strengthening Technological Innovation

Increasing R&D investment, improving technical level and product competitiveness, responding to subsidy phase-out and market competition with technological progress.

### 6.3 Diversified Market Layout

Equal emphasis on domestic and international markets, equal emphasis on centralized and distributed, equal emphasis on traditional and emerging markets.

### 6.4 Active Participation in Policy Formulation

Actively participating in policy formulation through industry associations, CPPCC proposals, and other channels, reflecting industry demands.

In conclusion, during the critical transition period from subsidy-driven to market-driven, enterprises need to accurately grasp policy directions, actively adapt to market changes, and win development opportunities in fierce competition.`,
  },
  5: {
    title: "Energy Storage Technology Comparison: Li-ion, Na-ion, Flow Battery, CAES",
    summary: "With the rapid growth of new energy installed capacity, energy storage has become a key support for solving intermittency problems and building new power systems. This article systematically compares the characteristics, costs, application scenarios, and development prospects of mainstream energy storage technologies including lithium-ion batteries, sodium-ion batteries, flow batteries, and compressed air.",
    author: "Solar Intelligence Lab",
    tags: ["Energy Storage", "Lithium-ion Battery", "Sodium-ion Battery", "Flow Battery", "Compressed Air", "Long-duration Storage"],
    content: `## 1. Development Background of Energy Storage Industry

With the acceleration of global energy transition, renewable energy installed capacity continues to grow rapidly. However, renewable energy sources such as wind and solar have intermittent and fluctuating characteristics, and large-scale grid integration poses enormous challenges to the safe and stable operation of power systems.

Energy storage, as a key technology for regulating electricity supply and demand and ensuring grid security and stability, is ushering in unprecedented development opportunities. From long-duration to short-duration, from generation side to grid side to user side, energy storage application scenarios are increasingly rich, and technology routes are also showing diversified development trends.

## 2. Classification of Energy Storage Technologies

Energy storage technologies can be divided into the following categories according to energy storage forms:

| Category | Representative Technologies | Characteristics |
|----------|----------------------------|-----------------|
| Electrochemical | Lithium-ion, Sodium-ion, Flow, Lead-acid | Fast response, flexible configuration |
| Mechanical | Pumped hydro, Compressed air, Flywheel | Large capacity, long life |
| Electromagnetic | Supercapacitor, Superconducting | Extremely fast response, high power |
| Thermal | Molten salt, Phase change | Suitable for large-scale long-duration storage |
| Chemical | Hydrogen storage, Synthetic fuels | Long-cycle, cross-seasonal |

## 3. Comparison of Mainstream Electrochemical Storage Technologies

### 3.1 Lithium-ion Batteries

**Technical Overview:**
Lithium-ion batteries are currently the most widely used and technically mature electrochemical energy storage technology, mainly including two major technology routes: lithium iron phosphate (LFP) and ternary lithium (NCM/NCA).

**Main Advantages:**
- High energy density (150-300 Wh/kg)
- Long cycle life (3000-10000 cycles)
- High charge-discharge efficiency (>95%)
- Fast response (millisecond level)
- Mature industry chain, costs continuing to decline

**Main Disadvantages:**
- Resource constraints: Uneven distribution of lithium resources, large price fluctuations
- Safety risks: Thermal runaway risk, requires perfect BMS and fire protection systems
- Recycling challenges: Battery recycling system still imperfect

**Application Scenarios:**
- Grid-side frequency regulation and peak shaving
- User-side peak-valley arbitrage
- New energy supporting storage
- Residential energy storage

**Development Trends:**
- LFP batteries become mainstream for energy storage due to safety and cost advantages
- Structural innovations such as large cylindrical and blade cells continue to advance
- Increasing intelligence of battery management systems
- Gradual improvement of recycling systems

### 3.2 Sodium-ion Batteries

**Technical Overview:**
Sodium-ion batteries are secondary batteries using sodium ions as charge carriers, operating on principles similar to lithium-ion batteries but using sodium-based materials instead of lithium-based materials.

**Main Advantages:**
- Abundant resources: Sodium content in crust about 2.7%, widely distributed, low price
- Good safety: Thermal stability superior to lithium-ion batteries
- Excellent low-temperature performance: Discharge efficiency still above 80% at -20°C
- Good fast-charging performance
- Environmentally friendly: No heavy metals such as cobalt and nickel

**Main Disadvantages:**
- Lower energy density (100-160 Wh/kg)
- Cycle life needs improvement (1000-6000 cycles)
- Industry chain still immature, scale cost advantage not yet apparent

**Application Scenarios:**
- Low-speed electric vehicles
- Large-scale energy storage power stations
- Grid-side energy storage
- Low-temperature environment applications

**Development Trends:**
- Energy density continuously improving, moving toward 180-200 Wh/kg
- Rapid industry chain construction, costs expected to be lower than LFP
- Forming complementarity rather than replacement with lithium-ion batteries
- CATL, HiNa Battery and other companies actively laying out

### 3.3 Flow Batteries

**Technical Overview:**
Flow batteries store energy by dissolving active materials in electrolyte solutions, pumping the electrolyte to the stack for electrochemical reactions. Main types include all-vanadium flow batteries, iron-chromium flow batteries, zinc-bromine flow batteries, etc.

**Main Advantages:**
- Large and independently adjustable capacity: Power determined by stack, capacity by electrolyte volume
- Long cycle life (10000+ cycles)
- High safety: Aqueous electrolyte, no combustion or explosion risk
- Good deep discharge performance
- Electrolyte recyclable

**Main Disadvantages:**
- Low energy density (20-30 Wh/L)
- Complex system, large footprint
- High cost of key materials such as vanadium
- Relatively low efficiency (65-80%)

**Application Scenarios:**
- Long-duration energy storage (4 hours+)
- Large-scale centralized energy storage power stations
- New energy base supporting storage
- Grid peak shaving

**Development Trends:**
- All-vanadium flow battery technology is the most mature, with the fastest commercialization progress
- Low-cost systems like iron-chromium and zinc-based accelerating R&D
- Continuously improving power density, declining system costs
- Deep integration with wind-solar large base construction

### 3.4 Other Electrochemical Storage Technologies

**Lead-acid batteries**
- Most mature technology, lowest cost
- But low energy density, short cycle life, lead pollution
- Gradually being replaced by lithium-ion batteries

**Zinc-air batteries**
- Extremely high theoretical energy density
- But short cycle life, difficult recharging
- Still in laboratory research stage

**Aluminum-air batteries**
- High energy density, low cost
- Primary batteries requiring mechanical recharging
- Suitable for specific scenario applications

## 4. Comparison of Mechanical Energy Storage Technologies

### 4.1 Pumped Hydro Storage

**Technical Overview:**
Pumped hydro storage is currently the most technologically mature and largest-scale energy storage method, using off-peak electricity to pump water to an upper reservoir, releasing water to generate electricity during peak demand periods.

**Advantages:**
- Large capacity (GW-class)
- Long life (40-60 years)
- Mature and reliable technology
- Low unit cost

**Disadvantages:**
- Long construction period (6-8 years)
- Constrained by geographical conditions
- Certain impact on ecological environment

### 4.2 Compressed Air Energy Storage (CAES)

**Technical Overview:**
Compressed air energy storage uses off-peak electricity to compress air and store it in underground caverns or pressure vessels, releasing compressed air to drive turbines for power generation during peak demand.

**Advantages:**
- Large capacity, long life
- Suitable for long-duration storage
- Not dependent on water resources

**Disadvantages:**
- Relatively low efficiency (40-60%)
- Traditional CAES requires burning natural gas
- Geological requirements

**Development Directions:**
- Advanced adiabatic compressed air energy storage (AA-CAES)
- Liquid air energy storage (LAES)
- Salt cavern compressed air energy storage

### 4.3 Flywheel Energy Storage

**Technical Overview:**
Flywheel energy storage stores energy by using a motor to drive a high-speed rotating flywheel, with the flywheel driving the generator during discharge.

**Advantages:**
- Extremely fast response (millisecond level)
- Extremely long cycle life
- High charge-discharge efficiency (>90%)
- Environmentally friendly

**Disadvantages:**
- Low energy density
- Relatively high self-discharge rate
- Small single unit capacity

**Application Scenarios:**
- Frequency regulation auxiliary services
- Uninterruptible power supply (UPS)
- Rail transit energy recovery

## 5. New Energy Storage Technologies

### 5.1 Hydrogen Storage

Converting electrical energy to hydrogen energy through water electrolysis for storage, generating electricity through fuel cells or combustion turbines when needed. Suitable for ultra-long-duration, cross-seasonal energy storage.

### 5.2 Gravity Energy Storage

Storing and releasing energy by lifting and lowering heavy objects, similar to pumped hydro but not dependent on water resources.

### 5.3 Supercapacitors

Storing energy electrostatically, with extremely fast response but low energy density, suitable for high-power short-duration charge-discharge scenarios.

## 6. Cost Comparison Analysis

### 6.1 Initial Investment Cost

| Technology Route | Initial Investment (RMB/kWh) | Remarks |
|------------------|----------------------------|---------|
| LFP batteries | 800-1200 | Including BMS, PCS, system integration |
| Sodium-ion batteries | 1000-1500 | Still in early industrialization stage |
| All-vanadium flow battery | 2000-3000 | Power part + energy part |
| Pumped hydro | 3000-5000 | Including civil engineering |
| Compressed air | 2000-4000 | Depends on geological conditions |

### 6.2 Levelized Cost of Storage (LCOS)

LCOS is an important indicator for measuring the economic efficiency of energy storage, considering initial investment, O&M costs, lifetime, efficiency, and other factors.

With technological progress and scale effects, the LCOS of various energy storage technologies continues to decline. The LCOS of lithium-ion batteries has dropped to 0.3-0.5 RMB/kWh, having significant cost advantages in short-duration energy storage.

## 7. Application Scenario Adaptation Analysis

### 7.1 Generation-side Energy Storage

**Main functions:** Tracking planned output, smoothing output fluctuations, participating in frequency regulation and peak shaving
**Recommended technologies:** Lithium-ion batteries, flow batteries

### 7.2 Grid-side Energy Storage

**Main functions:** Peak shaving, frequency regulation, voltage regulation, black start, deferring grid investment
**Recommended technologies:** Lithium-ion batteries, pumped hydro, compressed air

### 7.3 User-side Energy Storage

**Main functions:** Peak-valley arbitrage, backup power, demand response
**Recommended technologies:** Lithium-ion batteries, sodium-ion batteries

### 7.4 Long-duration Energy Storage (>4 hours)

**Main functions:** Cross-day, cross-week or even cross-season energy transfer
**Recommended technologies:** Flow batteries, pumped hydro, compressed air, hydrogen storage

## 8. Development Trends and Outlook

### 8.1 Diversified Development

No single energy storage technology can meet the needs of all application scenarios, and multiple technology routes will coexist and complement each other for a long time.

### 8.2 Continuous Cost Reduction

With technological progress and large-scale development, costs of various energy storage technologies will continue to decline, and economic efficiency will continue to improve.

### 8.3 Rise of Long-duration Energy Storage

With the increasing proportion of new energy installed capacity, demand for long-duration energy storage becomes increasingly urgent, and long-duration storage technologies such as flow batteries, compressed air, and hydrogen storage will usher in rapid development.

### 8.4 System Integration Optimization

Developing from single energy storage technology to multi-technology integration and source-grid-load-storage integration, achieving system optimization.

### 8.5 Intelligence

Combining artificial intelligence, big data, IoT and other technologies to achieve intelligent control, intelligent operation and maintenance, and intelligent trading of energy storage systems.

## 9. Conclusion

The energy storage industry is in a golden period of rapid development, with technology routes showing diversified development trends. Lithium-ion batteries currently occupy a dominant position with their comprehensive performance advantages and mature industry chain; emerging technologies such as sodium-ion batteries and flow batteries are also developing rapidly, showing unique advantages in specific scenarios.

In the future, with large-scale grid integration of new energy and the advancement of new power system construction, the energy storage market space will continue to expand, and various technology routes will find their suitable application scenarios, jointly promoting energy transition and the realization of carbon neutrality goals.`,
  },
};
