<template>
  <div class="all_footer" style="background-color: black">
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


export default {
  name: "footer-component",
}
</script>

<style scoped>
.last_left_text{
  display: flex;
  justify-content: space-between;
  width: 150px;

}
.last_right_text{
  font-size: 16px;
  color: rgba(249, 249, 249, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.last_text{
  display: flex;
  width: 1693px;
  margin: 0 auto;
  justify-content: space-between;
}
.footer_main{
  width: 1408.33px;
  height: 138.26px;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 105px;

}
.fourth_footer{
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;

}
.third_footer{
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}

.second_footer{
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
  width: 201.33px;
  height: 136.81px;
  display: flex;
  flex-wrap: wrap;
}
.right_side{
  display: flex;
  align-items: center;
  height: 43px;
  width: 152.8px;
  justify-content: space-between;
}
</style>