<template>
  <div class="navbar">
    <div class="main_navbar">
      <div class="left_side_navbar">
        <div class="log_name">
          <div class="log_img"><img height="43px" src="@/assets/images/logo.png"></div>
          <div class="name_log">EmpowerED</div>
        </div>
        <div class="second">
          <div>Browse</div>
          <div class="down_img"><img width="24px" src="@/assets/images/down.png"></div>
        </div>
      </div>
      <div class="search_navbar">
        <input type="search" placeholder="Search for course">
        <img class="icon_search" height="21px" src="@/assets/images/Search.png">

      </div>
      <div class="icons">
        Become Instructor
        <div class="basket_img"><img height="37px" src="@/assets/images/basket.png"></div>
        <div class="basket_img"><img height="37px" src="@/assets/images/notifications.png"></div>
        <div class="basket_img"><img height="43px" src="@/assets/images/avatar_icone.png"></div>
      </div>
    </div>
  </div>


</template>

<script>


export default {
  name: "navbar-component",
}
</script>

<style scoped>
.navbar{
  width: 1718px;
  height: 115px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 23px;
  margin-bottom: 13px;
}
.main_navbar{
  width: 1479px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left_side_navbar{
  display: flex;
  align-items: center;
  width: 290px;
  justify-content: space-between;
}
.log_name{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 153px;
  height: 43px;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 18px;
}
.second{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 106px;
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
}
input{
  width: 678px;
  height: 37px;
  border: none;
  background-color: transparent;


}
input:focus {
  outline: none;
}
.search_navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 678px;
  height: 37px;
  background-color: rgba(249, 249, 249, 0.9);
  border-radius: 10px;

}
input::placeholder{
  padding-left: 12px;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
  font-size: 16px;
}
.icons{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 430px;
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
}
</style>