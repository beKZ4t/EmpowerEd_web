<template>
 <navbar-component></navbar-component>
  <list_course-component></list_course-component>
  <div class="main">
    <div class="container">
      <div class="left">
        <img src="@/assets/images/admission.png" height="324px">
        <p>VUE JS SCRATCH COURSE</p>
      </div>
      <div class="right">
        <div class="first">US$22.40 <s>$30.13</s></div>
        <p class="percent">20% OFF</p>
        <button class="buy" type="button">Buy</button>
        <button class="wishlist" type="button"><img style="margin-left: 8px" src="@/assets/images/like.png" height="24px"> Wishlist</button>
        <p class="under"><img src="@/assets/images/list_24px.png" height="24px">22 Section </p>
        <p class="under"><img src="@/assets/images/book24px.png" height="24px">152 Lectures</p>
        <p class="under"><img src="@/assets/images/tv_24px.png" height="24px">21h 33m total lenghts</p>
        <p class="under"><img src="@/assets/images/volume24px.png" height="24px">English</p>
      </div>

    </div>
    <div class="head_under">
      <div class="right_yellow">
        <img src="@/assets/images/Square.png" height="55px">
        <div class="yellow_text">
          Kitani Studio
          <div>Design Studio</div>
        </div>
      </div>
      <div class="left_yellow">
        <div class="user_icon">
          <img src="@/assets/images/supervised.png" height="49px">
          2.3k
        </div>
        <div class="chat_icon">
          <img src="@/assets/images/rate.png" height="49px">
          1.4k
        </div>
      </div>
    </div>

  </div>

  <footer-component></footer-component>







</template>


<script>





import FooterComponent from "@/components/footer/footer.vue";
import NavbarComponent from "@/components/navbar/navbar.vue";
import List_courseComponent from "@/components/list_course/list_course.vue";

export default {
  name: "index",
  components: {NavbarComponent, FooterComponent, List_courseComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>
.blue_text{
  font-size: 20px;
  color: #F2C94C;
  font-family: "Ubuntu-bold", sytem ui;
}
.yellow_text div{
  color: rgba(27, 27, 27, 0.6);
  font-size: 15px;
  font-family: "Ubuntu-regular", sytem ui;
}

.right_blue{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

}
.left p{
  font-size: 24px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-top: 60px;
}
.under{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 14px;

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
.first{
  font-size: 24px;
  font-family: "Ubuntu-bold", sytem ui;

}
.first s{
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  color: rgba(27, 27, 27, 0.6);
  margin-left: 37px;
}
.buy{
  width: 320px;
  height: 50px;
  border-radius: 18px;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  font-family: "Ubuntu-bold", sytem ui;
  background-color: #1365E1;
  margin-bottom: 18px;

}
.wishlist{
  width: 320px;
  height: 50px;
  border-radius: 18px;
  border: 1px solid rgba(27, 27, 27, 0.6);;
  font-size: 20px;
  font-family: "Ubuntu-bold", sytem ui;
  color: rgba(27, 27, 27, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-bottom: 24px;

}
.right{
  height: 426px;
  width: 365px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);
  padding-top: 24px;
  padding-left: 23px;
}
.container{
    height: 436px;
    display: flex;
  justify-content: space-between;
  margin-top: 30px;

}
.main{
  width: 1436px;
  margin: 0 auto;
}


</style>