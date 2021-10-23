<template>
  <div id="content">
    <div id="topic">
      <h2>會員列表</h2>
      <button id="btn-create">新增</button>
    </div>
    <div id="table">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID">
          </el-table-column>
          <el-table-column min-width="120" prop="depart" label="部門代號"> </el-table-column>
          <el-table-column min-width="120" prop="depart_name" label="部門名稱"> </el-table-column>
          <el-table-column min-width="180" label="操作">
            <div class="control">
              <div id="edit" class="padding">
                <font-awesome-icon icon="tools" class="size" />
              </div>
              <div id="delete" class="padding">
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
export default {
  name: "Department",
  data() {
    return {
      form: {
        status: true,
      },
      tableData: [
        {
          id: "1",
          depart: "RD3",
          depart_name: "研發三處",
        },
        {
          id: "2",
          depart: "RD4",
          depart_name: "研發四處",
        },
        {
          id: "3",
          depart: "RD1",
          depart_name: "研發一處",
        },
        {
          id: "4",
          depart: "RD2",
          depart_name: "研發二處",
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