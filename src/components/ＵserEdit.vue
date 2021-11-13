<template>
    <div id="edit-content">
        <div id="edit-info">
            <div id="edit-info-pedding">
                <h3>用戶資訊</h3>
                <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
                    <el-form-item label="權限">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="部門">
                        <el-input v-model="formLabelAlign.region"></el-input>
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
        top: 45%
    }

    #edit-info-pedding {
        padding: 10px 0 0 10px;
    }

    .el-form>>>.el-form-item__label {
        color: white;
    }

    .el-form>>>.el-input {
        width: 580px;
    }

    .el-form>>>.el-button {
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
                labelPosition: 'top',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                }
            };
        }
    };
</script>