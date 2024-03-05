<template>
  <div class="navbar_first">
  <div class="navbar">
    <div class="main_navbar">
      <div class="left_side_navbar">
        <div class="log_name">
          <div class="log_img"><img height="32px" src="@/assets/images/logo.png"></div>
          <div class="name_log">EmpowerED</div>
        </div>
        <div class="second">
          <div>Browse</div>
          <div class="down_img"><img width="13.11px" src="@/assets/images/down.png"></div>
        </div>
      </div>
      <div class="search_navbar">
        <input type="search" placeholder="Search for course">
        <img class="icon_search" height="21px" src="@/assets/images/Search.png">

      </div>
      <div class="icons">
        <div class="basket_img"><img height="24px" src="@/assets/images/basket.png"></div>
        <div class="basket_img"><img height="24px" src="@/assets/images/notifications.png"></div>
        <div class="basket_img"><img height="36px" src="@/assets/images/avatar_icone.png"></div>
      </div>
    </div>
  </div>
  </div>
  <div class="main">
    <div class="main_head">
  <div class="left_side">
    <iframe width="707px" height="372px" src="https://www.youtube.com/embed/WiWuy6yIx40?si=D4X4R7sQsrlHx3OI"  allow=" autoplay;  " allowfullscreen></iframe>
    <div class="text_under_video">VUE JS SCRATCH COURSE</div>
  </div>
    <div class="right_side_main">
      <lesson-expandable-component />
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
    <div class="main_page">
      <div class="first_main_text">
      <div class="first_main">
    <div class="first_text">
      About Course
    </div>
      <div class="about">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</div>
    </div>
        <div class="second_main_text">
          Review
          <div class="first_item">
                <img src="@/assets/images/ava.png" height="33px">
                <div style="margin-left: 16px">
                  <div class="Blue_text">Leonardo  Da Vinci</div>
                  <div class="center_text">Today</div>
                  <div class="end_text">Loved the course. I've learned some very subtle tecniques, </div>
                </div>
          </div>
          <div class="second_item">
            <img src="@/assets/images/second_item.png" height="33px">
            <div style="margin-left: 16px">
              <div class="Blue_text">Titania  S</div>
              <div class="center_text">Today</div>
              <div class="end_text">I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio </div>
            </div>
          </div>
          <div class="third_item">
            <img src="@/assets/images/third_item.png" height="33px">
            <div style="margin-left: 16px">
              <div class="Blue_text">Zhirkov</div>
              <div class="center_text">Today</div>
              <div class="end_text">Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.</div>
            </div>
          </div>
          <div class="fourth_item">
            <img src="@/assets/images/fourth_item.png" height="33px">
            <div style="margin-left: 16px">
              <div class="Blue_text">Titania  S</div>
              <div class="center_text">Today</div>
              <div class="end_text">I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer.
                I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.</div>
            </div>
          </div>


        </div>
      </div>
      
      <img src="@/assets/images/Group.png" height="697px">
    </div>
    <div class="search">
      <div style="width: 800px; height: 53px; display: flex; align-items: center; justify-content: space-between; margin: 0 auto">
      <div class="search_text">
        Join and get amazing discount
        <p>With our responsive themes and mobile and desktop apps</p>
      </div>
      <div class="input">
        <input type="search" placeholder="Email Address">
        <img src="@/assets/images/search_last.png" height="15px">
      </div>
      <button type="button">Subscribe</button>
      </div>
    </div>
  </div>






</template>


<script>





import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";


export default {
  name: "index",
  components: {LessonExpandableComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>
.search_text{
  font-size: 24px;
  color: white;
  font-family: "Ubuntu-bold", sytem ui;
}
.search_text p{
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;
  color: rgba(255, 255, 255, 0.6);
}

.search{
  width: 904px;
  height: 139px;
  border-radius: 12px;
  background-color: #2273D1;
  margin-bottom: 142px;
  align-items: center;
  display: flex;
}
.second_main_text{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;

}
.fourth_item{
  width: 469px;
  height: 130px;
  display: flex;
  margin-top: 17px;
}
.third_item{
  height: 94px;
  width: 518px;
  display: flex;
  margin-top: 17px;
}
.second_item{
  display: flex;
  width: 519px;
  margin-top: 17px;
  height: 77px;
}
.center_text{
  font-size: 10px;
  font-family: "Ubuntu-regular", sytem ui;
  color: rgba(27, 27, 27, 0.1);
}
.end_text{
  font-size: 14px;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.Blue_text{
  color: #1365E1;
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
}
.first_item{
  display: flex;
  width: 824px;
  height: 58px;
  margin-top: 17px;
}
.first_text{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-bottom: 16px;
  margin-top: 13px;
}
.about{
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
  color: rgba(27, 27, 27, 0.6);
}
.first_main{
  width: 519px;
  height: 229px;
}
.main_page{
  width: 1759px;
  height: 736px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;
}
.text_under_video{
  font-size: 24px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-top: 25px;
}
.yellow_text{
  font-size: 20px;
  color: #F2C94C;
  font-family: "Ubuntu-bold", sytem ui;
}
.yellow_text div{
  color: rgba(27, 27, 27, 0.6);
  font-size: 15px;
  font-family: "Ubuntu-regular", sytem ui;
}
.left_yellow{
  display: flex;
  width: 270px;
  justify-content: space-between;
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 20px;
  color: rgba(27, 27, 27, 0.6);
}
.right_yellow{
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
.head_under{
  width: 938px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main_head{
  display: flex;
  width: 1430px;
  height: 448px;
  justify-content: space-between;
}
.right_side_main{
}
.navbar_first{
  width: 1024px;
  display: flex;
  justify-content: center;
}
.left_side_navbar{
  width: 222px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main{
  width: 1780px;
  margin: 0 auto;
}
.main_navbar{
  width: 1486px;
  height: 48.92px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.log_name{
  display: flex;
  align-items: center;
  height: 30px;
  width: 120px;
  justify-content: space-between;
  font-size: 14px;
  font-family: "Ubuntu-bold",sytem ui;

}
.login button{
  width: 80px;
  height: 40px;
  background-color: #FFFFFF;
  border: 1px solid rgba(27, 27, 27, 0.9);
  border-radius: 10px;
  font-size: 12px;
  font-family: "Ubuntu-bold",sytem ui;
}
.navbar{
  height: 60px;
  width: 927px;
  margin-top: 23.08px;
  border-radius: 30px;
  font-family: "Ubuntu-regular",sytem ui;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 28.94px;
  justify-content: start;
}
.search_navbar input{
  width: 400px;
  height: 37px;
  border-radius: 3px;
  border: none;
  background-color: transparent;

}
.input {
  background-color: rgba(249, 249, 249, 0.3);
}
.input input::placeholder{
  margin-left: 5px;
  color: rgba(249, 249, 249, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.input input{
  width: 243px;
  height: 41px;
  border-radius: 3px;
  background-color: transparent;
  border: none;
}
input:focus {
  outline: none;
}
.search_navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.second{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 79px;
  height: 21px;
}
.icons{
  width: 116px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>