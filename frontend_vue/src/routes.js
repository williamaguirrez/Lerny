import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';
import { store } from './store';

export const routes = [
    {path: '/', component: Home},
    {
        path: '/contacto', 
        component: Contacto,
        
        // Guard Globales para bloquear esta ruta
        beforeEnter: ((to, from, next) =>{
            console.log('Acceso a Contacto');
            next(store.state.auth);
        }),
    },
    {path: '*', component: NoEncontrado},
];