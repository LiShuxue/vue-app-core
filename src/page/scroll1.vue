<template>
    <!--
        最简单的实现 ：
        直接使用 new BScroll(this.$refs.wrapper, {})
    -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <ul>
                <li v-for="(item, index) in testList" :key="index">
                    {{ item }} - {{ index }} - {{ item.msg }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
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
    mounted () {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        })
    }
}
</script>

<style scoped>
.wrapper {
    height: calc(100vh - 200px);
    overflow: hidden;
}
</style>
