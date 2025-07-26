<template>
  <div class="home-page">
    <img :src="bannerImage" alt="Banner" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="activityBgImage" alt="活动背景" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="trainingFormImage" alt="培训形式" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="courseScheduleImage" alt="课程安排" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="trainingFeature1Image" alt="培训特色1" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="trainingFeature2Image" alt="培训特色2" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="trainingCostImage" alt="培训费用" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: -1px;" />
    <img :src="enrollmentInfoImage" alt="报名信息" style="width: calc(100% + 40px); display: block; margin-left: -20px; margin-bottom: 20px;" />
    <!-- 活动详情 -->
    <div class="activity-details" v-if="false">
      <h2 class="activity-title">{{ course.title }}</h2>

      <div class="info-card flex-container">
        <div class="flex-item">
          <van-icon name="gold-coin-o" size="24" color="#1989fa" />
          <div class="text-content">
            <div class="title">活动费用</div>
            <div class="value">
              <span class="price">128元</span>
              <span class="payment-method"></span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex-item">
          <van-icon name="clock-o" size="24" color="#1989fa" />
          <div class="text-content">
            <div class="title">活动时间</div>
            <div class="value">08-18~09-16</div>
          </div>
        </div>
      </div>

      <van-cell-group inset class="info-card">
        <van-cell title="活动地点" value="湖南省常德市武陵区白马湖街道朝阳路变压器场 紫河湾" icon="location-o" is-link />
      </van-cell-group>

      <van-cell-group inset class="info-card">
        <van-cell title="活动规则" />
        <van-cell title="报名状态" value="报名中" />
        <van-cell title="活动时间" value="2025年02月17日12:12 ~ 2027年02月17日12:12" />
        <van-cell title="报名截止时间" value="2027-02-17 12:12" />
        <van-cell title="人数限定" value="21/50" />
        <van-cell title="审核规则" value="报名后无需审核" />
        <van-cell title="取消规则" value="报名截止前可取消" />
      </van-cell-group>
    </div>

    <div class="past-courses-section" v-if="false">
      <h2>往期热门培训班</h2>
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item>
          <img src="https://via.placeholder.com/150x100?text=Past+Course+1" alt="往期课程1" style="width: 100%; display: block; border-radius: 8px;" />
          <p class="course-title">往期课程名称1</p>
        </van-grid-item>
        <van-grid-item>
          <img src="https://via.placeholder.com/150x100?text=Past+Course+2" alt="往期课程2" style="width: 100%; display: block; border-radius: 8px;" />
          <p class="course-title">往期课程名称2</p>
        </van-grid-item>
        <!-- 如果有更多往期课程，可以继续添加 van-grid-item -->
      </van-grid>
    </div>

    <div class="enroll-button-section">
      <van-button type="primary" block to="/enrollment" class="enroll-button">立即报名</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button, Grid, GridItem, Cell, CellGroup, showToast } from 'vant'; // 引入 Vant 按钮、Grid、Cell 和 CellGroup 组件
import bannerImage from '@/assets/banner.jpg'; // 导入banner图片
import activityBgImage from '@/assets/活动背景.jpg'; // 导入活动背景图片
import trainingFormImage from '@/assets/培训形式.jpg'; // 导入培训形式图片
import courseScheduleImage from '@/assets/课程安排.jpg'; // 导入课程安排图片
import trainingFeature1Image from '@/assets/培训特色1.jpg'; // 导入培训特色1图片
import trainingFeature2Image from '@/assets/培训特色2.jpg'; // 导入培训特色2图片
import trainingCostImage from '@/assets/培训费用.jpg'; // 导入培训费用图片
import enrollmentInfoImage from '@/assets/报名信息.jpg'; // 导入报名信息图片
import { courseApi } from '@/api'; // 导入 courseApi

// Home 页面逻辑
const course = ref({
  id: null,
  name: '',
  title: '加载中...', // 默认显示加载中
  // 其他字段根据实际API返回补充
});

onMounted(async () => {
  try {
    // 假设课程ID为1，实际应用中可能从路由参数获取
    const response = await courseApi.getCourseDetails(1);
    if (response.code === 200) {
      course.value = response.data; // 假设API返回的数据在 response.data 中
    } else {
      showToast(response.message || '获取课程信息失败');
    }
  } catch (error) {
    console.error('获取课程信息出错:', error);
    showToast('获取课程信息出错');
  }
});
</script>

<style scoped>
.home-page {
  padding: 0 20px 60px; /* 顶部不留白，左右20px，底部60px */
  text-align: center; /* 居中对齐 */
}

.home-page h1 {
  font-size: 18px; /* 调整字体大小 */
  font-weight: bold; /* 设置粗体 */
  margin-bottom: 30px; /* 增加标题与内容的间距 */
  text-align: center; /* 居中对齐 */
}

.main-course-info {
  padding: 20px;
  text-align: center;
  background-color: #f7f8fa;
  margin: 10px;
  border-radius: 8px;
}

.main-course-info h3 {
  margin-top: 0;
  color: #333;
}

.main-course-info p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.enroll-button-section {
  padding: 20px; /* 与 home-page 的 padding 保持一致 */
}

.past-courses-section {
  padding: 20px;
  text-align: center;
}

.past-courses-section h2 {
  margin-bottom: 15px;
  color: #333;
}

.activity-details {
  padding: 0 0px; /* 与 home-page 的 padding 保持一致 */
  text-align: left; /* 文本左对齐 */
}

.activity-title {
  font-size: 24px; /* 调整字体大小以匹配图片 */
  font-weight: bold; /* 保持粗体 */
  margin-top: 20px;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
}

.info-card {
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden; /* 确保圆角生效 */
  background-color: #fff; /* 背景色 */
  padding: 15px 0; /* 内部上下边距 */
}

.flex-container {
  display: flex;
  justify-content: space-around; /* 均匀分布 */
  align-items: center;
  padding: 0 0px; /* 左右内边距 */
}

.flex-item {
  display: flex;
  align-items: center;
  flex: 1; /* 均分空间 */
  padding: 0 10px;
}

.flex-item .van-icon {
  margin-right: 10px;
}

.flex-item .text-content {
  text-align: left;
}

.flex-item .title {
  font-size: 15px; /* 调整字体大小 */
  color: #333;
  margin-bottom: 5px;
}

.flex-item .value {
  font-size: 13px;
  color: #666;
}

.price {
  color: #ff976a; /* 橙色 */
  font-weight: bold;
  font-size: 16px; /* 调整字体大小 */
  margin-right: 5px;
}

.payment-method {
  color: #969799; /* 灰色 */
  font-size: 13px; /* 保持与value一致 */
}

.divider {
  width: 1px;
  height: 40px; /* 分隔线高度 */
  background-color: #ebedf0; /* 分隔线颜色 */
  margin: 0 10px;
}

.course-title {
  font-size: 13px;
  color: #666;
  margin-top: 5px;
}
</style>
