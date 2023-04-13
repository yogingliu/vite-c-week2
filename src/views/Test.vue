<template>
    <div>
        <TestComponent ref="hi" />
        {{ numAdd }}
        <button>add</button>
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
            num: 0
        }
    },
    computed: {
        numAdd() {
            return this.num + 1
        }
    },
    mounted() {
        const el = this.$refs.hi.$el
        console.log('el', el.style)
        el.style.background = 'red'
    }
}
</script>