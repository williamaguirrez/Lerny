<template>
    <v-app id="inspire">
        <!-- Slider Revolution -->
        <script type="application/javascript" src="https://wtechnology.co/slider/assets/js/includes/jquery/jquery.js"></script>
        <script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.tools.min.js"></script>
        <script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.revolution.min.js"></script>
        <script type="application/javascript" id="revslider_script" src="https://wtechnology.co/slider/assets/js/revslider.js"></script>
        <div class="revslider" data-alias="proyectossociales"></div>
        <v-row class="contenedor_proyecSociales">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <v-row>
                <h1 style="font-size:50px; padding-left:20px">Todos los Proyectos Sociales de Lerny </h1>
            </v-row>
            <script type="application/javascript" src="https://apps.elfsight.com/p/platform.js" defer></script>
            <div class="elfsight-app-670d8b13-fc2b-4d94-bdb9-095cc450f8b3"></div>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'ProyectosSociales',
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

    .contenedor_proyecSociales{
        padding-top: 60px;
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