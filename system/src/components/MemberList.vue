<template>
  <div id="memberlist">
      <template>
    <el-table
      :data="tableData[0]"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="first_name"
        label="FirstName"
        width="180">
      </el-table-column>
      <el-table-column
        prop="last_name"
        label="LastName"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email">
      </el-table-column>
    </el-table>
  </template>
  </div>
</template>

<script>
import {user} from '../network/user.js'
export default {
  name:"memberlist",
  data() {
        return {
          tableData:[]
        }
      },
  mounted() {
    user().then(
      (res)=>{
      this.tableData.push(res.data)

      }
    )
  },
}
</script>

<style lang="less">
#memberlist{
  width: 90%;
  margin: 0 auto;
}
</style>
