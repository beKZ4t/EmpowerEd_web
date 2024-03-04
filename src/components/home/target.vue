<template>
  <div class="main-container">
    <div class="content-container">
      <p class="header-text">Learn something<br>new everyday.</p>
      <p class="hint-text">Become professionals and ready to join the<br>world.</p>
      <div class="buttons-container">
        <div class="browse-button">Browse Course</div>
        <div class="start-button">Start make your account</div>
      </div>
    </div>
    <img class="screen-image" src="@/assets/images/screen.png">
  </div>
</template>

<script>


export default {
  name: "target-component",
}
</script>

<style scoped>
.screen-image {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 90%;
}
.main-container {
  padding-top: 150px;
  padding-bottom: 250px;
  margin-top: 52px;
  background: #77D361;
  position: relative;
}
.content-container {
  width: 80%;
  margin-left: 10%;
}
.header-text {
  color: black;
  font-size: 55px;
  font-family: Ubuntu-bold, system-ui;
}
.hint-text {
  margin-bottom: 40px;
  margin-top: 25px;
  font-family: Ubuntu-regular, system-ui;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
}
.buttons-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.browse-button {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-family: Ubuntu-bold, system-ui;
  padding: 12px 24px;
  border-radius: 10px;
}
.start-button {
  cursor: pointer;
  margin-left: 28px;
  color: white;
  font-size: 14px;
  font-family: Ubuntu-bold, system-ui;
  padding: 12px 24px;
  border-radius: 10px;
  background: #1365E1;
}
@media screen and (max-width: 1250px) {
  .screen-image {
    display: none;
  }
  .main-container {
    padding-top: 70px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 880px) {

}
</style>