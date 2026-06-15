# 旭日扬光光伏网站重建 - 技术架构文档

## 1. 架构设计

```mermaid
flowchart TB
    "前端层 React+Vite+Tailwind" --> "路由层 React Router"
    "路由层 React Router" --> "页面组件"
    "页面组件" --> "公共组件"
    "公共组件" --> "静态数据 Mock"
```

纯前端项目，无后端服务，所有数据以静态JSON/mock方式内嵌。

## 2. 技术说明

- **前端框架**：React@18 + TypeScript + Vite
- **样式方案**：Tailwind CSS@3
- **路由**：react-router-dom@6
- **状态管理**：zustand（用于产品分类筛选等交互状态）
- **图标库**：lucide-react
- **动画**：CSS transitions + 自定义hooks
- **初始化工具**：vite-init (react-ts 模板)
- **后端**：无（纯静态站点）
- **数据库**：无（使用mock数据）

## 3. 路由定义

| 路由路径 | 用途 |
|---------|------|
| `/` | 首页 - 轮播横幅、产品展示、公司简介、工程案例 |
| `/about` | 公司简介 - 公司介绍、主营业务、企业愿景 |
| `/products` | 产品中心 - 产品分类筛选与列表 |
| `/products/:id` | 产品详情 - 单个产品详细信息 |
| `/cases` | 工程案例 - 项目案例列表 |
| `/cases/:id` | 案例详情 - 单个案例详细信息 |
| `/contact` | 联系我们 - 联系信息与留言表单 |

## 4. 数据模型

### 4.1 产品数据

```typescript
interface Product {
  id: number;
  name: string;
  category: string;
  categoryId: number;
  description: string;
  image: string;
  features?: string[];
}
```

### 4.2 工程案例数据

```typescript
interface ProjectCase {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  category?: string;
}
```

### 4.3 公司信息数据

```typescript
interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  emails: string[];
  qq: string;
  introduction: string;
  mainBusiness: string[];
  vision: string;
}
```

## 5. 项目结构

```
src/
├── components/        # 公共组件
│   ├── Header.tsx     # 顶部导航栏
│   ├── Footer.tsx     # 底部信息栏
│   ├── HeroBanner.tsx # 轮播横幅
│   ├── ProductCard.tsx# 产品卡片
│   ├── CaseCard.tsx   # 案例卡片
│   └── CategoryNav.tsx# 分类导航
├── pages/             # 页面组件
│   ├── Home.tsx       # 首页
│   ├── About.tsx      # 公司简介
│   ├── Products.tsx   # 产品中心
│   ├── ProductDetail.tsx # 产品详情
│   ├── Cases.tsx      # 工程案例
│   ├── CaseDetail.tsx # 案例详情
│   └── Contact.tsx    # 联系我们
├── data/              # 静态数据
│   ├── products.ts    # 产品数据
│   ├── cases.ts       # 案例数据
│   └── company.ts     # 公司信息
├── hooks/             # 自定义hooks
│   └── useScrollToTop.ts
├── store/             # 状态管理
│   └── useAppStore.ts
├── App.tsx            # 根组件
└── main.tsx           # 入口文件
```
