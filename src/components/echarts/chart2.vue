<template>
  <!-- 图表1 -->
    <div class="box" id="chart2">
      <h2 class="component-title">柱状图</h2>
      <div class="img-ct">
        <div id="chart" ref="chart"></div>
      </div>
      <div class="see-code">
        <div class="btn-ct">
          <el-button type="primary" round @click="toggle">code</el-button>
        </div>
        <el-tabs v-if="showcode" v-model="activeName" type="border-card">
          <el-tab-pane label="HTML" name="first">
            <div v-marked class="html">
``` HTML
<div id="chart"></div>
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="CSS" name="second">
            <div v-marked class="css">
``` css
#chart {
  height: 300px;
}
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="Javascript" name="third">
            <div v-marked class="javascript">
``` javascript
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
```
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
require("echarts/lib/chart/bar");
require("echarts/lib/component/legend");
export default {
  data() {
    return {
      activeName: "first",
      showcode: false
    };
  },
  methods: {
    toggle() {
      this.showcode = !this.showcode;
    },
    initChart() {
      let chart = echarts.init(this.$refs.chart);
      chart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      });
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style lang="scss">
#chart2 {
  #chart {
    height: 300px;
  }
}
</style>
