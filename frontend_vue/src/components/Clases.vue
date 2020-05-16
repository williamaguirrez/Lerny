<template>
	<v-app id="inspire">

        <!-- Recomendación Principal de películas -->
        <video-background :src="cursoRecomendacion.video" style="max-height: 630px; height: 100vh;">   
            <div class="contRecomendVideo">             
                <v-row>
                    <v-col cols="12" sm="10">
                        <h2 class="t_descubre white--text" style="font-size:80px; margin-bottom:30px;">{{ cursoRecomendacion.titulo }}</h2>
                        <p  style="font-size:20px; margin-bottom:0px; width:500px; margin-bottom:20px;" class="t_general white--text">
                            {{ cursoRecomendacion.descrip }}
                        </p>
                        <v-btn class="ma-2" color="boton_menu"  :to="cursoRecomendacion.reprod">
                            <v-icon left>play_arrow</v-icon> Aprender
                        </v-btn>
                        <v-btn class="ma-2" color="rgba(209, 209, 209, 0.589)" :to="cursoRecomendacion.info">
                            <v-icon left>info</v-icon> Más información
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </video-background>
        <MenuIzquierdo/>
        <MenuSuperior/>
<!-- Temáticas que tenemos para ti -------------------------------------------------------------------------- -->
        <div id="tematicas" :class="$vuetify.theme.dark ? 'contenedorClases fondo_dark' : 'contenedorClases'">
			<v-row>
				<v-col cols="12" sm="11">
					<h2 class="t_descubre titulo--text">Temáticas que tenemos para ti...</h2>
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
								<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" >
									<v-img :src="item.img" height="180px" class="align-end"></v-img> 
                                    <v-card-text class="text--primary" style="margin-bottom:-15px;">
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
                                        <v-btn class="ma-2 mx-auto" rounded outlined color="indigo" style="padding-left:20px; padding-right:20px;">Comenzar</v-btn>
                                    </v-card-actions>     
								</v-card>
							</v-hover>
						</v-col>
					</template>	
				</v-row>					
			</v-container>
        </div>   
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Clases',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
            cursoRecomendacion:{
                titulo: 'Lánzate a la Innovación con Design Thinking',
                descrip: 'Descubriras como innovar a partir del FlipKit, un conjunto de herramientas practicas y sencillas que te ayudarán en el diseño y desarrollo de soluciones innovadoras',
                video: 'http://pespantelis.github.io/vue-videobg/demo/assets/timelapse.mp4',
                info: '/clases',
                reprod: '/clases'
            },
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
            ],
            //
        }),
    };
</script>

<style scoped>
    .contenedorClases{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;
	}
    .contRecomendVideo{
		padding-top: 15%;
		padding-left: 100px;
		padding-right: 5%;
		padding-bottom: 5%;
        height: 730px;
        background-color: rgba(7, 0, 99, 0.514);
	}
    .t_descubre{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 38px;
		line-height: 80px;
		letter-spacing: -0.5px;
		color: rgba(0, 93, 165, 0.651);
	}
    .t_general{
		font-family: Maven Pro;
		font-style: normal;
		letter-spacing: -0.5px;
	}
    
</style>