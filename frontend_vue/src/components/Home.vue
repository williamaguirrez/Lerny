<template>
    <v-app id="inspire" class="letraa">
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
<!-- Temáticas que tenemos para ti -------------------------------------------------------------------------- -->
        <div id="tematicas" :class="$vuetify.theme.dark ? 'contenedor2 fondo_dark2' : 'contenedor2'">
			<v-row>
				<v-col cols="12" sm="7">
					<h2 class="t_descubre titulo--text">Temáticas que tenemos para ti...</h2>
				</v-col>
				<v-col cols="12" sm="4">
					<v-text-field label="Encuentra cualquier tematica..." single-line solo prepend-inner-icon="search"></v-text-field>
				</v-col>
				<v-col cols="12" sm="1">
					<v-btn class="mx-2" fab color="boton_menu" dark style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-container class="pa-4 text-center">
				<v-row class="fill-height" align="center" justify="center">
					<template v-for="(item, i) in tematicasParaTi">
						<v-col :key="i" cols="12" md="3">
							<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
								<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" color="tarjetasHome">
									<v-img :src="item.img" height="180px" class="align-end"></v-img> 
                                    <v-card-text class="text--titulo2" style="margin-bottom:-15px;">
                                        <p style="font-size:medium; font-weight: 500; margin-bottom:0px;" class="t_general text-center">{{ item.titulo }}</p>
                                        <v-row style="margin-bottom:-10px;">
                                            <v-col cols="12" sm="6">
                                                <p  style="font-size:medium; margin-bottom:0px;" class="t_general text-center">
                                                    <v-icon size="20px">shopping_cart</v-icon> ${{ item.precio }}
                                                </p>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <p  style="font-size:medium; margin-bottom:0px;" class="t_general text-center">
                                                    <v-icon size="20px">favorite</v-icon> {{ item.likes }} likes
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn class="ma-2 mx-auto" rounded outlined color="titulo2" style="padding-left:20px; padding-right:20px;" :to="item.url">Comenzar</v-btn>
                                    </v-card-actions>     
								</v-card>
							</v-hover>
						</v-col>
					</template>	
				</v-row>					
			</v-container>
        </div>   
<!-- DESPUES MODIFICAMOS ESTA PARTE, PARA VOLVERLA RESPONSIVE-->
		<div  class="iconos_new" :class="$vuetify.theme.dark ? 'iconos_fondo_dark' : 'iconos_fondo'">
			<v-row class="fill-height" align="center" justify="center">
				<v-col cols="12" md="2">
					<div style="heigth:300px; width:300px;">
					<v-img :src="require('../assets/iconos/figura1.png')" aspect-ratio="3" contain />
					</div>
				</v-col>
				<v-col cols="12" md="3">
					<h1 style="font-size:24px;">Aprende habilidades</h1>
					<h2 style="font-size:16px;font-weight: normal">Transforma tu realidad aprendiendo nuevas
						habilidades para la vida laboral
					</h2>
				</v-col>
				<v-col cols="12" md="2">
					<div style="heigth:300px; width:300px;">
					<v-img :src="require('../assets/iconos/figura2.png')" aspect-ratio="4" contain />
					</div>
				</v-col>
				<v-col cols="12" md="3">
					<h1 style="font-size:24px;">Ayuda a tu Comunidad</h1>
					<h2 style="font-size:16px; font-weight: normal">Para adquirir un certificado,
						ayuda a tu comunidad por medio de proyectos sociales
					</h2>
				</v-col>
			</v-row>
			<v-row class="fill-height" align="center" justify="center">
				<v-col cols="12" md="2">
					<div style="margin-top:20%;heigth:300px; width:300px;">
					<v-img :src="require('../assets/iconos/figura3.png')" aspect-ratio="4" contain />
					</div>
				</v-col>
				<v-col cols="12" md="3">
					<h1 style="margin-top:10%; font-size:24px;">Nunca estás solo</h1>
					<h2 style="font-size:16px;font-weight: normal">Contamos con un chat 24/7 y un servicio
						de monitores para resolver tus dudas
					</h2>
				</v-col>
				<v-col cols="12" md="2">
					<div style="margin-top:20%;heigth:300px; width:300px;">
					<v-img :src="require('../assets/iconos/figura4.png')" aspect-ratio="5" contain />
					</div>
				</v-col>
				<v-col cols="12" md="3">
					<h1 style="margin-top:10%;font-size:24px;">Tu educación puede <br> ser gratis </h1>
					<h2 style="font-size:16px;font-weight: normal">Con nuestro plan padrino, si demuestras buen
						rendimiento, obtendrás beneficios
					</h2>
				</v-col>
			</v-row>
		</div>
