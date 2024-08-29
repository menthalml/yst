<template>
  <div>
      <!-- 轮播-->
      <Carousel />
      <!-- 首页搜索 -->
      <Search></Search>
      <!-- 底部医院接口 -->
      <el-row :gutter="20">
        <el-col :span="20">
          <!-- 等级 -->
          <Level />
          <!-- 地区： -->
          <Region />
          <!-- 医院结构 -->
          <div class="hospital">
            <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item"></Card>
          </div>
          <el-pagination
                  v-model:currentPage="pageNo"
                  v-model:pageSize="pageSize"
                  :page-sizes="[20,30,40]"
                  :background="true"
                  layout="prev, pager, next, jumper,->, sizes,total "
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
              />
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue';
import Level from './level/index.vue';
import Region from './Region/index.vue';
import Card from './card/index.vue';
import type { Content, HospitalResponseData } from '@/api/home/type'
import { reqHopital } from '@/api/home/index'

import { ref, onMounted } from 'vue';
let pageNo = ref<number>(1);
let pageSize = ref<number>(20);
let hasHospitalArr = ref<Content>([]);
let total = ref<number>(0);
onMounted(() => {
  getHospitalInfo();
})
// 获取
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHopital(pageNo.value, pageSize.value)
  console.log('1111', result);
  if (result.code === 200) {
    // 存储医院的数据
    hasHospitalArr.value = result.data.content;
    // 存储医院的总个数
    total.value = result.data.totalElements;
  }
}
const handleCurrentChange = () => {
  getHospitalInfo();
}
const handleSizeChange = () => {
  pageNo.value = 1;
  getHospitalInfo()
}
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0;
  }
}

</style>
