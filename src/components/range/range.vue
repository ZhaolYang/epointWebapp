<template>
  <div class="range">
      <range1/>
      <range2/>
  </div>
</template>

<script>
import range1 from './range1';
import range2 from './range2';
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
      range1,
      range2
  }
};
</script>