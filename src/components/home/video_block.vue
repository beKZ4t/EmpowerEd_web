<template>
  <div class="video_block">
    <div class="left_side">
      <iframe  src="https://www.youtube.com/embed/WiWuy6yIx40?si=D4X4R7sQsrlHx3OI"  allow=" autoplay;  " allowfullscreen></iframe>
<!--      <div class="text_under_video">VUE JS SCRATCH COURSE</div>-->
    </div>
    <div class="right_side_main">
      <lesson-expandable-component />
    </div>

  </div>
</template>
<script>
import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";

export default {
  name: "video_block-component",
  components: {LessonExpandableComponent},
}
</script>

<style scoped>
.video_block{
  width: 90%;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;

}
iframe{
  width: 707px;
  height: 372px;

}
.text_under_video{
  font-size: 24px;
  font-family: "Ubuntu-bold", sytem ui;
  margin-top: 26px;
}
.right_side_main{
  padding-right: 20%;
}
@media screen and (max-width: 1200px) {
  .video_block{


  }
  iframe{
    width: 500px;
  }
  .right_side_main{
    margin-left: 5%;
  }
}
@media screen and (max-width: 880px) {
  .video_block{
    display: ruby-text;

  }
}
</style>