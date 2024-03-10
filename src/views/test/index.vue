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

      <div class="under_header">
        <div class="left_side">
          <div class="first">
            <span>1</span> / 20
          </div>
          <div class="second">
            CloudWatch use to monitor
          </div>

          <div class="back">
            <div class="button" @mousedown="toggleActive">
              <img src="@/assets/images/Vector.png" class="back_click">
              <p>Вернуться назад</p>
            </div>
          </div>
        </div>


        <div class="right_side">
          <div v-for="(item, index) in items" :key="index" @mousedown="toggleActive">{{ item }}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      items: [
        "Memory utilization of the s3 bucket.",
        "Trigger the event after cpu utilization increase by x%.",
        "Unauthorized access to the instances.",
        "Interface and Using Experience."
      ],
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.right_side div {
  display: flex;
  height: 76px;
  width: 554px;
  border-radius: 15px;
  border: 1px solid #1365E1;
  align-items: center;
  color: #1365E1;
  font-family: Ubuntu-regular, system-ui;
  font-size: 21px;
  padding-left: 30px;
  margin-top: 30px;
  cursor: pointer;
}

.right_side div:hover {
  background-color: #1365E1;
  color: white;
}



.back {
  padding-bottom: 347px;
}

.first {
  font-family: Ubuntu-regular, system-ui;
  font-size: 21px;
  color: rgba(0, 0, 0, 0.6);
}

.first span {
  color: #000000;
}
.under_header {
  padding-top: 165px;
  display: flex;
  justify-content: space-between;
}
.second {
  font-size: 30px;
  font-family: Ubuntu-regular, system-ui;
  color: #000000;
  margin-top: 18px;
  padding-bottom: 192px;
}

.main {
  background-color: #ffffff;
}

.logo {
  max-width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-image {
  height: 40px;
}

.app-name {
  color: black;
  font-size: 22px;
  font-family: "Ubuntu-bold", sytem ui;
}

.main_input {
  max-width: 90%;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

select {
  font-size: 22px;
  padding: 7px 6px;
  background-color: white;
  font-family: "Ubuntu-regular", sytem ui;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  border-radius: 12px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  color: #1365E1;
  font-size: 22px;
  font-family: Ubuntu-regular, system-ui;
  padding: 23px 158px;
  border: 1px solid #1365E1;
  border-radius: 16px;
}

.back_click {
  height: 20px;
}

@media screen and (max-width: 1200px) {


}
@media screen and (max-width: 880px) {

}
</style>
