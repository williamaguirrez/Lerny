<template>
    <v-app id="inspire">
        <v-row class="contenedor_ranking justify-center">
            <MenuToolbar/>
            <MenuResponsive/>
            <v-img class="text-center" style="margin-top:-50px;" max-height="374" max-width="800" src="@/assets/404.gif">
            </v-img>
            <div class="text-center hidden-sm-and-down" style="margin-top:-70px;">
                <h1 style="padding-top:0px; font-size:50px; font-weight:bold; color:#001844">Oops! Algo está fallando...</h1>
                <p style="color:#001844; font-weight:bold;">
                    Vaya lo sentimos mucho, la página que solicitaste no existe. <br>
                    Te invitamos a ir a nuestro inicio.
                </p>
                <v-btn color="primary" to="/">Inicio de Lerny.co</v-btn>
            </div>
            <div class="text-center hidden-md-and-up" style="margin-top:0px;">
                <h1 style="padding-top:0px; font-size:50px; font-weight:bold; color:#001844">Oops! Algo está fallando...</h1>
                <p style="color:#001844; font-weight:bold;">
                    Vaya lo sentimos mucho, la página que solicitaste no existe. <br>
                    Te invitamos a ir a nuestro inicio.
                </p>
                <v-btn color="primary" to="/">Inicio de Lerny.co</v-btn>
            </div>
        </v-row>
    </v-app>
</template>

<script>
    import MenuToolbar from './parts/MenuToolbar';
    import MenuResponsive from './parts/MenuResponsive';
    export default {
        name: 'NoEncontrado',
        components: {
            MenuToolbar,
            MenuResponsive,
        },
        data: () => ({
        }),
    };
</script>

<style scoped>
    .contenedor_ranking{
        padding-top: 70px;
        padding-left: 20%;
        padding-right: 20%;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #FFFFFF;
        background-size: 100% auto;
    }
</style>