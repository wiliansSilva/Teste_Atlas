import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './pages/UserList.vue'
import Search from './pages/search/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/listausuario',
      component: List
    },
    {
      path: '/pesquisar',
      component: Search
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
