<template>
	<v-app id="aaa">
        <MenuIzquierdo/>
        <MenuSuperior/>
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
        //
        }),
    };
</script>