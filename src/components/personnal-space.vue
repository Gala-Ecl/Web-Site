<template>
  <section>
    <h1>Espace Personnel</h1>
    <p>Prénom : {{firstName}}</p>
    <p>Nom : {{lastName}}</p>
    <p>Email : {{email}}</p>
    <p v-if="status=='admin'">Status : {{status}}</p>
    <br/>
    <button @click="$router.push('/party')">La soirée</button>
  </section>
</template>
<script>
export default {
  data() {
    const { firstName, lastName, email, privilege } = this.$store.state;
    return { firstName, lastName, email, status:privilege };
  },
};
</script>