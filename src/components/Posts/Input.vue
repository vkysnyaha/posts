<template>
    <div class='input-form'>
        <textarea v-model='input' placeholder='Тут писать новый пост'></textarea>
        <Button type='primary'> Добавить </Button>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Input',

    components: {Button},

    data() {
        return {
            input: ''
        }
    }
    
}
</script>

<style lang='sass' scoped>
.input-form
    color: white
    display: flex
    align-items: center
    gap: 20px
    border: solid 2px
    border-color: #ffc0cb
    border-radius: 5px
    margin: 40px
    padding: 0px
    min-height: 90px
    padding: 0 20px
    font-size: 18px
    input 
        width: 90%
    textarea 
        color: white
        resize: none
        width: 100%
        height: 100%
        border-radius: 10px
        padding: 10px
    textarea::placeholder
        color: white
        opacity: 50%
    textarea:focus, input:focus
        outline: none
</style>