import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
	router,
	store
}).$mount('#app')
