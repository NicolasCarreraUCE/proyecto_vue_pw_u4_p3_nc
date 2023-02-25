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
        //component: Inicio
        component: () => import(/* webpackChunkName: "Inicio" */ '../pages/Inicio')
    },
    {
        path: '/actualizar',
        //component: Actualizar
        component: () => import(/* webpackChunkName: "Actualizar" */ '../pages/Actualizar')
    },
    {
        path: '/buscar',
        //component: Buscar
        component: () => import(/* webpackChunkName: "Buscar" */ '../pages/Buscar')
    },
    {
        path: '/eliminar',
        //component: Eliminar
        component: () => import(/* webpackChunkName: "Eliminar" */ '../pages/Eliminar')
    },
    {
        path: '/insertar',
        //component: Insertar
        component: () => import(/* webpackChunkName: "Insertar" */ '../pages/Insertar')
    },
    {
        path: '/:pathMatch(.*)*',
        //component: Error
        component: () => import(/* webpackChunkName: "NoFound" */ '../pages/NoFound')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router