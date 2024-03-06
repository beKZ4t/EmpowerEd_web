<template>
 <div class="header_text">
   <p>VUE JS SCRATCH COURSE</p>
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
 </div>

</template>

<script >


export default {
  name: "header_text-component",

}
</script>

<style scoped>
.header_text{
  width: 90%;
  margin: 0 auto;
  margin-top: 26px;
}
p{
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 24px;
  margin-bottom: 7px;
}
.head_under{
  display: flex;

}
.right_yellow{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  padding-right: 25%;
}
.yellow_text{
  font-size: 20px;
  font-family: "Ubuntu-bold", sytem ui;
  color: #F2C94C;
}
.yellow_text div{
  font-size: 16px;
  font-family: Ubuntu-regular, system-ui;
  color: rgba(27, 27, 27, 0.6);
}
.left_yellow{
  display: flex;
  align-items: center;

}
.user_icon{
  padding-right: 30px;
  display: flex;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  font-family: Ubuntu-regular, system-ui;
  font-size: 20px;
  color: rgba(27, 27, 27, 0.6);
}
.chat_icon{

  display: flex;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  font-family: Ubuntu-regular, system-ui;
  font-size: 20px;
  color: rgba(27, 27, 27, 0.6);
}

</style>