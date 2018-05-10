<template>
    <div class="computer">
        <!-- slot: 插槽，内容分发 -->
        <!-- 在父组件中放入已被 `slot` 标记的内容，这些内容的顺序可以随意。之后这些内容被分发到子组件的特殊元素 `slot` 中，根据 `name` 属性在子组件中重新组合。 -->
        <!-- 先在组件中定义好一些插槽，在使用此组件的时候可以指定插槽去渲染不同的内容 -->
        <slot name="CPU"></slot>
        <slot name="GPU"></slot>
        <slot name="Memory"></slot>
        <div>上面的硬件可以组成一台电脑</div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
