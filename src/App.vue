<template>
  <div id="app">
    <Menu v-if="currentRouteName != 'Login'"/>
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
};
</script>