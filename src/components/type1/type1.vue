<template>
  <div class="type1">
    <div class="box">
      <div class="img-ct">我是效果图</div>
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
    }
  },
  mounted() {}
};
</script>