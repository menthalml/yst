<template>
  <div class="search">
        <!-- :fetch-suggestions="querySearch" -->
      <el-autocomplete clearable placeholder="请输入医院名称" v-model="hosname"
        :fetch-suggestions="fetchData"
        @select="goDetail"/>
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { findByHosname } from '@/api/home';
import type { HospitalInfo } from '@/api/type'
import { useRouter } from 'vue-router';
// 关键字
let hosname = ref<string>('');
const $router = useRouter();
const fetchData = async (keyword: string, cb: any) => {
  console.log(keyword, cb);
  const result: HospitalInfo = await findByHosname(keyword)
  console.log(result.data);
  let showData = result.data.map((item) => {
    return {
      value: item.hosname
    }
  })
  cb(showData);
}
const goDetail = (item: any) => {
  console.log(item);
  // 点击推荐项目进入详情页
  $router.push({
    path: '/hospital'
  })
}
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
