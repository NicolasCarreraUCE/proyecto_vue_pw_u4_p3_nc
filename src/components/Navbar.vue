<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/actualizar">Actualizar</router-link>
      <router-link to="/buscar/10">Buscar</router-link>
      <router-link to="/insertar">Insertar</router-link>
      <router-link to="/eliminar">Eliminar</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
nav a{
  color: blue;
  margin: auto 15px;
}
</style>