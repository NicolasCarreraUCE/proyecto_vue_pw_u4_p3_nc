<template>
  <h1>Buscar pod cedula</h1>
  <input type="text" v-model="cedula">
  <button @click="consultarCliente">Buscar</button>
  <button @click="insertar">Insertar</button>
</template>

<script >
import {insertarFachada, obtenerPorCedulaFachada} from "../js/api_facturacion/ProcesarCliente.js"
export default {
    data() {
        return {
            cedula: ''
        }
    },
    methods: {
        consultarCliente() {
            obtenerPorCedulaFachada(this.cedula)
        },
        insertar() {
            const miCliente = {
                nombre:"Cliente 5",
                apellido:"Apellido 5",
                cedula:"005",
                fechaNacimiento:"2023-01-01T00:00:00",
                genero:"M",
                email:"aaa"
            }
            console.log(miCliente);
            insertarFachada(miCliente)
        }
    }
}
</script>

<style>

</style>