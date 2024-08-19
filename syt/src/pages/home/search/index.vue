<template>
  <div class="search">
        <!-- :fetch-suggestions="querySearch" -->
      <el-autocomplete clearable placeholder="请输入医院名称"/>
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
  // 深度选择器 css: >>>, less: /deep/, scss: v-deep

.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  ::v-deep(.el-input__wrapper) {
    width: 600px !important;
  }
  ::v-deep(.el-autocomplete) {
    width: 600px !important;
    margin-right: 10px;
  }
}

</style>
