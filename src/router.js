import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/warranty/registration',
      name: 'warranty-registration',
      component: () => import("./views/WarrantyRegistration.vue"),
      meta: {
          requireAuth: true
      }
    },
    // {
    //   path: '/warranty/success',
    //   name: 'warranty-success',
    //   component: () => import("./views/WarrantySuccess.vue"),
    //   meta: {
    //       requireAuth: true
    //   }
    // },
    {
      path: '/',
      name: 'warranty-check',
      component: () => import("./views/WarrantyCheck.vue"),
      meta: {
          requireAuth: true
      }
    },
    {
      path: '/warranty/confirm/serial',
      name: 'warranty-confirm-serial',
      component: () => import("./views/WarrantyConfirmSerial.vue"),
      meta: {
          requireAuth: true
      }
    },
    {
      path: '/warranty/confirm/email',
      name: 'warranty-confirm-email',
      component: () => import("./views/WarrantyConfirmEmail.vue"),
      meta: {
          requireAuth: true
      }
    },
    {
      path: '/warranty/confirm/email/not-found',
      name: 'warranty-confirm-email-404',
      component: () => import("./views/WarrantyConfirmNonEmail.vue"),
      meta: {
          requireAuth: true
      }
    },
    {
      path: '/warranty/confirm/serial/not-found',
      name: 'warranty-confirm-serial-404',
      component: () => import("./views/WarrantyConfirmNonSerial.vue"),
      meta: {
          requireAuth: true
      }
    }
  ]
})
