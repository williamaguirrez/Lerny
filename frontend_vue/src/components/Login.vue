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
                                <v-btn block color="primary" small style="margin-bottom:10px;" @click="loginGoogle">Iniciar con GOOGLE</v-btn>
                                <v-btn block color="#425994" small dark @click="loginFacebook">Iniciar con Facebook</v-btn>
                            </div>
                            <v-divider style="margin-bottom:25px; margin-top:25px; margin-left:80px; margin-right:80px;" color="white"></v-divider>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field style="margin-bottom:-5px;"
                                    v-model="email" :rules="emailRules" required
                                    type="email" solo rounded label="Correo Electrónico" 
                                    prepend-inner-icon="email">
                                </v-text-field>
                                <v-text-field style="margin-bottom:-5px;" 
                                    v-model="contrasena" :rules="contraRules" required
                                    :append-icon="ocultarPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="ocultarPassword ? 'text' : 'password'" 
                                    @click:append="ocultarPassword = !ocultarPassword" solo rounded 
                                    label="Contraseña" prepend-inner-icon="vpn_key">
                                </v-text-field>
                                <p style="color:white; font-family: Maven Pro; font-style: normal; font-weight: 500; font-size: 12px; margin-bottom:-2px;">
                                    ¿Olvidaste tu Cuenta? <a style="font-weight: 900;"><router-link to='/recuperar'>Recupérala</router-link></a>
                                </p>
                                <div style="padding-left:15%;padding-right:15%; margin-top:40px; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" 
                                        :disabled="!valid" @click.prevent="submit"
                                        rounded block color="boton_menu1" 
                                        dark large>Comenzar
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
    import toastr from 'toastr';
    import db from '@/firebase';
    import firebase from 'firebase';
    import MenuToolbar from './parts/MenuToolbar';
    import MenuResponsive from './parts/MenuResponsive';


    export default {
        name: 'Signup',
        components: {
            MenuToolbar,
            MenuResponsive,
        },
        data: () => ({
            valid: true,
            ocultarPassword: false,
            email: '',
            contrasena: '',
            emailRules: [
                v => !!v || 'El correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
            ],
            contraRules: [
                v => !!v || 'Contraseña es obligatorio',
            ],
        }),
        methods: {
            submit () {
                if(this.$refs.form.validate()){
                    firebase.auth().signInWithEmailAndPassword(this.email, this.contrasena)
                    .then(user => {
                        this.$store.state.mensajeExito('Hola ' + user.user.displayName, 'Bienvenido')
                        this.$router.push({ name: 'clases' })
                        this.$refs.form.reset();
                    }).catch(err =>{
                        this.$store.state.mensajeError(err.message, 'Ocurrió un error')
                        this.$refs.form.reset();
                    })
                }
            },
            loginGoogle(){
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then(user => {
                    this.$router.push({ name: 'clases' });
                    this.$store.state.mensajeExito('Hola ' + user.user.displayName, 'Bienvenido');
                }).catch(err =>{
                    this.$store.state.mensajeError(err.message, 'Ocurrió un error');
                    this.$refs.form.reset();
                })
            },
            loginFacebook(){
                const provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then(user => {
                    this.$store.state.mensajeExito('Hola ' + user.user.displayName, 'Bienvenido');
                    this.$router.push({ name: 'clases' })
                }).catch(err =>{
                    this.$store.state.mensajeError(err.message, 'Ocurrió un error')
                    this.$refs.form.reset();
                })
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