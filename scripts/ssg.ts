/**
 * SSG (Static Site Generation) 构建脚本
 * 运行方式: npx tsx scripts/ssg.ts
 */
import { resolve, dirname, join } from 'path';
import { existsSync, mkdirSync, writeFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

const SITE_URL = 'https://solarising.cn';

// ─── 获取 Vite 构建后的实际文件名（带 hash）─────────────────────────────────────
const assetsDir = join(root, 'dist', 'assets');
const assetFiles = readdirSync(assetsDir);
const cssFile = assetFiles.find(f => f.endsWith('.css')) ?? 'index.css';
const jsFile = assetFiles.find(f => f.endsWith('.js') && !f.endsWith('.map.js')) ?? 'index.js';
console.log(`  CSS: ${cssFile}, JS: ${jsFile}`);

// ─── 导入数据（使用动态 import 支持 .ts 模块）──────────────────────────────────────
const dataModule = await import('./../src/data/index.ts');
const { products, categories } = dataModule as any;
const { cases } = dataModule as any;
const { articles } = dataModule as any;
const { company } = dataModule as any;

// ─── 工具函数 ──────────────────────────────────────────────────────────────────
function toSlug(str: string, fallback?: string): string {
  const slug = str.toLowerCase()
    .replace(/[\u4e00-\u9fa5]+/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  return slug || (fallback ? String(fallback) : 'page');
}

function generateMeta(title: string, desc: string, img?: string, type = 'website'): string {
  const ogImg = img || `${SITE_URL}/logo.png`;
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${desc}">`,
    `<meta property="og:image" content="${ogImg}">`,
    `<meta property="og:url" content="${SITE_URL}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<link rel="canonical" href="${SITE_URL}">`,
  ].join('\n    ');
}

function generateJSONLD(product?, article?, caseItem?) {
  let data;
  if (product) {
    data = {
      '@context': 'https://schema.org', '@type': 'Product',
      'name': product.name, 'description': product.description,
      'brand': { '@type': 'Brand', 'name': company.name },
      'image': product.image,
      'offers': { '@type': 'Offer', 'priceCurrency': 'CNY', 'availability': 'https://schema.org/InStock' },
    };
  } else if (article || caseItem) {
    const item = article || caseItem;
    data = {
      '@context': 'https://schema.org', '@type': 'Article',
      'headline': item.title, 'datePublished': item.date,
      'description': item.summary || item.description,
      'image': item.image,
      ...(article ? { 'author': { '@type': 'Organization', 'name': item.author } } : {}),
    };
  } else {
    data = {
      '@context': 'https://schema.org', '@type': 'Organization',
      'name': company.name, 'url': SITE_URL,
      'logo': `${SITE_URL}/logo.png`,
      'description': '专注光伏发电系统的研发、设计、销售、安装和服务',
      'address': { '@type': 'PostalAddress', 'streetAddress': company.address, 'addressCountry': 'CN' },
      'contactPoint': { '@type': 'ContactPoint', 'telephone': company.phone, 'contactType': 'customer service' },
    };
  }
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function htmlTemplate(meta: string, jsonld: string, content: string) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${meta}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/assets/${cssFile}">
  ${jsonld}
</head>
<body>
  <div id="root">${content}</div>
  <script type="module" src="/assets/${jsFile}"></script>
</body>
</html>`;
}

function writeFile(outputPath: string, html: string) {
  const full = join(root, outputPath);
  const dir = dirname(full);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, html, 'utf-8');
  console.log('  ✓', outputPath);
}

// ─── 页面渲染器 ────────────────────────────────────────────────────────────────

function renderHome(): { meta: string; content: string } {
  return {
    meta: generateMeta(
      '首页 - 南京旭日扬光光伏科技有限公司',
      '南京旭日扬光光伏科技有限公司专业从事光伏发电系统的研发、设计、销售、安装。主要产品包括工商业光伏、户用光伏、BIPV光伏建筑一体化、储能系统等清洁能源解决方案。'
    ),
    content: `
<div class="relative h-[500px] sm:h-[560px] md:h-[640px] lg:h-[720px] overflow-hidden">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20energy%20panels%20on%20modern%20building%2C%20golden%20sunlight%2C%20green%20environment&image_size=landscape_16_9" alt="旭日扬光" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/30 to-primary-900/60"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="text-center px-4">
      <p class="text-accent-400 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.3em] uppercase mb-4 md:mb-6">SUNRISING SOLAR</p>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">让清洁能源<br>照亮每一个明天</h1>
      <p class="text-primary-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto">专业的光伏发电系统解决方案提供商，致力于推动全球能源转型</p>
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
        <a href="/products" class="btn-accent px-6 sm:px-8 py-3 md:py-4 text-base md:text-lg">查看产品</a>
        <a href="/contact" class="btn-outline px-6 sm:px-8 py-3 md:py-4 text-base md:text-lg">联系我们</a>
      </div>
    </div>
  </div>
</div>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-8 sm:mb-10 md:mb-12">
      <p class="section-subtitle">Product Categories</p>
      <h2 class="section-title">产品系列</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
      ${categories.map(c => `
      <a href="/products" class="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer">
        <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-primary-100">
          <span class="text-xl sm:text-2xl md:text-3xl">☀️</span>
        </div>
        <span class="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-primary-500 transition-colors text-center leading-tight">${c.name}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="py-8 sm:py-10 md:py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
      <div><p class="section-subtitle">Products</p><h2 class="section-title">产品中心</h2></div>
      <a href="/products" class="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors">更多 <span>→</span></a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      ${products.slice(0, 6).map(p => `
      <a href="/products/${p.id}/${toSlug(p.name, String(p.id))}" class="card group">
        <div class="aspect-[4/3] rounded-t-xl overflow-hidden">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        </div>
        <div class="p-4">
          <p class="category-tag mb-2">${p.category}</p>
          <h3 class="text-base sm:text-lg font-bold text-primary-500 mb-2 group-hover:text-accent-500 transition-colors line-clamp-1">${p.name}</h3>
          <p class="text-gray-500 text-sm line-clamp-2">${p.description}</p>
        </div>
      </a>`).join('')}
    </div>
    <div class="mt-6 text-center md:hidden"><a href="/products" class="btn-primary inline-block px-6 py-3">查看全部产品</a></div>
  </div>
</section>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="flex items-end justify-between mb-4 sm:mb-6 md:mb-8">
      <div><p class="section-subtitle">About Us</p><h2 class="section-title">关于我们</h2></div>
      <a href="/about" class="hidden md:inline-flex items-center gap-1 md:gap-2 text-sm md:text-lg xl:text-xl text-accent-500 hover:text-accent-600 font-medium transition-colors">更多 <span>→</span></a>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20energy%20company%20office%20building%2C%20modern%20photovoltaic%20technology%20enterprise&image_size=landscape_16_9" alt="${company.name}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div>
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">${company.name}</h3>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">${company.introduction}</p>
        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          ${company.mainBusiness.map(b => `<div class="flex items-center gap-2 text-sm sm:text-base md:text-lg text-primary-700"><span class="w-2 h-2 bg-accent-400 rounded-full shrink-0"></span>${b}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>`,
  };
}

function renderAbout(): { meta: string; content: string } {
  return {
    meta: generateMeta(
      '公司简介 - 南京旭日扬光光伏科技有限公司',
      '南京旭日扬光光伏科技有限公司成立于2014年，专注于光伏发电系统的研发、设计、销售、安装和服务，提供户用光伏、工商业光伏、离网系统等全方位清洁能源解决方案。'
    ),
    content: `
<div class="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20company%20team%2C%20professional%20photovoltaic%20engineers%2C%20modern%20office&image_size=landscape_16_9" alt="公司简介" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40"></div>
  <div class="absolute inset-0 flex items-center"><div class="container mx-auto px-4">
    <p class="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-2 sm:mb-3">ABOUT US</p>
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">公司简介</h1>
  </div></div>
</div>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <p class="section-subtitle">Who We Are</p>
        <h2 class="section-title mb-4 sm:mb-6 md:mb-8">${company.name}</h2>
        <p class="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6">${company.introduction}</p>
        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          ${company.mainBusiness.map(b => `<div class="flex items-center gap-2 text-gray-700 text-sm sm:text-base md:text-lg"><span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400 rounded-full shrink-0"></span>${b}</div>`).join('')}
        </div>
      </div>
      <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20photovoltaic%20panels%20on%20commercial%20building%2C%20sustainable%20energy&image_size=landscape_16_9" alt="公司形象" class="w-full h-full object-cover" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary-900 to-accent-900">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <p class="section-subtitle text-accent-400 mb-3 sm:mb-4 md:mb-6">Our Vision</p>
      <h2 class="section-title text-white mb-4 sm:mb-6 md:mb-8">企业愿景</h2>
      <p class="text-primary-200 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">${company.vision}</p>
    </div>
  </div>
</section>`,
  };
}

function renderProducts(): { meta: string; content: string } {
  return {
    meta: generateMeta(
      '产品中心 - 南京旭日扬光光伏科技有限公司',
      '浏览南京旭日扬光全系列产品：工商业光伏、户用光伏、BIPV光伏建筑一体化、光伏车棚、便携式储能系统、光伏光热一体化等清洁能源解决方案。'
    ),
    content: `
<div class="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20products%2C%20photovoltaic%20panels%20collection%2C%20clean%20energy%20technology&image_size=landscape_16_9" alt="产品中心" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40"></div>
  <div class="absolute inset-0 flex items-center"><div class="container mx-auto px-4">
    <p class="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-2 sm:mb-3">PRODUCTS</p>
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">产品中心</h1>
  </div></div>
</div>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
      <button class="filter-btn active px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300" data-category="all">全部</button>
      ${categories.map(c => `<button class="filter-btn px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-all duration-300" data-category="${c.id}">${c.name}</button>`).join('')}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      ${products.map(p => `
      <a href="/products/${p.id}/${toSlug(p.name)}" class="card group">
        <div class="aspect-[4/3] rounded-t-xl overflow-hidden">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        </div>
        <div class="p-4">
          <p class="category-tag mb-2">${p.category}</p>
          <h3 class="text-base sm:text-lg font-bold text-primary-500 mb-2 group-hover:text-accent-500 transition-colors line-clamp-1">${p.name}</h3>
          <p class="text-gray-500 text-sm line-clamp-2">${p.description}</p>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>`,
  };
}

function renderCases(): { meta: string; content: string } {
  return {
    meta: generateMeta(
      '工程案例 - 南京旭日扬光光伏科技有限公司',
      '查看南京旭日扬光光伏工程案例：南京新庄六角广场60kw光伏、河西生态公园6KW光伏、滁州居民屋顶光伏等成功案例，展示公司在工商业光伏、户用光伏、政府工程领域的丰富经验。'
    ),
    content: `
<div class="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solar%20installation%20cases%2C%20photovoltaic%20projects&image_size=landscape_16_9" alt="工程案例" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40"></div>
  <div class="absolute inset-0 flex items-center"><div class="container mx-auto px-4">
    <p class="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-2 sm:mb-3">CASES</p>
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">工程案例</h1>
  </div></div>
</div>

<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      ${cases.map(c => `
      <a href="/cases/${c.id}/${toSlug(c.title, String(c.id))}" class="card group">
        <div class="aspect-[16/10] rounded-t-xl overflow-hidden">
          <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="tag">${c.category}</span>
            <span class="text-xs text-gray-400">${c.date}</span>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-primary-500 group-hover:text-accent-500 transition-colors line-clamp-2">${c.title}</h3>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>`,
  };
}

function renderContact(): { meta: string; content: string } {
  return {
    meta: generateMeta(
      '联系我们 - 南京旭日扬光光伏科技有限公司',
      `联系南京旭日扬光光伏科技有限公司。地址：${company.address}，电话：${company.phone}，邮箱：${company.emails[0]}。我们将为您提供专业的光伏系统解决方案咨询。`
    ),
    content: `
<div class="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contact%20us%20business%20communication%2C%20modern%20office%20building&image_size=landscape_16_9" alt="联系我们" class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-primary-900/60"></div>
  <div class="absolute inset-0 flex items-center"><div class="container mx-auto px-4">
    <p class="text-accent-400 text-sm sm:text-base md:text-lg tracking-widest mb-1 sm:mb-2 md:mb-3">CONTACT US</p>
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">联系我们</h1>
  </div></div>
</div>

<section class="py-8 sm:py-10 md:py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <div>
        <p class="section-subtitle">Contact Us</p>
        <h2 class="section-title mb-4 sm:mb-6">联系方式</h2>
        <div class="space-y-4 sm:space-y-6">
          <div class="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><span class="text-2xl sm:text-3xl md:text-4xl">📍</span></div>
            <div><h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">公司地址</h3><p class="text-gray-600 text-sm sm:text-base md:text-lg">${company.address}</p></div>
          </div>
          <div class="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><span class="text-2xl sm:text-3xl md:text-4xl">📞</span></div>
            <div><h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">联系电话</h3><p class="text-gray-600 text-sm sm:text-base md:text-lg">${company.phone}</p></div>
          </div>
          ${company.emails.map(e => `
          <div class="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><span class="text-2xl sm:text-3xl md:text-4xl">✉️</span></div>
            <div><h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">电子邮箱</h3><p class="text-gray-600 text-sm sm:text-base md:text-lg">${e}</p></div>
          </div>`).join('')}
          <div class="flex items-start gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><span class="text-2xl sm:text-3xl md:text-4xl">💬</span></div>
            <div><h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-500 mb-1 sm:mb-2">QQ</h3><p class="text-gray-600 text-sm sm:text-base md:text-lg">${company.qq}</p></div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-500 mb-4 sm:mb-6 md:mb-8">在线留言</h2>
        <form class="space-y-4 sm:space-y-5 md:space-y-6">
          <div><label class="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">昵称</label><input type="text" class="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 outline-none" placeholder="请输入您的昵称"></div>
          <div><label class="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">电子邮件 *</label><input type="email" required class="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 outline-none" placeholder="请输入您的邮箱"></div>
          <div><label class="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1 sm:mb-2">内容</label><textarea rows={4} class="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-xl text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-accent-400 outline-none resize-none" placeholder="请输入留言内容"></textarea></div>
          <button type="submit" class="btn-primary w-full">提交留言</button>
        </form>
      </div>
    </div>
  </div>
</section>`,
  };
}

function renderProductDetail(product: any): { meta: string; content: string } {
  return {
    meta: generateMeta(`${product.name} - 产品中心 - ${company.name}`, product.description, product.image, 'product'),
    content: `
<div class="bg-white border-b py-2 sm:py-3">
  <div class="container mx-auto px-4">
    <div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500">
      <a href="/" class="hover:text-primary-500">首页</a><span>/</span>
      <a href="/products" class="hover:text-primary-500">产品中心</a><span>/</span>
      <span class="text-primary-500 line-clamp-1">${product.name}</span>
    </div>
  </div>
</div>
<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <div class="aspect-[4/3] rounded-xl overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
      </div>
      <div>
        <span class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-50 text-accent-600 text-sm sm:text-base md:text-lg rounded-md font-medium mb-3 sm:mb-4">${product.category}</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">${product.name}</h1>
        <p class="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">${product.description}</p>
        ${product.features?.length ? `
        <div>
          <h3 class="text-xl sm:text-2xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">产品特点</h3>
          <ul class="space-y-2 sm:space-y-3 md:space-y-4">
            ${product.features.map(f => `<li class="flex items-center gap-2 sm:gap-3 text-gray-600 text-base sm:text-lg md:text-xl"><span class="text-accent-400">✓</span><span>${f}</span></li>`).join('')}
          </ul>
        </div>` : ''}
        <div class="mt-6 sm:mt-8"><a href="/contact" class="btn-accent">咨询详情</a></div>
      </div>
    </div>
  </div>
</section>`,
  };
}

function renderCaseDetail(caseItem: any): { meta: string; content: string } {
  return {
    meta: generateMeta(`${caseItem.title} - 工程案例 - ${company.name}`, caseItem.description, caseItem.image, 'article'),
    content: `
<div class="bg-white border-b py-2 sm:py-3">
  <div class="container mx-auto px-4">
    <div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500">
      <a href="/" class="hover:text-primary-500">首页</a><span>/</span>
      <a href="/cases" class="hover:text-primary-500">工程案例</a><span>/</span>
      <span class="text-primary-500 line-clamp-1">${caseItem.title}</span>
    </div>
  </div>
</div>
<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="aspect-[16/9] rounded-xl overflow-hidden mb-6 sm:mb-8">
        <img src="${caseItem.image}" alt="${caseItem.title}" class="w-full h-full object-cover">
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4 sm:mb-6">${caseItem.title}</h1>
      <div class="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-400">
        <div class="flex items-center gap-2">📅 ${caseItem.date}</div>
        <div class="flex items-center gap-2">🏷️ ${caseItem.category}</div>
      </div>
      <div><p class="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">${caseItem.description}</p></div>
      <div class="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
        <a href="/cases" class="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-500 hover:text-accent-500 transition-colors font-medium">← 返回工程案例</a>
      </div>
    </div>
  </div>
</section>`,
  };
}

function renderArticleDetail(article: any): { meta: string; content: string } {
  const contentHtml = article.content
    .replace(/^## (.*$)/gim, '<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mt-6 sm:mt-8 mb-3 sm:mb-4">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 mt-4 sm:mt-6 mb-2 sm:mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\* (.*$)/gim, '<li class="ml-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">$1</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">')
    .replace(/^(?!<h|<\/p)(.*)/gm, '<p class="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">$1</p>');

  return {
    meta: generateMeta(`${article.title} - SIL 研究院 - ${company.name}`, article.summary, article.image, 'article'),
    content: `
<div class="bg-white border-b py-2 sm:py-3">
  <div class="container mx-auto px-4">
    <div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500">
      <a href="/" class="hover:text-primary-500">首页</a><span>/</span>
      <a href="/sil" class="hover:text-primary-500">SIL 研究院</a><span>/</span>
      <span class="text-primary-500 line-clamp-1">${article.title}</span>
    </div>
  </div>
</div>
<section class="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="aspect-[16/9] rounded-xl overflow-hidden mb-6 sm:mb-8">
        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-gray-400">
        <div class="flex items-center gap-2">📅 ${article.date}</div>
        <div class="flex items-center gap-2">🏷️ ${article.category}</div>
        <div class="flex items-center gap-2">✍️ ${article.author}</div>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4 sm:mb-6">${article.title}</h1>
      <div class="prose max-w-none mb-8">${contentHtml}</div>
      <div class="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">${article.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="pt-6 sm:pt-8 border-t">
        <a href="/sil" class="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-500 hover:text-accent-500 transition-colors font-medium">← 返回SIL研究院</a>
      </div>
    </div>
  </div>
</section>`,
  };
}

// ─── 主函数 ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 开始 SSG 构建...\n');
  const pages: Array<{ html: string; path: string }> = [];

  // 1. 首页
  const home = renderHome();
  pages.push({ html: htmlTemplate(home.meta, generateJSONLD(), home.content), path: 'dist/index.html' });
  console.log('  ✓ 首页 /');

  // 2. 静态页面
  const staticPages = [
    { fn: renderAbout, label: '公司简介', out: 'dist/about/index.html' },
    { fn: renderProducts, label: '产品中心', out: 'dist/products/index.html' },
    { fn: renderCases, label: '工程案例', out: 'dist/cases/index.html' },
    { fn: renderContact, label: '联系我们', out: 'dist/contact/index.html' },
  ];
  for (const { fn, label, out } of staticPages) {
    const page = fn();
    pages.push({ html: htmlTemplate(page.meta, generateJSONLD(), page.content), path: out });
    console.log(`  ✓ ${label}`);
  }

  // 3. 产品详情页
  for (const p of products) {
    const slug = toSlug(p.name);
    const detail = renderProductDetail(p);
    pages.push({ html: htmlTemplate(detail.meta, generateJSONLD(p), detail.content), path: `dist/products/${p.id}/${slug}/index.html` });
    console.log(`  ✓ 产品: /products/${p.id}/${slug}`);
  }

  // 4. 案例详情页
  for (const c of cases) {
    const slug = toSlug(c.title);
    const detail = renderCaseDetail(c);
    pages.push({ html: htmlTemplate(detail.meta, generateJSONLD(null, null, c), detail.content), path: `dist/cases/${c.id}/${slug}/index.html` });
    console.log(`  ✓ 案例: /cases/${c.id}/${slug}`);
  }

  // 5. 文章详情页
  for (const a of articles) {
    const slug = toSlug(a.title, String(a.id));
    const detail = renderArticleDetail(a);
    pages.push({ html: htmlTemplate(detail.meta, generateJSONLD(null, a), detail.content), path: `dist/sil/articles/${a.id}/${slug}/index.html` });
    console.log(`  ✓ 文章: /sil/articles/${a.id}/${slug}`);
  }

  // 写入页面
  for (const { html, path } of pages) {
    writeFile(path, html);
  }
  console.log(`\n📄 共生成 ${pages.length} 个 HTML 页面\n`);

  // 6. sitemap.xml
  const sitemapEntries = pages.map(p => {
    let urlPath = p.path;
    if (urlPath.endsWith('index.html')) {
      urlPath = urlPath.replace(/\/?index\.html$/, '');
    }
    urlPath = urlPath.replace(/^dist\//, '');
    const loc = urlPath === '' ? SITE_URL : `${SITE_URL}/${urlPath}`;
    const priority = urlPath === '' ? '1.0' :
      p.path.includes('/products/') ? '0.9' :
      p.path.includes('/cases/') ? '0.8' :
      p.path.includes('/articles/') ? '0.8' : '0.7';
    return `<url><loc>${loc}</loc><priority>${priority}</priority><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>`;
  });
  writeFileSync(join(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>`);
  console.log('  ✓ sitemap.xml');

  // 7. robots.txt
  writeFileSync(join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml`);
  console.log('  ✓ robots.txt');

  // 8. 404.html SPA 路由兜底
  const routeMap = pages.map(p => {
    let from = p.path.replace(/^dist\//, '').replace(/\/index\.html$/, '');
    let to = p.path.replace(/^dist\//, '');
    if (from === '') from = '/';
    if (to === '') to = '/';
    return { from, to };
  });
  const fallback404 = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面未找到</title>
  <link rel="stylesheet" href="./assets/${cssFile}">
</head>
<body class="bg-gray-50">
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary-500 mb-4">404</h1>
      <p class="text-gray-500 text-xl mb-8">页面未找到</p>
      <a href="/" class="btn-primary inline-block px-8 py-3 text-lg">返回首页</a>
    </div>
  </div>
  <script>
(function(){
  var path = location.pathname.replace(/\\/$/, '');
  var map = ${JSON.stringify(routeMap)};
  for (var i = 0; i < map.length; i++) {
    if (path === map[i].from) { location.href = map[i].to; return; }
  }
  if (!path.endsWith('.html') && path !== '') {
    var withHtml = path + '.html';
    var img = new Image();
    img.onerror = function(){ location.href = '/404.html'; };
    img.src = '.' + withHtml + '?' + Date.now();
    setTimeout(function(){ if(img.complete) location.href = withHtml; }, 800);
  }
})();
  </script>
</body>
</html>`;
  writeFileSync(join(root, 'dist/404.html'), fallback404);
  console.log('  ✓ 404.html (SPA 路由兜底)\n');

  console.log('🎉 SSG 构建完成！');
}

main().catch(err => { console.error('❌ SSG 失败:', err); process.exit(1); });
