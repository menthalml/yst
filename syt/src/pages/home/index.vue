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
          <Level @getLevel="getLevel" />
          <!-- 地区： -->
          <Region @getRegion="getRegion" />
          <!-- 医院结构 -->
          <div class="hospital" v-if="hasHospitalArr.length">
            <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item"></Card>
          </div>
          <el-empty v-else description="暂无数据" />
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
        <el-col :span="4"><Tip></Tip></el-col>
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
import Tip from './tip/index.vue';

import { ref, onMounted } from 'vue';
let pageNo = ref<number>(1);
let pageSize = ref<number>(20);
let hasHospitalArr = ref<Content>([]);
let total = ref<number>(0);
// 等级
let hostype = ref<string>('');
let districtCode = ref<string>('')
onMounted(() => {
  getHospitalInfo();
})
// 获取
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHopital(pageNo.value, pageSize.value, hostype.value, districtCode.value)
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
// 子组件自定义时间
const getLevel = (level: string) => {
  hostype.value = level;
  getHospitalInfo();
}
const getRegion = (region: string) => {
  districtCode.value = region;
  getHospitalInfo();
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
