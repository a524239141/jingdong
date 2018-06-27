<template>
    <div class="footer">
        <router-link to="/index/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/index/classify">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/index/find">
            <i class="iconfont icon-faxian"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/index/shopping">
            <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </router-link>
        <router-link to="/index/login">
            <i class="iconfont icon-denglu"></i>
            <span>未登录</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tabs"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    display: flex;
    box-shadow: 0px -2px 30px #ccc ;
    background: #fff;
  }
  a{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666873;
  }
  a span{
    color: #0e121f;
    font-size: 12px;
  }
  .router-link-active{
    color: red;
  }
  .router-link-active span{
    color: red;
  }
</style>
