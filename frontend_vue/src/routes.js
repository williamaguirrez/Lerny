import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Nosotros from './components/Nosotros.vue';
import Recuperar from './components/Recuperar.vue';
import DescubreMas from './components/DescubreMas';
import Clases from './components/Clases.vue';
import Reproductor from './components/Reproductor.vue';
import MiSuscripcion from './components/MiSuscripcion.vue';
import Perfil from './components/Perfil.vue';
import PromoWallet from './components/PromoWallet.vue';
import Ranking from './components/Ranking.vue';
import Llamada from './components/Llamada.vue';
import Monitorias from './components/Monitorias.vue';
import Calendario from './components/Calendario.vue';
import Videollamada from './components/Videollamada.vue';
import ProyectosSociales from './components/ProyectosSociales.vue';
import Cursos from './components/Cursos.vue';
import PromoProyectosSociales from './components/PromoProyectosSociales.vue';
import PromoAlly from './components/PromoAlly.vue';
import PromoAcompanamiento from './components/PromoAcompanamiento.vue';
import PromoLlamada from './components/PromoLlamada.vue';
import PromoApadrinamiento from './components/PromoApadrinamiento.vue';
import { store } from './store';


export const routes = [
    {
        path: '/', 
        name: 'inicio',
        component: Home, 
        meta: {
            title: 'Inicio | Lerny.co',
            metaTags: [{
                    name: 'description',
                    content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login, 
        meta: {
            title: 'Inicia Sesión | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/signup', 
        name: 'signup',
        component: Signup, 
        meta: {
            title: 'Regístrate | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/nosotros',
        name: 'nosotros',
        component: Nosotros, 
        meta: {
            title: 'Nosotros | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/recuperar',
        name: 'recuperar', 
        component: Recuperar, 
        meta: {
            title: 'Recuperar Cuenta | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/descubremas', 
        name: 'descubremas',
        component: DescubreMas,
        meta: {
            title: 'Descubre mas Funcionalidades',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/clases', 
        name: 'clases',
        component: Clases, 
        meta: {
            requeresAuth: true,
            title: 'Clases | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/curso/:idCurso/:idTema/:idLeccion', 
        name: 'reproductor',
        component: Reproductor, 
        meta: {
            requeresAuth: true,
            title: 'Curso | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/mi-suscripcion', 
        name: 'misuscripcion',
        component: MiSuscripcion, 
        meta: {
            requeresAuth: true,
            title: 'Mi Suscripción | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/perfil', 
        name: 'perfil',
        component: Perfil, 
        meta: {
            requeresAuth: true,
            title: 'Mi Perfil | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/promowallet', 
        name: 'promowallet',
        component: PromoWallet, 
        meta: {
            requeresAuth: true,
            title: '¿Qué es Wallet? | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/ranking', 
        name: 'ranking',
        component: Ranking, 
        meta: {
            requeresAuth: false,
            title: 'Ranking | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/llamada', 
        name: 'llamada',
        component: Llamada, 
        meta: {
            requeresAuth: true,
            title: 'Llamada | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/monitorias', 
        name: 'monitorias',
        component: Monitorias, 
        meta: {
            requeresAuth: true,
            title: 'Programar Monitorias | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/calendario', 
        name: 'calendario',
        component: Calendario, 
        meta: {
            requeresAuth: true,
            title: 'Monitorias | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/videollamada', 
        name: 'videollamada',
        component: Videollamada,
        meta: {
            requeresAuth: true,
            title: 'Conferencias | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/proyectosociales', 
        name: 'proyectosociales',
        component: ProyectosSociales,
        meta: {
            requeresAuth: true,
            title: 'Proyectos Sociales | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/social', 
        name: 'promoproyectossociales',
        component: PromoProyectosSociales,
        meta: {
            title: 'Proyectos Sociales | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/llamadap', 
        name: 'promollamada',
        component: PromoLlamada,
        meta: {
            title: 'Llamada | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/ally', 
        name: 'promoally',
        component: PromoAlly,
        meta: {
            title: 'Guía Académica Ally | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/apadrinamiento', 
        name: 'promoapadrinamiento',
        component: PromoApadrinamiento,
        meta: {
            title: 'Apadrinamiento | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/acompanamiento', 
        name: 'promoacompanamiento',
        component: PromoAcompanamiento,
        meta: {
            title: 'Acompañamiento | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/cursos', 
        name: 'cursos',
        component: Cursos,
        meta: {
            requeresAuth: true,
            title: 'Mis Cursos | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/contacto', 
        name: 'contacto',
        component: Contacto, 
        meta: {
            title: 'Contacto | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
        // Guard Globales para bloquear esta ruta
        beforeEnter: ((to, from, next) =>{
            console.log('Acceso a Contacto');
            next(store.state.auth);
        }),
    },
    {
        path: '*', 
        name: 'noencontrado',
        component: NoEncontrado,
        meta: {
            title: 'Pagina Error | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
];