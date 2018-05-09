import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

// webpack中利用require.ensure()实现代码拆分和按需加载。 http://www.css88.com/doc/webpack2/guides/code-splitting-require/
// webpack 在编译时，会静态地解析代码中的 require.ensure()，同时将模块添加到一个分开的 chunk 当中。这个新的 chunk 会被 webpack 通过 jsonp 来按需加载。
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'hello')
const pageA = r => require.ensure([], () => r(require('@/page/pageA')), 'pageA')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                { path: '/hello', component: Hello },
                { path: '/pageA', component: pageA, meta: { keepAlive: true } } // 需要缓存
            ]
        }
    ]
})
