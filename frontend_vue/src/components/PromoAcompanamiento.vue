<template>
    <v-app id="inspire" class="letra">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_monitorias_dark' : 'contenedor_monitorias_light'">    
            
            <v-col cols="12" sm="4" style="padding-right:0px; padding-top:80px">
                <center>
                    <v-img max-width="170" height="154" src="@/assets/ally.png"></v-img>
                </center>
                <div style="padding-left:10px; padding-right:30px;" class="titulo2--text">
                    <center>
                        <h1 style="font-size:40px; line-height:40px;">
                            Hola, ¿En qué <br>puedo ayudarte?
                        </h1>
                        <h1 style="font-size:18px; width:300px; padding-top:15px; padding-bottom:30px;">
                            Programa una monitoría en cualquier momento.
                        </h1>
                    </center>
                    <v-form ref="form" v-model="valid" lazy-validation style="padding-left:30px; padding-right:30px">
                        <!-- Input de la Temática ------------------------------------------------------ -->
                        <v-text-field style="margin-bottom:-7px;" background-color="#9369E3" :rules="tematicaRules"
                            required solo outlined label="Temática" dark v-model="tematica" counter="80"
                            prepend-inner-icon="school">
                        </v-text-field>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-dialog ref="dialog1" v-model="modal" :return-value.sync="date" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                        <!-- Input de la fecha -------------------------------------------------- -->
                                        <v-text-field v-model="date" label="Fecha de Monitoría"
                                            prepend-icon="event" readonly v-on="on" :rules="fechaRules"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog1.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                        <!-- Input de la hora ---------------------------------------------------- -->
                                        <v-text-field v-model="time" label="Hora" :rules="horaRules"
                                            prepend-icon="access_time" readonly v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-time-picker v-if="modal2" v-model="time" full-width>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal2 = false">Cancelar</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                                    </v-time-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                        <div style="padding-left:15%;padding-right:15%; padding-bottom:30px; margin-bottom:0px;">
                            <!-- Boton de Submit para enviar formulario ------------------------------------------ -->
                            <v-btn style="margin-bottom:10px;" :disabled="!valid" @click.prevent="submit"
                                rounded block color="#9369E3" 
                                dark large>Programar
                            </v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
            <v-col cols="12" sm="8" style="padding-right:0px" :class="$vuetify.theme.dark ? 'monitoriasbg_dark' : 'monitoriasbg_light'" class="">
                <div style="padding-top:200px; color:white">
                    <h1 style="font-size:65px; line-height:70px;">
                        No estás solo en este <br>
                        viaje del aprendizaje!
                    </h1>
                    <p style="font-size:18px; padding-top:30px; ">
                        Tenemos monitores capacitados 24/7 para lo que buscas, ellos no te dejarán 
                        <br>solo, te apoyarán en cualquier dudá.
                    </p>
                    <v-text-field label="Encuentra un monitor para cualquier temática" light
                        single-line solo prepend-inner-icon="search" 
                        style="width:430px; padding-top:20px;" >
                    </v-text-field>
                </div>
            </v-col>
        </v-row>
        <MenuToolbar/>
		<MenuResponsive/>
        <div style="padding-left:20%; padding-right:20%; padding-top:70px; padding-bottom:70px;" :class="$vuetify.theme.dark ? 'fondo_dark' : 'fondo_light'">
            <v-card>
                <v-card-title class="headline"><h1 style="font-size:30px">¿Cómo funciona nuestro Sistema de Acompañamiento?</h1></v-card-title>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Estar Activo</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2">Monitor de Inmediato</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 3" step="3">Programar Monitor</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>Primero debes ser estudiante activo en Lerny, con cursos habilitados, y una vez no entiendas algún tema de 
                                    nuestros cursos, puedes solicitar un monitor y resolver tus dudas al instante.
                                </p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 2"> Continuar</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>
                                    Para tus dudas y asesorías y monitorías al instante, habilitamos varios canales de comunicación.
                                    <br><br>
                                    <strong>Chat </strong>por medio de Ally: Escribes "Iniciar", y das click en <strong> ¡Asesoramiento Ya!</strong>, y un chat en vivo se te abrirá donde nuestros monitores
                                    estarán al pendiente de tus dudas, sólo debes especificar el curso, el tema y tu duda puntual.
                                    <br><br>
                                    <strong>Llamada</strong> por medio de Ally: Escribes "Iniciar" y das click en <strong>¡Te llamamos Ya!</strong>, y te llamaremos de inmediato, para encontrarte un
                                    monitor y poder resolver tus dudas.
                                    <br><br>
                                    <strong>Videollamada</strong> por medio de Ally: Escribes "Iniciar" y das click en <strong>¡Videollamada Ya!</strong>, y se te abrirá en tu mismo
                                    navegador web, una videoconferencia donde podremos resolver tus dudas en videoconferencia, sin instalar ningún software de video.
                                </p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 3">Continuar </v-btn>
                            <v-btn text @click="e1 = 1">Anterior</v-btn>
                        </v-stepper-content> 
                        <v-stepper-content step="3">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p> 
                                    Si deseas programar una monitoría, en el apartado de monitorías puedes especificarnos la fecha y hora de tu monitoría
                                    <br><br>
                                    <strong>Página Monitoría: </strong><router-link to='/monitorias'> https://lerny.co/#/monitorias </router-link>
                                    <br><br>
                                    Una vez programada, en tu apartado de calendario
                                    <br><br>
                                    <strong>Página Calendario: </strong> <router-link to='/calendario'>https://lerny.co/#/calendario</router-link>
                                    <br><br>
                                    Saldrá un código ID y contraseña para que cuando sea la hora del asesoramiento, ingreses esos datos en nuestro apartado de reuniones
                                    <br><br>
                                    <strong>Página de Reuniones: </strong> <router-link to='/videollamada'>https://lerny.co/#/videollamada</router-link>
                                    <br><br>
                                    Un monitor de Lerny te estará esperando a la hora acordada.
                                </p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 1">Gracias</v-btn>
                            <v-btn text @click="e1 = 2">Anterior</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                    </v-stepper>
            </v-card>
        </div>
    </v-app>
