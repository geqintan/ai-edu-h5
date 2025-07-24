<template>
  <div class="home-page">
    <van-swipe :autoplay="3000" indicator-color="white">
      <!-- 海报图片将在这里动态渲染 -->
      <van-swipe-item>
        <img src="@/assets/海报.jpg" alt="培训海报" style="width: 100%; display: block;" />
      </van-swipe-item>
    </van-swipe>

    <div class="main-course-info">
      <van-button type="primary" block to="/enrollment" class="enroll-button">立即报名</van-button>
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
  </div>
</template>

<script setup>
import { Swipe, SwipeItem, Button, Grid, GridItem } from 'vant'; // 引入 Vant 轮播、按钮和 Grid 组件
// Home 页面逻辑
</script>

<style scoped>
.home-page {
  padding-bottom: 60px; /* 为底部 Tabbar 留出空间 */
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

.enroll-button {
  margin-top: 20px;
}

.past-courses-section {
  padding: 20px;
  text-align: center;
}

.past-courses-section h2 {
  margin-bottom: 15px;
  color: #333;
}

.course-title {
  font-size: 13px;
  color: #666;
  margin-top: 5px;
}
</style>
