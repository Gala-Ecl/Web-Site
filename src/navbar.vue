<template>
  <nav>
    <div class="toggle" @click="toggleClicked=!toggleClicked">
      <i class="mdi mdi-menu" />
    </div>
    <ul class="nav-line-1" :class="{'menu-shown':toggleClicked}">
      <li  @click="toggleClicked=false" :class='{active:$route.name=="home"}' >
         <router-link to="/">Accueil</router-link>
      </li>
      <li @click="toggleClicked=false"  :class='{active:$route.name=="party"}'>
        <router-link to="/party">Journée</router-link>
      </li>
      <li @click="toggleClicked=false"  :class='{active:$route.name=="diner"}'>
        <router-link to="/diner">Dîner</router-link>
      </li>
      <li @click="toggleClicked=false"  :class='{active:$route.name=="party"}'>
        <router-link to="/party">Soirée</router-link>
      </li>
      <li @click="toggleClicked=false"  :class='{active:$route.name=="party"}'>
        <router-link to="/party">Infos</router-link>
      </li>
      <li @click="toggleClicked=false"  :class='{active:$route.name=="login"}'>
        <router-link to="/party">Partenaires</router-link>
      </li>
    </ul>
    <ul class="nav-line-2" :class="{'menu-shown':toggleClicked}" v-if="$store.state.authenticated">
      <li :class='{active:$route.name=="login"}'>
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
  data() { 
    return {
      toggleClicked : false
    }
  }
};
</script>

<style>
</style>