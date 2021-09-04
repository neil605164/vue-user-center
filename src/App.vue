<template>
  <div id="app">
    <router-view/>
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
    
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("./assets/login.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 0%;
        background-color: rgb(0, 0, 0);
        height: 100vh;
    }
    
    .text label {
        color: white;
        padding: 1px 0 !important;
    }
</style>

<script>
    export default {
        name: "app",
        watch: {
            $route(to, from) {

                console.log(to, from)
                    //或者沒有許可權直接去固定的頁面
                this.$router.push({
                    path: "/login"
                });
            }
        }
    }
</script>