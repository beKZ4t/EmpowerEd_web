<template>
  <div id="overlay-login-container" class="hide-container">
    <login-component />

  </div>
  <div id="overlay_signup_container" class="hide-container">
    <sign_up-component></sign_up-component>
  </div>
  <router-view />
</template>

<script>

import LoginComponent from "@/components/login/login.vue";
import Sign_upComponent from "@/components/sign_up/sign_up.vue";

export default {
  name: 'App',
  components: {Sign_upComponent, LoginComponent},
  methods: {
    openLogin() {
      document.getElementById("overlay-login-container").classList.remove("hide-container")
      document.getElementById("overlay-login-container").classList.add("show-container")
    },
    closeLogin() {
      document.getElementById("overlay-login-container").classList.remove("show-container")
      document.getElementById("overlay-login-container").classList.add("hide-container")
    },
     openSignup(){
   document.getElementById("overlay-signup-container").classList.remove("hide-container")
    document.getElementById("overlay-signup-container").classList.add("show-container")
  },
   closeSignUp(){
   document.getElementById("overlay-signup-container").classList.remove("hide-container")
   document.getElementById("overlay-signup-container").classList.add("show-container")
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