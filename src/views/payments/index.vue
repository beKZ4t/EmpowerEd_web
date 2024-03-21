<template>
  <navbar_for_login-component />

  <div class="block">
    <p class="header">
      Payment method
    </p>
    <p class="under_header">Fill the fields to pay for PRO version of AI Detector</p>
    <p class="name_card">Holder name <span>*</span> </p>
    <input class="holder" type="text" placeholder="Holder name">

    <p class="name_card">Card number <span>*</span></p>
    <input class="holder" type="text" placeholder="Card number">

    <div class="end_input">
      <div class="left_side">
        <p class="name_card">Expire date <span>*</span>  </p>
        <div class="exp-wrapper">
          <input autocomplete="off" class="exp" id="month" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="MM" type="text" data-pattern-validate />
          <input autocomplete="off" class="exp" id="year" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="YY" type="text" data-pattern-validate />
        </div>
      </div>
      <div class="right_side">
        <p class="name_card">CVV<span>*</span></p>
        <input type="number" class="last_input" placeholder="CVV">
      </div>

    </div>
    <div class="button" @click="">Get PRO version</div>
  </div>


  <footer-block-component />
</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";
import Search_lastComponent from "@/components/home/search_last.vue";
import Header_textComponent from "@/components/home/header_text.vue";
import About_textComponent from "@/components/home/about_text.vue";
import Blue_textComponent from "@/components/home/blue_text.vue";
import NavbarComponent from "@/components/navbar/navbar.vue";
import Navbar_for_loginComponent from "@/components/navbar_second/navbar_for_login.vue";



export default {
  name: "index",
  components: {
    Navbar_for_loginComponent,
    NavbarComponent,
    Blue_textComponent,
    About_textComponent, Header_textComponent, Search_lastComponent,
    Type_courseComponent,
    FooterBlockComponent, HeaderComponent},


}
</script>

<style scoped>
.button{
  margin: 0 auto;
  background-color: #266de8;
  font-size: 22px;
  padding: 10px;
  color: #FFFFFF;
  font-family: Ubuntu-regular, system-ui;
  margin-top: 43px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
.left_side {
  flex: 1;
  margin-right: 10px;
}
.right_side {
  flex: 1;
  margin-left: 10px;
}
.exp-wrapper {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 52px;
  line-height: 36px;
  font-size: 24px;
  border-radius: 10px;
  outline: none;
}

.exp-wrapper:after {
  content: '/';
  position: absolute;
  left: 50%;
  margin-left: -4px;
  color: rgba(0, 0, 0, 0.6);
  padding-top: 12px;
}

input.exp {
  float: left;
  font-family: monospace;
  border: 0;
  width: 18px;
  outline: none;
  appearance: none;
  font-size: 15px;
}
.last_input{
  width: 100%;
  padding-left: 21px;
  padding-bottom: 17px;
  padding-top: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
}
.end_input{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main{
  width: 90%;
  margin: 0 auto;
}
.block{
  width: 500px;
  margin: 0 auto;
  margin-top: 80px;

}
.header{
  text-align: center;
  font-size: 24px;
  font-family: Ubuntu-regular, system-ui;
}
.under_header{
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  font-family: Ubuntu-regular, system-ui;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 27px;
}

.name_card{
  font-family: Ubuntu-regular, system-ui;
  font-size: 16px;
  margin-bottom: 7px;
}
.name_card span{
  color: #E22D2D;
}
.holder{
  width: 95%;
  padding-left: 21px;
  padding-bottom: 17px;
  padding-top: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;

}
.holder::placeholder{
  color: rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 16px;
  font-family: Brains-regular, system-ui;
}
.holder:focus{
  outline: none;
}


@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 880px) {

}




</style>