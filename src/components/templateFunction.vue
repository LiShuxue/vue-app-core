<template>
    <div class="template-function">
        <h5>this is templateFunction.vue</h5>

        <!-- 绑定class -->
        <div>
            <!-- 对象语法，直接传给class一个对象 -->
            <p v-bind:class="{ active: isActive, test1: isActive}">通过对象语法绑定class</p>
            <!-- 对象语法，传给class一个计算属性，这个计算属性会返回一个对象 -->
            <p v-bind:class="classObject">通过对象语法绑定class</p>

            <!-- 数组语法，直接传给class一个数组，数组里的每个值都是data值，代表一个class名 -->
            <p v-bind:class="[className1, className2]">通过数组语法绑定class</p>
            <!-- 数组语法，三元表达式 -->
            <p v-bind:class="[isActive ? className1 : className2]">通过数组语法绑定class</p>

            <!-- 数组语法+对象语法， 数组语法中也可以包含对象语法-->
            <p v-bind:class="[{active: isActive}, className2]">通过数组语法+对象语法绑定class</p>
        </div>

        <!-- 条件渲染 -->
        <!-- v-else，v-else-if 必须紧跟在带 v-if 或者 v-else-if 的元素之后。-->
        <!-- v-if vs v-show   v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好 -->
        <div>
            <!-- 单独一个v-if -->
            <div v-if="showSomething">如果真，则显示</div>

            <!-- v-if, v-else结合 -->
            <div v-if="Math.random() > 0.5">Now you see me</div>
            <div v-else>Now you don't</div>

            <!-- v-if, v-else-if, v-else结合 -->
            <div v-if="type === 'A'">A</div>
            <div v-else-if="type === 'B'">B</div>
            <div v-else-if="type === 'C'">C</div>
            <div v-else>Not A/B/C</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: true,
            className1: 'active',
            className2: 'test1',
            showSomething: true
        }
    },
    computed: {
        classObject () {
            return {
                active: this.isActive === true,
                test1: this.isActive === false
            }
        }
    }
}
</script>

<style>
.template-function{
    border: 1px blue solid;
    margin: 10px 0 0 0;
}
.active{
    color: red;
}
.test1{
    font-size: 10px;
}
</style>
