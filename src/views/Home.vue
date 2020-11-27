<template>
    <div>
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Contrats</h1>
            <p class="lead font-weight-light font-italic">Listes de tous les contrats effectués.</p>
        </div>

        <FilterContract @applyFilter="sortTab"/>

        <table class="table mt-2">
            <thead>
                <tr>
                    <th scope="col">ID Produit</th>
                    <th scope="col">Nom Produit</th>
                    <th scope="col">Date</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Détails</th>
                </tr>
            </thead>

            <tbody>
                <ShowContract v-for="contract in contracts" :key="contract.id" :contract="contract"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    /* eslint-disable */

    import { mapGetters } from 'vuex';
    import ShowContract from '@/components/ShowContract';
    import FilterContract from '@/components/FilterContract';

    export default {
        name: 'home-app',

        components: {
            ShowContract,
            FilterContract
        },

        computed: {
            ...mapGetters({
                contracts: 'contracts/get'
            })
        },

        methods: {
            sortTab(filters) {
                if(filters.length === 0) {             // get default sort by id
                    this.contracts.sort((a,b) => {
                        return a["id"] - b["id"];
                    });
                } 
                else if(filters.length === 2) {        // sort by filters
                    const item1 = filters[0];
                    const item2 = filters[1];

                    this.contracts.sort((a,b) => {
                        return a[item1] - b[item1] || a[item2] - b[item2];
                    });
                }
            }
        }
    }
</script>