</template>

<script>
    import MenuToolbar from './parts/MenuToolbar';
	import MenuResponsive from './parts/MenuResponsive';
    import firebase from 'firebase';

    export default {
        name: 'PromoAcompanamiento',
        components: {
            MenuToolbar,
		    MenuResponsive,
        },
        data: () => ({
            e1: 1,
            valid: false,
            date: new Date().toISOString().substr(0, 10),
            tematica: '',
            modal: false,
            time: null,
            modal2: false,
            tematicaRules: [
                v => !!v || 'La temática es obligatoria',
            ],
            fechaRules: [
                v => !!v || 'La hora es obligatoria',
            ],
            horaRules: [
                v => !!v || 'La fecha es obligatoria',
            ],
        }),
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en las Monitorías!';
			this.$store.state.ayuda.descripcion = '¡Genial '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de las Monitorías aquí encontrarás monitores al instante, pregunta por tu temática o programa tu monitora para después, Cada vez que no entiendas un tema de alguna de nuestras clases, no dudes en buscar aquí';
        },
        methods: {
            submit(){
                if (this.$refs.form.validate()){
                    this.$store.state.programarMonitoria(this.tematica, this.date, this.time);
                    this.$refs.form.reset();
                }
            }
        },
    };
</script>

<style scoped>
    .contenedor_monitorias_light{
        margin-top:0px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 80px;
        padding-right: 0px;
        font-family: Maven Pro;
        background-color: #ffffff;
		font-style: normal;
    }
    .contenedor_monitorias_dark{
        margin-top:0px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 80px;
        padding-right: 0px;
        font-family: Maven Pro;
        background-color: #001844;
		font-style: normal;
    }
    .monitoriasbg_dark{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        background-color: #001844;
        background-image: url('../assets/fondos/monitoriasbgLight.png');
        background-size: 100% auto;
    }
    .monitoriasbg_light{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        background-color: #001844;
        background-image: url('../assets/fondos/monitoriasbgDark.png');
        background-size: 100% auto;
    }
    .form_panel{
        width: 350px;
        background: #102855a8;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
    }
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
</style>