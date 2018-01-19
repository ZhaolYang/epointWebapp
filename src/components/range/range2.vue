<template>
  <!-- 排名2 -->
    <div class="box" id="range2">
      <h2 class="component-title">排名2</h2>
      <div class="img-ct">
          <ul class="range-list">
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                      <span>2981</span>
                  </div>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                      <span>2981</span>
                  </div>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                      <span>2981</span>
                  </div>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                      <span>2981</span>
                  </div>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                      <span>2981</span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="see-code">
        <div class="btn-ct">
          <el-button type="primary" round @click="toggle">code</el-button>
        </div>
        <el-tabs v-if="showcode" v-model="activeName" type="border-card">
          <el-tab-pane label="HTML" name="first">
            <pre v-marked class="html">
``` HTML
<ul class="range-list">
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
            <span>2981</span>
        </div>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
            <span>2981</span>
        </div>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
            <span>2981</span>
        </div>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
            <span>2981</span>
        </div>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
            <span>2981</span>
        </div>
    </li>
</ul>
```
            </pre>
          </el-tab-pane>
          <el-tab-pane label="CSS" name="second">
            <div v-marked class="css">
``` css
.range-list {
    margin: 10px auto;
    width: 515px;
    background-color: #eee;
}

.range-list>li {
    height: 37px;
}

.range-list>li>label {
    float: left;
    width: 70px;
    line-height: 37px;
    text-align: center;
    color: #bcbcbc;
}

.range-list>li>.percent {
    float: left;
    margin-top: 8.5px;
    width: 445px;
    height: 20px;
    border-radius: 2px 10px 10px 2px;
    background-color: #1b3464;
}

.range-list>li>.percent>div {
    float: left;
    box-sizing: border-box;
    padding-left: 60px;
    width: 80%;
    height: 100%;
    border-radius: 2px 10px 10px 2px;
    background-color: #f86464;
    transition: all .8s;
}

.percent>span {
    float: left;
    margin-left: -60px;
    width: 60px;
    line-height: 20px;
    font-size: 15px;
    color: #fff;
    text-align: center;
}
```
            </div>
          </el-tab-pane>
          <el-tab-pane label="Javascript" name="third">
            <div v-marked class="javascript">
``` javascript
//没有js哦
```
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
require("echarts/lib/chart/pie");
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
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
#range2 {
  .range-list {
    margin: 10px auto;
    width: 515px;
    background-color: #eee;
  }

  .range-list > li {
    height: 37px;
  }

  .range-list > li > label {
    float: left;
    width: 70px;
    line-height: 37px;
    text-align: center;
    color: #bcbcbc;
  }

  .range-list > li > .percent {
    float: left;
    margin-top: 8.5px;
    width: 445px;
    height: 20px;
    border-radius: 2px 10px 10px 2px;
    background-color: #1b3464;
  }

  .range-list > li > .percent > div {
    float: left;
    box-sizing: border-box;
    padding-left: 60px;
    width: 80%;
    height: 100%;
    border-radius: 2px 10px 10px 2px;
    background-color: #f86464;
    transition: all 0.8s;
  }

  .percent > span {
    float: left;
    margin-left: -60px;
    width: 60px;
    line-height: 20px;
    font-size: 15px;
    color: #fff;
    text-align: center;
  }
}
</style>
