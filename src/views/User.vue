<template>
  <div id="content">
    <div id="topic">
      <h2>會員列表</h2>
      <button id="btn-create">新增</button>
    </div>
    <div id="table">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="700"
          border
        >
          <el-table-column prop="account" label="帳號" width="180">
          </el-table-column>
          <el-table-column width="180" prop="status" label="狀態">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.status"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="authority" label="權限"> </el-table-column>
          <el-table-column prop="depart" label="部門"> </el-table-column>
          <el-table-column label="操作"> </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<style scoped>
#content {
  padding-left: 250px;
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

.el-table>>> thead tr {
  background-color: rgb(32, 32, 32) !important;
  color: #fff !important;
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
export default {
  name: "User",
  data() {
    return {
      form: {
        status: true,
      },
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
  },
};
</script>