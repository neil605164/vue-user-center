<template>
  <div id="main">
    <div id="menu">
      <h1>會員系統</h1>
      <ul>
        <router-link
          tag="li"
          v-for="item in menuList"
          :key="item.id"
          :to="item.router"
          >{{ item.name }}</router-link
        >
      </ul>
    </div>
    <div id="header">
      <div id="func">
        <div id="name" class="user-info">Hi, {{ userInfo.name }}</div>
        <div class="block user-info border-line">
          <img :src="circleUrl" />
        </div>
        <button class="success">變更密碼</button>
        <button class="danger">登出</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu {
  position: fixed;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: rgb(1, 30, 49);
}

#header {
  padding-left: 250px;
  width: 100%;
  height: 58px;
  border-bottom: solid rgba(161, 161, 161, 0.192) 1px;
  box-sizing: border-box;
}

#func {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

h1 {
  color: #fff;
  font-size: 27px;
  padding: 10px;
  text-align: center;
  background-color: rgb(1, 26, 43);
}

li {
  color: #fff;
  padding: 15px;
  margin-bottom: 5px;
  text-align: center;
}

li:hover {
  background-color: rgb(0, 43, 71);
}

.user-info {
  margin: 0 5px;
}

#name {
  color: rgb(50, 148, 165);
}

.border-line {
  padding-right: 10px;
  border-right: solid 1px rgba(129, 129, 129, 0.377);
}

button {
  padding: 10px 15px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}

.success {
  background-color: rgb(76, 179, 76);
}

.success:hover {
  background-color: rgb(97, 196, 97);
}

.danger {
  background-color: rgb(233, 73, 73);
}

.danger:hover {
  background-color: rgb(250, 98, 98);
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW7z_rUMvx2mvD5gCESeC0T6cFSK027dcHg&usqp=CAU",
      userInfo: {
        name: "Neil",
      },
      menuList: [
        {
          id: 1,
          name: "用戶列表",
          router: "/user",
        },
        {
          id: 2,
          name: "部門列表",
          router: "/department",
        },
      ],
    };
  },
};
</script>