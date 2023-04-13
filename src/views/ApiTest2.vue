<template>
    <div>
        <div>
            <h3>create</h3>
            <input v-model="tempTitle" type="text">
            <button @click="createProduct">create</button>
        </div>
        <div style="display: flex; flex-wrap: wrap;">
            <div
                v-for="product in products"
                :key="`api-test2-product-${product.id}`"
                style="border: 1px solid #000; margin: 4px; padding: 8px;"
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
            products: [],
            tempTitle: ''
        }
    },
    methods: {
        async updateProduct() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            console.log({ response })
            const products = response.data
            this.products = products
        },
        async createProduct() {
            try {
                console.log('start')
                // await axios.post('https://api.escuelajs.co/api/v1/products/', {
                //     "title": this.tempTitle,
                //     "price": 10,
                //     "description": "A description",
                //     "categoryId": 1,
                //     "images": ["https://placeimg.com/640/480/any"]
                // })
                await axios({
                    method: 'post',
                    url: 'https://api.escuelajs.co/api/v1/products/',
                    data: {
                        "title": this.tempTitle,
                        "price": 10,
                        "description": "A description",
                        "categoryId": 1,
                        "images": ["https://placeimg.com/640/480/any"]
                    }
                })
                
                await this.updateProduct()
            }
            catch(error) {
                console.log('myerror', error)
            }
            console.log('finish')
            
        }
    },
    async mounted() {
        await this.updateProduct()
    }
}
</script>