<template>
    <v-app id="inspire">
        <MenuSuperior/>
        <MenuIzquierdo/>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Ranking',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
        }),
    };
</script>

<style scoped>
    @import 'https://wtechnology.co/slider/revslider/public/assets/css/settings.css'; 
    .contenedor_ranking{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
</style>