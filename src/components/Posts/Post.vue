<template>
    <div class='post'>
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'Post',

    props: {
        title: String
    }
}
</script>

<style lang='sass' scoped>
.post 
    color: white
    border: solid 2px
    border-color: #ffc0cb
    border-radius: 5px
    margin: 40px
    padding: 15px
    min-height: 90px
</style>