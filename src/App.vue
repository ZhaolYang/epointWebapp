<template>
  <div>
    <ul class="tab border-1px">
      <li class="tab-item">
        <router-link to="/index">首页</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/subpage">二级页</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/detail">详情页</router-link>
      </li>
    </ul>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
