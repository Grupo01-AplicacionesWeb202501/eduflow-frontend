import { createRouter, createWebHistory } from "vue-router";

const NotificationPage = () => import("../pages/NotificationPage.vue");
const PageNotFoundComponent = () => import("../pages/page-not-found.component.vue");

const routes = [
  {
    path: "/notificaciones",
    name: "NotificationPage",
    component: NotificationPage
  },
  {
    path: "/",
    redirect: { name: "NotificationPage" }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFoundComponent",
    component: PageNotFoundComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
