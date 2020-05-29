<template>
    <v-app id="inspire">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_videollamada_dark' : 'contenedor_videollamada_light'">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:100px; justify-content:center">
				<div class="signup_panel1">
					<center>
						<h2 style="padding-top:50px;" class="titulo1">Reuniones</h2>
					</center>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-text-field style="margin-bottom:-5px; padding-top:40px;"
							v-model="nombre" :rules="nombreRule" required
							type="text" solo rounded label="Nombre" 
							prepend-inner-icon="assignment_ind">
						</v-text-field>
						<v-text-field style="margin-bottom:-5px; padding-top:0px;"
							v-model="idReu" :rules="idReuRule" required
							type="text" solo rounded label="Id de la Reunión" 
							prepend-inner-icon="video_settings">
						</v-text-field>
						<v-text-field style="margin-bottom:-5px;" 
							v-model="passwordReu" :rules="contraRules" required
							:append-icon="ocultarPassword ? 'mdi-eye' : 'mdi-eye-off'"
							:type="ocultarPassword ? 'text' : 'password'" 
							@click:append="ocultarPassword = !ocultarPassword" solo rounded 
							label="Contraseña" prepend-inner-icon="vpn_key">
						</v-text-field>
						
						<div style="padding-left:15%;padding-right:15%; margin-top:20px; margin-bottom:0px;">
							<v-btn style="margin-bottom:10px;" 
								:disabled="!valid" @click.prevent="submit"
								rounded block color="boton_menu1" 
								dark large>Reunirme
							</v-btn>
						</div>
					</v-form>
				</div>
			</v-row>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Videollamada',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
			valid: true,
			nombre: '',
			idReu: '',
			passwordReu: '',
			ocultarPassword: false,
			nombreRule: [
                v => !!v || 'El nombre es obligatorio',
			],
			idReuRule: [
                v => !!v || 'El Id de la reunión es obligatorio',
			],
			contraRules: [
                v => !!v || 'Contraseña es obligatorio',
            ],
		}),
		methods: {
			submit(){
				if(this.$refs.form.validate()){
					window.location.href = 'https://conferencia.lerny.co/#/meeting?nickname='+ this.nombre + '&meetingId=' + this.idReu + '&password=' + this.passwordReu;
				}
			}
		},
		created() {
			this.idReu = this.$store.state.videollamada.idReu;
			this.passwordReu = this.$store.state.videollamada.contrasenaReu;
			this.nombre = this.$store.state.usuario.nombre;
			this.$store.state.ayuda.titulo = '¡Ayuda en las Videollamadas!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de las Videollamadas individuales con nuestros y tus amigos, aquí podrás ...';
		},
    };
</script>

<style scoped>
    .contenedor_videollamada_light{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: rgb(36, 3, 106);
        background-image: url('../assets/fondos/fondoMonitoria.png');
        background-size: 100% auto;
    }
	.contenedor_videollamada_dark{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondos/fondoMonitoria.png');
        background-size: 100% auto;
    }
</style>