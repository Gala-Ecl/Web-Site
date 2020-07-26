<template>
  <section>
    <section class="section-bandeau"></section>
    <section class="container-form">
      <h1>Veuillez vous connecter</h1>
      <h2>Vous avez déjà un compte Gala Eclyps</h2>
      <div class="field">
        <br />
        <input v-model="email" id="email" name="email" required />
        <span>Email</span>
        <br />
      </div>
      <div class="field">
        <input type="password" v-model="password" required />
        <span>Mot de passe</span>
        <br />
      </div>
      <button @click="connection">Se connecter</button>
      <br />
      <a href=/party>Mot de passe oublié ?</a>
    </section>
    <section class="container-form">
      <h2>Vous n'avez pas encore de compte ?</h2>
      <button @click="signUpShown=!signUpShown; scrollDown();">
        S'inscrire
        <i v-if="!signUpShown" class="mdi mdi-chevron-down" />
        <i v-if="signUpShown" class="mdi mdi-chevron-up" />
      </button>
    </section>
    <section v-if="signUpShown" id="sign-up" class="container-form">
      <h1>Veuillez créer votre compte</h1>
      <div class="field">
        <input v-model="newName" id="name" name="name" required />
        <span>Nom</span>
        <br />
      </div>
      <div class="field">
        <input v-model="newFirstname" id="firstname" name="firstname" required />
        <span>Prénom</span>
        <br />
      </div>
      <div class="field">
        <input v-model="newEmail" id="email" name="email" required />
        <span>Email</span>
        <br />
      </div>
      <div class="field">
        <input type="password" v-model="newPassword" required />
        <span>Mot de passe</span>
        <br />
      </div>
      <div class="field">
        <input type="password" :class="{'error-password':!samePassword}" v-model="passwordConfirmation" required />
        <span>Confirmer mdp</span>
        <br />
      </div>
      <div class="field">
        <label for="sign-up-select">Promotion</label>
        <div class="select-container">
          <select id="sign-up-select" name="nom" size="1">
            <option>Etudiant à l'ECL</option>
            <option>Diplômé 2020</option>
            <option>Ancien diplômé</option>
          </select>
        </div>
        <br />
      </div>
      <button @click="connection">S'inscrire</button>
    </section>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null,
      newEmail: null,
      newPassword: null,
      passwordConfirmation: null,
      signUpShown: false,
      samePassword: true
    };
  },
  mounted() {
    setInterval(() => {
      if (this.passwordConfirmation && this.passwordConfirmation != this.newPassword)
        this.samePassword = false;
      else this.samePassword = true;
    }, 100);
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
    },
    scrollDown() {
      setTimeout(() => {
        window.scrollTo(0, document.getElementById("sign-up").scrollHeight);
      }, 10);
    }
  }
};
</script>