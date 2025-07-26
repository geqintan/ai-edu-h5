<template>
  <div class="enrollment-page">
    <h1>报名</h1>
    <van-tabs v-model:active="activeTab" sticky>
      <van-tab title="个人报名" name="individual">
        <div class="form-section">
          <van-form @submit="onSubmitIndividual">
            <van-cell-group inset>
              <van-field
                v-model="individualForm.name"
                name="name"
                label="姓名"
                placeholder="请输入姓名"
                :rules="[{ required: true, message: '请填写姓名' }]"
                autocomplete="name"
              />
              <van-field
                v-model="individualForm.phone"
                name="phone"
                label="手机号码"
                placeholder="请输入手机号码"
                :rules="[{ required: true, message: '请填写手机号码' }, { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不正确' }]"
                autocomplete="tel"
              />
              <van-field
                v-model="individualForm.company"
                name="company"
                label="所在企业"
                placeholder="请输入所在企业"
                :rules="[{ required: true, message: '请填写所在企业' }]"
                autocomplete="organization"
              />
              <van-field
                v-model="individualForm.position"
                name="position"
                label="职务"
                placeholder="请输入职务"
                :rules="[{ required: true, message: '请填写职务' }]"
                autocomplete="job-title"
              />
              <van-field
                v-model="individualForm.email"
                name="email"
                label="邮箱"
                placeholder="请输入邮箱"
                :rules="[{ required: true, message: '请填写邮箱' }, { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '邮箱格式不正确' }]"
                autocomplete="email"
              />
            </van-cell-group>
            <div style="margin: 16px;">
              <van-button round block type="primary" native-type="submit">
                提交报名
              </van-button>
            </div>
          </van-form>
        </div>
      </van-tab>

      <van-tab title="企业报名（开发中）" name="enterprise">
        <div class="form-section">
          <van-form @submit="onSubmitEnterprise">
            <van-cell-group inset>
              <van-field
                v-model="enterpriseForm.companyId"
                name="companyId"
                label="企业编号"
                placeholder="请输入企业编号"
                :rules="[{ required: true, message: '请填写企业编号' }]"
                disabled
              />
              <van-field
                v-model="enterpriseForm.enrollmentCount"
                name="enrollmentCount"
                label="报名人数"
                placeholder="请输入报名人数"
                type="number"
                :rules="[{ required: true, message: '请填写报名人数' }, { pattern: /^[1-9]\d*$/, message: '报名人数必须为正整数' }]"
                disabled
              />
              <van-field name="uploader" label="批量导入名单">
                <template #input>
                  <van-uploader v-model="enterpriseForm.fileList" :max-count="1" :after-read="afterReadFile" disabled />
                </template>
              </van-field>
            </van-cell-group>
            <div style="margin: 16px;">
              <van-button round block type="primary" native-type="submit" disabled>
                提交报名
              </van-button>
            </div>
          </van-form>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入 useRouter
import { Tabs, Tab, Form, Field, CellGroup, Button, Uploader, showToast } from 'vant';
import { enrollmentApi } from '@/api';

const router = useRouter(); // 初始化 router
const activeTab = ref('individual'); // 默认选中个人报名

// 个人报名表单数据
const individualForm = ref({
  name: '',
  phone: '',
  company: '',
  position: '', // 新增职务字段
  email: '',    // 新增邮箱字段
});

// 企业报名表单数据
const enterpriseForm = ref({
  companyId: '',
  enrollmentCount: '',
  fileList: [], // 用于文件上传
});

// 个人报名提交
const onSubmitIndividual = async (values) => {
  console.log('个人报名提交:', values);
  try {
    const res = await enrollmentApi.submitIndividualEnrollment(values);
    if (res.code === 200) { // 假设 200 表示成功
      showToast('个人报名提交成功！');
      // 可以在这里进行页面跳转或清空表单
      individualForm.value = {
        name: '',
        phone: '',
        company: '',
        position: '',
        email: '',
      };
      // 报名成功后跳转到支付页面
      router.push('/payment');
    }
  } catch (error) {
    console.error('个人报名提交失败:', error);
    // 错误信息已在拦截器中处理，这里无需再次 showToast
  }
};

// 企业报名提交
const onSubmitEnterprise = (values) => {
  console.log('企业报名提交:', values);
  showToast('企业报名提交成功！');
  // 这里可以添加API调用逻辑
};

// 文件读取完成后的回调函数
const afterReadFile = (file) => {
  console.log('文件读取完成:', file);
  // 可以在这里处理文件内容，例如解析CSV或Excel
  showToast('文件上传成功！');
};
</script>

<style scoped>
.enrollment-page {
  padding: 20px; /* 增加内边距 */
  text-align: center; /* 居中对齐 */
  padding-bottom: 60px; /* 为底部 Tabbar 留出空间 */
}

.enrollment-page h1 {
  font-size: 18px; /* 调整字体大小 */
  font-weight: bold; /* 设置粗体 */
  margin-bottom: 30px; /* 增加标题与内容的间距 */
  text-align: center; /* 居中对齐 */
}

.form-section {
  padding: 20px 0;
}
</style>
