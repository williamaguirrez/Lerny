<template>
    <v-toolbar color="transparent" style="padding-left:5%; padding-right:5%;" flat>
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
        <v-btn class="hidden-sm-and-down" style="padding-left:30px;padding-right:30px" rounded color="primary" to='/login'>Ingresa</v-btn>
        <v-btn class="hidden-md-and-up" icon @click.stop="$store.state.drawer = !$store.state.drawer">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'MenuToolbar',
        data: () => ({
        }),
    }
</script>