<template>
  <div class="login-page">
    <h1>请登录</h1>
    <van-form @submit="onLogin">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter();
const username = ref('');
const password = ref('');

const onLogin = () => {
  // 模拟登录逻辑
  if (username.value === '1' && password.value === '1') {
    // 模拟设置登录状态
    localStorage.setItem('isLoggedIn', 'true');
    showToast('登录成功！');
    // 登录成功后跳转回之前尝试访问的页面，或者默认跳转到主页
    const redirect = router.currentRoute.value.query.redirect || '/';
    router.replace(redirect);
  } else {
    showToast('用户名或密码错误！');
  }
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  text-align: center;
}
</style>
