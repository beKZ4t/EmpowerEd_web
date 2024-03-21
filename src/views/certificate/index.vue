<template>
  <navbar_for_login-component />
  <div class="main">

    <div class="list_navbar">
      <div class="back_arrow" style="cursor: pointer" @click="goBack"><img src="@/assets/images/back_arrow.png" class="back_img"> </div>
      <p class="name_cer">Certificate</p>
    </div>
    <div class="course">
      <div class="item first" @click="this.$router.push('/paind')">
        <div class="display">
          <img src="@/assets/images/1courseimg.png" class="first_img">
          <div class="text">
            <p class="name_course">Basic UI/UX Designer</p>
            <p class="author">Azamat Baimatov</p>
            <p class="yellow">Completed!</p>
            <div class="button" @click="this.$router.push('/show_certificate')">See Certificate</div>

          </div>
        </div>
      </div>

      <div class="item second" @click="this.$router.push('/paind')">
        <div class="display">
          <img src="@/assets/images/1courseimg.png" class="first_img">
          <div class="text">
            <p class="name_course">Basic UI/UX Designer</p>
            <p class="author">Azamat Baimatov</p>
            <p class="yellow">Completed!</p>
            <div class="button">See Certificate</div>

          </div>
        </div>
      </div>
      <div class="item third" @click="this.$router.push('/paind')">
        <div class="display">
          <img src="@/assets/images/1courseimg.png" class="first_img">
          <div class="text">
            <p class="name_course">Basic UI/UX Designer</p>
            <p class="author">Azamat Baimatov</p>
            <p class="yellow">Completed!</p>
            <div class="button">See Certificate</div>
          </div>
        </div>
      </div>

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



export default {
  name: "index",
  methods:{
    goBack(){
      this.$router.go(-1);
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
.list_navbar{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.name_cer{
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 22px;
  margin-left: auto;
  margin-right: auto;
}
.back_img{
  height: 42px;
  margin-right: auto;
}
.yellow{
  color: #F2C94C;
}
.button{
  background-color: #266de8;
  padding: 5px;
  text-align: center;
  color: white;
  font-family: "Ubuntu-regular", sytem ui;
  margin-top: 5px;
  border-radius: 12px;
}
.first{
  margin-right: 5px;
}
.second{
  margin-left: 5px;
  margin-right: 5px;
}
.third{
  margin-left: 5px;
}
.stars{
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon{
  height: 24px;
}
.stars span{
  color: rgba(0, 0, 0, 0.45);
}

.price{
  font-size: 14px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-bottom: 10px;
}
.price s{
  color: rgba(0, 0, 0, 0.45);
  font-size: 13px;
  font-family: "Ubuntu-regular", sytem ui;

}
.display{
  display: flex;
  align-items: center;
  justify-content: center;
}
.name_course{
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  margin-bottom: 5px;
}
.author{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 5px;
}
.img_star{
  height: 12px;
}
.first_img{
  width: 86px;
  margin-right: 6px;
}
.text{
  margin-left: 6px;
}
.item{
  flex: 1;
  padding: 12px 80px 12px 12px;
  border-radius: 16px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

.course{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 20px;
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


.main{
  max-width: 90%;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 880px) {

}




</style>