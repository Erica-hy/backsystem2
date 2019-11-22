<template>
  <div id="home">
    <el-container id="content">
      <!-- 头部 -->
      <el-header>
        <p>后台管理系统</p>
      </el-header>
      <!-- 内容 -->
      <el-container>
        <!-- aside -->
        <el-aside  width="200px">
          <el-menu :default-active="this.$router.path" router>
            <!-- 导航-首页 -->
          <el-menu-item index="/home/homeChild">
            <i class="el-icon-ship"></i>
            <span slot="title">系统首页</span>
         </el-menu-item>
                <!-- 导航-成员管理 -->
              <el-submenu index="">
                <template slot="title">
                  <i class="el-icon-s-help"></i>
               <span>成员管理</span>
                </template>
                        <el-menu-item index="/home/MemberList">成员列表</el-menu-item>
                        <el-menu-item index="/home/EditMember">编辑成员</el-menu-item>
             </el-submenu>
         </el-menu>
        </el-aside>
        <!-- main -->
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name:"home",

}
</script>

<style lang="less" scoped>
#home,#content{
  height: 100%;
    p{
      margin: 0;
      padding: 0;
    }
}
  .el-header{
    background-color: #2b4b6b;
    color: #fff;
    line-height: 60px;

  }

  .el-aside {
    background-color: rgb(195, 213, 236);
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    text-align: center;
  }

</style>
