<template>
  <div class="app">
    <div class="header">组件库</div>
    <div class="main">
      <div class="sidebar-ct">
        <div class="sidebar">
          <!-- <router-link to="/type1">Go to type1</router-link>
          <router-link to="/type2">Go to type2</router-link> -->
          <sidebar/>
        </div>
      </div>
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store/index';
import sidebar from './components/sidebar/sidebar';

export default {
  store,
  data() {
    return {
      
    }
  },
  created() {
    // console.log(this.$store)
  },
  components: {
    sidebar
  }
}
</script>


<style lang="scss" scoped>
.app {
  box-sizing: border-box;
  padding-top: 61px;
  height: 100vh;
  background: #fff;
  .header {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 0 0px rgba(0,0,0,.5);
    background-color: #fff;
  }
  .main {
    position: relative;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;
    .sidebar-ct {
      position: fixed;
      top: 61px;
      left: 0;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #eee;
      .sidebar {
        width: 260px;
        padding: 40px 20px 60px 60px;
      }
    }
    .content {
      position: relative;
      padding: 2.2em 0;
      max-width: 600px;
      margin: 0 auto;
      padding-left: 60px;
    }
  }
}
</style>
