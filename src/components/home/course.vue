<template>
  <div @click="this.$router.push('/buying')" class="course-list-container" >
    <img class="banner-image" :src="course.image">
    <p class="name-text">{{course.name}}</p>
    <div class="teacher-container">
      <img class="icon-image" src="@/assets/images/person_icon.png">
      <p class="teacher-text">{{course.teacher}}</p>
    </div>
    <p class="info-text">{{course.info}}</p>
    <div>
      <star-component />
    </div>
    <div class="price">{{course.price}} <s>{{course.oldPrice}}</s></div>
  </div>
</template>

<script>


import StarComponent from "@/components/home/stars.vue";

export default {
  name: "course-component",
  components: {StarComponent},
  props: ["course"],
  methods: {

  }
}
</script>

<style scoped>
.price{
  font-family: Ubuntu-bold, system-ui;
  color: black;
  font-size: 20px;
}
.price s{
  font-size: 16px;
  font-family: Ubuntu-regular, system-ui;
  color: rgba(27, 27, 27, 0.6);
}
.course-list-container {
  width: 285px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 40px;
  cursor: pointer;
}
.banner-image {
  width: 285px;
  height: 161px;
  border-radius: 23px;
}
.name-text {
  margin-top: 4px;
  font-size: 16px;
  color: black;
  font-family: Ubuntu-bold, system-ui;
}
.teacher-container {
  margin-top: 4px;
}
.icon-image {
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  margin-right: 4px;
}
.teacher-text {
  display: inline-block;
  vertical-align: middle;
  color: #1365E1;
  font-size: 14px;
  font-family: Ubuntu-regular, system-ui
}
.info-text {
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  max-lines: 3;
  margin-top: 4px;
  font-family: Ubuntu-regular, system-ui;
}
.start-image {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
</style>