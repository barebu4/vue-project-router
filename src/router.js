import {createRouter, createWebHistory} from "vue-router"
import Home from './views/Home.vue'
import User from './views/User.vue'
import Profile from './views/Profile.vue'
import About from "./views/About.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/user/:id",
        name: "user",
        component: User,
        props: true,
        children: [
            {
                path: "/user/:id/profile",
                name: "profile",
                component: Profile,
                props: true
            },
            {
                path: "/user/:id/about",
                name: "about",
                component: About,
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router