<template>
  <section>
    <section class="section-bandeau">
    </section>
  <section class="container-form">
    <h1> Veuillez vous connecter </h1>
    <p> Vous avez déjà un compte Gala Eclyps </p>
    <div class="field">
      <br />
      <input v-model="email" id="email" name="email" required/>
      <span>Email</span>
      <br />
    </div>
    <div class="field">
      <input type="password" v-model="password" required/>
      <span>Mot de passe</span>
      <br />
    </div>
    <button @click="connection">Se connecter</button>
    <br />
  </section>
  <section class="container-form">
    <p> Vous n'avez pas encore de compte ? </p>
    <button @click="connection">S'inscrire <i class="mdi mdi-chevron-down" /></button>
  </section>
  <section class="container-form">
      <h1> Veuillez créer votre compte </h1>
    <div class="field">
      <input v-model="email" id="email" name="email" required/>
      <span>Email</span>
      <br />
    </div>
    <div class="field">
      <input type="password" v-model="password" required/>
      <span>Mot de passe</span>
      <br />
    </div>
    <button @click="connection">Se connecter</button>    
  </section>
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