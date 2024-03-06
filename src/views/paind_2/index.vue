<template>
  <header-component />
  <video_blcok-component />
  <header_text-component />
  <about_text-component />




  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import LessonExpandableComponent from "@/components/home/lesson_expandable.vue";
import Video_blcokComponent from "@/components/home/video_block.vue";
import Header_textComponent from "@/components/home/header_text.vue";
import About_textComponent from "@/components/home/about_text.vue";

export default {
  name: "index",
  components: {
    About_textComponent,
    Header_textComponent,
    Video_blcokComponent, LessonExpandableComponent, FooterBlockComponent, HeaderComponent},
  data() {
    return {
      reviewBlock: [
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Leonardo  Da Vinci",
          date: "Today",
          review: "Loved the course. I've learned some very subtle tecniques, ",
        },
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Leonardo  Da Vinci",
          date: "Today",
          review: "Loved the course. I've learned some very subtle tecniques, ",
        },
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Leonardo  Da Vinci",
          date: "Today",
          review: "Loved the course. I've learned some very subtle tecniques, ",
        },
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Leonardo  Da Vinci",
          date: "Today",
          review: "Loved the course. I've learned some very subtle tecniques, ",
        }

      ]
    }
  }




}
</script>

<style scoped>





</style>