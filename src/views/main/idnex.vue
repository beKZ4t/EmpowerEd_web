<template>
  <header-component />
  <target-component />
  <div class="main">
    <div class="item active">All Recommendation</div>
    <div class="item">Adobe Illustrator</div>
    <div class="item">Adobe Photoshop</div>
    <div class="item">UI Design</div>
    <div class="item">Web Programming</div>
    <div class="item">Java</div>
    <div class="item">Object oriented programming</div>
    <div class="item">Spring Boot</div>
    <div class="item">Angular</div>

  </div>
  <course-block-component v-for="courseBlock in courseBlocks" :key="courseBlock" :course-block="courseBlock"/>
  <search-block-component></search-block-component>
  <footer-block-component></footer-block-component>
</template>


<script>

import HeaderComponent from "@/components/home/header.vue";
import TargetComponent from "@/components/home/target.vue";
import CourseBlockComponent from "@/components/home/course_block.vue";
import SearchBlock from "@/components/home/search-block.vue";
import SearchBlockComponent from "@/components/home/search-block.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";

export default {
  name: "index",
  components: {
    FooterBlockComponent,
    SearchBlockComponent, SearchBlock, CourseBlockComponent, TargetComponent, HeaderComponent},
  data() {
    return {
      courseBlocks: [
        {
          title: "Based on your interest",
          info: "We know the best things for You.  Top picks for You.",
          courses: [
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
          ]
        },
        {
          title: "Based on your interest",
          info: "We know the best things for You.  Top picks for You.",
          courses: [
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
          ]

        },
        {

          courses: [
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
            {
              image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
              name: "Adobe Illustrator Scretch Course",
              teacher: "Kitani Studio",
              info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
              rating: 4.5,
              voted: 1200,
              oldPrice: 32.90,
              price: 24.92
            },
          ]
        }


      ]
    }
  }
}
</script>

<style scoped>
.main{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 66px;
}
.item{
  font-family: Ubuntu-regular, system-ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding: 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
}
.active{
  border: 1px solid #266de8;
  color: #266de8;
}
</style>