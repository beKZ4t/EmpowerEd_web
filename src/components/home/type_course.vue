<template>
  <div class="list_course">
    <a сlass="active" href="#"> All Courses</a>
    <a href="#">Courses</a>
    <a href="#">Wishlist</a>
    <a href="#">Completed</a>

  </div>


</template>

<script >
export default {
  name: "type_course-component",


}

</script>

<style scoped>
.list_course{
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: Ubuntu-regular, system-ui;
  margin-top: 13px;

}
a{
  color: #1B1B1B;
  text-decoration: none;
}

</style>