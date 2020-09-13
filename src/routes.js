import home from './components/core/home';
import productDetails from './components/products/details'
import productList from './components/products/list';
import productAddEdit from './components/products/add-edit';
import login from './components/core/login';
import productHome from './components/products/home';
import cart from './components/cart/cart';

export default [
    { path: '/', component: home },
    {
        path: '/products', component: productHome, children: [
            { path: '', component: productList },
            { path: 'add', component: productAddEdit },
            { path: 'edit/:id', component: productAddEdit },
            { path: ':id', component: productDetails },
        ]
    },
    {
        path: '/cart', component: cart
    },
    { path: '/login', component: login }

]