<template>
    <div class='posts'>
        <Input v-if='getInputValue'/>
        <Post 
            v-for='post in getPosts'
            :title = post.title
            :key = post.title
        />
        <!-- <button @click='getPostsList'>@</button> -->
    </div>
</template>

<script>
import Post from '@/components/Posts/Post.vue'
import Input from '@/components/Posts/Input.vue'

export default {
    name: 'MyPosts',

    components: {
        Post,
        Input
    },

    methods: {
        
    },

    computed: {
        getInputValue() {
            return this.$store.getters['post/GET_INPUT_VALUE']
        },
        getPosts() {
            return this.$store.getters['post/GET_POSTS']
        }
    },

    mounted() {
        this.$store.dispatch('post/GET_POSTS_LIST')
    }
}
</script>

<style lang='sass' scoped>
.posts 
    width: 900px
    margin: 0 auto
</style>