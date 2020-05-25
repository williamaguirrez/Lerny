<template>
	<v-app id="inspire">
        <div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_light1' : 'slides font_dark1'">
                <MenuToolbar/>
                <MenuResponsive/>
                <v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:100px; justify-content:center">
                        <div class="signup_panel1">
                            <center>
                                <h2 style="padding-top:50px; margin-bottom:50px;" class="titulo1" >Recuperar</h2>
                            </center> 
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field style="margin-bottom:-20px;" 
                                    v-model="email" :rules="emailRules" required
                                    solo rounded label="Correo Electrónico" 
                                    prepend-inner-icon="email">
                                </v-text-field>
                                <div style="padding-left:15%;padding-right:15%; margin-top:20px; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" 
                                        :disabled="!valid" @click="submit"
                                        rounded block color="boton_menu1" 
                                        dark large>Recuperar
                                    </v-btn>
                                </div>
                            </v-form>
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
        name: 'Recuperar',
        components: {
            MenuToolbar,
            MenuResponsive,
        },
        data: () => ({
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'El correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
            ],
        }),
        methods: {
            submit () {
                if(this.$refs.form.validate()){
                    console.log('Entra')
                }
            },
        }
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
</style>