<template>
  <header-component />
 <type_course-component />


  <footer-block-component />


</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";
import Type_courseComponent from "@/components/home/type_course.vue";

export default {
  name: "index",
  components: {
    Type_courseComponent,
    FooterBlockComponent, HeaderComponent},

}
</script>

<style scoped>





</style>