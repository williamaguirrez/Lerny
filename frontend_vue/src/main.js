import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

//Para bloquear todas las rutas, sólo cambiando el parametro de next por un false
router.beforeEach((to, from, next)=>{
  console.log('Acceso Globar');
  next();
});

new Vue({
  el: '#app',
  vuetify,
  router: router,
  store: store,
  render: h => h(App)
});
