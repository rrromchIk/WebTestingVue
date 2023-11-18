import { createWebHistory, createRouter } from "vue-router";
import AllTests from "@/components/MainMenu/AllTests.vue";
import PassTest from "@/components/TestPassing/PassTest.vue";

const routes = [
    { path: '/all-tests', component: AllTests },
    { path: '/pass-test', component: PassTest }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

