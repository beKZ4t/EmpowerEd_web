<template>
  <div class="block">
    <div class="left_side">
      <h2>About Course</h2>
      <div class="about">
        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
      </div>
      <div class="reviews">
        <div class="head_reviews">Review</div>
        <div class="people">
          <div class="avatar">
            <img class="avatar-image" :src="reviewBlock.avatar">
          </div>
          <p class="name_person">{{reviewBlock.name}}</p>
          <p class="date">{{reviewBlock.date}}</p>
          <p class="people_review">{{reviewBlock.review}}</p>


        </div>

      </div>


    </div>


    <div class="right_side">

      <img src="@/assets/images/Group.png" >
    </div>

  </div>

</template>


<script >
export default {
  name: "about_text-component",

}
</script>
<style scoped>
.block{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left_side{
  width: 30%;
}
h2{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
}
.about{
  font-family: Ubuntu-regular, system-ui;
  font-size: 16px;
  color: rgba(27, 27, 27, 0.6);
  margin-top: 16px;
}
.right_side img{
  height: 90%;
}
</style>