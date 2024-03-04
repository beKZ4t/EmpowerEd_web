<template>
  <div>
    <img class="start-image" v-if="star < 1.0 && star > 0.0" src="@/assets/images/star_half.png">
    <img class="start-image" v-else-if="star >= 1.0" src="@/assets/images/star_fill.png">
    <img class="start-image" v-else src="@/assets/images/star_empty.png">
  </div>
</template>

<script>


export default {
  name: "star-component",
  props: ["star"],
}
</script>

<style scoped>
.start-image {
  width: 16px;
  height: 16px;
  margin-right: 2px;
  display: inline-block;
  vertical-align: middle;
}
</style>