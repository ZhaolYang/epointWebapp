<template>
  <!-- 排名1 -->
    <div class="box" id="range1">
      <h2 class="component-title">排名1</h2>
      <div class="img-ct">
          <ul class="range-list">
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                  </div>
                  <span>2981</span>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                  </div>
                  <span>2981</span>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                  </div>
                  <span>2981</span>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                  </div>
                  <span>2981</span>
              </li>
              <li>
                  <label>公安局</label>
                  <div class="percent">
                      <div></div>
                  </div>
                  <span>2981</span>
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
        </div>
        <span>2981</span>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
        </div>
        <span>2981</span>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
        </div>
        <span>2981</span>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
        </div>
        <span>2981</span>
    </li>
    <li>
        <label>公安局</label>
        <div class="percent">
            <div></div>
        </div>
        <span>2981</span>
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

.range-list > li {
    height: 37px;
}

.range-list > li > label {
    float: left;
    width: 170px;
    line-height: 37px;
    text-align: center;
    color: #bcbcbc;
}

.range-list > li > .percent {
    float: left;
    margin-top: 8.5px;
    width: 260px;
    height: 20px;
    border-radius: 2px;
    background-color: #1b3464;
}

.range-list > li > .percent > div {
    width: 50%;
    height: 100%;
    border-radius: 2px;
    background-color: #f86464;
    transition: all .8s;
}

.range-list > li > span {
    float: left;
    width: 84px;
    line-height: 37px;
    font-size: 21px;
    color: #bcbcbc;
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
    }
  },
  mounted() {
  }
};
</script>

<style>
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
    width: 170px;
    line-height: 37px;
    text-align: center;
    color: #bcbcbc;
}

.range-list>li>.percent {
    float: left;
    margin-top: 8.5px;
    width: 260px;
    height: 20px;
    border-radius: 2px;
    background-color: #1b3464;
}

.range-list>li>.percent>div {
    width: 50%;
    height: 100%;
    border-radius: 2px;
    background-color: #f86464;
    transition: all .8s;
}

.range-list>li>span {
    float: left;
    width: 84px;
    line-height: 37px;
    font-size: 21px;
    color: #bcbcbc;
    text-align: center;
}
</style>
