<template>
 
 <div class="container">
            <div class="row py-3">
                <div class="col-md-6">
                    <h2>產品列表</h2>
                    <table class="table table-hover mt-4">
                        <thead>
                            <tr>
                                <th width="150">產品名稱</th>
                                <th width="120">
                                    原價
                                </th>
                                <th width="120">
                                    售價
                                </th>
                                <th width="150">
                                    是否啟用
                                </th>
                                <th width="120">
                                    查看細節2
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.title">
                                <td width="150">{{product.title}}</td>
                                <td width="120">
                                    {{product.origin_price}}
                                </td>
                                <td width="120">
                                    {{product.price}}
                                </td>
                                <td width="150">
                                    <span class="text-success" v-if="product.is_enabled">啟用</span>
                                    <span v-else>未啟用</span>
                                </td>
                                <td width="120">
                                    <button type="button" class="btn btn-primary"
                                        v-on:click="tempProduct = product">查看細節</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>目前有 <span>{{products.length}}</span> 項產品</p>
                </div>
                <div class="col-md-6">
                    <h2>單一產品細節</h2>
                    <template v-if="tempProduct.title">
                        <div class="card mb-3">
                            <!-- :src -->
                            <img src="tempProduct.imageUrl" class="card-img-top primary-image" alt="主圖">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{tempProduct.title}}
                                    <span class="badge bg-primary ms-2">{{tempProduct.category}}</span>
                                </h5>
                                <p class="card-text">商品描述：{{tempProduct.description}}</p>
                                <p class="card-text">商品內容：{{tempProduct.content}}</p>
                                <div class="d-flex">
                                    <p class="card-text me-2">{{tempProduct.price}}</p>
                                    <p class="card-text text-secondary"><del>{{tempProduct.origin_price}}</del></p>
                                    元 / {{tempProduct.unit}}
                                </div>
                            </div>
                        </div>
                        <template v-if="tempProduct?.imagesUrl?.length">
                            <!-- <img :scr="" alt="" class="images m-2"> -->
                            <!-- <img v-for="imageUrl in tempProduct.imagesUrl" :src="imageUrl" alt="product image" class="images m-2"> -->
                        </template>
                    </template>
                    <p class="text-secondary" v-else>請選擇一個商品查看</p>
                </div>
            </div>
        </div>
</template>
<script>
const site = 'https://vue3-course-api.hexschool.io/v2/';
const path = 'so22'
const token = document.cookie.replace(/(?:(?:^|.*;\s*)so22Token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
axios.defaults.headers.common['Authorization'] = token;
export default {
    // props is unused, just made for class example
    props: {
        id: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    },
  data() {
        return {
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        checkLogin() {
            const url = `${site}api/user/check`;
            axios.post(url)
                .then(res => {
                    this.getProducts();
                })
                
                // .catch(error => {
                //     console.log(error)
                //     this.$router.push('/login')
                // })
        },

        getProducts() {
            const url = `${site}api/${path}/admin/products/all`;
            axios.get(url)
                .then(res => {
                    this.products = res.data.products
                });
        },
    },
    mounted() {
        console.log('hi', document.cookie)
        this.checkLogin();

    }
}
</script>
