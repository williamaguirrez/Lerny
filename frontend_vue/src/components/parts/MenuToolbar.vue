<template>
    <v-app-bar id="menuu" :color="offsetTop ? isColor : 'transparent'" style="padding-left:5%; padding-right:5%;" flat app>
        <v-switch class="hidden-md-and-up" v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <router-link to='/'>
            <v-avatar class="profile" size="50" tile width="200px" height="60px">
                <v-img src="@/assets/logo.png"></v-img>
            </v-avatar>
        </router-link>
        <v-spacer></v-spacer>
        <v-switch class="hidden-sm-and-down" v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <b style="width:20px;"/>
        <v-btn class="hidden-sm-and-down white--text" text to='/'>Inicio</v-btn>
        <b style="width:10px;"/>
        <v-btn class="hidden-sm-and-down white--text" text to='/nosotros'>Nosotros</v-btn>
        <b style="width:10px;"/>
        <!-- Menu de Las 5 funcionalidades -------------------------------------------------------------------- -->
        <v-menu open-on-hover offset-y bottom left transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" text class="hidden-sm-and-down white--text">Funcionalidades</v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in fivefuncionalidades" :key="i" :to="item.url">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <b style="width:10px;"/>
        <template v-if="user">
            <v-btn class="hidden-sm-and-down white--text" text to='/clases'>Mis Cursos</v-btn>
            <b style="width:30px;"/>
            <!-- El círculo del perfil ----------------------------------------------------------------------- -->
            <v-menu open-on-hover offset-y bottom left transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-avatar dark icon v-on="on">
                        <img :src="$store.state.usuario.foto" alt="John">
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click.prevent="cerrarSesion">
                        <v-list-item-icon>
                            <v-icon>power_settings_new</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cerrar Sesion</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
        <template v-else>
            <v-btn class="hidden-sm-and-down white--text" text to='/signup'>Regístrate</v-btn>
            <b style="width:10px;"/>
            <v-btn class="hidden-sm-and-down" style="padding-left:30px;padding-right:30px" rounded color="boton_menu" dark to='/login'>Ingresa</v-btn>
        </template>
        <v-btn class="hidden-md-and-up" dark icon @click.stop="$store.state.drawer = !$store.state.drawer">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import vuetify from '../../plugins/vuetify';
    import firebase from 'firebase';
    export default {
        name: 'MenuToolbar',
        data: () => ({
            offsetTop: 0,
            user: null,
            items: [
                {   title: 'Ver Perfil', 
                    icon: 'account_circle',
                    url: '/perfil'
                },
                {   title: 'Mi Suscripción', 
                    icon: 'loyalty',
                    url: '/mi-suscripcion'
                },
            ],
            fivefuncionalidades: [
                {
                    title: 'Proyectos Sociales',
                    icon: 'thumb_up_alt',
                    url: '/social',
                },
                {
                    title: 'Acompañamiento',
                    icon: 'people_alt',
                    url: '/acompanamiento',
                },
                {
                    title: 'Programa de Apadrinamiento',
                    icon: 'monetization_on',
                    url: '/apadrinamiento',
                },
                {
                    title: 'Guía Académico Ally',
                    icon: 'school',
                    url: '/ally',
                },
                {
                    title: 'Educación por Llamada Telefónica',
                    icon: 'phone_in_talk',
                    url: '/llamadap',
                },
            ],
        }),
        mounted(){
            var that = this;
            window.addEventListener("scroll", function(){
                that.offsetTop = window.scrollY;
            });
        },
        computed:{
            isColor: function(){
                if (this.$vuetify.theme.dark){
                    return 'rgba(0, 12, 44, 0.911)';
                }else{
                    return 'rgba(36, 3, 106, 0.883)';
                }
            }
        },
        methods: {
            cerrarSesion(){
                firebase.auth().signOut().then( () =>{
                    this.$router.push({ name: 'inicio' })
                })
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    this.user = user
                }else{
                    this.user = null
                }
            })
        },
    }
</script>