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
        <button class="wishlist" type="button"><img style="margin-right: 8px;" src="@/assets/images/like.png" height="24px"> Wishlist</button>
        <p class="under"><img style="margin-right: 10px;" src="@/assets/images/list_24px.png" height="24px">22 Section </p>
        <p class="under"><img style="margin-right: 10px;" src="@/assets/images/book24px.png" height="24px">152 Lectures</p>
        <p class="under"><img style="margin-right: 10px;" src="@/assets/images/tv_24px.png" height="24px">21h 33m total lenghts</p>
        <p class="under"><img style="margin-right: 10px;" src="@/assets/images/volume24px.png" height="24px">English</p>
      </div>

    </div>
    <div class="head_under">
      <div class="right_blue">
        <img src="@/assets/images/Square.png" height="55px">
        <div class="blue_text">
          Kitani Studio
          <div>Design Studio</div>
        </div>
      </div>
      <div class="left_blue">
        <div class="user_icon">
          <img src="@/assets/images/blue_24px.png" height="49px">
          2.3k
        </div>
        <div class="chat_icon">
          <img src="@/assets/images/blue_chat24px.png" height="49px">
          1.4k
        </div>
      </div>
    </div>

    <div class="about">
      <div class="head_about">About Course</div>
      <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
    </div>

    <div class="search">
      <div class="search_heade"><p>Join and get amazing discount </p>
        <p class="under_search">With our responsive themes and mobile and desktop apps</p></div>
      <div class="input">
        <input type="email" placeholder="Email Address">
        <img src="@/assets/images/search_last.png" height="15px">
      </div>
      <button type="button">Subscribe</button>


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
.search .under_search{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}
.search{
  width: 841px;
  height: 84px;
  padding: 50px 370px 50px 319px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1365E1;
  margin-bottom: 39px;
}
.search p{
  width: 410px;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 24px;
  color: #FFFFFF;
}

input::placeholder{
  margin-left: 5px;
  color: rgba(249, 249, 249, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.input {
  background-color: rgba(249, 249, 249, 0.3);
}
input:focus{
  outline: none;
  border: none;
}
.input input{
  width: 289px;
  height: 41px;
  border-radius: 3px;
  background-color: transparent;
  border: none;
}
button{
  background-color: #3DCBB1;
  color: #FFFFFF;
  height: 41px;
  width: 111px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
}
.about{
  margin-top: 30px;
  width: 753px;
  margin-bottom: 116px;
}
.head_about{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-bottom: 20px;

}
.about p{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  color: rgba(27, 27, 27, 0.6);
}
.head_under{
  width: 938px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 29px;
  border-bottom: 1px solid #eeeeee;
}
.blue_text{
  font-size: 20px;
  color: #1365E1;
  font-family: "Ubuntu-bold", sytem ui;
}
.blue_text div{
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
.user_icon{
  width: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chat_icon{
  width: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left_blue{
  display: flex;
  width: 270px;
  justify-content: space-between;
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 20px;
  color: rgba(27, 27, 27, 0.6);
  align-items: center;
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