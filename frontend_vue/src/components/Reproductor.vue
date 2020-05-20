<template>
	<v-app id="inspire">
        <MenuIzquierdo/>
        <MenuSuperior/>

        <!-- Menú Derecho Contenido del curso ---------------------------------------------------------------------- -->
        <v-container>
            <v-navigation-drawer v-model="drawer" :color="isColor" permanent app width="500" right expand-on-hover dark>
                <v-list>
                    <v-list-item v-for="tema in temas" :key="tema.nomTemas">
                        <v-list-item-icon style="margin-right:5px; margin-top:2px; margin-bottom:2px">
                            <div class="my-2">
                                <v-btn color="secondary" fab x-small dark style="font-size:14px;">{{ tema.id }}</v-btn>
                            </div>
                        </v-list-item-icon>
                        <v-list-item-content style="padding:0px">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>{{ tema.nomTema}}</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-timeline dense clipped style="padding-top:0px;">
                                            <v-timeline-item v-for="lesion in tema.lesiones" :key="lesion.nombre" :color="lesion.visto ? 'green' : 'grey' " icon-color="white" icon="done">
                                                <v-row justify="space-between">
                                                    <v-col cols="12"><router-link :to="lesion.url">{{ lesion.nombre }}</router-link></v-col>
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
					<h2 class="t_descubre titulo--text">Hola Isabella, nos alegra volver a verte</h2>
				</v-col>
				<v-col cols="12" sm="1">
				</v-col>
			</v-row>
			<v-row>
                <!-- Reproductor -->
				<v-col cols="12" sm="7" style="padding-right:0px;">
                    <vue-plyr>
                        <div class="plyr__video-embed">
                            <iframe
                                :src="temas[0].lesiones[0].video"
                                allowfullscreen allowtransparency allow="autoplay">
                            </iframe>
                        </div>
                    </vue-plyr>

                    <!-- Botones debjo del reproductor -->
                    <v-row>
                        <v-col cols="12" sm="2" style="padding:0px;">    
                        </v-col>
                        <v-col cols="12" sm="10" style="padding-top:0px;">
                            <div style="float:right;">
                                <v-btn outlined color="indigo" @click.stop="dialog = true"> ¿Problemas?</v-btn>
                                <v-btn outlined color="indigo" :to="temas[0].lesiones[0].urlAnterior">
                                    <v-icon left>skip_previous</v-icon>
                                </v-btn>
                                <v-btn outlined color="indigo" :to="temas[0].lesiones[0].urlSiguiente">
                                    <v-icon left>skip_next</v-icon> Siguiente Video
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <!-- Titulo y descripción del video -->
                    <div>
                        <h1 class="t_descubre" style="font-weight: bold; font-size:30px; margin-bottom:15px; margin-top:15px;">
                            {{ temas[0].lesiones[0].nombre }}
                        </h1>
                        <v-divider></v-divider>
                        <p style="font-size:16px; margin-bottom:0px; margin-top:15px;" class="t_general">
                            {{ temas[0].lesiones[0].descripcion }}
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

		<!-- <form>
			<script type="application/javascript" src="https://s3-us-west-2.amazonaws.com/epayco/v1.0/checkoutEpayco.js" 
                class="epayco-button" 
                data-epayco-key="491d6a0b6e992cf924edd8d3d088aff1" 
                data-epayco-amount="50000" 
                data-epayco-name="Vestido Mujer Primavera" 
                data-epayco-description="Vestido Mujer Primavera" 
                data-epayco-currency="cop" 
                data-epayco-country="co" 
                data-epayco-test="true"
                data-epayco-response="https://ejemplo.com/respuesta.html" 
                data-epayco-confirmation="https://ejemplo.com/confirmacion" >
            </script>
		</form>  -->
	</v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Reproductor',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
    data: () => ({
            nomCurso: 'Lanzate a la innovación con Design Thinking',
            temas:[{
                id: 1,
                nomTema: 'Módulo 1 Introducción',
                lesiones:[{
                    id: 1,
                    nombre: 'Prepárate para la experiencia Flip Kit',
                    video: 'https://www.youtube.com/watch?v=7pnH6tzApqM',
                    descripcion: 'Juan Pablo García Cifuentes Director del Programa de Innovación por Diseño ME310 en alianza con Stanford University y la red SUGAR (Stanford University Global Alliance for Redesign) Profesor de la Facultad de Ingeniería de la Pontificia Universidad Javeriana Cali MOOC: Lánzate a la innovación con Design Thinking Pontificia Universidad Javeriana - Colombia',
                    visto: true,
                    url: '/',
                    urlAnterior: '/',
                    urlSiguiente: '/', 
                    aportes:[{
                    }],
                    preguntas:[{
                    }],
                    Recursos: [{
                    }],
                },
                {
                    id:2,
                    nombre: 'Conceptos de definicion',
                    video: 'https://www.youtube.com/watch?v=7pnH6tzApqM',
                    descripcion: 'Juan Pablo García Cifuentes Director del Programa de Innovación por Diseño ME310 en alianza con Stanford University y la red SUGAR (Stanford University Global Alliance for Redesign) Profesor de la Facultad de Ingeniería de la Pontificia Universidad Javeriana Cali MOOC: Lánzate a la innovación con Design Thinking Pontificia Universidad Javeriana - Colombia',
                    visto: false,
                    url: '/',
                    urlAnterior: '/',
                    urlSiguiente: '/',
                    aportes:[{
                    }],
                    preguntas:[{
                    }],
                    Recursos: [{
                    }],
                }],
            },
            {
                id: 2,
                nomTema: 'Módulo 2 Concepto',
                lesiones:[{
                    id: 3,
                    nombre: 'Prepárate para la experiencia Flip Kit',
                    video: 'https://www.youtube.com/watch?v=7pnH6tzApqM',
                    descripcion: 'Juan Pablo García Cifuentes Director del Programa de Innovación por Diseño ME310 en alianza con Stanford University y la red SUGAR (Stanford University Global Alliance for Redesign) Profesor de la Facultad de Ingeniería de la Pontificia Universidad Javeriana Cali MOOC: Lánzate a la innovación con Design Thinking Pontificia Universidad Javeriana - Colombia',
                    visto: true,
                    url: '/',
                    urlAnterior: '/',
                    urlSiguiente: '/', 
                    aportes:[{
                    }],
                    preguntas:[{
                    }],
                    Recursos: [{
                    }],
                },
                {
                    id:4,
                    nombre: 'Conceptos de definicion',
                    video: 'https://www.youtube.com/watch?v=7pnH6tzApqM',
                    descripcion: 'Juan Pablo García Cifuentes Director del Programa de Innovación por Diseño ME310 en alianza con Stanford University y la red SUGAR (Stanford University Global Alliance for Redesign) Profesor de la Facultad de Ingeniería de la Pontificia Universidad Javeriana Cali MOOC: Lánzate a la innovación con Design Thinking Pontificia Universidad Javeriana - Colombia',
                    visto: false,
                    url: '/',
                    urlAnterior: '/',
                    urlSiguiente: '/',
                    aportes:[{
                    }],
                    preguntas:[{
                    }],
                    Recursos: [{
                    }],
                }],
            }],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            drawer: true,
            dialog: false,
        }),
        computed:{
            isColor: function(){
                if (this.$vuetify.theme.dark){
                    return 'rgba(0, 0, 0, 0.747)';
                }else{
                    return 'rgba(0, 24, 88, 0.712)';
                }
            }
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