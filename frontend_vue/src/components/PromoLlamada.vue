<template>
    <v-app id="inspire" class="letra">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_llamada_dark' : 'contenedor_llamada_light'">
            <MenuToolbar/>
			<MenuResponsive/>
            <div style="width:100%; margin-left:50px;">
                <v-row>
                    <v-col cols="12" sm="2" style="padding-right:0px">
                        <v-img max-width="170" height="154" src="@/assets/ally.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="10" style="padding-left:0px" class="titulo2--text">
                        <h1 style="font-size:60px; width:900px; line-height:70px;" >
                            Sabemos que no siempre <br>cuentas con internet!!
                        </h1>
                        <h1 style="padding-top:20px; font-size:17px;">
                            Si tienes algun inconveniente con tu red Wifi, <br>
                            Programa tus clases y te llamaremos para que sigas <br>
                            recibiendo educación de forma no remota, o si deseas<br>
                            comunicate en cualquier momento.<br>
                        </h1>
                    </v-col>
                </v-row>
            </div>
            <div style="width:100%; margin-left:50px;">
                <v-row>
                    <v-col cols="12" sm="8" style="padding-right:0px; height:100%; margin-top:200px;">
                        <h1 style="font-size:33px; line-height:40px; color:white;">
                            Nuestra línea siempre <br>
                            estará disponible para ti <br>
                            01800245668 <br>
                        </h1>
                    </v-col>
                    <v-col cols="12" sm="4" style="padding-right:0px; margin-top:-100px;">
                        <div :class="$vuetify.theme.dark ? 'form_panel_dark' : 'form_panel_ligth'">
                            <center>
                                <h3 style="padding-top:20px; padding-bottom:20px; line-height:25px;" class="titulo2--text">Programa una llamada en cualquier momento.</h3>
                            </center>
                            <v-form ref="form" lazy-validation>
                                <!-- Input Teléfono ------------------------------------------------------ -->
                                <v-text-field style="margin-bottom:-7px;" background-color="#9369E3" 
                                    required solo outlined label="Teléfono" dark
                                    prepend-inner-icon="phone">
                                </v-text-field>
                                 <v-text-field style="margin-bottom:-7px;" background-color="#9369E3"
                                    required solo outlined label="Temática" dark
                                    prepend-inner-icon="school">
                                </v-text-field>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-dialog ref="dialog1" v-model="modal" :return-value.sync="date" persistent width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="date" label="Fecha de llamada"
                                                    prepend-icon="event" readonly v-on="on" 
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
                                                <v-text-field v-model="time" label="Hora"
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
                                <div style="padding-left:15%;padding-right:15%; margin-bottom:0px;">
                                    <v-btn style="margin-bottom:10px;" 
                                        rounded block color="#9369E3" 
                                        dark large>Programar
                                    </v-btn>
                                </div>
                            </v-form>
                        </div>
                    </v-col> 
                </v-row>
            </div>
        </v-row>
        <div style="padding-left:20%; padding-right:20%; padding-top:70px; padding-bottom:70px;" :class="$vuetify.theme.dark ? 'fondo_dark' : 'fondo_light'">
            <v-card>
                <v-card-title class="headline"><h1 style="font-size:30px">¿Cómo funciona la Educación sin Internet?</h1></v-card-title>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Estar Activo</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2">Llamada de Inmediato</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 3" step="3">Programar llamada</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>Primero debes ser estudiante activo en Lerny, con cursos habilitados. En ajustes de tu cuenta debes agregar tu número telefónico y 
                                Recuerda que no todos los contenidos sirven para recibirse por llamada, cierto contenido y material seleccionado.
                                </p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 2"> Continuar</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p>
                                    Cuando desees recibir la clase por llamada telefónica porque te quedaste sin internet de repente,  puedes marcar el número para Colombia 01800245668 y para el resto del
                                    resto del mundo el número +17603380022, si estás en Colombia tu llamada será gratuita.
                                    En la llamada te contestará Ally, nuestro asistente inteligente, ella te explicará todos los pasos a seguir.
                                </p>
                            </v-card>
                            <v-btn color="primary" @click="e1 = 3">Continuar </v-btn>
                            <v-btn text @click="e1 = 1">Anterior</v-btn>
                        </v-stepper-content> 
                        <v-stepper-content step="3">
                            <v-card class="mb-12" color="" style="padding:20px">
                                <p> 
                                    Si deseas puedes programar la llamada a una fecha y hora específica y Ally, nuestro asistente inteligente, te llamará automáticamente a la hora establecida
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
    export default {
        name: 'PromoLlamada',
        components: {
            MenuToolbar,
		    MenuResponsive,
        },
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            time: null,
            modal2: false,
            e1: 1,
        }),
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en las Llamadas Sin Internet!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de la llamada, aquí podrás programar una llamada en caso de que tu internet falle! Lerny tiene el compromiso de seguir enseñandote, y que el internet o el dispositivo sea un inconveniente';
        },
    };
</script>

<style scoped>
    .letra{
            font-family: Maven Pro;
            font-style: normal;
        }
    .contenedor_llamada_dark{
        padding-top: 60px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondos/fondoLlamada1.png');
        background-size: 100% auto;
    }
    .contenedor_llamada_light{
        padding-top: 60px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #FFFFFF;
        background-image: url('../assets/fondos/fondoLlamada2.png');
        background-size: 100% auto;
    }
    .form_panel_dark{
        width: 350px;
        background: #102855a8;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
    }
    .form_panel_ligth{
        width: 350px;
        background: rgba(148, 105, 227, 0.411);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
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