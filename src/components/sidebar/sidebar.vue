<template>
  <div class="sidebar">
    <ul>
      <li v-for="(item,i) in types" :key="i">
        <p class="lv1" :class="{active:selected===i}" @click="change(i)">
          <router-link :to="`/${item.name}`">{{item.name}}</router-link>
        </p>
        <ul v-show="selected===i" v-if="item.detail" class="drop">
          <li v-for="(item2, index) in item.detail" :key="index" class="lv2">
            <a v-bind:href="'#'+item2.name" :class="{active:lv2selected===index}" @click="lv2change(index)">{{item2.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected : 0,
      lv2selected: 0
    }
  },
  computed: {
    types () {
      return this.$store.state.types
    }
  },
  methods: {
    change(i) {
      this.selected = i;
    },
    lv2change(i) {
      this.lv2selected = i;
    }
  }
}
</script>

<style lang="scss">
  .lv1 {
    margin: 10px auto;
    font-size: 28px;
    color: #333;
    transition: all .2s;
    &.active {
      color: #409EFF;
      a {
        color: #409EFF;
      }
    }
  }
  .drop {
    .lv2 {
      margin: 6px auto;
      text-indent: 16px;
      font-size: 22px;
      color: #666;
      a{
        transition: all .2s;
        &.active,
        &:hover {
          color: #409EFF;
        }
      }
    }
  }
</style>


