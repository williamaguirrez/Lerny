<template>
    <v-app-bar id="menuu" :color="offsetTop ? isColor : 'transparent'" style="padding-left:5%; padding-right:5%;" flat app>
        <v-spacer></v-spacer>
        <v-switch v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <b style="width:30px;"/>
        <v-badge :content="messages" :value="messages" color="blue" overlap>
            <v-icon large>notifications</v-icon>
        </v-badge>
        <b style="width:30px;"/>
        <v-menu open-on-hover offset-y bottom left>
            <template v-slot:activator="{ on }">
                <v-avatar dark icon v-on="on">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                   <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import vuetify from '../../plugins/vuetify';
    export default {
        name: 'MenuSuperior',
        data: () => ({
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
                {   title: 'Cerrar sesión', 
                    icon: 'power_settings_new',
                    url: '/'
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
        }
    }
</script>