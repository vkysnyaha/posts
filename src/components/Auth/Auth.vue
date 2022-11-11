<template>
    <div class='auth'>
        <div class='form'>
            <div class='title'>
               Вход
            </div>
            <form class='inputs'>
                <input type='text' placeholder='Тут почта' v-model='email'>
                <input :type='typePassword' placeholder='Тут пароль' v-model='password'>
            </form>
            <Button @click='changePassword'> Показать пароль </Button>
            <div class='buttons'>
                <router-link to='/posts'><Button type='primary' @click='login'> Войти </Button></router-link>
                <router-link to='/register'><Button type='primary'> Регистрация </Button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Auth',

    components: {
        Button
    },

    data() {
        return {
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
        changePassword() {
          this.showPassword = !this.showPassword
        },
        login() {
            this.$store.dispatch('user/LOGIN', {email: this.email, password: this.password})
                .then(() => {
                    this.$router.push('/posts')
                })
                .catch((error) => {
                    console.log(error)
                })
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
    // gap: 20px
    background-color: #EAE6CA
    width: 400px
    height: 400px
    border-radius: 5px
    border: solid 2px
    border-color: #ffc0cb
    margin-top: 150px
    justify-content: center
    align-items: center
    .title 
        margin-bottom: 30px
        font-size: 20px
    .inputs
        display: flex
        flex-direction: column
        gap: 20px
    .buttons 
        display: flex
        margin-top: 20px
        flex-direction: column
        align-items: center
        justify-content: center
        gap: 20px

    input
        border: 1px solid
        height: 30px
        width: 200px
        padding-left: 12px
        border-radius: 5px
        background-color: white
</style>