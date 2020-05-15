<template>
	<v-app id="aaa">
        <MenuIzquierdo/>
        <MenuSuperior/>
	
<!-- Temáticas que tenemos para ti -------------------------------------------------------------------------- -->
    <div id="funcionalidadesHome" :class="$vuetify.theme.dark ? 'contenedor fondo_dark' : 'contenedor'">
			<v-row>
				<v-col cols="12" sm="11">
					<h2 class="t_descubre titulo--text">Temáticas que tenemos para ti...</h2>
				</v-col>
				<v-col cols="12" sm="1">
					<v-btn class="mx-2" fab color="boton_menu" dark style="float:right;">
						<v-icon dark>mdi-plus</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-container class="pa-4 text-center">
				<v-row class="fill-height" align="center" justify="center">
					<template v-for="(item, i) in items">
						<v-col :key="i" cols="12" md="3">
							<v-hover v-slot:default="{ hover }" style="margin-bottom:10px;">
								<v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" >
									<v-img :src="item.img" height="180px" class="align-end"></v-img> 
                                    <v-card-text class="text--primary" style="margin-bottom:-15px;">
                                        <p style="font-size:medium; font-weight: 500; margin-bottom:0px;" class="t_general text-center">{{ item.title }}</p>
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
    </v-app>
</template>

<script>
    import MenuSuperior from './parts/MenuSuperior';
    import MenuIzquierdo from './parts/MenuIzquierdo';
    export default {
        name: 'Clases',
        components: {
            MenuSuperior,
            MenuIzquierdo,
        },
        data: () => ({
            items: [{
                    title: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://i2.wp.com/debtwisedentist.com/wp-content/uploads/2018/04/cytonn-photography-604681-unsplash-e1524114404983.jpg?resize=800%2C445',
                    precio: '40.000',
                    likes: '555',
                },
                {
                    title: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'http://www.crossroadslearning.ca/uploads/3/0/9/2/30924385/mimi-thian-vdxmsix-n6m-unsplash.jpg',
                    precio: '50.000',
                    likes: '325',
                },
                {
                    title: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '60.000',
                    likes: '567',
                },
                {
                    title: 'Desarrollarás habilidades que te permiten realizar...',
                    img: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1610/wavebreakmediamicro161001061/63630505-portrait-of-happy-farmer-couple-holding-a-basket-of-vegetables-in-the-vineyard.jpg',
                    precio: '30.000',
                    likes: '235',
                },
            ],
            //
        }),
    };
</script>

<style scoped>
    .t_descubre{
		font-family: Maven Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 38px;
		line-height: 40px;
		letter-spacing: -0.5px;
		color: #102855;
	}
    .t_general{
		font-family: Maven Pro;
		font-style: normal;
		letter-spacing: -0.5px;
	}
</style>