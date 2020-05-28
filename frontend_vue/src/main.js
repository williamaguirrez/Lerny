import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store';
import { Plugin } from 'vue-responsive-video-background-player';
import VuePlyr from 'vue-plyr';
import firebase from 'firebase';

let app = null

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Plugin);
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ['ended']
});

const router = new VueRouter({
  /* mode: 'history', */
  routes: routes,
});

//Para bloquear todas las rutas, sólo cambiando el parametro de next por un false
router.beforeEach((to, from, next)=>{
  if (to.matched.some(ruta => ruta.meta.requeresAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
      store.state.inicializarDatosLogin(user.uid, user.displayName, user.email, user.photoURL);
    }else{
      next({ name: 'login' });
    }
  }else{
    next();
  }
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title); // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags); // Find the nearest route element with meta tags.
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title; // If a route with a title was found, set the document (page) title to that value.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el)); // Remove any stale meta tags from the document using the key attribute we set below.
  if(!nearestWithMeta) return next();  // Skip rendering meta tags if there are none.
  nearestWithMeta.meta.metaTags.map(tagDef => {// Turn the meta tag definitions into actual elements in the head.
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', ''); // We use this to track which meta tags we create, so we don't interfere with other ones.
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));// Add the meta tags to the document head.
  next();
});

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      el: '#app',
      vuetify,
      router: router,
      store: store,
      render: h => h(App)
    });
  }
})