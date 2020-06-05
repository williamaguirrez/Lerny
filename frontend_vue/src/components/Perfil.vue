<template>
    <v-app id="inspire">
        <v-row :class="$vuetify.theme.dark ? 'contenedor_perfil_dark' : 'contenedor_perfil_ligth'">
            <MenuIzquierdo/>
            <MenuSuperior/>
            <v-col cols="12" sm="4">
               <v-row :class="$vuetify.theme.dark ? 'transparente_tarjeta_dark' : 'transparente_tarjeta_ligth'">
                   <v-col cols="12" sm="4">
                       <center>
                        <v-avatar dark icon size="100">
                            <img :src="$store.state.usuario.foto">
                        </v-avatar>
                       </center>
                   </v-col>
                   <!-- Información del Perfil ------------------------------------------------------------------------ -->
                   <v-col cols="12" sm="8" style="padding-left:0px" class="hidden-sm-and-down titulo2--text">
                       <h2>Perfil</h2>
                       <h3 style="font-size:23px; line-height:25px;">{{ $store.state.usuario.nombre }}</h3>
                       <p><b class="rol--text">{{ datosUsuario.oficio }}</b><br>
                       {{ datosUsuario.vistas }} Vistas al Perfil</p>
                   </v-col>
                   <v-col cols="12" sm="8" style="padding-left:0px" class="hidden-md-and-up titulo2--text">
                       <center>
                       <h2>Perfil</h2>
                       <h3 style="font-size:23px; line-height:25px;">{{ $store.state.usuario.nombre }}</h3>
                       <p><b style="color:#BB86FC;">{{ datosUsuario.oficio }}</b><br>
                       {{ datosUsuario.vistas }} Vistas al Perfil</p>
                       </center>
                   </v-col>
                   <!-- Descripcion ---------------------------------------------------------------------------------- -->
                   <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="width:100%; height:170px; margin:10px; padding:15px;">
                       <p style="color:#BB86FC; font-weight:500; margin-bottom:5px;" >Descripción</p>
                       <p style="color:#FFFFFF;">{{ datosUsuario.descripcion }}</p>
                   </div>
                   <!-- Mis habilidades ------------------------------------------------------------------------------ -->
                   <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="width:100%; height:170px; margin:10px; padding:15px;">
                       <p style="color:#BB86FC; font-weight:500; margin-bottom:5px;" >Mis habilidades</p>
                       <p style="color:#FFFFFF;">{{ datosUsuario.habilidades }}</p>
                   </div>
               </v-row>
            </v-col>
            <v-col cols="12" sm="8">
                <v-row :class="$vuetify.theme.dark ? 'transparente_tarjeta_dark' : 'transparente_tarjeta_ligth'">
                    <v-col cols="12" sm="8">
                        <v-row>
                            <!-- Saldo -------------------------------------------------------------------------------- -->
                            <v-col cols="12" sm="5" style="padding:5px;">
                                <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:63px; padding:5px; margin-bottom:10px;">
                                    <div style="font-size:medium; margin-bottom:0px; ">
                                        <v-row>
                                            <v-col cols="12" sm="4" style="padding-top:0px">
                                                <v-icon size="50px" color="#8D50F1">monetization_on</v-icon> 
                                            </v-col>
                                            <v-col cols="12" sm="8" style="padding-top:0px">
                                                <p style="line-height:25px; color:white">Saldo<br>
                                                    <b style="font-weight:200; font-size:25px; color:white">+${{ datosUsuario.saldo }}</b>    
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                                <!-- Quiero ser Apadrinado -->
                                <router-link to="/promowallet">
                                    <div v-ripple :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:63px; padding:5px; background-color:#8D50F1">
                                        <div style="font-size:medium; margin-bottom:0px; ">
                                            <v-row>
                                                <v-col cols="12" sm="9" style="padding-top:0px">
                                                    <center><p style="line-height:23px; font-size:23px; color:white;">Quiero ser apadrinado</p></center>
                                                </v-col>
                                                <v-col cols="12" sm="3" style="padding:0px; margin-left:-15px;">
                                                    <v-icon size="50px" color="#23036A">star</v-icon> 
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </div>
                                </router-link>
                                
                            </v-col>
                            <!-- Rango y Puntaje ------------------------------------------------------------------------ -->
                            <v-col cols="12" sm="7" style="height:150px; padding:5px;">
                                <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:100%; padding:5px;">
                                    <v-row>
                                        <v-col cols="12" sm="7">
                                            <h1 class="text-right white--text" style="margin-bottom:0px; font-size:25px;">
                                                {{ datosUsuario.rango }}
                                            </h1>
                                            <p class="text-right white--text" style="font-size:medium; margin-top:-5px; font-size:25px;">
                                                +{{ datosUsuario.puntos }} pt 
                                            </p>
                                        </v-col>
                                        <v-col cols="12" sm="5">
                                            <v-avatar dark icon size="90">
                                                <img src="@/assets/medalla.png">
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <!-- Progreso en sus habilidades -------------------------------------------------------------- -->
                            <v-col cols="12" sm="6">
                                <!-- Si es vacio Muestra letrero -->
                                <div v-if="habilidaesProg.length == 0" :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:150px; padding:10px; margin-bottom:10px;">
                                    <h1 class="text-center white--text" style="font-size:20px">
                                        No tienes progresos<br><br>
                                        Te invitamos a aprender con Lerny.
                                    </h1>
                                </div>
                                <!-- Si hay contenido recorra el arreglo -->
                                <div v-for="(item, i) in habilidaesProg" :key="i">
                                    <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:100px; padding:10px; margin-bottom:10px;">
                                        <v-row>
                                            <v-col cols="12" sm="5" style="padding-top:0px;">
                                                <v-progress-circular style="font-size:23px;" :rotate="90" :size="80" :width="8" :value="item.porcentaje" color="#8D50F1">
                                                    <b style="color:white;">{{ item.porcentaje }}%</b>
                                                </v-progress-circular>
                                            </v-col>
                                            <v-col cols="12" sm="7">
                                                <p>{{ item.nombre }}</p>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                            <!-- Habilidades Adquiridas ----------------------------------------------------------------- -->
                            <v-col cols="12" sm="6">
                                <div :class="$vuetify.theme.dark ? 'tarjetas_dark' : 'tarjetas_ligth'" style="height:330px; padding:10px;">
                                    <p style="color:#BB86FC; margin-bottom:5px;" class="text-center">Habilidades adquiridas</p>
                                    <v-row style="padding-left:10%; padding-right:10%">
                                        <!-- Si es vacio muestra el letrero -->
                                        <div v-if="habilidadesAdq.length == 0">
                                            <h1 class="text-center white--text" style="font-size:20px">
                                                <br><br>Aquí podrás visualizar las medallas de los cursos completados al 100%
                                            </h1>
                                        </div>
                                        <!-- Si hay contenido recorre el arreglo -->
                                        <div v-for="(item, i) in habilidadesAdq" :key="i">
                                            <v-col cols="12" sm="4">
                                                <center>
                                                    <router-link :to="item.url">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-avatar dark icon size="50">
                                                                    <img v-on="on" src="@/assets/medalla.png">
                                                                </v-avatar>
                                                            </template>
                                                            <span>{{ item.nombre }}</span>
                                                        </v-tooltip>
                                                    </router-link>
                                                </center>
                                            </v-col>
                                        </div>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <!-- Padrinos --------------------------------------------------------------------------------------- -->
                    <v-col cols="12" sm="4">
                        <v-btn block color="#8D50F1" dark style="padding-top:10px; padding-bottom:10px; padding-left:10px; padding-right:20px;">
                            <v-icon left>star</v-icon> Ranking
                        </v-btn>
                        <!-- Si no hay padrinos en el arreglo muestra el letrero -->
                        <div v-if="padrinos.length == 0" style="background-color:white; height:230px; margin:10px; padding:20px;">
                            <h1 class="text-center" style="font-size:20px; color:black;">
                                Aún no tienes Padrinos<br>
                                Sigue adquiriendo conocimiento para que tengas más oportunidades
                            </h1>
                        </div>
                        <!-- Recorre el arreglo si hay padrinos que te donaron -->
                        <div v-for="(item, i) in padrinos" :key="i">
                            <div style="background-color:white; height:200px; margin:10px; padding:20px;">
                                    <h1 style="font-size:23px; color:#23036A">{{ item.padrino }}</h1>
                                    <p style="margin-bottom:0px;">
                                    <b style="color:black;">{{ item.nombre }}</b> <b style="font-size:12px; color:#99879D; font-weight:normal;">{{ item.fecha }}</b><br>
                                    <b style="color:#99879D; font-size:12px; font-weight:normal;">{{ item.mensaje }}</b> <br>
                                    <b style="color:#23036A; font-size:12px;">Donación: ${{ item.valorDonacion }}</b><br>
                                    <b style="font-size:12px; font-weight:300; color:black">Evaluación</b>
                                </p>
                                <v-rating color="#9378FF" background-color="#9378FF" dense half-increments hover v-model="item.evaluacion">
                                </v-rating>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    import firebase from 'firebase';
    export default {
        name: 'Perfil',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en tu Perfil!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de las Videollamadas individuales con nuestros y tus amigos, aquí podrás ...';
            firebase.database().ref('/perfiles/' + this.$store.state.usuario.uid).on('value', data =>{
                if(data.val() != null){
                    this.datosUsuario.oficio = data.val().rol;
                    this.datosUsuario.descripcion = data.val().descripcion;
                    this.datosUsuario.habilidades = data.val().habilidades;
                    this.datosUsuario.vistas = data.val().vistas;
                    this.datosUsuario.puntos = data.val().puntos;
                    this.datosUsuario.saldo = data.val().saldo;
                    this.datosUsuario.rango = data.val().rango;
                    this.datosUsuario.imgRango = data.val().imgRango;
                }
            })
            firebase.database().ref('/perfiles/'+ this.$store.state.usuario.uid + '/padrinos').on('value', data =>{
                if(data.val() != null){
                    this.cargarPadrinos( data.val());
                }else{
                    this.padrinos = [];
                }
            })
            firebase.database().ref('/perfiles/'+ this.$store.state.usuario.uid + '/habilidadesAdquiridas').on('value', data =>{
                if(data.val() != null){
                    this.cargarHabilidades( data.val());
                }else{
                    this.habilidadesAdq = [];
                }
            })
            firebase.database().ref('/perfiles/'+ this.$store.state.usuario.uid + '/progresoHabilidades').on('value', data =>{
                if(data.val() != null){
                    this.cargarProgreso( data.val());
                }else{
                    this.habilidaesProg = [];
                }
            })
        },
        data: () => ({
            datosUsuario:{
                oficio: '',
                vistas: 0,
                descripcion: '',
                habilidades: '',
                saldo: 0,
                rango: '',
                puntos: 0,
                imgRango: '@/assets/medalla.png',
            },
            habilidadesAdq:[
                {
                    nombre: 'Habilidad 1',
                    url: '/',
                    imagen: '@/assets/medalla.png',
                },
            ],
            habilidaesProg:[
                {
                    nombre: 'Progreso Temática 1',
                    porcentaje: 50,
                },
            ],
            padrinos:[
                {
                    padrino: 'Padrino 1',
                    nombre: 'Colombina',
                    fecha: '04/10/2020',
                    mensaje: 'Gran Trabajo',
                    valorDonacion: '200.000',
                    evaluacion: 5,
                },
            ],
        }),
        methods: {
            cargarPadrinos(padrinos){
                this.padrinos = [];
                for (let key in padrinos){
                    this.padrinos.push({
                        padrino: padrinos[key].padrino,
                        nombre: padrinos[key].nombre,
                        fecha: padrinos[key].fecha,
                        mensaje: padrinos[key].mensaje,
                        valorDonacion: padrinos[key].valorDonacion,
                        evaluacion: padrinos[key].evaluacion,
                    })
                }
            },
            cargarHabilidades(habilidadesAdq){
                this.habilidadesAdq = [];
                for (let key in habilidadesAdq){
                    this.habilidadesAdq.push({
                        nombre: habilidadesAdq[key].nombre,
                        url: habilidadesAdq[key].url,
                        imagen: habilidadesAdq[key].imagen,
                    })
                }
            },
            cargarProgreso(habilidaesProg){
                this.habilidaesProg = [];
                for (let key in habilidaesProg){
                    this.habilidaesProg.push({
                        nombre: habilidaesProg[key].nombre,
                        porcentaje: habilidaesProg[key].porcentaje,
                    })
                }
            }
        },
    };
</script>

<style scoped>
    .contenedor_perfil_dark{
        padding-top: 70px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #001844;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .contenedor_perfil_ligth{
        padding-top: 70px;
        padding-bottom: 20px;
        padding-left: 80px;
        padding-right: 30px;
        font-family: Maven Pro;
		font-style: normal;
        background-color: #FFFFFF;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .tarjetas_dark{
        background: #001844;
        border-radius: 10px;
    }
    .tarjetas_ligth{
        background: rgba(36, 3, 106, 0.801);
        border-radius: 10px;
    }
    .transparente_tarjeta_dark{
        background-color:#10285592;
    }
    .transparente_tarjeta_ligth{
        background-color:rgba(36, 3, 106, 0.198);
    }
</style>