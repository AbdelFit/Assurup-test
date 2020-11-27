<template>
	<tr>
		<th scope="row">{{ contract.productId }}</th>
		<td>{{ getProductName() }}</td>
		<td>{{ contract.effectiveDate }}</td>
		<td>
			<button type="button" class="btn" style="width: 70%" :class="{'btn-success' : contract.status == 'PAID', 'btn-danger' : contract.status == 'WAITING'}" disabled>{{ contract.status == 'PAID' ? 'Payé' : 'En attente' }}</button>
		</td>
		<td>{{ contract.price | currency }} &euro;</td>
		<td>
			<router-link :to="`/contract/${contract.id}`" class="btn btn-outline-primary">Plus de détails</router-link>
		</td>
	</tr>
</template>

<script>
	/* eslint-disable */

    import { mapGetters } from 'vuex';

    export default {
		name: 'show-contract',
		
		props: {
			contract: {
				type: Object,
				required: true
			}
		},

        computed: {
            ...mapGetters({
                products: 'products/get'
            })
		},

        methods: {
            getProductName() {
                const product =  this.products.find(product => product.id === this.contract.productId);
                return product.name;
			}
        }
	}
</script>