<template>
  <div id="edit-screen">
    <div id="edit-content">
      <div id="edit-info">
        <h3>新增用戶</h3>
        <el-form
          :label-position="labelPosition"
          label-width="50px"
          :model="formLabelAlign"
        >
          <el-form-item
            label="權限"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.level"></el-input>
          </el-form-item>
          <el-form-item
            label="部門"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.depart"></el-input>
          </el-form-item>
          <el-form-item
            label="專案權限"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.permission"></el-input>
          </el-form-item>
          <el-form-item
            label="帳號"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.account"></el-input>
          </el-form-item>
          <el-form-item
            label="密碼"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.password"></el-input>
          </el-form-item>
          <el-form-item
            label="再次確認密碼"
            :rules="[{ required: true, message: '不能為空' }]"
          >
            <el-input v-model="formLabelAlign.doubleCheck"></el-input>
          </el-form-item>
          <div id="btn">
            <el-button type="info" @click="ShowCreateStatus">取消</el-button>
            <el-button type="success" @click="ShowCreateStatus">確認</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: white;
  font-size: 22px;
}

#edit-screen {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

#edit-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

#edit-info {
  width: 600px;
  background-color: rgb(36, 36, 36);
  border-radius: 5px;
  height: 450px;
  overflow-y: scroll;
  position: fixed;
  z-index: 1;
  top: 20%;
  margin-bottom: 30px;
  padding: 10px 0 0 10px;
}

.el-form >>> .el-form-item__label {
  color: white;
}

.el-form >>> .el-input {
  width: 580px;
}

.el-form >>> .el-button {
  margin-bottom: 10px;
}

#btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        account: "",
        password: "",
        doubleCheck: "",
        depart: "",
        permission: "",
        level: "",
      },
      showCreate: false,
    };
  },
  methods: {
    ShowCreateStatus() {
      this.$emit("EditshowEdited", this.showCreate);
    },
  },
};
</script>