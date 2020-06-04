<template>
    <v-app-bar id="menuu" :color="offsetTop ? isColor : 'transparent'" style="padding-left:5%; padding-right:5%;" flat app>
        <v-spacer></v-spacer>
        <b style="width:30px;"/>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-switch v-model="$vuetify.theme.dark" primary style="height: 23px" v-on="on"></v-switch>
                </template>
            <span>Modo Dark o Light</span>
        </v-tooltip>
        <b style="width:30px;"/>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon color="white" to="/proyectosociales" v-on="on">
                    <v-icon large>military_tech</v-icon>
                </v-btn>
            </template>
            <span>Proyectos Sociales</span>
        </v-tooltip>
        <b style="width:30px;"/>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon color="white" @click.stop="ayuda = true" v-on="on">
                    <v-icon large>help_outline</v-icon>
                </v-btn>
            </template>
            <span>Ayuda</span>
        </v-tooltip>
        <b style="width:30px;"/>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon color="white" to="/calendario" v-on="on">
                    <v-icon large>today</v-icon>
                </v-btn>
            </template>
            <span>Calendario</span>
        </v-tooltip>
        
        <b style="width:30px;"/>
        <v-badge :content="messages" :value="messages" color="blue" overlap>
            <v-icon large color="white">notifications</v-icon>
        </v-badge>
        <b style="width:30px;"/>
        <v-menu open-on-hover offset-y bottom left>
            <template v-slot:activator="{ on }">
                <v-avatar dark icon v-on="on">
                    <img :src="$store.state.usuario.foto">
                </v-avatar>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                   <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click.stop="inicializarDatos">
                    <v-list-item-icon>
                        <v-icon>settings</v-icon>
                    </v-list-item-icon>
                   <v-list-item-title>Configuración</v-list-item-title>
                </v-list-item>
                <v-list-item @click.prevent="cerrarSesion">
                    <v-list-item-icon>
                        <v-icon>power_settings_new</v-icon>
                    </v-list-item-icon>
                   <v-list-item-title>Cerrar Sesion</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        

        <!-- Modal de configuración ----------------------------------------------------------------------------- -->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Configurar Perfil de Usuario</span>
                </v-card-title>
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Nombre y Apellido" v-model="datosPerfil.nombre" disabled counter="40"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Correo Electrónico" v-model="datosPerfil.correo" disabled></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Roles" v-model="datosPerfil.rol" counter="25" hint="Ejemplo: diseñador web, desarrollador, etc." required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Teléfono" v-model="datosPerfil.telefono" counter="10" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Sitio Web" v-model="datosPerfil.sitioweb"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-menu v-model="cumpleanoBool" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="date" label="Cumpleaños" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-textarea auto-grow label="Descripción" v-model="datosPerfil.descripcion"  counter="130" rows="1"></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-textarea auto-grow label="Mis habilidades" v-model="datosPerfil.habilidades" counter="130" rows="1"></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="['Masculino', 'Femenino', 'Otro']" label="Genero" v-model="datosPerfil.genero"></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete  v-model="datosPerfil.niveleducativo"
                                :items="['Primaria', 'Secundaria', 'Técnico', 'Universidad', 'Maestría', 'Doctorado']" 
                                label="Nivel Educativo"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
                    <v-btn color="blue darken-1" text :disabled="!valid" @click.prevent="submit">Guardar</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>

        <!-- Modal de la Ayuda de cada pantalla ---------------------------------------------------------- -->
        <v-dialog v-model="ayuda" max-width="600">
            <v-card>
                <v-card-title class="headline">{{ $store.state.ayuda.titulo }}</v-card-title>
                <v-card-text>
                    {{ $store.state.ayuda.descripcion }}
                    <br>
                    <center>
                        <v-row class="align-center">
                            <v-col cols="12" sm="6">
                                <v-btn small color="primary" @click="monitor">Videollamar a un Tutor Ya</v-btn>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-btn small color="primary" @click="chatenvivo">Chatear con un Tutor Ya</v-btn>
                            </v-col>
                        </v-row>
                    </center>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="ayuda = false" >
                        ¡Muchas gracias!
                    </v-btn>
                </v-card-actions>
            </v-card>
      </v-dialog>

    </v-app-bar>
