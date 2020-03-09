<template>
  <div class="login">
    <navbar />
    <h1>Market</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
export default {
  components: {
    navbar: Navbar
  }
};
</script>

<style>
.home {
  height: 100vh;
  background-image: url("../assets/background/pagina_inicial.jpg");
}
</style>
