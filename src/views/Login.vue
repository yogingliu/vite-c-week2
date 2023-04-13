

<template>
   <div class="container">
            <div class="row justify-content-center">
                <h1 class="h3 mb-3 font-weight-normal">
                    請先登入
                </h1>
                <div class="col-8">
                    <form class="form-signin" @submit.prevent="login">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                                placeholder="name@example.com" required autofocus>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                                placeholder="Password" required>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button @click.prevent="login" class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                            登入
                        </button>
                    </form>
                </div>
            </div>
            <p class="mt-5 mb-3 text-muted">
                &copy; 2023~∞ - 六角學院
            </p>
        </div>
</template>
<script>
const url = 'https://vue3-course-api.hexschool.io/v2/';

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            const api = `${url}admin/signin`;
            axios.post(api, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    document.cookie = `so22Token=${token};expires=${new Date(expired)}; path=/`;
                    window.location = './products.html';
                })
        },
    },
}
</script>