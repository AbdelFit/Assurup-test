<template>
	<tr>
		<th scope="row">{{ pos }}</th>
		<td width="180">{{ product.name }}</td>
		<td>{{ product.description }}</td>
		<td class="text-center" width="180">{{ getContractNumber() }}</td>
		<td>
			<router-link :to="`/product/${product.id}`" class="btn btn-outline-primary">Modifier</router-link>
		</td>
	</tr>
</template>

<script>
	/* eslint-disable */

    import { mapGetters } from 'vuex';

    export default {
		name: 'show-product',
		
		props: {
			product: {
				type: Object,
				required: true
			},
			pos: {
				type: Number,
				required: true
			}
		},

        computed: {
            ...mapGetters({
                contracts: 'contracts/get'
            })
		},
		
		watch: {
            contracts: {
                immediate: true,
                handler(value) {
                    if (value.length > 0) {
                    	this.getContractNumber();
                    }
                },
            },
        },

        methods: {
            getContractNumber() {
                return this.contracts.filter(contract => contract.productId === this.product.id).length;
			}
        }
	}
</script>