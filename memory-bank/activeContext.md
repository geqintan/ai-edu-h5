# 当前上下文 (activeContext.md)

## 当前工作焦点

*   根据用户需求，构建一个基于 Vue.js 的 H5 单页面前端应用。
*   实现培训报名、客服咨询、付款、订单查询等核心功能。
*   所有数据交互通过 API 接口进行。
*   已初步制定项目方案 (`方案.md`)，并根据用户反馈移除了 TypeScript 的使用。
*   已完成基本的用户名密码注册和登录功能。
*   已初步制定项目方案 (`方案.md`)，并根据用户反馈移除了 TypeScript 的使用。
*   记忆库文件已初始化并填充，并根据项目进展进行了更新。

## 最近变更

*   `方案.md`：更新了技术栈，移除了 TypeScript 相关内容。
*   `memory-bank/projectbrief.md`：创建并定义了项目核心需求、目标、范围和成功标准。
*   `memory-bank/productContext.md`：创建并定义了项目存在的意义、产品功能愿景、用户体验目标和目标用户。
*   `memory-bank/systemPatterns.md`：创建并定义了系统架构、关键技术决策、设计模式、组件关系和关键实现路径，并根据用户反馈更新了报名记录、订单、付款和发票之间的关系。
*   `memory-bank/techContext.md`：创建并定义了使用的技术、开发环境设置、技术约束、依赖管理和工具使用模式。
*   `memory-bank/progress.md`：创建并持续更新项目进展、已完成工作、剩余工作和已知问题。
*   `src/api/index.js`：
    *   创建了 Axios 实例，并添加了请求和响应拦截器，用于统一处理 API 请求、响应和错误。
    *   定义了 `enrollmentApi` 和 `loginApi`，包括 `submitIndividualEnrollment`、`login` 和 `register` 方法。
    *   优化了响应拦截器，使其能优先显示后端返回的错误信息。
*   `src/views/Home.vue`：修改了“立即报名”按钮的跳转链接到报名页 (`/enrollment`)。
*   `src/views/Enrollment.vue`：修改了 `onSubmitIndividual` 函数，使其调用 `enrollmentApi.submitIndividualEnrollment` 接口，并在成功后清空表单。
*   `src/views/Login.vue`：
    *   修改了模板，将标题改为“登录 / 注册”，并添加了“注册”按钮。
    *   修改了 `onLogin` 函数，使其调用 `loginApi.login` 接口，并在成功后存储 `isLoggedIn` 和 `token`。
    *   添加了 `onRegister` 函数，使其调用 `loginApi.register` 接口，并在成功后提示用户注册成功并清空表单。
*   `src/config/index.js`：创建了配置文件，用于存放全局配置，包括 `apiBaseUrl`。
*   `vite.config.js`：移除了 `/api` 的代理配置，因为现在 API 请求将直接使用配置文件中的完整 URL。

## 下一步计划

1.  与用户确认当前已更新的记忆库文件内容是否符合预期，并询问下一步的开发方向。

## 活跃决策与考量

*   **技术栈选择：** Vue.js 3.x, Vite, Pinia, Vue Router, Axios, JavaScript。
*   **UI 组件库：** 待用户或设计团队提供具体设计稿后选择。
*   **认证机制：** 已初步实现登录注册，后续根据后端 API 接口文档明确具体实现方案。
*   **样式预处理器：** 待团队偏好确定后选择 Less 或 Sass。
*   **API 基础 URL 配置：** 将后端 API 基础 URL 移至 `src/config/index.js` 进行统一管理，提高可维护性。
*   **Axios 错误处理：** 优化了 Axios 响应拦截器，确保前端能接收并显示后端返回的明确错误信息。
*   **数据模型调整：** 根据用户反馈，明确了报名记录、订单、付款和发票之间的关系：一个订单可以对应多条报名记录，也可以对应一条报名记录，且必须至少对应一条报名记录；每一个订单对应一个付款记录，但发票可以对应多个付款记录。

## 学习与项目洞察

*   用户对技术栈有明确偏好，例如不使用 TypeScript，这需要在后续开发中严格遵守。
*   记忆库的持续更新是确保项目上下文一致性的关键步骤。
*   前端与后端 API 接口的联调需要明确的错误码和错误信息约定，以便前端能提供友好的用户反馈。
*   Vite 的代理配置在直接使用完整 API URL 后不再需要。
*   数据模型的设计是核心，需要与后端保持一致，并根据业务需求进行调整。
