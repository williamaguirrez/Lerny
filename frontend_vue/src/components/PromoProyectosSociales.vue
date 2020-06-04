<template>
	<v-app id="inspire">
        <div class="slides2">
			<div :class="$vuetify.theme.dark ? 'slides2 font_dark1' : 'slides2 font_light1'">
            	<MenuToolbar />
				<MenuResponsive />
				<v-row style="width:100%;padding-left:10%;padding-right:10%;">
					<v-col cols="12" sm="9">
						<h1 class="text_slides" style="padding-top:16%;padding-left:15px;">Se una de las personas que transforma el mundo con los proyectos sociales</h1>
					</v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Encuentra proyecto sociales" single-line solo prepend-inner-icon="search" style="margin-top:50px;" ></v-text-field>
                      <!--  <v-text-field outlined label="Encuentra proyecto sociales" prepend-inner-icon="search" style="height: 300px;" ></v-text-field> -->
                    </v-col>
				</v-row>
			</div>
        </div>

		<div id="funcionalidadesHome" :class="$vuetify.theme.dark ? 'contenedor fondo_dark' : 'contenedor'">
			<v-row>
				<v-col cols="12" xs="6" sm="6">
					<h2 :class="$vuetify.theme.dark ? 't_descubre2_dark' : 't_descubre2'">Top 5</h2>
				</v-col>
				<v-col cols="12" xs="6" sm="6">
					<router-link to='/DescubreMas'>
					<v-btn  x-large  fab color="boton_menu" dark style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
						
					</v-btn>
					</router-link>
				</v-col>
			</v-row>
			<!--Este es el proyecto campesino-->
			<v-row style="width:100%;padding-left:5%;padding-right:5%; padding-top:10%; justify-content:center">
				<v-hover
					v-slot:default="{ hover }"
					open-delay="100"
					>
					<v-card :elevation="hover ? 16 : 2" class="d-inline-block mx-auto" color="tarjetasHome2" >
						<v-container >
							<v-row  wrap>
								<v-col  xs="12" sm="12"  md="6">
									<v-img  src='../assets/campesino.png' ></v-img>
								</v-col>
								<v-col  xs="12" sm="12"  md="6">
									<h1 :class="$vuetify.theme.dark ? 'color_titulo_cards_dark' : 'color_titulo_cards_light'">Proyecto Campesino</h1>
									<br>
									<h2 :class="$vuetify.theme.dark ? 'color_textos_cards_dark' : 'color_textos_cards_light'"> En este proyecto social se ayudó
										al agricultor Alfonso a implementar
										un sistema de riego de sus cultivos y promover su marca
										de verduras en Cali
									</h2>
									<div class="mt-8">
									<v-btn x large rounded outlined :class="$vuetify.theme.dark ? 'boton_dark' : 'boton_light'" >Contactar</v-btn>
					
									<v-btn  v-for="icon in icons" :key="icon" :class="$vuetify.theme.dark ? 'color_iconos_dark' : 'color_iconos_light'"   
									:color="$vuetify.theme.dark ? 'white' : '#673AB7'" icon>
										<v-icon size="30px">{{ icon }}</v-icon>
									</v-btn>
								
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-hover>
			</v-row>
			<!--Este es el la vaca -->
			<v-row style="width:100%;padding-left:5%;padding-right:5%; padding-top:80px; justify-content:center">
				<v-hover
					v-slot:default="{ hover }"
					open-delay="100"
					>
					<v-card :elevation="hover ? 16 : 2" class="d-inline-block mx-auto" color="tarjetasHome2">
						<v-container >
							<v-row wrap>
								<v-col xs="12" sm="12" md="6">
									<v-img  src='../assets/vacas.png'  ></v-img>

								</v-col>
								<v-col xs="12" sm="12"  md="6">
									<h1 :class="$vuetify.theme.dark ? 'color_titulo_cards_dark' : 'color_titulo_cards_light'">Proyecto con animales</h1>
									<br>
									<h2 :class="$vuetify.theme.dark ? 'color_textos_cards_dark' : 'color_textos_cards_light'"> Ayudamos a cientos de ganaderos 
										a organizar sus sistemas contables 
										y rediseñamos la marca para tes emprendimientos
										relacionados con lacteos
									</h2>
									<div class="mt-8">
									<v-btn x large rounded outlined :class="$vuetify.theme.dark ? 'boton_dark' : 'boton_light'" >Contactar</v-btn>
					
									<v-btn  v-for="icon in icons" :key="icon" :class="$vuetify.theme.dark ? 'color_iconos_dark' : 'color_iconos_light'"   
									:color="$vuetify.theme.dark ? 'white' : '#673AB7'" icon>
										<v-icon size="30px">{{ icon }}</v-icon>
									</v-btn>
								
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-hover>
			</v-row>
			<!--los tres de abajo para esto use lo mismo que tenias en el HOME, es decir las mismas clases-->
