<template>
<div class="rank">
  <my-head></my-head>
  <router-view></router-view>
  <tab></tab>
</div>
</template>

<script>
  import Tab from './Tab'
  import MyHead from  './MyHead'
    export default {
        name: "Rank",
      components: {
        Tab,MyHead
      }
    }
</script>

<style scoped>
  html,body,.rank{height: 100%;}
  *{padding:0;margin:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
</style>
