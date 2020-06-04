<template>
	<v-app id="inspire">
        <MenuIzquierdo/>
        <MenuSuperior/>
        <v-row :class="$vuetify.theme.dark ? 'contenedor_suscripcion_dark' : 'contenedor_suscripcion_light'">
            <v-col cols="12" sm="4">
                <center>
                <v-avatar dark icon size="180">
                    <img :src="$store.state.usuario.foto">
                </v-avatar>
                <h1>{{ $store.state.usuario.nombre }}</h1>
                <p style="font-size: 18px; margin-bottom:0px">{{ $store.state.usuario.email }} </p>
                <p style="font-size: 18px; margin-bottom:0px"><b style="font-weight: bold;">Puntos:</b>  {{ $store.state.perfil.puntos }} Lernys</p>
                <p style="font-size: 18px;"><b style="font-weight: bold;">Plan:</b> Lerny Freemium</p>
                </center><br>
                <v-card class="mx-auto" max-width="344" shaped elevation="24" color="botonRepro" dark>
                    <v-card-title style="font-weight: bold;">•  Plan Lerny Freemium</v-card-title>
                    <v-card-subtitle style="font-size:15px">
                        • Accede a contenido gratuito limitado<br>
                        • Compra los curso que más te gusten <br>
                        • Puedes pagar solamente por el certificado
                    </v-card-subtitle>
                </v-card>
                
            </v-col>
            <v-col cols="12" sm="8" style="width:100%; padding-left:30px">
                <h1 style="font-size:50px">Mi Suscripción</h1>
                <p style="font-size: 18px; margin-bottom:0px">
                    Desde aquí podrás administrar o cambiar tu suscripción con cualquier medio de pago.
                </p>
                <br>
                <v-row>
                    <v-col cols="12" sm="6" style="width:100%;">
                        <v-card class="ma-2 mx-auto" max-width="344" shaped elevation="24" color="botonRepro" dark>
                            <center>
                                <v-card-text style="font-weight: bold; font-size:30px; margin-bottom:-20px;">
                                    Lerny Expert <br> <br>
                                    <b style="font-size:40px; font-weight:bold">$130.000</b> /mes <br>
                                    <b style="font-size:17px;line-height:40px;">Un solo pago de $1.329.000</b>
                                </v-card-text>
                            </center>
                            <v-card-subtitle style="font-size:15px; font-weight:500">
                                <v-icon>done</v-icon> Más de 100 cursos y 50 habilidades.<br>
                                <v-icon>done</v-icon> Cursos exclusivos<br>
                                <v-icon>done</v-icon> Acceso ilimitado en llamada offline<br>
                                <v-icon>done</v-icon> Certificados digitales de todos los cursos.<br>
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ma-2 mx-auto" rounded outlined style="padding-left:20px; padding-right:20px;">
                                    <script type="application/javascript" src="https://s3-us-west-2.amazonaws.com/epayco/v1.0/checkoutEpayco.js"
                                        class="epayco-button" 
                                        data-epayco-key="491d6a0b6e992cf924edd8d3d088aff1" 
                                        data-epayco-amount="1329000" 
                                        data-epayco-name="Plan Lerny Expert" 
                                        data-epayco-description="Plan Lerny Expert" 
                                        data-epayco-currency="cop" 
                                        data-epayco-country="co" 
                                        data-epayco-test="true"
                                        data-epayco-response="https://ejemplo.com/respuesta.html" 
                                        data-epayco-confirmation="https://ejemplo.com/confirmacion" >
                                    </script>
                                </v-btn>
                            </v-card-actions>  
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" style="width:100%; padding-left:30px">
                        <v-card class="ma-2 mx-auto" max-width="344" shaped elevation="24" color="botonRepro" dark>
                            <center>
                                <v-card-text style="font-weight: bold; font-size:30px; margin-bottom:-20px;">
                                    Lerny Basic <br> <br>
                                    <b style="font-size:40px; font-weight:bold">$150.000</b> /mes <br>
                                    <b style="font-size:17px;line-height:40px;">Pago mes a mes</b>
                                </v-card-text>
                            </center>
                            <v-card-subtitle style="font-size:15px; font-weight:500">
                                <v-icon>done</v-icon> Más de 100 cursos y 50 habilidades.<br>
                                <v-icon>done</v-icon> Acceso ilimitado en llamada offline<br>
                            </v-card-subtitle>
                            <br><br><br>
                            <v-card-actions>
                                <v-btn class="ma-2 mx-auto" rounded outlined style="padding-left:20px; padding-right:20px;">
                                    <script type="application/javascript" src="https://s3-us-west-2.amazonaws.com/epayco/v1.0/checkoutEpayco.js"
                                        class="epayco-button" 
                                        data-epayco-key="491d6a0b6e992cf924edd8d3d088aff1" 
                                        data-epayco-amount="150000" 
                                        data-epayco-name="Plan Lerny Basic" 
                                        data-epayco-description="Plan Lerny Basic" 
                                        data-epayco-currency="cop" 
                                        data-epayco-country="co" 
                                        data-epayco-test="true"
                                        data-epayco-response="https://ejemplo.com/respuesta.html" 
                                        data-epayco-confirmation="https://ejemplo.com/confirmacion" >
                                    </script>
                                </v-btn> 
                            </v-card-actions>  
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'MiSuscripcion',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({

        }),
    };
</script>

<style scoped>
    .contenedor_suscripcion_dark{
        padding-top: 45px;
        padding-bottom: 20px;
        padding-left: 100px;
        padding-right: 70px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }

    .contenedor_suscripcion_light{
        padding-top: 45px;
        padding-bottom: 20px;
        padding-left: 100px;
        padding-right: 70px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #FFFFFF;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    
</style>