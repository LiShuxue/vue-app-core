<template>
    <div class="home">
        <p>this is app.vue</p>

        <!-- <router-view> 是基本的动态组件，所以我们可以用 <transition> 组件给它添加一些过渡效果。 下面的用法会给所有路由设置一样的过渡效果。 -->
        <!-- 在进入/离开的过渡中，会有 6 个 class 切换:
            v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
            v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
            v-enter-to: 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
            v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
            v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
            v-leave-to: 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
        -->
        <!-- 对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀。如果你使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter -->
        <!-- 过渡模式：in-out：新元素先进行过渡，完成之后当前元素过渡离开。out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
        <transition name="router-fade" mode="out-in">
            <!-- <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。 -->
            <!-- 比如有一个列表和一个详情，那么用户就会经常,打开详情=>返回列表=>打开详情… 这样的话列表和详情都是一个频率很高的页面，那么就可以对列表进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染 -->
            <!-- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 -->
            <!-- 所以具体实现时，将首次触发请求写在created钩子函数中,就能实现数据和页面缓存。 -->
            <!-- <keep-alive> 结合router，缓存部分页面 -->
            <keep-alive>
                <!-- 我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由 -->
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <!-- 不能在这再写一个router-view，会报错。因为transition里面只能包含一个元素或组件，多个组件/元素需要用transition-group -->
            <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.router-fade-enter{
    opacity: 0;
}
.router-fade-enter-active{
    transition-property: opacity;
    transition-duration: 1s;
}
.router-fade-leave-active{
    transition-property: opacity;
    transition-duration: 1s;
}
.router-fade-leave-to{
    opacity: 0;
}
</style>
