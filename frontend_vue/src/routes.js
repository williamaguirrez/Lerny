import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import { store } from './store';

export const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/signup', component: Signup
    },
    {
        path: '/contacto', 
        component: Contacto,
        
        // Guard Globales para bloquear esta ruta
        beforeEnter: ((to, from, next) =>{
            console.log('Acceso a Contacto');
            next(store.state.auth);
        }),
    },
    {
        path: '*', component: NoEncontrado
    },
];