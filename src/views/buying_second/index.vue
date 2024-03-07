<template>
  <header-component />
  <type_course-component />
  <div class="main">
    <div class="block">
      <img class="left_image" src="@/assets/images/admission.png" >

      <div class="price_block">
        <div class="first">US$22.40 <s>$30.13</s></div>
        <p class="percent">20% OFF</p>
        <div class="button_buy">Buy</div>
        <div class="button_wishlist"><img style="margin-right: 8px;" src="@/assets/images/like.png" >Wishlist</div>
        <p class="under"><img  src="@/assets/images/list_24px.png" >22 Section </p>
        <p class="under"><img  src="@/assets/images/book24px.png" >152 Lectures</p>
        <p class="under"><img src="@/assets/images/tv_24px.png" >21h 33m total lenghts</p>
        <p class="under"><img  src="@/assets/images/volume24px.png">English</p>
      </div>
    </div>
  </div>
  <blue_text-component />

  <hr>

  <div class="about_text">
    <h2>About Course</h2>
    <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>

  </div>


  <search_last-component />

  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";
import Search_lastComponent from "@/components/home/search_last.vue";
import Header_textComponent from "@/components/home/header_text.vue";
import About_textComponent from "@/components/home/about_text.vue";
import Blue_textComponent from "@/components/home/blue_text.vue";



export default {
  name: "index",
  components: {
    Blue_textComponent,
    About_textComponent, Header_textComponent, Search_lastComponent,
    Type_courseComponent,
     FooterBlockComponent, HeaderComponent},


}
</script>

<style scoped>
.first{
  font-size: 24px;
  font-family: "Ubuntu-bold", sytem ui;

}
.percent{
  height: 29px;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A04AE3;
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  color: #FFFFFF;
  border-radius: 2px;
  margin-bottom: 32px;
  margin-top: 8px;
}
.first s{
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  color: rgba(27, 27, 27, 0.6);
  margin-left: 37px;
}
.price_block{
  padding: 24px 23px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);
}
.main{
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  height: 426px;
}
.left_image{
  height: 324px;
  max-width: 100%;
}
.block{
  padding-left: 5%;
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
}
.under img{
  margin-right: 10px;
  height:24px;
}
.under{
  display: flex;
  align-items: center;
  font-family: Ubuntu-regular, system-ui;
  font-size: 16px;
  margin-bottom: 14px;
}
.button_buy{
  padding: 12px 142px;
  background-color: #1365E1;
  border-radius: 12px;
  color: #FFFFFF;
  font-family: Ubuntu-bold, system-ui;
  font-size: 20px;
  margin-bottom: 16px;
  cursor: pointer;
}
.button_wishlist img{
  height: 26px;
  max-width: 100%;
}
.button_wishlist{
  padding: 12px 105px;
  background-color: #FFFFFF;
  color: rgba(27, 27, 27, 0.6);
  font-size: 20px;
  font-family: Ubuntu-bold, system-ui;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(27, 27, 27, 0.6);
  margin-bottom: 24px;
  cursor: pointer;
}
hr{
  width: 50%;
  margin-left: 10%;
  margin-top: 50px;
  background-color: #1B1B1B;
}
.about_text{
  width: 39%;
  margin-left: 10%;
  margin-bottom: 116px;
}
h2{
  font-size: 16px;
  font-family: Ubuntu-bold, system-ui;
  color: black;
}
.about_text p{
  color: rgba(27, 27, 27, 0.6);
  font-family: Ubuntu-regular, system-ui;
  font-size: 16px;
}

@media screen and (max-width: 1200px) {
.block{
  display: flex;

}
}
@media screen and (max-width: 880px) {

}




</style>