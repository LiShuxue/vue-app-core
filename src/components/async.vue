<template>
    <div class="async">
        <h5>this is async.vue</h5>
        <button @click="testThen">testPromiseThen</button>
        <button @click="testAwait">testAsyncAwait</button>
        <button @click="testPromiseAll">testPromiseAll</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            condition: true
        }
    },

    methods: {
        promiseA () {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (this.condition) {
                        resolve('A success')
                    } else {
                        reject(new Error('A failed'))
                    }
                }, 3000)
            })
            return promise
        },

        promiseB () {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (this.condition) {
                        resolve('B success')
                    } else {
                        reject(new Error('B failed'))
                    }
                }, 5000)
            })
            return promise
        },

        testThen () {
            this.promiseA().then((msg) => {
                alert(msg)
            }).catch((err) => {
                alert(err)
            })
        },

        async testAwait () {
            let msg = await this.promiseA()
            alert(msg)
        },

        // 当两个异步方法之间没有依赖时，顺序的 await 会让执行时间增加，因此两个异步方法应该并行执行。
        async testPromiseAll () {
            let a = this.promiseA()
            let b = this.promiseB()
            let result = await Promise.all([a, b])
            alert(result)
        }
    }
}
</script>

<style scoped>
.async{
    border: 1px blue solid;
    margin: 10px 0 0 0;
}
</style>
