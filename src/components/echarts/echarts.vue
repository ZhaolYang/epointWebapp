<template>
  <div class="echarts">
    <div class="box" data-title="图表1">
      <h2 class="component-title">饼图</h2>
      <div class="img-ct">
        <div id="chart1" ref="chart1"></div>
      </div>
      <div class="see-code">
        <div class="btn-ct">
          <el-button type="primary" round @click="toggle('component1')">code</el-button>
        </div>
        <el-tabs v-if="component1.showcode" v-model="component1.activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="HTML" name="first">
            <div v-marked class="html">
``` HTML
<p>1111</p>
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="CSS" name="second">
            <div v-marked class="css">
``` css
p > a {
  color: #fff;
}
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="Javascript" name="third">
            <div v-marked class="javascript">
``` javascript
for(var i=0;i<10;i++){
  console.log(i);
  console.log("111");
}
```
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      
      
    </div>
    <div class="box">组件2</div>
    <div class="box">组件3</div>
    <div class="box">组件4</div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
export default {
  data() {
    return {
      component1: {
        activeName: "first",
        showcode: false
      }
    };
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    toggle(obj) {
      this[obj].showcode = !this[obj].showcode;
    },
    initChart() {
      let chart1 = echarts.init(this.$refs.chart1);
      chart1.setOption({
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
  created() {
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style lang="scss">
  #chart1 {
    height: 300px;
  }
</style>
