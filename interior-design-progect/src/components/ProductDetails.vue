<template>
    <div>
        <h3>{{ product.name }}</h3>
        <h4>{{ formattedPrice }}</h4>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
        
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {name: 'Product', price: 100, available: false}
        };
    },

    methods: {
        
    },
    computed: {
        formattedPrice(){
            return this.product.price + '$'
        }
    }
};
</script>
