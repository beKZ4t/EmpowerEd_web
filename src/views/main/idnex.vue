<template>
  <div class="main">
    <div class="navbar">
      <div class="logo_text">
        <img  src="@/assets/images/logo.png">
        <div class="name_log">EmpowerED</div>
      </div>
      <div class="browse">
        <p>Browse</p>
        <img src="@/assets/images/down.png">
      </div>
      <div class="navbar_search">
      <input type="search" placeholder="Search for course">
<!--      <img class="icon_search" src="@/assets/images/Search.png">-->
      </div>
      <p>Become Instructor</p>
      <div class="login-button">Login</div>
      <div class="signup-button">Sign up</div>

    </div>

  </div>




<!--  <footer-component></footer-component>-->




</template>


<script>





import FooterComponent from "@/components/footer/footer.vue";
import App from "@/App.vue";

export default {
  name: "index",
  components: {FooterComponent},
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    openLogin() {
      App.methods.openLogin();
    }
  }

}
</script>

<style scoped>
@media screen and (min-width: 1440px) {
  .login-button{
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-top: 12px;
    border:1px solid black;
    border-radius: 12px;
  }
  .signup-button{
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-top: 12px;
    border:1px solid black;
    border-radius: 12px;
    color: white;border: none;
    background-color: #1365E1;
  }
  .navbar_search{
    display: flex;
    align-items: center;

  }
input{
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 507px;
  border-radius: 10px;
  background-color: rgba(249, 249, 249, 0.9);
  font-size: 16px;
  border: none;
  background: url("@/assets/images/Search.png") no-repeat right center;
  background-size: auto 80%;
}
input:focus{
  border: none;
  outline: none;
}
 .main{
   width: 85%;
   margin: 0 auto;
   height: 100%;
   font-size: 14px;
   font-family: "Ubuntu-regular", sytem ui;
   color: #1B1B1B;
 }

  .logo_text img{
    width: 25%;

  }
  .logo_text{
    display: flex;
    align-items: center;
    font-size:18px;
    color: black;
    font-family: "Ubuntu-bold", sytem ui;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding-top: 19px;
    padding-bottom: 46px;
    padding-left: 116px;
    padding-right: 116px;
    margin: 0 auto;
  }
  .browse{
    display: flex;
    width: 5%;
    justify-content: space-between;
    align-items: center;
  }
  .browse img{
    width: 50%;
  }


}
@media screen and (max-width: 1440px) and (min-width: 821px) {
  .login-button{
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    border:1px solid black;
    border-radius: 10px;
  }
  .signup-button{
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    border:1px solid black;
    border-radius: 10px;
    color: white;
    border: none;
    background-color: #1365E1;
  }
  .navbar_search{
    display: flex;
    align-items: center;

  }
  input{
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 300px;
    border-radius: 10px;
    background-color: rgba(249, 249, 249, 0.9);
    font-size: 16px;
    border: none;
    background: url("@/assets/images/Search.png") no-repeat right center;
    background-size: auto 80%;
  }
  input:focus{
    border: none;
    outline: none;
  }
  .main{
    width: 85%;
    margin: 0 auto;
    height: 100%;
    font-size: 12px;
    font-family: "Ubuntu-regular", sytem ui;
    color: #1B1B1B;
  }

  .logo_text img{
    width: 25%;

  }
  .logo_text{
    display: flex;
    align-items: center;
    font-size:18px;
    color: black;
    font-family: "Ubuntu-bold", sytem ui;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding-top: 19px;
    padding-bottom: 46px;
    padding-left: 116px;
    padding-right: 116px;
    margin: 0 auto;
  }
  .browse{
    display: flex;
    width: 5%;
    justify-content: space-between;
    align-items: center;
  }
  .browse img{
    width: 50%;
  }
}

@media screen and (max-width: 820px) {


}


</style>