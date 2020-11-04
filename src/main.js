import Vue from 'vue'
import App from './App.vue'
import {get} from './utils/api'
import {post} from './utils/api'
import router from './components/router'
Vue.config.productionTip = false

Vue.prototype.get = get;
Vue.prototype.post = post;

// 将全局样式文件写在 main.js
import '@/assets/scss/iconfont.scss'
import '@/assets/ali-fonts/iconfont.css'

//导入mint-ui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

new Vue({
  el: '#app',//全局样式
  router,
  render: h => h(App),
}).$mount('#app')
