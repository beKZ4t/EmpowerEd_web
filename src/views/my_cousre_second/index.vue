<template>
  <header-component />
 <type_course-component />
  <all_course-component v-for="course in allBlock" :key="course" :course="course"/>



  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";
import All_courseComponent from "@/components/home/all_course.vue";
import all_course from "@/components/home/all_course.vue";



export default {
  name: "index",
  computed: {
    all_course() {
      return all_course
    }
  },
  components: {All_courseComponent,
    Type_courseComponent,
    FooterBlockComponent, HeaderComponent},
  data() {
    return {
      allBlock: [
        {
          image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Adobe Illustrator Scretch Course",
          teacher: "Kitani Studio",
          info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
          rating: 4.5,
          voted: 1200,
          oldPrice: 32.90,
          price: 24.92,
        },
        {
          image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Adobe Illustrator Scretch Course",
          teacher: "Kitani Studio",
          info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
          rating: 4.5,
          voted: 1200,
          oldPrice: 32.90,
          price: 24.92,
        },
        {
          image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Adobe Illustrator Scretch Course",
          teacher: "Kitani Studio",
          info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
          rating: 4.5,
          voted: 1200,
          oldPrice: 32.90,
          price: 24.92,
        },
        {
          image: "https://learnux.io/uploads/vectors/adobe-xd-course-0.jpg",
          name: "Adobe Illustrator Scretch Course",
          teacher: "Kitani Studio",
          info: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
          rating: 4.5,
          voted: 1200,
          oldPrice: 32.90,
          price: 24.92,
        }


        ]
    }
  }

}
</script>

<style scoped>





</style>