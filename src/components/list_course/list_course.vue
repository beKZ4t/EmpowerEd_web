<template>






    <div class="list_course">
      <div class="item">All Courses</div>
      <div class="item">Courses</div>
      <div class="item">Wishlist</div>
      <div class="item">Completed</div>
    </div>




</template>


<script>





import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";
import NavbarComponent from "@/components/navbar/navbar.vue";

export default {
  name: "list-course-component",


  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>

.price span{
  font-size: 16px;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}

.list_course{
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 685px;
  height: 24px;
  font-size: 16px;
  font-family: "Ubuntu-regular", sytem ui;
}






</style>