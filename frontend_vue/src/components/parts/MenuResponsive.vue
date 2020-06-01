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
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'MenuResponsive',
        data: () => ({
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
    }
</script>
