<template>
    <button class='button' :class='[typeClass,sizeClass]'>
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',

    props: {
        type: String,
    },
    
    computed: {
        typeClass() {
            switch (this.type) {
                case 'primary':
                    return 'primary'
                case 'danger':
                    return 'danger'
                default: 
                    return ''
            }
        }
    }
}
</script>

<style lang='sass' scoped>
    .button
        color: #4C514A
        &:hover 
            color: grey
        &.primary
            background-color: #ffc0cb
            padding: 5px 10px
            border-radius: 5px
            border: 1px solid
        &.danger   
            background-color: #DCDCDC
            padding: 5px 10px
            border-radius: 5px
            border: 1px solid        
</style>