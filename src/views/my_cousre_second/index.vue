<template>
  <header-component />
 <type_course-component />
  <all_course-component v-for="course in allBlock" :key="course" :course="course"/>

  <div class="pagination">
    <a href="#" class="left_pagination"><img src="@/assets/images/chevron_right_24px.png" height="24px"> </a>
    <a href="#" class="page-link active">1</a>
    <a href="#" class="page-link">2</a>
    <a href="#" class="page-link">3</a>
    <a href="#" class="page-link">4</a>
    <a href="#" class="page-link">5</a>
    <span>...</span>
    <a href="#" class="page-link">98</a>
    <a href="#" class="right_pagination"><img src="@/assets/images/chevron_left_24px.png" height="24px"> </a>
  </div>

  <search-block-component></search-block-component>


  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";
import All_courseComponent from "@/components/home/all_course.vue";
import all_course from "@/components/home/all_course.vue";
import SearchBlockComponent from "@/components/home/search-block.vue";



export default {
  name: "index",
  computed: {
    all_course() {
      return all_course
    }
  },
  components: {
    SearchBlockComponent, All_courseComponent,
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


        ],

    }
  }

}
</script>

<style scoped>
.page-link {
  font-size: 14px;
  font-family: "Ubuntu-regular", sytem ui;
  padding: 8px 16px 8px 16px;
  border: 1px solid rgba(27, 27, 27, 0.6);
  border-radius: 12px;
  text-decoration: none;
  color: rgba(27, 27, 27, 0.6);
}

.page-link.active {
  color: #3DCBB1;
  border: 1px solid #3DCBB1;
}
.left_pagination{
  padding: 7px 9px 6px 8px;
  border: 1px solid rgba(27, 27, 27, 0.6);
  border-radius: 3px;
}
.right_pagination{
  padding: 7px 9px 6px 8px;
  border: 1px solid rgba(27, 27, 27, 0.6);
  border-radius: 3px;
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 488px;
  height: 37px;
  margin: 0 auto;
  margin-bottom: 37px;
  margin-top: 59px;
}




</style>