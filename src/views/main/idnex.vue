<template>
  <header-component />
  <target-component />
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

</style>