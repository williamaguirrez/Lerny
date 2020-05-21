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
                                <v-btn block color="primary" small style="margin-bottom:10px;" @click="loginGoogle">Registrar con GOOGLE</v-btn>
                                <v-btn block color="#425994" small dark @click="loginFacebook">Registrar con Facebook</v-btn>
                            </div>
                            <v-divider style="margin-bottom:25px; margin-top:25px; margin-left:140px; margin-right:140px;" color="white"></v-divider>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-row style="margin-bottom:-10px;">
                                    <v-col cols="12" sm="6" style="padding-right:2px;">
                                        <!-- Input Nombre ----------------------------------------------------------->
                                        <v-text-field style="margin-bottom:-7px;"
                                            v-model="nombre" :rules="nombreRules"
                                            solo rounded label="Nombre" required
                                            prepend-inner-icon="people_alt">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" style="padding-left:2px;">
                                        <!-- Input Apellido--------------------------------------------------------- -->
                                        <v-text-field style="margin-bottom:-7px;"
                                            v-model="apellido" :rules="apellidoRules"
                                            solo rounded label="Apellido" required
                                            prepend-inner-icon="person_pin">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <!-- Input Correo Electronico------------------------------------------------------ -->
                                <v-text-field style="margin-bottom:-7px;"
                                    v-model="email" :rules="emailRules" required
                                    solo rounded label="Correo Electrónico" 
                                    prepend-inner-icon="email">
                                </v-text-field>
                                <v-row style="margin-bottom:-10px;">
                                    <v-col cols="12" sm="6" style="padding-right:2px; margin-top:-11px;">
                                        <!-- Input Contrasena1----------------------------------------------------- -->
                                        <v-text-field style="margin-bottom:-7px;" 
                                            v-model="contrasena1" :rules="contraRules" required
                                            :append-icon="ocultarPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="ocultarPassword1 ? 'text' : 'password'" 
                                            @click:append="ocultarPassword1 = !ocultarPassword1"
                                            solo rounded label="Contraseña" 
                                            prepend-inner-icon="vpn_key">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" style="padding-left:2px; margin-top:-11px;">
                                        <!-- Input Contrasena2----------------------------------------------------- -->
                                        <v-text-field solo rounded required
                                            v-model="contrasena2" :rules="contrasena2Rules"
                                            :append-icon="ocultarPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="ocultarPassword2 ? 'text' : 'password'" 
                                            @click:append="ocultarPassword2 = !ocultarPassword2"
                                            label="Confirmar Contraseña" 
                                            prepend-inner-icon="vpn_key">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <div style="padding-left:15%;padding-right:15%; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" 
                                        :disabled="!valid" @click.prevent="submit"
                                        rounded block color="boton_menu1" 
                                        dark large>Registrar
                                    </v-btn>
                                </div>
                            </v-form>
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
    import db from '@/firebase';
    import firebase, { database } from 'firebase';
    import toastr from 'toastr';
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
            nombre: '',
            apellido: '',
            email: '',
            contrasena1: '',
            contrasena2: '',
            ocultarPassword1: false,
            ocultarPassword2: false,
            nombreRules: [
                v => !!v || 'El nombre es obligatorio',
            ],
            apellidoRules: [
                v => !!v || 'El apellido es obligatorio',
            ],
            emailRules: [
                v => !!v || 'El correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
            ],
            contraRules: [
                v => !!v || 'Contraseña es obligatorio',
            ],
        }),
        computed: {
            contrasena2Rules(){
                const contrasena2Rules = []
                if (this.contrasena1) {
                    const contrasena2Rule =
                    v => (!!v && v) === this.contrasena1 || 'Contraseñas no coinciden'
                    contrasena2Rules.push(contrasena2Rule)
                }
                return contrasena2Rules
            }
        },
        methods: {
            submit() {
                if(this.$refs.form.validate()){
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.contrasena1)
                        .then(user => {
                            this.$store.state.mensajeExito('Gracias ' + this.nombre + ' '+ this.apellido, 'Registrado Correctamente');
                            if (user){
                                user.user.updateProfile({
                                    displayName: this.nombre + ' '+ this.apellido,
                                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf&usqp=CAU',
                                }).then((u) => {
                                    this.$refs.form.reset();
                                    this.$store.state.guardarDatabase(user.user.uid, user.user.displayName, user.user.email, user.user.photoURL);
                                    this.$router.push({ name: 'login' });
                                }).catch((err) =>{
                                    this.$store.state.mensajeError(err.message, 'Ocurrió un error');
                                })
                            }
                        }).catch(err =>{
                            this.$store.state.mensajeError(err.message, 'Ocurrió un error');
                            this.$refs.form.reset();
                        })
                }
            },
            loginGoogle(){
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then(user => {
                    this.$store.state.mensajeExito('Hola ' + user.user.displayName, 'Bienvenido');
                    this.$store.state.guardarDatabase(user.user.uid, user.user.displayName, user.user.email, user.user.photoURL);
                    this.$router.push({ name: 'clases' })
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
                    this.$store.state.guardarDatabase(user.user.uid, user.user.displayName, user.user.email, user.user.photoURL);
                    this.$router.push({ name: 'clases' });
                }).catch(err =>{
                    this.$store.state.mensajeError(err.message, 'Ocurrió un error');
                    this.$refs.form.reset();
                })
            },
        }
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