<template>
  <div class="login-container">
    <div class="login-content-container">

    </div>
  </div>
</template>

<script>

import App from "@/App.vue";

export default {
  name: 'login-component',
  methods: {
    closeLogin() {
      App.methods.closeLogin();
    }
  }
}
</script>

<style scoped>
.login-container {
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 100;
  height: 120%;
  margin-top: -30px;
  position: fixed;
  cursor: pointer;
}
.login-content-container {
  background: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: 60%;
  height: 40%;
  border-radius: 10px;
}
</style>