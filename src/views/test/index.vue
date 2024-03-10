<template>
  <div class="main">
    <div class="main_input">
      <div class="header">
        <div class="logo">
          <img class="logo-image" src="@/assets/images/logo.png">
          <p class="app-name">EmpowerED</p>
        </div>
          <form>
            <select>
              <option value="ru">Язык</option>
              <option value="en">Language</option>
              <option value="kz">Тіл</option>
            </select>
          </form>
      </div>

      <div class="udner_header">
        <div class="left_side">
          <div class="first">
            <span>1</span> / 20
          </div>
          <div class="second">
            CloudWatch use to monitor
          </div>

          <div class="back">
            <div class="button">

            </div>
          </div>
        </div>


        <div class="right_side"></div>
      </div>

    </div>

  </div>
</template>


<script>


export default {
  name: "index",
}
</script>

<style scoped>
.main{
  background-color: #266de8;

}
.logo{
  max-width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.logo-image{
  height: 40px;
}
.app-name{
  color: white;
  font-size: 22px;
  font-family: "Ubuntu-bold", sytem ui;
}
.main_input{
  max-width: 90%;
  margin: 0 auto;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}
select{
  font-size: 22px;
  padding: 7px 30px;
  background-color: white;
  font-family: "Ubuntu-regular", sytem ui;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
}
</style>