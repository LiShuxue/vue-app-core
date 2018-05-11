<template>
    <div class="computer">
        <!-- slot: 插槽，内容分发 -->
        <!-- 在父组件中放入已被 `slot` 标记的内容，这些内容的顺序可以随意。之后这些内容被分发到子组件的特殊元素 `slot` 中，根据 `name` 属性在子组件中重新组合。 -->
        <!-- 先在组件中定义好一些插槽，在使用此组件的时候可以指定插槽去渲染不同的内容 -->
        <slot name="CPU"></slot>
        <slot name="GPU"></slot>
        <slot name="Memory"></slot>
        <div>上面的硬件可以组成一台电脑</div>

        <!-- 非父子组件通讯
            1. 子传父，再父传子
            2. 使用一个空的Vue实例作为单独的事件中心管理组件间的通信
            3. 使用vuex
        -->
        <button @click="sendMsgToBrother">向兄弟组件传递信息</button>
    </div>
</template>

<script>
import eventBus from '@/components/eventBus'
export default {
    methods: {
        sendMsgToBrother () {
            eventBus.$emit('listenToBrother', 'this message is from brother')
        }
    }
}
</script>

<style scoped>
</style>
