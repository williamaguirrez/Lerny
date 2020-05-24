<template>
	<v-app id="inspire">
        <MenuIzquierdo/>
        <MenuSuperior/>

        <!-- Menú Derecho Contenido del curso ---------------------------------------------------------------------- -->
        <v-container>
            <v-navigation-drawer v-model="drawer" :color="isColor" permanent app width="500" right expand-on-hover dark>
                <v-list>
                    <v-list-item v-for="(item, i) in arregloTemas" :key="i">
                        <v-list-item-icon style="margin-right:5px; margin-top:2px; margin-bottom:2px">
                            <div class="my-2">
                                <v-btn color="secondary" fab x-small dark style="font-size:14px;">{{ i }}</v-btn>
                            </div>
                        </v-list-item-icon>
                        <v-list-item-content style="padding:0px">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>a</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-timeline dense clipped style="padding-top:0px;">
                                            <v-timeline-item v-for="(key, j) in item" :key="j" :color="true ? 'green' : 'grey' " icon-color="white" icon="done">
                                                <v-row justify="space-between">
                                                    <v-col cols="12"><router-link :to="key.url">{{ key.nomLeccion }}</router-link></v-col>
                                                </v-row>
                                            </v-timeline-item>
                                        </v-timeline>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-container> 

        <!-- Clase de un curso ------------------------------------------------------------------------------------- -->
        <div id="tematicas" :class="$vuetify.theme.dark ? 'contenedorClases fondo_dark' : 'contenedorClases'">
			<v-row>
                <!-- Titulo -->
				<v-col cols="12" sm="11">
					<h2 class="t_descubre titulo--text">Hola {{ this.$store.state.usuario.nombre }}, nos alegra volver a verte</h2>
				</v-col>
				<v-col cols="12" sm="1">
				</v-col>
			</v-row>
			<v-row>
                <!-- Reproductor -->
				<v-col cols="12" sm="7" style="padding-right:0px;">
                        <template v-if="tipoVideo == 'youtube'">
                            <vue-plyr :key="video">
                            <div class="plyr__video-embed">
                                <iframe
                                    :src="video + '?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1'"
                                    allowfullscreen allowtransparency allow="autoplay">
                                </iframe>
                            </div>
                            </vue-plyr>
                        </template>
                        <template v-else-if="tipoVideo == 'vimeo'">
                            <vue-plyr :key="video">
                            <div class="plyr__video-embed">
                                <iframe
                                    :src="video + '?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media'"
                                    allowfullscreen allowtransparency allow="autoplay">
                                </iframe>
                            </div>
                            </vue-plyr>
                        </template>
                        <template v-else-if="tipoVideo == 'web'">
                            <vue-plyr :key="video">
                            <video :src="video">
                                <!-- <source src="video-720p.mp4" type="video/mp4" size="720"> -->
                                <source :src="video" type="video/mp4" size="1080">
                                <!-- <track kind="captions" label="English" srclang="es" src="captions-en.vtt" default> -->
                            </video>
                            </vue-plyr>
                        </template>
                    <!-- Botones debajo del reproductor -->
                    <v-row>
                        <v-col cols="12" sm="2" style="padding:0px;">    
                        </v-col>
                        <v-col cols="12" sm="10" style="padding-top:0px;">
                            <div style="float:right;">
                                <v-btn outlined color="indigo" @click.stop="dialog = true"> ¿Problemas?</v-btn>
                                <v-btn outlined color="indigo" :to="urlAnterior">
                                    <v-icon left>skip_previous</v-icon>
                                </v-btn>
                                <v-btn outlined color="indigo" :to="urlSiguiente">
                                    <v-icon left>skip_next</v-icon> Siguiente Video
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <!-- Titulo y descripción del video -->
                    <div>
                        <h1 class="t_descubre" style="font-weight: bold; font-size:30px; margin-bottom:15px; margin-top:15px;">
                            {{ nomLeccion }}
                        </h1>
                        <v-divider></v-divider>
                        <p style="font-size:16px; margin-bottom:0px; margin-top:15px;" class="t_general">
                            {{ descripcion }}
                        </p>
                    </div>
				</v-col>
                <!-- Tablon de aportes, preguntas y material -->
				<v-col cols="12" sm="5" style="padding-left:0px;">
					<v-tabs class="elevation-2" grow>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab href="#tab-aportes">Aportes</v-tab>
                        <v-tab href="#tab-preguntas">Preguntas</v-tab>
                        <v-tab href="#tab-recursos">Recursos</v-tab>
                        <v-tab-item value="tab-aportes">
                            <v-card flat tile>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="tab-preguntas">
                            <v-card flat tile>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item value="tab-recursos">
                            <v-card flat tile>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
				</v-col>
			</v-row>
        </div> 

        <!-- Modal de boton ¿Problemas? ------------------------------------------------------------------- -->
        <v-row justify="center">
            <v-dialog v-model="dialog" max-width="410">
                <v-card>
                    <v-card-title class="headline">¿Qué está mal en este contenido?</v-card-title>
                    <v-card-text>
                        Puede ser un problema de edición, algún archivo que falte o alguna propuesta de mejora. Estaremos muy atentos y lo resolveremos pronto. Por favor no envíes falsos reportes o duplicados.
                        <v-textarea filled auto-grow label="Problema" rows="2" row-height="20"></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue" text @click="dialog = false">
                            Volver a Clase
                        </v-btn>
                        <v-btn color="blue" text @click="dialog = false">
                            Enviar Reporte
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
	</v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    import firebase from 'firebase';
    export default {
        name: 'Reproductor',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        created() {
            this.cargarCurso();
        },
        data: () => ({
            idCurso: '',
            nomCurso: '',
            idTema:'',
            nomTema:'',
            idLeccion:'',
            nomLeccion:'',
            video:'',
            tipoVideo:'',
            descripcion:'',
            visto:'',
            url:'',
            urlSiguiente:'',
            urlAnterior:'',
            arregloTemas:[{
                arregloLesiones:[{
                    idCurso: '1',
                    nomCurso: '1',
                    idTema:'1',
                    nomTema:'1',
                    idLeccion:'1',
                    nomLeccion:'1',
                    video:'1',
                    descripcion:'1',
                    visto:'1',
                    url:'1',
                    urlSiguiente:'1',
                    urlAnterior:'1',
                }],
            }],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            drawer: true,
            dialog: false,
        }),
        watch:{
            $route(to, from){
                this.idCurso = to.params.idCurso;
                this.idTema = to.params.idTema;
                this.idLeccion = to.params.idLeccion;
                this.cargarCurso();
            }
        },
        computed:{
            isColor: function(){
                if (this.$vuetify.theme.dark){
                    return 'rgba(0, 0, 0, 0.747)';
                }else{
                    return 'rgba(0, 24, 88, 0.712)';
                }
            },
        },
        methods: {
            cargarIndice(arregloTemas){
                this.arregloTemas = JSON.parse(JSON.stringify(arregloTemas));
            },          
            cargarCurso(){
                this.idCurso = this.$route.params.idCurso;
                this.idTema = this.$route.params.idTema;
                this.idLeccion = this.$route.params.idLeccion;
                firebase.database().ref('/cursos/' + this.idCurso + '/' + this.idTema + '/' + this.idLeccion).on('value', data =>{
                    if(data.val() != null){
                        this.nomCurso = data.val().nomCurso;
                        this.nomTema = data.val().nomTema;
                        this.nomLeccion = data.val().nomLeccion;
                        this.video = data.val().video;
                        this.descripcion = data.val().descripcion;
                        this.url = data.val().url;
                        this.urlSiguiente = data.val().urlSiguiente;
                        this.urlAnterior = data.val().urlAnterior;
                        this.tipoVideo = data.val().tipoVideo;
                    }else{
                        this.$router.push({ name: 'noencontrado' });
                    }
                })
                firebase.database().ref('/cursos/' + this.idCurso).on('value', data => {
                    if(data.val() != null){
                        this.cargarIndice(data.val());
                    }
                })
            },    
        },
    };
</script>


<style scoped>
    .contenedorClases{
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		padding-bottom: 5%;   
	}
    a{
        text-decoration: none;
    }
    
</style>