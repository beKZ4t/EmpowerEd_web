<template>

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
      <div class="basket_img"><img height="45.62px" src="@/assets/images/basket.png"></div>
      <div class="basket_img"><img height="45.62px" src="@/assets/images/notifications.png"></div>
      <div class="basket_img"><img height="45.62px" src="@/assets/images/avatar_icone.png"></div>

    </div>
  </div>
  <div class="main">


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
  height: 43px;
  width: 151.49px;
  justify-content: space-between;
  font-size: 17.79px;
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
.search input{
  width: 678px;
  height: 37px;
  border-radius: 12px;
  background-color: rgba(249, 249, 249, 0.9);
  border: none;
}


</style>