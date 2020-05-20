<template>
	<v-app id="inspire">
        <div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_light1' : 'slides font_dark1'">
                <MenuToolbar/>
                <MenuResponsive/>
                <v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:100px; justify-content:center">
                        <div class="signup_panel1">
                            <center>
                                <h2 style="padding-top:50px;" class="titulo1">Iniciar Sesión</h2>
                            </center>
                            <div style="padding-left:30px; padding-right:30px;padding-top:50px;">
                                <v-btn block color="primary" small style="margin-bottom:10px;">Iniciar con GOOGLE</v-btn>
                                <v-btn block color="#425994" small dark>Iniciar con Facebook</v-btn>
                            </div>
                            <v-divider style="margin-bottom:25px; margin-top:25px; margin-left:80px; margin-right:80px;" color="white"></v-divider>
                            <form>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Correo Electrónico" prepend-inner-icon="email"></v-text-field>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                                <p style="color:white; font-family: Maven Pro; font-style: normal; font-weight: 500; font-size: 12px; margin-bottom:-2px;">
                                    ¿Olvidaste tu Cuenta? <a style="font-weight: 900;"><router-link to='/recuperar'>Recupérala</router-link></a>
                                </p>
                                <div style="padding-left:15%;padding-right:15%; margin-top:40px; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" rounded block color="boton_menu1" to="/clases" dark large>Comenzar</v-btn>
                                </div>
                            </form>
                            <center>
                                <p style="color:white; font-family: Maven Pro; font-style: normal; font-weight: 500; font-size:12px; margin-bottom:-5px;">
                                    ¿No tienes Cuenta? <a style="font-weight: 900;"><router-link to='/signup'>Regístrate</router-link></a>
                                </p>
                            </center>
                        </div>
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
    .signup_panel1{
        width: 368px;
        background-color: #001844b9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
    }
    a{
        text-decoration: none;
    }
</style>