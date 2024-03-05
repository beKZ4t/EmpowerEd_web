<template>
  <div class="footer">
    <div class="in-footer">
      <div class="all-footer">
        <div class="logo-text">
          <img class="logo-image" src="@/assets/images/logo.png">
          <p class="app-name">EmpowerED</p>
        </div>
      </div>
      <div class="second-block">
        <a href="#">Web Programming</a>
        <a href="#">Mobile Programming</a>
        <a href="#">Java Beginner</a>
        <a href="#">PHP Beginner</a>
      </div>

      <div class="third-block">
        <a href="#">Adobe Illustrator</a>
        <a href="#">Adobe Photoshop</a>
        <a href="#">Design Logo</a>

      </div>

      <div class="fourth-block">
        <a href="#">Adobe Illustrator</a>
        <a href="#">Adobe Photoshop</a>
        <a href="#">Design Logo</a>

      </div>

    </div>
    <hr style="background-color: #FFFFFF; width: 90%; margin: 0 auto">
    <div class="end_text">
      <p>Copyright © EmpowerED 2024. All Rights Reserved</p>
      <div class="space-container"></div>
      <div class="img_footer">
        <img src="@/assets/images/Twitter.png" height="25px">
        <img src="@/assets/images/Instagram.png" height="25px">
        <img src="@/assets/images/Facebook.png" height="25px">
      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: "footer-block-component",
}
</script>
<style scoped>
.img_footer{
  display: flex;
  justify-content: space-between;
  width: 6%;
}
.end_text{
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 25px 0;
  align-items: center;
}
.footer{
  width: 100%;
  background-color: black;
  margin-top: 120px;
  color: white;

}
.all-footer{
  display: flex;
  align-items: start;
}
.in-footer{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 42px;
  padding-bottom: 62px;
}
.logo-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  font-size: 18px;
  font-family: "Ubuntu-bold", sytem ui;
}
.logo-image{
  height: 43px;
}

.second-block{
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;


}
.third-block{
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
}
.fourth-block{
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
}
a{
  color: white;
  text-decoration: none;
  font-family: Ubuntu-regular, system-ui;
  font-size: 16px;
}
.space-container {
  flex: auto;
}

</style>