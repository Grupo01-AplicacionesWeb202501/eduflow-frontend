import {createRouter, createWebHistory} from "vue-router";
const SignInStudentComponent = () => import("../eduflow/pages/sign-in-student.component.vue");
const SignUpStudentComponent = () => import("../eduflow/pages/sign-up-student.component.vue");
const PageNotFoundComponent = () => import("../public/pages/page-not-found.component.vue");

const routes = [

    { path: "/sign-in-student", name: "SignInStudentComponent", component: SignInStudentComponent},
    { path: "/sign-up-student", name: "SignUpStudentComponent", component: SignUpStudentComponent},
    {path: "/",      name:'default', redirect:{name: "SignInStudentComponent"}},
    {path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;