<template>
	<v-app id="inspire">
        <div class="slides">
			<div :class="$vuetify.theme.dark ? 'slides font_light1' : 'slides font_dark1'">
            	<MenuToolbar/>
				<MenuResponsive/>
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
				<v-col cols="12" sm="4">
					<h2 class="t_descubre2 ">Top 5</h2>
				</v-col>
				<v-col cols="12" sm="6">
					<v-btn  x-large class="mx-2" fab color="boton_menu" dark style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<!--Este es el la vaca -->
			<v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:50px; justify-content:center">
				<v-hover
					v-slot:default="{ hover }"
					open-delay="100"
					>
					<v-card :elevation="hover ? 16 : 2" class="d-inline-block mx-auto">
						<v-container >
							<v-row rows="12">
								<v-col cols="6">
									<v-img height="300" width="400" src='../assets/campesino.png' ></v-img>
								</v-col>
								<v-col cols="6" >
									<h1>Proyecto Campesino</h1>
									<br>
									<h2> En este proyecto social se ayudó
										al agricultor Alfonso a implementar
										un sistema de riego de sus cultivos y promover su marca
										de verduras en Cali
									</h2>
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-hover>
			</v-row>
			<!--Este es el la vaca -->
			<v-row style="width:100%;padding-left:10%;padding-right:10%; padding-top:80px; justify-content:center">
				<v-hover
					v-slot:default="{ hover }"
					open-delay="100"
					>
					<v-card :elevation="hover ? 16 : 2" class="d-inline-block mx-auto">
						<v-container >
							<v-row rows="12">
								<v-col cols="6">
									<v-img height="300" width="400" src='../assets/vacas.png' ></v-img>
								</v-col>
								<v-col cols="6" >
									<h1>Proyecto con animales</h1>
									<br>
									<h2> Ayudamos a cientos de ganaderos 
										a organizar sus sistemas contables 
										y rediseñamos la marca para tes emprendimientos
										relacionados con lacteos
									</h2>
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
										<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" >
											<v-img :src="item.img" height="225px" class="align-end">
											</v-img>      
										</v-card>
									</v-hover>
								</v-col>
							</template>	
						</v-row>
				</v-container>
			</v-row>
		</div>
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
        //
        }),
    };
</script>
    



<style scoped>
	.slides.font_light1{
		background-image: url('../assets/proyectosSociales.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.slides.font_dark1{
		background-image: url('../assets/proyectosSociales.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.v-card:not(.on-hover) {
		opacity: 0.8;
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

	.signup_panel2{
        width: 900px;
        background-color: #001844b9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
    }
</style>