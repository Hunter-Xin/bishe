<template>
  <div id="chart1" style="width: 100%; height: 100%" />
</template>
<script>
import * as echarts from "echarts"
require("echarts")
export default {
  watch: {
    chartData: {
      handler() {
        this.initData()
      },
      deep: true,
    },
  },
  mounted() {
    this.initData()
    window.addEventListener("resize", this.chartResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.chartResize)
  },

  methods: {
    setLineOptions() {
      // 基于准备好的dom，初始化echarts实例
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["年总收入", "年总成本"],
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          spiltLine: {
            show: false, //想要不显示网格线，改为false
          },
          data: ["2017", "2018", "2020", "2020"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "年总收入",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
          },
          {
            name: "年总成本",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
          },
        ],
      })
    },
    initData() {
      this.chart = echarts.init(this.$el)
      this.setLineOptions(this.chartData, {
        notMerge: true,
      })
    },
    chartResize() {
      this.chart.resize()
    },
  },
}
</script>
<style lang="scss" scoped>
#chart1 {
  box-sizing: border-box;
  padding: 20px;
}
</style>
