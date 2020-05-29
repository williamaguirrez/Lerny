<template>
    <v-app id="inspire">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_llamada_dark' : 'contenedor_llamada_light'">
            <MenuIzquierdo/>
            <MenuSuperior/>
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
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Llamada',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            time: null,
            modal2: false,
        }),
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en las Llamadas Sin Internet!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de la llamada, aquí podrás programar una llamada en caso de que tu internet falle! Lerny tiene el compromiso de seguir enseñandote, y que el internet o el dispositivo sea un inconveniente';
        },
    };
</script>

<style scoped>
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
</style>