import Vue from 'vue'
import App from './App.vue'
import { Row, Col, Card } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Card)

new Vue({
  render: h => h(App)
}).$mount('#app')
