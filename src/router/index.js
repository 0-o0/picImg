import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import TabNav from '@/views/TabNav/TabNav.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: TabNav,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: 'o_o '
        }
      }
    ]
  }

]
const router = new VueRouter({
  routes
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
