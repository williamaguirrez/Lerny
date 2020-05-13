<template>
	<v-app id="inspire">
        <div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_light1' : 'slides font_dark1'">
                <MenuToolbar/>
                <MenuResponsive/>
                <v-row style="width:100%;padding-left:10%;padding-right:10%;">
                    <v-col cols="12" sm="8">
                        <h1 class="text_slides" style="padding-top:16%;padding-left:15px;">Aprende en cualquier momento, lugar, y a tu ritmo!</h1>
                    </v-col>
                    <v-col cols="12" sm="4" style="padding-top:5%;">
                        <div class="signup_panel">
                            <div style="padding-left:7%; padding-right:7%;">
                                <v-btn block color="primary" style="margin-bottom:10px;">Iniciar con GOOGLE</v-btn>
                                <v-btn block color="#425994" style="margin-bottom:40px;" dark>Iniciar con Facebook</v-btn>
                            </div>
                            <form>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Nombre y Apellido" prepend-inner-icon="account_circle"></v-text-field>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Correo@gmail.com" prepend-inner-icon="email"></v-text-field>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                                <v-text-field solo rounded label="Confirmar Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                                <div style="padding-left:15%;padding-right:15%">
                                    <center>
                                        <v-btn style="margin-bottom:10px;" rounded block color="boton_menu1" dark large>Comenzar</v-btn>
                                    </center>
                                </div>
                            </form>
                            <center>
                                <p style="color:boton_menu1; font-family: Maven Pro; font-style: normal; font-weight: 500; font-size: 15px;">
                                    ¿Tienes una cuenta? <a style="font-weight: 900;"><router-link to='/login'>Inicia</router-link></a>
                                </p>
                            </center>
                        </div>
                    </v-col>
                </v-row>
			</div>
		</div>
    </v-app>
</template>

<script>
    import MenuToolbar from './parts/MenuToolbar';
    import MenuResponsive from './parts/MenuResponsive';
    export default {
    name: 'Signup',
    components: {
        MenuToolbar,
        MenuResponsive,
    },
    data: () => ({
        //
        }),
    };
</script>

<style>
    .slides.font_dark1{
		background-image: url('../assets/slides/slider4.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    }
    .slides.font_light1{
		background-image: url('../assets/slides/slider5.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    }
    .signup_panel{
        width: 368px;
        background-color: #001844b9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 15%;
        padding-right: 15%;
        padding-left: 15%;
        padding-bottom: 10%;
    }
</style>