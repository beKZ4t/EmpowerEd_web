<template>
  <div class="outer-container">
    <div class="main-container flex-container">
      <img class="logo-image" src="@/assets/images/logo.png">
      <p class="app-name">EmpowerED</p>
      <div class="search-container">
        <input type="text" placeholder="Search for course">
        <img src="@/assets/images/Search.png">
      </div>
      <div class="space-container"></div>
      <div class="login-button"  @click="openLogin">Login</div>
      <div class="register-button">Sign Up</div>
    </div>
  </div>
</template>

<script>


import App from "@/App.vue";

export default {
  name: "header-component",
  methods: {
    openLogin() {
      App.methods.openLogin();
    }
  }
}
</script>

<style scoped>
.outer-container {
  margin-top: 20px;
  width: 90%;
  border-radius: 20px;
  margin-left: 5%;
  background: white;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 2px 8px 0px rgba(10, 10, 10, 0.1);
}
.space-container {
  flex: auto;
}
.main-container {
  width: 90%;
  margin-left: 5%;
}
.login-button {
  color: #1B1B1BE5;
  border: 1px solid #1B1B1BE5;
  border-radius: 10px;
  font-size: 14px;
  font-family: Ubuntu-bold, system-ui;
  padding: 12px 24px;
  cursor: pointer;
}
.register-button {
  margin-left: 20px;
  background: #1365E1;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 12px 24px;
  font-family: Ubuntu-bold, system-ui;
  cursor: pointer;
}
.logo-image {
  height: 43px;
}
.app-name {
  margin-left: 10px;
  color: black;
  font-size: 18px;
  font-family: Ubuntu-bold, system-ui;
}
.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
}
.search-container {
  margin-left: 24px;
  border-radius: 10px;
  padding-right: 12px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  background: #F9F9F9;
}
.search-container>input {
  padding: 8px 12px;
  width: 500px;
  background: transparent;
  color: black;
  font-size: 16px;
  border: none;
  font-family: Ubuntu-regular, system-ui;
}
input:focus {
  outline: none;
}
.search-container>img {
  height: 21px;
}
::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 1200px) {
  .space-container {
    min-width: 20px;
    flex: 1;
  }
  .search-container {
    flex: auto;
  }
  .search-container>input {
    flex: auto;
    width: auto;
  }
}
@media screen and (max-width: 880px) {
  .main-container, .outer-container {
    width: 96%;
    margin-left: 2%;
  }
}
</style>