import { createRouter, createWebHistory } from 'vue-router'

// Carga inicial donde se trae Todo
// import Actualizar from '../pages/Actualizar'
// import Buscar from '../pages/Buscar'
// import Eliminar from '../pages/Eliminar'
// import Insertar from '../pages/Insertar'
// import Inicio from '../pages/Inicio'
// import Error from '../pages/NoFound'

// Carga perezosa donde se trae bajo demanda

const routes = [
    {
        path: '/',
        name: 'inicio',
        //component: Inicio
        component: () => import(/* webpackChunkName: "Inicio" */ '../pages/Inicio')
    },
    {
        path: '/actualizar',
        name: 'actualizar',
        //component: Actualizar
        component: () => import(/* webpackChunkName: "Actualizar" */ '../pages/Actualizar')
    },
    {
        path: '/buscar/:idCliente',
        name: 'buscar',
        //component: Buscar
        component: () => import(/* webpackChunkName: "Buscar" */ '../pages/Buscar')
    },
    {
        path: '/eliminar',
        name: 'eliminar',
        //component: Eliminar
        component: () => import(/* webpackChunkName: "Eliminar" */ '../pages/Eliminar')
    },
    {
        path: '/insertar',
        name: 'insertar',
        //component: Insertar
        component: () => import(/* webpackChunkName: "Insertar" */ '../pages/Insertar')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        //component: Error
        component: () => import(/* webpackChunkName: "NoFound" */ '../pages/NoFound')
    },
    {
        path: '/negado',
        name: '403',
        component: () => import(/* webpackChunkName: "Negado" */ '../pages/Negado')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Guardian (proteger la ruta bajo un criterio)
router.beforeEach((to, from, next) => {
    console.log({to, from, next});
    const random = Math.random() * 10
    if(random > 5) {
        console.log("Autorizado");
        next()
    } else {
        console.log("No Autorizado");
        next({name: '403'})
    }
    // para darle el paso al recurso que quiere
    //next({name: '403'})
})

export default router