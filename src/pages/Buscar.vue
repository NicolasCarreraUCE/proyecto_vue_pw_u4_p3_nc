<template>
  <h1>Buscar</h1>
  <p>{{ id }}</p>
  <p>{{ id2 }}</p>
  <div class="form-floating">
    <textarea
      class="form-control mb-5"
      placeholder="Leave a comment here"
      id="floatingTextarea"></textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
  <button class="btn btn-outline-primary" @click="prosecarGuardado">
    Procesar
  </button>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      id2: this.$route.params.idCliente,
    };
  },
  mounted() {
    console.log("Entro a la pagina buscar");
    console.log(this.$route);
    console.log(this.$route.params);
    const { idCliente } = this.$route.params;
    console.log(idCliente);
    this.id = idCliente;

    console.log("La provincia es:");
    console.log(this.$route.query.provincia);
  },
  methods: {
    prosecarGuardado() {
      console.log("procesando informacion");
    },
  },
};
</script>

<style>
</style>