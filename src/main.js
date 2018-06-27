
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//1.插入路由组件
import VueRouter from 'vue-router'

import Home from './components/Home'
// import Classify from './components/Classify'
import Find from './components/Find'
import Shopping from './components/Shopping'
import LogIn from './components/LogIn'
// import Cate from  './components/Cate'
// import Download from  './components/Download'
// import Live from './base/Live'
import Index from './components/Index'
import Classify from "./components/Classify"






//分类导入
// import Found from './components/Found'
// import Detail from './base/Detail'
// import One from './components/One'
// import Bottom from './base/Bottom'







// import  Rank from  './base/Rank'
// import  Hot from './components/Hot'
// import  Discont from './components/Discont'
// import  Event from  './components/Event'
// import  Water from  './components/Water'
// import  Phone from  './components/Phone'
// import  Check from  './components/Check'
// import  Detail from  './components/Detail'
// import  DetailPhone from  './components/DetailPhone'
// import  DetailCheck from  './components/DetailCheck'
// import  Cross from  './components/Cross'
// import  Eat from  './components/Eat'
// import  Snake from  './components/Snake'
// import Live from  './base/Live'
// import  Home from  './components/Home'
// import  Desigenr from './base/Desigenr'
// import DesHome from './components/DesHome'

// 1.导入swiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
//2.使用swiper轮播插件
Vue.use(VueAwesomeSwiper);

//2.使用路由
Vue.use(VueRouter);


// 3.创建路由对象

const router=new VueRouter({
      routes:[
        // {path:'/home',component:Home},
        // {path:'/classify',component:Classify},
        // {path:'/find',component:Find},
        // {path:'/shopping',component:Shopping},
        // {path:'/login',component:LogIn},
        // {path:'/index',component:Index},
        // {path:'/',component:Index},
        // {path:'/cate',component:Cate},
        // {path:'/download',component:Download},
        // {path:'/live',component:Live},
        //加入分类页
        {path:'/',redirect:'/Index'},
        // {path:'/bottom',component:Bottom,name:'bottom'},
        // {path:'/detail',component:Detail,name:'detail'},
        // {path:'/buy',component:Buy,name:'buy'},
        {path:'/index',component:Index,children:[
            {path:'home',component:Home},
            {path:'classify',component:Classify,
            //     {path:'one',component:One},
            //     {path:'',redirect:'one'}
                },
            {path:'find',component:Find},
            {path:'shopping',component:Shopping},
            {path:'login',component:LogIn},
            {path:'',component:Home}
          ]
        },
        //加入分页
        // {path:'/hot',component:Hot,children:[
        //     {path:'water',component:Water},
        //     { path:'phone',component:Phone},
        //     { path:'check',component:Check},
        //     {path:'',redirect:'water'}]},
        // {path:'/discont',component:Discont,children:[
        //     {path:'water',component:Water},
        //     { path:'phone',component:Phone},
        //     { path:'check',component:Check},
        //     {path:'',redirect:'water'}]},
        // {path:'/event',component:Event,children:[
        //     {path:'cross',component:Cross},
        //     { path:'eat',component:Eat},
        //     { path:'snake',component:Snake},
        //     {path:'',redirect:'cross'}]},
        // {path:'/detail/:bid',component:Detail,name:'detail'},
        // {path:'/detailp/:bid',component:DetailPhone,name:'detailp'},
        // {path:'/detailc/:bid',component:DetailCheck,name:'detailc'},
        // {path:'/',redirect:'/hot'},
        // {path:'/home',component:Home},
        // {path:'/women',component:Home},
        // {path:'/man',component:Home},
        // {path:'/classify',component:Home},
        // {path:'',redirect:'home'},
        // {path:'/deshome',component:DesHome},
        // {path:'/des',component:DesHome},
        // {path:'/jdx',component:DesHome},
        // {path:'/',redirect:'deshome'},



      ]
});
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //4 挂载路由组件
  router
});
