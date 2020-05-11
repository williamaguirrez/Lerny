import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { store } from '../store';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md', // default - only for display purposes
    },
    theme: {
        dark: false,
    },
});
