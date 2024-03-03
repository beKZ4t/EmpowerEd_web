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
          <p style="color: black; margin-left: 180px" @click="closeLogin">Close</p>
          </div>
        <p>Join us and get more benefits. We promise to keep your data safely. </p>
        <input style="margin-bottom: 8px; margin-top: 24px" type="email" placeholder="Email Address">
        <input style="margin-bottom: 16px;" type="password" placeholder="Password">
        <button class="login_button" type="button">Login</button>
        <p class="or">or you can</p>
        <button class="button_face" type="button"><img src="@/assets/images/Facebok.png" height="21px"> Continue with Facebook</button>
        <button class="button_app" type="button"><img src="@/assets/images/Apple.png" height="21px">Continue with Apple</button>
        <button class="button_google" type="button"><img src="@/assets/images/Google.png" height="21px">Continue with Google</button>
        <p class="need"> Need an Account? <a href=" " style="color: #3DCBB1">Sign Up</a></p>


      </div>    </div>
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



.close{
  display: flex;
  justify-content: space-between;
  width: 352px;
}

.need{
  text-align: center;
}
.button_face{
  width: 352px;
  height: 41px;
  border-radius: 14px;
  background-color: #4267B2;
  color: #FFFFFF;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 16px;
  border: none;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.button_app{
  width: 352px;
  height: 41px;
  border-radius: 14px;
  background-color: #1B1B1B;
  color: #FFFFFF;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 16px;
  border: none;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button_google{
  width: 352px;
  height: 41px;
  border-radius: 14px;
  color: #1B1B1B;
  font-family: "Ubuntu-bold", sytem ui;
  background-color: #FFFFFF;
  font-size: 16px;
  border: 1px solid rgba(27, 27, 27, 0.1);
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.or{
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;
  color: black;
  display: flex;
  justify-content: end;
  margin-bottom: 16px;
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
}
.right_side input{
  width: 352px;
  height: 41px;
  border-radius: 3px;
  border: none;
  background-color: rgba(249, 249, 249, 0.9);
}
.right_side input:focus{
  border: none;
  outline: none;
}
.right_side p{
  margin-top: 13px;
}
.right_side{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  line-height: 24px;
  color: rgba(27, 27, 27, 0.6);
  width: 352px;
  height: 509px;
  padding-bottom: 21px;
  padding-right: 24px;
  padding-top: 20px;
  padding-left: 24px;
}
.logo{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Ubuntu-bold", sytem ui;
  width: 135px;
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
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 750px;
}

</style>