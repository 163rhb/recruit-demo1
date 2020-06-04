import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'//可通过提示导入
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI,{size:'small'})//可局部导入组件，减少项目打包的体积
import {postRequst} from '@/util/api'
Vue.prototype.postRequst1=postRequst


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
