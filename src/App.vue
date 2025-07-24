<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { Tabbar, TabbarItem } from 'vant'; // 引入 Vant Tabbar 组件

const route = useRoute();
const router = useRouter();
const activeTab = ref('home'); // 默认选中主页

// 监听路由变化，更新 activeTab
watch(
  () => route.name,
  (newName) => {
    if (['home', 'enrollment', 'customerService', 'my'].includes(newName)) {
      activeTab.value = newName;
    }
  },
  { immediate: true }
);

// Tabbar 切换时跳转路由
const onTabChange = (name) => {
  router.push({ name: name });
};
</script>

<template>
  <div class="app-container">
    <RouterView />

    <van-tabbar v-model="activeTab" @change="onTabChange" fixed placeholder>
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="enrollment" icon="apps-o">报名</van-tabbar-item>
      <van-tabbar-item name="customerService" icon="service-o">客服</van-tabbar-item>
      <van-tabbar-item name="my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保内容区域至少占满视口高度 */
}

.van-tabbar {
  /* 确保 Tabbar 在底部 */
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