<!-- Descubre nuestras funcionalidades -------------------------------------------------------------------- -->
		<div id="funcionalidadesHome" :class="$vuetify.theme.dark ? 'contenedor2 fondo_dark2' : 'contenedor2'">
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
						<v-col :key="i" cols="12" md="4" >
							<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
								<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" color="tarjetasHome2">
									<v-container>
										<v-img :src="item.img" height="225px" class="align-end">
											<v-card-title class="title white--text">
												{{item.title}}
											</v-card-title>
										</v-img>  
										<v-card-text class="text_descrip2 titulo2--text">
											{{item.description}}
										</v-card-text>
										<v-card-actions>
                                        	<v-btn class="ma-2 mx-auto" rounded outlined color="titulo2" style="padding-left:20px; padding-right:20px;">Comenzar</v-btn>
                                    </v-card-actions>  
									</v-container>    
								</v-card>
							</v-hover>
						</v-col>
					</template>	
				</v-row>
			</v-container>
		</div>
<!--SABEMOS QUE NO CUENTAS CON INTERNET -->
<!--POR COLUMNAS Y FILAS -->
		<div id="sabemosInternet" :class="$vuetify.theme.dark ? 'llamada_contacto_dark22' : 'llamada_contacto_light22'" style="padding-left:5%; padding-right:5%;">

			<v-row style="width:100%;">
				<v-col cols="12" sm="9" style="margin-top:20px;">
					<h1 class="llamada_text titulo--text">Sabemos que no siempre cuentas con internet!!</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4">
				<div class="text_llamada" style="margin-top:20%; width:340px;margin-left:20%">
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
				<v-col cols="12" sm="4">
					<div style="margin-top:10%;margin-left:10%;heigth:300px; width:300px;">
						<v-img :src="require('../assets/phone_footer2.png')" aspect-ratio="0.7" contain />
					</div>
				</v-col>
				<v-col cols="12" sm="4">
					<center>
						<div style="width:370px; margin-top:10%;">
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
		
<!-- ESTE ES EL FOOTER -->
		<div id="sabemosInternet" :class="$vuetify.theme.dark ? 'footerfondo_dark' : 'footerfondo'" style="padding-left:5%; padding-right:5%;">
			<v-row>
				<v-col cols="12" md="5" style="padding-left:7%;padding-bottom:5%">
					<div style="heigth:150px; width:300px;">
						<v-img :src="require('../assets/LogoLerny.png')" aspect-ratio="1.5" contain />
					</div >
					<div style="padding-left:10%">
					<v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text"   icon>
					<v-icon size="24px">{{ icon }}</v-icon>
					</v-btn>
					</div>
				</v-col>
				
				<v-col cols="12" md="2" style="padding-top:4%;padding-left:4%">
					<div > <v-btn class="white--text" text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 20px;" color="white">Sobre nosotros</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Cursos</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Blog</v-btn> </div>
				</v-col>
				<v-col cols="12" md="2" style="padding-top:4%;padding-left:4%">
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 20px;" color="white">Categorías</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Diseño Grafico</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Programación</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Agricultura</v-btn> </div>
				</v-col>
				<v-col cols="12" md="2" style="padding-top:4%;padding-left:4%">
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 20px;" color="white">Comunidad</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Login</v-btn> </div>
					<div > <v-btn  text large style="text-transform: none; font-style: normal; font-weight: 500; font-size: 15px;" color="white">Solicita tu demo</v-btn> </div>
				</v-col>
			</v-row>
			
		</div>
<!--Fin del Footer-->
    </v-app>
</template>

