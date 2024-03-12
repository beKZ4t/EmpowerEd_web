<template>
  <div class="login-container">
    <div class="login-content-container">
      <div class="left_side">
        <img src="@/assets/images/images_login.png" height="550px">
      </div>
      <div class="right_side">
        <div class="logo">
          <img height="43px" src="@/assets/images/logo.png">
          <p>EmpowerED</p>
          <div style="flex: auto; text-align: end">
            <p style="color: black;" @click="closeLogin">Close</p>
          </div>
        </div>
        <div class="Login_text">
          <p class="text">Login</p>
          <p class="join">Join us and get more benefits. We promise to keep your data safely. </p>
        </div>
        <div>
          <input style="margin-bottom: 8px; margin-top: 24px" type="email" placeholder="Email Address">
        </div>
        <div>
          <input style="margin-bottom: 16px;" type="password" placeholder="Password">
        </div>
        <button class="login_button" type="button" @click="dologin">Login</button>
        <p class="need"> Need an Account? <a href=" " style="color: #3DCBB1; cursor: pointer" @click="this.$router.push('/profile')">Sign Up</a></p>
      </div>
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
    },
    dologin(){
      this.$router.push('/profile');
      this.closeLogin();
    }
  }
}
</script>

<style scoped>

.Login_text .text{
  color: black;
  font-size: 22px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-top: 70px;
}
.join{
  color: rgba(27, 27, 27, 0.6);
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
}
.Login_text{
  margin: 0 auto;
  text-align: center;
}
.need{
  text-align: center;
}

.login_button{
  width: 352px;
  height: 41px;
  background-color: #3DCBB1;
  border: none;
  color: #FFFFFF;
  border-radius: 14px;
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  cursor: pointer;
}
.right_side input{
  width: 352px;
  height: 41px;
  border-radius: 3px;
  border: none;
  background-color: rgba(249, 249, 249, 0.9);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.right_side input:focus{
  border: none;
  outline: none;
}
.right_side p{
  margin-top: 13px;
}
.right_side {
  flex: 1;
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  line-height: 24px;
  color: rgba(27, 27, 27, 0.6);
  padding: 20px 24px 21px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.left_side {
  flex: 2;
}
.logo{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Ubuntu-bold", sytem ui;
  width: 100%;
  justify-content: space-between;
  color: black;
}
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
  width: 1150px;
  height: 550px;
  border-radius: 10px;
  display: flex;
}
.left_side img{
  width: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
input::placeholder{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
}
input{
  padding-left: 12px;
}
@media screen and (max-width: 1200px) {
.left_side{
  display: none;
}
.right_side {
  text-align: center;
  width: 100%;
}
.login-content-container {
  width: 90%;
  display: block;
}

}
</style>