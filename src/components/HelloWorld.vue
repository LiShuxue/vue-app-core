<template>
    <div class="hello">
        this is HelloWorld.vue
        <computer>
            <!-- slot可以将不同的内容渲染到组件的不同地方，这些内容也可以是原生的html -->
            <div slot="CPU">Intel Core i7</div>
            <div slot="GPU">GTX980Ti</div>
            <div slot="Memory">Kingston 32G</div>
        </computer>
        <!-- 通过props从父组件往子组件传递参数，可以传静态内容，也可以通过绑定v-bind:propertyName="..."来传递动态内容。 -->
        <!-- camelCase vs kebab-case。如果在template中，两种写法都可以。但是如果在html中，特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符 -->
        <prop-test propA="静态字符串" :propB="msg" :prop-c="msg"></prop-test>
    </div>
</template>

<script>
import computer from '@/components/computer'
import propTest from '@/components/propTest'
export default {
    data () {
        return {
            msg: 'a'
        }
    },
    components: {
        computer,
        propTest
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
