<template>
  <div class="container">
    <div class="main">
      <!--首页轮播-->
      <Swiper :images="imgUrls"/>

      <!--区域九宫格-->
      <Grids :grids="grids"/>

      <!--推荐-->
      <div class="recommend">
        <div class="title">
          <h3>为您推荐</h3>
        </div>
        <Swiper :images="recommend"/>
      </div>

      <!--产品列表-->
      <productList :products="products"/>

    </div>


    <!--tab菜单-->
    <FooterTab />


    <i-toast id="toast"/>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper';
  import Grids from '@/components/grids';
  import productList from '@/components/productList';
  import FooterTab from '@/components/footerTab';
  import {$Toast} from '../../../static/iview/base/index'
  import fly from '../../utils/fly'

  export default {
    components: {
      Swiper,Grids,productList,FooterTab
    },
    data() {
      return {
        imgUrls: [{
          url: 'http://mall.wart9.com/upload/2018/4/9/a2b0b1a7b37c42c5979b70bbf0910929.jpg'
        }, {
          url: 'http://mall.wart9.com/upload/2018/4/9/4df75856f11e4872b24a089e16fd766c.jpg'
        }],
        grids:[[{
          name:'法国',
          icon:'http://mall.wart9.com/upload/2018/4/10/2f44c0469cc743618f6ef0279b709e0a.png'
        },{
          name:'智利',
          icon:'http://mall.wart9.com/upload/2018/4/10/95cc831a4fb440d8adf4cac7d7f33971.png'
        },{
          name:'西班牙',
          icon:'http://mall.wart9.com/upload/2018/4/10/d5c0fc13cca0425eb7a887590240c17d.png'
        },{
          name:'意大利',
          icon:'http://mall.wart9.com/upload/2018/4/10/322621860c734629bc20d5a1e267b2aa.png'
        }]],
        recommend:[{
          url: 'http://mall.wart9.com/upload/2018/8/26/41f25ecb8c514cc1a92b572b196d006b.jpg'
        },{
          url:'http://mall.wart9.com/upload/2018/8/26/1d432d96765343cdb15b07bdcf2997a1.jpg'
        },{
          url:'http://mall.wart9.com/upload/2018/4/10/2ff206a0087c4ff2913615b5fa03187a.jpg'
        },{
          url:'http://mall.wart9.com/upload/2018/8/26/2ece616eae194c778d014a839bcd0af2.jpg'
        }],
        products:[{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        }]
      }
    },
    onShow(){
      this.$nextTick(function () {
        this.$store.commit('switchTab','homepage');
      })
    },
    methods: {
      onGotUserInfo(res) {
        if (res.mp.detail.userInfo) {
          this.userInfo = res.mp.detail.userInfo
        } else {
          $Toast({
            content: '用户授权失败！',
            type: 'error'
          });
        }
      },
      getJsonData() {
        fly.get("/data/address.json").then((d) => {
          //输出请求数据
          console.log(d.data)
        }).catch(err => {
          console.log(err.status, err.message)
        })
      }
    }
  }
</script>

<style scoped>
  .title{
    text-align:center;
    margin:8px 0;
    font-size:16px;
  }
  .recommend{
    width:100%;
  }

</style>
