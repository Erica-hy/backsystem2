<template>
  <div id="editmember">
    <template>
 <el-input v-model="search" class='searchs' placeholder="请输入搜索内容" />
      <el-table :data="tables.slice((this.currpage-1)*this.pagesize,this.currpage*this.pagesize)"
                style="width: 100%"
                @row-click="openDetails"
                class="tableClass">
        <!-- @row-click="openDetails" 点击拿到当前行的id -->
        <el-table-column prop="name" label="name" width="120"></el-table-column>
        <el-table-column
          prop="age"
          label="age"
          width="180"
        ></el-table-column>
         <el-table-column
         v-if="false"
          prop="id"
          label="id"
          width="30"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="phone"
        ></el-table-column>
     <el-table-column>
          <el-row width="300">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="edit()"
            ></el-button>
            <el-button type="danger" icon="el-icon-delete" circle  @click="del()"></el-button>
          </el-row>
     </el-table-column>
      </el-table>
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
      <!-- 表单弹框 -->
      <el-dialog title="编辑成员" :visible.sync="dialogVisible" width="45%" :before-close="dialogCancel">
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
        <template slot="footer" class="dialog-footer">
          <el-button @click="dialogCancel">取 消</el-button>
          <el-button type="primary" @click="dialogSubmit"
            >确 定</el-button
          >
        </template>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import {user} from "../network/user.js";
export default {
  name: "editmember",
  data() {

    return {
      search:'',
      //当前的id
      listId:1,
      //当前的name
      listName:'',
      //当前的age
      listAge:0,
      //当前的phone
      listPhone:0,
      //table表的渲染数据
      tableData: [],
      dialogVisible: false,
      currpage:1,//默认开始页面
      pagesize:8,//每页的数据条数
      //输入的表单数据
      form: {
        id:"",
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
          {required:false,trigger:'blur'},
        ],
       age:[
          //编辑表单验证但非必填
          {type:"number",required:false,trigger:'blur',validate:(rule,value,callback)=>{
              let reg=/^[0-9]*$/;
              if(value!=""){
                if(reg.test(value)){
                      return callback(new Error("数字"));
                    }else{
                      return callback()
                      console.log(callback);

                    }
              }
            },
            message:"请输入数字"}
        ],
        phone:[
          {type:"number",required:false,trigger:'blur',validate:(rule,value,callback)=>{
              let reg=/^[0-9]*$/;
              if(value!=""){
                if(reg.test(value)){
                      return callback(new Error("数字"));
                    }else{
                      return callback()
                      console.log(callback);

                    }
              }
            },
            message:"请输入数字"}
        ],
      },
    };
  },
  mounted() {
    this.renderList();
  },
  computed: {
    tables: function () {
                        const search = this.search
                        if (search) {
                            return this.tableData.filter(dataNews => {
                                return Object.keys(dataNews).some(key => {
                                    return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                                })
                            })
                        }
                        return this.tableData
                    }
  },
  methods: {
    //提交重新渲染
    renderList() {
      user().then((res)=>{
      this.tableData = res.data;
    })
    },
    // 编辑
    edit() {
      this.dialogVisible = true;
    },
    //删除
    del(){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$Message({
            type: 'success',
            message: '删除成功!'
          });
           // 删除数据
          this.$axios.delete('/api/user/'+ this.listId).then((res)=>{this.renderList();
          }).catch((err)=>{console.log(err);
          })
        }).catch(() => {
          this.$Message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },

    // 表单提交
   dialogSubmit(dialogForm){
      this.dialogVisible = false
      //验证成功弹出
      this.$refs.dialogForm.validate((isPass)=>{
        if(isPass){
          this.$message.success({
            showClose: true,
            message:"修改成功",
            type:'success'
          });
          //将输入的表单数据传到后台
          if(this.form.name){
            this.formList.name=this.form.name
          }else{
            this.formList.name=this.listName
          }

          if(this.form.age){
            this.formList.age=this.form.age
          }else{
            this.formList.age=this.listAge
          }

          if(this.form.phone){
            this.formList.phone=this.form.phone
          }else{
            this.formList.phone=this.listPhone
          }

          // 编辑数据
          this.$axios.patch('/api/user/'+ this.listId,{
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
    //  获取ID
    openDetails(row) {
     this.listId = row.id //把当前的行数下的id赋值给listId
     this.listName = row.name
     this.listAge = row.age
     this.listPhone = row.phone
    },
    //分页-每页条数
    handleSizeChange(val){
      this.pagesize=val
    },
    //当前页
    handleCurrentChange(val){
      this.currpage=val;
    }
  }

};
</script>

<style lang="less">
@import url('../assets/css/form.css');
#editmember{
  margin: 0 auto;
}
</style>
