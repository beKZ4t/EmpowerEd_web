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

  <div style="background-color: black">
    <div class="footer">
      <div class="footer_main">
        <div class="right_side">
          <div class="log_img"><img height="43px" src="@/assets/images/logo.png"></div>
          <div class="name_log_last">EmpowerED</div>
        </div>
        <div class="second_footer">
          <div>Web Programming</div>
          <div>Mobile Programming</div>
          <div>Java Beginner</div>
          <div>PHP Beginner</div>
        </div>
        <div class="third_footer">
          <div>Adobe Illustrator</div>
          <div>Adobe Photoshop</div>
          <div>Design Logo</div>

        </div>
        <div class="fourth_footer">
          <div>Writing Course</div>
          <div>Photography</div>
          <div>Video Making</div>
        </div>
      </div>
      <hr style="width: 1691px; border: 0.5px solid rgba(249,249,249,0.9)">
      <div class="last_text">
        <div class="last_right_text">Copyright © EmpowerED 2024. All Rights Reserved</div>
        <div class="last_left_text">
          <img src="@/assets/images/Twitter.png" height="25px">
          <img src="@/assets/images/Instagram.png" height="25px">
          <img src="@/assets/images/Facebook.png" height="25px">
        </div>
      </div>


    </div>
  </div>




</template>


<script>





import LessonExpandableComponent from "@/views/paind/lesson_expandable.vue";

export default {
  name: "index",
  components: {LessonExpandableComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>


</style>