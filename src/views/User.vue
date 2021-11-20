<template>
  <div id="content">
    <UserEdit @EditshowEdited="editShowEditStatus" v-if="showEdit" />
    <UserCreate @EditshowEdited="editShowCreateStatus" v-if="showCreate"/>
    <div id="topic">
      <h2>會員列表</h2>
      <button id="btn-create" @click="showCreate = !showCreate">新增</button>
    </div>
    <div id="table">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column min-width="150" prop="account" label="帳號">
          </el-table-column>
          <el-table-column prop="status" label="狀態">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.status"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="authority" label="權限"> </el-table-column>
          <el-table-column prop="depart" label="部門"> </el-table-column>
          <el-table-column min-width="180" label="操作">
            <div class="control">
              <div id="edit" class="padding" title="編輯" @click="showEdit = !showEdit">
                <font-awesome-icon icon="tools" class="size"/>
              </div>
              <div id="reset" class="padding" title="重設密碼">
                <font-awesome-icon icon="redo" class="size" />
              </div>
              <div id="delete" class="padding" title="刪除">
                <font-awesome-icon icon="trash-alt" class="size" />
              </div>
            </div>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<style scoped>
#content {
  padding-left: 250px;
}

.size {
  font-size: 20px;
  cursor: pointer;
}

.size:hover {
  font-size: 22px;
  cursor: pointer;
}

.size:active {
  font-size: 20px;
  cursor: pointer;
}

.control {
  display: flex;
}

.padding {
  padding: 10px;
}

#topic {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
}

#table {
  padding: 5px 20px;
}

h2 {
  padding: 5px 10px 5px 0px;
  color: rgb(206, 206, 206);
  font-size: 24px;
}

button {
  padding: 5px 20px;
  border-radius: 3px;
  color: rgb(0, 0, 0);
  margin: 0 5px;
}

#btn-create {
  background-color: rgb(36, 171, 212);
}

#btn-create:hover {
  background-color: rgb(41, 197, 245);
}

#btn-create:active {
  background-color: rgb(36, 171, 212);
}

.el-table >>> thead tr th {
  background-color: rgb(41, 41, 41) !important;
  color: #fff !important;
}

.el-table >>> .el-table__row {
  background-color: rgb(63, 63, 63) !important;
  color: #fff !important;
  height: 80px;
}

.el-table >>> td.el-table__cell {
  border-bottom: 1px ridge rgba(99, 99, 99, 0.6);
}

.el-table--enable-row-hover >>> .el-table__body tr:hover > td.el-table__cell {
  background-color: rgb(63, 63, 63) !important;
}

.el-table >>> th.el-table__cell.is-leaf {
  border-bottom: none !important;
}

.darkblack {
  background-color: rgb(32, 32, 32) !important;
  color: #fff !important;
}

.lightblack {
  background-color: rgb(49, 49, 49) !important;
  color: #fff !important;
}
</style>

<script>
import UserEdit from "../components/ＵserEdit.vue";
import UserCreate from "../components/UserCreate.vue";

export default {
  name: "User",
  data() {
    return {
      showEdit: false,
      showCreate: false,
      tableData: [
        {
          id: "1",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD3",
        },
        {
          id: "2",
          account: "王小虎",
          status: false,
          authority: "最高權限",
          depart: "RD4",
        },
        {
          id: "3",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD1",
        },
        {
          id: "4",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD2",
        },
        {
          id: "1",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD3",
        },
        {
          id: "2",
          account: "王小虎",
          status: false,
          authority: "最高權限",
          depart: "RD4",
        },
        {
          id: "3",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD1",
        },
        {
          id: "4",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD2",
        },
        {
          id: "1",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD3",
        },
        {
          id: "2",
          account: "王小虎",
          status: false,
          authority: "最高權限",
          depart: "RD4",
        },
        {
          id: "3",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD1",
        },
        {
          id: "4",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD2",
        },
        {
          id: "1",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD3",
        },
        {
          id: "2",
          account: "王小虎",
          status: false,
          authority: "最高權限",
          depart: "RD4",
        },
        {
          id: "3",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD1",
        },
        {
          id: "4",
          account: "王小虎",
          status: true,
          authority: "最高權限",
          depart: "RD2",
        },
      ],
    };
  },
  methods: {
    tableStyle(row) {
      console.log(row);

      if (row.rowIndex == 0) {
        return "darkblack";
      }

      return "lightblack";
    },
    editShowEditStatus(e) {
      this.showEdit = e
    },
    editShowCreateStatus(e) {
      this.showCreate = e
    },
  },
  components: {
    UserEdit,
    UserCreate,
  },
};
</script>