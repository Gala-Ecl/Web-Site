<template>
  <section class="container">
    <label>Email :</label>
    <br />
    <input v-model="email" placeholder="galaEclyps" />
    <br />
    <label>Mot de passe :</label>
    <br />
    <input type="password" v-model="password" placeholder="galaEclyps" />
    <br />
    <button @click="connection">Se connecter</button>
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
  methods: {
    async connection() {
      console.log({ email: this.email, password: this.password.toString() });
      const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/user`, {
        email: this.email,
        password: this.password.toString()
      });
      if (data) {
        this.$store.commit("login", data);
        this.$router.push("/space-personnal");
      }
    }
  }
};
</script>