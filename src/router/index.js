import { createWebHistory, createRouter } from "vue-router";
import AllTests from "@/components/MainMenu/AllTests.vue";
import PassTest from "@/components/TestPassing/PassTest.vue";
import AllTestsResult from "@/components/TestResults/AllTestsResult.vue";

const routes = [
    { path: '/all-tests', component: AllTests },
    { path: '/pass-test', component: PassTest },
    { path: '/test-result', component: AllTestsResult }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

