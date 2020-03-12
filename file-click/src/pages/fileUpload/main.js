import Vue from 'vue'
import App from './views/index.vue'

import 'babel-polyfill'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Avue);
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
