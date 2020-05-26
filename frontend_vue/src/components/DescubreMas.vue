<template>
	<v-app id="inspire">
		<div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_dark' : 'slides font_light'">
				<MenuToolbar/>
				<MenuResponsive/>
				<v-row style="width:100%;padding-left:10%;padding-right:10%;">
					<v-col cols="12" sm="9">
						<h1 class="text_slides" style="padding-top:16%;padding-left:15px;">Transforma tu realidad estudiando en cualquier lugar</h1>
						<div style="width:170px;"> 
							<v-btn rounded block color="boton_menu" style="margin-top:30px;" dark>Comenzar</v-btn>
						</div>
					</v-col>
				</v-row>
			</div>
		</div>

	<!-- Descubre nuestras funcionalidades -------------------------------------------------------------------- -->
		<div id="funcionalidadesHome" :class="$vuetify.theme.dark ? 'contenedor fondo_dark' : 'contenedor'">
			<v-row>
				<v-col cols="12" sm="11">
					<h2 class="t_descubre titulo--text">Descubre nuestras funcionalidades</h2>
				</v-col>
				<v-col cols="12" sm="1">
					<v-btn class="mx-2" fab color="boton_menu" dark style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-container class="pa-4 text-center">
				<v-row class="fill-height" align="center" justify="center">
					<template v-for="(item, i) in items">
						<v-col :key="i" cols="12" md="4" class="boton_menu">
							<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
								<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" >
									<v-img :src="item.img" height="225px" class="align-end">
										<v-card-title class="title white--text">
											{{item.title}}
										</v-card-title>
									</v-img>      
								</v-card>
							</v-hover>
						</v-col>
					</template>	
				</v-row>
				<v-row class="fill-height" align="center" justify="center">
					<template v-for="(item, i) in items">
						<v-col :key="i" cols="12" md="4" style="background-color:#00102E;">
							<v-row no-gutters class="descubre_descrip">
								<p class="text_descrip" >{{item.description}}</p>
							</v-row> 
						</v-col>
					</template>
				</v-row>					
			</v-container>

	<!-- Informacion Rutas, Podcast Educativos, Nuestros contenidos---------------------------------------------- -->
			<div style="padding-left:10%; padding-right:10%; padding-top:5%; padding-bottom:5%">
				<v-row>
					<v-col cols="12" sm="4" class="boton_menu">
						<p  style="padding-top:16px;" class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Rutas de Aprendizaje</p>
					</v-col>
					<v-col cols="12" sm="4" class="boton_menuN">
						<p style="padding-top:16px;" class="banner_text text-center"><v-icon color="#ffffff" size="40px">music_note</v-icon>Podcast Educativos</p>
					</v-col>
					<v-col cols="12" sm="4" class="boton_menu">
						<p style="padding-top:16px;" class="banner_text text-center"><v-icon color="#ffffff" size="40px">home</v-icon>Nuestros Contenidos</p>
					</v-col>
				</v-row>
			</div>		
		</div>

		

		<div id="sabemosInternet" :class="$vuetify.theme.dark ? 'llamada_contacto_dark' : 'llamada_contacto_light'" style="padding-left:5%; padding-right:5%;">
			<div>
				<v-row style="width:100%;">
					<v-col cols="12" sm="9" style="margin-top:-20px;">
						<h1 class="llamada_text titulo--text">Sabemos que no siempre cuentas con internet!!</h1>
					</v-col>
				</v-row>
				<v-row class="">
					<v-col cols="12" sm="6">
						<div class="text_llamada" style="margin-top:15%; width:340px;margin-left:10%">
							<p align="center" class="titulo--text">Si tienes algun inconveniente con tu red Wifi, 
								Programa tus clases y te llamaremos para que sigas 
								recibiendo educación de forma no remota, o si deseas 
								comunicate en cualquier momento</p>
							<br>
							<div style="width:200px;margin-left:15%">
								<v-btn rounded block large color="boton_menu1" class="sombraB" dark>Llamar</v-btn>
							</div>
						</div>
					</v-col>
					<v-col cols="12" sm="6">
						<center>
							<div style="width:370px; padding-top:30%;">
								<form>
									<v-text-field style="margin-bottom:-20px;" label="Nombre" type="text" solo rounded  prepend-inner-icon="account_circle"></v-text-field>
									<v-text-field style="margin-bottom:-20px;" label="Número de Teléfono" type="telephone" solo rounded prepend-inner-icon="phone"></v-text-field>
									<v-text-field style="margin-bottom:-20px;" label="E-mail" type="email"  solo rounded prepend-inner-icon="email"></v-text-field>
									<v-text-field label="Contraseña" type="password" solo rounded prepend-inner-icon="vpn_key"></v-text-field>
										<div style="width:200px;">
											<v-btn block rounded color="boton_menu1" class="sombraB" dark>Programar</v-btn>
										</div>
								</form>
								<p style="font-family: Maven Pro; font-style: normal; font-weight: 500;  font-size: 15px; margin-top:20px;">
									¿Tiene una cuenta? <a style="font-weight: 800;"><router-link to='/login'>Inicia Sesión</router-link></a></p>
							</div>
						</center>
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
		name: 'Home',
		components: {
			MenuToolbar,
			MenuResponsive,
		},
		data: () => ({
			items: [{
					title: 'Programa de Apadrinamiento',
					img: 'https://i2.wp.com/debtwisedentist.com/wp-content/uploads/2018/04/cytonn-photography-604681-unsplash-e1524114404983.jpg?resize=800%2C445',
					description:'Donde los empresarios ayudan a pagar la educación de nuestros estudiantes',
				},
				{
					title: 'Programa de acompañamiento',
					img: 'http://www.crossroadslearning.ca/uploads/3/0/9/2/30924385/mimi-thian-vdxmsix-n6m-unsplash.jpg',
					description: 'Donde resolvemos tus dudas en un tiempo máximo de 24 horas',
				},
				{
					title: 'Programa de proyectos sociales',
					img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
					description: 'Aquí aplicarás lo aprendido en tus comunidades',
				},
			],
        //
        }),
    };
