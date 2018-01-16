<template>
  <div class="type1">
    <div class="box">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
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
    <div class="box">组件2</div>
    <div class="box">组件3</div>
    <div class="box">组件4</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeName2: 'first'
    };
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
        // console.log(tab, event);
      }
  },
  mounted() {
  }
}
</script>


<style lang="scss">
  .type1 {
    .box {
      margin: 40px auto;
      width: 400px;
      height: 400px;
      box-sizing: border-box;
      border: 1px solid #eee;
    }
  }
</style>

