import { createRouter, createWebHistory } from 'vue-router'

const StudentManagement = () => import("../student-management/pages/student-management.component.vue")

const routes = [
    { path: '/student-management', name: 'StudentManagement', component: StudentManagement, meta: { title: 'Student Management'} },
    { path: '/', name:'default', redirect: '/student-management' }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;