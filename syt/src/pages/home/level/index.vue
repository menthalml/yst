<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li :class="{active: activeFlag === ''}" @click="changeLevel('')">全部</li>
        <li v-for="(level, index) in levelArr" :key="`${level}${index}`" @click="changeLevel(level.value)" :class="{active: activeFlag === level.value}">{{level.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reqHospitalLevelAndRegion } from '@/api/home/index';
import { onMounted, ref } from 'vue';
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type';

onMounted(() => {
  getLevel();
});
let levelArr = ref<HospitalLevelAndRegionArr>([])
let activeFlag = ref<string>('');
const getLevel = async () => {
  const res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
  console.log(res);
  if (res.code === 200) {
      levelArr.value = res.data
  }
};
const changeLevel = (level: string) => {
  activeFlag.value = level;
}
</script>
<script  lang="ts">
export default {
  name: 'Level'
}
</script>

<style lang="scss" scoped>
.level {
  color: #7f7f7f;
  h1 {
    font-weight: 900;
    margin: 10px 0;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
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
