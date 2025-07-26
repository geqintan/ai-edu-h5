<template>
  <div class="login-page">
    <h1>登录 / 注册</h1>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          autocomplete="username"
        />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            autocomplete="current-password"
          />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" @click="isRegister = false">
          登录
        </van-button>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="default" native-type="submit" @click="isRegister = true">
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

const isRegister = ref(false); // 用于判断是登录还是注册操作

const onSubmit = async (values) => {
  if (isRegister.value) {
    // 注册逻辑
    try {
      const res = await loginApi.register({ username: values.username, password: values.password });
      if (res.code === 200) {
        showToast('注册成功，请登录！');
        username.value = '';
        password.value = '';
      }
    } catch (error) {
      console.error('注册失败:', error);
    }
  } else {
    // 登录逻辑
    try {
      const res = await loginApi.login({ username: values.username, password: values.password });
      if (res.code === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', res.data.token);
        showToast('登录成功！');
        const redirect = router.currentRoute.value.query.redirect || '/';
        router.replace(redirect);
      }
    } catch (error) {
      console.error('登录失败:', error);
    }
  }
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  text-align: center;
}

.login-page h1 {
  font-size: 18px; /* 调整字体大小 */
  font-weight: bold; /* 设置粗体 */
  margin-bottom: 30px; /* 增加标题与表单的间距 */
}
</style>
