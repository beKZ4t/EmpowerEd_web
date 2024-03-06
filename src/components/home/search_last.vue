<template>
  <div class="outer-container">
      <div class="main-container flex-container">
        <div>
          <p>Join and get amazing discount</p>
          <p class="under_text">With our responsive themes and mobile and desktop apps</p>
        </div>

      <div class="search-container ">
        <input type="text" placeholder="Email Address">
        <img src="@/assets/images/search_last.png">
      </div>
      <div class="space-container"></div>
      <button type="button">Subscribe</button>

    </div>
  </div>
</template>

<script >
export default {
  name: "search_last-component",


}
</script>

<style scoped>
.under_text{
  font-size: 14px;
  font-family: Ubuntu-regular, system-ui;
  color: rgba(255, 255, 255, 0.6);
}
.outer-container {
  color: #FFFFFF;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 32px;
  margin-top: 50px;
  width: 90%;
  border-radius: 20px;
  margin-left: 5%;
  background: #2273D1;
  padding-top: 79px;
  padding-bottom: 79px;
  box-shadow: 0px 2px 8px 0px rgba(10, 10, 10, 0.1);

}
.main-container {
  width: 90%;
  margin-left: 5%;
}
.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
}

.search-container {
  margin-left: 24px;
  border-radius: 3px;
  padding-right: 12px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  background: rgba(249, 249, 249, 0.3);
}
.search-container>input {
  padding: 8px 12px;
  width: 500px;
  background: transparent;
  color: #F9F9F9;
  font-size: 16px;
  border: none;
  font-family: Ubuntu-regular, system-ui;
}
input:focus {
  outline: none;
}
.search-container>img {
  height: 21px;
}
::placeholder {
  color: rgba(249, 249, 249, 0.6);
}
button{
  padding: 10px 63px;
  background-color: #3DCBB1;
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
  border-radius: 3px;
  border: none;
  cursor: pointer;

}
.space-container {
  flex: auto;
}
@media screen and (max-width: 1800px){
  .space-container {

    flex: 1;
  }
  .search-container {
    flex: auto;
  }
  .search-container>input {
    flex: auto;
    width: auto;
  }
  .outer-container{
    font-size: 28px;
  }

}
@media screen and (max-width: 1200px) {
  .space-container {
    min-width: 20px;
    flex: 1;
  }
  .search-container {
    flex: auto;
  }
  .search-container>input {
    flex: auto;
    width: auto;
  }
  .outer-container{
    font-size: 22px;
  }

}
@media screen and (max-width: 880px) {
  .main-container, .outer-container {
    width: 96%;
    margin-left: 2%;
    font-size: 18px;
  }
}

</style>