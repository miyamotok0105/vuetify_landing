import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css' 
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(vuetify, {
  iconfont: 'fa'
 })
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
