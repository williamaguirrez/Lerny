<template>
    <v-app id="inspire">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_calendario_dark' : 'contenedor_calendario_light'">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <div :class="$vuetify.theme.dark ? 'fondito_dark' : 'fondito_light'">
                <v-row>
                    <v-col cols="12" sm="8" style="padding-right:20px;" class="monitoriasbg">
                        <h1 style="font-size:40px;" class="titulo2--text">
                            Tus monitorías Programadas
                        </h1>
                        <div class="panel_monitoria">
                            <v-row>
                                <v-col cols="12" sm="8" style="padding-right:0px;" class="monitoriasbg">
                                    <v-simple-table fixed-header height="400px" dark :class="$vuetify.theme.dark ? 'dark' : 'light'">
                                        <template v-slot:default>
                                            <thead>
                                            <tr>
                                                <th class="text-left">Fecha</th>
                                                <th class="text-left">Hora</th>
                                                <th class="text-left">Monitor</th>
                                                <th class="text-left">Temática</th>
                                                <th class="text-left">Estado</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="item in monitorias" :key="item.hora">
                                                <td>{{ item.fecha }}</td>
                                                <td>{{ item.hora }}</td>
                                                <td>{{ item.monitor }}</td>
                                                <td>{{ item.tematica }}</td>
                                                <td>{{ item.estado }}</td>
                                            </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-col>
                                <v-col cols="12" sm="4" style="padding-right:0px; padding-left:5px" class="monitoriasbg">
                                    <v-date-picker :color="$vuetify.theme.dark ? '#102855a8' : 'rgba(36, 3, 106, 0.801)'"
                                        v-model="date2"
                                        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                        :events="functionEvents">
                                    </v-date-picker>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4" style="padding-right:0px" class="monitoriasbg">
                        <center>
                            <v-img max-width="150" height="134" src="@/assets/ally.png"></v-img>
                        </center>
                        <div :class="$vuetify.theme.dark ? 'form_panel_dark' : 'form_panel_light'">
                            <center>
                                <h3 style="padding-top:20px; padding-bottom:20px; line-height:25px; color:white">Programa una monitoría en cualquier momento.</h3>
                            </center>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <!-- Input Temática ------------------------------------------------------ -->
                                 <v-text-field style="margin-bottom:-7px;" background-color="#9369E3" :rules="tematicaRules"
                                    required solo outlined label="Temática" dark v-model="tematica" counter="80"
                                    prepend-inner-icon="school">
                                </v-text-field>
                                <v-row>
                                    <v-col cols="12" sm="6" style="padding-bottom:0px; padding-top:0px;">
                                        <v-dialog ref="dialog1" v-model="modal" :return-value.sync="date" persistent width="290px">
                                            <template v-slot:activator="{ on }">
                                                <!-- Input de la fecha --------------------------------- -->
                                                <v-text-field v-model="date" label="Fecha de llamada" 
                                                    prepend-icon="event" readonly v-on="on" dark :rules="fechaRules"
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
                                                <!-- Input de la hora ----------------------------------- -->
                                                <v-text-field v-model="time" label="Hora" dark :rules="horaRules"
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
                                    <v-btn style="margin-bottom:10px;" :disabled="!valid" @click.prevent="submit"
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
    import firebase from 'firebase';

    export default {
        name: 'Calendario',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en el Calendario!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de las Videollamadas individuales con nuestros y tus amigos, aquí podrás ...';
            firebase.database().ref('/monitorias/' + this.$store.state.usuario.uid).on('value', data => {
                if( data.val() != null){
                    this.cargarMonitorias( data.val() );
                }else{
                    this.monitorias = [];
                }
            })
        },
        data: () => ({
            valid: false,
            date: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
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
            monitorias: [
                {
                    idMonitoria: '',
                    fecha: '14/02/2020',
                    hora: '13:50',
                    monitor: 'William Aguirre',
                    tematica: 'Design Thinking',
                    estado: 'Confirmada',
                },
                {   
                    idMonitoria: '',
                    fecha: '14/02/2020',
                    hora: '16:50',
                    monitor: 'William Aguirre',
                    tematica: 'Design Thinking',
                    estado: 'Confirmada',
                },
            ],
        }),
        methods: {
            functionEvents (date) {
                const [,, day] = date.split('-')
                if ([12, 17, 28].includes(parseInt(day, 10))) return true
                if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
                return false
            },
            submit(){
                if (this.$refs.form.validate()){
                    this.$store.state.programarMonitoria(this.tematica, this.date, this.time);
                    this.$refs.form.reset();
                }
            },
            cargarMonitorias( monitorias ){
                this.monitorias = [];
                for (let key1 in monitorias){
                    this.monitorias.push({
                        idMonitoria: monitorias[key1].key,
                        fecha: monitorias[key1].fecha,
                        hora: monitorias[key1].hora,
                        monitor: monitorias[key1].monitor,
                        tematica: monitorias[key1].tematica,
                        estado: monitorias[key1].estado,
                    })
                }
            }
        },
    };
</script>

<style scoped>
    .contenedor_calendario_dark{
        padding-top: 65px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .contenedor_calendario_light{
        padding-top: 65px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #FFFFFF;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .fondito_dark{
        width: 100%;
        height: 520px;
        padding-top:20px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #102855a2;
    }
    .fondito_light{
        width: 100%;
        height: 520px;
        padding-top:20px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgba(148, 105, 227, 0.411);
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
    .form_panel_light{
        width: 350px;
        background: rgba(36, 3, 106, 0.801);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
    }
    .panel_monitoria{
        width: 100%;
        height: 400px;
        padding-top: 20x;
        padding-right: 30px;
        padding-left: 0px;
        padding-bottom: 30px;
    }
    .v-data-table.dark {
        background-color: #102855a8;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .v-data-table.light{
        background-color: rgba(36, 3, 106, 0.801);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
</style>