<template>
  <section class="container">
    <form @submit="connection">
      <label>Email :</label>
      <br />
      <input v-model="email" placeholder="galaEclyps" />
      <br />
      <br />
      <label>Mot de passe :</label>
      <br />
      <input type="password" v-model="password" placeholder="galaEclyps" />
      <br />
      <br />
      <button type="submit">Se connecter</button>
    </form>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  mounted() {
      console.log(this.$store.state)
  },
  methods: {
      
    async connection() {
      const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/user`, {
        email: this.email,
        password: this.password
      });
      this.$store.commit("login", data);
      console.log(this.$store.state);
        this.$router.push("/space-personnal");
    }
  }
};
</script>