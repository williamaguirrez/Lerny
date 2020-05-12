<template>
	<v-app id="inspire">
        <MenuToolbar/>
        <MenuResponsive/>

        

        <div class="slides">
			<div class="slides font3">
			</div>
            <v-row no-gutters>
                <v-col cols="12" sm="8">
                    <h1 class="text_slides signup">Aprende en cualquier momento, lugar, y a tu ritmo!
                    </h1>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="signup_panel">
                        <div style="padding-left:7%; padding-right:7%;">
                            <v-btn block large color="primary"><v-icon left>google</v-icon>Iniciar con GOOGLE</v-btn>
                            <br>
                            <v-btn block large color="#425994"><v-icon left>google</v-icon>Iniciar con Facebook</v-btn>
                            <br>
                        </div>
                        <v-text-field solo rounded label="Nombre y Apellido" prepend-inner-icon="account_circle"></v-text-field>
                        <v-text-field solo rounded label="Correo@gmail.com" prepend-inner-icon="email"></v-text-field>
                        <v-text-field solo rounded label="Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                        <v-text-field solo rounded label="Confirmar Contraseña" prepend-inner-icon="vpn_key"></v-text-field>
                        <div style="padding-left:15%;padding-right:15%">
                            <center><v-btn rounded block color="primary" dark to='/login'>Ingresa</v-btn></center>
                        </div>
                        <center><p style="font-family: Maven Pro; font-style: normal; font-weight: 500; font-size: 15px; padding-top: 10px;">
								¿Tienes una cuenta? <a style="font-weight: 800;"><router-link to='/login'>Inicia</router-link></a></p></center>
                    </div>
                </v-col>
            </v-row>
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
    .slides.font3{
		background-image: url('../assets/slides/slider4.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    }
    .text_slides.signup{
        top: 140px;
        right: 41.04%;
    }
    .signup_panel{
        position: absolute;
        width: 368px;
        height: 570px;
        left: 820px;
        top: 70px;
        background-color: #001844b9;
        /* opacity: 0.6; */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 3%;
        padding-right: 3%;
        padding-left: 3%;
        padding-bottom: 3%;
    }
</style>