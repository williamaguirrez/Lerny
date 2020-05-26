<template>
    <v-app id="inspire">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_promoWallet_dark' : 'contenedor_promoWallet_light'">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <div style="width:100%; margin-left:100px;">
                <v-row>
                    <v-col cols="12" sm="2" style="padding-right:0px">
                        <v-img max-width="200" height="174" src="@/assets/ally.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="10" style="padding-left:0px">
                        <h1 style="font-size:50px; width:900px; line-height:62px; color:white" >
                            ¿Sabias que si demuestras buen rendimiento podrías recibir educación gratis, en tres pasos?
                        </h1>
                    </v-col>
                </v-row>
            </div>
            <div style="width:100%">
                <v-row>
                    <v-col cols="12" sm="4">
                        <div class="d-flex justify-center mb-6">
                            <v-btn :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" min-height="80" min-width="80" fab x-large style="color:white; font-size:50px;">1</v-btn>
                        </div>
                        <div class="d-flex justify-center mb-6 text-center">
                            <v-hover v-slot:default="{ hover }">
                            
                            <v-sheet :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" height="215" width="300" :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" style="border-radius:15px; padding:15px">
                                <h1 class="titulo2--text" style="font-size:17px; line-height:20px">
                                    Compra nuestras temáticas para ir acumulando puntos, 
                                    termina todos los modulos, talleres, participa en los
                                    foros, y comparte en todas tus redes tus proyectos sociales
                                    así podrás tener muchos puntos acumulados y aparecer
                                    en nuestras categorias de ranking.
                                </h1>
                            </v-sheet>
                            </v-hover>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <div class="d-flex justify-center mb-6">
                            <v-btn :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" min-height="80" min-width="80" fab x-large style="color:white; font-size:50px;">2</v-btn>
                        </div>
                        <div class="d-flex justify-center mb-6 text-center">
                            <v-sheet height="215" width="300" :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" style="padding:15px; border-radius:15px;">
                                <h1 class="titulo2--text" style="color:#23036A; font-size:17px; line-height:20px">
                                    Nuestras empresas aliadas, podrán contactarte y donarte un saldo para que 
                                    lo uses en tu educación virtual en nuestra plataforma, así no paras de estudiar
                                    y obtienes muchas habilidades.
                                </h1>
                            </v-sheet>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <div class="d-flex justify-center mb-6">
                            <v-btn :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" min-height="80" min-width="80" fab x-large style="color:white; font-size:50px;">3</v-btn>
                        </div>
                        <div class="d-flex justify-center mb-6 text-center">
                            <div style="padding:15px; width:300px;">
                                <v-btn block :color="$vuetify.theme.dark ? '#102855a8' : '#BB86FC'" x-large class="titulo2--text" style="border-radius:15px; padding-top:10px; padding-bottom:10px; padding-left:10px; padding-right:20px;" to="/ranking">
                                    <v-icon left color="titulo2" size="30">star</v-icon> Ranking
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'PromoWallet',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
        }),
    };
</script>

<style scoped>
    .contenedor_promoWallet_light{
        padding-top: 65px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-image: url('../assets/fondos/fondoPromoWalletLight.png');
        background-size: 100% auto;     
    }
    .contenedor_promoWallet_dark{
        padding-top: 65px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-image: url('../assets/fondos/fondoPromoWalletDark.png');
        background-size: 100% auto;     
    }
</style>