const express = require("express")
const app = express()
// 引入mongoose第三方操作数据库
const mongoose = require("mongoose")
// 跨域 访问本地服务器
app.use(require("cors")())
app.use(express.json())

app.get("/", async (req, res) => {
  res.send("2222")
})
// 连接数据库
mongoose
  .connect("mongodb://localhost/bishe", {
    useNewUrlParser: true, //避免“不推荐使用当前URL字符串解析器”警告
    useFindAndModify: true, //全局选项选择使用MongoDB驱动程序的功能
    useCreateIndex: true, //全局选项以选择使用Mongoose createIndex()
  })
  .then((res) => {
    console.log(11111)
  })
  .catch((err) => {
    console.log(err, 2222)
  })
// 创建集合规则
const bishe = new mongoose.Schema({
  create_time: String,
  dorm_id: Number,
  temperature: Number,
  light: Number,
  N2: Number,
  humidity: Number,
  H2S: Number,
  CH4: Number,
  CO2: Number,
  PM: Number,
})
// 规则创建集合
const Bishe = mongoose.model("Bishe", bishe, "bishe")

// // 新增
// app.post('/api/student', async(req, res) => {
//   const student = await Student.create(req.body)
//   res.send(student)
// })
// // 删除
// app.post('/api/del', async(req, res) => {
//   const del = await Student.findOneAndDelete(req.body)
//   res.send(del)
// })
// /**
//  * 查询
//  * find() 默认查询所有 模糊查询使用$regex
//  * options为配置选项 「i：忽略大小写；m：多行匹配模式；x：忽略非转义的空白字符； s：点号(.)元字符会匹配所有字符，包括换行符(\n)」
//  * fandOne：查找一个
//  */
// app.post('/api/find', async(req, res) => {
//   const find = await Student.find({ name: { $regex: req.body.name, $options: 'i'} })
//   res.send(find)
// })
/**
 * 更新
 * 更新一条 updateOne
 * 更新多个 updateMany
 */
// app.post('/api/updata', async(req, res) => {
//   const updata = await Student.updateOne(req.body[0], req.body[1])
//   res.send(updata)
// })
// 获取列表 find默认所有
app.get("/api/list", async (req, res) => {
  const list = await Bishe.find()
  res.send(list)
})

app.listen(3000, () => {
  console.log("sucess")
})
