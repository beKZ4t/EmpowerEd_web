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
 .main{
   width: 85%;
   margin: 0 auto;
   height: 100%;
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
    align-items: center;
  }
  .browse{
    display: flex;
    width: 5%;
    justify-content: space-between;
  }
  .browse img{
    width: 18%;
  }


}
@media screen and (max-width: 1440px) and (min-width: 821px) {

}

@media screen and (max-width: 820px) {


}


</style>