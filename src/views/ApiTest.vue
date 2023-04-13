<template>
    <div>
        <div>
            <h3>create</h3>
            <input v-model="tempTitleCreated" type="text">
            <button @click="addProduct">create</button>
        </div>
        <div style="display: flex; width: 100vw; flex-wrap: wrap;">
            <div
                v-for="product in products"
                :key="`api-test-product-${product.id}`"
                style="padding: 8px; border: 1px solid #000; margin: 8px;"
            >  
                {{ product.title }}
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tempTitleCreated: '',
            products: []
        }
    },
    methods: {
        async fetchProducts() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            console.log({ response }) 
            const products = response.data
            return products
        },
        async updatePageData() {
            try {
                const products = await this.fetchProducts()
                this.products = products
            }
            catch(error) {
                console.log(error)
            }
        },
        async addProduct() {
            try {
                await axios({
                    method: 'post',
                    url: 'https://api.escuelajs.co/api/v1/products/',
                    data: {
                        title: this.tempTitleCreated,
                        price: 10,
                        description: "A description",
                        categoryId: 1,
                        images: ["https://placeimg.com/640/480/any"]

                    }
                });
                await this.updatePageData()
            }
            catch(error) {
                console.log(error)
            }
            
        }
    },
    async mounted() {
        await this.updatePageData()
    }
}
</script>