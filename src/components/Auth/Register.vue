<template>
    <div class='auth'>
        <div class='form'>
            <div class='title'>Регистрация</div>
            <form class='form-input'>
                <input type='text' placeholder='Тут никнейм' v-model='username'>
                <input type='text' placeholder='Тут почта' v-model='email'>
                <input :type='typePassword' placeholder='Тут пароль' v-model='password'>
            </form>
            <Button @click='changePassword'> Показать пароль </Button>
            <router-link to='/auth'>
                <Button type='danger'>Назад</Button>
            </router-link>
            <Button type='primary' @click='register'>Зарегистрироваться</Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Auth',

    components: {Button},

    data() {
        return {
        username: '',
        email: '',
        password: '',
        showPassword: 'password'
        }
    },

    computed: {
        typePassword() {
            return this.showPassword ? 'text' : 'password'
        }
    },
    
    methods: {
        register() {
            this.$store.dispatch('user/REGISTER', {
                username: this.username,
                email: this.email,
                password: this.password
            })
        },
        changePassword() {
          this.showPassword = !this.showPassword
        }
    }
}
</script>

<style lang='sass' scoped>
.auth 
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    .form
        display: flex
        flex-direction: column
        gap: 20px
        background-color: #EAE6CA
        width: 400px
        height: 400px
        border-radius: 5px
        border: solid 2px
        border-color: #ffc0cb
        margin-top: 150px
        justify-content: center
        align-items: center
        .form-input
            display: flex
            flex-direction: column
            gap: 20px
        .title 
            margin-bottom: 30px
            font-size: 20px
        input
            border: 1px solid
            height: 30px
            width: 200px
            padding-left: 12px
            border-radius: 5px
            background-color: white
</style>