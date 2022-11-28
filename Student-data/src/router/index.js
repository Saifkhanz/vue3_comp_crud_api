import { createRouter, createWebHistory } from "vue-router";
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Edit from '../components/Edit.vue';
import View from '../components/View.vue';
import pageNot from '../views/pageNot.vue';
const routes = [
    {
        path: '/',
        name: "home",
        component: List
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/view/:id ',
        name: "view",
        component: View
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'pagenotfound',
        component: pageNot
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router