// vue3提供的方法 createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
import '@/style/reset.scss';
// 引入根组件
import App from './App.vue'
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue";
// 利用createApp方法创建应用实例，且将应用实例挂在到挂载点上
// 挂载点再静态文件中
// createApp(App).mount('#app')
const app = createApp(App);
app.component("HospitalTop", HospitalTop)
app.component("HospitalBottom", HospitalBottom)
app.mount('#app');