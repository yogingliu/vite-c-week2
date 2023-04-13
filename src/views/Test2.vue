<template>
    <div class="heard">
            <div class="logo-box">
                <a href=""> <img src="./pic/美燕食堂.png" alt=""> </a>
            </div>
            <div>
                <ul class="links-box">
                    <li class="links"><a href="#">關於我們</a></li>
                    <li class="links"><a href="#">線上購物</a></li>
                    <li class="links"><a href="#">料理方法</a></li>
                    <li class="links"><a href="#">出貨流程</a></li>
                    <li class="links-img"><a href="#"><svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8408 24.1611H33.8457C34.1445 24.1611 34.4102 23.9121 34.4102 23.5801C34.4102 23.248 34.1445 22.999 33.8457 22.999H14.1064C12.9277 22.999 12.2305 22.3184 12.0312 21.0566L11.6162 18.334H33.4971C35.5225 18.334 36.3691 17.2217 36.6514 15.3125L38.1123 5.94922C38.1289 5.7998 38.1621 5.51758 38.1621 5.43457C38.1621 4.83691 37.8135 4.47168 37.1328 4.47168H9.50781L9.00977 1.18457C8.92676 0.603516 8.69434 0.288086 7.84766 0.288086H1.52246C1.19043 0.288086 0.958008 0.553711 0.958008 0.869141C0.958008 1.16797 1.19043 1.4502 1.52246 1.4502H7.88086L10.8193 21.3057C11.085 23.082 12.0146 24.1611 13.8408 24.1611ZM36.9004 5.63379L35.4395 15.2129C35.2402 16.4746 34.6592 17.1719 33.5137 17.1719H11.4336L9.69043 5.63379H36.9004ZM16.082 32.0469C17.46 32.0469 18.5391 30.9678 18.5391 29.5898C18.5391 28.2119 17.46 27.1328 16.082 27.1328C14.7207 27.1328 13.625 28.2119 13.625 29.5898C13.625 30.9678 14.7207 32.0469 16.082 32.0469ZM30.9736 32.0469C32.335 32.0469 33.4307 30.9678 33.4307 29.5898C33.4307 28.2119 32.335 27.1328 30.9736 27.1328C29.5957 27.1328 28.4834 28.2119 28.4834 29.5898C28.4834 30.9678 29.5957 32.0469 30.9736 32.0469Z"
                                    fill="#393432" />
                            </svg></a></li>

                </ul>

            </div>
        </div>
</template>
<script>
import TestComponent from '@/components/TestComponent.vue'
export default {
    components: {
        TestComponent
    },
    data() {
        return {
            num: 0,
            total: 100,
        }
    },
    methods: {
        addNum() {
            this.num += 1
        }
    },
    computed: {
        percent() {
            return `${this.num / this.total * 100}  %`
        }
    },  
    mounted() {
        const el = this.$refs.test.$el
        console.log({el})
        el.style.background = 'red'
    },
    unmounted() {
        console.log('unmounted')
    }
}
</script>
<style>
.single {
    padding: 10px;
    border: 1px solid #000;
    color: #fff;
}
.out {
    width: 200px;
    background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
}
.heard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 84px;
}

.heard a img {
    width: 128px;
    height: 32px;
}
</style>