<template>
	<v-app id="inspire">
		<v-toolbar color="elevation-0" class="navbarw">
			<v-spacer></v-spacer>
			<v-switch v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
			<v-btn text to='/'>Inicio</v-btn>
			<v-btn text>Nosotros</v-btn>
			<v-btn text to='/signup'>Regístrate</v-btn>
			<v-btn rounded color="primary" dark to='/login'>Ingresa</v-btn>
		</v-toolbar>
		<div class="slides">
			<div v-if="$vuetify.theme.isDark" class="slides font2">
			</div>
			<div v-else class="slides font">
			</div>
			<h1 class="text_slides">Transforma tu realidad
				estudiando en cualquier 
				lugar
			</h1>
			<v-btn rounded color="primary" dark class="b_comenzar">Comenzar</v-btn>
		</div>
		<div class="descubre">
			<v-row no-gutters>
				<v-col cols="12" sm="8">
					<h2 class="t_descubre">
						Descubre nuestras funcionalidades
					</h2>
				</v-col>
				<v-col cols="12" sm="4">
					<v-btn class="mx-2" fab dark color="indigo" style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-row v-if="$vuetify.theme.isDark" no-gutters class="descubre_imagenes2">
				<v-col cols="12" sm="4">
					<div class="desc_imagenes2">
						<div class="ww">
						</div>
					</div>
				</v-col>
				<v-col cols="12" sm="4">
					<div class="desc_imagenes2">
						<div class="ww">
						</div>
					</div>
				</v-col>
				<v-col cols="12" sm="4">
					<div class="desc_imagenes2">
						<div class="ww">
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row v-else no-gutters class="descubre_imagenes">
				<v-col cols="12" sm="4">
					<div class="desc_imagenes">
						<div class="ww">
						</div>
					</div>
				</v-col>
				<v-col cols="12" sm="4">
					<div class="desc_imagenes">
						<div class="ww">
						</div>
					</div>
				</v-col>
				<v-col cols="12" sm="4">
					<div class="desc_imagenes">
						<div class="ww">
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters class="descubre_descrip">
				<v-col cols="12" sm="4">
					<p class="text_descrip">Donde los empresarios ayudan a pagar la educación de nuestros estudiantes</p>
				</v-col>
				<v-col cols="12" sm="4">
					<p class="text_descrip">Donde resolvemos tus dudas en un tiempo máximo de 24 horas</p>
				</v-col>
				<v-col cols="12" sm="4">
					<p class="text_descrip">Aquí aplicarás lo aprendido en tus comunidades</p>
				</v-col>
			</v-row>
			<br><br><br>
			<v-row v-if="$vuetify.theme.isDark" no-gutters class="banner_func">
				<v-col cols="12" sm="4" class="banner_descrip2">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Rutas de Aprendizaje</p>
				</v-col>
				<v-col cols="12" sm="4" class="banner_descrip2 text-center" style="background: #5B418D;">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">music_note</v-icon>Podcast Educativos</p>
				</v-col>
				<v-col cols="12" sm="4" class="banner_descrip2 text-center">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Nuestros Contenidos</p>
				</v-col>
			</v-row>
			<v-row v-else no-gutters class="banner_func">
				<v-col cols="12" sm="4" class="banner_descrip">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Rutas de Aprendizaje</p>
				</v-col>
				<v-col cols="12" sm="4" class="banner_descrip text-center" style="background: #005DA5;">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">music_note</v-icon>Podcast Educativos</p>
				</v-col>
				<v-col cols="12" sm="4" class="banner_descrip text-center">
					<p class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Nuestros Contenidos</p>
				</v-col>
			</v-row>
		</div>
		<div v-if="$vuetify.theme.isDark" class="llamada_contacto2">
			<h1 class="llamada_text">Sabemos que no siempre cuentas con internet!!</h1>
			<v-row no-gutters>
				<v-col cols="12" sm="6">
					<div class="text_llamada">
						<p>Si tienes algun inconveniente con tu red Wifi, 
							Programa tus clases y te llamaremos para que sigas 
							recibiendo educación de forma no remota, o si deseas 
							comunicate en cualquier momento</p>
						<br>
						<v-btn rounded color="primary" dark>Llamar</v-btn>
					</div>
				</v-col>
				<v-col cols="12" sm="6">
					<br><br><br><br><br>
					<div class="form_contacto">
						<form>
							<v-text-field label="Nombre" type="text" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="Número de Teléfono" type="telephone" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="E-mail" type="email" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="Contraseña" type="password" filled background-color="#ffffff"></v-text-field>
							<v-btn rounded color="primary" dark>Programar</v-btn>
							<p style="font-family: Maven Pro; font-style: normal; font-weight: 500;  font-size: 15px;">
								¿Tiene una cuenta? <a style="font-weight: 800;"><router-link to='/login'>Inicia Sesión</router-link></a></p>
						</form>
					</div>
				</v-col>
			</v-row>
		</div>
		<div v-else class="llamada_contacto">
			<h1 class="llamada_text">Sabemos que no siempre cuentas con internet!!</h1>
			<v-row no-gutters>
				<v-col cols="12" sm="6">
					<div class="text_llamada">
						<p>Si tienes algun inconveniente con tu red Wifi, 
							Programa tus clases y te llamaremos para que sigas 
							recibiendo educación de forma no remota, o si deseas 
							comunicate en cualquier momento</p>
						<br>
						<v-btn rounded color="primary" dark>Llamar</v-btn>
					</div>
				</v-col>
				<v-col cols="12" sm="6">
					<br><br><br><br><br>
					<div class="form_contacto">
						<form>
							<v-text-field label="Nombre" type="text" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="Número de Teléfono" type="telephone" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="E-mail" type="email" filled background-color="#ffffff"></v-text-field>
							<v-text-field label="Contraseña" type="password" filled background-color="#ffffff"></v-text-field>
							<v-btn rounded color="primary" dark>Programar</v-btn>
							<p style="font-family: Maven Pro; font-style: normal; font-weight: 500;  font-size: 15px;">
								¿Tiene una cuenta? <a style="font-weight: 800;"><router-link to='/login'>Inicia Sesión</router-link></a></p>
						</form>
					</div>
				</v-col>
			</v-row>
		</div>
	</v-app>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		methods: mapMutations(['cambiarDark']),
	};
