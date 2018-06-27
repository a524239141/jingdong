<template>
    <div>
      <router-view></router-view>
      <tabs v-if="biu"></tabs>
    </div>
</template>

<script>
  import Tabs from '../base/Tabs'

  export default {
        name: "index",
        components:{
          Tabs
          // Tabs,Headers
        },
        data() {
          return {
            biu: true
          }
        }
    }
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button,input{
    -webkit-appearance: none;
  }
  html,body,#app{
    background: #F6F6F6;
    width: 100%;
  }
</style>
