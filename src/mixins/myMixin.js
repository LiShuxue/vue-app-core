const myMixin = {
    // 混入data。发生冲突时以组件数据优先。
    data () {
        return {
            test: '这是被混入的data'
        }
    },
    // 混入生命周期钩子函数，发生冲突时，混入的钩子将在组件自身钩子之前调用。
    created () {
        console.log('这是被混入的生命周期函数')
    },
    // 混入method。发生冲突时以组件方法优先。
    methods: {
        testMethod () {
            console.log('这是被混入的方法')
        }
    }
}

export default myMixin
