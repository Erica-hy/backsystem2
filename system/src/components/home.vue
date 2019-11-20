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

        <el-aside width="200px">

          <el-menu @open="handleOpen" @close="handleClose" >
            <!-- 导航-首页 -->
            <el-menu-item index="1">
                <template slot="title">
                  <i class="el-icon-ship"></i>
                <span>首页</span>
                </template>
            </el-menu-item>
                <!-- 导航-成员管理 -->
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-help"></i>
               成员管理
                </template>
                        <el-menu-item index="2-1">成员列表</el-menu-item>
                        <el-menu-item index="2-2">编辑成员</el-menu-item>
             </el-submenu>
         </el-menu>
        </el-aside>
        <!-- main -->
        <el-main>
        <!-- 展开收起 -->
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </el-main>
      </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name:"home",
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },

}
</script>

<style lang="less" scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
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
