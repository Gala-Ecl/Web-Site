<template>
  <section>
    <h1>Espace Personnel</h1>
    <p>Prénom : {{firstName}}</p>
    <p>Nom : {{lastName}}</p>
    <p>Email : {{email}}</p>
  </section>
</template>
<script>
export default {
  data() {
    const { firstName, lastName, email } = this.$store.state;
    return { firstName, lastName, email };
  }
};
</script>