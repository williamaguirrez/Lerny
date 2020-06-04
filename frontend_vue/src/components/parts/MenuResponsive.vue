<template>
    <v-navigation-drawer v-model="$store.state.drawer" class="hidden-md-and-up" :color="isColor" fixed dark>
        <template v-slot:prepend>
                <v-list>
                    <v-avatar class="profile" size="50" tile width="200px" height="60px">
                        <v-img src="@/assets/logo.png"></v-img>
                    </v-avatar>
                </v-list>
            </template>
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item v-for="item in $store.state.items" :key="item.title" :to="item.url">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <template v-if="user">
                <v-list-item to="/clases">
                    <v-list-item-icon>
                        <v-icon>cast_for_education</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Mis Cursos</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.prevent="cerrarSesion">
                    <v-list-item-icon>
                        <v-icon>power_settings_new</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Cerrar Sesion</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <template v-else>
                <v-list-item to="/signup">
                    <v-list-item-icon>
                        <v-icon>lock_open</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Regístrate</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/login">
                    <v-list-item-icon>
                        <v-icon>input</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Iniciar Sesión</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'MenuResponsive',
        data: () => ({
            user: null,
        }),
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
