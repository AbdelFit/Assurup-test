<template>
    <div>
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Contrat</h1>
            <p class="lead font-weight-light font-italic">Détails du contrat.</p>
        </div>

        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{{ contract.effectiveDate }}</h6>
                <hr>
                <p class="card-text">{{ description }}</p>
                <hr>
                <div class="d-flex justify-content-between">
                    <p class="card-link" :class="getStyle()">{{ contract.status == 'PAID' ? 'Payé' : 'En attente' }}</p>
                    <p class="card-link text-primary">{{ contract.price | currency }} &euro;</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */

    import { mapGetters } from 'vuex';

    export default {
        name: 'contract-app',

        data() {
            return {
                contract: {
                    id: null,
                    productId: null,
                    effectiveDate: null,
                    status: null,
                    price: null
                },
                description: null
            };
        },

        computed: {
            ...mapGetters({
                contracts: 'contracts/get',
                products: 'products/get'
            })
        },

        watch: {
            contracts: {
                immediate: true,
                handler(value) {
                    if (value.length > 0) {
                        this.getContarct();
                    }
                },
            },
            products: {
                immediate: true,
                handler(value) {
                    if (value.length > 0) {
                        this.getProductDescription();
                    }
                },
            },
        },

        methods: {
            getContarct() {
                this.contract = this.contracts.find(contract => contract.id === +this.$route.params.id);
            },

            getProductDescription() {
                const product =  this.products.find(product => product.id === this.contract.productId);
                this.description = product.description;
            },
            
            getStyle() {
                return this.contract.status === 'PAID' ? 'text-success' : 'text-danger';
			}
        }
    };
</script>
