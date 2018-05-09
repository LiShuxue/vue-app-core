<template>
    <div class="home">
        <p>this is app.vue</p>
        <!-- <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。 -->
        <!-- 比如有一个列表和一个详情，那么用户就会经常,打开详情=>返回列表=>打开详情… 这样的话列表和详情都是一个频率很高的页面，那么就可以对列表进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染 -->
        <!-- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 -->
        <!-- 所以具体实现时，将首次触发请求写在created钩子函数中,就能实现数据和页面缓存。 -->
        <!-- <keep-alive> 结合router，缓存部分页面 -->
        <keep-alive>
            <!-- 我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由 -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
