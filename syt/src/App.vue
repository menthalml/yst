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
