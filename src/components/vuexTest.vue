<template>
    <div class="vuex-test">
        <p>this is vuexTest.vue</p>
        <div>{{this.$store.state.testState}}</div>
        <div>{{this.$store.getters.testGetter}}</div>
        <button @click="changeStore">改变store中的state的值</button>
    </div>
</template>

<script>
export default {
    methods: {
        changeStore () {
            // Action 通过 store.dispatch 方法触发
            this.$store.dispatch('testActionChangeState')
        }
    }
}
</script>

<style scoped>
</style>
