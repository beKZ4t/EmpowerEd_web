<template>
  <div class="main-container">
    <p class="header-text">{{courseBlock.title}}</p>
    <p class="hint-text">{{courseBlock.info}}</p>
    <div class="course-list">
      <course-component v-for="course in courseBlock.courses" :key="course" :course="course"/>
    </div>
  </div>
</template>

<script>


import CourseComponent from "@/components/home/course.vue";

export default {
  name: "course-block-component",
  components: {CourseComponent},
  props: ["courseBlock"]
}
</script>

<style scoped>
.main-container {
  margin-top: 72px;
}
.header-text {
  margin-left: 5%;
  color: black;
  font-size: 20px;
  font-family: Ubuntu-bold, system-ui;
}
.hint-text {
  margin-top: 4px;
  margin-left: 5%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-family: Ubuntu-regular, system-ui;
}
.course-list {
  margin-left: 5%;
  margin-top: 34px;
}
</style>