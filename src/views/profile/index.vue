<template>
  <header-component />
  <div class="main">
  <div class="block">
    <div class="in_block">
      <img src="@/assets/images/Ellipse%202047.png" class="block_img">
      <p class="name">Darkhan Yermakhan</p>
      <p class="under_name">Senior UI/UX Designer</p>
      <div class="last_info">
        <div class="left_side">
          <p class="number">5</p>
          <p class="under_number">Courses</p>
        </div>
        <div class="center">
          <p class="number">17</p>
          <p class="under_number">Students</p>
        </div>
        <div class="right_side">
          <p class="number">5</p>
          <p class="under_number">Reviews</p>
        </div>
      </div>

    </div>


  </div>


  </div>
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
.main{
  max-width: 90%;
  margin: 0 auto;
}
.block{
  height: 254px;
  width: 40%;
  margin: 0 auto;
  margin-top: 114px;
  background-color: #5e94ff;
  border-radius: 24px;
}
.block_img{
  width: 72px;
  margin-top: 16px;
}
.in_block{
  text-align: center;
}
.name{
  margin-top: 15px;
}
.under_name{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 12px;
  color: #697B7A;
  margin-bottom: 16px;
}
.last_info{
  margin: 0 auto;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 880px) {

}




</style>