</script>

<style>
	.navbarw{
		background-color: #00B3FF;
	}
	.slides{
		position: relative;
		width: 100%;
		height: 659px;	
	}
	.slides.font{
		background-image: url('../assets/slides/slider3.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.slides.font2{
		background-image: url('../assets/slides/slider2.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.text_slides{	
		position: absolute;
		left: 9.69%;
		right: 31.04%;
		top: 26%;
		bottom: 80.06%;
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 68px;
		line-height: 72px;
		/* or 117% */
		letter-spacing: -1.5px;
		/* LETRA */
		color: #FFFFFF;
	}
	.b_comenzar{
		position: absolute;
		left: 9.69%;
		right: 31.04%;
		bottom: 80.06%;
		top:67%;
	}
	.descubre{
		position: relative;
		width: 100%;
		height: 780px;
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
	}
	.t_descubre{
		width: 955px;
		height: 72px;
		left: 128px;
		top: 1155px;
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 38px;
		line-height: 72px;
		/* identical to box height, or 120% */
		letter-spacing: -0.5px;
		/* Background 2 menos oscuro */
		color: #102855;
	}
	.descubre_imagenes{
		width: 100%;
		height: 330px;
		background: #00A3EF;
		padding-top: 3%;
		padding-left: 3%;
		padding-right: 3%;
		padding-bottom: 3%;
	}
	.desc_imagenes{
		width: 100%;
		height: 100%;
		background: #00A3EF;
		padding-left: 3%;
		padding-right: 3%;
	}
	.descubre_imagenes2{
		width: 100%;
		height: 330px;
		background: #9369E3;
		padding-top: 3%;
		padding-left: 3%;
		padding-right: 3%;
		padding-bottom: 3%;
	}
	.desc_imagenes2{
		width: 100%;
		height: 100%;
		background: #9369E3;
		padding-left: 3%;
		padding-right: 3%;
	}
	.ww{
		background: rgb(251, 255, 0);
		width: 100%;
		height: 100%;
	}
	.descubre_descrip{
		background: #00102E;
		width: 100%;
		height: 120px;
	}
	.text_descrip{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		/* or 136% */
		letter-spacing: 0.18px;
		color: #FFFFFF;
		padding-right: 5%;
		padding-top: 7%;
		padding-left: 10%;
	}
	.banner_func{
		width: 100%;
		height: 90px;
		padding-left: 7%;
		padding-right: 7%;
	}
	.banner_descrip{
		background: #00B3FF;
		width: 100%;
		height: 90px;
	}
	.banner_descrip2{
		background: #9369E3;
		width: 100%;
		height: 90px;
	}
	.banner_text{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 29px;
		color: #FFFFFF;
		padding-top: 8%;
	}
	.llamada_contacto{
		background-image: url('../assets/light_footer.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		width: 100%;
		height: 800px;
		padding-left: 7%;
		padding-right: 7%;
	}
	.llamada_contacto2{
		background-image: url('../assets/dark_footer.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		width: 100%;
		height: 800px;
		padding-left: 7%;
		padding-right: 7%;
	}
	.llamada_text{
		padding-right: 25%;
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 75px;
		line-height: 72px;
		letter-spacing: -1.5px;
		color: #102855;
	}
	.form_contacto{
		width: 370px;
		padding-top: 90px;
		float: right;
	}
	.text_llamada{
		width: 307px;
		padding-top: 150px;
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		letter-spacing: 0.18px;
		color: #102855;
	}
</style>