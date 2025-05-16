import { createRouter, createWebHistory } from "vue-router";

const SignInComponent = () => import("../pages/sign-in.component.vue");
const SignUpComponent = () => import("../pages/sign-up.component.vue");
const NotificationPage = () => import("../pages/NotificationPage.vue");
const PageNotFoundComponent = () => import("../pages/page-not-found.component.vue");

const routes = [
  { path: "/sign-in", name: "SignInComponent", component: SignInComponent },
  { path: "/sign-up", name: "SignUpComponent", component: SignUpComponent },
  { path: "/notificaciones", name: "NotificationPage", component: NotificationPage },
  { path: "/", name: "default", redirect: { name: "SignInComponent" } },
  { path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
