<template>
  <div>
    <a>
      <router-link to="/">Home</router-link>
    </a>
    <a>
      <router-link to="/login">Login</router-link>
    </a>
    <a v-if="store.state.authenticated">
      <router-link to="/space-personnal">Espace personnel</router-link>
    </a>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>