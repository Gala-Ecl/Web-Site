<template>
  <nav>
    <div class="toggle">
      <i class="mdi mdi-menu" />
    </div>
    <ul class="nav-line-1">
      <li>
         <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/party">Journée</router-link>
      </li>
      <li>
        <router-link to="/party">Dîner</router-link>
      </li>
      <li>
        <router-link to="/party">Soirée</router-link>
      </li>
      <li>
        <router-link to="/party">Infos</router-link>
      </li>
      <li>
        <router-link to="/party">Partenaires</router-link>
      </li>
    </ul>
    <ul class="nav-line-2" v-if="$store.state.authenticated">
      <li>
        <router-link to="/space-personnal">Espace personnel</router-link>
      </li>
    </ul>
    <div class="topple">
      <router-link to="/login"><i class="mdi mdi-account-check" /></router-link>
      <router-link to="/login"><i class="mdi mdi-linkedin" /></router-link>
      <router-link to="/login"><i class="mdi mdi-facebook" /></router-link>
    </div>  
  </nav>
</template>

<script>
export default {
};
</script>

<style>
</style>