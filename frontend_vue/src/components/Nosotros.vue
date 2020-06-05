<template>
	<v-app id="inspire" class="letra">
		<!-- Slider Revolution -->
		<script type="application/javascript" src="https://wtechnology.co/slider/assets/js/includes/jquery/jquery.js"></script>
		<script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.tools.min.js"></script>
		<script type="application/javascript" src="https://wtechnology.co/slider/revslider/public/assets/js/jquery.themepunch.revolution.min.js"></script>
		<script type="application/javascript" id="revslider_script" src="https://wtechnology.co/slider/assets/js/revslider.js"></script>
		<v-row :class="$vuetify.theme.dark ? 'fondo_dark' : 'fondo_light'">
			<MenuToolbar/>
			<MenuResponsive/>
		</v-row>
		<div class="revslider" data-alias="nosotroslerny"></div>
	</v-app>
</template>

<script>
	import MenuToolbar from './parts/MenuToolbar';
	import MenuResponsive from './parts/MenuResponsive';
    export default {
    name: 'Nosotros',
    components: {
		MenuToolbar,
		MenuResponsive,
    },
	data: () => ({
        //
        }),
    };
</script>

<style scoped>
	@import 'https://wtechnology.co/slider/revslider/public/assets/css/settings.css';

	.letra{
		font-family: Maven Pro;
        font-style: normal;
	}
	.fondo_dark{
        background-color: #001844;
		background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
    .fondo_light{
        background-color: #FFFFFF;
        background-image: url('../assets/fondoperfil1.png');
        background-size: 100% auto;
    }
</style>