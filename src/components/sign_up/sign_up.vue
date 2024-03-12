<template>
  <div class="signup-container">
    <div class="signup-content-container">
      <div class="left_side">
        <img src="@/assets/images/images_login.png" height="550px">
      </div>
      <div class="right_side">
        <div class="logo">
          <img height="43px" src="@/assets/images/logo.png">
          <p>EmpowerED</p>
          <p style="color: black; margin-left: 180px" @click="closeSignUp">Close</p>
        </div>
        <div class="Login_text">
          <p class="text">Sign up</p>
          <p class="join">Join us and get more benefits. We promise to keep your data safely. </p>
        </div>
        <div>
          <input style="margin-bottom: 16px; margin-top: 24px" type="email" placeholder="Email Address">
        </div>
        <div>
          <input style="margin-bottom: 16px;" type="text" placeholder="Phone number" v-mask="'+7 ' + '(###) ###-##-##'" >
        </div>
        <div>
          <input style="margin-bottom: 16px;" type="password" placeholder="Password">
        </div>
        <div>
          <input style="margin-bottom: 16px;" type="text" placeholder="Confirm password">
        </div>



        <button class="login_button" type="button">Create Account</button>
        <p class="need"> Have an account?  <a href="#" style="color: #3DCBB1">Login</a></p>


      </div>
    </div>
  </div>
</template>

<script>

import App from "@/App.vue";

export default {
  name: 'sign_up-component',
  methods: {
    closeSignUp() {
      App.methods.closeSignUp();
    }
  }
}
</script>

<style scoped>
.Login_text .text{
  color: black;
  font-size: 22px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-top: 20px;
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
.signup-container {
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 100;
  height: 120%;
  margin-top: -30px;
  position: fixed;
  cursor: pointer;
}
.left_side {
  flex: 2;
}
.signup-content-container {
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


@media screen and (max-width: 1200px) {
  .left_side{
    display: none;
  }
  .right_side {
    text-align: center;
    width: 100%;
  }
  .signup-content-container {
    width: 90%;
    display: block;
  }

}

</style>