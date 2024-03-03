<template>
  <div class="main">
    <div class="navbar">
      <div class="main_navbar">
        <div class="log_name">
          <div class="log_img"><img src="@/assets/images/logo.png"></div>
          <div class="name_log">EmpowerED</div>
        </div>
        <div class="second">
          <div>Browse</div>
          <div class="down_img"><img width="13.11px" src="@/assets/images/down.png"></div>
        </div>
        <div class="search">
          <input type="search" placeholder="Search for course"> 
          <img class="icon_search" src="@/assets/images/Search.png">
        
        </div>
        <div style=" color: #1B1B1B;">Become Instructor</div>
        <div class="basket_img"><img src="@/assets/images/basket.png"></div>
        <div class="login-button" @click="openLogin">Login</div>
        <div class="signup-button" @click="openSignup"><img src="@/assets/images/time.png">Sign Up </div>
      </div>

    </div>



    <div class="image_first">
      <div class="text_main">
        <div class="first_text">Learn something new everyday.</div>
        <div class="second_text">Become professionals and ready to join the world.</div>
        <div class="two_button">
          <button class="first_button" type="button">Browse Course</button>
          <button class="second_button" type="button">Start make your account</button>

        </div>
      </div>
      <div class="screen"><img src="@/assets/images/screen.png"> </div>


    </div>
    <div class="main_size">
      <div class="list_navbar">
        <div class="coursers active"><button type="button">All Recommendation</button> </div>
        <div class="coursers"><button type="button">Adobe Illustrator</button> </div>
        <div class="coursers"><button type="button">Adobe Photoshop</button> </div>
        <div class="coursers"><button type="button">UI Design</button> </div>
        <div class="coursers"><button type="button">Web Programming</button> </div>
        <div class="coursers"><button type="button">Java</button> </div>
        <div class="coursers"><button type="button">Object oriented programming</button> </div>
        <div class="coursers"><button type="button">Spring Boot</button> </div>
        <div class="coursers"><button type="button">Angular</button> </div>

      </div>



    <div class="list_course">
      <div class="first_course">
      <div class="header_course">
        <div class="first_header">Based on your interest</div>
        <div class="second_header">We know the best things for You.  Top picks for You.</div>
      </div>
        <div class="list_all_course">
          <div class="course">
            <img class="img_course" src="@/assets/images/1course.png">
            <div class="hade_name">Adobe Illustrator Scretch Course</div>
            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" class="img_star" > (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>

          </div>
          <div class="course"><img class="img_course" src="@/assets/images/2course.png">
            <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>
            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img class="img_course" src="@/assets/images/3course.png">
            <div class="hade_name">Spring Boot Full Course</div>
            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img class="img_course" src="@/assets/images/4course.png">
            <div class="hade_name">Learn C++ Full Course</div>
            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Mosh</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img class="img_course" src="@/assets/images/5course.png">
            <div class="hade_name">Java Full Course</div>
            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>

        </div>



      </div>
    </div>

<!--    <div class="list_course">-->
<!--      <div class="first_course">-->
<!--        <div class="header_course">-->
<!--          <div class="first_header">Trending Course</div>-->
<!--          <div class="second_header">We know the best things for You.  Top picks for You.</div>-->
<!--        </div>-->
<!--        <div class="list_all_course">-->
<!--          <div class="course">-->
<!--            <img class="img_course" src="@/assets/images/6course.png">-->
<!--            <div class="hade_name">Adobe Illustrator Scretch Course</div>-->
<!--            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>-->
<!--            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>-->
<!--            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--            <div class="price">$24.92 <span><s>$32.90</s></span></div>-->

<!--          </div>-->
<!--          <div class="course"><img class="img_course" src="@/assets/images/7course.png">-->
<!--            <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>-->
<!--            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>-->
<!--            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--            <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--          </div>-->
<!--          <div class="course">-->
<!--            <img class="img_course" src="@/assets/images/8course.png">-->
<!--            <div class="hade_name">Spring Boot Full Course</div>-->
<!--            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>-->
<!--            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>-->
<!--            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--            <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--          </div>-->
<!--          <div class="course">-->
<!--            <img class="img_course" src="@/assets/images/7course.png">-->
<!--            <div class="hade_name">Learn C++ Full Course</div>-->
<!--            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Mosh</div>-->
<!--            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--            <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--          </div>-->
<!--          <div class="course">-->
<!--            <img class="img_course" src="@/assets/images/6course.png">-->
<!--            <div class="hade_name">Java Full Course</div>-->
<!--            <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>-->
<!--            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--            <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--            <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--          </div>-->

