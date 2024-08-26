<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
    <HospitalBottom></HospitalBottom>
  </div>
</template>
<script lang="ts" setup>
import request from '@/utils/request';
import { onMounted } from 'vue';
onMounted(() => {
  request.get('/hosp/hospital/1/10').then((res) => {
    console.log('app组件展示获取的', res);
    })
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .content {
    margin-top: 70px;
    width: 1200px;
    flex-grow: 1; // 撑满剩下高度
  }
  .bottom {
    width: 100%;
  }
}
</style>
