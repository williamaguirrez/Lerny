<template>
    <v-app-bar id="menuu" :color="offsetTop ? isColor : 'transparent'" style="padding-left:5%; padding-right:5%;" flat app>
        <v-switch class="hidden-md-and-up" v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <v-spacer></v-spacer>
        <v-switch class="hidden-sm-and-down" v-model="$vuetify.theme.dark" primary style="height: 23px"></v-switch>
        <b style="width:20px;"/>
        <v-btn class="hidden-sm-and-down white--text" text to='/'>Inicio</v-btn>
        <b style="width:10px;"/>
        <v-btn class="hidden-sm-and-down white--text" text to='/nosotros'>Nosotros</v-btn>
        <b style="width:10px;"/>
        <v-btn class="hidden-sm-and-down white--text" text to='/signup'>Regístrate</v-btn>
        <b style="width:10px;"/>
        <v-btn class="hidden-sm-and-down" style="padding-left:30px;padding-right:30px" rounded color="boton_menu" dark to='/login'>Ingresa</v-btn>
        <v-btn class="hidden-md-and-up" dark icon @click.stop="$store.state.drawer = !$store.state.drawer">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style scoped>
.a{
    color:rgba(0, 24, 88, 0.712);
}
</style>

<script>
    import vuetify from '../../plugins/vuetify';
    export default {
        name: 'MenuToolbar',
        data: () => ({
            offsetTop: 0,
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
                    return 'rgba(0, 0, 0, 0.747)';
                }else{
                    return 'rgba(0, 24, 88, 0.712)';
                }
            }
        }
    }
</script>