<!--        </div>-->



<!--      </div>-->
<!--    </div>-->

<!--      <div style="margin-top: 120px" class="list_course">-->
<!--        <div class="first_course">-->
<!--          <div class="list_all_course">-->
<!--            <div class="course">-->
<!--              <img class="img_course" src="@/assets/images/8course.png">-->
<!--              <div class="hade_name">Adobe Illustrator Scretch Course</div>-->
<!--              <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>-->
<!--              <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>-->
<!--              <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--              <div class="price">$24.92 <span><s>$32.90</s></span></div>-->

<!--            </div>-->
<!--            <div class="course"><img class="img_course" src="@/assets/images/9course.png">-->
<!--              <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>-->
<!--              <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Kitani Studio</div>-->
<!--              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--              <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--              <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--            </div>-->
<!--            <div class="course">-->
<!--              <img class="img_course" src="@/assets/images/9course.png">-->
<!--              <div class="hade_name">Spring Boot Full Course</div>-->
<!--              <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>-->
<!--              <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>-->
<!--              <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--              <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--            </div>-->
<!--            <div class="course">-->
<!--              <img class="img_course" src="@/assets/images/7course.png">-->
<!--              <div class="hade_name">Learn C++ Full Course</div>-->
<!--              <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Mosh</div>-->
<!--              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--              <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--              <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--            </div>-->
<!--            <div class="course">-->
<!--              <img class="img_course" src="@/assets/images/6course.png">-->
<!--              <div class="hade_name">Java Full Course</div>-->
<!--              <div class="name_course"><img class="person_icon" src="@/assets/images/person_icon.png"> Amigocode</div>-->
<!--              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>-->
<!--              <div class="star"><img src="@/assets/images/star.png" class="img_star"> (1.2K) </div>-->
<!--              <div class="price">$24.92 <span><s>$32.90</s></span></div>-->
<!--            </div>-->

<!--          </div>-->



<!--        </div>-->
<!--      </div>-->

    </div>
    <div class="main_last_search">
    <div class="last_search">
      <div class="text_in_search">
      <div class="text_last">Get Amazing Discount and Course Update </div>
      <div>
        <input class="input_search" type="email" placeholder="Email">
        <img height="28px" src="@/assets/images/search_last.png">
      </div>
      <div class="last_button">
        <button type="button">Subscribe</button>
      </div>
      </div>
    </div>
    </div>

  </div>
