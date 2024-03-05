<template>
  <header-component />
  <footer-block-component />







</template>


<script>






import HeaderComponent from "@/components/home/header.vue";
import FooterBlockComponent from "@/components/home/footer_block.vue";

export default {
  name: "index",
  components: {FooterBlockComponent, HeaderComponent},

  mounted() {
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>





</style>