import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        auth: true,
        drawer: null,
        items: [
            { title: 'Inicio', icon: 'home', url: '/' },
            { title: 'Nosotros', icon: 'supervised_user_circle', url: '/nosotros' },
            { title: 'Regístrate', icon: 'lock_open', url: '/signup' },
            { title: 'Iniciar Sesión', icon: 'input', url: '/login' },
          ],
    },
    mutations: {
        cambiar: (state) => state.auth = !state.auth,
    }
});