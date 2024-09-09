<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span>医院信息</span>
      </div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
         <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
         <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Setting,
  HomeFilled,
} from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      color: #7f7f7f;
    }
  }
  .content {
    flex: 8
  }
}

</style>
