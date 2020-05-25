<template>
    <v-container class="menu_letra">
        <v-navigation-drawer width="200" v-model="drawer" :color="isColor" permanent expand-on-hover app dark>
            <template v-slot:prepend>
                <v-list>
                    <v-avatar class="profile" size="50" tile width="50px" height="75px">
                        <v-img src="@/assets/logo1.png"></v-img>
                    </v-avatar>
                </v-list>
            </template>
            <v-container fill-height fluid>
                <v-row>
                    <v-list>
                        <v-list-item v-for="item in items" :key="item.title" :to="item.url">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-row>
            </v-container>
            <template v-slot:append>
                <v-list>
                    <v-list-item @click.stop="dialog = true">
                        <v-list-item-icon>
                            <v-icon>search</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>

        <!-- Modal de Buscar------------------------------------------------------------------- -->
        <v-row justify="center">
            <v-dialog v-model="dialog" max-width="350">
                <v-card>
                    <v-card-title class="headline">¿Qué deseas buscar?</v-card-title>
                    <v-card-text>
                        <v-text-field :append-outer-icon="buscar ? 'search' : 'mdi-emoticon-cool'" v-model="buscar" label="Buscar..." outlined clearable></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue" text @click="dialog = false">
                            Cancelar
                        </v-btn>
                        <v-btn color="blue" text @click="dialog = false">
                            Buscar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'MenuIzquierdo',
        data: () => ({
            drawer: true,
            items: [
                { title: 'Inicio', icon: 'home', url: '/clases' },
                { title: 'Mi perfil', icon: 'perm_identity', url: '/perfil' },
                { title: 'Mis Cursos', icon: 'videocam', url: '/cursos' },
                { title: 'Monitorias', icon: 'chat', url: '/monitorias' },
                { title: 'Llamadas', icon: 'phone', url: '/phone' },
                { title: 'Calendario', icon: 'event', url: '/phone' },
            ],
            buscar: '',
            dialog: false,
        }),
        computed:{
            isColor: function(){
                if (this.$vuetify.theme.dark){
                    return 'rgba(0, 12, 44, 0.911)';
                }else{
                    return 'rgba(0, 12, 44, 0.192)';
                }
            }
        },
    }
</script>

<style scoped>
    .menu_letra{
        padding-top: 45px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 20px;
        font-family: Maven Pro;
		font-style: normal;
        color: rgba(0, 12, 44, 0.911);
    }
</style>