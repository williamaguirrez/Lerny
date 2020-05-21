<template>
    <v-app-bar id="menuu" :color="offsetTop ? isColor : 'transparent'" style="padding-left:5%; padding-right:5%;" flat app>
        <v-spacer></v-spacer>
        <v-switch v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <b style="width:30px;"/>
        <v-badge :content="messages" :value="messages" color="blue" overlap>
            <v-icon large color="white">notifications</v-icon>
        </v-badge>
        <b style="width:30px;"/>
        <v-menu open-on-hover offset-y bottom left>
            <template v-slot:activator="{ on }">
                <v-avatar dark icon v-on="on">
                    <img :src="$store.state.usuario.foto">
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
    </v-app-bar>
</template>

<script>
    import vuetify from '../../plugins/vuetify';
    import firebase from 'firebase';
    export default {
        name: 'MenuSuperior',
        data: () => ({
            user: null,
            messages: 3,
            show: false,
            offsetTop: 0,
            items: [
                {   title: 'Ver Perfil', 
                    icon: 'account_circle',
                    url: '/perfil'
                },
                {   title: 'Membresías', 
                    icon: 'loyalty',
                    url: '/membresias'
                },
                {   title: 'Mis Compras',
                    icon: 'shopping_cart',
                    url: '/compras'
                },
                {   title: 'Mentores', 
                    icon: 'people_alt',
                    url: '/mentores'
                },
                {   title: 'Configuración', 
                    icon: 'settings',
                    url: '/configuracion'
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
                    return 'rgba(0, 0, 0, 0.747)';
                }else{
                    return 'rgba(0, 24, 88, 0.712)';
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