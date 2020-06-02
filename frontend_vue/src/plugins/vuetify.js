import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md', // default - only for display purposes
    },
    theme: {
        dark: true,
        themes: {
            light: {
                boton_menu: '#00A3EF',
                boton_menuN: '005DA5',
                boton_menu1: '#8D50F1',
                titulo: '#102855',
                fondo_menu: '#FFF',
                titulo2:'#23036A',
                rol: '#23036A',
                tarjetasHome: '#FFFFFF',
                tarjetasHome2: '#FFFFFF',
                botonHome: '#000000',
                botonRepro: '#23036A',
            },
            dark: {
                boton_menu: '#8D50F1',
                boton_menuN: '5B418D',
                boton_menu1: '#00A3EF',
                titulo: '#FFFFFF',
                fondo_menu: '#000',
                titulo2: '#FFFFFF',
                rol: '#BB86FC',
                tarjetasHome: '#1B428A',
                tarjetasHome2: '#9369E3',
                botonHome: '#FFFFFF',
                botonRepro: '#024274',
            }
        }
    },
});
