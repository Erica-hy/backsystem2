<template>
  <div id="editmember">
    <template>
      <el-table :data="tableData[0]" style="width: 100%">
        <el-table-column prop="id" label="id" width="120"></el-table-column>
        <el-table-column
          prop="first_name"
          label="FirstName"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="last_name"
          label="LastName"
          width="180"
        ></el-table-column>
        <el-table-column prop="email" label="email"></el-table-column>
        <el-table-column width="150">
          <el-row>
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="edit"
            ></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-row>
        </el-table-column>
      </el-table>
      <!-- 表单弹框 -->
      <el-dialog title="编辑成员" :visible.sync="dialogVisible" width="45%" :before-close="dialogCancel">
        <el-form ref="dialogForm" :model="form" label-width="250px" :rules="dialogRules">
          <el-form-item label="id:" prop="id">
            <el-input v-model.number="form.id"></el-input>
          </el-form-item>
          <el-form-item label="FirstName" prop="FirstName">
            <el-input v-model="form.FirstName"></el-input>
          </el-form-item>
           <el-form-item label="LastName" prop="LastName">
            <el-input v-model="form.LastName"></el-input>
          </el-form-item>
           <el-form-item label="email" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogCancel">取 消</el-button>
          <el-button type="primary" @click="dialogSubmit"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import { user } from "../network/user.js";
export default {
  name: "editmember",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        id: "",
        FirstName: "",
        LastName:"",
        email:""
      },
      // 表单验证
      dialogRules:{
        id:[
          {required:true,message:'请输入id',trigger:'blur'},
          {type:'number',message:'输入的必须是数字',trigger:'blur'}
        ],
        FirstName:[
          {required:true,message:'请输入FirstName',trigger:'blur'}
        ],
        LastName:[
          {required:true,message:'请输入LastName',trigger:'blur'}
        ],
        email:[
          {required:true,message:'请输入email',trigger:'blur'},
          {type:'email',message:'请输入正确的邮箱',trigger:'blur'}
        ]
      }
    };
  },
  mounted() {
    user().then(res => {
      this.tableData.push(res.data);
    });
  },
  methods: {
    // 编辑
    edit() {
      this.dialogVisible = true;
    },
    // 表单提交
   dialogSubmit(dialogForm){
      this.dialogVisible = false
      this.$refs.dialogForm.validate((isPass)=>{
        if(isPass){
          this.$message.success({
            showClose: true,
            message:"提交成功",
            type:'success'
          });
          this.$refs.dialogForm.resetFields()

        }else{
         this.dialogVisible = true
         this.$message.warning({
           showClose: true,
           message:"请按照正确的格式填写",
           type:'warning'
         })
        }
      })
    },
    //表单取消
    dialogCancel(dialogForm){
      this.dialogVisible = false
      this.$refs.dialogForm.resetFields()
    },
  }

};
</script>

<style lang="less">
#memberlist {
  margin: 0 auto;
}

.el-form-item{
  display: flex;
  justify-content: center;
}

.el-form-item__label{
  width: 98px !important;
  text-align: center;
  margin-left: 0;
}

.el-form-item__content{
  margin-left: 0 !important;
}
</style>
