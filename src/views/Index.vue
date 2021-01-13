<template>
  <dv-full-screen-container class="container">
    <div class="header">
      <dv-decoration-10 style="width:90%;height:5px;" />
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
      <dv-decoration-11 style="width:600px;height:60px;color: #fff"
        >数据可视化平台</dv-decoration-11
      >
      <dv-decoration-8 style="width:300px;height:50px;" />
      <dv-decoration-10 style="width:90%;height:5px;" />
    </div>
    <div class="main">
      <div class="main-center">
        <FlashCloud />
      </div>
      <div class="flex-col main-left">
        <div class="main-left1">
          <DynamicList />
          <dv-decoration-2 style="width:100%;height:5px;" />
        </div>
        <div class="main-left2">
          <Sinan />
        </div>
      </div>
      <div class="main-right">
        <Roll />
      </div>
      <div class="main-footer">
        <div class="main-footer1">
          <Water />
        </div>
        <div class="main-footer2">
          <div class="main-footer2-btn">
            <button class="btn" @click="change('CO2')">CO2</button>
            <button class="btn" @click="change('N2')">N2</button>
            <button class="btn" @click="change('H2S')">H2S</button>
            <button class="btn" @click="change('CH4')">CH4</button>
            <button class="btn" @click="change('PM')">PM2.5</button>
          </div>
          <Charts2 :charts2Val="charts2Val" :charts2Date="charts2Date" />
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import FlashCloud from "./compoents/flashCloud"
import Roll from "./compoents/roll"
// import Charts1 from "./compoents/echarts1"
import Charts2 from "./compoents/echarts2"
import DynamicList from "./compoents/dynamicList"
import Water from "./compoents/water"
import Sinan from "./compoents/sinan"
export default {
  components: {
    FlashCloud,
    Roll,
    // Charts1,
    Charts2,
    DynamicList,
    Water,
    Sinan,
  },
  data() {
    return {
      charts2Val: [],
      charts2Date: [],
      valType: "CO2",
    }
  },
  methods: {
    init() {
      this.getCharts(this.valType)
    },
    getCharts(e) {
      this.charts2Date = [],
      this.charts2Val = []
      this.$api
        .get("list")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            let item = res.data[i]
            this.charts2Date.push(item.create_time)
            this.charts2Val.push(item[e].toString())
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    change(e) {
      if(e === 'CO2') {
        this.valType = e
      }
      if(e === 'N2') {
        this.valType = e
      }
      if(e === 'H2S') {
        this.valType = e
      }
      if(e === 'CH4') {
        this.valType = e
      }
      if(e === 'PM') {
        this.valType = e
      }
      this.getCharts(this.valType)
    },
  },
  created() {
    this.init()
  },
}
</script>

<style lang="scss">
@import "../assets/css/index.scss";
@import "../assets/css/common.scss";
body {
  background-image: url("../assets/img/bj.jpg");
  background-size: cover;
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; */
}
/* body::-webkit-scrollbar {
  display: none
} */
.container {
  height: 100%;
}
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 10%;
}
.main {
  margin-top: 8%;
  box-sizing: border-box;
  height: 80%;
  padding: 0 10px 70px 10px;
  position: relative;
}
.main-left {
  width: 36%;
  height: 100%;
}
.main-left1 {
  width: 100%;
  flex: 3;
}
.main-left2 {
  position: relative;
  width: 100%;
  flex: 4;
}
.main-center {
  width: 28%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
}
.main-right {
  width: 36%;
  height: 50%;
  position: absolute;
  right: 10px;
  top: 0;
}
.main-footer {
  display: flex;
  width: 67%;
  height: 40%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 70px;
  right: 10px;
}
.main-footer1 {
  flex: 1;
  width: 70%;
  height: 70%;
  transform: translate(0%, 50%);
}
.main-footer2 {
  position: relative;
  flex: 2;
}
.main-footer2-btn {
  // position: absolute;
  // top: 0;
  // left: 180px;
}
.btn {
  border-radius: 4px;
  border: 1px solid #00f6ff;
  background: transparent;
  width: 50px;
  height: 30px;
  color: #ffffff;
}
</style>
