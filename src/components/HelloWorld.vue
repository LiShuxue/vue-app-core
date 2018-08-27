<template>
    <div class="hello">
        <h3>this is HelloWorld.vue</h3>
        <computer>
            <!-- slot可以将不同的内容渲染到组件的不同地方，这些内容也可以是原生的html -->
            <div slot="CPU">Intel Core i7</div>
            <div slot="GPU">GTX980Ti</div>
            <div slot="Memory">Kingston 32G</div>
        </computer>

        <!-- 通过props从父组件往子组件传递参数，可以传静态内容，也可以通过绑定v-bind:propertyName="..."来传递动态内容。 -->
        <!-- camelCase vs kebab-case。如果在template中，两种写法都可以。但是如果在html中，特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符 -->
        <!-- 子组件传递到父组件的消息，需要在子组件的上监听，而不是任意一个template上都可以监听到 -->
        <prop-test propA="静态字符串" :propB="msg" :prop-c="msg" propE="success" @listenToChildEvent="showMsgFromChild"></prop-test>

        <!-- 通过vuex管理应用的状态 -->
        <vuex-test></vuex-test>

        <!-- 组件的生命周期 -->
        <life-cycle></life-cycle>

        <!-- 模板上的一些语法和使用 -->
        <template-function></template-function>

        <!-- 异步编程 -->
        <async></async>

        <!-- chart图表 -->
        <chart></chart>

        <!-- 富文本编辑器 -->
        <editor></editor>

        <!-- markdown编辑器 -->
        <editor-b></editor-b>
    </div>
</template>

<script>
import computer from '@/components/computer'
import propTest from '@/components/propTest'
import vuexTest from '@/components/vuexTest'
import lifeCycle from '@/components/lifeCycle'
import templateFunction from '@/components/templateFunction'
import async from '@/components/async'
import chart from '@/components/chart'
import editor from '@/components/editor'
import editorB from '@/components/editorB'
export default {
    data () {
        return {
            msg: 'a'
        }
    },
    components: {
        computer,
        propTest,
        vuexTest,
        lifeCycle,
        templateFunction,
        async,
        chart,
        editor,
        editorB
    },
    methods: {
        showMsgFromChild (args) {
            console.log(args)
            this.msg = this.msg + 'b'
            // data中的数据可以直接用this.获得，也可以用this.$data获得
            console.log(this.$data.msg)
            console.log(this.msg)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    border: 1px green solid;
    padding: 10px;
}
</style>
