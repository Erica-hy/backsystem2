<template>
  <div id="addmember">
    <template>
      <div class="btn-box">
         <el-row>
            <el-button
              type="primary"
              @click="add"
            >添加成员</el-button>
          </el-row>
      </div>

      <el-table :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
                style="width: 100%"
                class="tableClass">
        <el-table-column prop="name" label="name" width="120"></el-table-column>
        <el-table-column
          prop="age"
          label="age"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="phone"
        ></el-table-column>
      </el-table>

      <!-- 表单弹框 -->
      <el-dialog title="添加成员" :visible.sync="dialogVisible" width="45%" :before-close="dialogCancel">
        <el-form ref="dialogForm" :model="form" label-width="250px" :rules="dialogRules">
          <el-form-item label="name" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="age" prop="age">
            <el-input v-model.number="form.age"></el-input>
          </el-form-item>
           <el-form-item label="phone" prop="phone">
            <el-input v-model.number="form.phone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogCancel">取 消</el-button>
          <el-button type="primary" @click="dialogSubmit"
            >确 定</el-button
          >
        </span>
      </el-dialog>
       <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currpage"
            :page-size="pagesize"
            background
            layout="prev, pager, next"
            :total="tableData.length"
            >
          </el-pagination>
    </template>
  </div>
</template>

<script>
import {user} from "../network/user.js";
export default {
  name: "AddMember",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      currpage:1,//默认开始页面
      pagesize:8,//每页的数据条数
      //输入的表单数据
      form: {
        name: "",
        age: "",
        phone:"",
      },
      //提交到后台的表单数据
      formList:{
          name: "",
          age: "",
          phone:"",
      },
      // 表单验证
      dialogRules:{
       name:[
          {required:true,message:'请输入name',trigger:'blur'},
        ],
       age:[
          {required:true,message:'请输入age',trigger:'blur'},
          {type:'number',message:'输入的必须是数字',trigger:'blur'}
        ],
        phone:[
          {required:true,message:'请输入phone',trigger:'blur'},
             {type:'number',message:'输入的必须是数字',trigger:'blur'}
        ],
      }
    };
  },
  mounted() {
    this.renderList()
  },
  methods: {
    //提交重新渲染
    renderList() {
      user().then((res)=>{
      this.tableData = res.data;
    })
    },
      //分页-每页条数
    handleSizeChange(val){
      this.pagesize=val
    },
    //当前页
    handleCurrentChange(val){
      this.currpage=val;
    },
    // 添加
    add() {
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
          //将输入的表单数据传到后台
          this.formList.name=this.form.name
          this.formList.age=this.form.age
          this.formList.phone=this.form.phone
          // 向后台传递数据
          this.$axios.post('/api/user/',{
              "name":this.formList.name,
              "age":this.formList.age,
              "phone": this.formList.phone
          }).then((res)=>{this.renderList();
          }).catch((err)=>{console.log(err);
          })
         //表单重置
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
@import url('../assets/css/form.css');
#addmember{
  margin: 0 auto;
}
.el-table__row{
  height: 65px;
}
</style>
