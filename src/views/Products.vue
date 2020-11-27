<template>
    <div>
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Produits</h1>
            <p class="lead font-weight-light font-italic">Liste de tous les produits.</p>
        </div>

        <table class="table mt-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Description</th>
                <th scope="col">Nombre de contract</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                <ShowProduct v-for="(product, index) in products" :key="product.id" :product="product" :pos="index + 1"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    /* eslint-disable */

    import { mapGetters } from 'vuex';
    import ShowProduct from '@/components/ShowProduct';

    export default {
        name: 'product-app',

        components: {
            ShowProduct
        },

        computed: {
            ...mapGetters({
                products: 'products/get'
            })
        }
    }
</script>