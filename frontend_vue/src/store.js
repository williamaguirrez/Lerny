import Vue from 'vue';
import Vuex from 'vuex';
import toastr from 'toastr';
import firebase from 'firebase';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        usuario:{
            uid: null,
            nombre: null,
            email: null,
            foto: 'data:image/png;base64,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',
            puntos: 345,
        },
        auth: true,
        drawer: null,
        items: [
            { title: 'Inicio', icon: 'home', url: '/' },
            { title: 'Nosotros', icon: 'supervised_user_circle', url: '/nosotros' },
            { title: 'Regístrate', icon: 'lock_open', url: '/signup' },
            { title: 'Iniciar Sesión', icon: 'input', url: '/login' },
        ],
        guardarDatabase(id, usuario, email, foto){
            firebase.database().ref('/usuarios/' + id).set({
                UID: id,
                nombre: usuario,
                correo: email,
                fotoURL: foto,
            }).then( result => {
            }).catch(err =>{
                this.mensajeError(err.message, 'Ocurrió un error');
            })
        },
        mensajeExito(mensaje, titulo){
            toastr.success(mensaje, titulo, {
                "closeButton": true, "progressBar": true, "positionClass": "toast-top-center",
                "showMethod": "fadeIn", "hideMethod": "fadeOut", "showDuration": "600",
            });
        },
        mensajeError(mensaje, titulo){
            toastr.error(mensaje, titulo, {
                "closeButton": true, "progressBar": true, "positionClass": "toast-top-center",
                "showMethod": "fadeIn", "hideMethod": "fadeOut", "showDuration": "600",
            });
        },
        inicializarDatosLogin(id, nombre, email, foto){
            this.usuario.uid = id;
            this.usuario.nombre = nombre;
            this.usuario.email = email;
            this.usuario.foto = foto;
        },
    },
    mutations: {
        cambiar: (state) => state.auth = !state.auth,
    },
});