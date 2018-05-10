<template>
    <div class="hello">
        this is HelloWorld.vue
        <computer>
            <div slot="CPU">Intel Core i7</div>
            <div slot="GPU">GTX980Ti</div>
            <div slot="Memory">Kingston 32G</div>
        </computer>
    </div>
</template>

<script>
import computer from '@/components/computer'
export default {
    components: {
        computer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
