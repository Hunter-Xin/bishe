<template>
  <div id="chart2" style="width: 100%; height: 100%" />
</template>
<script>
import * as echarts from "echarts"
require("echarts")
export default {
  props: {
    charts2Date: {
      type: Array,
    },
    charts2Val: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  watch: {
    charts2Val: {
      handler() {
        this.initData()
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initData()
    })
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
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          bottom: 90,
        },
        dataZoom: [
          {
            type: "inside",
          },
          {
            type: "slider",
            dataBackground: {
              areaStyle: {
                color: "rgba(230, 31, 51, 1)",
                opacity: 0.31,
              },
            },
            backgroundColor: "rgba(230, 31, 51, 0)",
            borderColor: "transparent",
          },
        ],
        xAxis: {
          data: this.charts2Date,
          silent: false,
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          splitArea: {
            show: false,
          },
          axisLabel: {
            formatter: `{value}`,
            textStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            type: "bar",
            data: this.charts2Val,
            large: true,
            // color: "#ff9232",
            // itemStyle: {
            //   normal: {
            //     lineStyle: {
            //       color: "#ff9232",
            //     },
            //   },
            // },
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
#chart2 {
  box-sizing: border-box;
  padding: 20px;
}
</style>
