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
        <div class="login"><button type="button">Login</button> </div>
        <div class="signup"><button type="button"><img height="16px" src="@/assets/images/time.png">Sign Up</button> </div>
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
            <div>Adobe Illustrator Scretch Course</div>
            <div class="name_course"><img height="18px" src="@/assets/images/person_icon.png"> Kitani Studio</div>
            <div class="info_course">More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</div>
            <div><img src="@/assets/images/star.png" height="16px"> (1.2K) </div>
            <div class="price">$24.92 <div>$32.90</div></div>

          </div>
          <div class="course"></div>
          <div class="course"></div>
          <div class="course"></div>
          <div class="course"></div>

        </div>



      </div>
    </div>

  </div>




</template>


<script>





export default {
  name: "index",

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>
.info_course{
  color: #1B1B1B;
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
  border-radius: 12px;
  border: 1px solid #1365E1;
  width: 252.51px;
}
.adobe button{
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid #1B1B1B10;
  height: 59.22px;
  border-radius: 12px;
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
.signup button{
  display: flex;
  justify-content: center;
  align-items: center;
  width:120px ;
  height: 40px;
  background-color: #1365E1;
  border-radius: 12px;
  border: none;
  color: #FFFFFF;
  font-size: 12px;
  font-family: "Ubuntu-bold",sytem ui;

}
.login button{
  width: 80px;
  height: 40px;
  background-color: #FFFFFF;
  border: 1px solid rgba(27, 27, 27, 0.9);
  border-radius: 12px;
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