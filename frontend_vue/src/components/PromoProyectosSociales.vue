<template>
	<v-app id="inspire" class="letra">
        <!-- Slider Revolution -->
        <script type="application/javascript" src="https://wtechnology.co/slider/assets/js/includes/jquery/jquery.js"></script>
        <script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.tools.min.js"></script>
        <script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.revolution.min.js"></script>
        <script type="application/javascript" id="revslider_script" src="https://wtechnology.co/slider/assets/js/revslider.js"></script>
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
        <div style="padding-left:20%; padding-right:20%; padding-top:70px; padding-bottom:70px;" :class="$vuetify.theme.dark ? 'fondo_dark' : 'fondo_light'">
            <v-card>
                <v-card-title class="headline"><h1 style="font-size:30px">¿Cómo funcionan los Proyectos Sociales?</h1></v-card-title>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Completar</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2">Publicar</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 3" step="3">Especificar</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="4">Revisar</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>Despues de estudiar todos los módulos de alguno de nuestros cursos, los estudiantes deben realiza un proyecto a favor de la comunidad</p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 2"> Continuar</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>Este proyecto es calificado publicando un video de 2 minutos, más imágenes o cualquer contenido digital en INSTAGRAM con el hashtag
                                    #ConLernyAprendoAyudo mostrando el proyecto social a nosotros y al mundo.</p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 3">Continuar </v-btn>
                            <v-btn text @click="e1 = 1">Anterior</v-btn>
                        </v-stepper-content> 
                        <v-stepper-content step="3">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p> El estudiante después de subir el proyecto a redes sociales, debe contactarnos e informarnos sobre su proyecto.</p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 4">Continuar</v-btn>
                            <v-btn text @click="e1 = 2">Anterior</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>Nos contactaremos con el estudiante después de revisar el proyecto en su totalidad, verificaremos que se hizo realidad con la comunidad y finalmente le daremos la respectiva certificación de que aprobó el curso</p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 1">Gracias</v-btn>
                            <v-btn text @click="e1 = 3">Anterior</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                    </v-stepper>
            </v-card>
        </div>

        <!--  -->
		<div id="funcionalidadesHome" :class="$vuetify.theme.dark ? 'contenedor fondo_dark' : 'contenedor'">
			<v-row>
				<v-col cols="12" xs="6" sm="6">
					<h2 :class="$vuetify.theme.dark ? 't_descubre2_dark' : 't_descubre2'">Top 5</h2>
				</v-col>
				<v-col cols="12" xs="6" sm="6">
					<router-link to='/proyectosociales'>
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
		<v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:80px; justify-content:center">
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
											<div style="width:170px;" align="center" justify="center"> 
												<v-btn rounded outlined  :class="$vuetify.theme.dark  ? 'boton_dark' : 'boton_light'" 
												style="margin-top:30px;">Contactar</v-btn>
											</div>
											</v-container> 
										</v-card>
									</v-hover>
								</v-col>
							</template>	
						</v-row>
				</v-container>
			</v-row>


		</div>
        <!-- Proyectos Sociales Slider ---------------------------------------------------------------------------------- -->
        <div class="revslider" data-alias="proyectossociales"></div>
		
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
    name: 'PromoProyectosSociales',
    components: {
		MenuToolbar,
		MenuResponsive,
    },
	data: () => ({
        e1: 1,
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
    @import 'https://wtechnology.co/slider/revslider/public/assets/css/settings.css';

    .letra{
        font-family: Maven Pro;
		font-style: normal;
    }
    .fondo_dark{
        background-color: #001844;
    }
    .fondo_light{
        background-color: #FFFFFF;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
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