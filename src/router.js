import Vue from 'vue'
import router from  'vue-router'
import Home from '@/views/home'
Vue.use(router)



export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: ()=> import('./views/about')
        }
    ]
})