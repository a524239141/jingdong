<template>
  <div class="footer">
    <router-link to="/hot"><i class="iconfont icon-Icon_hot"></i><span>热卖榜</span></router-link>
    <router-link to="/discont"><i class="iconfont icon-zhekou"></i><span>折扣榜</span></router-link>
    <router-link to="/event"><i class="iconfont icon-huodong"></i><span>活动榜</span></router-link>
  </div>
</template>
<script>
  export default {
    name: "Tab"
  }
</script>

<style scoped>
  .footer{position: fixed;bottom: 0px;display: flex;width: 100%;height:50px;background: rgba(255,255,255,0.8)}
  a{display: flex;flex: 1;align-items: center;flex-direction: column;justify-content: center;color:#666}
  .footer span{font-size: 12px;color:#666}
  .router-link-active{;color:white;background: lightcoral}

</style>
