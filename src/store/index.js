import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state对象可以包含本应用全部的状态。在组件中通过this.$store.state来访问
const state = {
    testState: 'this is a state'
}

// 有时候我们需要从 state 中派生出一些状态，例如对列表进行过滤并计数，可以认为是 store 的计算属性。在组件中通过this.$store.getters来访问
const getters = {
    testGetter: (state) => {
        return state.testState + ' testGetters'
    }
}

// 更改 store 中的状态的唯一方法是提交 mutation
// mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
const mutations = {
    testMutationChangeState (state, payload) {
        state.testState = payload.newState
    }
}

// Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态； Action 可以包含任意异步操作。
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
const actions = {
    // testActionChangeState (context) {
    //     context.commit('testMutationChangeState', {
    //         newState: 'this is new state'
    //     })
    // }

    // 解构context
    testActionChangeState ({ commit }) {
        commit('testMutationChangeState', {
            newState: 'this is new state'
        })
    }
}

// 每个应用将仅仅包含一个 store 实例
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