<footer-component></footer-component>




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
  .navbar{
    height: 114.06px;
    width: 1718px;
    margin-top: 23.08px;
    border-radius: 30px;
    font-size: 16px;
    margin-bottom: 28.94px;
  }
  .search input{
    width: 678px;
    height: 37px;
    border-radius: 12px;

  }
  .log_img img{
    height: 43px;
  }
  .log_name{
    height: 43px;
    width: 151.49px;
    font-size: 17.79px;

  }
  .main_navbar{
    width: 1486px;
    height: 48.92px;
  }
  .second{
    font-size: 16px;
  }
  .icon_search{
    width: 24px;
    height: 21px;
  }
  .basket_img img{
    height:45.62px;
  }
  .login-button {
    width: 80px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 10px;
    font-size: 12px;
  }
  .signup-button{
    width:120px ;
    height: 40px;
    border-radius: 10px;
    font-size: 12px;
  }
  .signup-button img{
    height:16px;
  }
  .image_first{
    height: 727px;
    width: 100%;
  }
  .screen img{
    height: 705px;
  }
  .first_text {
    font-size: 55px;
  }
  .second_text{
    font-size: 24px;
    height: 84px;
    margin-top: 25px;
    margin-bottom: 25px;

  }
  .first_button{
    width: 172.44px;
    height: 48px;
    border-radius: 14px;
    font-size: 16px;
    margin-right: 28.67px;

  }
  .second_button{
    width: 255.13px;
    height: 48px;
    font-size: 16px;
    border-radius: 14px;

  }
  .text_main{
    width: 508.24px;
    height: 307px;
    padding-top: 157px;
    padding-left: 226.69px;
  }
  .main_size{
    width: 1691.85px;
    margin: 0 auto;
  }
  .list_navbar{
    height: 59.22px;
    width: 1673.59px;
    margin-top: 66px;
    margin-bottom: 44.78px;
  }
  .all_navbar button{
    height: 59.22px;
    border-radius: 10px;
    width: 252.51px;
  }


  .coursers button{
    padding-left: 38px;
    padding-right: 38px;
    padding-top: 19px;
    padding-bottom: 19px;
    border-radius: 12px;
    font-size: 14px;

  }
  .list_course{
    width: 1664.29px;
    height: 400px;
  }
  .header_course{
    margin-bottom: 34.43px;
  }
  .first_header{
    font-size: 20px;
  }
  .second_header{
    font-size: 16px;
  }
  .course{
    width: 285.52px;
    height: 318px;

  }
  .img_course{
    height:161px;
    width: 281px;
  }
  .hade_name {
    font-size: 16px;
  }
  .person_icon{
    height: 18px;
  }

  .name_course{
    font-size: 14px;
  }
  .info_course{
    font-size: 14px;
  }
  .star{
    font-size: 14px;
  }
  .img_star{
    height: 16px;
  }
  .price{
    font-size: 20px;


  }
  .price span{
    font-size: 16px;

  }

}
@media screen and (max-width: 1440px) and (min-width: 821px) {
  .img_course{
    height: 129px;
    width: 234px;
  }
  .price{
    font-size: 20px;


  }
  .price span{
    font-size: 16px;

  }
  .img_star{
    height: 16px;
  }
  .star{
    font-size: 14px;
  }
  .info_course{
    font-size: 14px;
  }
  .name_course{
    font-size: 14px;
  }
  .person_icon{
    height: 18px;
  }
  .navbar{
    height: 80.06px;
    width: 1300px;
    margin-top: 23.08px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 28.94px;
  }
  .log_img img{
    height: 35px;
  }
  .log_name{
    height: 43px;
    width: 125px;
    font-size: 15px;

  }
  .search input{
    width: 340px;
    height: 35px;
    border-radius: 9px;

  }
  .main_navbar{
    width: 1050px;
    height: 38px;
  }
  .second{
    font-size: 12px;
  }
  .icon_search{
    width: 19px;
    height: 18px;
  }
  .basket_img img{
    height:32px;
  }
  .login-button {
    width: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
    font-size: 11px;
  }
  .signup-button{
    width:100px;
    height: 34px;
    border-radius: 8px;
    font-size: 12px;
  }
  .signup-button img{
    height:13px;
  }
  .image_first{
    height: 515px;
    width: 100%;
  }
  .screen img{
    height: 500px;
  }
  .first_text {
    font-size: 37px;
  }
  .second_text{
    font-size: 18px;
    height: 44px;
    margin-top: 20px;
    margin-bottom: 20px;

  }
  .first_button{
    width: 140px;
    height: 40px;
    border-radius: 12px;
    font-size: 14px;
    margin-right: 28.67px;

  }
  .second_button{
    width: 220.13px;
    height: 40px;
    font-size: 14px;
    border-radius: 12px;

  }
  .text_main{
    width: 400px;
    height: 223px;
    padding-top: 145px;
    padding-left: 162px;
  }
  .main_size{
    width: 1300px;
    margin: 0 auto;
  }
  .list_navbar{
    height: 45px;
    width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 66px;
    margin-bottom: 44.78px;
    margin: 0 auto;
  }


  .coursers button{
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 9px;
    font-size: 11px;

  }
  .list_course{
    width: 1300px;
    height: 350px;
  }
  .first_header{
    font-size: 17px;
  }
  .header_course{
    margin-bottom: 22px;
  }
  .second_header{
    font-size: 14px;
  }
  .course{
    width: 285.52px;
    height: 318px;

  }
  .hade_name {
    font-size: 16px;
  }

}

@media screen and (max-width: 820px) {
  .navbar{
    height: 50px;
    width: 600px;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 10px;
    margin-bottom: 25px;
  }
  .log_img img{
    height: 25px;
  }
  .log_name{
    height: 25px;
    width: 70px;
    font-size: 11px;

  }
  .search input{
    width: 80px;
    height: 25px;
    border-radius: 9px;

  }
  .main_navbar{
    width: 550px;
    height: 38px;
  }
  .second{
    font-size: 10px;
  }
  .icon_search{
    width: 19px;
    height: 18px;
  }
  .basket_img img{
    height:22px;
  }
  .login-button {
    width: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 8px;
    font-size: 11px;
  }
  .signup-button{
    width:60px;
    height: 25px;
    border-radius: 6px;
    font-size: 11px;
  }
  .signup-button img{
    height:10px;
  }

}



