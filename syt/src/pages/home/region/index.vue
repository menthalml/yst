<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li :class="{active: regionFlag === ''}" @click="changeRegion('')">全部</li>
        <li v-for="(region, index) in regionArr" :key="`${region.value}${index}`" :class="{active: regionFlag === region.value}" @click="changeRegion(region.value)">{{region.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reqHospitalLevelAndRegion } from '@/api/home/index';
import { onMounted, ref } from 'vue';
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type';
onMounted(() => {
  getRegion();
})
const regionArr = ref<HospitalLevelAndRegionArr>([])
const regionFlag = ref<string>('')
const getRegion = async () => {
  const res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
  console.log(res);
  if (res.code === 200) {
    regionArr.value = res.data
  }
}
const changeRegion = (region: string) => {
  regionFlag.value = region;
}
</script>

<style lang="scss" scoped>
.region {
    color : #7f7f7f;
    margin-top: 10px;
    .content {
      display: flex;
      .left {
        margin-right: 10px;
        width: 48px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 8px;
          margin-bottom: 10px;
          &.active {
            color: #55a6fe;
          }
        }
        li:hover {
          color: #55a6fe;
          cursor: pointer;
        }
      }
    }
}

</style>
