import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.use(ElementUI)
var instance = axios.create({
    baseURL: 'http://localhost:8888/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
new Vue({
  render: h => h(App),
}).$mount('#app')
