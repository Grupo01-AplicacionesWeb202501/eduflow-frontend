import {createRouter, createWebHistory} from "vue-router";
import CourseManagement from "../views/CourseManagement.vue";
const LoginComponent = () => import("../eduflow/pages/login.component.vue");
const SignInStudentComponent = () => import("../eduflow/pages/sign-in-student.component.vue");
const SignUpStudentComponent = () => import("../eduflow/pages/sign-up-student.component.vue");

const SignInTeacherComponent = () => import("../eduflow/pages/sign-in-teacher.component.vue");
const SignUpTeacherComponent = () => import("../eduflow/pages/sign-up-teacher.component.vue");
const NotificationPage = () => import("../pages/NotificationPage.vue");
const PageNotFoundComponent = () => import("../pages/page-not-found.component.vue");

const routes = [

    { path: '/login', name: "LoginComponents", component: LoginComponent},
    { path: "/sign-in-student", name: "SignInStudentComponent", component: SignInStudentComponent},
    { path: "/sign-up-student", name: "SignUpStudentComponent", component: SignUpStudentComponent},
    { path: "/sign-in-teacher", name: "SignInTeacherComponent", component: SignInTeacherComponent},
    { path: "/sign-up-teacher", name: "SignUpTeacherComponent", component: SignUpTeacherComponent},
    { path: "/",      name:'default', redirect:{name: "LoginComponents"}},
    { path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent},
    { path: "/courses", name: "CourseManagement", component: CourseManagement },
    { path: "/", name: "default", redirect: { name: "CourseManagement" } },
    { path: "/:pathMatch(.*)*", name: "PageNotFoundComponent", component: PageNotFoundComponent },
    { path: "/notificaciones", name: "NotificationPage", component: NotificationPage},

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
