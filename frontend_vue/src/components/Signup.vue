<template>
	<v-app id="inspire">
        <div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_light1' : 'slides font_dark1'">
                <MenuToolbar/>
                <MenuResponsive/>
                <v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:100px; justify-content:center">
                        <div class="signup_panel">
                            <center>
                                <h2 style="padding-top:50px;" class="titulo1">Regístrate</h2>
                            </center>
                            <div style="padding-left:70px; padding-right:70px;padding-top:50px;">
                                <v-btn block color="primary" small style="margin-bottom:10px;">Registrar con GOOGLE</v-btn>
                                <v-btn block color="#425994" small dark>Registrar con Facebook</v-btn>
                            </div>
                            <v-divider style="margin-bottom:25px; margin-top:25px; margin-left:140px; margin-right:140px;" color="white"></v-divider>
                            <form>
                                <v-row style="margin-bottom:-10px;">
                                    <v-col cols="12" sm="6">
                                        <v-text-field style="margin-bottom:-40px;" solo rounded label="Nombre" prepend-inner-icon="people_alt"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field style="margin-bottom:-20px;" solo rounded label="Apellido" prepend-inner-icon="person_pin"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Correo Electrónico" prepend-inner-icon="email"></v-text-field>
                                <v-text-field style="margin-bottom:-20px;" solo rounded label="Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                                <v-text-field solo rounded label="Confirmar Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                                <div style="padding-left:15%;padding-right:15%; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" rounded block color="boton_menu1" dark large>Registrar</v-btn>
                                </div>
                            </form>
                            <center>
                                <p style="color:white; font-family: Maven Pro; font-style: normal; font-weight: 500; font-size:12px; margin-bottom:-5px;">
                                    ¿Ya tienes cuenta? <a style="font-weight: 900;"><router-link to='/login'>Inicia Sesión</router-link></a>
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
    .titulo1{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 45px;
		line-height: 40px;
		letter-spacing: -1.5px;
		color: white;
	}
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
        width: 500px;
        background-color: #001844b9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
    }
</style>