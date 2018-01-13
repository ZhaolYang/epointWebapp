<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in types">
        <a href="">
          <router-link :to="`/${item.name}`">{{item.name}}</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    types () {
      return this.$store.state.types
    }
  }
}
</script>

