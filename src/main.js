import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import auth from "./services/api/auth";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requireAuth)) {
//         if (!auth.getAuth()) {
            
//         	window.location.href = "https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.users.ALL&client_id=1000.4J470IB5FUD549210WL08RZM2W87DH&response_type=code&access_type=offline&redirect_uri=http://localhost:8001/auth/callback";

//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