</template>

<script>
    import vuetify from '../../plugins/vuetify';
    import firebase from 'firebase';
    export default {
        name: 'MenuSuperior',
        data: () => ({
            ayuda: false,
            valid: false,
            dialog: false,
            cumpleanoBool: false,
            date: new Date().toISOString().substr(0, 10),
            user: null,
            messages: 3,
            show: false,
            offsetTop: 0,
            datosPerfil:{
                nombre: '',
                correo: '',
                rol: '',
                telefono: '',
                sitioweb: '',
                cumpleanos: '',
                descripcion: '',
                habilidades: '',
                genero: '',
                niveleducativo: '',
            },
            items: [
                {   title: 'Ver Perfil', 
                    icon: 'account_circle',
                    url: '/perfil'
                },
                {   title: 'Mi Suscripción', 
                    icon: 'loyalty',
                    url: '/mi-suscripcion'
                },
                /* {   title: 'Mis Compras',
                    icon: 'shopping_cart',
                    url: '/compras'
                }, 
                {   title: 'Mentores', 
                    icon: 'people_alt',
                    url: '/mentores'
                },*/
            ],
        }),
        mounted(){
            var that = this;
            window.addEventListener("scroll", function(){
                that.offsetTop = window.scrollY;
            });
        },
        computed:{
            isColor: function(){
                if (this.$vuetify.theme.dark){
                    return 'rgba(0, 12, 44, 0.911)';
                }else{
                    return 'rgba(36, 3, 106, 0.883)';
                }
            }
        },
        methods: {
            monitor(){
                this.$store.state.videollamada.idReu = '12345';
                this.$store.state.videollamada.contrasenaReu = '12345';
                this.ayuda = false;
                this.$router.push({ name: 'videollamada' });
            },
            chatenvivo(){
                window.open("https://tawk.to/chat/5ecea551c75cbf1769eff830/default", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=500,width=400,height=600");
                this.ayuda = false;
            },
            cerrarSesion(){
                firebase.auth().signOut().then( () =>{
                    this.$router.push({ name: 'inicio' })
                })
            },
            inicializarDatos(){
                this.datosPerfil.nombre = this.$store.state.usuario.nombre;
                this.datosPerfil.correo = this.$store.state.usuario.email;
                firebase.database().ref('/perfiles/'+ this.$store.state.usuario.uid ).once('value', data => {
                    if (data.val() != null){
                        this.datosPerfil.rol = data.val().rol;
                        this.datosPerfil.telefono = data.val().telefono;
                        this.datosPerfil.sitioweb = data.val().sitioweb;
                        this.datosPerfil.cumpleanos = data.val().cumpleanos;
                        this.datosPerfil.descripcion = data.val().descripcion;
                        this.datosPerfil.habilidades = data.val().habilidades;
                        this.datosPerfil.genero = data.val().genero;
                        this.datosPerfil.niveleducativo = data.val().niveleducativo;
                    }
                })
                this.dialog = true;
            },
            submit(){
                if(this.$refs.form.validate()){
                    this.$store.state.guardarPerfil(this.$store.state.usuario.uid, 
                    this.$store.state.usuario.nombre, this.datosPerfil.rol, 
                    this.datosPerfil.telefono, this.datosPerfil.sitioweb, this.datosPerfil.cumpleanos, 
                    this.datosPerfil.descripcion, this.datosPerfil.habilidades, 
                    this.datosPerfil.genero, this.datosPerfil.niveleducativo);
                    this.dialog = false;
                }
            },
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    this.user = user
                }else{
                    this.user = null
                }
            })
        },
    }
</script>