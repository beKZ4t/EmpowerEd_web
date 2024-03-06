<template>
  <header-component />
  <video_blcok-component />
  <header_text-component />
  <about_text-component :review-block="reviewBlock"/>




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
          name: "Titania  S",
          date: "Today",
          review: "I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio ",
        },
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Zhirkov",
          date: "Today",
          review: "Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher. ",
        },
        {
          avatar: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Miphoska",
          date: "Today",
          review: "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. \n" +
              "I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing. ",
        }

      ]
    }
  }




}
</script>

<style scoped>





</style>