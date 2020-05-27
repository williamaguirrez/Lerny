<template>
    <v-app id="inspire">
        <v-row class="contenedor_ranking">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <script type="application/javascript" src="https://apps.elfsight.com/p/platform.js" defer></script>
            <div class="elfsight-app-670d8b13-fc2b-4d94-bdb9-095cc450f8b3"></div>
        </v-row>
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