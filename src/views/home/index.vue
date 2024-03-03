<template>
  <div class="main">
    <div class="navbar">
      <div class="main_navbar">
        <div class="log_name">
          <div class="log_img"><img height="43px" src="@/assets/images/logo.png"></div>
          <div class="name_log">EmpowerED</div>
        </div>
        <div class="second">
          <div>Browse</div>
          <div class="down_img"><img width="13.11px" src="@/assets/images/down.png"></div>
        </div>
        <div class="search">
          <input type="search" placeholder="Search for course"> 
          <img class="icon_search" height="21px" src="@/assets/images/Search.png">
        
        </div>
        <div style=" color: #1B1B1B;">Become Instructor</div>
        <div class="basket_img"><img height="45.62px" src="@/assets/images/basket.png"></div>
        <div class="login-button" @click="openLogin">Login</div>
        <div class="signup-button" @click="openSignup"><img height="16px" src="@/assets/images/time.png">Sign Up </div>
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
        <div class="all_navbar"><button type="button">All Recommendation</button> </div>
        <div class="adobe"><button type="button">Adobe Illustrator</button> </div>
        <div class="adobe_pho"><button type="button">Adobe Photoshop</button> </div>
        <div class="ui"><button type="button">UI Design</button> </div>
        <div class="web_nav"><button type="button">Web Programming</button> </div>
        <div class="java_nav"><button type="button">Java</button> </div>
        <div class="object_nav"><button type="button">Object oriented programming</button> </div>
        <div class="spring"><button type="button">Spring Boot</button> </div>
        <div class="angular"><button type="button">Angular</button> </div>

      </div>



    <div class="list_course">
      <div class="first_course">
      <div class="header_course">
        <div class="first_header">Based on your interest</div>
        <div class="second_header">We know the best things for You.  Top picks for You.</div>
      </div>
        <div class="list_all_course">
          <div class="course">
            <img height="161px" src="@/assets/images/1course.png">
            <div class="hade_name">Adobe Illustrator Scretch Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>

          </div>
          <div class="course"><img height="161px" src="@/assets/images/2course.png">
            <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/3course.png">
            <div class="hade_name">Spring Boot Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/4course.png">
            <div class="hade_name">Learn C++ Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Mosh</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/5course.png">
            <div class="hade_name">Java Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>

        </div>



      </div>
    </div>

    <div class="list_course">
      <div class="first_course">
        <div class="header_course">
          <div class="first_header">Trending Course</div>
          <div class="second_header">We know the best things for You.  Top picks for You.</div>
        </div>
        <div class="list_all_course">
          <div class="course">
            <img height="161px" src="@/assets/images/6course.png">
            <div class="hade_name">Adobe Illustrator Scretch Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>

          </div>
          <div class="course"><img height="161px" src="@/assets/images/7course.png">
            <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/8course.png">
            <div class="hade_name">Spring Boot Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/7course.png">
            <div class="hade_name">Learn C++ Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Mosh</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>
          <div class="course">
            <img height="161px" src="@/assets/images/6course.png">
            <div class="hade_name">Java Full Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
            <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
            <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <span><s>$32.90</s></span></div>
          </div>

        </div>



      </div>
    </div>

      <div style="margin-top: 120px" class="list_course">
        <div class="first_course">
          <div class="list_all_course">
            <div class="course">
              <img height="161px" src="@/assets/images/8course.png">
              <div class="hade_name">Adobe Illustrator Scretch Course</div>
              <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
              <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
              <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
              <div class="price">$24.92 <span><s>$32.90</s></span></div>

            </div>
            <div class="course"><img height="161px" src="@/assets/images/9course.png">
              <div class="hade_name"> Bootcamp  Vue.js Web Framework</div>
              <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
              <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
              <div class="price">$24.92 <span><s>$32.90</s></span></div>
            </div>
            <div class="course">
              <img height="161px" src="@/assets/images/9course.png">
              <div class="hade_name">Spring Boot Full Course</div>
              <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
              <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
              <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
              <div class="price">$24.92 <span><s>$32.90</s></span></div>
            </div>
            <div class="course">
              <img height="161px" src="@/assets/images/7course.png">
              <div class="hade_name">Learn C++ Full Course</div>
              <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Mosh</div>
              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
              <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
              <div class="price">$24.92 <span><s>$32.90</s></span></div>
            </div>
            <div class="course">
              <img height="161px" src="@/assets/images/6course.png">
              <div class="hade_name">Java Full Course</div>
              <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Amigocode</div>
              <div class="info_course">Learn how to make web application with Vue.js Framework.</div>
              <div class="star"><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
              <div class="price">$24.92 <span><s>$32.90</s></span></div>
            </div>

          </div>



        </div>
      </div>

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


  <div class="login">
    <div class="left_side">
      <img src="@/assets/images/images_login.png" height="550px">
    </div>
    <div class="right_side">
      <div  class="logo">
        <img height="43px" src="@/assets/images/logo.png">
        <p>EmpowerED</p>
      </div>
      <p>Join us and get more benefits. We promise to keep your data safely. </p>
      <input style="margin-bottom: 8px; margin-top: 24px" type="email" placeholder="Email Address">
      <input style="margin-bottom: 16px;" type="password" placeholder="Password">
      <button class="login_button" type="button">Login</button>
      <p>or you can</p>
      <button class="button_face" type="button">Continue with Facebook</button>
      <button class="button_app" type="button">Continue with Apple</button>
      <button class="button_google" type="button">Continue with Google</button>
      <p> Need an Account? <a href="#">Sign Up</a></p>

    </div>

  </div>
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
.right_side .logo{
  display: flex;

}
.login_button{
  width: 352px;
  height: 41px;
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
}
.login{
  width: 1150px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right_side{
  width: 400px;
  height: 550px;
  background-color: #FFFFFF;
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

.header_course{
  margin-bottom: 34.43px;
}
.hade_name{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;

}
.price{
  font-size: 20px;
  font-family: "Ubuntu-bold", sytem ui;
  color: rgba(27, 27, 27, 0.9);

}
.price span{
    font-size: 16px;
    color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.star{
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;

}
.info_course{
  color: rgba(27, 27, 27, 0.9);
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;
}
.first_header{
  font-size: 20px;
  color: black;
  font-family: "Ubuntu-bold",sytem ui;
}
.name_course{
  display: flex;
  align-items: center;
  color: #1365E1;
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;
}
.list_all_course{
  display: flex;
  justify-content: space-between;
}
.course{
  width: 285.52px;
  height: 318px;

}
.second_header{
  color: rgba(27, 27, 27, 0.6);
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
}
.list_course{
  width: 1664.29px;
  height: 400px;
  margin: 0 auto;
}
.all_navbar button{
  color: #1365E1;
  background-color:#F9F9F990 ;
  height: 59.22px;
  border-radius: 10px;
  border: 1px solid #1365E1;
  width: 252.51px;
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
  height: 59.22px;
  width: 1673.59px;
  align-items: center;
  color: rgba(249, 249, 249, 0.9);
  margin-top: 66px;
  margin-bottom: 44.78px;
}
.first_text{
  font-size: 55px;
  font-family: "Ubuntu-bold",sytem ui;

}
.main_size{
  width: 1691.85px;
  margin: 0 auto;
}
.first_button{
  width: 172.44px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(27, 27, 27, 0.6);
  background-color: #77D361;
  color: rgba(27, 27, 27, 0.6);
  font-size: 16px;
  font-family: "Ubuntu-bold",sytem ui;
  margin-right: 28.67px;

}
.second_button{
  width: 255.13px;
  height: 48px;
  background-color: #1365E1;
  border: none;
  font-size: 16px;
  font-family: "Ubuntu-bold",sytem ui;
  color: #FFFFFF;
  border-radius: 14px;

}



.second_text{
  font-size: 24px;
  font-family: "Ubuntu-regular",sytem ui;
  color: rgba(27, 27, 27, 0.6);
  height: 84px;
  margin-top: 25px;
  margin-bottom: 25px;

}
.text_main{
  width: 508.24px;
  height: 307px;
  padding-top: 157px;
  padding-left: 226.69px;
}
.screen{
  display: flex;
  align-items: center;
}
.image_first{
  height: 727px;
  width: 100%;
  background-color: #77D361;
  display: flex;
  justify-content: space-between;
}
.icon_search{

  display: inline-block;
  vertical-align: middle;
  width: 24px;
}

.second{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu-regular",sytem ui;
  font-size: 16px;
  color: #1B1B1B;
}
.search input{
  width: 678px;
  height: 37px;
  border-radius: 12px;
  background-color: rgba(249, 249, 249, 0.9);
  border: none;
}


.navbar{
  height: 114.06px;
  width: 1718px;
  margin: 0 auto;
  margin-top: 23.08px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  font-family: "Ubuntu-regular",sytem ui;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 28.94px;
}
.signup-button{
  display: flex;
  justify-content: center;
  align-items: center;
  width:120px ;
  height: 40px;
  background-color: #1365E1;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
  font-size: 12px;
  font-family: "Ubuntu-bold",sytem ui;
  cursor: pointer;

}
.login-button {
  text-align: center;
  width: 80px;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  background-color: #FFFFFF;
  border: 1px solid rgba(27, 27, 27, 0.9);
  border-radius: 10px;
  font-size: 12px;
  font-family: "Ubuntu-bold",sytem ui;
}
.log_name{
  display: flex;
  align-items: center;
  height: 43px;
  width: 151.49px;
  justify-content: space-between;
  font-size: 17.79px;
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
  width: 1486px;
  height: 48.92px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}




</style>