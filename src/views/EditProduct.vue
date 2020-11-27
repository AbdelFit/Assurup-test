<template>
	<div>
		<form @submit.prevent="saveProduct()">
			<div class="form-group">
				<label for="name">Name</label>
				<input v-model="product.name" type="text" class="form-control" id="name" placeholder="Entrez un nom" required>
			</div>
			<div class="form-group">
				<label for="description">Description</label>
				<textarea v-model="product.description" class="form-control" id="description" rows="3" required></textarea>
			</div>
			<button type="submit" class="btn btn-success">Enregistrer</button>
		</form>
	</div>
</template>

<script>
	/* eslint-disable */

	import { mapGetters } from 'vuex';

    export default {
        name: 'edit-app',

        data() {
            return {
                product: {
					name: null,
					description: null
				}
            };
		},

        computed: {
            ...mapGetters({
                products: 'products/get',
            })
        },

        watch: {
			products: {
				immediate: true,
				handler(value) {
					if(value.length > 0) {
						this.getProduct();
					}
				}
			}
		},

        methods: {
            getProduct() {
                this.product = this.products.find(product => product.id === +this.$route.params.id);
			},

			saveProduct() {
				if(!this.product.name || !this.product.description)
					return;

				this.products.splice(this.products.indexOf(this.product), 1, this.product);

				this.$store
					.dispatch('products/setValue', {list : this.products})
					.then(() => {
						this.$router.push('/products');
					});
			}
        }
	}
</script>