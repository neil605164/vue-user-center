<template>
    <div id="main">
        <div id="content">
            <h2>會員系統</h2>

            <el-form :label-position="labelPosition" :rules="rules" ref="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="帳號" class="text" prop="name" required>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密碼" class="text" prop="pass" required>
                <el-input v-model="formLabelAlign.pass"></el-input>
            </el-form-item>
            </el-form>

            <div id="submit">
                <button @click="submitForm('labelPosition')">登入</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

#main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/login.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  background-color: rgb(0, 0, 0);
  height: 100vh;
}

#content{
    width: 300px;
    height: 300px;
    background-color:rgb(31, 31, 31);
    border-radius: 10px;
    color: white;
    padding: 40px;
    opacity:0.95;
}

h2 {
    font-size: 20px;
    padding: 10px 0;
}

#submit{
    display: flex;
    justify-content:center;
}

button{
    color: white;
    width: 200px;
    padding: 10px;
    margin-top: 15px;
    border-radius: 3px;
    background-color: rgb(1,188,212);
}

</style>

<script>
  export default {
    name: "Login",
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { required: true, message: '請輸入帳號', trigger: 'blur' },
            { min: 6, max: 12, message: '長度在 6-12 字元', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '請輸入密碼', trigger: 'blur' },
            { min: 6, max: 12, message: '長度在 6-12 字元', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // 檢查是否通過套件驗證
          if (valid) {
            // 呼叫後端 API

            // 寫入 local storage
            localStorage.setItem("authorization", this.formLabelAlign.name)

            // 跳轉到預設 user 畫面
            this.$router.push({ name: "User" });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>