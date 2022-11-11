<template>
    <div class='posts'>
        <div v-if='loading' class='loading'>Загрузка</div>
        <Input v-if='getInputValue'/>
        <Post 
            v-for='post in getPosts'
            :title = post.title
            :key = post.title
        />
    </div>
</template>

<script>
import Post from '@/components/Posts/Post.vue'
import Input from '@/components/Posts/Input.vue'

export default {
    name: 'MyPosts',

    data() {
        return {
            loading: false
        }
    },

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
        this.loading = true
        this.$store.dispatch('post/GET_POSTS_LIST', 10)
            .then(() => {
                this.loading = false
            })
    }
}
</script>

<style lang='sass' scoped>
.posts 
    width: 900px
    margin: 0 auto
    .loading 
        color: white
        font-size: 20px
</style>