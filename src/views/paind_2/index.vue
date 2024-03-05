<template>
  <header-component />

  <div class="video_block">
    <div class="left_side">
      <iframe width="707px" height="372px" src="https://www.youtube.com/embed/WiWuy6yIx40?si=D4X4R7sQsrlHx3OI"  allow=" autoplay;  " allowfullscreen></iframe>
      <div class="text_under_video">VUE JS SCRATCH COURSE</div>
    </div>
    <div class="right_side_main">
      <lesson-expandable-component />
    </div>

  </div>



  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";

export default {
  name: "index",
  components: {LessonExpandableComponent, FooterBlockComponent, HeaderComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>





</style>