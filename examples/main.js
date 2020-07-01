import Vue from 'vue'
import App from './App.vue'
import AlUI from '../packages'
Vue.config.productionTip = false

console.log('alui', AlUI)
Vue.use(AlUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
