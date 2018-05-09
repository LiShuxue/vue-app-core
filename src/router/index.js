import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                { path: '/hello', component: Hello }
            ]
        }
    ]
})
