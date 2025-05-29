import {createRouter, createWebHistory} from "vue-router";

const PageNotFoundComponent = () => import("../public/pages/page-not-found.component.vue");

const routes = [

    {path: "/",      name:'default', redirect:{name: "SignInComponent"}},
    {path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;