<template>
  <!-- 图表1 -->
    <div class="box" id="chart1">
      <h2 class="component-title">饼图</h2>
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
<div id="chart"></div><br/>
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="CSS" name="second">
            <div v-marked class="css">
``` css
#chart1 {
  height: 300px;
}
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="Javascript" name="third">
            <div v-marked class="javascript">
``` javascript
options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <"+"br>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      }
```
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
require('echarts/lib/chart/pie');
require('echarts/lib/component/legend');
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
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
#chart {
  height: 300px;
}
</style>
