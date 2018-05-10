<template>
    <div class="prop-test">
        <!-- props 可以用来在父子组件中传参(只能从父到子)。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性，可以在组件中直接使用或者用this.使用 -->
        <!-- props 选项需要在组件中注册声明， props: ['title', 'A', 'B']。 一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop-->
        <!-- 子组件中使用：<test title="My journey with Vue" A="testA" B="testB"></test> -->
        <!-- 使用 v-bind 来动态传递 prop。如 v-bind:key="post.id" -->
        <div><p>父组件传递的数据A：{{propA}}</p></div>
        <div><p>父组件传递的数据B：{{propB}}</p></div>
        <div><p>父组件传递的数据C：{{this.propC}}</p></div>
    </div>
</template>

<script>
export default {
    props: ['propA', 'propB', 'propC']
}
</script>

<style scoped>
</style>
