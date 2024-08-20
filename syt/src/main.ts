// vue3提供的方法 createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
import '@/style/reset.scss';
// 引入根组件
import App from './App.vue'
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue";
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 利用createApp方法创建应用实例，且将应用实例挂在到挂载点上
// 挂载点再静态文件中
const app = createApp(App);
app.component("HospitalTop", HospitalTop)
app.component("HospitalBottom", HospitalBottom)
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');