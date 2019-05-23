import Vue from 'vue'
import App from './views/index.vue'

import '@/styles/normalize.scss'
import './lib/base.scss'
import '@/styles/flex.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
