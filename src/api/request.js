//对axios进行二次封装
import axios from "axios";
//1.利用axios兑现该方法create去创建一个aioxs实例
//2.request就是axios，只不过是二次封装后的axios
const requests = axios.create({
  //配置对象
  baseURL: "http://117.50.177.183:3000", //代表基于哪个路径
  withCredentials: true,
  timeout: 5000, //代表请求超时的时间5s
});
//3.请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求之前做一些事情
requests.interceptors.request.use((config) => {
  //config:配置对象，对象里面有一个属性很重要，headers请求头
  if (localStorage.getItem("cookie")) {
    const cookie = localStorage.getItem("cookie");
    // console.log(config);
    config.headers.cookie = cookie;
  }
  return config;
});
//4.响应拦截器
requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);
export default requests;
