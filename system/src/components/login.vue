<template>
  <div id="login">
    <div class="login-box">
      <div class="login-icon">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      form:{
        name
      }
    }
  },
}
</script>

<style lang="less" scoped>
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
  margin: 0 auto;
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
</style>
