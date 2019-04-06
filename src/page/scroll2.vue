<template>
    <!--
        将scroll功能封装成一个组件，然后使用这个组件scroll-view ：
    -->
    <scroll-view class="scroll-view" :data="testList">
        <div class="content">
            <ul>
                <li v-for="(item, index) in testList" :key="index">
                    {{ item }} - {{ index }} - {{ item.msg }}
                </li>
            </ul>
        </div>
    </scroll-view>
</template>

<script>
import ScrollView from '@/components/ScrollView'
export default {
    data () {
        return {
            testList: [
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' },
                { msg: '1' },
                { msg: '2' },
                { msg: '3' }
            ]
        }
    },
    components: {
        ScrollView
    }
}
</script>

<style scoped>
.scroll-view {
    height: calc(100vh - 200px);
    overflow: hidden;
}
</style>
