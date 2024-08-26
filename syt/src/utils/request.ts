import { interceptors } from 'node_modules/axios/index.d.cts';
// 为什么对于axios函数库进行二次封装？二次封装的目的是什么
/**
 * 目的：
 * 1.利用axion请求，响应拦截器功能
 * 2.请求拦截器，可以在请求头中携带公共的参数token
 * 3. 响应拦截器，可以简化服务器返回的数据，处理http的网络错误
 */
import axios from "axios";
import { ElMessage } from 'element-plus';
// 利用axios.create方法创建一个axios实例，可以设置基础路径，超时的时间的设置
const request = axios.create({
    baseURL: '/api', // 请求的基础路径的设置
    timeout: 5000, // 超时
})
// 请求拦截器
request.interceptors.request.use((config) => {
    // config: 请求拦截器回调注入的对象，配置对象的身上最重要的一件事件header属性
    return config;
})
// 响应拦截器
request.interceptors.response.use((response) => {
    // 响应拦截器成功的回调，一般会进行简化数据
    return response.data;
}, (error) => {
    // 失败回调，处理http网络错误
    const status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: error.message
            });
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: error.message || '服务器挂了'
            });
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: error.message || '请求参数有误'
            });
            break;
        default:
            break;
    }
    return Promise.reject(new Error(error.message));
})
export default request;