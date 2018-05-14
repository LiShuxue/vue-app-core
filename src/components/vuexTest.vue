<template>
    <div class="vuex-test">
        <p>this is vuexTest.vue</p>
        <div>{{this.$store.state.testState}}</div>
        <div>{{this.$store.getters.testGetter}}</div>
        <button @click="changeStore">改变store中的state的值</button>

        <!-- 使用Vuex的各种map方法后 -->
        <div>将store中的state map成该组件中的计算属性: {{testState}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        // 通过mapState可以帮助我们生成计算属性。将store中的某个state映射到我们当前组件的某个计算属性上。
        // 如果当前计算属性与state中的名字不同：...mapState({ 'mapS': state=>state.testState })，用的是大括号{}
        // 如果当前计算属性与state中的名字相同：...mapState([ 'testState' ])，用的是中括号[]。推荐使用这种
        ...mapState([
            'testState'
        ])
    },
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
