<template>
  <div class="login-page">
    <h1>登录 / 注册</h1>
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
      <div style="margin: 16px;">
        <van-button round block type="default" @click="onRegister">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import { loginApi } from '@/api';

const router = useRouter();
const username = ref('');
const password = ref('');

const onLogin = async () => {
  // 模拟登录逻辑
  try {
    // 假设后端登录接口为 /api/login
    const res = await loginApi.login({ username: username.value, password: password.value });
    if (res.code === 200) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', res.data.token); // 假设返回 token
      showToast('登录成功！');
      const redirect = router.currentRoute.value.query.redirect || '/';
      router.replace(redirect);
    }
  } catch (error) {
    console.error('登录失败:', error);
    // 错误信息已在拦截器中处理，这里可以根据 error.message 或 error.code 进行更具体的处理
    // 例如：if (error.code === 401) { showToast('用户名或密码错误'); }
  }
};

const onRegister = async () => {
  // 模拟注册逻辑
  try {
    // 假设后端注册接口为 /api/register
    const res = await loginApi.register({ username: username.value, password: password.value });
    if (res.code === 200) {
      showToast('注册成功，请登录！');
      // 注册成功后可以清空表单或自动跳转到登录
      username.value = '';
      password.value = '';
    }
  } catch (error) {
    console.error('注册失败:', error);
    // 错误信息已在拦截器中处理
  }
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  text-align: center;
}
</style>
