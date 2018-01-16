<template>
  <div class="type1">
    <div class="box">
      <div v-marked>
          <p>sdasdas</p>
      </div>
    </div>
    <div class="box">组件2</div>
    <div class="box">组件3</div>
    <div class="box">组件4</div>
  </div>
</template>

<script>
export default {
  created() {
  }
}
</script>


<style lang="scss" scoped>
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

