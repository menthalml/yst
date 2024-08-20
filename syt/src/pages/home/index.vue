<template>
  <div>
      <!-- 轮播-->
      <Carousel></Carousel>
      <!-- 首页搜索 -->
      <Search></Search>
      <!-- 底部医院接口 -->
      <el-row :gutter="20">
        <el-col :span="20">
          <!-- 等级 -->
          <Level></Level>
          <!-- 地区： -->
          <Region></Region>
          <!-- 医院结构 -->
          <div class="hospital">
            <Card class="item" v-for="i in 10" :key="i"></Card>
          </div>
          <el-pagination
                  v-model:current-page="pageNo"
                  v-model:page-size="pageSize"
                  :page-sizes="[20,30,40]"
                  :background="true"
                  layout="prev, pager, next, jumper,->, sizes,total "
                  :total="100"
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

import { ref } from 'vue';
let pageNo = ref<number>(1);
let pageSize = ref<number>(20);
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
