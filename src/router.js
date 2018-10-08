import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'warranty-registration',
      component: () => import("./views/WarrantyRegistration.vue"),
      meta: {
          requireAuth: true
      }
    },
    {
      path: '/warranty/success',
      name: 'warranty-success',
      component: () => import("./views/WarrantySuccess.vue"),
      meta: {
          requireAuth: true
      }
    }
  ]
})
