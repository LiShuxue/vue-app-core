<template>
    <div class="life-cycle">
        <h5>This is lifeCycle.vue</h5>
        <p>{{beforeCreate}}</p>
        <p>{{created}}</p>
        <p>{{beforeMount}}</p>
        <p>{{mounted}}</p>
        <p>{{beforeUpdate}}</p>
        <p>{{updated}}</p>
        <p>{{activated}}</p>
        <p>{{deactivated}}</p>
        <p>{{beforeDestroy}}</p>
        <p>{{destroyed}}</p>
        <p>{{errorCaptured}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            beforeCreate: 'beforeCreate',
            created: 'created',
            beforeMount: 'beforeMount',
            mounted: 'mounted',
            beforeUpdate: 'beforeUpdate',
            updated: 'updated',
            activated: 'activated',
            deactivated: 'deactivated',
            beforeDestroy: 'beforeDestroy',
            destroyed: 'destroyed',
            errorCaptured: 'errorCaptured'
        }
    },
    beforeCreate () {
        console.log('beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用，所以此时操作data对象不生效。')
        this.beforeCreate = 'beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用，所以此时操作data对象不生效。'
    },
    created () {
        console.log('created:在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。')
        this.created = 'created:在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。'
    },
    beforeMounted () {
        console.log('beforeMounted:在挂载开始之前被调用：相关的 render 函数首次被调用，该钩子在服务器端渲染期间不被调用。')
        this.beforeMount = 'beforeMounted:在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。'
    },
    mounted () {
        console.log('mounted:el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。将虚拟DOM渲染到真实的DOM元素。该钩子在服务器端渲染期间不被调用。')
        this.mounted = 'mounted:el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。将虚拟DOM渲染到真实的DOM元素。该钩子在服务器端渲染期间不被调用。'
    },
    beforeUpdate () {
        console.log('beforeUpdate:数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。')
        this.beforeUpdate = 'beforeUpdate:数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。'
    },
    updated () {
        console.log('updated:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。该钩子在服务器端渲染期间不被调用。')
        this.updated = 'updated:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。该钩子在服务器端渲染期间不被调用。'
    },
    activated () {
        console.log('activated: keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。')
        this.activated = 'activated: keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。'
    },
    deactivated () {
        console.log('deactivated: keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用')
        this.deactivated = 'deactivated: keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用'
    },
    beforeDestroy () {
        console.log('beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。')
        this.beforeDestroy = 'beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。'
    },
    destroyed () {
        console.log('destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。')
        this.destroyed = 'destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。'
    },
    errorCaptured () {
        console.log('errorCaptured: 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。false本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler。')
        this.errorCaptured = 'errorCaptured: 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。false本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler。'
    }
}
</script>

<style scoped>
.life-cycle{
    border: 1px blue solid;
    margin: 10px 0 0 0;
}
</style>
