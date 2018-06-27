<template>

    <div id="downBox">
      <div class="imgBox">
        <img class="img1" src="https://h5.m.jd.com/active/download/img/app_icon.png" alt="">
        <img class="img2" src="https://h5.m.jd.com/active/download/img/top_banner.png" alt="">
      </div>
      <div class="downBox1">
          <h3>多快好省</h3>
          <p>新人188元大礼包，手机京东专享</p>
          <router-link   class="btn" tag="div" to="">iPhone版本下载</router-link>
      </div>
    </div>
</template>

<script>


  export default {
        name: "Download",
      data(){
          return{
            biu:false
          }
      },
    }
</script>

<style scoped>
html,body,#downBox{
  height: 100%;
  width: 100%;

}

#downBox .imgBox{
    width: 100%;
    height: 45%;
    background: #fff;
    position: fixed;
  }
#downBox .img1{
  position: fixed;
  z-index: 100;
  width: 20%;
  height: 11%;
  top: 20%;
  left: 41%;
}
  #downBox .img2{
    width: 75%;
    height: 44%;
    position: fixed;
    left: 13%;
  }

  .downBox1{
    width: 100%;
    height: 55%;
    position: fixed;
    bottom: 0px;
    background: url("https://h5.m.jd.com/active/download/img/bottom_banner.png");
    text-align: center;
    padding-top: 10%;
    box-sizing: border-box;
    z-index: 50;
  }
  .downBox1 h3{
    color: #fff;
    font-size: 26px;
    margin-bottom: 3%;
  }
.downBox1 p{
  color: #fff;
  font-size: 18px;
  margin-bottom: 6%;
  font-weight: bold;

}
  .btn{
    width: 90%;
    height: 40px;
    background: #fff;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    color: #F23030;
    font-weight: bold;
  }
</style>
