<template>
  <div id="login">
    <div class="login-box">
      <div class="login-icon">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="login-content">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="name">
            <el-input v-model="form.name" >
                <i slot="prefix" class="iconfont icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
             <el-input v-model="form.password" type="password" >
               <i slot="prefix" class="iconfont icon-icon2"></i>
             </el-input>
          </el-form-item>
          <div class="btn-box">
             <el-button type="primary" @click="submit()">登录</el-button>
             <el-button type="info">重置</el-button>
          </div>
       </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../network/login'
export default {
  name:"login",
  data() {
    return {
      form:{
        name:'admin',
        password:'123456'
      },
      loginData:{},
      rules:{
        name:[
          {required:true,message:"请输入名字",trigger:'blur'}
        ],
        password:[
          {required:true,message:"请输入密码",trigger:'blur'}
        ]
      }
    }
  },
  mounted() {
    login().then(res=>{
      this.loginData = res.data;
    })
  },
  methods: {
    //登录提交
    submit(){
       if(this.form.name&&this.form.password){
          var ifTrue = this.loginData.some((item,index)=>{
                if(item.name==this.form.name&&item.password==this.form.password){
                  return true;
                }
              })
              if(ifTrue) {
                this.$router.push('/home');
              } else {
                this.message(500)
              }
       }

    },
    //防抖函数
    debounce(delay){
        let timer =null;
           timer = setTimeout(() => {
                  clearTimeout(timer)
                  this.$message.warning({
                      showClose: true,
                      message: '账号或密码错误',
                      type: 'warning'
                    })
                }, delay)
    },
    message(delay){
      this.debounce(delay)
    },


  },
}
</script>
<style lang="less" scoped>
@import url('../assets/font/iconfont.css');
#login{
  height: 100%;
  background-color: #2b4b6b;
}

.login-box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
}

.login-icon{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 130px;
  height: 130px;
  background-color: #eee;
  transform: translate(0%,-50%);
  border-radius: 50%;
  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}

.login-content{
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
}

.btn-box{
  display: flex;
  justify-content: flex-end;
  .el-button{
    padding: 10px 15px;
  }
}

.alert{
  width: 30%;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
