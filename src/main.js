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

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(Notifications, { velocity });
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
