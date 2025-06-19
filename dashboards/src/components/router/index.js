import { createRouter, createWebHistory } from 'vue-router'
import TeacherDashboard from '../teacher/TeacherDashboard.component.vue'

const routes = [
    {
        path: '/',
        redirect: '/teacher/dashboard'
    },
    {
        path: '/teacher/dashboard',
        name: 'TeacherDashboard',
        component: TeacherDashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
