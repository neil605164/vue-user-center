<template>
  <div id="main">
    <h1>123</h1>
  </div>
</template>

<style scoped>
#main {
  padding-left: 250px;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    // 跳轉到 login 畫面
    this.$router.push({ name: "User" });
  },
};
</script>