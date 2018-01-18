<template>
  <div class="echarts">
    <chart1/>
    <!-- 图表2 -->
    <chart2/>
    <chart3/>
    <chart4/>
  </div>
</template>

<script>
import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import chart4 from './chart4';
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
    
  },
  created() {
  },
  mounted() {
    
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4
  }
};
</script>


