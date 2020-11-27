import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/LoginPage.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/action-sheet',
        name: 'action-sheet',
        component: () => import('../views/ActionSheetPage.vue'),
    },
    {
        path: '/alert',
        name: 'alert',
        component: () => import('../views/AlertPage.vue'),
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('../views/ButtonPage.vue'),
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        component: () => import('../views/CheckboxPage.vue'),
    },
    {
        path: '/content',
        name: 'content',
        component: () => import('../views/ContentPage.vue'),
    },
    {
        path: '/datetime',
        name: 'datetime',
        component: () => import('../views/DatetimePickerPage.vue'),
    },
    {
        path: '/fab',
        name: 'fab',
        component: () => import('../views/FabButtonPage.vue'),
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('../views/IconsPage.vue'),
    },
    {
        path: '/infinite-scroll',
        name: 'infinite-scroll',
        component: () => import('../views/InfiniteScrollPage.vue'),
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('../views/LoadingPage.vue'),
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/MenuPage.vue'),
    },
    {
        path: '/modal',
        name: 'modal',
        component: () => import('../views/ModalPage.vue'),
    },
    {
        path: '/picker',
        name: 'picker',
        component: () => import('../views/PickerPage.vue'),
    },
    {
        path: '/popover',
        name: 'popover',
        component: () => import('../views/PopoverPage.vue'),
    },
    {
        path: '/tabs',
        name: 'tabs',
        component: () => import('../views/tabs/TabsPage.vue'),
        redirect: {name: 'tab1'},
        children: [
            {
                path: 'tab1',
                name: 'tab1',
                component: () => import('../views/tabs/TabPage1.vue'),
            },
            {
                path: 'tab2',
                name: 'tab2',
                component: () => import('../views/tabs/TabPage2.vue'),
            },
        ],
    },
    {
        name: 'toggle',
        path: '/toggle',
        component: () => import('../views/TogglePage.vue'),
    },
    {
        name: 'toast',
        path: '/toast',
        component: () => import('../views/ToastPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
