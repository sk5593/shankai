import Vue from 'vue'
import App from './views/index.vue'

import '@/styles/normalize.scss'
import './lib/base.scss'
import '@/styles/flex.css'

import 'babel-polyfill'

// import {AlertPlugin, LoadingPlugin, ToastPlugin} from 'vux'
// Vue.use(AlertPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(ToastPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
