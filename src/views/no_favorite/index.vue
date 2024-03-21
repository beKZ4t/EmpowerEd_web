<template>
  <navbar_for_login-component />
  <div class="main">

    <div class="list_navbar">
      <h2>No Favorite</h2>
    </div>
    <div class="center">
      <img class="no_fav_icon" src="@/assets/images/no_favorite.png">
      <h2>No favorite yet! </h2>
      <h3>Any item you favorite will appear here</h3>
      <div class="button" @click="this.$router.push('/buying')">Explore Course</div>


    </div>
  </div>

</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";
import Search_lastComponent from "@/components/home/search_last.vue";
import Header_textComponent from "@/components/home/header_text.vue";
import About_textComponent from "@/components/home/about_text.vue";
import Blue_textComponent from "@/components/home/blue_text.vue";
import NavbarComponent from "@/components/navbar/navbar.vue";
import Navbar_for_loginComponent from "@/components/navbar_second/navbar_for_login.vue";
import buying_second from "@/views/buying_second/index.vue";



export default {
  name: "index",
  computed: {
    buying_second() {
      return buying_second
    }
  },
  components: {
    Navbar_for_loginComponent,
    NavbarComponent,
    Blue_textComponent,
    About_textComponent, Header_textComponent, Search_lastComponent,
    Type_courseComponent,
    FooterBlockComponent, HeaderComponent},


}
</script>

<style scoped>
.no_fav_icon{
  height: 205px;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-wrap: wrap;
  flex-direction: column;
}
.list_navbar{
  text-align: center;
  font-family: "Ubuntu-bold", sytem ui;
}
a{
  text-decoration: none;
  color: black;
  margin-top: 10px;
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 14px;
}

h2{
  font-family: "Ubuntu-bold", sytem ui;
}
h3{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  color: rgba(27, 27, 27, 0.6);
}
.button{
  padding: 12px;
  border-radius: 12px;
  background-color: #266de8;
  color: white;
  cursor: pointer;
}
.main{
  max-width: 90%;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 880px) {

}




</style>