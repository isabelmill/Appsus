import bookApp from './apps/book/pages/book-index.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js';

import mailApp from './apps/mail/pages/mail-index.cmp.js';

import keepApp from './apps/keep/pages/note-index.cmp.js';

import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp.js'



const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});