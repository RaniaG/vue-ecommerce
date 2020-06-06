import home from './components/core/home';
import product from './components/products/product';
import productDetails from './components/products/details'
import productList from './components/products/list';
import productAddEdit from './components/products/add-edit';
import login from './components/core/login';

export default [
    { path: '/', component: home },
    {
        path: '/products', component: product, children: [
            { path: '/', component: productList },
            { path: '/add-edit', component: productAddEdit },
            { path: '/add-edit/:id', component: productAddEdit },
            { path: '/details/:id', component: productDetails },
        ]
    },
    { path: '/login', component: login }
]