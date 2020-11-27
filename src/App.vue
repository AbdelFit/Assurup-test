<template>
    <div id="app">
        <header-app />

        <div class="container my-5">
            <router-view />
        </div>

        <footer-app />
    </div>
</template>

<script>
    import contracts from '@/assets/data/contracts.json';
    import products from '@/assets/data/products.json';

    import HeaderApp from '@/components/Header.vue';
    import FooterApp from '@/components/Footer.vue';

    export default {
        mounted() {
            this.$store.dispatch('contracts/setValue', { list: contracts });
            this.$store.dispatch('products/setValue', { list: products });
        },

        components: {
            HeaderApp,
            FooterApp
        }
    };
</script>
