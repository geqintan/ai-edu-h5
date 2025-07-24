import axios from 'axios';
import { showToast } from 'vant';
import config from '@/config'; // 引入配置文件

// 创建 Axios 实例
const service = axios.create({
  baseURL: config.apiBaseUrl, // API 的基础 URL，从配置文件中获取
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 根据后端返回的业务状态码进行判断
    if (res.code !== 200) { // 假设 200 表示成功
      showToast(res.message || 'Error');
      return Promise.reject(res); // 返回整个 res 对象，以便前端可以获取 code 和 message
    } else {
      return res;
    }
  },
  error => {
    console.error('响应拦截器错误:', error);
    let message = '未知错误，请稍后再试'; // 默认错误信息
    let errorCode = null; // 用于存储后端返回的错误码

    if (error.response) {
      // 优先使用后端返回的错误信息和业务错误码
      message = error.response.data.message || message;
      errorCode = error.response.data.code || error.response.status;

      // 根据 HTTP 状态码进行通用处理，但优先显示后端返回的 message
      switch (error.response.status) {
        case 400:
          // message = message; // 已经从后端获取
          break;
        case 401:
          // message = message; // 已经从后端获取
          // 可以跳转到登录页
          // router.push('/login');
          break;
        case 403:
          // message = message; // 已经从后端获取
          break;
        case 404:
          // message = message; // 已经从后端获取
          break;
        case 500:
          // message = message; // 已经从后端获取
          break;
        default:
          message = `连接错误 ${error.response.status}`;
      }
    } else if (error.message.includes('timeout')) {
      message = '请求超时，请检查网络连接或稍后再试';
    } else if (error.message.includes('Network Error')) {
      message = '网络连接失败，请检查您的网络';
    }
    showToast(message);
    return Promise.reject({ code: errorCode, message: message }); // 返回包含 code 和 message 的对象
  }
);

// 导出常用的 API 请求方法
export const post = (url, data) => service.post(url, data);
export const get = (url, params) => service.get(url, { params });
export const put = (url, data) => service.put(url, data);
export const del = (url, params) => service.delete(url, { params });

// 示例 API 接口
export const enrollmentApi = {
  submitIndividualEnrollment: (data) => post('/enrollment/individual', data),
  submitEnterpriseEnrollment: (data) => post('/enrollment/enterprise', data),
};

export const loginApi = {
  login: (data) => post('/auth/login', data),
  register: (data) => post('/auth/register', data),
};

export const orderApi = {
  getIndividualOrders: (params) => get('/orders/individual', params),
  getEnterpriseOrders: (params) => get('/orders/enterprise', params),
};