</script>

<style scoped>
	.v-card:not(.on-hover) {
			opacity: 0.6;
	}
</style>

<style>
	.contenedor.fondo_dark{
		background-image: linear-gradient(#23036A, #001844);
	}
	.sombraB{
		box-shadow: 0px 4px 31px rgba(0, 21, 33, 0.46);
	}
	.v-card {
		transition: opacity .4s ease-in-out;
	}
	
	.show-btns {
		color: rgba(255, 255, 255, 1) !important;
	}
	.contenedor{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
	}
	.slides{
		width: 100%;
		height: 750px;	
	}
	.slides.font_light{
		background-image: url('../assets/slides/slider3.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.slides.font_dark{
		background-image: url('../assets/slides/slider2.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.text_slides{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 68px;
		line-height: 72px;
		letter-spacing: -1.5px;
		color: white;
	}
	.t_descubre{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 38px;
		line-height: 40px;
		letter-spacing: -0.5px;
		color: #102855;
	}
	.descubre_descrip{
		background: #00102E;
		width: 100%;	
	}
	.text_descrip{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		letter-spacing: 0.18px;
		color: #FFFFFF;
		padding-right: 2%;
		padding-left: 2%;
		padding-top: 20px;
		padding-bottom: 4px;
	}
	.banner_text{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		color: #FFFFFF;
	}
	.llamada_contacto_light{
		background-image: url('../assets/light_footer.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 700px;
	}
	.llamada_contacto_dark{
		background-image: url('../assets/dark_footer2.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 700px;
	}
	.llamada_text{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 75px;
		line-height: 72px;
		letter-spacing: -1.5px;
		color: #102855;
	}
	.text_llamada{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		letter-spacing: 0.18px;
		color: #102855;
	}
</style>

