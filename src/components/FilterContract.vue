<template>
    <div class="d-flex justify-content-center" style="min-height: 50px">
        <span class="mr-5 mt-2">Vous pouvez ordonner le tableau en choisissant deux de ces paramètres :</span>
        <form class="mt-1" @submit.prevent="sortTab()">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="productId" id="productId" v-model="filters" value="productId">
                <label class="form-check-label" for="productId">ID Produit</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="date" id="date" v-model="filters" value="date">
                <label class="form-check-label" for="date">Date</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="status" id="status" v-model="filters" value="status">
                <label class="form-check-label" for="status">Statut</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="price" id="price" v-model="filters" value="price">
                <label class="form-check-label" for="price">Prix</label>
            </div>
            <div class="form-check form-check-inline">
                <button type="submit" class="btn btn-outline-secondary">Filtrer</button>
            </div>
        </form>
    </div>
</template>

<script>
	/* eslint-disable */

	export default {
		name: 'filter-contract',

		data() {
            return {
                filters: []
            }
		},
		
		methods: {
			sortTab() {
				this.$emit('applyFilter', this.filters);
			}
		}
	}
</script>