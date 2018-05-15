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
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: true,
            className1: 'active',
            className2: 'test1'
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
