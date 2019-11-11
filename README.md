## 配置json server

百度Jsonserver 在github上找到步骤

1. 安装jsonserver
npm install -g json-server

2. 初始化项目
创建jsonserver文件夹并cd到此文件夹
npm init

3. 在jsonserver文件夹里
npm i json-server --save

4. 修改package.json文件
    "scripts": {
    "testserver": "json-server --watch db.json"
    },

5. 创建一个db.json
注意：json格式的文件key 和属性值都要用双引号

```
{
  "user": [
    {
      "id": 1,
      "companyId":1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "companyId":2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "companyId":3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ],
  "companies":[
      {
        "id":1,
        "name":"google"
      },
      {
        "id":2,
        "name":"apple"
      },
      {
        "id":3,
        "name":"hauwei"
      }
      ]
}
```

执行npm run testserver

//获取所有同户信息
http://localhost:3000/user

//获取所有id为1的用户信息
http://localhost:3000/user/1

//获取公司的所有信息
http://localhost:3000/companies

//获取单个公司的信息
http://localhost:3000/companies/2

//获取所有公司id为3的用户
http://localhost:3000/companies/3/user

//根据公司名字获取信息
http://localhost:3000/companies?name=apple

//根据多个名字获取公司信息
http://localhost:3000/companies?name=apple&name=huawei

//获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

//name升序排序 
http://localhost:3000/companies?_sort=name&_order=asc

#### 直接使用jsonplaceholder

在jsonserver官网上搜索remote schema
在package.json文件的script里加
 "json:server:remote":"json-server http://jsonplaceholder.typicode.com/db" 

运行后可以直接使用了给好的接口

## 搭建脚手架及导航
1. vue init webpack （项目名）
2. npm init
3. 在component文件里创建几个组件
4. 在router文件的index.js的文件里配置路由
5. 在app.vue（主组件）里写组件嵌套
6. 在index.html里引入外部bootstrap.js（百度其cdn）

