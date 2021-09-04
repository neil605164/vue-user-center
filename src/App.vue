<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body{
  display: flex;
  justify-content: center;
  align-items: center; 
  background-image: url("./assets/login.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: 50% 10%; */
  background-color: rgb(0, 0, 0);
  height: 100vh;
}

.text label{ 
  color: white;
  padding: 1px 0 !important;
}

</style>