import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE } from './menu.js'

const route = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior: () => ({ y: 0 }),
    routes: ROUTE
})

route.beforeEach((to, from, next) => {
    // console.log(to, from)
    next()  
})


export default route
