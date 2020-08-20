import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const numeral = require('numeral')
Vue.filter('formatBigNumber', function (value) {
  return numeral(value).format('0.0a').toUpperCase()
})

Vue.filter('formatSmallNumber', function (value) {
  return numeral(value).format('0.00')
})

Vue.filter('formatPercent', function (value) {
  return numeral(value).format('0.00 %')
})

Vue.use(require('vue-moment'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
