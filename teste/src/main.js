import Vue from 'vue'
import VueRouter from 'vue-router'
import VueObserverVisibility from 'vue-observe-visibility'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import List from './pages/user_list/Index.vue'
import Search from './pages/search/Index.vue'
import Profile from './pages/profile/Index.vue'

Vue.use(VueRouter)
Vue.use(VueObserverVisibility)
Vue.use(VueSweetalert2);


const router = new VueRouter({
  routes:[
    {
      path: '/listausuario',
      component: List
    },
    {
      path: '/',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
