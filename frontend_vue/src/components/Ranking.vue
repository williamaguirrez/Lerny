<template>
    <v-app id="inspire">
		<script type="application/javascript" src="https://wtechnology.co/slider/assets/js/includes/jquery/jquery.js"></script>
		<script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.tools.min.js"></script>
		<script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.revolution.min.js"></script>
		<script type="application/javascript" id="revslider_script" src="https://wtechnology.co/slider/assets/js/revslider.js"></script>
        <div class="revslider" data-alias="classicslider3"></div>
        
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