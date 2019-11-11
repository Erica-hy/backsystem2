<template>
  <div id="login">
    <div class="login-box">
      <div class="login-icon">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="login-content">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.name" >
                <i slot="prefix" class="iconfont icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
             <el-input v-model="form.password" type="password">
               <i slot="prefix" class="iconfont icon-icon2"></i>
             </el-input>
          </el-form-item>
          <div class="btn-box">
             <el-button type="primary">登录</el-button>
             <el-button type="info">重置</el-button>
          </div>
       </el-form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      form:{
        name:'',
        password:''
      }
    }
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
</style>
