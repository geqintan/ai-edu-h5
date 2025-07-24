# 技术背景 (techContext.md)

## 使用的技术

*   **前端框架：** Vue.js 3.x
    *   选择理由：轻量、高性能、易学易用，社区活跃，生态系统成熟。
*   **构建工具：** Vite
    *   选择理由：极速的开发服务器启动，即时热模块更新 (HMR)，开箱即用的构建优化。
*   **状态管理：** Pinia
    *   选择理由：Vue 官方推荐的状态管理库，API 更简洁直观，类型推断友好，更轻量。
*   **路由管理：** Vue Router 4.x
    *   选择理由：Vue 官方路由，与 Vue.js 深度集成，功能强大。
*   **HTTP 请求库：** Axios
    *   选择理由：基于 Promise 的 HTTP 客户端，支持浏览器和 Node.js，API 简洁，支持请求/响应拦截器。
*   **语言：** JavaScript (ES6+)
    *   选择理由：根据用户要求，不使用 TypeScript。
*   **样式预处理器：** (待定，可选择 Less 或 Sass)
    *   选择理由：提高 CSS 编写效率和可维护性，支持变量、嵌套、混合等。
*   **UI 组件库：** (待定，例如 Element Plus, Vant, Naive UI 等)
    *   选择理由：提供开箱即用的高质量 UI 组件，加速开发。

## 开发环境设置

*   **Node.js：** 推荐 LTS 版本 (例如 16.x 或 18.x)
*   **包管理器：** npm 或 yarn (推荐 npm)
*   **IDE：** Visual Studio Code
    *   推荐插件：Volar (Vue 3 支持), ESLint, Prettier

## 技术约束

*   **H5 兼容性：** 确保应用在主流移动浏览器和 WebView 环境下良好运行。
*   **API 依赖：** 前端开发进度受后端 API 接口开发进度的影响。
*   **性能优化：** 考虑到 H5 应用的特点，需要关注首屏加载速度、渲染性能和资源占用。

## 依赖管理

*   通过 `package.json` 管理项目依赖。
*   定期更新依赖，关注安全漏洞和性能改进。

## 工具使用模式

*   **代码格式化：** 使用 Prettier 统一代码风格。
*   **代码规范：** 使用 ESLint 检查代码质量和潜在问题。
*   **版本控制：** 使用 Git 进行版本控制，遵循 Git Flow 或 Trunk Based Development 工作流。
