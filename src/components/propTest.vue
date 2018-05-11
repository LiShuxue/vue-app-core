<template>
    <div class="prop-test">
        <!-- props 可以用来在父子组件中传参(单项数据流，只能从父到子)。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性，可以在组件中直接使用或者用this.使用 -->
        <!-- props 选项需要在组件中注册声明， props: ['title', 'A', 'B']。 一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop-->
        <!-- 子组件中使用：<test title="My journey with Vue" A="testA" B="testB"></test> -->
        <!-- 使用 v-bind 来动态传递 prop。如 v-bind:key="post.id" -->
        <!-- 每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。但是如果你需要使用这个prop的值，最好定义一个本地的 data 属性并将这个 prop 用作其初始值 -->
        <div><p>父组件传递的数据A：{{propA}}</p></div>
        <div><p>父组件传递的数据B：{{propB}}</p></div>
        <div><p>父组件传递的数据C：{{this.propC}}</p></div>
        <div><p>父组件传递的数据D：{{propD}}</p></div>
        <div><p>父组件传递的数据E：{{propE}}</p></div>

        <!-- 父子通讯，props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息 -->
        <!-- 子:$emit(eventName, args)   父:$on(eventName, callback) -->
        <button @click="sendMsgToParent">向父组件传值</button>

        <!-- 不借用vuex的情况下，兄弟组件通过event bus来传递消息 -->
        <div>{{msgFromBrother}}</div>
    </div>
</template>

<script>
import eventBus from '@/components/eventBus'
export default {
    data () {
        return {
            msgFromBrother: '接受兄弟组件传来的信息'
        }
    },
    props: {
        // 基础的类型检查 (`null` 匹配任何类型)
        propA: String,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
            type: String,
            required: true
        },
        // 带有默认值的数字
        propD: {
            type: Number,
            default: 100
        },
        // 自定义验证函数
        propE: {
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    methods: {
        sendMsgToParent () {
            this.$emit('listenToChildEvent', 'this message is from child')
        }
    },
    created () {
        eventBus.$on('listenToBrother', (args) => {
            console.log(args)
            this.msgFromBrother = args
        })
    }
}
</script>

<style scoped>
</style>
