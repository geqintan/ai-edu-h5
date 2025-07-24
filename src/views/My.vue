<template>
  <div class="my-page">
    <h1>我的</h1>

    <van-tabs v-model:active="activeTab" sticky>
      <van-tab title="个人订单" name="individualOrders">
        <div class="order-list">
          <van-empty v-if="individualOrders.length === 0" description="暂无个人订单" />
          <van-card
            v-for="order in individualOrders"
            :key="order.id"
            :title="order.name"
            :desc="`手机号码: ${order.phone} | 订单号: ${order.orderId}`"
            :num="order.quantity"
            :price="order.price"
            :thumb="order.thumb"
          >
            <template #tags>
              <van-tag plain type="primary">{{ order.status }}</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" @click="viewOrderDetails(order.id)">查看详情</van-button>
              <van-button size="mini" type="primary" v-if="order.status === '待支付'">去支付</van-button>
            </template>
          </van-card>
        </div>
      </van-tab>

      <van-tab title="企业订单" name="enterpriseOrders">
        <div class="order-list">
          <van-empty v-if="enterpriseOrders.length === 0" description="暂无企业订单" />
          <van-card
            v-for="order in enterpriseOrders"
            :key="order.id"
            :title="order.courseName"
            :desc="`订单号: ${order.orderId}`"
            :num="order.quantity"
            :price="order.price"
            :thumb="order.thumb"
          >
            <template #tags>
              <van-tag plain type="primary">{{ order.status }}</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" @click="viewOrderDetails(order.id)">查看详情</van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>

    <van-button type="danger" block @click="logout" class="logout-button">注销登录</van-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { showToast, Tabs, Tab, Card, Tag, Button, Empty } from 'vant';
import { orderApi } from '@/api';

const router = useRouter();
const activeTab = ref('individualOrders'); // 默认选中个人订单
const individualOrders = ref([
  {
    id: 'demo-001',
    orderId: 'ORDER-20230725-001',
    name: '张三',
    phone: '13812345678',
    company: 'ABC 公司',
    position: '工程师',
    email: 'zhangsan@example.com',
    courseName: 'AI 基础入门',
    quantity: 1,
    price: '999.00',
    thumb: 'https://via.placeholder.com/100x100?text=AI+Course',
    status: '已报名',
  },
  {
    id: 'demo-002',
    orderId: 'ORDER-20230725-002',
    name: '李四',
    phone: '13987654321',
    company: 'XYZ 科技',
    position: '产品经理',
    email: 'lisi@example.com',
    courseName: '深度学习进阶',
    quantity: 1,
    price: '1999.00',
    thumb: 'https://via.placeholder.com/100x100?text=DL+Course',
    status: '待支付',
  },
]);
const enterpriseOrders = ref([]); // 企业订单暂时保持为空

// 移除 fetchIndividualOrders 和 fetchEnterpriseOrders 函数，因为现在使用演示数据
// const fetchIndividualOrders = async () => { ... };
// const fetchEnterpriseOrders = async () => { ... };

const viewOrderDetails = (orderId) => {
  showToast(`查看订单详情: ${orderId}`);
  // 实际应用中会跳转到订单详情页
};

onMounted(() => {
  // 移除 API 调用，直接使用演示数据
  // fetchIndividualOrders();
  // fetchEnterpriseOrders();
});

const logout = () => {
  localStorage.removeItem('isLoggedIn'); // 移除登录状态
  localStorage.removeItem('token'); // 移除 token
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
