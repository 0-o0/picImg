import axios from 'axios'
import NProgress from 'nprogress'
axios.defaults.baseURL = 'https://imgs.top/api/v1'
const startLoading = () => {
  NProgress.start()
}
const endLoading = () => {
  NProgress.done()
}
// 请求拦截
// axios.defaults.withCredentials = true  # 如果开启前后端需要同时配置
axios.interceptors.request.use((config) => {
  // 加载
  startLoading()
  return config
})

// 响应拦截
axios.interceptors.response.use((response) => {
  // 结束loading
  endLoading()
  return response
}, error => {
  // 结束loading
  endLoading()
  // 错误提醒
  return Promise.reject(error)
})

export default axios