<script>
    import MenuToolbar from './parts/MenuToolbar';
	import MenuResponsive from './parts/MenuResponsive';
	import firebase from 'firebase';
    export default {
		name: 'Home',
		components: {
			MenuToolbar,
			MenuResponsive,
		},
		created() {
            firebase.database().ref('/cursos').on('value', data =>{
                if(data.val() != null){
                    this.cargarCursosTematica(data.val());
                }
            })
        },
		data: () => ({
            tematicasParaTi: [{
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://i2.wp.com/debtwisedentist.com/wp-content/uploads/2018/04/cytonn-photography-604681-unsplash-e1524114404983.jpg?resize=800%2C445',
                    precio: '40.000',
                    likes: '555',
                },
                {
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'http://www.crossroadslearning.ca/uploads/3/0/9/2/30924385/mimi-thian-vdxmsix-n6m-unsplash.jpg',
                    precio: '50.000',
                    likes: '325',
                },
                {
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '60.000',
                    likes: '567',
                },
                {
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '30.000',
                    likes: '235',
				},
				{
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'http://www.crossroadslearning.ca/uploads/3/0/9/2/30924385/mimi-thian-vdxmsix-n6m-unsplash.jpg',
                    precio: '50.000',
                    likes: '325',
                },
                {
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '60.000',
                    likes: '567',
                },
                {
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '30.000',
                    likes: '235',
				},
				{
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '30.000',
                    likes: '235',
                },
            ],
			//
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
			icons: [
				'mdi-facebook',
				'mdi-twitter',
				'mdi-linkedin',
				'mdi-instagram',
			],
        //
		}),
		methods: {
            cargarCursosTematica(cursos){
                this.tematicasParaTi = [];
                for (let key in cursos){
                    this.cargarDatosCursos(key);
                }
            },
            cargarDatosCursos(curso){
                firebase.database().ref('/cursos/'+ curso + '/01/' + '/01').on('value', data =>{
                    if( data.val() != null){
                        this.tematicasParaTi.push({
                            titulo: data.val().nomCurso,
                            img: data.val().imagen,
                            precio: data.val().precio,
                            likes: data.val().likes,
                            url: data.val().url,
                        })
                    }
                })
            },
        },
    };

</script>

<style scoped>
	.letraa{
		font-family: Maven Pro;
		font-style: normal;
	}
	.contenedor2.fondo_dark2{
		background-image: linear-gradient(#23036f, #001844);
	}
	.contenedor2{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
	}

	.sombraB{
		box-shadow: 0px 4px 31px rgba(0, 21, 33, 0.46);
	}
	.v-card {
		transition: opacity .4s ease-in-out;
	}
	.v-card:not(.on-hover) {
		opacity: 0.6;
	}
	.show-btns {
		color: rgba(255, 255, 255, 1) !important;
	}
	
	
    .slides{
            width: 100%;
            height: 800px;	
        }
    .slides.font_light{
		background-image: url('../assets/slides/PantallaLogo.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.slides.font_dark{
		background-image: url('../assets/slides/PantallaLogoDark.png');
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
		color: #ffffff;
	}
	.descubre_descrip{
		background: #00102E;
		width: 100%;	
	}
	.contenedorClases{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
	}

	.iconos{
            width: 100%;
            height: 500px;	
        }
    .iconos.font_light{
		background-image: url('../assets/IconosFondo.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.iconos.font_dark{
		background-image: url('../assets/IconosFondo.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
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

	.text_descrip2{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		letter-spacing: 0.18px;
		color: #000000;
		padding-right: 0%;
		padding-left: 0%;
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
	.llamada_contacto_light22{
		background-image: url('../assets/light_footer25.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
	}
	.llamada_contacto_dark22{
		background-image: url('../assets/dark_footer4.png');
		background-color: #23036f;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
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
/*	
	.footerinfo_light{
		background-image: url('../assets/LogoFooter2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 400px;
	}
	.footerinfo_dark{
		background-image: url('../assets/LogoFooter2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 400px;
	}
	*/
	.iconos_fondo{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
		background-color:#E0F4FF;
	}
	.iconos_fondo_dark{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
		background-color: #001844;
	}
	.footerfondo_dark{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
		background-image: linear-gradient(#001844,#23036f);
		
	}
	
	.footerfondo{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
		width: 100%;
		background-color: #001844;
	}

</style>