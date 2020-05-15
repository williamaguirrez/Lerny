<template>
    <v-container>
        <v-navigation-drawer v-model="drawer" color="#001844b0" permanent absolute expand-on-hover dark>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
    export default {
        name: 'MenuIzquierdo',
        data: () => ({
            drawer: true,
            items: [
                { title: 'Inicio', icon: 'home' },
                { title: 'Mi perfil', icon: 'perm_identity' },
                { title: 'Mis Cursos', icon: 'videocam' },
                { title: 'Monitorias', icon: 'chat' },
                { title: 'Llamadas', icon: 'phone' },
                { title: 'Buscar', icon: 'search' },
            ],
        }),
    }
</script>

<style scoped>
    .aaa{
        color: #001844b0;
    }
</style>