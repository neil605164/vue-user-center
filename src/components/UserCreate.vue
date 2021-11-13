<template>
  <div id="edit-content">
    <div id="edit-info">
      <div id="edit-info-pedding">
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
            <el-button type="info">取消</el-button>
            <el-button type="success">確認</el-button>
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

#edit-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

#edit-info {
  width: 600px;
  background-color: rgb(36, 36, 36);
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  top: 45%;
}

#edit-info-pedding {
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
    };
  },
};
</script>