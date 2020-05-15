<template>
	<v-app id="inspire">
		<form>
			<script type="application/javascript" src="https://s3-us-west-2.amazonaws.com/epayco/v1.0/checkoutEpayco.js" 
                class="epayco-button" 
                data-epayco-key="491d6a0b6e992cf924edd8d3d088aff1" 
                data-epayco-amount="50000" 
                data-epayco-name="Vestido Mujer Primavera" 
                data-epayco-description="Vestido Mujer Primavera" 
                data-epayco-currency="cop" 
                data-epayco-country="co" 
                data-epayco-test="true"
                data-epayco-response="https://ejemplo.com/respuesta.html" 
                data-epayco-confirmation="https://ejemplo.com/confirmacion" >
            </script>
		</form> 
	</v-app>
</template>

<script>
    export default {
        name: 'Reproductor',
        components: {
        },
    data: () => ({
        items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,      
        }),
    };
</script>


<style scoped>
    .backgroundCurso{
        background-color: #001844;
    }
    .v-dialog, .v-card, .v-list {background-color: white! important; }
</style>>