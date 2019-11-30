<template>
  <div id="memberlist">
    <template>
      <el-input v-model="search" class='searchs' placeholder="请输入搜索内容" />
      <el-table :data="tables.slice((this.currpage-1)*this.pagesize,this.currpage*this.pagesize)"
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
      <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currpage"
            :page-size="pagesize"
            background
            layout="prev, pager, next"
            :total="tableData.length">
          </el-pagination>

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
      tableData: [],
      currpage:1,//默认开始页面
      pagesize:8,//每页的数据条数
      dialogVisible: false,
    };
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
    //分页-每页条数
    handleSizeChange(val){
      this.pagesize=val
    },
    //当前页
    handleCurrentChange(val){
      this.currpage=val;
    }
  },
  mounted() {
    user().then((res)=>{
      this.tableData = res.data;
    })
  }

};
</script>

<style lang="less">
@import url('../assets/css/form.css');
#memberlist{
  margin: 0 auto;
}
.el-table__row{
  height: 65px;
}
</style>
