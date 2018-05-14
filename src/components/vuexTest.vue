<template>
    <div class="vuex-test">
        <h5>this is vuexTest.vue</h5>
        <div>{{this.$store.state.testState}}</div>
        <div>{{this.$store.getters.testGetter}}</div>
        <button @click="changeStore">改变store中的state的值</button>

        <!-- 使用Vuex的各种map方法后 -->
        <div>将store中的state map成该组件中的计算属性: {{testState}}</div>
        <div>将store中的getter map成该组件中的计算属性: {{testGetter}}</div>
        <div><button @click="TEST_MUTATION_CHANGE_STATE({ newState: 'this is testMapMutations' })">将store中的mutation map成该组件中的方法</button></div>
        <div><button @click="testActionChangeState({ newState: 'this is testMapActions' })">将store中的action map成该组件中的方法</button></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    computed: {
        // 通过mapState可以帮助我们生成计算属性。将store中的某个state映射到我们当前组件的某个计算属性上。
        // 如果当前计算属性与state中的名字不同：...mapState({ 'mapS': state=>state.testState })，用的是大括号{}
        // 如果当前计算属性与state中的名字相同：...mapState([ 'testState' ])，用的是中括号[]。
        ...mapState([
            'testState'
        ]),

        // mapGetters 可以将 store 中的 getter 映射到计算属性
        // 如果当前计算属性与getter的名字不同：...mapGetters({ mapG: 'testGetter' })，用的是大括号{}
        // 如果当前计算属性与getter的名字相同：...mapGetters([ 'testGetter' ])，用的是中括号[]。
        ...mapGetters([
            'testGetter'
        ])
    },
    methods: {
        changeStore () {
            // Action 通过 store.dispatch 方法触发
            this.$store.dispatch('testActionChangeState', {
                newState: 'this is new state'
            })
        },

        // 使用 mapMutations 将组件中的 methods 映射为 this.$store.commit('xxx', { payload })。更改store中的state的值只能提交mutations。
        // 如果当前方法名与mutation的名字不同：...mapMutations({ mapM: 'TEST_MUTATION_CHANGE_STATE' })，用的是大括号{}
        // 如果当前方法名与mutation的名字相同：...mapMutations([ 'TEST_MUTATION_CHANGE_STATE' ])，用的是中括号[]。
        // 调用方法的时候可以直接传入参数，相当于payload
        ...mapMutations([
            'TEST_MUTATION_CHANGE_STATE'
        ]),

        // 使用 mapActions 将组件中的 methods 映射为 this.$store.dispatch('xxx', { payload })。
        // action可以用来提交mutation，与直接提交mutation相比，action可以包含异步操作。
        // 比如某个请求完成之后去改变某个state的状态。action中去发请求，请求结束之后提交mutation，此mutation中更改state状态。
        // 如果当前方法名与action的名字不同：...mapMutations({ mapA: 'testActionChangeState' })，用的是大括号{}
        // 如果当前方法名与action的名字相同：...mapMutations([ 'testActionChangeState' ])，用的是中括号[]。
        // 调用方法的时候可以直接传入参数，相当于payload
        ...mapActions([
            'testActionChangeState'
        ])

    }
}
</script>

<style scoped>
.vuex-test{
    border: 1px blue solid;
    margin: 10px 0 0 0;
}
</style>
