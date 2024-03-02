<template>
  <div id="overlay-login-container" class="hide-container">
    <login-component />
  </div>
  <router-view />
</template>

<script>

import LoginComponent from "@/components/login/login.vue";

export default {
  name: 'App',
  components: {LoginComponent},
  methods: {
    openLogin() {
      document.getElementById("overlay-login-container").classList.remove("hide-container")
      document.getElementById("overlay-login-container").classList.add("show-container")
    },
    closeLogin() {
      document.getElementById("overlay-login-container").classList.remove("show-container")
      document.getElementById("overlay-login-container").classList.add("hide-container")
    }
  }
}
</script>

<style>
@import "@/assets/fonts/Ubuntu.css";

.hide-container {
  display: none;
}
.show-container {
  display: block;
}

body, html {
  margin: 0;
  padding: 0;

}
p {
  margin: 0;
  padding: 0;
}

</style>

<style scoped>
</style>