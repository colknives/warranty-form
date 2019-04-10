import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import velocity from "velocity-animate";
import Notifications from "vue-notification"
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(Notifications, { velocity });
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

library.add(faCoffee)
library.add(faCheckCircle)
library.add(faInfoCircle)
// library.add(faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
