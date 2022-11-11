<template>
    <div class='header' v-if='getAuth'>
        <nav class='nav'>
            <div class='nav-left'>
                <Button type='danger' @click='$router.push("/posts")'> Не мои посты </Button>
                <Button type='danger' @click='$router.push("/my-posts")'> Мои посты </Button>
                <Button type='danger' @click='setInputValue'> {{ buttonCreatePost }} </Button>
            </div>
            <Button type='danger' @click='logout'> Выйти </Button>
        </nav>
        <Confirm v-if='confirmValue' :fn='logout'/>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Confirm from '@/components/Confirm.vue'

export default {
    name: 'Header',

    components: {
        Button,
        Confirm
    },

    data() {
        return {
            buttonCreatePost: 'Создать пост',
            confirmValue: false
        }
    },

    methods: {
        logout() {
            this.$store.dispatch('user/LOGOUT')
            this.$router.push({name: 'auth'})
        },
        setInputValue() {
            if(this.buttonValue === 'Создать пост') {
                this.buttonValue = 'Передумал'
            } else {
                this.buttonValue = 'Создать пост'
            }
            this.$store.commit('post/SET_INPUT_VALUE')
        },
    },
    
    computed: {
        getAuth() {
           return this.$store.getters['user/GET_ACCESS']
        },
    }
}
</script>

<style lang='sass' scoped>
.header
    height: 56px
    border-bottom-right-radius: 5px
    border-bottom-left-radius: 5px
    margin: 0 130px
    background-color: #EAE6CA
    justify-content: center
    border: solid 2px
    border-color: #ffc0cb
    border-top: 0
    .nav 
        margin: 0 20px
        height: 100%
        display: flex
        font-size: 18px
        align-items: center
        justify-content: space-between
        .nav-left
            display: flex
            gap: 20px
</style>