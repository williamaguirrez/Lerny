<template>
    <v-app id="inspire">
        <v-row class="contenedor_ranking">
            <MenuSuperior/>
            <MenuIzquierdo/>
            <div id="tematicas" :class="$vuetify.theme.dark ? 'contenedor_cursos_dark' : 'contenedor_cursos_light'">
                <v-row>
                    <v-col cols="12" sm="11">
                        <h2 class="t_descubre titulo--text" style="line-height: 40px;">Los cursos nuevos del mes</h2>
                    </v-col>
                </v-row>
                <div class="wbody">
                    <section class="card">
                            <template v-for="(item, i) in tematicasParaTi">
                            <div :key="i" class="card--content">
                                <v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
                                    <v-card :elevation="hover ? 12 : 2" width="280px" :class="{ 'on-hover': hover }" color="botonRepro">
                                        <v-img :src="item.img" height="180px"  class="align-end titulo2--text"></v-img> 
                                        <v-card-text class="text--primary" style="margin-bottom:-15px;">
                                            <p style="font-size:medium; font-weight: 500; margin-bottom:0px;" class="t_general white--text text-center">{{ item.titulo }}</p>
                                            <v-row style="margin-bottom:-10px;">
                                                <v-col cols="12" sm="6">
                                                    <p style="font-size:medium; margin-bottom:0px;" class="t_general text-center white--text">
                                                        <v-icon size="20px" color="white">shopping_cart</v-icon> ${{ item.precio }}
                                                    </p>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <p style="font-size:medium; margin-bottom:0px;" class="t_general text-center white--text">
                                                        <v-icon size="20px" color="white">favorite</v-icon> {{ item.likes }} likes
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn class="ma-2 mx-auto" rounded outlined color="white" style="padding-left:20px; padding-right:20px;" :to="item.url">Comenzar</v-btn>
                                        </v-card-actions>     
                                    </v-card>
                                </v-hover>
                            </div>
                        </template>	
                    </section>
                </div>
                <v-row>
                    <v-col cols="12" sm="11">
                        <h2 class="t_descubre titulo--text" style="line-height: 40px;">Muy pronto nuevos cursos</h2>
                    </v-col>
                </v-row>
                <v-container class="pa-4 text-center">
                    <v-row class="fill-height" align="center" justify="center">
                        <template v-for="(item, i) in tematicasParaTi2">
                            <v-col :key="i" cols="12" md="3">
                                <v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
                                    <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" >
                                        <v-img :src="item.img" height="180px" class="align-end"></v-img> 
                                        <v-card-text class="text--primary" style="margin-bottom:-15px;">
                                            <p style="font-size:medium; font-weight: 500; margin-bottom:0px;" class="t_general text-center">{{ item.titulo }}</p>
                                            <v-row style="margin-bottom:-10px;">
                                                <v-col cols="12" sm="6">
                                                    <p  style="font-size:medium; margin-bottom:0px;" class="t_general text-center">
                                                        <v-icon size="20px">shopping_cart</v-icon> ${{ item.precio }}
                                                    </p>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <p  style="font-size:medium; margin-bottom:0px;" class="t_general text-center">
                                                        <v-icon size="20px">favorite</v-icon> {{ item.likes }} likes
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn class="ma-2 mx-auto" rounded outlined color="indigo" style="padding-left:20px; padding-right:20px;">Comenzar</v-btn>
                                        </v-card-actions>     
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>	
                    </v-row>					
                </v-container> 
               
            </div> 
        </v-row>
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    import firebase from 'firebase';

    export default {
        name: 'Cursos',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        created() {
            this.$store.state.ayuda.titulo = '¡Ayuda en el Inicio de Lerny!';
			this.$store.state.ayuda.descripcion = '¡Ok '+ this.$store.state.usuario.nombre + '! Te encuentras en la Sección de las Videollamadas individuales con nuestros y tus amigos, aquí podrás ...';
            firebase.database().ref('/cursos').on('value', data =>{
                if(data.val() != null){
                    this.cargarCursosTematica(data.val());
                }
            })
        },
        data: () => ({
            tematicasParaTi2: [{
                    titulo: 'Curso Agroindustrial',
                    img: 'https://images.unsplash.com/photo-1500762736728-b34f37b78c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
                    precio: '40.000',
                    likes: '750',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Curso de Ecología',
                    img: 'https://images.unsplash.com/photo-1543513853-037fe2a72fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    precio: '40.000',
                    likes: '12',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Transformación Agropecuaria',
                    img: 'https://images.unsplash.com/photo-1511194872177-813cf1cd32bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    precio: '40.000',
                    likes: '411',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Diseño Publicitario',
                    img: 'https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
                    precio: '40.000',
                    likes: '324',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Fotografía Publicitaria',
                    img: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    precio: '40.000',
                    likes: '94',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Manejo de Redes Sociales',
                    img: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80',
                    precio: '40.000',
                    likes: '23',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Curso de Adobe Premiere Pro',
                    img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=862&q=80',
                    precio: '40.000',
                    likes: '234',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Introducción a Desarrollo de Videojuegos',
                    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    precio: '40.000',
                    likes: '234',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Curso de Finanzas Personales',
                    img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                    precio: '40.000',
                    likes: '656',
                    url: '/curso/0001/01/01'
                },
                {
                    titulo: 'Curso de Sonido Profesional',
                    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    precio: '40.000',
                    likes: '555',
                    url: '/curso/0001/01/01'
                },                
            ],
            tematicasParaTi: [{
                    titulo: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://i2.wp.com/debtwisedentist.com/wp-content/uploads/2018/04/cytonn-photography-604681-unsplash-e1524114404983.jpg?resize=800%2C445',
                    precio: '40.000',
                    likes: '555',
                    url: '/curso/0001/01/01'
                },
            ],
        }),
        methods: {
            cargarCursosTematica(cursos){
                this.tematicasParaTi = [];
                this.codsCursos = [];
                for (let key in cursos){
                    this.cargarDatosCursos(key);
                }
            },
            cargarDatosCursos(curso){
                firebase.database().ref('/cursos/'+ curso + '/01/' + '/01').on('value', data =>{
                    if( data.val() != null){
                        this.tematicasParaTi.push({
                            titulo: data.val().nomCurso,
                            img: data.val().imagen,
                            precio: data.val().precio,
                            likes: data.val().likes,
                            url: data.val().url,
                        })
                    }
                })
            },
        },
    };
</script>

<style scoped>
    .contenedor_cursos_dark{
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

    .contenedor_cursos_light{
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
    
    .wbody {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        display: flex;
        min-width: 100%;
        min-height: 200px;
        overflow-x: auto; 
    }

    .card::-webkit-scrollbar {
        display: none;
    }

    .card--content {
        min-width: 280px;
        margin: 12px;
    }

    .v-card:not(.on-hover) {
	    opacity: 0.6;
	}
</style>