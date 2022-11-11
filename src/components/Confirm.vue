<template>
    <div class='confirm-form'>
        <div class='text'>Точно?</div>
        <div class='buttons'>
            <Button>Нет</Button>
            <Button @click='fn'>Да</Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Confirm',

    components: {
        Button
    },

    props: {
        fn: Function
    }
}
</script>

<style lang='sass' scoped>
.confirm-form 
    background-color: #EAE6CA
    border: solid 2px
    border-radius: 20px
    border-top-right-radius: 3px
    border-color: #ffc0cb
    position: absolute
    top: 45px
    left: 1020px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 10px
    width: 200px
    height: 60px
    color: white
    .text 
        color: red
    .buttons
        display: flex
        align-items: center
        gap: 10px
</style>