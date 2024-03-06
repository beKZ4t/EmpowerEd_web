<template>
  <header-component />
  <video_blcok-component />





  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";
import Video_blcokComponent from "@/components/home/video_block.vue";

export default {
  name: "index",
  components: {Video_blcokComponent, LessonExpandableComponent, FooterBlockComponent, HeaderComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>





</style>