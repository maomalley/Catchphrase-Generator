<script setup>
//import './components/styles.css';
import './assets/grass-textures/cf-1.png';
import './assets/FinkHeavy.ttf';

// const nav = ["catchphrases", "greetings", "about", "contact"];
// const nav = {
//   path: '/home',
//       name: 'Home',
//     component:
// };
</script>

<template>

  <nav class="font-effect-3d-float">
    <router-link to="/">Catchphrase Generator</router-link>
    <router-link to="/greetings">Greetings Generator</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <div class="wrapper">
    <div class="text-box">
      <router-view/>
    </div>

  </div>
</template>

<style scoped>
/*@font-face {*/
/*  font-family: JuneBug;*/
/*  src: url('assets/FinkHeavy.ttf');*/
/*}*/

/** {*/
/*  font-family: JuneBug,fantasy;*/
/*}*/

@media (min-width: 1024px) {
  /*header {*/
  /*  display: flex;*/
  /*  place-items: center;*/
  /*  padding-right: calc(var(--section-gap) / 2);*/
  /*}*/
  /*header .wrapper {*/
  /*  display: flex;*/
  /*  place-items: flex-start;*/
  /*  flex-wrap: wrap;*/
  /*}*/
}
</style>
