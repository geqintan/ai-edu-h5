import './assets/main.css'
import 'vant/lib/index.css'; // 引入 Vant 样式

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, Grid, GridItem, Tabs, Tab, Form, Field, CellGroup, Uploader, showToast, Card, Tag, Empty } from 'vant'; // 引入 Vant Tabbar、Swipe、Button、Grid、Tabs、Tab、Form、Field、CellGroup、Uploader、showToast、Card、Tag 和 Empty 组件

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 全局注册 Vant 组件
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Button);
app.use(Grid);
app.use(GridItem);
app.use(Tabs);
app.use(Tab);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Uploader);
app.use(Card); // 注册 Card 组件
app.use(Tag); // 注册 Tag 组件
app.use(Empty); // 注册 Empty 组件
// showToast 是函数，不需要 app.use() 注册，直接导入使用即可

app.mount('#app')