<!--			<v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:80px; justify-content:center">
				<v-container class="pa-4 text-center">
						<v-row class="fill-height" align="center" justify="center">
							<template v-for="(item, i) in items">
								<v-col :key="i" cols="12" md="4" >
									<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
							
										<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover  } " color="tarjetasHome2" >
											<v-container>
											<v-img :src="item.img"  height="200px"  >
											</v-img>
											<div class="mt-2">
												<v-btn  v-for="icon in icons" :key="icon" class="mx-4 white--text"   icon>
													<v-icon :color="$vuetify.theme.dark ? 'white' : '#673AB7'" size="24px">{{ icon }}</v-icon>
												</v-btn>
											</div>
											<div style="width:170px;" align="center"> 
												<v-btn rounded outlined :class="$vuetify.theme.dark ? 'boton_dark' : 'boton_light'" 
												style="margin-top:30px;margin-left:130px;">Contactar</v-btn>
											</div>
											</v-container> 
										</v-card>
									</v-hover>
								</v-col>
							</template>	
						</v-row>
				</v-container>
			</v-row>
			
			 -->
		</div>
		
<!-- CON ESTO SE CAMBIO EL COLOR A LOS ICONOS
		<div class="mt-2">
			<v-btn  v-for="icon in icons" :key="icon"   icon>
				<v-icon :color="$vuetify.theme.dark ? 'purple' : 'black'"   icon  size="24px">{{ icon }}</v-icon>
			</v-btn>
		</div>
-->
	</v-app>
</template>

<script>
	import MenuToolbar from './parts/MenuToolbar';
	import MenuResponsive from './parts/MenuResponsive';
    export default {
    name: 'Nosotros',
    components: {
		MenuToolbar,
		MenuResponsive,
    },
	data: () => ({
		items: [{
				img: 'https://makeena.com/wp-content/uploads/2018/03/megan-hodges-96122-unsplash.jpg',
			},
			{
				img: 'https://media2.fdncms.com/charleston/imager/u/magnum/31089996/onthefarm.jpg',
			},
			{
				img: 'https://www.enolo.it/wp-content/uploads/2019/11/image6.png',
			},
		],
		icons: [
				'mdi-instagram',
				'mdi-heart',
				'mdi-comment-multiple-outline',
		],
        //
        }),
    };
</script>
    



<style scoped>
	.slides2{
            width: 100%;
            height: 100%;	
        }
	.slides2.font_light1{
		background-image: url('../assets/ProyectosSocialesLight.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;	
	}
	.slides2.font_dark1{
		background-image: url('../assets/ProyectosSocialesDark.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		 background-attachment: fixed;
	}

	.v-card:not(.on-hover) {
		opacity: 0.9;
	}
	.titulo2{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 45px;
		line-height: 7px;
		letter-spacing: -1.5px;
		color: white;
	}

	.t_descubre2{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 50px;
		line-height: 40px;
		letter-spacing: -0.5px;
		color: #102855;
		position:relative;
		left: 100px;
	}
	.t_descubre2_dark{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 50px;
		line-height: 40px;
		letter-spacing: -0.5px;
		color: #ffffff;
		position:relative;
		left: 100px;
	}

	.signup_panel2{
        width: 900px;
        background-color: #001844b9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
    }
	.boton_dark{
		color: white;
		border: 2px solid #23036A;
	}
	.boton_light{
		color: #673AB7;
		border: 2px solid #673AB7;
	}
	.color_iconos_dark{
		margin-right: 24px;
        margin-left: 24px;
	}
	.color_iconos_light{
		margin-right: 24px;
        margin-left: 24px;
	}


	.color_titulo_cards_light{
	font-size: 40px;
	font-weight: 800;
	color: #23036A;
	
	
		
	}	
	.color_textos_cards_light{
	font-size: 20px;
	color: #102855;
	text-align:justify;
	padding-right: 40px;
	}	

	.color_titulo_cards_dark{
	font-size: 40px;
	color: white;
	font-weight: 800;

	}
	.color_textos_cards_dark{
	font-size: 20px;
	color: white;
	text-align:justify;
	}	

</style>