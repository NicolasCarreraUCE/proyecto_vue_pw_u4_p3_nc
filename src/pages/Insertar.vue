<template>
  <h1>Insertar</h1>
</template>

<script>
export default {
  mounted() {
    console.log("Entro a la pagina insertar");
    console.log(this.$route);
    console.log(this.$route.query);
    console.log(this.$route.query.ciudad);
    console.log(this.$route.query.edad);
  }
}
</script>

<style>

</style>