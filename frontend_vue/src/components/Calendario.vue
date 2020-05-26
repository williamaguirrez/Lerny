<template>
    <v-app id="inspire">
        <v-row class="contenedor_calendario">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <div class="fondito">
                <v-row>
                    <v-col cols="12" sm="8" style="padding-right:20px;" class="monitoriasbg">
                        <h1 style="font-size:40px;">
                            Tus monitorías Programadas
                        </h1>
                        <div class="panel_monitoria">
                            <v-data-table
                                :headers="headers"
                                :items="desserts"
                                :items-per-page="5"
                                class="elevation-1">
                            </v-data-table>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4" style="padding-right:0px" class="monitoriasbg">
                        <center>
                            <v-img max-width="150" height="134" src="@/assets/ally.png"></v-img>
                        </center>
                        <div class="form_panel">
                            <center>
                                <h3 style="padding-top:20px; padding-bottom:20px; line-height:25px;">Programa una monitoría en cualquier momento.</h3>
                            </center>
                            <v-form ref="form" lazy-validation>
                                <!-- Input Teléfono ------------------------------------------------------ -->
                                 <v-text-field style="margin-bottom:-7px;" background-color="#9369E3"
                                    required solo outlined label="Temática" 
                                    prepend-inner-icon="school">
                                </v-text-field>
                                <v-row>
                                    <v-col cols="12" sm="6" style="padding-bottom:0px; padding-top:0px;">
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
                                    <v-col cols="12" sm="6" style="padding-bottom:0px; padding-top:0px;">
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
        name: 'Calendario',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            time: null,
            modal2: false,
            headers: [
                {
                    text: 'Fecha',
                    value: 'fecha',
                },
                { 
                    text: 'Monitor', 
                    value: 'monitor' 
                },
                { 
                    text: 'Temática', 
                    value: 'tematica' },
                { 
                    text: 'Estado',
                    value: 'estado' 
                },
            ],
            desserts: [
                {
                    fecha: '14/03/2020',
                    monitor: 'Carlos Alberto Arias',
                    tematica: 'Ciencias para la vida',
                    estado: 'Pendiente',
                },
                {
                    fecha: '14/03/2020',
                    monitor: 'Carlos Alberto Arias',
                    tematica: 'Ciencias para la vida',
                    estado: 'Pendiente',
                },
            ],
    
        }),
    };
</script>

<style scoped>
    .contenedor_calendario{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .fondito{
        width: 100%;
        height: 520px;
        padding-top:20px;
        padding-left: 60px;
        padding-right: 60px;
        background-color: #102855a2;
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
    .panel_monitoria{
        width: 100%;
        height: 400px;
        background: #ffffff2f;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
    }
</style>