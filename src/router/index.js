import { createRouter, createWebHistory } from "vue-router";
import CourseManagement from "../views/CourseManagement.vue";
const PageNotFoundComponent = () => import("../public/pages/page-not-found.component.vue");

const routes = [
    { path: "/courses", name: "CourseManagement", component: CourseManagement },
    { path: "/", name: "default", redirect: { name: "CourseManagement" } },
    { path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
