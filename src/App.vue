<template>
  <div id="app">
    <Menu v-if="currentRouteName != 'Login'" />
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.text label {
  color: white;
  padding: 1px 0 !important;
}

#app {
  background-color: rgb(32, 32, 32);
  min-height: 100vh;
}
</style>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "app",
  components: {
    Menu,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    // let authToken = localStorage.getItem("authorization");

    // if (!authToken) {
    //     // 跳轉到 login 畫面
    //     this.$router.push({ name: "Login" });
    //     return
    // }
  },
};
</script>