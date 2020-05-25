<template>
    <v-app id="inspire">
        <v-row class="contenedor_monitorias">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <v-col cols="12" sm="4" style="padding-right:0px">
                <v-img max-width="170" height="154" src="@/assets/ally.png"></v-img>
                <div style="padding-left:10px; padding-right:30px; color:#23036A;">
                    <center>
                        <h1 style="font-size:40px; line-height:40px;">
                            Hola, ¿En qué <br>puedo ayudarte?
                        </h1>
                        <h1 style="font-size:18px; width:300px; padding-top:15px; padding-bottom:30px;">
                            Programa una monitoría en cualquier momento.
                        </h1>
                    </center>
                    <v-form ref="form" lazy-validation style="padding-left:30px; padding-right:30px">
                                <!-- Input Teléfono ------------------------------------------------------ -->
                                <v-text-field style="margin-bottom:-7px;" background-color="#9369E3"
                                    required solo outlined label="Teléfono" 
                                    prepend-inner-icon="phone">
                                </v-text-field>
                                 <v-text-field style="margin-bottom:-7px;" background-color="#9369E3"
                                    required solo outlined label="Temática" 
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
            <v-col cols="12" sm="8" style="padding-right:0px" class="monitoriasbg">
                hola2
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Monitorias',
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
    };
</script>

<style scoped>
    .contenedor_monitorias{
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 80px;
        padding-right: 0px;
        font-family: Maven Pro;
        background-color: #001844;
		font-style: normal;
    }
    .monitoriasbg{
        padding-top: 0px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
</style>