.right_side .logo{
  display: flex;

}
.coursers.active button{
  border: 1px solid #1365E1;
  color: #1365E1;
}
.coursers{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.coursers button{
  background-color: #FFFFFF;
  border: 1px solid rgba(27, 27, 27, 0.1);
  font-family: "Ubuntu-regular", sytem ui;
  color: rgba(27, 27, 27, 0.6);
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

.input_search::placeholder{
  color: rgba(249, 249, 249, 0.6);
}
.last_button button{
  width: 201.15px;
  height: 44.79px;
  background-color: #3DCBB1;
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  border-radius: 10px;
  border: none;
}
.text_in_search{
  width: 1524.82px;
  height: 44.79px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.text_last{
  color: #FFFFFF;
  font-size: 32px;
  font-family: "Ubuntu-bold", sytem ui;
}
.main_last_search{
  margin: 0 auto;
  margin-bottom: 119px;
  width: 1691px;
}

.last_search{
  display: flex;
  justify-content: space-between;
  height: 201px;
  margin: 0 auto;
  border-radius: 10px;
  background: url("@/assets/images/lastsearch_back.png") no-repeat #663259;
  width: 100%;
  background-position: right;
  align-items: center;


}


.hade_name{
  font-family: "Ubuntu-bold", sytem ui;

}
.price{
  font-family: "Ubuntu-bold", sytem ui;
  color: rgba(27, 27, 27, 0.9);

}
.price span{
    color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.star{
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;

}
.info_course{
  color: rgba(27, 27, 27, 0.9);
  font-family: "Ubuntu-regular", sytem ui;
}
.first_header{
  color: black;
  font-family: "Ubuntu-bold",sytem ui;
}
.name_course{
  display: flex;
  align-items: center;
  color: #1365E1;
  font-family: "Ubuntu-regular", sytem ui;
}
.list_all_course{
  width: 950px;
  display: flex;
  justify-content: space-between;
}
.second_header{
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.list_course{
  margin: 0 auto;
}

.adobe button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 10px;
  background-color: #FFFFFF;
  width: 187.73px;
}
.adobe_pho button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 194.34px;
}
.ui button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 125.59px;
}
.web_nav button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 202.27px;
}
.java_nav button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 109.63px;
}
.object_nav button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 251.44px;
}
.spring button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 131.75px;
}
.angular button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 131.75px;
}




.list_navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(249, 249, 249, 0.9);
}
.first_text{
  font-family: "Ubuntu-bold",sytem ui;

}

.first_button{
  border: 1px solid rgba(27, 27, 27, 0.6);
  background-color: #77D361;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-bold",sytem ui;


}
.second_button{
  background-color: #1365E1;
  border: none;
  font-family: "Ubuntu-bold",sytem ui;
  color: #FFFFFF;


}



.second_text{
  font-family: "Ubuntu-regular",sytem ui;
  color: rgba(27, 27, 27, 0.6);
}
.screen{
  display: flex;
  align-items: center;
}
.image_first{
  background-color: #77D361;
  display: flex;
  justify-content: space-between;
}
.icon_search{
  display: inline-block;
  vertical-align: middle;
}

.second{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu-regular",sytem ui;
  color: #1B1B1B;
}
.search input{

  background-color: rgba(249, 249, 249, 0.9);
  border: none;
}


.navbar{
  margin: 0 auto;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.06);
  font-family: "Ubuntu-regular",sytem ui;
  display: flex;
  align-items: center;
}
.signup-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1365E1;
  border: none;
  color: #FFFFFF;
  font-family: "Ubuntu-bold",sytem ui;
  cursor: pointer;

}
.login-button {
  text-align: center;
  cursor: pointer;
  background-color: #FFFFFF;
  border: 1px solid rgba(27, 27, 27, 0.9);
  font-family: "Ubuntu-bold",sytem ui;
}
.log_name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Ubuntu-bold",sytem ui;

}
.down_img{
  height: 28.16px;
  width: 25.27px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main_navbar{
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}




</style>