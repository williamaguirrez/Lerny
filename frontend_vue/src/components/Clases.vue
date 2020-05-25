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
					<h2 class="t_descubre titulo--text" style="line-height: 40px;">Temáticas que tenemos para ti...</h2>
				</v-col>
			</v-row>
            <div class="wbody">
                <section class="card">
                        <template v-for="(item, i) in tematicasParaTi">
						<div :key="i" class="card--content">
							<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
								<v-card :elevation="hover ? 12 : 2" width="280px" :class="{ 'on-hover': hover }" >
									<v-img :src="item.img" height="180px"  class="align-end"></v-img> 
                                    <v-card-text class="text--primary" style="margin-bottom:-15px;">
                                        <p style="font-size:medium; font-weight: 500; margin-bottom:0px;" class="t_general text-center">{{ item.titulo }}</p>
                                        <v-row style="margin-bottom:-10px;">
                                            <v-col cols="12" sm="6">
                                                <p style="font-size:medium; margin-bottom:0px;" class="t_general text-center" black--text>
                                                    <v-icon size="20px" color="#673AB7">shopping_cart</v-icon> ${{ item.precio }}
                                                </p>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <p style="font-size:medium; margin-bottom:0px;" class="t_general text-center">
                                                    <v-icon size="20px" color="#673AB7">favorite</v-icon> {{ item.likes }} likes
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn class="ma-2 mx-auto" rounded outlined color="#673AB7" style="padding-left:20px; padding-right:20px;" :to="item.url">Comenzar</v-btn>
                                    </v-card-actions>     
								</v-card>
							</v-hover>
						</div>
					</template>	
                </section>
            </div>
            <!-- 
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
            -->
        </div>   
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    import firebase from 'firebase';
    export default {
        name: 'Clases',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        created() {
            firebase.database().ref('/cursos').on('value', data =>{
                if(data.val() != null){
                    this.cargarCursosTematica(data.val());
                }
            })
        },
        data: () => ({
            cursoRecomendacion:{
                titulo: 'Lánzate a la Innovación con Design Thinking',
                descrip: 'Descubriras como innovar a partir del FlipKit, un conjunto de herramientas practicas y sencillas que te ayudarán en el diseño y desarrollo de soluciones innovadoras',
                video: 'http://pespantelis.github.io/vue-videobg/demo/assets/timelapse.mp4',
                info: '/clases',
                reprod: '/reproductor'
            },
            tematicasParaTi: [{
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://i2.wp.com/debtwisedentist.com/wp-content/uploads/2018/04/cytonn-photography-604681-unsplash-e1524114404983.jpg?resize=800%2C445',
                    precio: '40.000',
                    likes: '555',
                },
            ],
            codsCursos: [],
        }),
        methods: {
            cargarCursosTematica(cursos){
                this.tematicasParaTi = [];
                this.codsCursos = [];
                for (let key in cursos){
                    this.cargarDatosCursos(key);
                    this.codsCursos.push(key);
                }
                let posAletaroria =  Math.floor(Math.random() * this.codsCursos.length);
                this.cargarCursoRecomendacion( this.codsCursos[posAletaroria] );
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
            cargarCursoRecomendacion(curso){
                firebase.database().ref('/cursos/' + curso + '/01/' +'/01').on('value', data => {
                    if ( data.val() != null ){
                        this.cursoRecomendacion.titulo = data.val().nomCurso;
                        this.cursoRecomendacion.descrip = data.val().descripcionCurso;
                        this.cursoRecomendacion.video = data.val().videoFondo;
                        this.cursoRecomendacion.reprod = data.val().url;
                        this.cursoRecomendacion.info = '/infoVideos';
                    }
                })
            }
        },
    };
</script>

<style scoped>
    .wbody {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        display: flex;
        min-width: 100%;
        min-height: 200px;
        overflow-x: auto; 
    }

    .card::-webkit-scrollbar {
        display: none;
    }

    .card--content {
        min-width: 280px;
        margin: 12px;
    }

    .v-card:not(.on-hover) {
	    opacity: 0.6;
	}
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