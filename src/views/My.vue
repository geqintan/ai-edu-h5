<template>
  <div class="my-page">
    <h1>我的</h1>
    <van-button type="danger" block @click="logout" class="logout-button">注销登录</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('isLoggedIn'); // 移除登录状态
  showToast('已注销登录');
  router.replace('/login'); // 跳转到登录页面
};
</script>

<style scoped>
.my-page {
  padding: 20px;
  text-align: center;
}

.logout-button {
  margin-top: 20px;
}
</style>
