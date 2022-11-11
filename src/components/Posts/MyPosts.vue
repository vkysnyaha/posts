<template>
    <div class='my-posts'>
        <Input v-if='getInputValue'/>
    </div>
</template>

<script>
import Input from '@/components/Posts/Input.vue'

export default {
    name: 'MyPosts',

    components: {
        Input
    },

    computed: {
        getInputValue() {
            return this.$store.getters['post/GET_INPUT_VALUE']
        },
    }
}
</script>

<style lang='sass' scoped>
.my-posts 
    width: 900px
    margin: 0 auto
</style>