<template>
  <div class="block">
    <div class="left_side">
      <h2>About Course</h2>
      <div class="about">
        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
      </div>
      <div class="reviews">
        <div class="head_reviews">Review</div>
        <div class="people" v-for="r in reviewBlock" :key="r">
          <div class="avatar">
            <img class="avatar-image" :src="r.avatar">
          </div>
          <div>
          <p class="name_person">{{r.name}}</p>
          <p class="date">{{r.date}}</p>
          <p class="people_review">{{r.review}}</p>
          </div>


        </div>

      </div>


    </div>




      <img class="right_side" src="@/assets/images/Group.png" >


  </div>

</template>


<script >
export default {
  name: "about_text-component",
  props: ["reviewBlock"],

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
.right_side {
  max-width: 100%;
}
.head_reviews{
  font-size: 16px;
  font-family: "Ubuntu-bold", sytem ui;
}
.reviews{
  margin-top: 42px;
}
.avatar-image{
  height: 33px;
  width: 33px;
  border-radius: 15px;
  margin-right: 16px;
}
.people{
  display: flex;
  margin-top: 16px;
}
.name_person{
  color: #1365E1;
  font-family: "Ubuntu-bold", sytem ui;
  font-size: 16px;
}
.date{
  font-size: 10px;
  color: rgba(27, 27, 27, 0.2);
  font-family: Ubuntu-regular, system-ui;
  margin: 2px 0;
}
.people_review{
  font-family: Ubuntu-regular, system-ui;
  font-size: 14px;
  color: rgba(27, 27, 27, 0.6);
}
  @media screen and (max-width: 1200px) {
  .about{
    font-size: 14px;
  }
    .left_side{
      width: 80%;
    }
    .right_side{
      max-width: 70%;
      display: flex;
      margin: 35px auto;
    }




  }
  @media screen and (max-width: 880px) {

    .block{
      display: flex;
      flex-direction: column-reverse;

    }

  }
</style>