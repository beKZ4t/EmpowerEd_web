<template>
  <div class="scrollable-container">
    <div class="main">
      <div class="item" v-for="item in categories" :key="item">{{item.name}}</div>
    </div>
  </div>
</template>


<script>

export default {
  name: "categories-component",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "All Recommendation"
        },
        {
          id: 2,
          name: "Adobe Illustrator",
        },
        {
          id: 3,
          name: "Adobe Photoshop",
        },
        {
          id: 4,
          name: "UI Design",
        },
        {
          id: 5,
          name: "Web Programming",
        },
        {
          id: 6,
          name: "Java",
        },
        {
          id: 7,
          name: "Object oriented programming",
        },
        {
          id: 8,
          name: "Spring Boot",
        },
        {
          id: 9,
          name: "Angular"
        },
        {
          id: 4,
          name: "UI Design",
        },
        {
          id: 5,
          name: "Web Programming",
        },
        {
          id: 6,
          name: "Java",
        },
        {
          id: 7,
          name: "Object oriented programming",
        },
        {
          id: 8,
          name: "Spring Boot",
        },
        {
          id: 9,
          name: "Angular"
        }
      ]
    }
  }
}
</script>

<style scoped>
.scrollable-container {
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 10px;
}
.main{
  margin-left: 5%;
  list-style-type: none;
  padding: 0;
  display: flex;
}
.item {
  white-space: nowrap;
  margin-right: 10px;
  font-family: Ubuntu-regular, system-ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding: 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  cursor: pointer;
}
.active{
  border: 1px solid #266de8;
  color: #266de8;
}
</style>